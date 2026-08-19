import datetime
from database import SessionLocal, init_db, User, Level, Lesson, Sign, Institution, InstitutionStaff, Certificate, Quiz

def seed():
    init_db()
    db = SessionLocal()

    # Clear existing
    db.query(Certificate).delete()
    db.query(InstitutionStaff).delete()
    db.query(Institution).delete()
    db.query(Quiz).delete()
    db.query(Sign).delete()
    db.query(Lesson).delete()
    db.query(Level).delete()
    db.query(User).delete()
    db.commit()

    # Seed Admin / Learner User
    user1 = User(
        name="Dr. Rajesh Kumar",
        email="rajesh@signbridge.in",
        password_hash="pbkdf2:sha256:demo_hash",
        role="learner",
        preferred_language="en",
        xp=1240,
        streak=7
    )
    user2 = User(
        name="Nurse Priya Nair",
        email="priya@cityhospital.in",
        password_hash="pbkdf2:sha256:demo_hash",
        role="institution_staff",
        preferred_language="ml",
        xp=890,
        streak=5
    )
    db.add_all([user1, user2])
    db.commit()

    # Seed Levels
    levels = [
        Level(level_number=1, title="Level 1: Basic ISL Words", description="Greetings, Everyday Needs, Family & People", required_score=70),
        Level(level_number=2, title="Level 2: Basic Sentences", description="Simple Communication & 2-3 Word Phrases", required_score=75),
        Level(level_number=3, title="Level 3: Domain-Based ISL", description="Healthcare, Police, Banking, Govt & Education", required_score=80),
        Level(level_number=4, title="Level 4: Real Conversations", description="Simulated Workplace Roleplay Dialogues", required_score=85),
    ]
    db.add_all(levels)
    db.commit()

    # Seed Signs
    signs = [
        Sign(id="w-hello", word="Hello / Namaste", english_meaning="Hello", tamil_meaning="வணக்கம்", malayalam_meaning="നമസ്കാരം", category="greetings", level="Level 1"),
        Sign(id="w-thank-you", word="Thank You", english_meaning="Thank You", tamil_meaning="நன்றி", malayalam_meaning="நന്ദി", category="greetings", level="Level 1"),
        Sign(id="w-help", word="Help", english_meaning="Help", tamil_meaning="உதவி", malayalam_meaning="സഹായം", category="emergency", level="Level 1"),
        Sign(id="w-water", word="Water", english_meaning="Water", tamil_meaning="தண்ணீர்", malayalam_meaning="വെള്ളം", category="food", level="Level 1"),
        Sign(id="w-food", word="Food", english_meaning="Food", tamil_meaning="உணவு", malayalam_meaning="ഭക്ഷണം", category="food", level="Level 1"),
        Sign(id="w-doctor", word="Doctor", english_meaning="Doctor", tamil_meaning="மருத்துவர்", malayalam_meaning="ഡോക്ടർ", category="healthcare", level="Level 3"),
        Sign(id="w-hospital", word="Hospital", english_meaning="Hospital", tamil_meaning="மருத்துவமனை", malayalam_meaning="ആശുപത്രി", category="healthcare", level="Level 3"),
        Sign(id="w-medicine", word="Medicine", english_meaning="Medicine", tamil_meaning="மருந்து", malayalam_meaning="മരുന്ന്", category="healthcare", level="Level 3"),
    ]
    db.add_all(signs)
    db.commit()

    # Seed Institution
    inst = Institution(
        name="Government General Hospital, Chennai",
        location="Chennai, Tamil Nadu",
        institution_type="Healthcare",
        is_service_point_ready=True
    )
    db.add(inst)
    db.commit()

    # Seed Staff
    staff1 = InstitutionStaff(
        institution_id=inst.id,
        user_id=user1.id,
        employee_name="Dr. Rajesh Kumar",
        department="Emergency Casualty",
        progress=100,
        score=89.5,
        is_certified=True
    )
    staff2 = InstitutionStaff(
        institution_id=inst.id,
        user_id=user2.id,
        employee_name="Nurse Priya Nair",
        department="Outpatient Clinic",
        progress=72,
        score=81.0,
        is_certified=False
    )
    db.add_all([staff1, staff2])
    db.commit()

    # Seed Certificate
    cert = Certificate(
        user_id=user1.id,
        certificate_id="SB-ISL-2026-8942",
        score=89.5,
        issued_date=datetime.date.today().strftime("%d %B %Y"),
        verification_code="SB-VERIFY-8942-CH"
    )
    db.add(cert)
    db.commit()

    db.close()
    print("SignBridge SQLite Database successfully seeded!")

if __name__ == "__main__":
    seed()

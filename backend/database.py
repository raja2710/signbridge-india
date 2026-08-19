import os
import datetime
from sqlalchemy import create_engine, Column, Integer, String, Text, Float, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship

DB_PATH = os.path.join(os.path.dirname(__file__), "signbridge.db")
DATABASE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    password_hash = Column(String(200), nullable=False)
    role = Column(String(30), default="learner") # learner, institution_staff, trainer, admin
    preferred_language = Column(String(10), default="en") # en, ta, ml
    xp = Column(Integer, default=120)
    streak = Column(Integer, default=3)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    practice_attempts = relationship("PracticeAttempt", back_populates="user")
    quiz_results = relationship("QuizResult", back_populates="user")
    certificates = relationship("Certificate", back_populates="user")

class Level(Base):
    __tablename__ = "levels"

    id = Column(Integer, primary_key=True, index=True)
    level_number = Column(Integer, unique=True, nullable=False)
    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    required_score = Column(Integer, default=70)

class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)
    level_id = Column(Integer, ForeignKey("levels.id"))
    title = Column(String(150), nullable=False)
    description = Column(Text, nullable=True)
    domain = Column(String(50), default="general")
    order_number = Column(Integer, default=1)

class Sign(Base):
    __tablename__ = "signs"

    id = Column(String(50), primary_key=True, index=True)
    word = Column(String(100), nullable=False)
    english_meaning = Column(Text, nullable=False)
    tamil_meaning = Column(Text, nullable=False)
    malayalam_meaning = Column(Text, nullable=False)
    category = Column(String(50), default="greetings")
    level = Column(String(20), default="Level 1")
    media_url = Column(String(255), nullable=True)
    source = Column(String(150), default="Verified ISL Educator Resource")
    license = Column(String(100), default="Creative Commons / Educational Use")
    verification_status = Column(String(30), default="Verified")

class PracticeAttempt(Base):
    __tablename__ = "practice_attempts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    sign_id = Column(String(50), ForeignKey("signs.id"))
    score = Column(Float, default=85.0)
    confidence = Column(Float, default=0.92)
    feedback = Column(Text, default="Good hand posture and movement velocity.")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="practice_attempts")

class Quiz(Base):
    __tablename__ = "quizzes"

    id = Column(Integer, primary_key=True, index=True)
    lesson_id = Column(Integer, nullable=True)
    question = Column(Text, nullable=False)
    question_type = Column(String(30), default="identify") # identify, match, sentence
    options_json = Column(Text, nullable=False)
    correct_answer = Column(String(100), nullable=False)

class QuizResult(Base):
    __tablename__ = "quiz_results"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    quiz_id = Column(Integer, ForeignKey("quizzes.id"))
    score = Column(Float, default=100.0)
    completed_at = Column(DateTime, default=datetime.datetime.utcnow)

    user = relationship("User", back_populates="quiz_results")

class Certificate(Base):
    __tablename__ = "certificates"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    certificate_id = Column(String(50), unique=True, nullable=False)
    score = Column(Float, default=88.5)
    issued_date = Column(String(30), nullable=False)
    verification_code = Column(String(50), nullable=False)

    user = relationship("User", back_populates="certificates")

class Institution(Base):
    __tablename__ = "institutions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    location = Column(String(100), nullable=False)
    institution_type = Column(String(50), default="Hospital") # Hospital, Police Station, Bank, Govt Office, School
    is_service_point_ready = Column(Boolean, default=True)

class InstitutionStaff(Base):
    __tablename__ = "institution_staff"

    id = Column(Integer, primary_key=True, index=True)
    institution_id = Column(Integer, ForeignKey("institutions.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    employee_name = Column(String(100), nullable=False)
    department = Column(String(100), default="Reception")
    progress = Column(Integer, default=100) # percentage
    score = Column(Float, default=89.0)
    is_certified = Column(Boolean, default=True)

def init_db():
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

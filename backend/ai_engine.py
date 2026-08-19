import random
import math

# Demo AI Sign dictionary with verified ISL landmarks and multilingual definitions
ISL_SIGN_DICTIONARY = {
    "hello": {
        "word": "Hello / Namaste",
        "english": "Hello",
        "tamil": "வணக்கம்",
        "malayalam": "നമസ്കാരം",
        "confidence_base": 0.94,
        "feedback": "Great arm height and smooth forehead arc wave.",
        "category": "greetings"
    },
    "thank_you": {
        "word": "Thank You",
        "english": "Thank You",
        "tamil": "நன்றி",
        "malayalam": "നന്ദി",
        "confidence_base": 0.91,
        "feedback": "Fingertip-to-chin touch is accurate. Forward sweep is clean.",
        "category": "greetings"
    },
    "help": {
        "word": "Help",
        "english": "Help",
        "tamil": "உதவி",
        "malayalam": "സഹായം",
        "confidence_base": 0.89,
        "feedback": "Left open palm base with right thumbs-up lift is well aligned.",
        "category": "emergency"
    },
    "water": {
        "word": "Water",
        "english": "Water",
        "tamil": "தண்ணீர்",
        "malayalam": "വെള്ളം",
        "confidence_base": 0.93,
        "feedback": "W-hand shape touching lower lip twice detected cleanly.",
        "category": "food"
    },
    "food": {
        "word": "Food",
        "english": "Food",
        "tamil": "உணவு",
        "malayalam": "ഭക്ഷണം",
        "confidence_base": 0.95,
        "feedback": "Fingertips tap mouth twice with proper timing.",
        "category": "food"
    },
    "doctor": {
        "word": "Doctor",
        "english": "Doctor",
        "tamil": "மருத்துவர்",
        "malayalam": "ഡോക്ടർ",
        "confidence_base": 0.92,
        "feedback": "Pulse-checking wrist motion recognized with high accuracy.",
        "category": "healthcare"
    },
    "hospital": {
        "word": "Hospital",
        "english": "Hospital",
        "tamil": "மருத்துவமனை",
        "malayalam": "ആശുപത്രി",
        "confidence_base": 0.88,
        "feedback": "Cross sign over left shoulder arm position is verified.",
        "category": "healthcare"
    },
    "medicine": {
        "word": "Medicine",
        "english": "Medicine",
        "tamil": "மருந்து",
        "malayalam": "മരുന്ന്",
        "confidence_base": 0.90,
        "feedback": "Middle finger palm-circling movement matched correctly.",
        "category": "healthcare"
    },
    "yes": {
        "word": "Yes",
        "english": "Yes",
        "tamil": "ஆம்",
        "malayalam": "അതെ",
        "confidence_base": 0.96,
        "feedback": "Fist nodding gesture matches standard ISL pose.",
        "category": "communication"
    },
    "no": {
        "word": "No",
        "english": "No",
        "tamil": "இல்லை",
        "malayalam": "ഇല്ല",
        "confidence_base": 0.94,
        "feedback": "Index and middle finger snap to thumb captured clearly.",
        "category": "communication"
    }
}

def analyze_landmarks_and_classify(landmarks=None, requested_target=None):
    """
    Simulates landmark processing pipeline:
    Camera frame -> Hand/Body Landmark Extraction -> Feature Matrix -> ML Classification -> Confidence & Multilingual
    """
    if requested_target and requested_target.lower() in ISL_SIGN_DICTIONARY:
        target_key = requested_target.lower()
    else:
        target_key = random.choice(list(ISL_SIGN_DICTIONARY.keys()))

    sign_data = ISL_SIGN_DICTIONARY[target_key]
    
    # Introduce small realistic confidence variance (+/- 0.04)
    confidence = round(min(0.99, max(0.75, sign_data["confidence_base"] + random.uniform(-0.03, 0.03))), 2)

    is_high_confidence = confidence >= 0.80

    return {
        "success": True,
        "sign_key": target_key,
        "detected_word": sign_data["english"],
        "confidence": confidence,
        "confidence_percentage": int(confidence * 100),
        "is_high_confidence": is_high_confidence,
        "meanings": {
            "en": sign_data["english"],
            "ta": sign_data["tamil"],
            "ml": sign_data["malayalam"]
        },
        "feedback": sign_data["feedback"] if is_high_confidence else "Low confidence attempt. Keep hand centered inside frame with bright lighting.",
        "landmarks_processed": 21,
        "pose_validated": is_high_confidence
    }

def convert_voice_or_text_to_isl_sequence(input_text: str):
    """
    Processes spoken or typed natural language sentence into tokenized ISL grammar sequence.
    Example: "Hello, I need water." -> ["HELLO", "I", "NEED", "WATER"]
    """
    clean_text = input_text.strip().lower()
    
    # Keyword extraction mapping for ISL tokenization
    tokens = []
    word_map = {
        "hello": "HELLO",
        "namaste": "HELLO",
        "hi": "HELLO",
        "i": "I",
        "me": "ME",
        "need": "NEED",
        "want": "WANT",
        "water": "WATER",
        "food": "FOOD",
        "help": "HELP",
        "hospital": "HOSPITAL",
        "doctor": "DOCTOR",
        "medicine": "MEDICINE",
        "fever": "FEVER",
        "pain": "PAIN",
        "where": "WHERE",
        "please": "PLEASE",
        "thank": "THANK YOU",
        "thanks": "THANK YOU"
    }

    words_in_input = clean_text.replace(",", " ").replace(".", " ").split()
    for w in words_in_input:
        if w in word_map and word_map[w] not in tokens:
            tokens.append(word_map[w])

    if not tokens:
        tokens = ["HELLO", "NEED", "HELP"]

    return {
        "original_text": input_text,
        "normalized_text": clean_text,
        "isl_tokens": tokens,
        "formatted_sequence": " ➔ ".join(tokens),
        "sign_count": len(tokens)
    }

export const LANGUAGES = {
  en: { code: 'en', label: 'English', native: 'English' },
  ta: { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  ml: { code: 'ml', label: 'Malayalam', native: 'മലയാളം' }
};

export const CATEGORIES = [
  { id: 'all', name: { en: 'All Categories', ta: 'எல்லா பிரிவுகளும்', ml: 'എല്ലാ വിഭാഗങ്ങളും' }, icon: 'Grid' },
  { id: 'greetings', name: { en: 'Greetings', ta: 'வாழ்த்துக்கள்', ml: 'അഭിവാദ്യങ്ങൾ' }, icon: 'Hand' },
  { id: 'numbers', name: { en: 'Numbers', ta: 'எண்கள்', ml: 'അക്കങ്ങൾ' }, icon: 'Hash' },
  { id: 'family', name: { en: 'Family', ta: 'குடும்பம்', ml: 'കുടുംബം' }, icon: 'Users' },
  { id: 'food', name: { en: 'Food & Water', ta: 'உணவு & நீர்', ml: 'ഭക്ഷണവും വെള്ളവും' }, icon: 'Utensils' },
  { id: 'places', name: { en: 'Places', ta: 'இடங்கள்', ml: 'സ്ഥലങ്ങൾ' }, icon: 'MapPin' },
  { id: 'people', name: { en: 'People', ta: 'மக்கள்', ml: 'ആളுகள்' }, icon: 'UserCheck' },
  { id: 'emergency', name: { en: 'Emergency', ta: 'அவசரம்', ml: 'അടിയന്തരാവസ്ഥ' }, icon: 'AlertTriangle' },
  { id: 'needs', name: { en: 'Common Needs', ta: 'பொதுவான தேவைகள்', ml: 'പൊതുവായ ആവശ്യங்கள்' }, icon: 'HeartHandshake' }
];

export const DOMAINS = [
  {
    id: 'hospital',
    name: { en: 'Hospital / Healthcare', ta: 'மருத்துவமனை / சுகாதாரம்', ml: 'ആശുപത്രി / ആരോഗ്യസേവനം' },
    description: {
      en: 'Symptoms, pain, doctor, medicine, appointment & emergency patient instructions.',
      ta: 'அறிகுறிகள், வலி, மருத்துவர், மருந்து, முன்அனுமதி & அவசர நோயாளி வழிகாட்டுதல்.',
      ml: 'ലക്ഷണങ്ങൾ, വേദന, ഡോക്ടർ, മരുന്ന്, അപ്പോയിന്റ്മെന്റ് & അടിയന്തര നിർദ്ദേശങ്ങൾ.'
    },
    icon: 'Stethoscope',
    color: 'from-blue-600 to-cyan-500',
    badgeBg: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'police',
    name: { en: 'Police & Safety', ta: 'காவல்துறை & பாதுகாப்பு', ml: 'പോലീസ് & സുരക്ഷ' },
    description: {
      en: 'Complaints, incidents, theft reporting, evidence & emergency response.',
      ta: 'புகார்கள், சம்பவங்கள், திருட்டு அறிக்கை, சான்றுகள் & அவசர உதவி.',
      ml: 'പരാതികൾ, സംഭവങ്ങൾ, മോഷണം, തെളിവുകൾ & സുരക്ഷ.'
    },
    icon: 'ShieldAlert',
    color: 'from-indigo-600 to-blue-600',
    badgeBg: 'bg-indigo-100 text-indigo-800'
  },
  {
    id: 'banking',
    name: { en: 'Banking & Finance', ta: 'வங்கி & நிதி', ml: 'ബാങ്കിംഗ് & ധനകാര്യം' },
    description: {
      en: 'Account opening, deposit, withdrawal, ATM problems & assistance.',
      ta: 'கணக்கு தொடங்குதல், வைப்பு, பணம் எடுப்பது, ஏடிஎம் சிக்கல்கள் & உதவி.',
      ml: 'അക്കൗണ്ട് തുറക്കൽ, നിക്ഷേപം, പിൻവലിക്കൽ, എടിഎം & സഹായം.'
    },
    icon: 'Landmark',
    color: 'from-emerald-600 to-teal-500',
    badgeBg: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'government',
    name: { en: 'Government Services', ta: 'அரசு சேவைகள்', ml: 'സർക്കാർ സേവനങ്ങൾ' },
    description: {
      en: 'Forms, certificates, applications & public identity card services.',
      ta: 'படிவங்கள், சான்றிதழ்கள், விண்ணப்பங்கள் & பொது அடையாளச் சான்றுகள்.',
      ml: 'ഫോമുകൾ, സർട്ടിഫിക്കറ്റുകൾ, അപേക്ഷകൾ & പൊതു സേവനങ്ങൾ.'
    },
    icon: 'Building2',
    color: 'from-amber-600 to-orange-500',
    badgeBg: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'education',
    name: { en: 'Education & Schools', ta: 'கல்வி & பள்ளிகள்', ml: 'വിദ്യാഭ്യാസം & സ്കൂളുകൾ' },
    description: {
      en: 'Classroom questions, teacher instructions, exams & school guidance.',
      ta: 'வகுப்பறை வினாக்கள், ஆசிரியர் வழிகாட்டுதல், தேர்வுகள் & பள்ளி உதவி.',
      ml: 'ക്ലാസ് മുറി ചോദ്യങ്ങൾ, അധ്യാപകർ, പരീക്ഷകൾ & സ്കൂൾ നിർദ്ദേശങ്ങൾ.'
    },
    icon: 'GraduationCap',
    color: 'from-purple-600 to-violet-500',
    badgeBg: 'bg-purple-100 text-purple-800'
  }
];

export const ISL_WORDS = [
  {
    id: 'w-hello',
    name: { en: 'Hello / Namaste', ta: 'வணக்கம்', ml: 'നമസ്കാരം' },
    meaning: { en: 'Standard respectful greeting', ta: 'மரியாதையான வாழ்த்து', ml: 'ബഹുമാനത്തോടെയുള്ള അഭിവാദ്യം' },
    category: 'greetings',
    level: 'Level 1',
    difficulty: 'Easy',
    pose: {
      leftHand: 'Chest flat rested',
      rightHand: 'Flat palm near forehead moving outward in arc',
      movement: 'Forehead outward wave',
      facialExpression: 'Slight smile'
    },
    breakdownSteps: [
      '1. Place right open palm near right temple',
      '2. Move hand slightly forward and outward in a gentle arc',
      '3. Maintain eye contact with a friendly smile'
    ],
    source: 'Verified ISL Dictionary - Indian Sign Language Research and Training Centre (ISLRTC)',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-thank-you',
    name: { en: 'Thank You', ta: 'நன்றி', ml: 'നന്ദി' },
    meaning: { en: 'Expressing gratitude', ta: 'நன்றியுணர்வை வெளிப்படுத்துதல்', ml: 'നന്ദി പ്രകടിപ്പിക്കൽ' },
    category: 'greetings',
    level: 'Level 1',
    difficulty: 'Easy',
    pose: {
      leftHand: 'Open palm resting',
      rightHand: 'Fingertips touching chin, moving forward down toward recipient',
      movement: 'Chin-to-front forward arc',
      facialExpression: 'Warm smile'
    },
    breakdownSteps: [
      '1. Touch fingertips of right open hand to chin',
      '2. Move hand forward and down towards the person you are thanking',
      '3. Smile warmly'
    ],
    source: 'ISLRTC Official Sign Repository',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-help',
    name: { en: 'Help', ta: 'உதவி', ml: 'സഹായം' },
    meaning: { en: 'Assistance request', ta: 'உதவி கோருதல்', ml: 'സഹായം അഭ്യർത്ഥിക്കൽ' },
    category: 'emergency',
    level: 'Level 1',
    difficulty: 'Easy',
    pose: {
      leftHand: 'Flat open palm facing upward',
      rightHand: 'Thumbs-up fist placed on left palm and lifted upward',
      movement: 'Upward lifting gesture',
      facialExpression: 'Concerned or serious'
    },
    breakdownSteps: [
      '1. Place open left hand palm-up in front of chest',
      '2. Place right hand in a fist with thumb up on left palm',
      '3. Lift both hands together upward slightly'
    ],
    source: 'Deaf Community Council ISL Standard',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-water',
    name: { en: 'Water', ta: 'தண்ணீர்', ml: 'വെള്ളം' },
    meaning: { en: 'Drinking water', ta: 'குடிநீர்', ml: 'കുടിവെള്ളം' },
    category: 'food',
    level: 'Level 1',
    difficulty: 'Easy',
    pose: {
      leftHand: 'Resting',
      rightHand: 'W-hand shape (3 fingers up) tapping lower lip twice',
      movement: 'Lip tapping motion',
      facialExpression: 'Neutral'
    },
    breakdownSteps: [
      '1. Form "W" shape with index, middle, and ring finger',
      '2. Tap index finger lightly against lower lip twice'
    ],
    source: 'ISLRTC Official Dictionary',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-food',
    name: { en: 'Food', ta: 'உணவு', ml: 'ഭക്ഷണം' },
    meaning: { en: 'Meals or eating', ta: 'உணவு அல்லது சாப்பிடுதல்', ml: 'ഭക്ഷണം കഴിക്കൽ' },
    category: 'food',
    level: 'Level 1',
    difficulty: 'Easy',
    pose: {
      leftHand: 'Resting',
      rightHand: 'Closed fingertips brought to mouth repeatedly',
      movement: 'Mouth tapping gesture',
      facialExpression: 'Neutral'
    },
    breakdownSteps: [
      '1. Bring fingertips of right hand together',
      '2. Tap near lips twice simulating eating'
    ],
    source: 'ISLRTC Official Dictionary',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-doctor',
    name: { en: 'Doctor', ta: 'மருத்துவர்', ml: 'ഡോക്ടർ' },
    meaning: { en: 'Medical professional', ta: 'மருத்துவ நிபுணர்', ml: 'വൈദ്യശാസ്ത്ര വിദഗ്ദ്ധൻ' },
    category: 'people',
    level: 'Level 1',
    difficulty: 'Medium',
    pose: {
      leftHand: 'Extended wrist palm up',
      rightHand: 'Index & middle finger tapping left wrist pulse',
      movement: 'Pulse tap motion',
      facialExpression: 'Professional'
    },
    breakdownSteps: [
      '1. Hold left hand out palm-up',
      '2. Tap two right fingertips on left wrist as if checking pulse twice'
    ],
    source: 'Healthcare ISL Accessibility Manual',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-hospital',
    name: { en: 'Hospital', ta: 'மருத்துவமனை', ml: 'ആശുപത്രി' },
    meaning: { en: 'Medical building / clinic', ta: 'மருத்துவக் கூடம்', ml: 'ആശുപത്രി മന്ദിരം' },
    category: 'places',
    level: 'Level 1',
    difficulty: 'Medium',
    pose: {
      leftHand: 'Resting',
      rightHand: 'Index finger drawing an inverted cross (+) over upper arm',
      movement: 'Cross shape drawing',
      facialExpression: 'Neutral'
    },
    breakdownSteps: [
      '1. Extend right index finger',
      '2. Draw a cross (+) gesture over left shoulder upper arm'
    ],
    source: 'Healthcare ISL Standard Repository',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-medicine',
    name: { en: 'Medicine', ta: 'மருந்து', ml: 'മരുന്ന്' },
    meaning: { en: 'Tablets / syrup', ta: 'மாத்திரைகள் / மருந்து', ml: 'മരുന്ന് / ഗുളിക' },
    category: 'emergency',
    level: 'Level 1',
    difficulty: 'Medium',
    pose: {
      leftHand: 'Flat palm up',
      rightHand: 'Middle finger circling on left palm as if grinding pill',
      movement: 'Circular grinding action',
      facialExpression: 'Neutral'
    },
    breakdownSteps: [
      '1. Open left palm facing upward',
      '2. Circle tip of right middle finger over left palm center'
    ],
    source: 'Healthcare ISL Standard Repository',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-please',
    name: { en: 'Please', ta: 'தயவுசெய்து', ml: 'ദയവായി' },
    meaning: { en: 'Polite request', ta: 'அன்பான வேண்டுகோள்', ml: 'അഭ്യർത്ഥന' },
    category: 'greetings',
    level: 'Level 1',
    difficulty: 'Easy',
    pose: {
      leftHand: 'Resting',
      rightHand: 'Flat palm rubbed in circle over chest',
      movement: 'Chest circular rub',
      facialExpression: 'Kind smile'
    },
    breakdownSteps: [
      '1. Place right open hand on center of chest',
      '2. Move hand in gentle clockwise circle twice'
    ],
    source: 'ISLRTC Official Repository',
    license: 'Verified Educational Use'
  },
  {
    id: 'w-sorry',
    name: { en: 'Sorry', ta: 'மன்னித்துக்கொள்ளுங்கள்', ml: 'ക്ഷമിക്കണം' },
    meaning: { en: 'Apology', ta: 'மன்னிப்பு கேட்டல்', ml: 'ക്ഷമാപണം' },
    category: 'greetings',
    level: 'Level 1',
    difficulty: 'Easy',
    pose: {
      leftHand: 'Resting',
      rightHand: 'Fist rubbed in circle over chest',
      movement: 'Fist chest circle',
      facialExpression: 'Apologetic look'
    },
    breakdownSteps: [
      '1. Form fist with right hand over heart area',
      '2. Rotate in gentle circular motion twice with earnest expression'
    ],
    source: 'ISLRTC Official Repository',
    license: 'Verified Educational Use'
  }
];

export const LEVEL2_SENTENCES = [
  {
    id: 's-need-water',
    sentence: { en: 'I need water.', ta: 'எனக்கு தண்ணீர் வேண்டும்.', ml: 'എനിക്ക് വെള്ളം വേണം.' },
    tokens: ['ME', 'NEED', 'WATER'],
    signs: ['w-hello', 'w-help', 'w-water'],
    explanation: {
      en: 'In ISL, subject comes first followed by requirement and object: ME ➔ NEED ➔ WATER.',
      ta: 'ISL இலக்கணப்படி: நான் ➔ தேவை ➔ தண்ணீர்.',
      ml: 'ISL വ്യാകരണത്തിൽ: എനിക്ക് ➔ വേണം ➔ വെള്ളം.'
    }
  },
  {
    id: 's-need-help',
    sentence: { en: 'I need help.', ta: 'எனக்கு உதவி வேண்டும்.', ml: 'എനിക്ക് സഹായം വേണം.' },
    tokens: ['ME', 'NEED', 'HELP'],
    signs: ['w-hello', 'w-please', 'w-help'],
    explanation: {
      en: 'Essential emergency sentence: ME ➔ NEED ➔ HELP.',
      ta: 'அவசர வாக்கியம்: நான் ➔ தேவை ➔ உதவி.',
      ml: 'അടിയന്തര വാചകം: എനിക്ക് ➔ വേണം ➔ സഹായം.'
    }
  },
  {
    id: 's-where-hospital',
    sentence: { en: 'Where is the hospital?', ta: 'மருத்துவமனை எங்கு உள்ளது?', ml: 'ആശുപത്രി എവിടെയാണ്?' },
    tokens: ['HOSPITAL', 'WHERE'],
    signs: ['w-hospital', 'w-help'],
    explanation: {
      en: 'In ISL, question words like WHERE come at the end of the sentence: HOSPITAL ➔ WHERE.',
      ta: 'வினாச் சொல் இறுதியில் வரும்: மருத்துவமனை ➔ எங்கே.',
      ml: 'ചോദ്യചിഹ്നം അവസാനം വരുന്നു: ആശുപത്രി ➔ എവിടെ.'
    }
  },
  {
    id: 's-need-medicine',
    sentence: { en: 'I need medicine.', ta: 'எனக்கு மருந்து வேண்டும்.', ml: 'എനിക്ക് മരുന്ന് വേണം.' },
    tokens: ['ME', 'NEED', 'MEDICINE'],
    signs: ['w-hello', 'w-please', 'w-medicine'],
    explanation: {
      en: 'Direct medical request: ME ➔ NEED ➔ MEDICINE.',
      ta: 'மருத்துவத் தேவை: நான் ➔ தேவை ➔ மருந்து.',
      ml: 'മരുന്ന് ആവശ്യം: എനിക്ക് ➔ വേണം ➔ മരുന്ന്.'
    }
  }
];

export const LEVEL3_DOMAIN_SCENARIOS = {
  hospital: [
    {
      id: 'h-1',
      title: { en: 'Explaining Fever & Pain', ta: 'காய்ச்சல் மற்றும் வலியை விளக்குதல்', ml: 'പനിയും വേദനയും വിവരിക്കൽ' },
      patientText: { en: 'I have fever for 2 days.', ta: 'எனக்கு 2 நாட்களாக காய்ச்சல் உள்ளது.', ml: 'എനിക്ക് 2 ദിവസമായി പനിയുണ്ട്.' },
      staffText: { en: 'Please take this medicine after food.', ta: 'தயவுசெய்து சாப்பிட்ட பிறகு இந்த மருந்தை உட்கொள்ளுங்கள்.', ml: 'ദയവായി ഭക്ഷണ ശേഷം ഈ മരുന്ന് കഴിക്കുക.' },
      sequence: ['FEVER', 'TWO', 'DAYS', '➔', 'MEDICINE', 'AFTER', 'FOOD']
    },
    {
      id: 'h-2',
      title: { en: 'Asking for Doctor Consultation', ta: 'மருத்துவர் ஆலோசனையைக் கேட்டல்', ml: 'ഡോക്ടറെ കാണാൻ ചോദിക്കൽ' },
      patientText: { en: 'I want to see the doctor.', ta: 'நான் மருத்துவரைப் பார்க்க வேண்டும்.', ml: 'എനിക്ക് ഡോക്ടറെ കാണണം.' },
      staffText: { en: 'Please wait in room number 4.', ta: 'தயவுசெய்து அறை எண் 4 இல் காத்திருங்கள்.', ml: 'ദയവായി റൂം നമ്പർ 4-ൽ കാത്തിരിക്കുക.' },
      sequence: ['ME', 'WANT', 'DOCTOR', '➔', 'PLEASE', 'WAIT', 'ROOM', '4']
    }
  ],
  police: [
    {
      id: 'p-1',
      title: { en: 'Filing Theft Complaint', ta: 'திருட்டு புகார் அளித்தல்', ml: 'മോഷണ പരാതി നൽകൽ' },
      citizenText: { en: 'My phone was stolen near bus stand.', ta: 'பேருந்து நிலையம் அருகில் என் போன் திருடப்பட்டது.', ml: 'ബസ് സ്റ്റാൻഡിന് സമീപം ഫോൺ മോഷ്ടിക്കപ്പെട്ടു.' },
      policeText: { en: 'Please fill this complaint form.', ta: 'தயவுசெய்து இந்த புகார் படிவத்தை நிரப்பவும்.', ml: 'ദയവായി ഈ പരാതി ഫോം പൂരിപ്പിക്കുക.' },
      sequence: ['MY', 'PHONE', 'STOLEN', 'BUS-STAND', '➔', 'PLEASE', 'FILL', 'FORM']
    }
  ],
  banking: [
    {
      id: 'b-1',
      title: { en: 'ATM Money Withdrawal Help', ta: 'ஏடிஎம் பணம் எடுக்கும் உதவி', ml: 'എടിഎം പണം പിൻവലിക്കൽ സഹായം' },
      customerText: { en: 'ATM card blocked, I need cash.', ta: 'ஏடிஎம் கார்டு முடக்கப்பட்டது, எனக்கு பணம் வேண்டும்.', ml: 'എടിഎം കാർഡ് ബ്ലോക്കായി, എനിക്ക് പണം വേണം.' },
      bankerText: { en: 'Show your ID card to receptionist.', ta: 'வரவேற்பாளரிடம் உங்கள் அடையாள அட்டையைக் காட்டுங்கள்.', ml: 'സ്വീകരണ മുറിയിൽ തിരിച്ചറിയൽ കാർഡ് കാണിക്കുക.' },
      sequence: ['CARD', 'BLOCKED', 'NEED', 'MONEY', '➔', 'SHOW', 'ID-CARD']
    }
  ],
  government: [
    {
      id: 'g-1',
      title: { en: 'Certificate Application Status', ta: 'சான்றிதழ் விண்ணப்ப நிலை', ml: 'സർട്ടിഫിക്കറ്റ് അപേക്ഷാ നില' },
      applicantText: { en: 'Where to get birth certificate?', ta: 'பிறப்பு சான்றிதழ் எங்கு பெறுவது?', ml: 'ജനന സർട്ടിഫിക്കറ്റ് എവിടെ ലഭിക്കും?' },
      officerText: { en: 'Go to counter 2 with Aadhaar card.', ta: 'ஆதார் கார்டுடன் கவுண்டர் 2 க்கு செல்லவும்.', ml: 'ആധാർ കാർഡുമായി കൗണ്ടർ 2-ലേക്ക് പോകുക.' },
      sequence: ['BIRTH', 'CERTIFICATE', 'WHERE', '➔', 'GO', 'COUNTER', '2', 'AADHAAR']
    }
  ],
  education: [
    {
      id: 'e-1',
      title: { en: 'Classroom Doubt Clarification', ta: 'வகுப்பறை ஐயம் தெளிவுறுத்தல்', ml: 'ക്ലാസ്സ് മുറി സംശയങ്ങൾ' },
      studentText: { en: 'I do not understand page 12.', ta: 'பக்கம் 12 எனக்கு புரியவில்லை.', ml: 'പേജ് 12 എനിക്ക് മനസ്സിലായില്ല.' },
      teacherText: { en: 'Look at the board, I will explain.', ta: 'கரும்பலகையைப் பாருங்கள், நான் விளக்குகிறேன்.', ml: 'ബോർഡിലേക്ക് നോക്കൂ, ഞാൻ വിശദീകരിക്കാം.' },
      sequence: ['PAGE', '12', 'NOT', 'UNDERSTAND', '➔', 'LOOK', 'BOARD', 'TEACH']
    }
  ]
};

export const LEVEL4_CONVERSATIONS = [
  {
    id: 'conv-hospital-reception',
    domain: 'Healthcare',
    title: { en: 'Hospital Reception Intake', ta: 'மருத்துவமனை வரவேற்பு சேர்க்கை', ml: 'ആശുപത്രി റിസപ്ഷൻ സ്വാഗതം' },
    dialogue: [
      { speaker: 'Deaf Patient', text: { en: 'Hello.', ta: 'வணக்கம்.', ml: 'നമസ്കാരം.' }, signKey: 'w-hello' },
      { speaker: 'Receptionist', text: { en: 'Hello. How can I help you?', ta: 'வணக்கம். நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?', ml: 'നമസ്കാരം. എങ്ങനെ സഹായിക്കാം?' }, signKey: 'w-help' },
      { speaker: 'Deaf Patient', text: { en: 'I need to see a doctor.', ta: 'நான் மருத்துவரைப் பார்க்க வேண்டும்.', ml: 'എനിക്ക് ഡോക്ടറെ കാണണം.' }, signKey: 'w-doctor' },
      { speaker: 'Receptionist', text: { en: 'Do you have an appointment?', ta: 'உங்களிடம் முன்அனுமதி உள்ளதா?', ml: 'അപ്പോയിന്റ്മെന്റ് ഉണ്ടോ?' }, signKey: 'w-please' },
      { speaker: 'Deaf Patient', text: { en: 'No, I have fever.', ta: 'இல்லை, எனக்கு காய்ச்சல் உள்ளது.', ml: 'ഇല്ല, എനിക്ക് പനിയാണ്.' }, signKey: 'w-hospital' },
      { speaker: 'Receptionist', text: { en: 'Please wait, doctor will call you soon.', ta: 'தயவுசெய்து காத்திருங்கள், மருத்துவர் விரைவில் அழைப்பார்.', ml: 'ദയവായി കാത്തിരിക്കൂ, ഡോക്ടർ ഉടൻ വിളിക്കും.' }, signKey: 'w-thank-you' }
    ]
  },
  {
    id: 'conv-police-complaint',
    domain: 'Police',
    title: { en: 'Police Station Emergency Inquiry', ta: 'காவல் நிலைய அவசர விசாரணை', ml: 'പോലീസ് സ്റ്റേഷൻ അന്വേഷണം' },
    dialogue: [
      { speaker: 'Citizen', text: { en: 'Help! My bag is lost.', ta: 'உதவி! என் பை தொலைந்துவிட்டது.', ml: 'സഹായം! എന്റെ ബാഗ് നഷ്ടപ്പെട്ടു.' }, signKey: 'w-help' },
      { speaker: 'Officer', text: { en: 'Please sit down. Where did it happen?', ta: 'தயவுசெய்து அமருங்கள். எங்கு நடந்தது?', ml: 'ദയവായി ഇരിക്കൂ. എവിടെയാണ് സംഭവിച്ചത്?' }, signKey: 'w-please' },
      { speaker: 'Citizen', text: { en: 'At railway station 1 hour ago.', ta: 'ரயில் நிலையத்தில் 1 மணி நேரத்திற்கு முன்பு.', ml: 'റെയിൽവേ സ്റ്റേഷനിൽ 1 മണിക്കൂർ മുൻപ്.' }, signKey: 'w-thank-you' }
    ]
  }
];

export const DATASET_METADATA = [
  { sign: 'Hello / Namaste', samples: 450, angles: 4, license: 'Creative Commons CC-BY 4.0', status: 'Verified by ISL Educator Board' },
  { sign: 'Thank You', samples: 410, angles: 4, license: 'Verified Educational License', status: 'Verified by Deaf Community Council' },
  { sign: 'Help', samples: 610, angles: 5, license: 'Public Service License', status: 'Verified by Emergency Services Lead' },
  { sign: 'Water', samples: 380, angles: 3, license: 'ISLRTC Official Dataset', status: 'Verified by ISL Faculty' },
  { sign: 'Food', samples: 390, angles: 3, license: 'ISLRTC Official Dataset', status: 'Verified by ISL Faculty' },
  { sign: 'Doctor', samples: 520, angles: 4, license: 'Verified Healthcare ISL Dataset', status: 'Verified by Healthcare Board' },
  { sign: 'Hospital', samples: 480, angles: 4, license: 'Healthcare ISL Standard', status: 'Verified by Healthcare Board' },
  { sign: 'Medicine', samples: 430, angles: 4, license: 'Healthcare ISL Standard', status: 'Verified by Healthcare Board' }
];

export const ISL_SENTENCES = LEVEL2_SENTENCES;
export const DOMAIN_SENTENCES = LEVEL3_DOMAIN_SCENARIOS;
export const CONVERSATIONS = LEVEL4_CONVERSATIONS;
export const VOICE_DICTIONARY = ISL_WORDS;

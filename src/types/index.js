/**
 * @typedef {'en' | 'ta' | 'ml'} Language
 * 
 * @typedef {Object} MultilingualText
 * @property {string} en - English text
 * @property {string} ta - Tamil text (தமிழ்)
 * @property {string} ml - Malayalam text (മലയാളം)
 * 
 * @typedef {'greetings' | 'numbers' | 'family' | 'food' | 'places' | 'people' | 'emergency' | 'needs'} Category
 * @typedef {'hospital' | 'police' | 'banking' | 'government' | 'education'} Domain
 * 
 * @typedef {Object} HandPoseData
 * @property {string} leftHand - Position/gesture of left hand
 * @property {string} rightHand - Position/gesture of right hand
 * @property {string} movement - Motion trajectory description
 * @property {string} facialExpression - Expression needed
 * @property {number[]} landmarks - Normalized simulated landmark vectors [x, y, z] for 21 points
 * 
 * @typedef {Object} ISLSign
 * @property {string} id
 * @property {MultilingualText} name
 * @property {MultilingualText} meaning
 * @property {Category} category
 * @property {Domain} [domain]
 * @property {string} level - 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4'
 * @property {HandPoseData} pose
 * @property {string[]} breakdownSteps - Step by step animation instructions
 * @property {string} difficulty - 'Easy' | 'Medium' | 'Advanced'
 * 
 * @typedef {Object} ISLSentence
 * @property {string} id
 * @property {MultilingualText} sentence
 * @property {MultilingualText} explanation
 * @property {string[]} signIds - IDs of signs in sequence
 * @property {Domain} [domain]
 * @property {string} level
 * 
 * @typedef {Object} DialogueLine
 * @property {'speaker1' | 'speaker2'} speaker
 * @property {MultilingualText} text
 * @property {string[]} signIds
 * @property {string} speakerRole - e.g. "Nurse" or "Deaf Patient"
 * 
 * @typedef {Object} Conversation
 * @property {string} id
 * @property {Domain} domain
 * @property {MultilingualText} title
 * @property {MultilingualText} context
 * @property {DialogueLine[]} lines
 */

export const LANGUAGES = {
  en: { label: 'English', native: 'English', flag: '🇬🇧' },
  ta: { label: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  ml: { label: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' }
};

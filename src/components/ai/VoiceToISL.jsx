import React, { useState } from 'react';
import { VOICE_DICTIONARY, ISL_WORDS } from '../../data/islDatabase.js';
import ISLVisualizer2D from '../ISLVisualizer2D.jsx';
import { Mic, MicOff, Volume2, Sparkles, ArrowRight, Languages, CheckCircle2 } from 'lucide-react';

export default function VoiceToISL({ lang, onStartPractice }) {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [matchedSign, setMatchedSign] = useState(ISL_WORDS[3]); // Default to 'Doctor'
  const [selectedVoiceLang, setSelectedVoiceLang] = useState(lang || 'en');

  // Trigger Speech Recognition API or simulate voice speech input
  const handleStartVoice = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      if (selectedVoiceLang === 'ta') recognition.lang = 'ta-IN';
      else if (selectedVoiceLang === 'ml') recognition.lang = 'ml-IN';
      else recognition.lang = 'en-IN';

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpokenText(transcript);
        processSpeechToISL(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => {
        setIsListening(false);
        simulateSpeechInput();
      };
      recognition.start();
    } else {
      simulateSpeechInput();
    }
  };

  const simulateSpeechInput = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      const samples = {
        en: ['doctor', 'need help', 'water', 'medicine', 'police'],
        ta: ['மருத்துவர்', 'உதவி வேண்டும்', 'தண்ணீர்', 'மருந்து', 'காவல்துறை'],
        ml: ['ഡോക്ടർ', 'സഹായം', 'വെള്ളം', 'മരുന്ന്', 'പോലീസ്']
      };
      const list = samples[selectedVoiceLang] || samples.en;
      const phrase = list[Math.floor(Math.random() * list.length)];
      setSpokenText(phrase);
      processSpeechToISL(phrase);
    }, 1500);
  };

  const processSpeechToISL = (phrase) => {
    const textLower = phrase.toLowerCase().trim();

    // Check voice dictionary mapping
    let foundId = 'w-doctor';
    for (const item of VOICE_DICTIONARY) {
      const triggers = item.triggers[selectedVoiceLang] || item.triggers.en;
      if (triggers.some((t) => textLower.includes(t.toLowerCase()))) {
        foundId = item.signId;
        break;
      }
    }

    const signObj = ISL_WORDS.find((w) => w.id === foundId) || ISL_WORDS[0];
    setMatchedSign(signObj);
  };

  return (
    <div className="space-y-5">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-purple-950/60 text-cyan-300 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Trilingual Voice-to-ISL Engine
        </span>
        <h2 className="text-xl font-extrabold mt-2">
          {lang === 'ta' ? 'குரல் மூலமான ISL சைகை' : lang === 'ml' ? 'ശബ്ദത്തിൽ നിന്ന് ISL അടയാളം' : 'Voice to ISL Translator'}
        </h2>
        <p className="text-xs text-purple-100 mt-1">
          {lang === 'ta'
            ? 'தமிழ், ஆங்கிலம் அல்லது மலையாளத்தில் பேசுங்கள். ISL சைகை நேரலையில் தோன்றும்.'
            : lang === 'ml'
            ? 'തമിഴ്, ഇംഗ്ലീഷ്, മലയാളം ഭാഷകളിൽ സംസാരിക്കുക. ISL അടയാളം കാണാം.'
            : 'Speak in Tamil, English, or Malayalam to automatically convert speech into ISL animations.'}
        </p>
      </div>

      {/* Language Selector for Voice */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Select Speech Language:
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setSelectedVoiceLang('en')}
            className={`py-2 rounded-xl text-xs font-bold border transition-all ${
              selectedVoiceLang === 'en'
                ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            🇬🇧 English Voice
          </button>
          <button
            onClick={() => setSelectedVoiceLang('ta')}
            className={`py-2 rounded-xl text-xs font-bold border transition-all ${
              selectedVoiceLang === 'ta'
                ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            🇮🇳 தமிழ் Voice
          </button>
          <button
            onClick={() => setSelectedVoiceLang('ml')}
            className={`py-2 rounded-xl text-xs font-bold border transition-all ${
              selectedVoiceLang === 'ml'
                ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            🇮🇳 മലയാളം Voice
          </button>
        </div>

        {/* Mic Control Button */}
        <button
          onClick={handleStartVoice}
          disabled={isListening}
          className={`w-full py-4 rounded-2xl font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
            isListening
              ? 'bg-red-600 text-white animate-pulse'
              : 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white hover:from-blue-800 hover:to-indigo-800'
          }`}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5 animate-bounce" />
              <span>Listening to Voice Input...</span>
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              <span>Tap & Speak in {selectedVoiceLang.toUpperCase()}</span>
            </>
          )}
        </button>

        {/* Sample Voice Quick Buttons */}
        <div className="pt-2">
          <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
            Or tap quick voice sample:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {(selectedVoiceLang === 'ta'
              ? ['மருத்துவர்', 'உதவி', 'மருந்து', 'தண்ணீர்', 'காவல்துறை']
              : selectedVoiceLang === 'ml'
              ? ['ഡോക്ടർ', 'സഹായം', 'മരുന്ന്', 'വെള്ളം', 'പോലീസ്']
              : ['Doctor', 'Help', 'Medicine', 'Water', 'Police']
            ).map((sample) => (
              <button
                key={sample}
                onClick={() => {
                  setSpokenText(sample);
                  processSpeechToISL(sample);
                }}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 rounded-lg text-xs font-semibold"
              >
                "{sample}"
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Voice Translation Result & 2D Playback */}
      {spokenText && (
        <div className="space-y-3">
          {/* Flow Stepper Indicator */}
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl text-xs space-y-2">
            <span className="font-extrabold text-emerald-900 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Voice Translation Flow Completed:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap font-bold text-slate-800 text-[11px]">
              <span className="bg-white px-2 py-1 rounded-md border border-emerald-200">
                🎙️ Spoken: "{spokenText}"
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-white px-2 py-1 rounded-md border border-emerald-200 text-blue-700">
                🤟 ISL Sign: {matchedSign.name[lang] || matchedSign.name.en}
              </span>
            </div>
          </div>

          <ISLVisualizer2D
            sign={matchedSign}
            lang={lang}
            onPracticeClick={() => onStartPractice(matchedSign)}
          />
        </div>
      )}
    </div>
  );
}

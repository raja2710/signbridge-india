import React from 'react';
import { BookOpen, Bot, Award, Stethoscope, ShieldAlert, Landmark, Building2, GraduationCap, Sparkles, ArrowRight, CheckCircle2, Mic, Camera } from 'lucide-react';
import { ISL_WORDS } from '../data/islDatabase.js';

export default function Home({ lang, setActiveTab, setLearnLevel, onStartPractice }) {
  const dailySign = ISL_WORDS[2]; // 'Help'

  return (
    <div className="space-y-5 pb-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-5 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Frontline Healthcare & Essential Services
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            Bridge the Gap with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Indian Sign Language
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-blue-100 max-w-lg leading-relaxed">
            {lang === 'ta'
              ? 'செவித்திறனற்ற குடிமக்களுடன் நம்பிக்கையுடன் தொடர்பு கொள்ள ISL கற்கவும் மற்றும் AI பயிற்சி பெறவும்.'
              : lang === 'ml'
              ? 'കേൾവി പരിമിതിയുള്ള പൗരന്മാരുമായി ആത്മവിശ്വാസത്തോടെ ആശയവിനിമയം നടത്താൻ ISL പഠിക്കുക.'
              : 'Learn ISL vocabulary, practice everyday sentences, use live AI camera landmark detection, and deliver inclusive healthcare.'}
          </p>

          {/* Core Flow Pill Buttons */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold">
            <button
              onClick={() => setActiveTab('learn')}
              className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl shadow-md flex items-center gap-1.5 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Start Learning ISL
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl backdrop-blur-md flex items-center gap-1.5 transition-all"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              Try AI Practice
            </button>
          </div>
        </div>
      </div>

      {/* 4-Level Learning System Shortcuts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            4-Level Structured Learning System
          </h3>

          <button
            onClick={() => setActiveTab('learn')}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => {
              setActiveTab('learn');
              setLearnLevel(1);
            }}
            className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md text-left transition-all space-y-1.5 group"
          >
            <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">LEVEL 1</span>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-blue-700">Basic Words</h4>
            <p className="text-[11px] text-slate-500 line-clamp-2">Greetings, numbers, family, emergency & food words.</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('learn');
              setLearnLevel(2);
            }}
            className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md text-left transition-all space-y-1.5 group"
          >
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">LEVEL 2</span>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-indigo-700">Everyday Sentences</h4>
            <p className="text-[11px] text-slate-500 line-clamp-2">Simple inquiries, instructions & syntax rules.</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('learn');
              setLearnLevel(3);
            }}
            className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md text-left transition-all space-y-1.5 group"
          >
            <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md">LEVEL 3</span>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-cyan-700">Domain ISL</h4>
            <p className="text-[11px] text-slate-500 line-clamp-2">Hospital, Police, Banking, Govt & Education drills.</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('learn');
              setLearnLevel(4);
            }}
            className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md text-left transition-all space-y-1.5 group"
          >
            <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">LEVEL 4</span>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-purple-700">Roleplay Conversations</h4>
            <p className="text-[11px] text-slate-500 line-clamp-2">Interactive dual-character real-world dialogues.</p>
          </button>
        </div>
      </div>

      {/* AI Suite Feature Highlights */}
      <div className="space-y-3">
        <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-2">
          <Bot className="w-5 h-5 text-emerald-600" />
          AI Training Suite
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => setActiveTab('ai')}
            className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-left hover:shadow-md transition-all space-y-1"
          >
            <div className="p-2 bg-blue-700 text-white rounded-xl w-fit">
              <Camera className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">AI Sign Detection</h4>
            <p className="text-xs text-slate-600">Open mobile camera &rarr; AI identifies matching ISL sign.</p>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-left hover:shadow-md transition-all space-y-1"
          >
            <div className="p-2 bg-emerald-700 text-white rounded-xl w-fit">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">AI Sign Practice</h4>
            <p className="text-xs text-slate-600">Get score % & hand position feedback from camera.</p>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 text-left hover:shadow-md transition-all space-y-1"
          >
            <div className="p-2 bg-purple-700 text-white rounded-xl w-fit">
              <Mic className="w-4 h-4" />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">Voice to ISL</h4>
            <p className="text-xs text-slate-600">Speak Tamil/English/Malayalam &rarr; 2D ISL demonstration.</p>
          </button>
        </div>
      </div>

      {/* Daily Sign Challenge Card */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 text-slate-950 shadow-md flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider bg-slate-950 text-amber-400 px-2 py-0.5 rounded-md">
            DAILY SIGN CHALLENGE
          </span>
          <h4 className="font-black text-lg text-slate-950 mt-1">
            "{dailySign.name[lang] || dailySign.name.en}" (Emergency Sign)
          </h4>
          <p className="text-xs text-slate-900 font-medium">
            Essential healthcare gesture to request assistance.
          </p>
        </div>

        <button
          onClick={() => onStartPractice(dailySign)}
          className="px-4 py-2.5 bg-slate-950 hover:bg-slate-900 text-white text-xs font-extrabold rounded-xl shadow-md transition-all shrink-0"
        >
          Practise Now
        </button>
      </div>
    </div>
  );
}

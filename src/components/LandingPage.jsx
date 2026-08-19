import React from 'react';
import { BookOpen, Bot, Award, Stethoscope, ShieldAlert, Landmark, Building2, GraduationCap, Sparkles, ArrowRight, CheckCircle2, Mic, Camera, ShieldCheck, HeartHandshake, Play, HelpCircle } from 'lucide-react';
import { DOMAINS, ISL_WORDS } from '../data/islDatabase.js';

export default function LandingPage({ lang, setActiveTab, setLearnLevel, onStartPractice, onOpenAuth }) {
  const dailySign = ISL_WORDS[2]; // 'Help'

  return (
    <div className="space-y-8 pb-10">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-blue-800/50">
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            SignBridge India — AI-Powered ISL Learning & Workplace Accessibility
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Learn ISL. Practice ISL. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200">
              Communicate Without Barriers.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium max-w-2xl">
            {lang === 'ta'
              ? 'சுகாதாரம், காவல்துறை, வங்கி மற்றும் பொதுச் சேவை ஊழியர்களுக்கு ஏற்ற ISL கற்றல் தளம்.'
              : lang === 'ml'
              ? 'ആരോഗ്യം, പോലീസ്, ബാങ്കിംഗ്, സർക്കാർ ജീവനക്കാർക്കായി രൂപകൽപ്പന ചെയ്ത ISL പഠന പ്ലാറ്റ്ഫോം.'
              : 'SignBridge India helps frontline workers build practical Indian Sign Language skills through structured 4-level lessons, 2D visual learning, AI-assisted camera practice, and real-world workplace scenario dialogues.'}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('learn')}
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 text-sm transition-all transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              Start Learning ISL
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-extrabold border border-white/25 rounded-2xl backdrop-blur-md flex items-center gap-2 text-sm transition-all"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              Try AI Sign Recognition
            </button>

            <button
              onClick={onOpenAuth}
              className="px-5 py-3.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-extrabold rounded-2xl flex items-center gap-2 text-sm transition-all"
            >
              Login / Register
            </button>
          </div>
        </div>
      </div>

      {/* WHY SIGNBRIDGE? - 4 PILLARS */}
      <div className="space-y-4">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 justify-center sm:justify-start">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            Why SignBridge India?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">The complete 4-step framework for practical workplace ISL communication.</p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">1</div>
            <h3 className="font-extrabold text-slate-900 text-base">Learn</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Verified 2D visual demonstrations, breakdown steps, and trilingual translations (EN, Tamil, Malayalam).</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-500 hover:shadow-md transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">2</div>
            <h3 className="font-extrabold text-slate-900 text-base">Practice</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Live camera landmark feedback, posture analysis, score %, and instant improvement tips.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-cyan-500 hover:shadow-md transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-black">3</div>
            <h3 className="font-extrabold text-slate-900 text-base">Assess</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Visual quizzes, sentence matching, and level exit competency tests with score verification.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">4</div>
            <h3 className="font-extrabold text-slate-900 text-base">Apply</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Earn verified certificates and transform your workplace into an ISL-Ready Service Point.</p>
          </div>
        </div>
      </div>

      {/* LEARNING JOURNEY ROADMAP */}
      <div className="bg-slate-900 rounded-3xl p-6 text-white space-y-5 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-black text-xl text-white">4-Level Learning Journey</h3>
            <p className="text-xs text-slate-400">Sequential progression designed for frontline personnel.</p>
          </div>
          <span className="bg-blue-600/30 text-blue-300 border border-blue-500/40 text-xs font-bold px-3 py-1 rounded-full">
            Level 1 🔓 ➔ Level 2 🔒 ➔ Level 3 🔒 ➔ Level 4 🔒 ➔ Certificate
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <button
            onClick={() => { setActiveTab('learn'); setLearnLevel(1); }}
            className="bg-slate-800 hover:bg-slate-700/80 p-4 rounded-2xl border border-slate-700 text-left transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-blue-400 bg-blue-950 px-2 py-0.5 rounded">Level 1</span>
              <span className="text-emerald-400 text-xs font-bold">Unlocked</span>
            </div>
            <h4 className="font-extrabold text-white text-sm group-hover:text-cyan-400">Basic Words</h4>
            <p className="text-xs text-slate-400">Greetings, emergency, numbers & people signs.</p>
          </button>

          <button
            onClick={() => { setActiveTab('learn'); setLearnLevel(2); }}
            className="bg-slate-800 hover:bg-slate-700/80 p-4 rounded-2xl border border-slate-700 text-left transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded">Level 2</span>
              <span className="text-amber-400 text-xs font-bold">In Progress</span>
            </div>
            <h4 className="font-extrabold text-white text-sm group-hover:text-indigo-300">Basic Sentences</h4>
            <p className="text-xs text-slate-400">Sentence tokenization and syntax rules.</p>
          </button>

          <button
            onClick={() => { setActiveTab('learn'); setLearnLevel(3); }}
            className="bg-slate-800 hover:bg-slate-700/80 p-4 rounded-2xl border border-slate-700 text-left transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">Level 3</span>
              <span className="text-slate-500 text-xs font-bold">Domain ISL</span>
            </div>
            <h4 className="font-extrabold text-white text-sm group-hover:text-cyan-300">Workplace Domains</h4>
            <p className="text-xs text-slate-400">Hospital, police, bank, govt & school drills.</p>
          </button>

          <button
            onClick={() => { setActiveTab('learn'); setLearnLevel(4); }}
            className="bg-slate-800 hover:bg-slate-700/80 p-4 rounded-2xl border border-slate-700 text-left transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-950 px-2 py-0.5 rounded">Level 4</span>
              <span className="text-slate-500 text-xs font-bold">Roleplay</span>
            </div>
            <h4 className="font-extrabold text-white text-sm group-hover:text-purple-300">Real Dialogues</h4>
            <p className="text-xs text-slate-400">Interactive dual-character dialogues.</p>
          </button>
        </div>
      </div>

      {/* REAL-WORLD DOMAINS GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-black text-xl text-slate-900">Real-World Workplace Domains</h3>
            <p className="text-xs text-slate-600">Tailored vocabulary for essential public-facing personnel.</p>
          </div>
          <button onClick={() => { setActiveTab('learn'); setLearnLevel(3); }} className="text-xs font-extrabold text-blue-700 hover:text-blue-900 flex items-center gap-1">
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DOMAINS.slice(0, 3).map((domain) => (
            <div key={domain.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:border-blue-500 transition-all">
              <span className={`text-[11px] font-black px-2.5 py-1 rounded-full ${domain.badgeBg}`}>
                {domain.name[lang] || domain.name.en}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {domain.description[lang] || domain.description.en}
              </p>
              <button
                onClick={() => { setActiveTab('learn'); setLearnLevel(3); }}
                className="text-xs font-extrabold text-blue-700 flex items-center gap-1 hover:underline"
              >
                <span>Start Domain Drills</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CORE PHILOSOPHY MESSAGE BANNER */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 text-white text-center sm:text-left shadow-lg border border-blue-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
            SignBridge Core Mission
          </span>
          <h4 className="text-lg font-black text-white">
            “ISL resources already exist. SignBridge India turns those resources into practical workplace communication skills.”
          </h4>
        </div>
        <button
          onClick={() => setActiveTab('institution')}
          className="px-5 py-3 bg-white text-slate-900 hover:bg-slate-100 font-extrabold rounded-xl text-xs shadow-md shrink-0 transition-all"
        >
          View Institution Portal
        </button>
      </div>
    </div>
  );
}

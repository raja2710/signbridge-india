import React, { useState } from 'react';
import { CATEGORIES, ISL_WORDS } from '../../data/islDatabase.js';
import ISLVisualizer2D from '../ISLVisualizer2D.jsx';
import { Grid, Hand, Hash, Users, Utensils, MapPin, UserCheck, AlertTriangle, HeartHandshake, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Grid, Hand, Hash, Users, Utensils, MapPin, UserCheck, AlertTriangle, HeartHandshake
};

export default function Level1Words({ lang, onStartPractice, completedSigns = [], setCompletedSigns }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSign, setActiveSign] = useState(ISL_WORDS[0]);

  const filteredWords = selectedCategory === 'all'
    ? ISL_WORDS
    : ISL_WORDS.filter((w) => w.category === selectedCategory);

  const toggleCompleted = (signId) => {
    if (completedSigns.includes(signId)) {
      setCompletedSigns(completedSigns.filter((id) => id !== signId));
    } else {
      setCompletedSigns([...completedSigns, signId]);
    }
  };

  return (
    <div className="space-y-5">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-blue-900/60 text-cyan-300 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Level 1 • Basic Vocabulary
        </span>
        <h2 className="text-xl font-extrabold mt-2">
          {lang === 'ta' ? 'அடிப்படை வார்த்தைகள்' : lang === 'ml' ? 'അടിസ്ഥാന വാക്കുകൾ' : 'Basic ISL Words'}
        </h2>
        <p className="text-xs text-blue-100 mt-1">
          {lang === 'ta'
            ? 'அத்தியாவசிய சைகைகளைக் கற்றுக்கொண்டு பயிற்சி செய்யுங்கள்.'
            : lang === 'ml'
            ? 'അത്യാവശ്യ കൈമുദ്രകൾ പഠിക്കുകയും പരിശീലിക്കുകയും ചെയ്യുക.'
            : 'Master individual ISL signs with 2D visual demonstrations and trilingual meanings.'}
        </p>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const IconComp = ICON_MAP[cat.icon] || Grid;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 ${
                isSelected
                  ? 'bg-blue-700 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <IconComp className="w-4 h-4" />
              <span>{cat.name[lang] || cat.name.en}</span>
            </button>
          );
        })}
      </div>

      {/* Active Sign 2D Visualizer Section */}
      {activeSign && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              {activeSign.name[lang] || activeSign.name.en}
            </h3>

            <button
              onClick={() => toggleCompleted(activeSign.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                completedSigns.includes(activeSign.id)
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${completedSigns.includes(activeSign.id) ? 'text-emerald-600' : ''}`} />
              {completedSigns.includes(activeSign.id) ? 'Mastered' : 'Mark Learned'}
            </button>
          </div>

          <ISLVisualizer2D
            sign={activeSign}
            lang={lang}
            onPracticeClick={() => onStartPractice(activeSign)}
          />

          {/* Meaning Card */}
          <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-xl text-xs space-y-1.5">
            <p className="font-semibold text-blue-900">
              <span className="font-extrabold text-blue-700">Trilingual Meaning:</span>
            </p>
            <div className="grid grid-cols-3 gap-2 text-slate-800 pt-1">
              <div className="bg-white p-2 rounded-lg border border-blue-100">
                <span className="text-[10px] font-bold text-blue-600 block">EN</span>
                {activeSign.meaning.en}
              </div>
              <div className="bg-white p-2 rounded-lg border border-blue-100">
                <span className="text-[10px] font-bold text-blue-600 block">தமிழ்</span>
                {activeSign.meaning.ta}
              </div>
              <div className="bg-white p-2 rounded-lg border border-blue-100">
                <span className="text-[10px] font-bold text-blue-600 block">മലയാളം</span>
                {activeSign.meaning.ml}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Words Grid */}
      <div>
        <h4 className="text-sm font-bold text-slate-700 mb-2.5">
          Select a Word to Practice ({filteredWords.length})
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {filteredWords.map((sign) => {
            const isActive = activeSign?.id === sign.id;
            const isDone = completedSigns.includes(sign.id);
            return (
              <button
                key={sign.id}
                onClick={() => setActiveSign(sign)}
                className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md scale-102'
                    : isDone
                    ? 'bg-emerald-50/80 border-emerald-200 text-slate-800'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:shadow-xs'
                }`}
              >
                {isDone && (
                  <CheckCircle2 className={`w-4 h-4 absolute top-2.5 right-2.5 ${isActive ? 'text-cyan-300' : 'text-emerald-600'}`} />
                )}
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider block w-fit mb-1 ${
                    isActive ? 'bg-blue-900/60 text-cyan-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {sign.category}
                  </span>
                  <h5 className="font-extrabold text-sm leading-snug">
                    {sign.name[lang] || sign.name.en}
                  </h5>
                </div>
                <div className={`text-[11px] mt-2 pt-1 border-t ${isActive ? 'border-blue-600 text-blue-100' : 'border-slate-100 text-slate-500'}`}>
                  {sign.name.en}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

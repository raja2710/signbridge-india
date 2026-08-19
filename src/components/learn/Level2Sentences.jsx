import React, { useState } from 'react';
import { ISL_SENTENCES, ISL_WORDS } from '../../data/islDatabase.js';
import ISLVisualizer2D from '../ISLVisualizer2D.jsx';
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export default function Level2Sentences({ lang, onStartPractice }) {
  const [activeSentence, setActiveSentence] = useState(ISL_SENTENCES[0]);

  // Find associated sign for current sentence
  const matchedSign = ISL_WORDS.find((w) => activeSentence.signIds.includes(w.id)) || ISL_WORDS[0];

  return (
    <div className="space-y-5">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-700 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-indigo-900/60 text-cyan-300 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Level 2 • Everyday Sentences
        </span>
        <h2 className="text-xl font-extrabold mt-2">
          {lang === 'ta' ? 'அடிப்படை வாக்கியங்கள்' : lang === 'ml' ? 'അടിസ്ഥാന വാക്യങ്ങൾ' : 'Basic Sentences'}
        </h2>
        <p className="text-xs text-indigo-100 mt-1">
          {lang === 'ta'
            ? 'அன்றாட உரையாடல் வாக்கியங்களை ISL அமைப்பில் கற்கவும்.'
            : lang === 'ml'
            ? 'ദിനംപ്രതിയുള്ള വാക്യങ്ങൾ ISL ശൈലിയിൽ പഠിക്കുക.'
            : 'Learn full everyday sentences with proper Indian Sign Language sentence syntax.'}
        </p>
      </div>

      {/* Active Sentence Player */}
      {activeSentence && (
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md uppercase">
              Target Sentence
            </span>
            <h3 className="text-lg font-extrabold text-slate-800">
              "{activeSentence.sentence[lang] || activeSentence.sentence.en}"
            </h3>
            
            {/* Syntax Explanation Box */}
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>ISL Structure Rule:</span>
              </div>
              <p className="text-amber-800">
                {activeSentence.explanation[lang] || activeSentence.explanation.en}
              </p>
            </div>
          </div>

          {/* 2D ISL Sequence Visualizer */}
          <ISLVisualizer2D
            sign={matchedSign}
            lang={lang}
            onPracticeClick={() => onStartPractice(matchedSign)}
          />
        </div>
      )}

      {/* Sentences List */}
      <div>
        <h4 className="text-sm font-bold text-slate-700 mb-2.5">
          Select Everyday Sentence to Learn ({ISL_SENTENCES.length})
        </h4>
        <div className="space-y-2.5">
          {ISL_SENTENCES.map((item, idx) => {
            const isActive = activeSentence.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSentence(item)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isActive
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                    isActive ? 'bg-blue-900 text-cyan-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h5 className="font-extrabold text-sm">
                      {item.sentence[lang] || item.sentence.en}
                    </h5>
                    <p className={`text-xs ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {item.sentence.en}
                    </p>
                  </div>
                </div>

                <ArrowRight className={`w-5 h-5 shrink-0 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

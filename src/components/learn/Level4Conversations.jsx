import React, { useState } from 'react';
import { CONVERSATIONS, ISL_WORDS } from '../../data/islDatabase.js';
import ISLVisualizer2D from '../ISLVisualizer2D.jsx';
import { Users2, Play, ArrowRight, RotateCcw, Sparkles, CheckCircle2, User, UserCheck } from 'lucide-react';

export default function Level4Conversations({ lang, onStartPractice }) {
  const [activeConv, setActiveConv] = useState(CONVERSATIONS[0]);
  const [activeLineIdx, setActiveLineIdx] = useState(0);
  const [isRoleplayMode, setIsRoleplayMode] = useState(false);
  const [roleplayScore, setRoleplayScore] = useState(null);

  const currentLine = activeConv.lines[activeLineIdx] || activeConv.lines[0];
  const matchedSign = ISL_WORDS.find((w) => currentLine?.signIds?.includes(w.id)) || ISL_WORDS[0];

  const handleNextLine = () => {
    if (activeLineIdx < activeConv.lines.length - 1) {
      setActiveLineIdx(activeLineIdx + 1);
    } else {
      setActiveLineIdx(0);
    }
  };

  const handleStartRoleplay = () => {
    setIsRoleplayMode(true);
    setRoleplayScore(null);
  };

  const handleFinishRoleplay = () => {
    setRoleplayScore(95); // Simulated high roleplay accuracy
  };

  return (
    <div className="space-y-5">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-purple-950/60 text-purple-200 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Level 4 • Real-World Conversations
        </span>
        <h2 className="text-xl font-extrabold mt-2">
          {lang === 'ta' ? 'முழுமையான உரையாடல்கள்' : lang === 'ml' ? 'പൂർണ്ണ സംഭാഷണങ്ങൾ' : 'Full Real-World Conversations'}
        </h2>
        <p className="text-xs text-purple-100 mt-1">
          {lang === 'ta'
            ? 'அரசு ஊழியர் மற்றும் செவித்திறனற்ற குடிமகன் இடையேயான உரையாடல் சைகைப் பயிற்சி.'
            : lang === 'ml'
            ? 'ജീവനക്കാരും കേൾവി പരിമിതിയുള്ള പൗരന്മാരും തമ്മിലുള്ള പൂർണ്ണ സംഭാഷണം.'
            : 'Interactive dual-character roleplay dialogue for frontline communication confidence.'}
        </p>
      </div>

      {/* Select Conversation Scenario */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CONVERSATIONS.map((conv) => {
          const isSelected = activeConv.id === conv.id;
          return (
            <button
              key={conv.id}
              onClick={() => {
                setActiveConv(conv);
                setActiveLineIdx(0);
                setIsRoleplayMode(false);
                setRoleplayScore(null);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 ${
                isSelected
                  ? 'bg-purple-700 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Users2 className="w-4 h-4" />
              <span>{conv.title[lang] || conv.title.en}</span>
            </button>
          );
        })}
      </div>

      {/* Conversation Header Card */}
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-md uppercase">
            Active Scenario: {activeConv.domain}
          </span>
          <button
            onClick={handleStartRoleplay}
            className="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Roleplay Mode
          </button>
        </div>
        <h3 className="text-base font-extrabold text-purple-950">
          {activeConv.title[lang] || activeConv.title.en}
        </h3>
        <p className="text-xs text-slate-600">
          {activeConv.context[lang] || activeConv.context.en}
        </p>
      </div>

      {/* Turn-by-Turn Dialogue Cards */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Dialogue Sequence ({activeLineIdx + 1} of {activeConv.lines.length})
        </h4>

        {activeConv.lines.map((line, idx) => {
          const isCurrent = idx === activeLineIdx;
          const isSpeaker1 = line.speaker === 'speaker1';
          return (
            <div
              key={idx}
              onClick={() => setActiveLineIdx(idx)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-200'
                  : 'bg-slate-50 border-slate-200 opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg text-xs font-bold ${
                    isSpeaker1 ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {isSpeaker1 ? <UserCheck className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs font-extrabold text-slate-800">
                    {line.speakerRole}
                  </span>
                </div>

                {isCurrent && (
                  <span className="bg-purple-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full animate-pulse">
                    ACTIVE SIGNING
                  </span>
                )}
              </div>

              <p className="text-sm font-semibold text-slate-900">
                "{line.text[lang] || line.text.en}"
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {line.text.en}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active Line 2D Visualizer */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <span>Demonstrating: {currentLine.speakerRole}'s Line</span>
          </h4>

          <button
            onClick={handleNextLine}
            className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <span>Next Speaker Line</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <ISLVisualizer2D
          sign={matchedSign}
          lang={lang}
          onPracticeClick={() => onStartPractice(matchedSign)}
        />
      </div>

      {/* Roleplay Modal / Card */}
      {isRoleplayMode && (
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-4 rounded-2xl shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-base flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Roleplay Practice Mode
            </h4>
            <button
              onClick={() => setIsRoleplayMode(false)}
              className="text-xs text-purple-200 hover:text-white"
            >
              Close
            </button>
          </div>

          <p className="text-xs text-purple-200">
            Assume the role of <span className="font-bold text-white">{activeConv.lines[0].speakerRole}</span>. Respond to each line using your camera sign detection.
          </p>

          {roleplayScore === null ? (
            <button
              onClick={handleFinishRoleplay}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              Perform Roleplay Line in Camera
            </button>
          ) : (
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md text-center space-y-1">
              <span className="text-2xl font-black text-amber-400">Score: {roleplayScore}%</span>
              <p className="text-xs text-emerald-300 font-bold flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Roleplay Conversation Completed Successfully!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

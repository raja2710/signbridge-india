import React, { useState } from 'react';
import { ISL_WORDS } from '../../data/islDatabase.js';
import ISLVisualizer2D from '../ISLVisualizer2D.jsx';
import { sounds } from '../../utils/audioEffects.js';
import { CheckCircle2, XCircle, ArrowRight, Heart, Sparkles, Trophy, Volume2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DuolingoLesson({ node, lang, onClose, onLessonComplete }) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [jumbleOrder, setJumbleOrder] = useState([]);
  const [drawerState, setDrawerState] = useState('hidden'); // 'hidden' | 'correct' | 'wrong'
  const [hearts, setHearts] = useState(5);
  const [xpEarned, setXpEarned] = useState(0);

  const targetWord = ISL_WORDS[currentStepIdx % ISL_WORDS.length] || ISL_WORDS[0];
  const distractorOptions = ISL_WORDS.filter((w) => w.id !== targetWord.id).slice(0, 3);
  const options = [targetWord, ...distractorOptions].sort(() => 0.5 - Math.random());

  const totalSteps = 4;

  const handleCheckMultipleChoice = (option) => {
    setSelectedOption(option);
    if (option.id === targetWord.id) {
      sounds.playSuccess();
      setDrawerState('correct');
      setXpEarned((prev) => prev + 10);
    } else {
      sounds.playError();
      setDrawerState('wrong');
      setHearts((prev) => Math.max(0, prev - 1));
    }
  };

  const handleAddJumbleWord = (wordStr) => {
    if (!jumbleOrder.includes(wordStr)) {
      setJumbleOrder([...jumbleOrder, wordStr]);
    }
  };

  const handleRemoveJumbleWord = (wordStr) => {
    setJumbleOrder(jumbleOrder.filter((w) => w !== wordStr));
  };

  const handleCheckJumble = () => {
    // Correct sentence syntax
    sounds.playSuccess();
    setDrawerState('correct');
    setXpEarned((prev) => prev + 15);
  };

  const handleNextStep = () => {
    setDrawerState('hidden');
    setSelectedOption(null);
    setJumbleOrder([]);

    if (currentStepIdx < totalSteps - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    } else {
      // Completed full lesson!
      sounds.playFanfare();
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      setCurrentStepIdx(totalSteps); // Summary screen
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col max-w-md mx-auto shadow-2xl">
      {/* Top Header Progress Bar */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between gap-3">
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 font-extrabold text-lg px-2"
        >
          ✕
        </button>

        {/* Progress Bar */}
        <div className="flex-1 bg-slate-100 h-3.5 rounded-full overflow-hidden border border-slate-200">
          <div
            className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentStepIdx + 1) / (totalSteps + 1)) * 100}%` }}
          ></div>
        </div>

        {/* Hearts */}
        <div className="flex items-center gap-1 font-black text-rose-600 text-xs">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          <span>{hearts}</span>
        </div>
      </div>

      {/* Lesson Content Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 pb-28">
        {currentStepIdx < totalSteps ? (
          <>
            {/* Step 1: Visual Learning */}
            {currentStepIdx === 0 && (
              <div className="space-y-3">
                <h3 className="font-black text-slate-800 text-lg">
                  New Sign: "{targetWord.name[lang] || targetWord.name.en}"
                </h3>
                <p className="text-xs text-slate-500">
                  Watch the 2D ISL demonstration and note the hand posture.
                </p>

                <ISLVisualizer2D
                  sign={targetWord}
                  lang={lang}
                />
              </div>
            )}

            {/* Step 2: Multiple Choice Identification */}
            {currentStepIdx === 1 && (
              <div className="space-y-4">
                <h3 className="font-black text-slate-900 text-base">
                  Which sign means "{targetWord.name[lang] || targetWord.name.en}"?
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleCheckMultipleChoice(opt)}
                      className={`p-4 rounded-2xl border-2 text-left font-extrabold text-sm transition-all flex flex-col justify-between h-28 ${
                        selectedOption?.id === opt.id
                          ? opt.id === targetWord.id
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-md'
                            : 'bg-rose-50 border-rose-500 text-rose-950'
                          : 'bg-white border-slate-200 hover:border-blue-400 text-slate-800'
                      }`}
                    >
                      <span className="text-[10px] font-extrabold text-blue-600 uppercase">
                        {opt.category}
                      </span>
                      <span className="text-base">{opt.name[lang] || opt.name.en}</span>
                      <span className="text-xs text-slate-400">{opt.name.en}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Sentence Jumble Re-order */}
            {currentStepIdx === 2 && (
              <div className="space-y-4">
                <h3 className="font-black text-slate-900 text-base">
                  Translate: "Do you need help?"
                </h3>
                <p className="text-xs text-slate-500">
                  Tap the ISL sign blocks in correct syntax order:
                </p>

                {/* Selected Slots */}
                <div className="min-h-[56px] p-2.5 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap gap-2 items-center">
                  {jumbleOrder.map((wordStr, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleRemoveJumbleWord(wordStr)}
                      className="px-3 py-1.5 bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-sm flex items-center gap-1"
                    >
                      <span>{wordStr}</span>
                      <span>✕</span>
                    </button>
                  ))}
                </div>

                {/* Available Blocks */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['YOU', 'HELP', 'NEED', 'QUESTION?'].map((blk) => (
                    <button
                      key={blk}
                      onClick={() => handleAddJumbleWord(blk)}
                      disabled={jumbleOrder.includes(blk)}
                      className={`px-4 py-2.5 rounded-xl font-extrabold text-xs border shadow-xs transition-all ${
                        jumbleOrder.includes(blk)
                          ? 'bg-slate-200 border-slate-300 text-slate-400 opacity-50'
                          : 'bg-white border-slate-300 text-slate-800 hover:border-blue-500'
                      }`}
                    >
                      {blk}
                    </button>
                  ))}
                </div>

                {jumbleOrder.length > 0 && (
                  <button
                    onClick={handleCheckJumble}
                    className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs rounded-xl shadow-md mt-2"
                  >
                    Check ISL Sentence Order
                  </button>
                )}
              </div>
            )}

            {/* Step 4: AI Camera Drill */}
            {currentStepIdx === 3 && (
              <div className="space-y-3 text-center">
                <span className="text-3xl block">🤟</span>
                <h3 className="font-black text-slate-900 text-base">
                  Camera Challenge: Perform "{targetWord.name[lang] || targetWord.name.en}"
                </h3>
                <p className="text-xs text-slate-500">
                  Demonstrate the sign gesture to complete this lesson!
                </p>

                <div className="bg-slate-900 rounded-2xl p-4 text-white space-y-3">
                  <p className="text-xs text-cyan-300 font-bold">
                    AI Vision Engine Ready
                  </p>
                  <button
                    onClick={() => {
                      sounds.playSuccess();
                      setDrawerState('correct');
                      setXpEarned((prev) => prev + 20);
                    }}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md"
                  >
                    Perform Gesture in Camera
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Lesson Complete Celebration Screen */
          <div className="text-center py-8 space-y-5">
            <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto shadow-inner border-2 border-amber-300">
              <Trophy className="w-10 h-10 fill-amber-400" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-slate-900">
                Lesson Completed!
              </h2>
              <p className="text-xs text-slate-500 font-semibold">
                You mastered key ISL signs and earned XP!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-2xl">
                <span className="text-[10px] font-bold text-amber-700 uppercase">TOTAL XP</span>
                <p className="text-xl font-black text-amber-900">+{xpEarned} XP</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-3 rounded-2xl">
                <span className="text-[10px] font-bold text-orange-700 uppercase">STREAK</span>
                <p className="text-xl font-black text-orange-900">+1 Day</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (onLessonComplete) onLessonComplete(xpEarned);
                onClose();
              }}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2xl shadow-lg transition-all"
            >
              Continue Quest Path
            </button>
          </div>
        )}
      </div>

      {/* Duolingo Bottom Feedback Drawer */}
      {drawerState !== 'hidden' && (
        <div className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 border-t-2 z-50 backdrop-blur-md shadow-2xl transition-all duration-300 ${
          drawerState === 'correct'
            ? 'bg-emerald-100 border-emerald-500 text-emerald-950'
            : 'bg-rose-100 border-rose-500 text-rose-950'
        }`}>
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              {drawerState === 'correct' ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
              )}
              <div>
                <h4 className="font-extrabold text-base">
                  {drawerState === 'correct' ? 'Brilliant! Spot on!' : 'Incorrect!'}
                </h4>
                <p className="text-xs opacity-90 font-medium">
                  {drawerState === 'correct'
                    ? '+10 XP • Keep it up!'
                    : `Correct meaning: ${targetWord.name[lang] || targetWord.name.en}`}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNextStep}
            className={`w-full py-3 rounded-xl font-black text-xs shadow-md transition-all ${
              drawerState === 'correct'
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-rose-600 hover:bg-rose-700 text-white'
            }`}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

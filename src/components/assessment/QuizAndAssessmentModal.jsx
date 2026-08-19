import React, { useState } from 'react';
import { X, CheckCircle2, Award, Sparkles, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { ISL_WORDS } from '../../data/islDatabase.js';

export default function QuizAndAssessmentModal({ isOpen, onClose, levelNumber, lang, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      id: 1,
      type: 'identify',
      question: lang === 'ta' ? 'இந்த ISL சைகை என்ன குறிக்கிறது?' : lang === 'ml' ? 'ഈ ISL അടയാളം എന്താണ് സൂചിപ്പിക്കുന്നത്?' : 'What does this ISL sign demonstration mean?',
      sign: ISL_WORDS[0], // Hello
      options: ['Hello / Namaste', 'Water', 'Thank You', 'Doctor'],
      correct: 'Hello / Namaste'
    },
    {
      id: 2,
      type: 'identify',
      question: lang === 'ta' ? 'அவசர உதவி தேவைப்படும் போது பயன்படுத்தப்படும் ISL சைகை எது?' : lang === 'ml' ? 'അടിയന്തര സഹായത്തിന് ഏത് ISL അടയാളമാണ് ഉപയോഗിക്കുന്നത്?' : 'Which sign is used to request emergency assistance?',
      sign: ISL_WORDS[2], // Help
      options: ['Food', 'Help', 'Hospital', 'Medicine'],
      correct: 'Help'
    },
    {
      id: 3,
      type: 'sentence',
      question: lang === 'ta' ? '"I need water" என்பதற்கான சரியான ISL வரிசை எது?' : lang === 'ml' ? '"I need water" എന്നതിന്റെ ശരിയായ ISL ക്രമം ഏതാണ്?' : 'What is the correct ISL sequence for "I need water"?',
      sign: ISL_WORDS[3], // Water
      options: ['ME ➔ NEED ➔ WATER', 'WATER ➔ ME ➔ NEED', 'NEED ➔ WATER ➔ ME', 'WATER ➔ NEED'],
      correct: 'ME ➔ NEED ➔ WATER'
    }
  ];

  const q = questions[currentStep];

  const handleSelectOption = (opt) => {
    if (isSubmitted) return;
    setSelectedAnswer(opt);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    setIsSubmitted(true);
    if (selectedAnswer === q.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      const finalPercentage = Math.round(((score + (selectedAnswer === q.correct ? 1 : 0)) / questions.length) * 100);
      onComplete(finalPercentage);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsSubmitted(false);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="font-black text-base leading-none">
                Level {levelNumber} Competency Assessment
              </h3>
              <p className="text-[11px] text-blue-200 mt-1">
                Question {currentStep + 1} of {questions.length}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isFinished ? (
          <div className="p-6 space-y-5">
            <div className="space-y-2">
              <h4 className="font-extrabold text-slate-900 text-sm">{q.question}</h4>
              
              {/* Visual Sign Display */}
              <div className="p-4 bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl text-white text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 text-3xl flex items-center justify-center border border-cyan-400/40">
                  🤟
                </div>
                <div className="text-xs font-bold text-cyan-300">
                  "{q.sign.name[lang] || q.sign.name.en}"
                </div>
                <p className="text-[11px] text-slate-300 italic">
                  {q.sign.pose.movement} — {q.sign.pose.rightHand}
                </p>
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-2">
              {q.options.map((opt) => {
                const isChosen = selectedAnswer === opt;
                let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-400';
                if (isSubmitted) {
                  if (opt === q.correct) btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-black';
                  else if (isChosen) btnStyle = 'bg-rose-50 border-rose-400 text-rose-800';
                } else if (isChosen) {
                  btnStyle = 'bg-blue-50 border-blue-600 text-blue-900 font-bold';
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isSubmitted && opt === q.correct && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Submit / Next Button */}
            {!isSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="w-full py-3 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{currentStep < questions.length - 1 ? 'Next Question' : 'View Assessment Score'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          /* Finished Result View */
          <div className="p-6 text-center space-y-5 animate-fadeIn">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl font-black shadow-inner">
              🏆
            </div>

            <div className="space-y-1">
              <h4 className="font-black text-xl text-slate-900">Assessment Complete!</h4>
              <p className="text-xs text-slate-600">
                Score: <span className="font-extrabold text-blue-700 text-sm">{Math.round((score / questions.length) * 100)}%</span>
              </p>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 font-semibold leading-relaxed">
              ✓ Basic Competency Achieved for Level {levelNumber}. You have earned +100 XP towards your SignBridge India Basic ISL Communication Certificate!
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                Retake
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs rounded-xl shadow-md transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

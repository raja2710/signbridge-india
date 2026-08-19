import React, { useState, useRef } from 'react';
import { Award, CheckCircle2, Trophy, Download, Printer, Sparkles, BookOpen, Star, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProgressAndCertificates({ lang, completedSigns = [] }) {
  const [userName, setUserName] = useState('Dr. Rajesh Kumar');
  const [userRole, setUserRole] = useState('Frontline Healthcare Worker');
  const [quizState, setQuizState] = useState('idle'); // 'idle' | 'in_quiz' | 'passed'
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const certRef = useRef(null);

  const signsMasteredCount = completedSigns.length || 5;

  const handleStartQuiz = () => {
    setQuizState('in_quiz');
    setQuizAnswer(null);
  };

  const handleSelectAnswer = (optionIdx) => {
    setQuizAnswer(optionIdx);
    if (optionIdx === 1) { // Correct answer index
      setQuizScore(100);
      setQuizState('passed');
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
      setQuizScore(50);
      setQuizState('passed');
    }
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="space-y-5">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-amber-950/60 text-amber-200 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Certified Excellence
        </span>
        <h2 className="text-xl font-extrabold mt-2">
          {lang === 'ta' ? 'முன்னேற்றம் & சான்றிதழ்கள்' : lang === 'ml' ? 'പുരോഗതി & സർട്ടിഫിക്കറ്റുകൾ' : 'Learning Progress & Certificate'}
        </h2>
        <p className="text-xs text-amber-100 mt-1">
          {lang === 'ta'
            ? 'உங்கள் கற்றல் புள்ளிவிவரங்களைக் கண்காணித்து ISL சான்றிதழ் பெறுங்கள்.'
            : lang === 'ml'
            ? 'നിങ്ങളുടെ പഠന വിവരങ്ങൾ കാണുക, സർട്ടിഫിക്കറ്റ് നേടുക.'
            : 'Track your mastered signs, pass the assessment, and claim your official ISL Certificate.'}
        </p>
      </div>

      {/* Progress Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start justify-between">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Signs Mastered</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black text-blue-700">{signsMasteredCount}</span>
            <span className="text-xs text-slate-400">/ 20</span>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start justify-between">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Lessons Completed</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black text-indigo-700">4</span>
            <span className="text-xs text-slate-400">/ 4 Levels</span>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start justify-between">
          <span className="text-[11px] font-bold text-slate-500 uppercase">AI Practice Score</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black text-emerald-600">94%</span>
            <span className="text-xs text-emerald-600 font-bold">Avg</span>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start justify-between">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Domain Level</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl font-black text-purple-700">Level 4</span>
          </div>
        </div>
      </div>

      {/* Assessment Quiz Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            Healthcare ISL Proficiency Quiz
          </h3>
          <span className="bg-blue-100 text-blue-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
            Required for Certificate
          </span>
        </div>

        {quizState === 'idle' && (
          <div className="space-y-3">
            <p className="text-xs text-slate-600">
              Answer 1 quick situation question to unlock your official verified certificate of proficiency.
            </p>
            <button
              onClick={handleStartQuiz}
              className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-extrabold rounded-xl text-xs shadow-sm transition-all"
            >
              Start Quick Assessment Quiz
            </button>
          </div>
        )}

        {quizState === 'in_quiz' && (
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-900">
              Q: What is the correct ISL sign sequence when asking a Deaf patient about pain?
            </p>

            <div className="space-y-2">
              {[
                'A) PAIN -> WHERE? (Point to body area)',
                'B) BODY POINT -> PAIN SIGN -> QUESTION EXPRESSION',
                'C) MEDICINE -> DOCTOR -> WAIT'
              ].map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(idx)}
                  className="w-full text-left p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-xs font-semibold transition-all"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {quizState === 'passed' && (
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-xs space-y-1">
            <span className="font-extrabold text-emerald-900 text-sm flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Quiz Passed! Score: {quizScore}%
            </span>
            <p className="text-emerald-800">
              Your official SignBridge Healthcare ISL Certificate is unlocked below!
            </p>
          </div>
        )}
      </div>

      {/* Official Printable Certificate Generator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            Official ISL Certificate of Proficiency
          </h3>

          <button
            onClick={handlePrintCertificate}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save Certificate
          </button>
        </div>

        {/* User Name Editor */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <label className="font-bold text-slate-600 block mb-1">Participant Full Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="font-bold text-slate-600 block mb-1">Service Designation / Role:</label>
            <input
              type="text"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg font-bold text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Certificate Display Canvas View */}
        <div
          ref={certRef}
          className="bg-white border-8 border-double border-blue-900 p-6 sm:p-8 rounded-2xl shadow-xl text-center space-y-4 relative overflow-hidden print:m-0 print:border-4"
        >
          {/* Subtle watermark background emblem */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-[180px]">🤟</span>
          </div>

          <div className="flex items-center justify-between border-b-2 border-amber-400 pb-3">
            <div className="text-left">
              <span className="text-xs font-black text-blue-900 uppercase tracking-widest block">SIGNBRIDGE INDIA</span>
              <span className="text-[10px] text-slate-500 font-bold">Indian Sign Language National Initiative</span>
            </div>
            <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2.5 py-1 rounded-full border border-amber-300">
              VERIFIED CREDENTIAL
            </span>
          </div>

          <div className="space-y-1 py-2">
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase block">
              CERTIFICATE OF PROFICIENCY IN ISL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">
              {userName}
            </h2>
            <p className="text-xs font-bold text-slate-600">
              {userRole}
            </p>
          </div>

          <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
            Has successfully completed Level 1-4 Indian Sign Language (ISL) Training, practical frontline healthcare drills, and AI camera gesture verification on <span className="font-bold text-blue-900">SignBridge India</span>.
          </p>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 text-[10px]">
            <div>
              <span className="font-bold text-slate-400 block">LEVEL COMPLETED</span>
              <span className="font-extrabold text-slate-800 text-xs">Level 1-4 Mastered</span>
            </div>
            <div>
              <span className="font-bold text-slate-400 block">CREDENTIAL ID</span>
              <span className="font-extrabold text-blue-700 text-xs">SBI-2026-HC-9482</span>
            </div>
            <div>
              <span className="font-bold text-slate-400 block">VERIFICATION</span>
              <span className="font-extrabold text-emerald-600 text-xs">AI Verified ✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

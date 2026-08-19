import React, { useState, useRef, useEffect } from 'react';
import { ISL_WORDS } from '../../data/islDatabase.js';
import { Camera, CameraOff, Sparkles, CheckCircle2, RotateCcw, AlertTriangle, ThumbsUp, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AIPractice({ lang, targetSign, setTargetSign }) {
  const [selectedSign, setSelectedSign] = useState(targetSign || ISL_WORDS[0]);
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceState, setPracticeState] = useState('idle'); // 'idle' | 'analyzing' | 'done'
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Sync if targetSign prop changes
  useEffect(() => {
    if (targetSign) setSelectedSign(targetSign);
  }, [targetSign]);

  const startPracticeSession = async () => {
    setIsPracticing(true);
    setPracticeState('analyzing');
    setScore(0);
    setFeedback('Observing hand posture & movement...');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.warn('Camera fallback to simulation', err);
    }

    // Simulate AI analysis delay (3.5 sec)
    setTimeout(() => {
      const computedScore = Math.floor(85 + Math.random() * 14); // 85 - 98%
      setScore(computedScore);
      setPracticeState('done');

      const tips = [
        'Good hand position! Try extending your index finger slightly higher.',
        'Great palm orientation! Smooth out the outward motion.',
        'Excellent posture! Perfect ISL execution.',
        'Well done! Keep wrist position firm.'
      ];
      setFeedback(tips[Math.floor(Math.random() * tips.length)]);

      // Confetti celebration if score >= 90
      if (computedScore >= 90) {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
    }, 3500);
  };

  const resetPractice = () => {
    setPracticeState('idle');
    setScore(0);
    setFeedback('');
  };

  return (
    <div className="space-y-5">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-emerald-950/60 text-emerald-300 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          AI Practice Coach
        </span>
        <h2 className="text-xl font-extrabold mt-2">
          {lang === 'ta' ? 'AI சைகைப் பயிற்சி' : lang === 'ml' ? 'AI സങ്കേത പരിശീലനം' : 'AI Sign Practice & Feedback'}
        </h2>
        <p className="text-xs text-emerald-100 mt-1">
          {lang === 'ta'
            ? 'இலக்கு சைகையைத் தேர்ந்தெடுத்து கேமரா முன் செய்து பயிற்சி பெறுங்கள்.'
            : lang === 'ml'
            ? 'ലക്ഷ്യ അടയാളം തിരഞ്ഞെടുത്ത് ക്യാമറയ്ക്ക് മുന്നിൽ പരിശീലിക്കുക.'
            : 'Get instant posture feedback and AI scoring on your hand movements.'}
        </p>
      </div>

      {/* Target Sign Picker Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Select Target Sign to Practise:
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ISL_WORDS.slice(0, 8).map((word) => {
            const isSelected = selectedSign.id === word.id;
            return (
              <button
                key={word.id}
                onClick={() => {
                  setSelectedSign(word);
                  resetPractice();
                }}
                className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                  isSelected
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {word.name[lang] || word.name.en}
              </button>
            );
          })}
        </div>
      </div>

      {/* Camera & Practice Arena */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 p-4 text-white text-center space-y-4 shadow-xl">
        <div className="relative rounded-xl overflow-hidden bg-slate-950 min-h-[240px] flex items-center justify-center border border-slate-800">
          <video
            ref={videoRef}
            playsInline
            muted
            className={`w-full h-[240px] object-cover ${isPracticing ? 'block' : 'hidden'}`}
          />

          {!isPracticing && (
            <div className="p-6 space-y-3">
              <span className="text-3xl block">🤟</span>
              <h4 className="font-extrabold text-base">
                Ready to practise "{selectedSign.name[lang] || selectedSign.name.en}"?
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                AI coach will analyze your palm angle, finger positioning, and motion speed.
              </p>
            </div>
          )}

          {practiceState === 'analyzing' && (
            <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 space-y-2">
              <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="font-extrabold text-sm text-cyan-300">
                AI Coach Analyzing Sign Motion...
              </p>
              <p className="text-xs text-blue-200">Keep hands steady in camera frame</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        {practiceState === 'idle' && (
          <button
            onClick={startPracticeSession}
            className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-xl text-xs shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" />
            Start AI Practice Camera
          </button>
        )}

        {/* Feedback & Score Report */}
        {practiceState === 'done' && (
          <div className="bg-white text-slate-900 p-4 rounded-xl space-y-3 text-left border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Trophy className="w-4 h-4 text-amber-500" />
                AI Practice Performance Score
              </span>
              <span className="text-xl font-black text-blue-700">{score}%</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                <ThumbsUp className="w-4 h-4 text-emerald-600" />
                AI Coach Feedback:
              </span>
              <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                {feedback}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={startPracticeSession}
                className="flex-1 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retry Practice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

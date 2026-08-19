import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, FastForward, CheckCircle, Sparkles, Volume2, Eye, ZoomIn, ZoomOut, Sliders, Layers } from 'lucide-react';

export default function ISLVisualizer2D({ sign, lang = 'en', onPracticeClick }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1.0); // 0.25, 0.5, 1.0
  const [currentStep, setCurrentStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [zoomLevel, setZoomLevel] = useState('full'); // 'full' or 'hand'
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  const steps = sign?.breakdownSteps || [
    '1. Form initial hand posture near chest/head',
    '2. Execute distinct sign motion trajectory',
    '3. Hold final posture with matching facial expression'
  ];

  // Speech synthesizer for audio pronunciation
  const speakName = () => {
    if ('speechSynthesis' in window && sign?.name) {
      window.speechSynthesis.cancel();
      const textToSpeak = sign.name[lang] || sign.name.en;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      if (lang === 'ta') utterance.lang = 'ta-IN';
      else if (lang === 'ml') utterance.lang = 'ml-IN';
      else utterance.lang = 'en-IN';

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Step cycling timer
  useEffect(() => {
    let interval;
    if (isPlaying && steps.length > 0) {
      const stepDuration = Math.round(1800 / speedMultiplier);
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, stepDuration);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier, steps.length]);

  // High-Definition 2D ISL Kinematic Animation Engine Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;
    let trailPoints = [];

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // 1. Studio Gradient Background
      const studioGradient = ctx.createLinearGradient(0, 0, width, height);
      studioGradient.addColorStop(0, '#090D16');
      studioGradient.addColorStop(0.5, '#0F172A');
      studioGradient.addColorStop(1, '#1E1B4B');
      ctx.fillStyle = studioGradient;
      ctx.fillRect(0, 0, width, height);

      // Radial Studio Spotlight
      const spotlight = ctx.createRadialGradient(width / 2, height / 3, 20, width / 2, height / 3, 220);
      spotlight.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      spotlight.addColorStop(1, 'rgba(15, 23, 42, 0)');
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // Floor Perspective Grid
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.3)';
      ctx.lineWidth = 1;
      for (let y = 200; y < height; y += 22) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (isPlaying) {
        t += 0.04 * speedMultiplier;
      }

      ctx.save();

      // Zoom transform if hand zoom active
      if (zoomLevel === 'hand') {
        ctx.translate(width / 2, height / 2);
        ctx.scale(1.4, 1.4);
        ctx.translate(-width / 2, -height / 2 + 30);
      }

      const cx = width / 2;
      const headY = 70;

      // 2. Character Torso & Neck
      // Shoulders / Shirt
      ctx.fillStyle = '#1D4ED8';
      ctx.beginPath();
      ctx.moveTo(cx - 65, 165);
      ctx.lineTo(cx + 65, 165);
      ctx.lineTo(cx + 80, 310);
      ctx.lineTo(cx - 80, 310);
      ctx.closePath();
      ctx.fill();

      // Neck & Stethoscope V-Neck
      ctx.fillStyle = '#FFD19A';
      ctx.fillRect(cx - 16, 115, 32, 50);

      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx - 30, 165);
      ctx.lineTo(cx, 215);
      ctx.lineTo(cx + 30, 165);
      ctx.stroke();

      // Head & Skin Tone
      ctx.fillStyle = '#FFD19A';
      ctx.beginPath();
      ctx.arc(cx, headY, 40, 0, Math.PI * 2);
      ctx.fill();

      // Hair
      ctx.fillStyle = '#1E1B4B';
      ctx.beginPath();
      ctx.arc(cx, headY - 12, 42, Math.PI * 0.9, Math.PI * 2.1);
      ctx.fill();

      // Eyes & Expression
      ctx.fillStyle = '#0F172A';
      ctx.beginPath();
      ctx.arc(cx - 14, headY - 4, 3.5, 0, Math.PI * 2);
      ctx.arc(cx + 14, headY - 4, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Smile / Mouth Gesture
      ctx.strokeStyle = '#991B1B';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, headY + 10, 12, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();

      // Helper function to draw realistic detailed hand with joints & landmarks
      const drawHand = (handX, handY, config = {}) => {
        const {
          fingers = [1, 1, 1, 1, 1], // [Thumb, Index, Middle, Ring, Pinky] 1=ext, 0=closed
          angle = 0,
          scale = 1,
          color = '#FFD19A',
          jointColor = '#D97706'
        } = config;

        ctx.save();
        ctx.translate(handX, handY);
        ctx.rotate(angle);
        ctx.scale(scale, scale);

        // Palm Base
        ctx.fillStyle = color;
        ctx.strokeStyle = '#B45309';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, 17, 19, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // 5 Anatomical Finger Rays
        const fingerAngles = [-0.65, -0.28, 0, 0.28, 0.65];
        const fingerLengths = [18, 27, 30, 27, 21];

        fingerAngles.forEach((fAngle, idx) => {
          const ext = fingers[idx];
          const len = fingerLengths[idx] * ext;

          const startX = Math.cos(fAngle - Math.PI / 2) * 12;
          const startY = Math.sin(fAngle - Math.PI / 2) * 12;
          const midX = startX + Math.cos(fAngle - Math.PI / 2) * (len * 0.5);
          const midY = startY + Math.sin(fAngle - Math.PI / 2) * (len * 0.5);
          const endX = startX + Math.cos(fAngle - Math.PI / 2) * len;
          const endY = startY + Math.sin(fAngle - Math.PI / 2) * len;

          // Finger segment line
          ctx.strokeStyle = color;
          ctx.lineWidth = idx === 0 ? 7 : 5;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          // Skeletal Landmark Overlay if enabled
          if (showSkeleton) {
            ctx.fillStyle = '#0284C7';
            ctx.beginPath();
            ctx.arc(midX, midY, 2.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#38BDF8';
            ctx.beginPath();
            ctx.arc(endX, endY, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        ctx.restore();
      };

      // 3. Render Distinct Sign Kinematic Trajectories based on sign.id
      const signId = sign?.id || 'w-hello';
      const leftArmBaseX = cx - 50;
      const rightArmBaseX = cx + 50;
      const shoulderY = 175;

      let activeHandX = cx + 50;
      let activeHandY = headY - 15;

      if (signId === 'w-hello') {
        // Hello: Right hand near temple waving in fluid arc
        const wave = Math.sin(t * 3.5) * 22;
        activeHandX = cx + 45 + wave;
        activeHandY = headY - 15;

        // Left arm resting
        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(leftArmBaseX, shoulderY);
        ctx.lineTo(leftArmBaseX - 35, shoulderY + 85);
        ctx.stroke();
        drawHand(leftArmBaseX - 35, shoulderY + 85, { fingers: [0.5, 0.5, 0.5, 0.5, 0.5] });

        // Right arm extended to temple
        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(rightArmBaseX, shoulderY);
        ctx.lineTo(rightArmBaseX + 25, shoulderY - 35);
        ctx.lineTo(activeHandX, activeHandY);
        ctx.stroke();

        // Motion arc curve
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(cx + 45, headY - 15, 30, -Math.PI / 4, Math.PI / 4);
        ctx.stroke();
        ctx.setLineDash([]);

        drawHand(activeHandX, activeHandY, { fingers: [1, 1, 1, 1, 1], angle: 0.2 });

      } else if (signId === 'w-thank-you') {
        // Thank You: Fingertips at chin sweeping forward down toward recipient
        const sweep = (Math.sin(t * 2.5) + 1) * 0.5; // 0 to 1
        activeHandX = cx + sweep * 15;
        activeHandY = headY + 25 + sweep * 55;

        // Right arm trajectory
        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(rightArmBaseX, shoulderY);
        ctx.lineTo(activeHandX, activeHandY);
        ctx.stroke();

        // Forward motion glow line
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx, headY + 25);
        ctx.lineTo(cx, headY + 80);
        ctx.stroke();

        drawHand(activeHandX, activeHandY, { fingers: [1, 1, 1, 1, 1], angle: -0.4 });

      } else if (signId === 'w-help') {
        // Help: Left hand flat palm up, Right hand fist with thumb up lifting upward together
        const lift = Math.sin(t * 3) * 18;

        const leftX = cx - 25;
        const leftY = shoulderY + 60 - lift;
        const rightX = cx - 20;
        const rightY = shoulderY + 45 - lift;

        activeHandX = rightX;
        activeHandY = rightY;

        // Left arm flat base
        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(leftArmBaseX, shoulderY);
        ctx.lineTo(leftX, leftY);
        ctx.stroke();
        drawHand(leftX, leftY, { fingers: [1, 1, 1, 1, 1], angle: -1.57 });

        // Right arm fist on left palm
        ctx.strokeStyle = '#1E40AF';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(rightArmBaseX, shoulderY);
        ctx.lineTo(rightX, rightY);
        ctx.stroke();
        drawHand(rightX, rightY, { fingers: [1, 0, 0, 0, 0], angle: 0 }); // Thumbs up fist

        // Upward lifting motion vector arrows
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - 20, leftY + 25);
        ctx.lineTo(cx - 20, leftY - 25);
        ctx.stroke();

      } else if (signId === 'w-doctor') {
        // Doctor: Double pulse tap on left wrist
        const tap = Math.sin(t * 6) > 0 ? 6 : 0;

        const wristX = cx - 35;
        const wristY = shoulderY + 60;

        // Left forearm
        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(leftArmBaseX, shoulderY);
        ctx.lineTo(wristX, wristY);
        ctx.stroke();
        drawHand(wristX - 15, wristY, { fingers: [1, 1, 1, 1, 1], angle: -1.2 });

        // Right tapping hand
        activeHandX = wristX + tap;
        activeHandY = wristY - 10;

        ctx.strokeStyle = '#1E40AF';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(rightArmBaseX, shoulderY);
        ctx.lineTo(activeHandX, activeHandY);
        ctx.stroke();

        drawHand(activeHandX, activeHandY, { fingers: [0, 1, 1, 0, 0], angle: 0.8 }); // 2 fingers pulse tap

        // Pulse pulse aura ring
        ctx.strokeStyle = '#EF4444';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(wristX, wristY, 15 + tap, 0, Math.PI * 2);
        ctx.stroke();

      } else if (signId === 'w-water') {
        // Water: W-hand shape (3 fingers) tapping chin twice
        const tap = Math.sin(t * 4) > 0 ? 5 : 0;

        activeHandX = cx + 18;
        activeHandY = headY + 15 + tap;

        // Left arm relaxed
        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(leftArmBaseX, shoulderY);
        ctx.lineTo(leftArmBaseX - 35, shoulderY + 85);
        ctx.stroke();
        drawHand(leftArmBaseX - 35, shoulderY + 85, { fingers: [0.5, 0.5, 0.5, 0.5, 0.5] });

        // Right arm W shape
        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(rightArmBaseX, shoulderY);
        ctx.lineTo(activeHandX, activeHandY);
        ctx.stroke();

        drawHand(activeHandX, activeHandY, { fingers: [0, 1, 1, 1, 0], angle: -0.2 });

      } else {
        // Generic animated sign posture
        const wave = Math.sin(t * 3.5) * 15;
        activeHandX = cx + 35 + wave;
        activeHandY = shoulderY + 30;

        ctx.strokeStyle = '#1D4ED8';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(rightArmBaseX, shoulderY);
        ctx.lineTo(activeHandX, activeHandY);
        ctx.stroke();

        drawHand(activeHandX, activeHandY, { fingers: [1, 1, 1, 1, 1] });
      }

      // Motion Trail Collection
      if (isPlaying) {
        trailPoints.push({ x: activeHandX, y: activeHandY, alpha: 1.0 });
        if (trailPoints.length > 15) trailPoints.shift();
      }

      // Render Motion Particle Trail
      trailPoints.forEach((pt, idx) => {
        pt.alpha -= 0.05;
        if (pt.alpha > 0) {
          ctx.fillStyle = `rgba(56, 189, 248, ${pt.alpha * 0.6})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, (idx + 1) * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.restore();

      // 4. Studio HUD Overlay
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.roundRect(14, 14, 210, 38, 12);
      ctx.fill();
      ctx.strokeStyle = '#0284C7';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`2D ISL Vector Animation:`, 24, 30);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(sign?.name?.en || 'Standard Sign', 24, 44);

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [sign, isPlaying, speedMultiplier, showSkeleton, zoomLevel]);

  if (!sign) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
      {/* Studio Viewport */}
      <div className="relative bg-slate-950 flex flex-col items-center justify-center p-3">
        <canvas
          ref={canvasRef}
          width={420}
          height={320}
          className="rounded-2xl w-full max-w-[420px] h-[300px] object-contain bg-slate-900 border border-slate-800 shadow-2xl"
        />

        {/* Floating Top Controls: Audio Pronunciation & Skeleton Toggle & Zoom */}
        <div className="absolute top-5 right-5 flex items-center gap-2">
          <button
            onClick={() => setShowSkeleton(!showSkeleton)}
            className={`p-2.5 rounded-xl border backdrop-blur-md shadow-md text-xs font-bold transition-all ${
              showSkeleton ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900/80 border-slate-700 text-slate-400'
            }`}
            title="Toggle Hand Landmark Skeleton"
          >
            <Layers className="w-4 h-4" />
          </button>

          <button
            onClick={() => setZoomLevel(zoomLevel === 'full' ? 'hand' : 'full')}
            className={`p-2.5 rounded-xl border backdrop-blur-md shadow-md text-xs font-bold transition-all ${
              zoomLevel === 'hand' ? 'bg-amber-500/20 border-amber-400 text-amber-300' : 'bg-slate-900/80 border-slate-700 text-slate-400'
            }`}
            title={zoomLevel === 'hand' ? 'Zoom to Full View' : 'Zoom to Hand Posture'}
          >
            {zoomLevel === 'hand' ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={speakName}
            className={`p-2.5 rounded-xl shadow-lg transition-all ${
              isSpeaking ? 'bg-amber-500 text-white scale-110' : 'bg-white text-blue-700 hover:bg-blue-50'
            }`}
            title="Audio Pronunciation"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Speed Badge */}
        <div className="absolute bottom-5 left-5 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-slate-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{speedMultiplier}x Speed</span>
        </div>
      </div>

      {/* Control Toolbar & Step Scrubber */}
      <div className="p-4 bg-slate-50 space-y-4">
        {/* Playback Controls & Speed Multipliers */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-xl shadow-md flex items-center gap-1.5 font-black text-xs transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play 2D Animation'}
            </button>

            {/* Speed Pills */}
            <div className="bg-white p-1 rounded-xl border border-slate-200 flex items-center gap-1 text-[11px] font-bold">
              {[0.25, 0.5, 1.0].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeedMultiplier(s)}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    speedMultiplier === s ? 'bg-blue-700 text-white shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentStep(0)}
              className="p-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-bold transition-all"
              title="Repeat from Step 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {onPracticeClick && (
            <button
              onClick={() => onPracticeClick(sign)}
              className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-md text-xs font-black flex items-center gap-1.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Practice in AI Camera
            </button>
          )}
        </div>

        {/* Interactive Step Breakdown Scrubber */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-extrabold">
            <span>Anatomical Step {currentStep + 1} of {steps.length}</span>
            <span className="text-blue-700 font-black">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>

          {/* Interactive Progress Bar Scrubber */}
          <div className="flex items-center gap-1.5">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2.5 flex-1 rounded-full transition-all ${
                  idx === currentStep ? 'bg-blue-700 ring-2 ring-blue-400' : idx < currentStep ? 'bg-blue-400' : 'bg-slate-200'
                }`}
                title={`Jump to Step ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-xs font-extrabold text-slate-800 flex items-start gap-2 pt-1">
            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>{steps[currentStep]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

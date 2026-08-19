import React from 'react';
import { Eye, Sun, Moon, Type, Keyboard, X } from 'lucide-react';

export default function AccessibilityToolbar({ highContrast, setHighContrast, fontSize, setFontSize, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 w-72 bg-slate-900 text-white rounded-3xl p-5 shadow-2xl border border-slate-700 animate-fadeIn space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-cyan-400" />
          <h4 className="font-extrabold text-sm text-white">Accessibility Settings</h4>
        </div>
        <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* High Contrast */}
      <div className="space-y-1.5">
        <span className="text-xs font-bold text-slate-300">Display Contrast Mode</span>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setHighContrast(false)}
            className={`py-2 rounded-xl text-xs font-bold border transition-all ${
              !highContrast ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Standard Mode
          </button>
          <button
            onClick={() => setHighContrast(true)}
            className={`py-2 rounded-xl text-xs font-bold border transition-all ${
              highContrast ? 'bg-amber-400 border-amber-300 text-slate-950 font-black' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            High Contrast
          </button>
        </div>
      </div>

      {/* Font Size */}
      <div className="space-y-1.5">
        <span className="text-xs font-bold text-slate-300">Text Size</span>
        <div className="grid grid-cols-3 gap-1.5">
          <button
            onClick={() => setFontSize('normal')}
            className={`py-1.5 rounded-xl text-xs font-bold border transition-all ${
              fontSize === 'normal' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => setFontSize('large')}
            className={`py-1.5 rounded-xl text-xs font-bold border transition-all ${
              fontSize === 'large' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Large
          </button>
          <button
            onClick={() => setFontSize('xlarge')}
            className={`py-1.5 rounded-xl text-xs font-bold border transition-all ${
              fontSize === 'xlarge' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            Extra Large
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-800/80 rounded-2xl text-[11px] text-slate-300 space-y-1">
        <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
          <Keyboard className="w-3.5 h-3.5" />
          <span>Keyboard Shortcuts</span>
        </div>
        <p>• Tab / Shift+Tab to navigate controls</p>
        <p>• Spacebar to play/pause 2D sign animations</p>
      </div>
    </div>
  );
}

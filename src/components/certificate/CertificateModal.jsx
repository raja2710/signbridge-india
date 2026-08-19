import React from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Download, Printer, QrCode, Sparkles } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, userName, score = 89.5 }) {
  if (!isOpen) return null;

  const certId = 'SB-ISL-2026-8942';
  const issuedDate = '19 August 2026';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-sm">Verified ISL Qualification Certificate</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Area */}
        <div className="p-8 space-y-6 text-center bg-gradient-to-b from-amber-50/40 via-white to-blue-50/30 border-8 border-double border-amber-600/30 m-4 rounded-2xl relative shadow-inner">
          {/* Decorative Corner Seals */}
          <div className="absolute top-3 left-3 text-amber-600/40 text-xs font-serif font-bold">★ SIGNBRIDGE ★</div>
          <div className="absolute top-3 right-3 text-amber-600/40 text-xs font-serif font-bold">★ INDIA ISL ★</div>

          {/* Header Seal */}
          <div className="space-y-2">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 p-1 shadow-md">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-amber-300 text-2xl">
                🤟
              </div>
            </div>
            <h2 className="text-2xl font-serif font-black text-slate-900 tracking-wide uppercase">
              SignBridge India
            </h2>
            <p className="text-xs font-bold text-amber-800 tracking-widest uppercase">
              Basic ISL Communication Certificate
            </p>
          </div>

          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            This certifies that the candidate has successfully completed all 4 levels of structured Indian Sign Language curriculum, visual demonstrations, AI landmark practice, and practical workplace dialogue assessments.
          </p>

          {/* Candidate Name */}
          <div className="space-y-1 py-2 border-y border-amber-200/80">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Awarded To</span>
            <h3 className="text-2xl font-black text-blue-900 capitalize tracking-tight">
              {userName || 'Dr. Rajesh Kumar'}
            </h3>
            <p className="text-xs font-bold text-emerald-700">
              Assessment Score: {score}% — Basic Competency Verified
            </p>
          </div>

          {/* Footer Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left pt-2 text-[11px]">
            <div>
              <span className="block font-bold text-slate-400">Certificate ID</span>
              <span className="font-mono font-extrabold text-slate-800">{certId}</span>
            </div>

            <div>
              <span className="block font-bold text-slate-400">Issued Date</span>
              <span className="font-semibold text-slate-800">{issuedDate}</span>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center gap-2">
                <QrCode className="w-8 h-8 text-slate-800" />
                <div className="text-[9px]">
                  <span className="block font-bold text-slate-900">QR Verified</span>
                  <span className="text-slate-500 font-mono">SB-8942-CH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <p className="text-[10px] text-slate-500 italic pt-2">
            Note: Issued by SignBridge India ISL Accessibility Board for workplace communication. Valid across hospital, police, banking, and government service centers.
          </p>
        </div>
      </div>
    </div>
  );
}

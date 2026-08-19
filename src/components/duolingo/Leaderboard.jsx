import React from 'react';
import { Trophy, Award, Flame, Shield, Star, CheckCircle2 } from 'lucide-react';

export const LEADERBOARD_USERS = [
  { rank: 1, name: 'Dr. Ananya Sharma', role: 'ER Physician', xp: 1240, streak: 12, avatar: '👩‍⚕️' },
  { rank: 2, name: 'Nurse Priya Nair', role: 'Triage Staff', xp: 980, streak: 8, avatar: '🩺' },
  { rank: 3, name: 'Officer Vikram Singh', role: 'Police Sub-Inspector', xp: 850, streak: 6, avatar: '👮' },
  { rank: 4, name: 'Dr. Rajesh Kumar (You)', role: 'Frontline Healthcare Worker', xp: 420, streak: 3, avatar: '👨‍⚕️' },
  { rank: 5, name: 'Kavitha R', role: 'Bank Teller', xp: 390, streak: 2, avatar: '🏦' }
];

export const BADGES = [
  { id: 'b1', title: 'First Sign Master', description: 'Mastered your 1st ISL sign gesture', icon: '🤟', unlocked: true },
  { id: 'b2', title: '7-Day Streak', description: 'Learned ISL for 7 consecutive days', icon: '🔥', unlocked: true },
  { id: 'b3', title: 'Healthcare Hero', description: 'Completed Hospital Triage drills', icon: '🩺', unlocked: true },
  { id: 'b4', title: 'AI Vision Expert', description: 'Scored 95%+ in AI camera practice', icon: '🤖', unlocked: false }
];

export default function Leaderboard({ lang, xp = 420 }) {
  return (
    <div className="space-y-5 pb-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-amber-950/60 text-amber-200 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Diamond League
        </span>
        <h2 className="text-xl font-extrabold mt-2 flex items-center gap-2">
          <Trophy className="w-5 h-5 fill-amber-300 text-amber-300" />
          {lang === 'ta' ? 'முன்னணி தரவரிசை' : lang === 'ml' ? 'ആരോഗ്യ ലീഡർബോർഡ്' : 'Healthcare Heroes Leaderboard'}
        </h2>
        <p className="text-xs text-amber-100 mt-1">
          Compete with frontline healthcare & essential workers across India!
        </p>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-1">
        <div className="p-3 bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase flex items-center justify-between">
          <span>Frontline Learner</span>
          <span>XP Score</span>
        </div>

        {LEADERBOARD_USERS.map((user) => {
          const isUser = user.rank === 4;
          return (
            <div
              key={user.rank}
              className={`p-3.5 flex items-center justify-between border-b border-slate-100 transition-all ${
                isUser
                  ? 'bg-blue-50/90 border-l-4 border-l-blue-600 font-extrabold'
                  : 'bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 text-center font-black text-xs ${
                  user.rank === 1 ? 'text-amber-500 text-sm' : user.rank === 2 ? 'text-slate-400' : user.rank === 3 ? 'text-amber-700' : 'text-slate-600'
                }`}>
                  #{user.rank}
                </span>

                <span className="text-xl">{user.avatar}</span>

                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 flex items-center gap-1">
                    {user.name}
                    {isUser && <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.2 rounded-md uppercase">YOU</span>}
                  </h4>
                  <span className="text-[10px] text-slate-500 block">{user.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                  ⚡ {user.xp} XP
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Achievements & Badges Grid */}
      <div className="space-y-3">
        <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
          <Award className="w-4 h-4 text-purple-600" />
          Achievement Badges ({BADGES.filter((b) => b.unlocked).length} / {BADGES.length})
        </h3>

        <div className="grid grid-cols-2 gap-2.5">
          {BADGES.map((badge) => (
            <div
              key={badge.id}
              className={`p-3.5 rounded-2xl border flex items-start gap-3 transition-all ${
                badge.unlocked
                  ? 'bg-white border-purple-200 shadow-xs'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              <span className="text-2xl p-2 bg-purple-50 rounded-xl border border-purple-100 shrink-0">
                {badge.icon}
              </span>
              <div>
                <h5 className="font-extrabold text-xs text-slate-900">{badge.title}</h5>
                <p className="text-[10px] text-slate-500 mt-0.5">{badge.description}</p>
                {badge.unlocked && (
                  <span className="text-[9px] font-extrabold text-emerald-600 flex items-center gap-0.5 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> Unlocked
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

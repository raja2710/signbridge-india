import React from 'react';
import { Home, BookOpen, Bot, Award, Building2, User } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, lang }) {
  const tabs = [
    { id: 'home', label: lang === 'ta' ? 'முகப்பு' : lang === 'ml' ? 'ഹോം' : 'Home', icon: Home },
    { id: 'learn', label: lang === 'ta' ? 'கற்றல்' : lang === 'ml' ? 'പഠിക്കുക' : 'Learn', icon: BookOpen },
    { id: 'ai', label: 'AI Suite', icon: Bot },
    { id: 'institution', label: lang === 'ta' ? 'நிறுவனம்' : lang === 'ml' ? 'സ്ഥാപനം' : 'Institution', icon: Building2 },
    { id: 'progress', label: lang === 'ta' ? 'சுயவிவரம்' : lang === 'ml' ? 'പ്രൊഫൈൽ' : 'Profile', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-2 px-4 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 transition-all px-2 py-1 rounded-xl ${
                isActive ? 'text-cyan-400 scale-105 font-black' : 'text-slate-400 hover:text-slate-200 font-semibold'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span className="text-[10px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

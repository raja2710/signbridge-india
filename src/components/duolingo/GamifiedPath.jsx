import React from 'react';
import { Star, Lock, CheckCircle2, Trophy, Sparkles, Flame, Zap, Heart, Shield, Gift } from 'lucide-react';

export const UNITS = [
  {
    id: 'unit-1',
    number: 1,
    title: { en: 'Unit 1: Basic Foundations', ta: 'அலகு 1: அடிப்படை அஸ்திவாரம்', ml: 'യൂണിറ്റ് 1: അടിസ്ഥാന കാര്യങ്ങൾ' },
    description: {
      en: 'Greetings, numbers & emergency words',
      ta: 'வாழ்த்துக்கள், எண்கள் & அவசர வார்த்தைகள்',
      ml: 'അഭിവാദ്യങ്ങൾ, അക്കങ്ങൾ & അടിയന്തര വാക്കുകൾ'
    },
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-600',
    nodes: [
      { id: 'u1-n1', title: { en: 'Greetings & Hello', ta: 'வணக்கம் சைகைகள்', ml: 'നമസ്കാരം' }, type: 'lesson', level: 1, category: 'greetings', stars: 3, status: 'completed' },
      { id: 'u1-n2', title: { en: 'Emergency Help', ta: 'அவசர உதவி', ml: 'സഹായം' }, type: 'lesson', level: 1, category: 'emergency', stars: 3, status: 'completed' },
      { id: 'u1-n3', title: { en: 'Numbers 1 to 5', ta: 'எண்கள் 1-5', ml: 'അക്കങ്ങൾ 1-5' }, type: 'star', level: 1, category: 'numbers', stars: 2, status: 'active' },
      { id: 'u1-n4', title: { en: 'AI Camera Checkpoint', ta: 'AI கேமரா சோதனைக் களம்', ml: 'AI ക്യാമറ പരിശോധന' }, type: 'ai_checkpoint', level: 1, stars: 0, status: 'unlocked' },
      { id: 'u1-chest', title: { en: 'Unit 1 Treasure Chest', ta: 'அலகு 1 பரிசுப் பெட்டி', ml: 'യൂണിറ്റ് 1 സമ്മാനം' }, type: 'chest', stars: 0, status: 'unlocked' }
    ]
  },
  {
    id: 'unit-2',
    number: 2,
    title: { en: 'Unit 2: Everyday Sentences', ta: 'அலகு 2: அன்றாட வாக்கியங்கள்', ml: 'യൂണിറ്റ് 2: നിത്യജീവിത വാക്യങ്ങൾ' },
    description: {
      en: 'Simple everyday inquiries & syntax',
      ta: 'எளிய வினாக்கள் & வாக்கிய அமைப்பு',
      ml: 'ലളിതമായ ചോദ്യങ്ങളും ഘടനയും'
    },
    color: 'from-blue-600 to-indigo-600',
    borderColor: 'border-blue-600',
    nodes: [
      { id: 'u2-n1', title: { en: 'What is your name?', ta: 'உங்கள் பெயர் என்ன?', ml: 'പേര് എന്താണ്?' }, type: 'lesson', level: 2, stars: 0, status: 'unlocked' },
      { id: 'u2-n2', title: { en: 'Need Help Questions', ta: 'உதவி வினாக்கள்', ml: 'സഹായ ചോദ്യങ്ങൾ' }, type: 'lesson', level: 2, stars: 0, status: 'locked' },
      { id: 'u2-n3', title: { en: 'Please Wait Sentences', ta: 'காத்திருங்கள் வாக்கியம்', ml: 'കാത്തിരിക്കൂ വാക്യം' }, type: 'star', level: 2, stars: 0, status: 'locked' }
    ]
  },
  {
    id: 'unit-3',
    number: 3,
    title: { en: 'Unit 3: Frontline Domain Master', ta: 'அலகு 3: துறைசார் சிறப்பு சைகைகள்', ml: 'യൂണിറ്റ് 3: സേവന മേഖല മാസ്റ്റർ' },
    description: {
      en: 'Hospital, Police, Banking, Govt & Education',
      ta: 'மருத்துவமனை, காவல், வங்கி, அரசு சேவைகள்',
      ml: 'ആശുപത്രി, പോലീസ്, ബാങ്കിംഗ്, സർക്കാർ'
    },
    color: 'from-purple-600 to-violet-600',
    borderColor: 'border-purple-600',
    nodes: [
      { id: 'u3-n1', title: { en: 'Hospital Emergency Triage', ta: 'மருத்துவமனை அவசரம்', ml: 'ആശുപത്രി അടിയന്തിരം' }, type: 'lesson', level: 3, stars: 0, status: 'locked' },
      { id: 'u3-n2', title: { en: 'Police Complaint Desk', ta: 'காவல் நிலைய புகார்', ml: 'പോലീസ് പരാതി' }, type: 'lesson', level: 3, stars: 0, status: 'locked' }
    ]
  },
  {
    id: 'unit-4',
    number: 4,
    title: { en: 'Unit 4: Real-World Conversation', ta: 'அலகு 4: உரையாடல் பயிற்சி', ml: 'യൂണിറ്റ് 4: തത്സമയ സംഭാഷണം' },
    description: {
      en: 'Dual-character roleplay conversations',
      ta: 'இருவர் பங்கேற்கும் முழு உரையாடல்',
      ml: 'ഇരുവർ സംഭാഷണ പരിശീലനം'
    },
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-600',
    nodes: [
      { id: 'u4-n1', title: { en: 'Nurse & Deaf Patient Roleplay', ta: 'செவிலியர் நோயாளி உரையாடல்', ml: 'നഴ്സ് രോഗി സംഭാഷണം' }, type: 'lesson', level: 4, stars: 0, status: 'locked' }
    ]
  }
];

export default function GamifiedPath({ lang, onSelectLesson, xp = 420, streak = 3, hearts = 5 }) {
  return (
    <div className="space-y-6 pb-12">
      {/* Duolingo Header Stats Bar */}
      <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-3.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 bg-orange-50 text-orange-700 font-extrabold px-3 py-1.5 rounded-xl border border-orange-200 text-xs">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
          <span>{streak} Day Streak!</span>
        </div>

        <div className="flex items-center gap-1.5 bg-amber-50 text-amber-800 font-extrabold px-3 py-1.5 rounded-xl border border-amber-200 text-xs">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>{xp} XP</span>
        </div>

        <div className="flex items-center gap-1.5 bg-rose-50 text-rose-700 font-extrabold px-3 py-1.5 rounded-xl border border-rose-200 text-xs">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>{hearts}/5</span>
        </div>
      </div>

      {/* Duolingo Mascot Encouragement Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-4 shadow-lg flex items-center gap-4 relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shrink-0 shadow-inner">
          🦜
        </div>

        <div className="space-y-1">
          <span className="bg-white/20 text-teal-100 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
            Bridgey the ISL Mascot
          </span>
          <h3 className="font-extrabold text-sm sm:text-base leading-tight">
            {lang === 'ta' ? 'அருமை! இன்று 3 சைகைகளைக் கற்றுவிட்டீர்கள்!' : lang === 'ml' ? 'കൊള്ളാം! ഇന്ന് 3 അടയാളങ്ങൾ പഠിച്ചു!' : 'Awesome work! You mastered 3 signs today!'}
          </h3>
          <p className="text-xs text-teal-100">
            Keep your streak alive to unlock your Healthcare ISL Medal!
          </p>
        </div>
      </div>

      {/* Serpentine Quest Path */}
      <div className="space-y-8">
        {UNITS.map((unit) => (
          <div key={unit.id} className="space-y-4">
            {/* Unit Header Banner */}
            <div className={`bg-gradient-to-r ${unit.color} text-white p-4 rounded-2xl shadow-md space-y-1`}>
              <span className="bg-black/20 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Unit {unit.number}
              </span>
              <h3 className="font-extrabold text-lg">
                {unit.title[lang] || unit.title.en}
              </h3>
              <p className="text-xs text-white/90">
                {unit.description[lang] || unit.description.en}
              </p>
            </div>

            {/* Path Nodes Stack with Horizontal Offsets for Winding Path Effect */}
            <div className="flex flex-col items-center gap-6 py-2">
              {unit.nodes.map((node, index) => {
                // Calculate serpentine X-axis offset (-40px, 0px, +40px)
                const offsetPattern = [0, 36, 0, -36];
                const offsetX = offsetPattern[index % 4];

                const isCompleted = node.status === 'completed';
                const isActive = node.status === 'active';
                const isUnlocked = node.status === 'unlocked';
                const isLocked = node.status === 'locked';

                return (
                  <div
                    key={node.id}
                    className="relative flex flex-col items-center group"
                    style={{ transform: `translateX(${offsetX}px)` }}
                  >
                    {/* Pulsing Active Ring */}
                    {isActive && (
                      <div className="absolute -inset-3 bg-blue-500/20 rounded-full animate-ping pointer-events-none"></div>
                    )}

                    {/* Node Circle Button */}
                    <button
                      onClick={() => !isLocked && onSelectLesson(node)}
                      disabled={isLocked}
                      className={`w-16 h-16 rounded-full font-black flex items-center justify-center text-xl shadow-lg border-4 transition-all duration-200 transform ${
                        isCompleted
                          ? 'bg-emerald-500 border-emerald-600 text-white hover:scale-110 active:scale-95'
                          : isActive
                          ? 'bg-blue-600 border-blue-700 text-white hover:scale-110 active:scale-95 ring-4 ring-blue-300'
                          : isUnlocked
                          ? 'bg-cyan-500 border-cyan-600 text-white hover:scale-110 active:scale-95'
                          : 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                      }`}
                      title={node.title[lang] || node.title.en}
                    >
                      {node.type === 'chest' ? (
                        <Gift className="w-8 h-8 text-amber-300 animate-bounce" />
                      ) : node.type === 'ai_checkpoint' ? (
                        <Sparkles className="w-7 h-7 text-yellow-300" />
                      ) : isCompleted ? (
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      ) : isLocked ? (
                        <Lock className="w-6 h-6 text-slate-400" />
                      ) : (
                        <Star className="w-7 h-7 fill-white text-white" />
                      )}
                    </button>

                    {/* Stars Badge for Completed / Active nodes */}
                    {node.stars > 0 && (
                      <div className="flex items-center gap-0.5 bg-amber-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs -mt-2.5 z-10">
                        {Array.from({ length: node.stars }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-slate-950 text-slate-950" />
                        ))}
                      </div>
                    )}

                    {/* Node Title Label Tooltip */}
                    <div className="mt-1.5 text-center">
                      <span className={`text-xs font-extrabold max-w-[130px] block leading-tight ${
                        isLocked ? 'text-slate-400' : 'text-slate-800'
                      }`}>
                        {node.title[lang] || node.title.en}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

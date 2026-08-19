import React, { useState } from 'react';
import { DOMAINS, DOMAIN_SENTENCES, ISL_WORDS } from '../../data/islDatabase.js';
import ISLVisualizer2D from '../ISLVisualizer2D.jsx';
import { Stethoscope, ShieldAlert, Landmark, Building2, GraduationCap, Lightbulb, Sparkles, ChevronRight } from 'lucide-react';

const DOMAIN_ICONS = {
  Stethoscope, ShieldAlert, Landmark, Building2, GraduationCap
};

export default function Level3Domains({ lang, onStartPractice }) {
  const [selectedDomain, setSelectedDomain] = useState('hospital');
  const [activeSentence, setActiveSentence] = useState(DOMAIN_SENTENCES.hospital[0]);

  const currentDomainObj = DOMAINS.find((d) => d.id === selectedDomain) || DOMAINS[0];
  const sentencesList = DOMAIN_SENTENCES[selectedDomain] || [];

  const matchedSign = ISL_WORDS.find((w) => activeSentence?.signIds?.includes(w.id)) || ISL_WORDS[0];

  const handleDomainChange = (domainId) => {
    setSelectedDomain(domainId);
    if (DOMAIN_SENTENCES[domainId] && DOMAIN_SENTENCES[domainId].length > 0) {
      setActiveSentence(DOMAIN_SENTENCES[domainId][0]);
    }
  };

  return (
    <div className="space-y-5">
      {/* Banner */}
      <div className="bg-gradient-to-r from-cyan-800 to-blue-800 rounded-2xl p-4 text-white shadow-md">
        <span className="bg-cyan-950/60 text-cyan-300 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Level 3 • Service Domain Communication
        </span>
        <h2 className="text-xl font-extrabold mt-2">
          {lang === 'ta' ? 'துறை சார்ந்த வாக்கியங்கள்' : lang === 'ml' ? 'സേവന മേഖല വാക്യങ്ങൾ' : 'Domain-Based ISL Sentences'}
        </h2>
        <p className="text-xs text-cyan-100 mt-1">
          {lang === 'ta'
            ? 'மருத்துவம், காவல், வங்கி, அரசு & கல்வித் துறைகளுக்கான சிறப்பு சைகைகள்.'
            : lang === 'ml'
            ? 'ആശുപത്രി, പോലീസ്, ബാങ്കിംഗ്, സർക്കാർ, വിദ്യാഭ്യാസ മേഖലകൾക്കുള്ള വാക്യങ്ങൾ.'
            : 'Tailored ISL communication drills for essential frontline personnel.'}
        </p>
      </div>

      {/* Domain Selection Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {DOMAINS.map((domain) => {
          const IconComp = DOMAIN_ICONS[domain.icon] || Stethoscope;
          const isSelected = selectedDomain === domain.id;
          return (
            <button
              key={domain.id}
              onClick={() => handleDomainChange(domain.id)}
              className={`p-3 rounded-2xl border text-left flex flex-col items-start gap-1.5 transition-all ${
                isSelected
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md scale-102 ring-2 ring-blue-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className={`p-2 rounded-xl ${isSelected ? 'bg-blue-900 text-cyan-300' : 'bg-slate-100 text-blue-700'}`}>
                <IconComp className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xs leading-tight">
                {domain.name[lang] || domain.name.en}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Domain Overview */}
      <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-2xl flex items-center justify-between text-xs">
        <div>
          <span className="font-bold text-blue-900 text-sm block mb-0.5">
            {currentDomainObj.name[lang] || currentDomainObj.name.en}
          </span>
          <p className="text-slate-600">
            {currentDomainObj.description[lang] || currentDomainObj.description.en}
          </p>
        </div>
      </div>

      {/* Active Sentence Player */}
      {activeSentence && (
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md uppercase">
              Practical Scenario Sentence
            </span>
            <h3 className="text-lg font-extrabold text-slate-800">
              "{activeSentence.sentence[lang] || activeSentence.sentence.en}"
            </h3>

            {activeSentence.practicalTip && (
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-xs flex items-start gap-2 text-emerald-900">
                <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Frontline Protocol Tip: </span>
                  {activeSentence.practicalTip[lang] || activeSentence.practicalTip.en}
                </div>
              </div>
            )}
          </div>

          <ISLVisualizer2D
            sign={matchedSign}
            lang={lang}
            onPracticeClick={() => onStartPractice(matchedSign)}
          />
        </div>
      )}

      {/* Domain Sentences Picker */}
      <div>
        <h4 className="text-sm font-bold text-slate-700 mb-2">
          Practical Domain Sentences ({sentencesList.length})
        </h4>
        <div className="space-y-2">
          {sentencesList.map((item, idx) => {
            const isActive = activeSentence?.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSentence(item)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-2 ${
                  isActive
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                    isActive ? 'bg-blue-900 text-cyan-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <h5 className="font-extrabold text-sm">
                      {item.sentence[lang] || item.sentence.en}
                    </h5>
                    <p className={`text-xs ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {item.sentence.en}
                    </p>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 shrink-0 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

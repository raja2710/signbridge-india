import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import BottomNav from './components/BottomNav.jsx';
import LandingPage from './components/LandingPage.jsx';
import GamifiedPath from './components/duolingo/GamifiedPath.jsx';
import DuolingoLesson from './components/duolingo/DuolingoLesson.jsx';
import Leaderboard from './components/duolingo/Leaderboard.jsx';
import Level1Words from './components/learn/Level1Words.jsx';
import Level2Sentences from './components/learn/Level2Sentences.jsx';
import Level3Domains from './components/learn/Level3Domains.jsx';
import Level4Conversations from './components/learn/Level4Conversations.jsx';
import AISignDetection from './components/ai/AISignDetection.jsx';
import AIPractice from './components/ai/AIPractice.jsx';
import VoiceToISL from './components/ai/VoiceToISL.jsx';
import ProgressAndCertificates from './components/progress/ProgressAndCertificates.jsx';
import InstitutionDashboard from './components/dashboard/InstitutionDashboard.jsx';
import AdminDashboard from './components/dashboard/AdminDashboard.jsx';
import AuthModal from './components/auth/AuthModal.jsx';
import QuizAndAssessmentModal from './components/assessment/QuizAndAssessmentModal.jsx';
import CertificateModal from './components/certificate/CertificateModal.jsx';
import AccessibilityToolbar from './components/accessibility/AccessibilityToolbar.jsx';
import { ISL_WORDS } from './data/islDatabase.js';

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'path', 'learn', 'ai', 'progress', 'institution', 'admin'
  const [learnLevel, setLearnLevel] = useState(1);
  const [aiSubTab, setAiSubTab] = useState('detect');
  const [isMobileFrame, setIsMobileFrame] = useState(false);
  const [targetSign, setTargetSign] = useState(ISL_WORDS[0]);
  const [completedSigns, setCompletedSigns] = useState(['w-hello', 'w-help', 'w-doctor']);
  
  // User & Auth State
  const [user, setUser] = useState({
    id: 1,
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh@signbridge.in',
    role: 'learner',
    preferred_language: 'en',
    xp: 1240,
    streak: 7
  });

  // Modal Control States
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  
  // Accessibility States
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal'); // 'normal', 'large', 'xlarge'

  // Duolingo Gamification States
  const [activeLessonNode, setActiveLessonNode] = useState(null);

  const handleStartPractice = (sign) => {
    setTargetSign(sign || ISL_WORDS[0]);
    setActiveTab('ai');
    setAiSubTab('practice');
  };

  const handleSelectLessonNode = (node) => {
    if (node.type === 'ai_checkpoint') {
      setActiveTab('ai');
      setAiSubTab('detect');
    } else {
      setActiveLessonNode(node);
    }
  };

  const handleLessonComplete = (earnedXp) => {
    setUser((prev) => ({ ...prev, xp: prev.xp + earnedXp }));
    setCompletedSigns((prev) => [...new Set([...prev, 'w-hospital', 'w-medicine'])]);
  };

  const handleAssessmentComplete = (scorePercentage) => {
    setUser((prev) => ({ ...prev, xp: prev.xp + 100 }));
    if (scorePercentage >= 70) {
      setIsCertOpen(true);
    }
  };

  const fontSizeClass = fontSize === 'xlarge' ? 'text-lg' : fontSize === 'large' ? 'text-base' : 'text-sm';

  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black text-yellow-300' : 'bg-slate-950 text-slate-100'} ${fontSizeClass}`}>
      <div className={isMobileFrame ? 'max-w-md mx-auto min-h-screen bg-white text-slate-900 border-x border-slate-800 shadow-2xl relative' : 'w-full min-h-screen bg-slate-900 text-slate-100'}>
        {/* Unified Navbar */}
        <Navbar
          lang={lang}
          setLang={setLang}
          isMobileFrame={isMobileFrame}
          setIsMobileFrame={setIsMobileFrame}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          user={user}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenAccessibility={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
        />

        {/* Main Application Container */}
        <main className="max-w-7xl mx-auto p-4 sm:p-6 pb-24 space-y-6">
          {/* TAB 1: LANDING PAGE */}
          {activeTab === 'home' && (
            <LandingPage
              lang={lang}
              setActiveTab={setActiveTab}
              setLearnLevel={setLearnLevel}
              onStartPractice={handleStartPractice}
              onOpenAuth={() => setIsAuthOpen(true)}
            />
          )}

          {/* TAB 2: DUOLINGO QUEST PATH */}
          {activeTab === 'path' && (
            <GamifiedPath
              lang={lang}
              onSelectLesson={handleSelectLessonNode}
              xp={user ? user.xp : 1240}
              streak={user ? user.streak : 7}
              hearts={5}
            />
          )}

          {/* TAB 3: 4-LEVEL CURRICULUM */}
          {activeTab === 'learn' && (
            <div className="space-y-5">
              {/* Level Navigation Header Bar */}
              <div className="bg-slate-950 p-2 rounded-2xl flex items-center justify-between gap-1 text-xs font-black border border-slate-800 shadow-md">
                <button
                  onClick={() => setLearnLevel(1)}
                  className={`flex-1 py-2.5 rounded-xl transition-all ${
                    learnLevel === 1 ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Level 1: Words
                </button>
                <button
                  onClick={() => setLearnLevel(2)}
                  className={`flex-1 py-2.5 rounded-xl transition-all ${
                    learnLevel === 2 ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Level 2: Sentences
                </button>
                <button
                  onClick={() => setLearnLevel(3)}
                  className={`flex-1 py-2.5 rounded-xl transition-all ${
                    learnLevel === 3 ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Level 3: Domains
                </button>
                <button
                  onClick={() => setLearnLevel(4)}
                  className={`flex-1 py-2.5 rounded-xl transition-all ${
                    learnLevel === 4 ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Level 4: Roleplay
                </button>
              </div>

              {/* Assessment Trigger Banner */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-md">
                <div>
                  <h4 className="font-extrabold text-sm text-white">Ready for Level {learnLevel} Assessment?</h4>
                  <p className="text-xs text-slate-400">Test your sign recognition, sentence ordering, and practical scenarios.</p>
                </div>
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs rounded-xl shadow-md shrink-0 transition-all"
                >
                  Take Assessment
                </button>
              </div>

              {/* Render Level Views */}
              {learnLevel === 1 && (
                <Level1Words
                  lang={lang}
                  onStartPractice={handleStartPractice}
                  completedSigns={completedSigns}
                  setCompletedSigns={setCompletedSigns}
                />
              )}

              {learnLevel === 2 && (
                <Level2Sentences
                  lang={lang}
                  onStartPractice={handleStartPractice}
                />
              )}

              {learnLevel === 3 && (
                <Level3Domains
                  lang={lang}
                  onStartPractice={handleStartPractice}
                />
              )}

              {learnLevel === 4 && (
                <Level4Conversations
                  lang={lang}
                  onStartPractice={handleStartPractice}
                />
              )}
            </div>
          )}

          {/* TAB 4: AI SIGN SUITE */}
          {activeTab === 'ai' && (
            <div className="space-y-5">
              {/* AI Sub-Tab Selector */}
              <div className="bg-slate-950 p-2 rounded-2xl flex items-center justify-between gap-1 text-xs font-black border border-slate-800 shadow-md">
                <button
                  onClick={() => setAiSubTab('detect')}
                  className={`flex-1 py-2.5 rounded-xl transition-all ${
                    aiSubTab === 'detect' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Camera Detection
                </button>
                <button
                  onClick={() => setAiSubTab('practice')}
                  className={`flex-1 py-2.5 rounded-xl transition-all ${
                    aiSubTab === 'practice' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI Gesture Practice
                </button>
                <button
                  onClick={() => setAiSubTab('voice')}
                  className={`flex-1 py-2.5 rounded-xl transition-all ${
                    aiSubTab === 'voice' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Voice / Text ➔ ISL
                </button>
              </div>

              {/* Render AI Component */}
              {aiSubTab === 'detect' && (
                <AISignDetection
                  lang={lang}
                  onStartPractice={handleStartPractice}
                />
              )}

              {aiSubTab === 'practice' && (
                <AIPractice
                  lang={lang}
                  targetSign={targetSign}
                  setTargetSign={setTargetSign}
                />
              )}

              {aiSubTab === 'voice' && (
                <VoiceToISL
                  lang={lang}
                  onStartPractice={handleStartPractice}
                />
              )}
            </div>
          )}

          {/* TAB 5: PROGRESS & CERTIFICATES */}
          {activeTab === 'progress' && (
            <div className="space-y-4">
              <ProgressAndCertificates
                lang={lang}
                completedSigns={completedSigns}
              />
              <div className="text-center pt-2">
                <button
                  onClick={() => setIsCertOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs rounded-2xl shadow-lg hover:shadow-amber-500/20 transition-all"
                >
                  View SignBridge Verified Certificate
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: INSTITUTION DASHBOARD */}
          {activeTab === 'institution' && (
            <InstitutionDashboard lang={lang} />
          )}

          {/* TAB 7: ADMIN DASHBOARD */}
          {activeTab === 'admin' && (
            <AdminDashboard lang={lang} />
          )}
        </main>

        {/* Duolingo Interactive Exercise Modal */}
        {activeLessonNode && (
          <DuolingoLesson
            node={activeLessonNode}
            lang={lang}
            onClose={() => setActiveLessonNode(null)}
            onLessonComplete={handleLessonComplete}
          />
        )}

        {/* Auth Registration & Login Modal */}
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onAuthSuccess={(userData) => setUser(userData)}
          lang={lang}
        />

        {/* Quiz & Level Assessment Modal */}
        <QuizAndAssessmentModal
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          levelNumber={learnLevel}
          lang={lang}
          onComplete={handleAssessmentComplete}
        />

        {/* Verified Certificate Modal */}
        <CertificateModal
          isOpen={isCertOpen}
          onClose={() => setIsCertOpen(false)}
          userName={user ? user.name : 'Dr. Rajesh Kumar'}
          score={89.5}
        />

        {/* Accessibility Toolbar Drawer */}
        <AccessibilityToolbar
          isOpen={isAccessibilityOpen}
          onClose={() => setIsAccessibilityOpen(false)}
          highContrast={highContrast}
          setHighContrast={setHighContrast}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />

        {/* Mobile Bottom Bar Navigation */}
        <BottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          lang={lang}
        />
      </div>
    </div>
  );
}

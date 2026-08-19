import React from 'react';
import { Smartphone, Globe, Shield, Sparkles, Monitor, User, Eye, Building2, Database, BookOpen, Bot, Award, Home as HomeIcon } from 'lucide-react';
import { LANGUAGES } from '../types/index.js';

export default function Navbar({
  lang,
  setLang,
  isMobileFrame,
  setIsMobileFrame,
  activeTab,
  setActiveTab,
  user,
  onOpenAuth,
  onOpenAccessibility
}) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
              <span className="text-xl">🤟</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-black text-lg tracking-tight text-white leading-none group-hover:text-cyan-300 transition-all">
                SignBridge <span className="text-cyan-400">India</span>
              </h1>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider hidden xs:inline-block">
                ISL Learning Platform
              </span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium hidden md:block">
              Learn, Practice, Recognize & Workplace Certification
            </p>
          </div>
        </button>

        {/* Desktop Quick Nav Tabs */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 text-xs font-black">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'home' ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('path')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'path' ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Gamified Path
          </button>
          <button
            onClick={() => setActiveTab('learn')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'learn' ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            4-Level Curriculum
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'ai' ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Sign Suite
          </button>
          <button
            onClick={() => setActiveTab('institution')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'institution' ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Institution Portal
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'admin' ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Admin Panel
          </button>
        </div>

        {/* Right Controls: Trilingual Selector, Accessibility, Auth */}
        <div className="flex items-center gap-2">
          {/* Trilingual Selector */}
          <div className="bg-slate-950/80 p-1 rounded-xl border border-slate-800 flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-cyan-400 ml-1 hidden xs:block" />
            {Object.keys(LANGUAGES).map((key) => (
              <button
                key={key}
                onClick={() => setLang(key)}
                className={`px-2 py-1 rounded-lg text-xs font-extrabold transition-all ${
                  lang === key ? 'bg-blue-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title={LANGUAGES[key].label}
              >
                {LANGUAGES[key].native}
              </button>
            ))}
          </div>

          {/* Accessibility Toggle */}
          <button
            onClick={onOpenAccessibility}
            className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-cyan-400 hover:text-white transition-all"
            title="Accessibility Settings"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* User Profile / Auth Button */}
          {user ? (
            <button
              onClick={() => setActiveTab('progress')}
              className="p-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-md"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="px-3.5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

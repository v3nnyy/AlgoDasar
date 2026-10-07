import React, { useState } from 'react';
import { ViewMode } from '../../types/learning';
import { BookOpen, Terminal, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 border-b border-purple-500/20 bg-[#0c0922]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark with Glowing Purple Icon */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/40 border border-purple-400/30 group-hover:scale-105 transition-all">
            <Terminal className="w-4 h-4 text-purple-200" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                AlgoDasar
              </span>
            </div>
            <span className="text-[10px] text-purple-200/60 font-medium -mt-0.5 hidden sm:inline">
              Media Pembelajaran Algoritma & Pemrograman
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Glassmorphic pills) */}
        <nav className="hidden md:flex items-center gap-2 p-1 rounded-2xl glass-card-subtle border border-purple-500/20">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentView === 'home'
                ? 'bg-purple-600/40 border border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('materi')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentView === 'materi'
                ? 'bg-purple-600/40 border border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            Materi Pembelajaran
          </button>
          <button
            onClick={() => handleNavClick('latihan')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              currentView === 'latihan'
                ? 'bg-purple-600/40 border border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            Latihan Soal
          </button>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {currentView !== 'latihan' ? (
            <button
              onClick={() => handleNavClick('latihan')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-purple-600/40 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
              <span>Uji Pemahaman</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          ) : (
            <button
              onClick={() => handleNavClick('materi')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-purple-200 hover:text-white glass-card hover:bg-purple-600/20 rounded-xl border border-purple-500/30 shadow-sm transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-purple-300" />
              <span>Buka Materi</span>
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-card border border-purple-500/30 text-purple-200 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-3 rounded-2xl glass-card border border-purple-500/30 bg-[#120d2e]/95 flex flex-col gap-1.5 shadow-2xl">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
              currentView === 'home'
                ? 'bg-purple-600/40 border border-purple-400/50 text-white'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => handleNavClick('materi')}
            className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
              currentView === 'materi'
                ? 'bg-purple-600/40 border border-purple-400/50 text-white'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Materi Pembelajaran (5 Modul)
          </button>
          <button
            onClick={() => handleNavClick('latihan')}
            className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
              currentView === 'latihan'
                ? 'bg-purple-600/40 border border-purple-400/50 text-white'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Latihan & Studi Kasus
          </button>
        </div>
      )}
    </header>
  );
};

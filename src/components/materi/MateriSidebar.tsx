import React from 'react';
import { Material } from '../../types/learning';
import {
  BookOpen,
  CheckCircle2,
  Check,
  ChevronRight,
  Zap,
  Bookmark,
  Lightbulb,
  ArrowRight,
  Award,
  Clock,
  Sparkles,
  Quote,
  Target,
  Code2,
  Terminal,
  PlaySquare
} from 'lucide-react';
import { SUBTOPIC_SIDEBAR_CONFIGS, SubtopicSidebarCard } from '../../data/subtopicSidebarData';

interface MateriSidebarProps {
  currentMaterial: Material;
  selectedSubtopicId: string;
  currentSubtopicIndex: number;
  visitedSubtopics: string[];
  onSelectSubtopic: (subId: string) => void;
  onNavigateToQuiz: () => void;
}

export const MateriSidebar: React.FC<MateriSidebarProps> = ({
  currentMaterial,
  selectedSubtopicId,
  currentSubtopicIndex,
  visitedSubtopics,
  onSelectSubtopic,
  onNavigateToQuiz,
}) => {
  const totalSubtopics = currentMaterial.subtopics.length;
  const progressPercent = Math.round(((currentSubtopicIndex + 1) / totalSubtopics) * 100);

  // Retrieve tailored config for the active subtopic
  const tailoredConfig = SUBTOPIC_SIDEBAR_CONFIGS[selectedSubtopicId];

  // Helper function to render card border and accent styling by theme
  const getThemeClasses = (theme: SubtopicSidebarCard['theme']) => {
    switch (theme) {
      case 'purple':
        return {
          card: 'border-purple-500/20 bg-gradient-to-br from-purple-950/20 via-slate-900/50 to-slate-900/70 glow-purple',
          badge: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
          title: 'text-purple-300',
          icon: <Zap className="w-4 h-4 text-purple-400" />
        };
      case 'blue':
        return {
          card: 'border-blue-500/20 bg-gradient-to-br from-blue-950/20 via-slate-900/50 to-slate-900/70 glow-blue',
          badge: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
          title: 'text-blue-300',
          icon: <Bookmark className="w-4 h-4 text-blue-400" />
        };
      case 'emerald':
        return {
          card: 'border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-slate-900/50 to-slate-900/70',
          badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
          title: 'text-emerald-300',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        };
      case 'amber':
        return {
          card: 'border-amber-500/20 bg-gradient-to-br from-amber-950/20 via-slate-900/50 to-slate-900/70',
          badge: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
          title: 'text-amber-300',
          icon: <Lightbulb className="w-4 h-4 text-amber-400" />
        };
      case 'indigo':
        return {
          card: 'border-indigo-500/20 bg-gradient-to-br from-indigo-950/20 via-slate-900/50 to-slate-900/70',
          badge: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
          title: 'text-indigo-300',
          icon: <Code2 className="w-4 h-4 text-indigo-400" />
        };
      default:
        return {
          card: 'border-white/10 bg-slate-900/60',
          badge: 'text-slate-300 bg-white/5 border-white/10',
          title: 'text-white',
          icon: <Sparkles className="w-4 h-4 text-purple-400" />
        };
    }
  };

  return (
    <div className="space-y-4">
      
      {/* 1. KOTAK UTAMA: DAFTAR SUBMATERI & PROGRESS */}
      <div className="p-5 rounded-2xl glass-card border border-white/10 glow-purple">
        <div className="pb-3 border-b border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Daftar Submateri</span>
            </div>
            <span className="text-[11px] text-purple-300 font-mono font-bold">
              {progressPercent}%
            </span>
          </div>

          <h2 className="text-base font-bold text-white leading-tight mb-2">
            {currentMaterial.title}
          </h2>

          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mb-1.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Bagian {currentSubtopicIndex + 1} dari {totalSubtopics}</span>
            <span className="text-emerald-400 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              {visitedSubtopics.length} selesai
            </span>
          </div>
        </div>

        {/* Subtopics Navigation Buttons */}
        <div className="space-y-1.5 pt-3">
          {currentMaterial.subtopics.map((sub, idx) => {
            const isActive = sub.id === selectedSubtopicId;
            const isVisited = visitedSubtopics.includes(sub.id);

            return (
              <button
                key={sub.id}
                onClick={() => onSelectSubtopic(sub.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs font-medium cursor-pointer ${
                  isActive
                    ? 'bg-purple-600/35 border border-purple-400 text-white shadow-md shadow-purple-600/20 font-semibold ring-1 ring-purple-400/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono shrink-0 transition-colors ${
                      isActive
                        ? 'bg-purple-500 text-white font-bold'
                        : isVisited
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{sub.title}</span>
                </div>
                {isActive ? (
                  <ChevronRight className="w-4 h-4 text-purple-300 shrink-0" />
                ) : isVisited ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. KOTAK INFO SUBMATERI AKTIF: ESTIMASI & TARGET BELAJAR */}
      {tailoredConfig && (
        <div className="p-4 rounded-2xl glass-card border border-white/10 bg-slate-900/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Estimasi: <strong>{tailoredConfig.estimatedReadTime}</strong></span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
            {tailoredConfig.levelBadge}
          </span>
        </div>
      )}

      {/* 3. KOTAK-KOTAK TERSESUAIKAN (TAILORED CARDS KHUSUS SUBMATERI AKTIF) */}
      {tailoredConfig &&
        tailoredConfig.cards.map((card) => {
          const themeCls = getThemeClasses(card.theme);

          return (
            <div
              key={card.id}
              className={`p-5 rounded-2xl glass-card border ${themeCls.card}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  {themeCls.icon}
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {card.title}
                  </h3>
                </div>
                {card.badge && (
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${themeCls.badge}`}
                  >
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Card Description if available */}
              {card.description && (
                <p className="text-xs text-slate-300 leading-relaxed mb-3 font-normal">
                  {card.description}
                </p>
              )}

              {/* Items / Bullets if available */}
              {card.items && card.items.length > 0 && (
                <div className="space-y-2">
                  {card.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-0.5"
                    >
                      <div className={`text-xs font-semibold ${themeCls.title}`}>
                        {item.label}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

      {/* 4. KOTAK KUTIPAN ILMUWAN (Jika Tersedia pada Submateri Ini) */}
      {tailoredConfig?.quote && (
        <div className="p-5 rounded-2xl glass-card border border-indigo-500/20 bg-gradient-to-br from-indigo-950/20 via-slate-900/50 to-slate-900/60">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">
            <Quote className="w-4 h-4 text-indigo-400" />
            <span>Kutipan Ilmuwan</span>
          </div>
          <blockquote className="text-xs text-slate-300 italic leading-relaxed mb-2">
            &ldquo;{tailoredConfig.quote.text}&rdquo;
          </blockquote>
          <div className="pt-2 border-t border-white/10 text-[11px]">
            <span className="font-semibold text-white block">
              {tailoredConfig.quote.author}
            </span>
            <span className="text-[10px] text-indigo-300/80">
              {tailoredConfig.quote.role}
            </span>
          </div>
        </div>
      )}

      {/* 5. KOTAK AKSI: EVALUASI LATIHAN */}
      <div className="p-5 rounded-2xl glass-card border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 to-slate-900/60">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Uji Pemahaman</span>
          </span>
          <span className="text-[10px] text-emerald-400 font-mono">10 Soal</span>
        </div>

        <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
          Selesai mempelajari bagian ini? Uji pemahamanmu dengan latihan soal interaktif dan studi kasus.
        </p>

        <button
          onClick={onNavigateToQuiz}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-900/30 transition-all cursor-pointer"
        >
          <span>Mulai Latihan Soal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

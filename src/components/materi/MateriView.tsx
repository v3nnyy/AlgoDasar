import React, { useState, useEffect } from 'react';
import { Material } from '../../types/learning';
import {
  ChevronRight,
  BookOpen,
  CheckCircle,
  Copy,
  Check,
  ArrowLeft,
  ArrowRight,
  FileCode,
  AlertCircle,
  Lightbulb,
  Info
} from 'lucide-react';
import { YouTubeEmbed } from './YouTubeEmbed';
import { AlgorithmReorderActivity } from './AlgorithmReorderActivity';
import { CharacteristicsMatchingActivity } from './CharacteristicsMatchingActivity';
import { FlowchartVisualizer } from './FlowchartVisualizer';
import { FlowchartSymbolQuizActivity } from './FlowchartSymbolQuizActivity';
import { PseudocodeReorderActivity } from './PseudocodeReorderActivity';
import { DataTypeSorterActivity } from './DataTypeSorterActivity';
import {
  AlgorithmFlowDiagram,
  KnuthGridDiagram,
  FlowchartShapesDiagram,
  PseudocodeStructureDiagram,
  MemoryBoxesDiagram
} from './DiagramComponents';
import { MateriSidebarExtras } from './MateriSidebarExtras';

interface MateriViewProps {
  materials: Material[];
  initialMaterialId: number;
  initialSubtopicId?: string;
  onNavigateToQuiz: () => void;
}

export const MateriView: React.FC<MateriViewProps> = ({
  materials,
  initialMaterialId,
  initialSubtopicId,
  onNavigateToQuiz,
}) => {
  const [selectedMaterialId, setSelectedMaterialId] = useState<number>(initialMaterialId);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>(
    initialSubtopicId || materials.find(m => m.id === initialMaterialId)?.subtopics[0]?.id || ''
  );
  const [visitedSubtopics, setVisitedSubtopics] = useState<string[]>(() => [
    initialSubtopicId || materials.find(m => m.id === initialMaterialId)?.subtopics[0]?.id || ''
  ]);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  // Sync if initialMaterialId or initialSubtopicId changes
  useEffect(() => {
    setSelectedMaterialId(initialMaterialId);
    const mat = materials.find(m => m.id === initialMaterialId);
    if (mat) {
      const activeId = initialSubtopicId && mat.subtopics.some(s => s.id === initialSubtopicId)
        ? initialSubtopicId
        : mat.subtopics[0]?.id || '';
      setSelectedSubtopicId(activeId);
      setVisitedSubtopics(prev => (prev.includes(activeId) ? prev : [...prev, activeId]));
    }
  }, [initialMaterialId, initialSubtopicId, materials]);

  const currentMaterial = materials.find(m => m.id === selectedMaterialId) || materials[0];
  const currentSubtopicIndex = currentMaterial.subtopics.findIndex(s => s.id === selectedSubtopicId);
  const currentSubtopic = currentMaterial.subtopics[currentSubtopicIndex] || currentMaterial.subtopics[0];

  const handleSelectMaterial = (matId: number) => {
    setSelectedMaterialId(matId);
    const targetMat = materials.find(m => m.id === matId);
    if (targetMat && targetMat.subtopics.length > 0) {
      const firstSubId = targetMat.subtopics[0].id;
      setSelectedSubtopicId(firstSubId);
      setVisitedSubtopics(prev => (prev.includes(firstSubId) ? prev : [...prev, firstSubId]));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubtopic = (subId: string) => {
    setSelectedSubtopicId(subId);
    setVisitedSubtopics(prev => (prev.includes(subId) ? prev : [...prev, subId]));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Previous and Next Subtopic Navigation
  const handlePrevSubtopic = () => {
    if (currentSubtopicIndex > 0) {
      const prevSubId = currentMaterial.subtopics[currentSubtopicIndex - 1].id;
      setSelectedSubtopicId(prevSubId);
      setVisitedSubtopics(prev => (prev.includes(prevSubId) ? prev : [...prev, prevSubId]));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const currentMatIndex = materials.findIndex(m => m.id === selectedMaterialId);
      if (currentMatIndex > 0) {
        const prevMat = materials[currentMatIndex - 1];
        setSelectedMaterialId(prevMat.id);
        const lastSubId = prevMat.subtopics[prevMat.subtopics.length - 1].id;
        setSelectedSubtopicId(lastSubId);
        setVisitedSubtopics(prev => (prev.includes(lastSubId) ? prev : [...prev, lastSubId]));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNextSubtopic = () => {
    if (currentSubtopicIndex < currentMaterial.subtopics.length - 1) {
      const nextSubId = currentMaterial.subtopics[currentSubtopicIndex + 1].id;
      setSelectedSubtopicId(nextSubId);
      setVisitedSubtopics(prev => (prev.includes(nextSubId) ? prev : [...prev, nextSubId]));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const currentMatIndex = materials.findIndex(m => m.id === selectedMaterialId);
      if (currentMatIndex < materials.length - 1) {
        const nextMat = materials[currentMatIndex + 1];
        setSelectedMaterialId(nextMat.id);
        const firstSubId = nextMat.subtopics[0].id;
        setSelectedSubtopicId(firstSubId);
        setVisitedSubtopics(prev => (prev.includes(firstSubId) ? prev : [...prev, firstSubId]));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigateToQuiz();
      }
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(code);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const isFirstOverall = selectedMaterialId === materials[0].id && currentSubtopicIndex === 0;
  const isLastOverall =
    selectedMaterialId === materials[materials.length - 1].id &&
    currentSubtopicIndex === currentMaterial.subtopics.length - 1;

  return (
    <div className="materi-page max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      
      {/* Material Selector Tabs */}
      <div className="p-1.5 rounded-xl border shadow-sm flex items-center gap-1 overflow-x-auto scrollbar-none transition-colors"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {materials.map((mat) => {
          const isSelected = mat.id === selectedMaterialId;
          return (
            <button
              key={mat.id}
              onClick={() => handleSelectMaterial(mat.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer"
              style={{
                backgroundColor: isSelected ? 'var(--color-primary)' : 'transparent',
                color: isSelected ? '#ffffff' : 'var(--color-text-muted)',
              }}
            >
              <span className="opacity-75">Modul {mat.id}:</span>
              <span>{mat.title.replace(/^Materi\s\d+\s—\s/, '')}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar: Subtopic List and Educational Extras */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-xl border shadow-sm transition-colors"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-mono"
                style={{ color: 'var(--color-primary-text)' }}
              >
                <BookOpen className="w-4 h-4" />
                <span>Daftar Submateri</span>
              </div>
              <span className="text-[11px] font-mono" style={{ color: 'var(--color-text-faint)' }}>
                {currentMaterial.subtopics.length} Bagian
              </span>
            </div>
            <h2 className="text-base font-bold mb-1" style={{ color: 'var(--color-text-main)' }}>
              {currentMaterial.title}
            </h2>
            <p className="text-xs mb-4" style={{ color: 'var(--color-text-muted)' }}>
              {currentMaterial.shortDesc}
            </p>

            <div className="space-y-1.5 border-t pt-3" style={{ borderColor: 'var(--color-border-subtle)' }}>
              {currentMaterial.subtopics.map((sub, idx) => {
                const isActive = sub.id === selectedSubtopicId;
                const isVisited = visitedSubtopics.includes(sub.id);
                return (
                  <button
                    key={sub.id}
                    onClick={() => handleSelectSubtopic(sub.id)}
                    className="w-full text-left p-3 rounded-lg transition-all flex items-center justify-between text-xs font-medium cursor-pointer border"
                    style={{
                      backgroundColor: isActive ? 'var(--color-primary-subtle)' : 'transparent',
                      borderColor: isActive ? 'var(--color-primary)' : 'transparent',
                      color: isActive ? 'var(--color-primary-text)' : 'var(--color-text-main)',
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono shrink-0"
                        style={{
                          backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface-subtle)',
                          color: isActive ? '#ffffff' : 'var(--color-text-muted)',
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span className="truncate">{sub.title}</span>
                    </div>
                    {isActive ? (
                      <ChevronRight className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary-text)' }} />
                    ) : isVisited ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Educational Extras */}
          <MateriSidebarExtras
            materialId={selectedMaterialId}
            currentSubtopicIndex={currentSubtopicIndex}
            totalSubtopics={currentMaterial.subtopics.length}
            visitedSubtopics={visitedSubtopics}
            onNavigateToQuiz={onNavigateToQuiz}
          />
        </aside>

        {/* Main Content Stage */}
        <main className="lg:col-span-8 space-y-6">
          <article className="p-6 sm:p-8 rounded-2xl border shadow-sm transition-colors"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            
            {/* Header Stage */}
            <div className="pb-6 mb-6 border-b" style={{ borderColor: 'var(--color-border-subtle)' }}>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2 font-mono"
                style={{ color: 'var(--color-primary-text)' }}
              >
                <span>{currentMaterial.title}</span>
                <span aria-hidden="true" style={{ color: 'var(--color-text-faint)' }}>/</span>
                <span style={{ color: 'var(--color-text-muted)' }}>
                  Submateri {currentSubtopicIndex + 1} dari {currentMaterial.subtopics.length}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: 'var(--color-text-main)' }}
              >
                {currentSubtopic.title}
              </h1>
              <p className="text-sm sm:text-base mt-2 leading-relaxed font-normal"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {currentSubtopic.summary}
              </p>
            </div>

            {/* Sections Content */}
            <div className="space-y-6">
              {currentSubtopic.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  {section.heading && (
                    <h3 className="text-lg font-bold pt-3 border-t"
                      style={{
                        color: 'var(--color-text-main)',
                        borderColor: 'var(--color-border-subtle)',
                      }}
                    >
                      {section.heading}
                    </h3>
                  )}

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base leading-relaxed font-normal"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {p}
                    </p>
                  ))}

                  {/* Bullet points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 my-3 pl-2">
                      {section.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          />
                          <span className="leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Callout box */}
                  {section.callout && (
                    <div className="p-4 rounded-xl border flex items-start gap-3.5 my-4"
                      style={{
                        backgroundColor: 'var(--color-surface-subtle)',
                        borderColor: 'var(--color-border)',
                      }}
                    >
                      <div className="mt-0.5 shrink-0">
                        {section.callout.type === 'tip' ? (
                          <Lightbulb className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                        ) : section.callout.type === 'warning' ? (
                          <AlertCircle className="w-5 h-5 text-amber-400" />
                        ) : (
                          <Info className="w-5 h-5 text-indigo-400" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-1" style={{ color: 'var(--color-text-main)' }}>
                          {section.callout.title}
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                          {section.callout.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Visual Diagrams */}
                  {section.diagramType === 'algorithm-flow' && <AlgorithmFlowDiagram />}
                  {section.diagramType === 'knuth-grid' && <KnuthGridDiagram />}
                  {section.diagramType === 'flowchart-shapes' && <FlowchartShapesDiagram />}
                  {section.diagramType === 'pseudocode-structure' && <PseudocodeStructureDiagram />}
                  {section.diagramType === 'memory-boxes' && <MemoryBoxesDiagram />}

                  {/* Code Snippet Box */}
                  {section.codeExample && (
                    <div className="rounded-xl overflow-hidden border my-5 shadow-sm"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-code-bg)',
                      }}
                    >
                      <div className="flex items-center justify-between px-4 py-2.5 border-b"
                        style={{
                          backgroundColor: 'var(--color-code-header)',
                          borderColor: 'var(--color-border)',
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <FileCode className="w-4 h-4" style={{ color: 'var(--color-primary-text)' }} />
                          <span className="text-xs font-mono opacity-80">
                            {section.codeExample.filename || section.codeExample.language}
                          </span>
                        </div>
                        <button
                          onClick={() => copyCode(section.codeExample!.code)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer border"
                          style={{
                            backgroundColor: 'var(--color-surface)',
                            borderColor: 'var(--color-border)',
                            color: 'var(--color-text-main)',
                          }}
                        >
                          {copiedSnippet === section.codeExample.code ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Salin Kode</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="p-4 font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto leading-relaxed"
                        style={{ backgroundColor: 'var(--color-code-bg)' }}
                      >
                        {section.codeExample.code}
                      </pre>

                      {section.codeExample.explanation && (
                        <div className="p-3 border-t text-xs opacity-75 italic"
                          style={{
                            backgroundColor: 'var(--color-code-header)',
                            borderColor: 'var(--color-border)',
                          }}
                        >
                          Catatan: {section.codeExample.explanation}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Embedded YouTube Video (if available) */}
            {currentSubtopic.youtubeVideo && (
              <YouTubeEmbed
                videoId={currentSubtopic.youtubeVideo.videoId}
                title={currentSubtopic.youtubeVideo.title}
                description={currentSubtopic.youtubeVideo.description}
                channelName={currentSubtopic.youtubeVideo.channelName}
                alternativeVideos={currentSubtopic.youtubeVideo.alternativeVideos}
              />
            )}

            {/* Interactive Activities */}
            {currentSubtopic.interactiveActivity === 'algorithm-order' && (
              <AlgorithmReorderActivity />
            )}

            {currentSubtopic.interactiveActivity === 'characteristics-match' && (
              <CharacteristicsMatchingActivity />
            )}

            {currentSubtopic.interactiveActivity === 'flowchart-symbols' && (
              <FlowchartSymbolQuizActivity />
            )}

            {selectedMaterialId === 3 && currentSubtopicIndex === 4 && (
              <FlowchartVisualizer />
            )}

            {currentSubtopic.interactiveActivity === 'pseudocode-order' && (
              <PseudocodeReorderActivity />
            )}

            {currentSubtopic.interactiveActivity === 'datatype-sorter' && (
              <DataTypeSorterActivity />
            )}

            {/* Bottom Stepper Navigation: Back and Next */}
            <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ borderColor: 'var(--color-border-subtle)' }}
            >
              <button
                onClick={handlePrevSubtopic}
                disabled={isFirstOverall}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border text-xs font-semibold shadow-xs transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                style={{
                  backgroundColor: 'var(--color-surface-subtle)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-main)',
                }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <div className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Submateri {currentSubtopicIndex + 1} dari {currentMaterial.subtopics.length}
              </div>

              <button
                onClick={handleNextSubtopic}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {isLastOverall ? (
                  <>
                    <span>Selesai Materi &rarr; Buka Latihan</span>
                    <CheckCircle className="w-4 h-4 ml-0.5" />
                  </>
                ) : (
                  <>
                    <span>Selanjutnya</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </>
                )}
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

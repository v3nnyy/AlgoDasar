import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Shapes } from 'lucide-react';

interface SymbolItem {
  id: string;
  name: string;
  svgShape: React.ReactNode;
  correctDescriptionId: string;
}

interface DescriptionItem {
  id: string;
  text: string;
}

const SYMBOLS: SymbolItem[] = [
  {
    id: 'terminator',
    name: 'Terminator',
    correctDescriptionId: 'desc-terminator',
    svgShape: (
      <div className="w-16 h-8 rounded-full border border-emerald-400 bg-emerald-950/50 flex items-center justify-center text-[10px] font-bold text-emerald-200 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
        Start / End
      </div>
    )
  },
  {
    id: 'process',
    name: 'Process',
    correctDescriptionId: 'desc-process',
    svgShape: (
      <div className="w-16 h-8 border border-purple-400 bg-purple-950/50 flex items-center justify-center text-[10px] font-bold text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
        Proses
      </div>
    )
  },
  {
    id: 'io',
    name: 'Input / Output',
    correctDescriptionId: 'desc-io',
    svgShape: (
      <div
        style={{ transform: 'skewX(-15deg)' }}
        className="w-16 h-8 border border-amber-400 bg-amber-950/50 flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.3)]"
      >
        <span style={{ transform: 'skewX(15deg)' }} className="text-[9px] font-bold text-amber-200">
          I / O
        </span>
      </div>
    )
  },
  {
    id: 'decision',
    name: 'Decision',
    correctDescriptionId: 'desc-decision',
    svgShape: (
      <div className="w-8 h-8 rotate-45 border border-fuchsia-400 bg-fuchsia-950/50 flex items-center justify-center shadow-[0_0_10px_rgba(217,70,239,0.3)]">
        <span className="-rotate-45 text-[8px] font-bold text-fuchsia-200">
          Kondisi
        </span>
      </div>
    )
  }
];

const DESCRIPTIONS: DescriptionItem[] = [
  { id: 'desc-terminator', text: 'Menandai titik awal (Mulai) atau akhir (Selesai) dari diagram alir.' },
  { id: 'desc-process', text: 'Operasi pengolahan data, kalkulasi aritmatika, atau inisialisasi variabel.' },
  { id: 'desc-io', text: 'Operasi pembacaan data masukan (input) atau pencetakan keluaran (output).' },
  { id: 'desc-decision', text: 'Titik evaluasi kondisi logika yang menghasilkan cabang alur Ya atau Tidak.' }
];

export const FlowchartSymbolQuizActivity: React.FC = () => {
  const [selectedSymbolId, setSelectedSymbolId] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [shuffledDescriptions] = useState(() => [...DESCRIPTIONS].sort(() => Math.random() - 0.5));
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectSymbol = (id: string) => {
    if (matches[id]) return;
    setSelectedSymbolId(id);
  };

  const handleSelectDesc = (descId: string) => {
    if (!selectedSymbolId) return;

    const currentSymbol = SYMBOLS.find(s => s.id === selectedSymbolId);
    if (currentSymbol && currentSymbol.correctDescriptionId === descId) {
      const newMatches = { ...matches, [selectedSymbolId]: descId };
      setMatches(newMatches);
      setSelectedSymbolId(null);

      if (Object.keys(newMatches).length === SYMBOLS.length) {
        setIsCompleted(true);
      }
    } else {
      setSelectedSymbolId(null);
    }
  };

  const handleReset = () => {
    setMatches({});
    setSelectedSymbolId(null);
    setIsCompleted(false);
  };

  return (
    <div className="mt-8 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            <Shapes className="w-4 h-4 text-purple-300" />
            <span>Aktivitas Interaktif</span>
          </div>
          <h3 className="text-base font-bold text-white">Mencocokkan Simbol Flowchart Standar</h3>
          <p className="text-xs text-slate-300">
            Klik bentuk simbol geometris di kolom kiri, lalu cocokkan dengan fungsi deskripsinya di kolom kanan.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-purple-200 hover:text-white glass-card hover:bg-purple-600/20 rounded-xl border border-purple-500/30 transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5 text-purple-300" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Symbols */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase text-purple-300 block mb-1">Pilih Bentuk Simbol:</span>
          {SYMBOLS.map((item) => {
            const isMatched = !!matches[item.id];
            const isSelected = selectedSymbolId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectSymbol(item.id)}
                disabled={isMatched}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  isMatched
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 cursor-default shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                    : isSelected
                    ? 'bg-purple-600/40 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : 'glass-card-subtle hover:bg-purple-600/15 border-purple-500/20 text-slate-200 cursor-pointer'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 flex justify-center">{item.svgShape}</div>
                  <span className="font-semibold text-xs sm:text-sm">{item.name}</span>
                </div>
                {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
              </button>
            );
          })}
        </div>

        {/* Right: Descriptions */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase text-purple-300 block mb-1">Pilih Fungsi Maknanya:</span>
          {shuffledDescriptions.map((desc) => {
            const matchedSymbolId = Object.keys(matches).find(k => matches[k] === desc.id);
            const isMatched = !!matchedSymbolId;

            return (
              <button
                key={desc.id}
                onClick={() => handleSelectDesc(desc.id)}
                disabled={isMatched || !selectedSymbolId}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isMatched
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 cursor-default shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                    : selectedSymbolId
                    ? 'glass-card hover:bg-purple-600/20 border-purple-400/50 text-slate-200 cursor-pointer shadow-sm'
                    : 'glass-card-subtle border-white/5 text-slate-500 cursor-not-allowed opacity-40'
                }`}
              >
                <p className="text-xs font-medium leading-relaxed">{desc.text}</p>
              </button>
            );
          })}
        </div>
      </div>

      {isCompleted && (
        <div className="mt-5 p-4 rounded-xl glass-card border border-emerald-500/40 bg-emerald-950/30 flex items-center gap-3 text-emerald-200 text-xs shadow-[0_0_20px_rgba(16,185,129,0.25)]">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <span className="font-bold text-white">Bagus sekali!</span> Semua simbol standar flowchart ANSI/ISO berhasil dipasangkan dengan tepat sesuai fungsinya.
          </div>
        </div>
      )}
    </div>
  );
};

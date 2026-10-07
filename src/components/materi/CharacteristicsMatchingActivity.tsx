import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, ArrowRight, Layers } from 'lucide-react';

interface CharacteristicPair {
  id: string;
  name: string;
  definition: string;
  example: string;
}

const PAIRS: CharacteristicPair[] = [
  {
    id: 'input',
    name: 'Input (Masukan)',
    definition: 'Memiliki nol atau lebih nilai masukan yang diberikan dari luar sistem.',
    example: 'Data panjang dan lebar yang diketikkan pengguna.'
  },
  {
    id: 'output',
    name: 'Output (Keluaran)',
    definition: 'Menghasilkan minimal satu solusi atau nilai yang bermanfaat.',
    example: 'Hasil perhitungan luas tercetak di layar monitor.'
  },
  {
    id: 'definiteness',
    name: 'Definiteness (Kepastian)',
    definition: 'Setiap instruksi harus jelas, tegas, dan tidak ambigu/multitafsir.',
    example: '"Hitung diskon = 10% x total", bukan "Beri diskon secukupnya".'
  },
  {
    id: 'finiteness',
    name: 'Finiteness (Keterbatasan)',
    definition: 'Harus berhenti setelah mengerjakan sejumlah langkah terhingga.',
    example: 'Perulangan angka 1 sampai 100 berhenti saat mencapai 100.'
  },
  {
    id: 'effectiveness',
    name: 'Effectiveness (Efektivitas)',
    definition: 'Setiap langkah harus sederhana dan realistis untuk dikerjakan dalam waktu wajar.',
    example: 'Menghindari instruksi pembagian dengan nol (x / 0).'
  }
];

export const CharacteristicsMatchingActivity: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const [shuffledDefinitions] = useState(() => {
    return [...PAIRS].map(p => ({ id: p.id, definition: p.definition, example: p.example }))
      .sort(() => Math.random() - 0.5);
  });

  const handleSelectTerm = (id: string) => {
    if (matches[id]) return;
    setSelectedTerm(id);
  };

  const handleSelectDefinition = (defId: string) => {
    if (!selectedTerm) return;

    if (selectedTerm === defId) {
      const newMatches = { ...matches, [selectedTerm]: defId };
      setMatches(newMatches);
      setSelectedTerm(null);

      if (Object.keys(newMatches).length === PAIRS.length) {
        setIsCompleted(true);
      }
    } else {
      setSelectedTerm(null);
    }
  };

  const handleReset = () => {
    setMatches({});
    setSelectedTerm(null);
    setIsCompleted(false);
  };

  return (
    <div className="mt-8 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4 text-purple-300" />
            <span>Aktivitas Interaktif</span>
          </div>
          <h3 className="text-base font-bold text-white">Mencocokkan 5 Karakteristik Algoritma Knuth</h3>
          <p className="text-xs text-slate-300">
            Klik salah satu istilah karakteristik di sebelah kiri, kemudian klik deskripsi/contoh yang sesuai di sebelah kanan.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-purple-200 hover:text-white glass-card hover:bg-purple-600/20 rounded-xl border border-purple-500/30 transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5 text-purple-300" />
          Mulai Ulang
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block mb-1">
            Pilih Karakteristik:
          </span>
          {PAIRS.map((pair) => {
            const isMatched = !!matches[pair.id];
            const isSelected = selectedTerm === pair.id;

            return (
              <button
                key={pair.id}
                onClick={() => handleSelectTerm(pair.id)}
                disabled={isMatched}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  isMatched
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 cursor-default shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                    : isSelected
                    ? 'bg-purple-600/40 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : 'glass-card-subtle hover:bg-purple-600/15 border-purple-500/20 text-slate-200 cursor-pointer'
                }`}
              >
                <div className="font-semibold text-xs sm:text-sm">{pair.name}</div>
                {isMatched ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : isSelected ? (
                  <ArrowRight className="w-4 h-4 text-purple-300 shrink-0" />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block mb-1">
            Cocokkan dengan Makna:
          </span>
          {shuffledDefinitions.map((item) => {
            const matchedTermKey = Object.keys(matches).find(k => matches[k] === item.id);
            const isMatched = !!matchedTermKey;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectDefinition(item.id)}
                disabled={isMatched || !selectedTerm}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isMatched
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-200 cursor-default shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                    : selectedTerm
                    ? 'glass-card hover:bg-purple-600/20 border-purple-400/50 text-slate-200 cursor-pointer shadow-sm'
                    : 'glass-card-subtle border-white/5 text-slate-500 cursor-not-allowed opacity-40'
                }`}
              >
                <div className="text-xs font-medium leading-relaxed">{item.definition}</div>
                <div className="text-[11px] text-purple-300/80 mt-1 italic">Contoh: {item.example}</div>
              </button>
            );
          })}
        </div>
      </div>

      {isCompleted && (
        <div className="mt-5 p-4 rounded-xl glass-card border border-emerald-500/40 bg-emerald-950/30 flex items-center gap-3 text-emerald-200 text-xs shadow-[0_0_20px_rgba(16,185,129,0.25)]">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <span className="font-bold text-white">Luar biasa!</span> Seluruh 5 karakteristik Donald Knuth telah berhasil dipasangkan dengan tepat.
          </div>
        </div>
      )}
    </div>
  );
};

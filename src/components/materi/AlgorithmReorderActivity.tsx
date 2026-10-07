import React, { useState } from 'react';
import { ArrowUpDown, CheckCircle, RefreshCw, AlertCircle, ListOrdered } from 'lucide-react';

interface StepItem {
  id: string;
  text: string;
  order: number;
}

const INITIAL_STEPS: StepItem[] = [
  { id: 'step-4', text: '4. Mematikan komputer dengan memilih menu Shut Down', order: 4 },
  { id: 'step-2', text: '2. Membuka aplikasi pemrograman (IDE)', order: 2 },
  { id: 'step-1', text: '1. Menekan tombol power untuk menyalakan komputer', order: 1 },
  { id: 'step-3', text: '3. Menulis dan menjalankan (run) kode program', order: 3 },
];

export const AlgorithmReorderActivity: React.FC = () => {
  const [items, setItems] = useState<StepItem[]>(() => {
    return [...INITIAL_STEPS].sort(() => Math.random() - 0.5);
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    setItems(newItems);
    setIsSubmitted(false);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    setItems(newItems);
    setIsSubmitted(false);
  };

  const checkOrder = () => {
    const correct = items.every((item, idx) => item.order === idx + 1);
    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setItems([...INITIAL_STEPS].sort(() => Math.random() - 0.5));
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="mt-8 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            <ListOrdered className="w-4 h-4 text-purple-300" />
            <span>Aktivitas Interaktif</span>
          </div>
          <h3 className="text-base font-bold text-white">Menyusun Urutan Algoritma Komputer</h3>
          <p className="text-xs text-slate-300">
            Gunakan tombol panah naik atau turun untuk menyusun langkah-langkah di bawah ini hingga membentuk urutan algoritma yang logis.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-purple-200 hover:text-white glass-card hover:bg-purple-600/20 rounded-xl border border-purple-500/30 transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Acak Ulang
        </button>
      </div>

      <div className="space-y-2.5 my-5">
        {items.map((item, index) => {
          let stateStyle = 'glass-card-subtle border-purple-500/20 text-slate-200 shadow-sm';
          if (isSubmitted) {
            if (item.order === index + 1) {
              stateStyle = 'bg-emerald-950/40 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.2)]';
            } else {
              stateStyle = 'bg-rose-950/40 border-rose-400 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.2)]';
            }
          }

          return (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${stateStyle}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-950/60 text-xs font-mono font-bold text-purple-300 border border-purple-500/30">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium">{item.text.replace(/^[0-9]\.\s*/, '')}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveUp(index)}
                  disabled={index === 0}
                  className="p-1.5 text-purple-300 hover:text-white disabled:opacity-20 hover:bg-purple-600/20 rounded-lg transition-colors cursor-pointer"
                  title="Pindah ke atas"
                >
                  <ArrowUpDown className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={() => moveDown(index)}
                  disabled={index === items.length - 1}
                  className="p-1.5 text-purple-300 hover:text-white disabled:opacity-20 hover:bg-purple-600/20 rounded-lg transition-colors cursor-pointer"
                  title="Pindah ke bawah"
                >
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={checkOrder}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
        >
          Periksa Urutan Langkah
        </button>

        {isSubmitted && (
          <div
            className={`flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl border ${
              isCorrect
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-rose-950/40 border-rose-500/40 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
            }`}
          >
            {isCorrect ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Urutan Sempurna! Algoritma telah tersusun secara logis dan teratur.</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Urutan belum tepat. Perhatikan langkah sebelum menyalakan dan mematikan komputer.</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

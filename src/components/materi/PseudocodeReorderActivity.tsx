import React, { useState } from 'react';
import { ArrowUpDown, CheckCircle, AlertCircle, RefreshCw, Code2 } from 'lucide-react';

interface CodeBlockItem {
  id: string;
  order: number;
  snippet: string;
  sectionRole: string;
}

const INITIAL_CODE_BLOCKS: CodeBlockItem[] = [
  {
    id: 'b-1',
    order: 1,
    sectionRole: '1. Bagian Judul (Header)',
    snippet: `PROGRAM HitungLuasPersegiPanjang\n// Program menghitung luas bidang persegi panjang`
  },
  {
    id: 'b-2',
    order: 2,
    sectionRole: '2. Bagian Deklarasi',
    snippet: `DEKLARASI:\n    panjang, lebar, luas : float`
  },
  {
    id: 'b-3',
    order: 3,
    sectionRole: '3. Bagian Deskripsi (Input)',
    snippet: `DESKRIPSI:\n    PRINT("Masukkan panjang dan lebar:")\n    INPUT(panjang, lebar)`
  },
  {
    id: 'b-4',
    order: 4,
    sectionRole: '4. Bagian Deskripsi (Proses & Output)',
    snippet: `    luas ← panjang * lebar\n    PRINT("Hasil Luas =", luas)\n    PRINT("Program Selesai")`
  }
];

export const PseudocodeReorderActivity: React.FC = () => {
  const [blocks, setBlocks] = useState<CodeBlockItem[]>(() => {
    return [...INITIAL_CODE_BLOCKS].sort(() => Math.random() - 0.5);
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index - 1];
    newBlocks[index - 1] = temp;
    setBlocks(newBlocks);
    setIsSubmitted(false);
  };

  const moveDown = (index: number) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[index + 1];
    newBlocks[index + 1] = temp;
    setBlocks(newBlocks);
    setIsSubmitted(false);
  };

  const checkOrder = () => {
    const ok = blocks.every((b, idx) => b.order === idx + 1);
    setIsCorrect(ok);
    setIsSubmitted(true);
  };

  const resetBlocks = () => {
    setBlocks([...INITIAL_CODE_BLOCKS].sort(() => Math.random() - 0.5));
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="mt-8 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            <Code2 className="w-4 h-4 text-purple-300" />
            <span>Aktivitas Interaktif</span>
          </div>
          <h3 className="text-base font-bold text-white">Menyusun Struktur Baku Pseudocode</h3>
          <p className="text-xs text-slate-300">
            Susun 4 blok kode semu berikut agar berurutan sesuai kaidah struktur resmi: <strong>Judul &rarr; Deklarasi &rarr; Deskripsi Input &rarr; Deskripsi Komputasi & Output</strong>.
          </p>
        </div>
        <button
          onClick={resetBlocks}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-purple-200 hover:text-white glass-card hover:bg-purple-600/20 rounded-xl border border-purple-500/30 transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5 text-purple-300" />
          Acak Ulang
        </button>
      </div>

      <div className="space-y-3 my-4">
        {blocks.map((block, index) => {
          let borderState = 'glass-card-subtle border-purple-500/20 text-slate-200';
          if (isSubmitted) {
            borderState = block.order === index + 1
              ? 'bg-emerald-950/40 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              : 'bg-rose-950/40 border-rose-400 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.2)]';
          }

          return (
            <div
              key={block.id}
              className={`p-4 rounded-xl border transition-all shadow-sm ${borderState}`}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-500/15">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-950/60 text-xs font-mono font-bold text-purple-300 border border-purple-500/30">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold text-purple-300">{block.sectionRole}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="p-1 text-purple-300 hover:text-white disabled:opacity-20 rounded-lg hover:bg-purple-600/20 cursor-pointer transition-colors"
                    title="Pindah ke atas"
                  >
                    <ArrowUpDown className="w-4 h-4 rotate-180" />
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === blocks.length - 1}
                    className="p-1 text-purple-300 hover:text-white disabled:opacity-20 rounded-lg hover:bg-purple-600/20 cursor-pointer transition-colors"
                    title="Pindah ke bawah"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <pre className="font-mono text-xs text-purple-100 bg-[#0a071c] p-3 rounded-xl border border-purple-500/20 whitespace-pre leading-relaxed overflow-x-auto shadow-inner">
                {block.snippet}
              </pre>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={checkOrder}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
        >
          Validasi Urutan Pseudocode
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
                <span>Urutan Pseudocode Tepat! Alur Judul, Deklarasi, dan Deskripsi tersusun secara standar.</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Urutan belum tepat. Ingat bahwa Judul selalu di awal, disusul Deklarasi, lalu Deskripsi aksi.</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

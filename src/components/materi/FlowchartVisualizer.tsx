import React, { useState } from 'react';
import { Play, RotateCcw, Terminal } from 'lucide-react';

export const FlowchartVisualizer: React.FC = () => {
  const [testScore, setTestScore] = useState<number>(80);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionLog, setExecutionLog] = useState<string[]>([]);

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStep(1);
    setExecutionLog([`[1] Memulai alur program pada Terminator Start...`]);

    setTimeout(() => {
      setActiveStep(2);
      setExecutionLog(prev => [...prev, `[2] Membaca nilai ujian mahasiswa: ${testScore}`]);
    }, 900);

    setTimeout(() => {
      setActiveStep(3);
      const isPass = testScore >= 75;
      setExecutionLog(prev => [
        ...prev,
        `[3] Decision: Apakah ${testScore} >= 75? -> ${isPass ? 'BENAR (YA)' : 'SALAH (TIDAK)'}`
      ]);
    }, 1800);

    setTimeout(() => {
      const isPass = testScore >= 75;
      setActiveStep(isPass ? 4 : 5);
      setExecutionLog(prev => [
        ...prev,
        isPass
          ? `[4] Output: Cetak "SELAMAT, ANDA LULUS!"`
          : `[5] Output: Cetak "MOHON MAAF, HARUS REMEDIAL"`
      ]);
    }, 2800);

    setTimeout(() => {
      setActiveStep(6);
      setExecutionLog(prev => [...prev, `[6] Alur program selesai pada Terminator End.`]);
      setIsRunning(false);
    }, 3800);
  };

  const resetSimulation = () => {
    setActiveStep(0);
    setIsRunning(false);
    setExecutionLog([]);
  };

  const isPass = testScore >= 75;

  return (
    <div className="mt-8 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-500/20">
        <div>
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
            Simulasi Interaktif Diagram Alir
          </span>
          <h3 className="text-base font-bold text-white">
            Simulator Eksekusi Logika Kelulusan Mahasiswa
          </h3>
          <p className="text-xs text-slate-300">
            Ubah nilai ujian, lalu tekan "Jalankan Alur" untuk mengamati bagaimana komputer menelusuri simbol demi simbol.
          </p>
        </div>
      </div>

      {/* Controller Deck */}
      <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl glass-card-inner border border-purple-500/20 mb-6">
        <div className="flex items-center gap-3">
          <label htmlFor="score-input" className="text-xs font-bold text-purple-200">
            Input Nilai Ujian:
          </label>
          <input
            id="score-input"
            type="number"
            min="0"
            max="100"
            value={testScore}
            onChange={(e) => {
              const val = Number(e.target.value);
              setTestScore(isNaN(val) ? 0 : Math.min(100, Math.max(0, val)));
              resetSimulation();
            }}
            disabled={isRunning}
            className="w-20 px-3 py-1.5 text-center text-sm font-mono font-bold bg-[#0c0822] text-white border border-purple-500/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-white font-bold text-xs transition-all shadow-md shadow-purple-600/30 border border-purple-400/30 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Jalankan Alur
          </button>
          <button
            onClick={resetSimulation}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass-card hover:bg-purple-600/20 text-purple-200 text-xs border border-purple-500/30 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>

        <div className="text-xs text-purple-300 ml-auto font-medium">
          Passing Grade: <span className="font-bold text-white">75</span> (Nilai &ge; 75 &rarr; Lulus)
        </div>
      </div>

      {/* Visual Flowchart Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 glass-card-inner rounded-2xl border border-purple-500/20 min-h-[480px]">
          
          {/* Node 1: Start (Terminator) */}
          <div
            className={`px-6 py-2.5 rounded-full border-2 transition-all text-xs font-bold tracking-wider uppercase text-center ${
              activeStep === 1
                ? 'bg-purple-600/40 border-purple-400 text-white ring-4 ring-purple-500/20 scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                : 'glass-card-subtle border-purple-500/30 text-slate-300'
            }`}
          >
            Mulai (Start)
          </div>

          <div className="w-0.5 h-6 bg-purple-400 relative">
            <div className="absolute -bottom-1 -left-1 text-purple-400 text-xs">▼</div>
          </div>

          {/* Node 2: Input Nilai (Parallelogram) */}
          <div
            style={{ transform: 'skewX(-12deg)' }}
            className={`px-5 py-2 border-2 transition-all text-center ${
              activeStep === 2
                ? 'bg-purple-600/40 border-purple-400 text-white ring-4 ring-purple-500/20 scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                : 'glass-card-subtle border-purple-500/30 text-slate-300'
            }`}
          >
            <span style={{ display: 'inline-block', transform: 'skewX(12deg)' }} className="text-xs font-semibold">
              Input nilai_ujian
            </span>
          </div>

          <div className="w-0.5 h-6 bg-purple-400 relative">
            <div className="absolute -bottom-1 -left-1 text-purple-400 text-xs">▼</div>
          </div>

          {/* Node 3: Decision (Diamond) */}
          <div className="relative py-2">
            <div
              className={`w-24 h-24 flex items-center justify-center transform rotate-45 border-2 transition-all ${
                activeStep === 3
                  ? 'bg-purple-600/40 border-purple-400 text-white ring-4 ring-purple-500/20 scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'glass-card-subtle border-purple-500/30 text-slate-300'
              }`}
            >
              <div className="transform -rotate-45 text-center px-1">
                <span className="text-[11px] font-bold block leading-tight">
                  nilai &ge; 75 ?
                </span>
              </div>
            </div>
          </div>

          {/* Branching branches */}
          <div className="w-full max-w-sm grid grid-cols-2 gap-4 mt-2 mb-2 text-center text-xs">
            {/* YA Branch */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold text-emerald-400 mb-1">YA (True)</span>
              <div className="w-0.5 h-5 bg-emerald-400 relative">
                <div className="absolute -bottom-1 -left-1 text-emerald-400 text-xs">▼</div>
              </div>
              <div
                className={`p-2.5 rounded-xl border-2 transition-all text-xs font-bold ${
                  activeStep === 4
                    ? 'bg-emerald-950/60 border-emerald-400 text-emerald-200 ring-4 ring-emerald-500/20 scale-105 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'glass-card-subtle border-emerald-500/30 text-emerald-300/80'
                }`}
              >
                Cetak "LULUS"
              </div>
            </div>

            {/* TIDAK Branch */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold text-rose-400 mb-1">TIDAK (False)</span>
              <div className="w-0.5 h-5 bg-rose-400 relative">
                <div className="absolute -bottom-1 -left-1 text-rose-400 text-xs">▼</div>
              </div>
              <div
                className={`p-2.5 rounded-xl border-2 transition-all text-xs font-bold ${
                  activeStep === 5
                    ? 'bg-rose-950/60 border-rose-400 text-rose-200 ring-4 ring-rose-500/20 scale-105 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                    : 'glass-card-subtle border-rose-500/30 text-rose-300/80'
                }`}
              >
                Cetak "REMEDIAL"
              </div>
            </div>
          </div>

          <div className="w-0.5 h-6 bg-purple-400 relative">
            <div className="absolute -bottom-1 -left-1 text-purple-400 text-xs">▼</div>
          </div>

          {/* Node 6: End (Terminator) */}
          <div
            className={`px-6 py-2.5 rounded-full border-2 transition-all text-xs font-bold tracking-wider uppercase text-center ${
              activeStep === 6
                ? 'bg-purple-600/40 border-purple-400 text-white ring-4 ring-purple-500/20 scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                : 'glass-card-subtle border-purple-500/30 text-slate-300'
            }`}
          >
            Selesai (End)
          </div>
        </div>

        {/* Live Terminal & Logs */}
        <div className="lg:col-span-5 flex flex-col h-full bg-[#0d0922]/90 rounded-2xl border border-purple-500/30 p-4 font-mono text-xs text-slate-200 shadow-xl">
          <div className="flex items-center gap-2 pb-2 mb-3 border-b border-purple-500/20 text-purple-300 font-sans text-xs">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span className="font-bold text-white">Log Eksekusi Komputer</span>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto max-h-[360px] text-slate-300">
            {executionLog.length === 0 ? (
              <p className="text-purple-300/50 italic font-sans text-xs">
                Belum ada eksekusi. Tekan tombol "Jalankan Alur" untuk melihat jejak eksekusi instruksi komputer.
              </p>
            ) : (
              executionLog.map((log, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 leading-relaxed font-mono">
                  {log}
                </div>
              ))
            )}
          </div>

          {activeStep === 6 && (
            <div className="mt-3 pt-3 border-t border-purple-500/20 text-xs font-sans">
              <div className={`p-3 rounded-xl border font-bold ${isPass ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-rose-950/60 border-rose-500 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.3)]'}`}>
                Hasil Akhir: {isPass ? 'LULUS (Nilai Memenuhi Kriteria)' : 'REMEDIAL (Nilai Belum Mencapai 75)'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

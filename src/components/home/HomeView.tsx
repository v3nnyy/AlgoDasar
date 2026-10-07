import React, { useState } from 'react';
import { Material, ViewMode } from '../../types/learning';
import {
  BookOpen,
  CheckCircle,
  Cpu,
  GitBranch,
  FileCode2,
  Boxes,
  ArrowRight,
  Play,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Terminal,
  Layers,
  Award,
  GraduationCap
} from 'lucide-react';

interface HomeViewProps {
  materials: Material[];
  onSelectMaterial: (materialId: number, subtopicId?: string) => void;
  onNavigate: (view: ViewMode) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  materials,
  onSelectMaterial,
  onNavigate,
}) => {
  // Interactive mini simulation in the hero card
  const [heroCounter, setHeroCounter] = useState(1);
  const [heroOutput, setHeroOutput] = useState<string[]>([
    '1. Inisialisasi program dan variabel A, B',
  ]);

  const stepHeroAlgorithm = () => {
    if (heroCounter === 1) {
      setHeroCounter(2);
      setHeroOutput(prev => [...prev, '2. Baca input: A = 8, B = 5']);
    } else if (heroCounter === 2) {
      setHeroCounter(3);
      setHeroOutput(prev => [...prev, '3. Hitung hasil: jumlah ← A + B (13)']);
    } else if (heroCounter === 3) {
      setHeroCounter(4);
      setHeroOutput(prev => [...prev, '4. Cetak output: "Hasil = 13"']);
    } else if (heroCounter === 4) {
      setHeroCounter(5);
      setHeroOutput(prev => [
        ...prev,
        '5. Program selesai (kondisi terminasi terpenuhi)',
      ]);
    } else {
      setHeroCounter(1);
      setHeroOutput(['1. Inisialisasi program dan variabel A, B']);
    }
  };

  const getMaterialIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Cpu className="w-5 h-5 text-purple-300" />;
      case 2:
        return <CheckCircle className="w-5 h-5 text-fuchsia-300" />;
      case 3:
        return <GitBranch className="w-5 h-5 text-emerald-300" />;
      case 4:
        return <FileCode2 className="w-5 h-5 text-amber-300" />;
      case 5:
        return <Boxes className="w-5 h-5 text-indigo-300" />;
      default:
        return <BookOpen className="w-5 h-5 text-purple-300" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Section */}
      <section className="pt-8 sm:pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
              <span>Dasar-Dasar Informatika</span>
              <span className="opacity-50">·</span>
              <span>Modul Interaktif Mahasiswa</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              Belajar{' '}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                Algoritma & Pemrograman Dasar
              </span>{' '}
              Secara Interaktif
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Media pembelajaran interaktif dengan visualisasi langkah komputasi, diagram alir standar ANSI/ISO, struktur pseudocode, dan simulasi memori tipe data.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('materi')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-purple-600/40 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4 text-purple-200" />
                <span>Mulai Belajar Materi</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={() => onNavigate('latihan')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-purple-600/20 text-purple-200 hover:text-white font-bold text-sm border border-purple-500/30 transition-all cursor-pointer shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Kerjakan Latihan Soal</span>
              </button>
            </div>

            {/* Quick trust markers */}
            <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-purple-200/70 border-t border-purple-500/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] inline-block" />
                <span>5 Modul Terstruktur</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.8)] inline-block" />
                <span>Simulasi & Diagram Visual</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] inline-block" />
                <span>20 Soal Evaluasi & Pembahasan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Interactive Code Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl glass-card border border-purple-500/30 glow-purple bg-[#120c2e]/90 shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-purple-950/40 border-b border-purple-500/20 text-purple-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-purple-300">simulasi_algoritma.algo</span>
                </div>
                <div className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30 text-purple-200">
                  Langkah {heroCounter}/5
                </div>
              </div>

              {/* Execution Output */}
              <div className="p-4 font-mono text-xs space-y-2 min-h-[175px] bg-[#0c0820]/90 text-slate-200">
                <div className="text-purple-400/70">// Jejak Alur Eksekusi Instruksi Komputer:</div>
                {heroOutput.map((out, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed transition-all ${
                      idx === heroOutput.length - 1 ? 'text-emerald-300 font-semibold flex items-center gap-1.5' : 'text-slate-300'
                    }`}
                  >
                    <span className="text-purple-400 font-bold">&gt;</span> {out}
                  </div>
                ))}
              </div>

              {/* Interactive Controller */}
              <div className="p-3.5 bg-purple-950/30 border-t border-purple-500/20 flex items-center justify-between">
                <span className="text-[11px] text-purple-200/70 font-sans">
                  Tekan untuk memproses instruksi:
                </span>
                <button
                  onClick={stepHeroAlgorithm}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-purple-600/30 border border-purple-400/30 transition-all cursor-pointer"
                >
                  {heroCounter >= 5 ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5 text-purple-200" />
                      <span>Ulangi Alur</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current text-purple-200" />
                      <span>Instruksi Berikutnya</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sasaran Kompetensi (Tujuan Pembelajaran) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-4 py-1.5 text-sm font-semibold text-indigo-300 mb-3">
            <GraduationCap className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Sasaran Kompetensi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Tujuan Pembelajaran Mahasiswa
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Kompetensi yang akan kamu kuasai setelah mempelajari kelima modul materi dan menyelesaikan latihan:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              num: '01',
              title: 'Memahami Konsep Algoritma',
              desc: 'Menguasai konsep dasar algoritma sebagai urutan langkah logis serta sifatnya yang independen dari bahasa pemrograman.'
            },
            {
              num: '02',
              title: 'Mengenali Karakteristik',
              desc: 'Mengidentifikasi 5 karakteristik Donald Knuth: Input, Output, Definiteness, Finiteness, dan Effectiveness.'
            },
            {
              num: '03',
              title: 'Merancang Flowchart',
              desc: 'Mengenal simbol standar ANSI/ISO serta kaidah menyusun diagram alir yang tepat dan bebas cacat logika.'
            },
            {
              num: '04',
              title: 'Menyusun Pseudocode',
              desc: 'Menuliskan kode semu terstruktur dengan bagian Judul, Deklarasi variabel, dan Deskripsi instruksi.'
            },
            {
              num: '05',
              title: 'Menguasai Tipe Data',
              desc: 'Memahami konsep memori variabel dan 5 tipe data primitif: Integer, Float, Char, String, dan Boolean.'
            }
          ].map((goal, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-card-interactive border border-purple-500/20 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 block mb-2">{goal.num}</span>
                <h3 className="font-bold text-white text-sm mb-2">{goal.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{goal.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center gap-1.5 text-[11px] text-purple-300 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>Kompetensi Inti</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 5 Kartu Materi Pembelajaran */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
              Kurikulum Perkuliahan
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              5 Modul Materi Pembelajaran
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Pelajari materi secara bertahap mulai dari konsep logika dasar hingga perancangan diagram alir, kode semu, dan tipe data.
            </p>
          </div>

          <button
            onClick={() => onNavigate('materi')}
            className="flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-purple-200 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Buka Seluruh Materi</span>
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat) => (
            <div
              key={mat.id}
              className="p-6 rounded-2xl glass-card-interactive border border-purple-500/25 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                    {getMaterialIcon(mat.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-300 px-2 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30">
                    Modul 0{mat.id}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {mat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {mat.shortDesc}
                </p>

                {/* Subtopic summary bullets */}
                <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                  {mat.subtopics.slice(0, 3).map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span className="truncate">{sub.title}</span>
                    </div>
                  ))}
                  {mat.subtopics.length > 3 && (
                    <div className="text-[11px] text-purple-300 font-semibold pl-3.5">
                      +{mat.subtopics.length - 3} submateri lainnya...
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {mat.subtopics.length} Submateri
                </span>

                <button
                  onClick={() => onSelectMaterial(mat.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <span>Pelajari Modul</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Quiz Card shortcut */}
          <div className="p-6 rounded-2xl glass-card border border-purple-500/40 glow-purple bg-gradient-to-br from-purple-950/40 via-[#130d2e] to-indigo-950/40 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-4 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <Award className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 block mb-1">Evaluasi Pemahaman</span>
              <h3 className="text-base font-bold text-white mb-2">Latihan & Studi Kasus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Uji pemahamanmu dengan 10 butir soal pilihan ganda atau 10 studi kasus praktis dengan feedback pembahasan komprehensif.
              </p>
            </div>

            <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
              <span className="text-xs text-purple-300 font-medium">Tersedia 2 Mode Soal</span>
              <button
                onClick={() => onNavigate('latihan')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-600/40 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Mulai Latihan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

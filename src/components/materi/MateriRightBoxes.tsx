import React from 'react';
import {
  Bookmark,
  Zap,
  Lightbulb,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  BookMarked
} from 'lucide-react';

interface MateriRightBoxesProps {
  materialId: number;
  onNavigateToQuiz: () => void;
}

export const MateriRightBoxes: React.FC<MateriRightBoxesProps> = ({
  materialId,
  onNavigateToQuiz,
}) => {
  // Content for Cheat Sheet & Intisari per Module
  const getCheatSheet = () => {
    switch (materialId) {
      case 1:
        return {
          title: 'Intisari Konsep Algoritma',
          badge: 'Ringkasan Modul 1',
          points: [
            { label: '3 Pilar Alur', desc: 'Input (Masukan) → Proses (Komputasi/Manipulasi) → Output (Solusi Nyata).' },
            { label: 'Independen dari Bahasa', desc: 'Logika algoritma bersifat universal; dapat diimplementasikan ke Python, C++, Java, atau JavaScript.' },
            { label: 'Divide & Conquer', desc: 'Memecah permasalahan besar dan rumit menjadi instruksi-instruksi kecil yang terstruktur.' }
          ]
        };
      case 2:
        return {
          title: '5 Karakteristik Donald Knuth',
          badge: 'Ringkasan Modul 2',
          points: [
            { label: 'Input & Output', desc: 'Memiliki 0 atau lebih masukan, dan wajib menghasilkan minimal 1 keluaran bermakna.' },
            { label: 'Definiteness', desc: 'Setiap instruksi harus jelas, eksplisit, dan tidak menimbulkan multitafsir (ambigu).' },
            { label: 'Finiteness', desc: 'Harus berhenti setelah sejumlah langkah berhingga. Wajib menghindari Infinite Loop.' },
            { label: 'Effectiveness', desc: 'Instruksi harus realistis dan secara teknis dapat diproses oleh mesin komputasi.' }
          ]
        };
      case 3:
        return {
          title: 'Pedoman Simbol Flowchart',
          badge: 'Ringkasan Modul 3',
          points: [
            { label: 'Terminator (Oval)', desc: 'Menandai titik awal (Start/Mulai) dan titik akhir (End/Selesai).' },
            { label: 'Process (Persegi Panjang)', desc: 'Operasi perhitungan aritmatika, pengolahan data, dan inisialisasi variabel.' },
            { label: 'Input/Output (Jajar Genjang)', desc: 'Operasi pembacaan input pengguna dan pencetakan data ke layar.' },
            { label: 'Decision (Belah Ketupat)', desc: 'Percabangan kondisi logika dengan minimal dua jalur cabang: Ya (True) / Tidak (False).' }
          ]
        };
      case 4:
        return {
          title: 'Kaidah Baku Pseudocode',
          badge: 'Ringkasan Modul 4',
          points: [
            { label: '1. Judul (Header)', desc: 'PROGRAM NamaProgram dan ringkasan singkat fungsi program.' },
            { label: '2. Deklarasi', desc: 'Kamus seluruh variabel, konstanta, dan tipe data yang digunakan.' },
            { label: '3. Deskripsi', desc: 'Langkah logika sekuensial, percabangan IF-THEN-ELSE, dan perulangan.' },
            { label: 'Notasi Penugasan', desc: 'Menggunakan simbol panah kiri (←) atau tanda sama dengan (=).' }
          ]
        };
      case 5:
        return {
          title: 'Karakteristik Tipe Data Primitif',
          badge: 'Ringkasan Modul 5',
          points: [
            { label: 'Integer (int)', desc: 'Bilangan bulat tanpa koma/pecahan (contoh: 25, 0, -100).' },
            { label: 'Float / Double', desc: 'Bilangan pecahan atau desimal (contoh: 3.14, 0.75, 98.5).' },
            { label: 'Char', desc: 'Karakter tunggal diapit tanda petik satu (contoh: \'A\', \'#\', \'9\').' },
            { label: 'String', desc: 'Kumpulan teks/karakter diapit petik dua (contoh: "Universitas", "Algoritma").' },
            { label: 'Boolean (bool)', desc: 'Nilai kebenaran logika: true (1 / benar) atau false (0 / salah).' }
          ]
        };
      default:
        return null;
    }
  };

  // Glossary / Kamus Istilah per Module
  const getGlossary = () => {
    switch (materialId) {
      case 1:
        return [
          { term: 'Algoritma', def: 'Urutan langkah logis teratur untuk menyelesaikan suatu masalah.' },
          { term: 'Deterministik', def: 'Input yang sama pasti selalu menghasilkan output yang sama tanpa ketidakpastian.' },
          { term: 'Debugging', def: 'Proses melacak dan memperbaiki kesalahan (bug) pada logika kode.' }
        ];
      case 2:
        return [
          { term: 'Finiteness', def: 'Sifat algoritma yang wajib memiliki batas akhir langkah eksekusi.' },
          { term: 'Infinite Loop', def: 'Kondisi perulangan yang terjebak berputar selamanya tanpa henti.' },
          { term: 'Ambiguity', def: 'Ketidakjelasan makna langkah yang dilarang dalam algoritma.' }
        ];
      case 3:
        return [
          { term: 'Flowline', def: 'Garis panah penunjuk arah aliran eksekusi instruksi.' },
          { term: 'ANSI / ISO', def: 'Standar internasional bentuk simbol-simbol diagram alir.' },
          { term: 'Connector', def: 'Simbol lingkaran kecil penghubung alur yang terpisah dalam satu halaman.' }
        ];
      case 4:
        return [
          { term: 'Pseudocode', def: 'Kode semu deskriptif yang mudah dipahami manusia sebelum dikonversi ke kode riil.' },
          { term: 'Reserved Keywords', def: 'Kata kunci bawaan bahasa pemrograman yang tidak boleh dijadikan nama variabel.' },
          { term: 'Modulo (%)', def: 'Operasi perhitungan yang menghasilkan sisa dari hasil pembagian dua bilangan.' }
        ];
      case 5:
        return [
          { term: 'Identifier', def: 'Nama pengenal unik untuk variabel, konstanta, atau fungsi.' },
          { term: 'Case-Sensitive', def: 'Sensitivitas huruf kapital; huruf besar dan kecil dianggap variabel berbeda.' },
          { term: 'Type Casting', def: 'Teknik konversi tipe data ke tipe data lain yang kompatibel.' }
        ];
      default:
        return [];
    }
  };

  // Study Tip per Module
  const getStudyTip = () => {
    switch (materialId) {
      case 1:
        return 'Saat menyelesaikan soal algoritma, selalu tuliskan contoh input konkret di atas kertas dan lakukan pelacakan manual (dry run) sebelum menulis program.';
      case 2:
        return 'Selalu periksa kondisi perulangan (loop). Pastikan nilai penghitung (counter) selalu mendekati kondisi batas akhir agar terbebas dari kesalahan Infinite Loop.';
      case 3:
        return 'Pada lembar jawaban ujian flowchart, selalu pastikan cabang dari simbol belah ketupat (Decision) memiliki dua label yang jelas: "Ya" dan "Tidak".';
      case 4:
        return 'Terapkan indentasi (spasi menjorok) pada blok pernyataan di dalam IF atau WHILE agar alur logika percabangan terbaca rapi dan mudah dievaluasi.';
      case 5:
        return 'Gunakan nama variabel yang bermakna deskriptif (misal: "totalHarga" bukan "x"). Praktik ini menghemat hingga 70% waktu saat debugging program.';
      default:
        return 'Pelajari teori secara bertahap dan segera uji pemahamanmu dengan latihan soal terapan.';
    }
  };

  const cheatSheet = getCheatSheet();
  const glossary = getGlossary();
  const studyTip = getStudyTip();

  return (
    <div className="space-y-6 pt-4 border-t border-white/10">
      
      {/* 2-Column Balanced Boxes: Cheat Sheet (Left) & Glossary (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Box A: Intisari & Rumus Kunci */}
        {cheatSheet && (
          <div className="p-5 rounded-2xl glass-card border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-slate-900/40 glow-purple flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {cheatSheet.title}
                  </h4>
                </div>
                <span className="text-[10px] text-purple-300 font-mono bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  {cheatSheet.badge}
                </span>
              </div>

              <div className="space-y-2.5">
                {cheatSheet.points.map((pt, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="font-semibold text-xs text-purple-300 block">{pt.label}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Box B: Glosarium Istilah Penting */}
        {glossary.length > 0 && (
          <div className="p-5 rounded-2xl glass-card border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-blue-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Glosarium Istilah Kunci
                  </h4>
                </div>
                <span className="text-[10px] text-blue-300 font-mono bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  Kamus Istilah
                </span>
              </div>

              <div className="space-y-2.5">
                {glossary.map((g, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="font-mono text-xs font-bold text-blue-300">{g.term}:</div>
                    <div className="text-xs text-slate-300 leading-relaxed mt-1">{g.def}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Box C: Tips Sukses Mahasiswa Informatika */}
      <div className="p-5 rounded-2xl glass-card border border-amber-500/20 bg-gradient-to-br from-amber-950/20 via-slate-900/40 to-slate-900/60">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Tips Praktik Mahasiswa Informatika</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {studyTip}
        </p>
      </div>

      {/* Box D: Call To Action - Uji Pemahaman di Kuis */}
      <div className="p-5 rounded-2xl glass-card border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-slate-900/40 to-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Siap Menguji Pemahamanmu?</span>
          </div>
          <p className="text-xs text-slate-300 max-w-xl">
            Selesaikan modul ini dan uji logika komputasimu melalui 10 soal interaktif pilihan ganda dan studi kasus terapan.
          </p>
        </div>

        <button
          onClick={onNavigateToQuiz}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-900/40 transition-all cursor-pointer shrink-0"
        >
          <span>Buka Latihan Soal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

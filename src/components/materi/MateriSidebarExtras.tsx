import React from 'react';
import {
  Bookmark,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  BookOpenCheck,
  Check
} from 'lucide-react';

interface MateriSidebarExtrasProps {
  materialId: number;
  currentSubtopicIndex: number;
  totalSubtopics: number;
  visitedSubtopics: string[];
  onNavigateToQuiz: () => void;
}

export const MateriSidebarExtras: React.FC<MateriSidebarExtrasProps> = ({
  materialId,
  currentSubtopicIndex,
  totalSubtopics,
  visitedSubtopics,
  onNavigateToQuiz,
}) => {
  const progressPercent = Math.round(((currentSubtopicIndex + 1) / totalSubtopics) * 100);

  // Content for Cheat Sheet & Intisari per Module
  const getCheatSheet = () => {
    switch (materialId) {
      case 1:
        return {
          title: 'Intisari Algoritma',
          badge: 'Modul 1',
          points: [
            { label: '3 Pilar Utama', desc: 'Input (Masukan) → Proses (Komputasi) → Output (Solusi).' },
            { label: 'Independen Bahasa', desc: 'Logika algoritma dapat diubah ke Python, C++, Java, atau JS.' },
            { label: 'Divide & Conquer', desc: 'Pecah masalah rumit menjadi langkah-langkah kecil terstruktur.' }
          ]
        };
      case 2:
        return {
          title: '5 Kriteria Donald Knuth',
          badge: 'Modul 2',
          points: [
            { label: 'Input & Output', desc: '0 atau lebih masukan, minimal 1 keluaran solusi nyata.' },
            { label: 'Definiteness', desc: 'Setiap instruksi harus pasti, jelas, dan tidak multitafsir.' },
            { label: 'Finiteness', desc: 'Wajib berhenti pada langkah terhingga; hindari Infinite Loop.' },
            { label: 'Effectiveness', desc: 'Setiap operasi harus realistis dan dapat dikerjakan komputer.' }
          ]
        };
      case 3:
        return {
          title: 'Simbol Standar Flowchart',
          badge: 'Modul 3',
          points: [
            { label: 'Terminator (Oval)', desc: 'Menandai titik Mulai (Start) dan Selesai (End).' },
            { label: 'Process (Persegi Panjang)', desc: 'Kalkulasi matematika, penugasan nilai variabel.' },
            { label: 'I/O (Jajar Genjang)', desc: 'Membaca input pengguna atau mencetak output layar.' },
            { label: 'Decision (Belah Ketupat)', desc: 'Percabangan logika bercabang 2: Ya (True) / Tidak (False).' }
          ]
        };
      case 4:
        return {
          title: 'Struktur Pseudocode',
          badge: 'Modul 4',
          points: [
            { label: '1. Judul (Header)', desc: 'PROGRAM NamaProgram dan ringkasan fungsinya.' },
            { label: '2. Deklarasi', desc: 'Kamus seluruh variabel dan tipe data yang digunakan.' },
            { label: '3. Deskripsi', desc: 'Inti instruksi komputasi: INPUT, PROSES, OUTPUT.' },
            { label: 'Aturan Penugasan', desc: 'Gunakan tanda panah kiri (←) atau sama dengan (=).' }
          ]
        };
      case 5:
        return {
          title: 'Tipe Data Primitif',
          badge: 'Modul 5',
          points: [
            { label: 'Integer (int)', desc: 'Bilangan bulat tanpa koma (misal: 25, -10, 0).' },
            { label: 'Float / Double', desc: 'Bilangan pecahan / desimal (misal: 3.14, 0.75).' },
            { label: 'Char', desc: 'Karakter tunggal diapit petik satu (misal: \'A\', \'#\').' },
            { label: 'String', desc: 'Teks kumpulan karakter diapit petik dua (misal: "Halo").' },
            { label: 'Boolean (bool)', desc: 'Nilai kebenaran logika: true (1) atau false (0).' }
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
          { term: 'Algoritma', def: 'Urutan langkah sistematis dan logis untuk memecahkan masalah.' },
          { term: 'Deterministik', def: 'Setiap input yang sama selalu menghasilkan output yang sama persis.' },
          { term: 'Debugging', def: 'Proses menemukan dan memperbaiki kesalahan logika (bug) program.' }
        ];
      case 2:
        return [
          { term: 'Finiteness', def: 'Keterbatasan langkah eksekusi; tidak boleh berputar selamanya.' },
          { term: 'Infinite Loop', def: 'Kondisi macet saat perulangan tidak pernah memenuhi syarat berhenti.' },
          { term: 'Ambiguity', def: 'Kekaburan arti yang dilarang keras dalam instruksi algoritma.' }
        ];
      case 3:
        return [
          { term: 'Flowline', def: 'Garis berpanah penunjuk arah aliran eksekusi instruksi.' },
          { term: 'ANSI / ISO', def: 'Badan standardisasi internasional yang menetapkan simbol flowchart.' },
          { term: 'Connector', def: 'Simbol lingkaran kecil penyambung alur pada satu halaman.' }
        ];
      case 4:
        return [
          { term: 'Pseudocode', def: 'Kode semu deskriptif yang menyerupai bahasa pemrograman.' },
          { term: 'Reserved Word', def: 'Kata kunci bawaan bahasa pemrograman yang tidak boleh dipakai sebagai nama variabel.' },
          { term: 'Modulo (%)', def: 'Operator matematika yang menghasilkan sisa dari hasil pembagian.' }
        ];
      case 5:
        return [
          { term: 'Identifier', def: 'Nama unik yang diberikan kepada variabel, konstanta, atau fungsi.' },
          { term: 'Case-Sensitive', def: 'Perbedaan huruf kapital dan huruf kecil dianggap entitas berbeda.' },
          { term: 'Type Casting', def: 'Proses konversi nilai dari suatu tipe data ke tipe data lain.' }
        ];
      default:
        return [];
    }
  };

  // Study Tip per Module
  const getStudyTip = () => {
    switch (materialId) {
      case 1:
        return 'Saat menghadapi soal algoritma, selalu tuliskan contoh input konkret di atas kertas dan telusuri langkahnya secara manual (dry run) sebelum membuat kode.';
      case 2:
        return 'Uji selalu kondisi terminasi perulanganmu. Pastikan variabel penghitung (counter) selalu bergerak mendekati kondisi berhenti agar tidak melanggar kriteria Finiteness.';
      case 3:
        return 'Di lembar jawaban ujian, jangan lupa memberi label "Ya" dan "Tidak" pada setiap cabang keluar dari simbol belah ketupat (Decision). Ini kesalahan paling sering dilakukan mahasiswa!';
      case 4:
        return 'Terapkan indentasi (spasi menjorok ke dalam) pada bagian Deskripsi di dalam blok IF atau WHILE agar hierarki logika langsung terbaca jelas.';
      case 5:
        return 'Gunakan nama variabel yang deskriptif (misal: "totalPembayaran" alih-alih "x"). Ini menghemat 70% waktu saat mencari bug di kemudian hari.';
      default:
        return 'Pelajari konsep secara bertahap dan praktikkan langsung dengan menyelesaikan latihan soal.';
    }
  };

  const cheatSheet = getCheatSheet();
  const glossary = getGlossary();
  const studyTip = getStudyTip();

  return (
    <div className="space-y-4">
      
      {/* 1. Module Learning Progress Card */}
      <div className="p-4 rounded-xl border shadow-sm transition-colors"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--color-text-main)' }}>
            <BookOpenCheck className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
            <span>Progres Belajar Modul</span>
          </span>
          <span className="font-mono font-bold" style={{ color: 'var(--color-primary-text)' }}>
            {progressPercent}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full overflow-hidden mb-2"
          style={{ backgroundColor: 'var(--color-surface-subtle)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progressPercent}%`,
              backgroundColor: 'var(--color-primary)',
            }}
          />
        </div>

        <div className="text-[11px] flex items-center justify-between" style={{ color: 'var(--color-text-muted)' }}>
          <span>Submateri {currentSubtopicIndex + 1} dari {totalSubtopics}</span>
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            <span>{visitedSubtopics.length} bagian dibaca</span>
          </span>
        </div>
      </div>

      {/* 2. Cheat Sheet / Intisari Cepat */}
      {cheatSheet && (
        <div className="p-4 rounded-xl border shadow-sm transition-colors"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b"
            style={{ borderColor: 'var(--color-border-subtle)' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
              <h4 className="text-xs font-bold uppercase tracking-wider font-mono"
                style={{ color: 'var(--color-primary-text)' }}
              >
                {cheatSheet.title}
              </h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border"
              style={{
                backgroundColor: 'var(--color-surface-subtle)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-muted)',
              }}
            >
              {cheatSheet.badge}
            </span>
          </div>

          <div className="space-y-2">
            {cheatSheet.points.map((pt, idx) => (
              <div key={idx} className="p-2.5 rounded-lg border space-y-0.5"
                style={{
                  backgroundColor: 'var(--color-surface-subtle)',
                  borderColor: 'var(--color-border-subtle)',
                }}
              >
                <span className="text-xs font-semibold block" style={{ color: 'var(--color-text-main)' }}>
                  {pt.label}
                </span>
                <p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Kamus Istilah Glosarium */}
      {glossary.length > 0 && (
        <div className="p-4 rounded-xl border shadow-sm transition-colors"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b text-xs font-bold uppercase tracking-wider font-mono"
            style={{
              borderColor: 'var(--color-border-subtle)',
              color: 'var(--color-primary-text)',
            }}
          >
            <Bookmark className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
            <span>Glosarium Istilah Kunci</span>
          </div>

          <div className="space-y-2.5">
            {glossary.map((g, idx) => (
              <div key={idx} className="text-xs pb-2 border-b last:border-b-0 last:pb-0"
                style={{ borderColor: 'var(--color-border-subtle)' }}
              >
                <div className="font-mono font-semibold" style={{ color: 'var(--color-text-main)' }}>
                  {g.term}:
                </div>
                <div className="text-[11px] leading-relaxed mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                  {g.def}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Tips Sukses Mahasiswa */}
      <div className="p-4 rounded-xl border shadow-sm"
        style={{
          backgroundColor: 'var(--color-surface-subtle)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5 font-mono text-amber-400">
          <Lightbulb className="w-4 h-4" />
          <span>Tips Mahasiswa Informatika</span>
        </div>
        <p className="text-xs leading-relaxed font-normal" style={{ color: 'var(--color-text-muted)' }}>
          {studyTip}
        </p>
      </div>

      {/* 5. Quick CTA to Practice Quiz */}
      <div className="p-4 rounded-xl border shadow-sm transition-colors"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center gap-2 text-xs font-bold mb-1" style={{ color: 'var(--color-text-main)' }}>
          <HelpCircle className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
          <span>Uji Pemahaman Mandiri</span>
        </div>
        <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--color-text-muted)' }}>
          Sudah selesai mempelajari modul ini? Cek penguasaan materi lewat 10 butir soal evaluasi & studi kasus.
        </p>
        <button
          onClick={onNavigateToQuiz}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <span>Buka Latihan Soal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

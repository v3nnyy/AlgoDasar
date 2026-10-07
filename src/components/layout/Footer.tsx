import React from 'react';
import { Terminal } from 'lucide-react';
import { ViewMode } from '../../types/learning';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-purple-500/20 bg-[#080617]/85 backdrop-blur-xl relative z-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-purple-500/15">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30 border border-purple-400/30">
                <Terminal className="w-4 h-4 text-purple-200" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">AlgoDasar</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Media Pembelajaran Multimedia Interaktif Algoritma dan Pemrograman Dasar untuk mahasiswa dan pemula. Dirancang dengan visualisasi langkah terstruktur, diagram alir, simulasi, dan latihan studi kasus interaktif.
            </p>
          </div>

          {/* Col 2: Navigasi Materi */}
          <div>
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">5 Modul Kurikulum</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('materi')} className="hover:text-purple-300 transition-colors text-left cursor-pointer">
                  1. Pengertian Algoritma
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materi')} className="hover:text-purple-300 transition-colors text-left cursor-pointer">
                  2. Karakteristik Algoritma
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materi')} className="hover:text-purple-300 transition-colors text-left cursor-pointer">
                  3. Flowchart ANSI/ISO
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materi')} className="hover:text-purple-300 transition-colors text-left cursor-pointer">
                  4. Pseudocode Standar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materi')} className="hover:text-purple-300 transition-colors text-left cursor-pointer">
                  5. Variabel & Tipe Data
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Evaluasi & Latihan */}
          <div>
            <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">Latihan Pemahaman</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('latihan')} className="hover:text-purple-300 transition-colors text-left cursor-pointer">
                  Kuis Pilihan Ganda (10 Soal)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('latihan')} className="hover:text-purple-300 transition-colors text-left cursor-pointer">
                  Latihan Studi Kasus (10 Soal)
                </button>
              </li>
              <li>
                <span className="text-slate-500">Pembahasan & Rekomendasi Modul</span>
              </li>
              <li>
                <span className="text-slate-500">Akses Langsung Tanpa Akun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} AlgoDasar — Media Pembelajaran Algoritma & Pemrograman Dasar.
          </div>
          <div className="flex items-center gap-3 text-purple-300/70">
            <span>Kurikulum Berbasis Kompetensi Dasar</span>
            <span aria-hidden="true">·</span>
            <span>Edisi Mahasiswa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

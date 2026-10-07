import React from 'react';

export const AlgorithmFlowDiagram: React.FC = () => {
  return (
    <div className="my-6 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4 text-center">
        Diagram Alir Tiga Elemen Pemrosesan Algoritma
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Input */}
        <div className="p-4 rounded-xl glass-card-inner border border-purple-500/20 text-center shadow-md">
          <div className="w-8 h-8 mx-auto rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold mb-2 text-xs shadow-[0_0_10px_rgba(168,85,247,0.3)]">
            1
          </div>
          <h4 className="font-bold text-white text-sm">Masukan (Input)</h4>
          <p className="text-xs text-slate-300 mt-1">Data mentah yang diketikkan pengguna, sensor, atau file database.</p>
        </div>

        {/* Process */}
        <div className="p-4 rounded-xl glass-card-inner border border-purple-500/20 text-center shadow-md">
          <div className="w-8 h-8 mx-auto rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 font-bold mb-2 text-xs shadow-[0_0_10px_rgba(217,70,239,0.3)]">
            2
          </div>
          <h4 className="font-bold text-white text-sm">Pemrosesan (Process)</h4>
          <p className="text-xs text-slate-300 mt-1">Logika komputasi, operasi aritmatika, seleksi kondisi, dan perulangan.</p>
        </div>

        {/* Output */}
        <div className="p-4 rounded-xl glass-card-inner border border-purple-500/20 text-center shadow-md">
          <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold mb-2 text-xs shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            3
          </div>
          <h4 className="font-bold text-white text-sm">Keluaran (Output)</h4>
          <p className="text-xs text-slate-300 mt-1">Solusi yang dicetak ke layar monitor, tersimpan ke file, atau sinyal aktuator.</p>
        </div>
      </div>
    </div>
  );
};

export const KnuthGridDiagram: React.FC = () => {
  const items = [
    { title: 'Input', desc: '0 atau lebih nilai masukan dari luar sistem.' },
    { title: 'Output', desc: 'Minimal 1 nilai luaran sebagai solusi masalah.' },
    { title: 'Definiteness', desc: 'Instruksi jelas, terukur, dan tidak ambigu.' },
    { title: 'Finiteness', desc: 'Wajib berhenti setelah sejumlah langkah terhingga.' },
    { title: 'Effectiveness', desc: 'Instruksi sederhana dan realistis untuk dieksekusi.' },
  ];

  return (
    <div className="my-6 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4 text-center">
        5 Karakteristik Algoritma (Donald E. Knuth)
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="p-4 rounded-xl glass-card-inner border border-purple-500/20 text-center flex flex-col justify-between shadow-sm">
            <span className="text-xs font-mono font-bold text-purple-400">0{idx + 1}</span>
            <div className="font-bold text-sm text-white my-1.5">{item.title}</div>
            <div className="text-[11px] text-slate-300 leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FlowchartShapesDiagram: React.FC = () => {
  const shapes = [
    {
      name: 'Terminator',
      shape: <div className="w-14 h-7 rounded-full border border-emerald-400 bg-emerald-950/60 flex items-center justify-center text-[10px] font-bold text-emerald-200">Start/End</div>,
      role: 'Titik awal dan titik akhir program'
    },
    {
      name: 'Process',
      shape: <div className="w-14 h-8 border border-purple-400 bg-purple-950/60 flex items-center justify-center text-[10px] font-bold text-purple-200">Proses</div>,
      role: 'Kalkulasi matematika / penugasan variabel'
    },
    {
      name: 'Input / Output',
      shape: (
        <div style={{ transform: 'skewX(-15deg)' }} className="w-14 h-8 border border-amber-400 bg-amber-950/60 flex items-center justify-center">
          <span style={{ transform: 'skewX(15deg)' }} className="text-[10px] font-bold text-amber-200">I / O</span>
        </div>
      ),
      role: 'Membaca input atau mencetak output'
    },
    {
      name: 'Decision',
      shape: (
        <div className="w-7 h-7 rotate-45 border border-fuchsia-400 bg-fuchsia-950/60 flex items-center justify-center">
          <span className="-rotate-45 text-[9px] font-bold text-fuchsia-200">?</span>
        </div>
      ),
      role: 'Percabangan kondisi logika (Ya / Tidak)'
    },
    {
      name: 'Flowline',
      shape: (
        <div className="flex items-center text-purple-300 font-bold text-lg">
          <span className="w-8 h-0.5 bg-purple-400 inline-block mr-1"></span>&rarr;
        </div>
      ),
      role: 'Arah aliran jalannya instruksi'
    },
    {
      name: 'Connector',
      shape: <div className="w-7 h-7 rounded-full border border-purple-400 bg-purple-900/60 flex items-center justify-center text-[9px] font-bold text-purple-200">O</div>,
      role: 'Penghubung alur pada satu halaman'
    }
  ];

  return (
    <div className="my-6 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4 text-center">
        Katalog Simbol Standar ANSI / ISO Flowchart
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {shapes.map((s, idx) => (
          <div key={idx} className="p-3.5 rounded-xl glass-card-inner border border-purple-500/20 flex items-center gap-3 shadow-sm">
            <div className="w-16 flex justify-center shrink-0">{s.shape}</div>
            <div>
              <div className="font-bold text-xs text-white">{s.name}</div>
              <div className="text-[11px] text-slate-300 leading-tight mt-0.5">{s.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PseudocodeStructureDiagram: React.FC = () => {
  return (
    <div className="my-6 p-6 rounded-2xl glass-card border border-purple-500/25 font-mono text-xs">
      <div className="text-xs font-sans font-bold uppercase tracking-wider text-purple-300 mb-4 text-center">
        Struktur Standar Penulisan Pseudocode
      </div>
      <div className="space-y-3">
        {/* Header */}
        <div className="p-3.5 rounded-xl glass-card-inner border border-purple-500/20 shadow-sm">
          <span className="text-purple-300 font-bold block mb-1 font-sans text-xs">1. BAGIAN JUDUL (HEADER)</span>
          <p className="text-white">PROGRAM NamaProgram</p>
          <p className="text-purple-300/70 italic">// Penjelasan ringkas apa yang dikerjakan program ini</p>
        </div>

        {/* Declaration */}
        <div className="p-3.5 rounded-xl glass-card-inner border border-purple-500/20 shadow-sm">
          <span className="text-fuchsia-300 font-bold block mb-1 font-sans text-xs">2. BAGIAN DEKLARASI (KAMUS DATA)</span>
          <p className="text-white">DEKLARASI:</p>
          <p className="text-white pl-4">namaVariabel : tipe_data</p>
          <p className="text-purple-300/70 italic pl-4">// Tempat mendaftarkan semua variabel & konstanta</p>
        </div>

        {/* Description */}
        <div className="p-3.5 rounded-xl glass-card-inner border border-purple-500/20 shadow-sm">
          <span className="text-emerald-300 font-bold block mb-1 font-sans text-xs">3. BAGIAN DESKRIPSI (ALGORITMA UTAMA)</span>
          <p className="text-white">DESKRIPSI:</p>
          <p className="text-white pl-4">INPUT(dataMasukan)</p>
          <p className="text-white pl-4">hasil ← dataMasukan * 2</p>
          <p className="text-white pl-4">OUTPUT(hasil)</p>
        </div>
      </div>
    </div>
  );
};

export const MemoryBoxesDiagram: React.FC = () => {
  const vars = [
    { label: 'umur', type: 'Integer', value: '20', color: 'border-purple-400/40 bg-purple-950/40' },
    { label: 'ipk', type: 'Float', value: '3.85', color: 'border-teal-400/40 bg-teal-950/40' },
    { label: 'nama', type: 'String', value: '"Budi Pratama"', color: 'border-fuchsia-400/40 bg-fuchsia-950/40' },
    { label: 'isAktif', type: 'Boolean', value: 'true', color: 'border-emerald-400/40 bg-emerald-950/40' }
  ];

  return (
    <div className="my-6 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4 text-center">
        Visualisasi Alokasi Memori RAM untuk Variabel
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {vars.map((v, i) => (
          <div key={i} className={`p-4 rounded-xl border flex flex-col justify-between ${v.color} shadow-sm`}>
            <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
              <span className="font-mono font-bold text-white">{v.label}</span>
              <span className="text-purple-300 text-[11px]">{v.type}</span>
            </div>
            <div className="my-3 text-center">
              <span className="font-mono text-sm font-bold text-white bg-[#0a071c] px-3 py-1.5 rounded-lg border border-purple-500/30 inline-block shadow-inner">
                {v.value}
              </span>
            </div>
            <div className="text-[10px] text-purple-300/70 text-center font-mono">
              Alamat: 0x7FFE{i * 4}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

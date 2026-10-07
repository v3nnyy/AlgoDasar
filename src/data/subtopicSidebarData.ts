export interface SubtopicSidebarCard {
  id: string;
  title: string;
  theme: 'purple' | 'blue' | 'emerald' | 'amber' | 'indigo';
  type: 'guide' | 'checklist' | 'analogy' | 'code-breakdown' | 'simulator-tips' | 'glossary';
  badge?: string;
  description?: string;
  items?: { label: string; desc: string }[];
  highlight?: string;
  tags?: string[];
}

export interface SubtopicSidebarConfig {
  subtopicId: string;
  estimatedReadTime: string;
  levelBadge: string;
  focusSummary: string;
  cards: SubtopicSidebarCard[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const SUBTOPIC_SIDEBAR_CONFIGS: Record<string, SubtopicSidebarConfig> = {
  // ==========================================
  // MODUL 1 — ALGORITMA PEMROGRAMAN
  // ==========================================
  '1-1-pengertian-dasar': {
    subtopicId: '1-1-pengertian-dasar',
    estimatedReadTime: '7 menit',
    levelBadge: 'Video & Teori Dasar',
    focusSummary: 'Pengenalan filosofi algoritma dan cara komputer mengeksekusi runtunan instruksi logis.',
    cards: [
      {
        id: '1-1-video-guide',
        title: 'Panduan Menonton Video',
        theme: 'purple',
        type: 'guide',
        badge: 'Fokus Video',
        description: 'Perhatikan di menit ke 02:15 bagaimana pembicara menganalogikan pemikiran komputer yang kaku namun sangat cepat.',
        items: [
          { label: 'Definisi Algoritma', desc: 'Langkah teratur, terhingga, dan tidak bermakna ganda.' },
          { label: 'Asal Nama', desc: 'Diambil dari nama ilmuwan Muslim Al-Khwarizmi (abad ke-9).' },
          { label: 'Independen Bahasa', desc: 'Konsep logika tetap sama baik di Python, C++, maupun JS.' }
        ]
      },
      {
        id: '1-1-pipeline',
        title: 'Alur Siklus Eksekusi',
        theme: 'blue',
        type: 'checklist',
        badge: 'Pipeline',
        items: [
          { label: '1. Input', desc: 'Data mentah yang dimasukkan pengguna atau sensor.' },
          { label: '2. Proses Logika', desc: 'Komputasi aritmatika & evaluasi percabangan.' },
          { label: '3. Output Solusi', desc: 'Hasil yang ditampilkan ke layar atau disimpan ke disk.' }
        ]
      },
      {
        id: '1-1-glossary',
        title: 'Glosarium Submateri 1',
        theme: 'emerald',
        type: 'glossary',
        badge: 'Istilah',
        items: [
          { label: 'Deterministik', desc: 'Input sama selalu menghasilkan output yang sama persis.' },
          { label: 'Instruksi', desc: 'Perintah satuan terkecil yang dipahami oleh prosesor.' }
        ]
      }
    ],
    quote: {
      text: 'Ilmu perhitungan adalah jembatan yang menghubungkan kejelasan berpikir manusia dengan kepastian pemecahan masalah.',
      author: 'Muhammad ibn Musa al-Khwarizmi',
      role: 'Bapak Algoritma'
    }
  },

  '1-2-fungsi-tujuan': {
    subtopicId: '1-2-fungsi-tujuan',
    estimatedReadTime: '4 menit',
    levelBadge: 'Konsep Singkat',
    focusSummary: 'Mengapa pemrogram profesional selalu merancang algoritma sebelum menulis kode program.',
    cards: [
      {
        id: '1-2-core-benefits',
        title: '3 Manfaat Utama Algoritma',
        theme: 'purple',
        type: 'checklist',
        badge: 'Fokus',
        items: [
          { label: 'Pola Pikir Rapi', desc: 'Memecah masalah kompleks menjadi sub-tugas kecil (Divide & Conquer).' },
          { label: 'Efisiensi Eksekusi', desc: 'Menghemat waktu eksekusi CPU dan kapasitas memori RAM.' },
          { label: 'Mudah Di-debug', desc: 'Menemukan titik kesalahan logika jauh lebih cepat.' }
        ]
      },
      {
        id: '1-2-analogy',
        title: 'Analogi Resep Koki',
        theme: 'amber',
        type: 'analogy',
        badge: 'Refleksi',
        description: 'Jika koki memasak tanpa takaran bumbu dan urutan langkah yang jelas, rasa hidangan akan berantakan. Begitu pula kode program tanpa algoritma.'
      }
    ]
  },

  '1-3-cara-kerja-tahapan': {
    subtopicId: '1-3-cara-kerja-tahapan',
    estimatedReadTime: '6 menit',
    levelBadge: 'Aktivitas Interaktif',
    focusSummary: 'Memahami 3 struktur kontrol logika: runtunan, percabangan, dan perulangan.',
    cards: [
      {
        id: '1-3-lab-guide',
        title: 'Petunjuk Latihan Interaktif',
        theme: 'emerald',
        type: 'guide',
        badge: 'Tantangan Lab',
        description: 'Susun langkah algoritma pembuatan secangkir kopi di bawah ini dengan urutan logis yang benar untuk menguji pemahaman sekuensialmu.'
      },
      {
        id: '1-3-patterns',
        title: '3 Struktur Kontrol Eksekusi',
        theme: 'blue',
        type: 'checklist',
        badge: 'Pola Dasar',
        items: [
          { label: 'Runtunan (Sequential)', desc: 'Instruksi dijalankan berurutan baris demi baris.' },
          { label: 'Percabangan (Selection)', desc: 'Memilih jalur berdasarkan kondisi Benar atau Salah.' },
          { label: 'Perulangan (Looping)', desc: 'Mengulang blok instruksi selama kondisi terpenuhi.' }
        ]
      }
    ]
  },

  '1-4-studi-kasus-algoritma': {
    subtopicId: '1-4-studi-kasus-algoritma',
    estimatedReadTime: '6 menit',
    levelBadge: 'Studi Kasus & Kode',
    focusSummary: 'Implementasi algoritma deskriptif pada perhitungan luas persegi panjang dan nilai rata-rata.',
    cards: [
      {
        id: '1-4-vars',
        title: 'Variabel yang Digunakan',
        theme: 'indigo',
        type: 'code-breakdown',
        badge: 'Bedah Kasus',
        items: [
          { label: 'panjang, lebar', desc: 'Menampung masukan angka dari pengguna.' },
          { label: 'luas', desc: 'Hasil perhitungan perkalian: panjang * lebar.' },
          { label: 'tugas, uts, uas', desc: 'Komponen nilai mahasiswa sebelum dihitung rata-rata.' }
        ]
      },
      {
        id: '1-4-tips',
        title: 'Kaidah Menulis Deskriptif',
        theme: 'amber',
        type: 'checklist',
        badge: 'Tips Ujian',
        items: [
          { label: 'Selalu Beri Nomor', desc: 'Nomori setiap langkah dari 1 sampai n secara jelas.' },
          { label: 'Mulai & Selesai', desc: 'Wajib diawali langkah Mulai dan diakhiri langkah Selesai.' }
        ]
      }
    ]
  },

  // ==========================================
  // MODUL 2 — KARAKTERISTIK ALGORITMA
  // ==========================================
  '2-1-knuth-overview': {
    subtopicId: '2-1-knuth-overview',
    estimatedReadTime: '8 menit',
    levelBadge: 'Video & Teori Fundamental',
    focusSummary: 'Lima kriteria wajib Donald Knuth agar serangkaian instruksi sah disebut algoritma.',
    cards: [
      {
        id: '2-1-video-notes',
        title: 'Panduan Video Donald Knuth',
        theme: 'purple',
        type: 'guide',
        badge: 'Catatan Video',
        description: 'Simak penjelasan 5 karakteristik algoritma dari kanal edukasi CODEPOLITAN.',
        items: [
          { label: 'Definiteness', desc: 'Makna tunggal tanpa ambigu.' },
          { label: 'Finiteness', desc: 'Wajib berhenti setelah jumlah langkah terhingga.' },
          { label: 'Effectiveness', desc: 'Operasi realistis yang dapat diselesaikan komputer.' }
        ]
      },
      {
        id: '2-1-gates',
        title: '5 Gerbang Kualifikasi Knuth',
        theme: 'blue',
        type: 'checklist',
        badge: 'Pilar Utama',
        items: [
          { label: '1. Input', desc: 'Nol atau lebih data masukan dari luar.' },
          { label: '2. Output', desc: 'Minimal satu keluaran solusi nyata.' },
          { label: '3. Kepastian', desc: 'Setiap instruksi jelas dan tidak membingungkan.' },
          { label: '4. Keterbatasan', desc: 'Tidak boleh terjebak loop tak hingga (infinite loop).' },
          { label: '5. Efektivitas', desc: 'Dapat dijalankan secara mekanis dalam waktu wajar.' }
        ]
      }
    ],
    quote: {
      text: 'Sebuah algoritma harus cukup presisi sehingga dapat dieksekusi secara mekanis tanpa keraguan oleh mesin.',
      author: 'Donald E. Knuth',
      role: 'Penulis The Art of Computer Programming'
    }
  },

  '2-2-input-output': {
    subtopicId: '2-2-input-output',
    estimatedReadTime: '5 menit',
    levelBadge: 'Aktivitas Interaktif',
    focusSummary: 'Hubungan erat antara masukan awal dan keluaran hasil komputasi.',
    cards: [
      {
        id: '2-2-match-guide',
        title: 'Petunjuk Latihan Menjodohkan',
        theme: 'emerald',
        type: 'guide',
        badge: 'Aktivitas Lab',
        description: 'Jodohkan istilah karakteristik algoritma dengan skenario contoh yang tepat pada kotak aktivitas interaktif di sebelah kanan.'
      },
      {
        id: '2-2-io-rules',
        title: 'Aturan Input & Output',
        theme: 'blue',
        type: 'checklist',
        badge: 'Konsep',
        items: [
          { label: 'Input 0 Contoh', desc: 'Algoritma mencetak "Hello World" atau bilangan Pi.' },
          { label: 'Output Wajib Ada', desc: 'Algoritma tanpa output sama sekali adalah algoritma yang sia-sia.' }
        ]
      }
    ]
  },

  '2-3-definiteness-finiteness': {
    subtopicId: '2-3-definiteness-finiteness',
    estimatedReadTime: '5 menit',
    levelBadge: 'Analisis Logika',
    focusSummary: 'Mencegah ambiguitas instruksi dan menghindari jebakan loop tanpa henti.',
    cards: [
      {
        id: '2-3-warning',
        title: 'Bahaya Infinite Loop',
        theme: 'amber',
        type: 'analogy',
        badge: 'Peringatan',
        description: 'Jika kondisi berhenti dalam perulangan tidak pernah tercapai, memori dan prosesor akan terkunci pada utilisasi 100% hingga aplikasi crash.'
      },
      {
        id: '2-3-ambiguity',
        title: 'Contoh Ambigu vs Pasti',
        theme: 'purple',
        type: 'checklist',
        badge: 'Perbandingan',
        items: [
          { label: 'Ambigu (Salah)', desc: '"Tambahkan air secukupnya dan aduk sebentar."' },
          { label: 'Definite (Benar)', desc: '"Tambahkan 250ml air dan aduk selama 30 detik."' }
        ]
      }
    ]
  },

  '2-4-effectiveness-realistis': {
    subtopicId: '2-4-effectiveness-realistis',
    estimatedReadTime: '4 menit',
    levelBadge: 'Efektivitas Komputasi',
    focusSummary: 'Memastikan setiap operasi komputasi realistis dan dapat diselesaikan komputer.',
    cards: [
      {
        id: '2-4-realism',
        title: 'Kriteria Keefektifan',
        theme: 'emerald',
        type: 'checklist',
        badge: 'Ringkasan',
        items: [
          { label: 'Operasi Dasar', desc: 'Menggunakan instruksi primitif (tambah, kurang, banding).' },
          { label: 'Waktu Komputasi', desc: 'Harus selesai dalam hitungan milidetik atau detik, bukan tahunan.' }
        ]
      },
      {
        id: '2-4-tips',
        title: 'Tips Ujian Karakteristik',
        theme: 'indigo',
        type: 'guide',
        badge: 'Tips Dosen',
        description: 'Saat ujian, pastikan menyebutkan nama Donald E. Knuth saat menjelaskan 5 karakteristik algoritma.'
      }
    ]
  },

  // ==========================================
  // MODUL 3 — FLOWCHART
  // ==========================================
  '3-1-pengertian-flowchart': {
    subtopicId: '3-1-pengertian-flowchart',
    estimatedReadTime: '8 menit',
    levelBadge: 'Video & Standar ANSI',
    focusSummary: 'Diagram alir standar internasional untuk memetakan logika pemrograman.',
    cards: [
      {
        id: '3-1-video-notes',
        title: 'Panduan Video Flowchart',
        theme: 'purple',
        type: 'guide',
        badge: 'Video SWS Space',
        description: 'Simak video tutorial #3 Notasi Flowchart. Perhatikan cara membedakan simbol masukan dan proses.',
        items: [
          { label: 'Standar Simbol', desc: 'Mengacu pada aturan baku ANSI dan ISO internasional.' },
          { label: 'Arah Panah', desc: 'Mengalir dari atas ke bawah atau kiri ke kanan.' }
        ]
      },
      {
        id: '3-1-symbols-preview',
        title: '4 Simbol Paling Sering Dipakai',
        theme: 'emerald',
        type: 'checklist',
        badge: 'Katalog',
        items: [
          { label: 'Terminator (Oval)', desc: 'Awal (Mulai) dan Akhir (Selesai).' },
          { label: 'Process (Kotak)', desc: 'Perhitungan & pengolahan data.' },
          { label: 'I/O (Jajar Genjang)', desc: 'Membaca input & mencetak output.' },
          { label: 'Decision (Belah Ketupat)', desc: 'Kondisi logika bercabang Ya / Tidak.' }
        ]
      }
    ],
    quote: {
      text: 'Visualisasi alur berpikir yang baik adalah pelindung terbaik dari kesalahan logika yang rumit.',
      author: 'Edsger W. Dijkstra',
      role: 'Pionir Algoritma'
    }
  },

  '3-2-fungsi-flowchart': {
    subtopicId: '3-2-fungsi-flowchart',
    estimatedReadTime: '4 menit',
    levelBadge: 'Manfaat Industri',
    focusSummary: 'Peranan strategis diagram alir dalam kolaborasi tim pengembang perangkat lunak.',
    cards: [
      {
        id: '3-2-roles',
        title: 'Manfaat di Industri Software',
        theme: 'blue',
        type: 'checklist',
        badge: 'Kolaborasi',
        items: [
          { label: 'Bahasa Universal', desc: 'Menghubungkan tim bisnis, desainer UI, dan programmer.' },
          { label: 'Pendeteksi Bug Cepat', desc: 'Jalur buntu terlihat sebelum baris kode diketik.' },
          { label: 'Dokumentasi Sistem', desc: 'Petunjuk arsitektur saat aplikasi diperbarui.' }
        ]
      },
      {
        id: '3-2-quote',
        title: 'Kaidah Perancangan',
        theme: 'amber',
        type: 'analogy',
        badge: 'Best Practice',
        description: 'Membuat flowchart sebelum mengode menghemat hingga 50% waktu debugging di kemudian hari.'
      }
    ]
  },

  '3-3-simbol-flowchart': {
    subtopicId: '3-3-simbol-flowchart',
    estimatedReadTime: '7 menit',
    levelBadge: 'Katalog Simbol & Kuis',
    focusSummary: 'Mengenal 6 simbol standar ANSI/ISO beserta fungsi spesifiknya.',
    cards: [
      {
        id: '3-3-quiz-guide',
        title: 'Petunjuk Latihan Kuis Simbol',
        theme: 'emerald',
        type: 'guide',
        badge: 'Tantangan Lab',
        description: 'Tebak nama dan fungsi setiap simbol bangun geometri pada aktivitas interaktif di layar kanan untuk menguji ketelitianmu.'
      },
      {
        id: '3-3-connector',
        title: 'Simbol Penghubung (Connector)',
        theme: 'indigo',
        type: 'checklist',
        badge: 'Detail Simbol',
        items: [
          { label: 'Lingkaran Kecil', desc: 'Penyambung alur pada halaman yang sama (On-page connector).' },
          { label: 'Segilima / Off-page', desc: 'Penyambung alur ke halaman berbeda.' }
        ]
      }
    ]
  },

  '3-4-aturan-dasar': {
    subtopicId: '3-4-aturan-dasar',
    estimatedReadTime: '5 menit',
    levelBadge: 'Kaidah Desain',
    focusSummary: 'Aturan baku aliran garis, titik awal tunggal, dan percabangan keputusan.',
    cards: [
      {
        id: '3-4-rules',
        title: '4 Aturan Emas Flowchart',
        theme: 'amber',
        type: 'checklist',
        badge: 'Kaidah Baku',
        items: [
          { label: 'Arah Aliran', desc: 'Wajib Top-to-Bottom atau Left-to-Right.' },
          { label: 'Hanya 1 Start', desc: 'Diagram alir hanya boleh memiliki 1 Terminator Mulai.' },
          { label: 'Cabang Decision', desc: 'Wajib ada 2 anak panah keluar berlabel "Ya" dan "Tidak".' },
          { label: 'Hindari Tabrakan', desc: 'Garis alir tidak boleh saling bersilangan tanpa konektor.' }
        ]
      }
    ]
  },

  '3-5-contoh-simulator': {
    subtopicId: '3-5-contoh-simulator',
    estimatedReadTime: '9 menit',
    levelBadge: 'Simulator Interaktif',
    focusSummary: 'Simulasi alur eksekusi keputusan kelulusan mahasiswa berdasarkan passing grade.',
    cards: [
      {
        id: '3-5-simulator-guide',
        title: 'Panduan Simulator Alur',
        theme: 'emerald',
        type: 'simulator-tips',
        badge: 'Live Simulator',
        description: 'Gunakan panel kontrol di layar kanan: klik "Mulai Simulasi" dan "Langkah Berikutnya" untuk melihat sorotan hijau bergerak di setiap node diagram.',
        items: [
          { label: 'Tes Nilai 85', desc: 'Amati alur memilih cabang hijau "Ya" menuju LULUS.' },
          { label: 'Tes Nilai 60', desc: 'Amati alur memilih cabang merah "Tidak" menuju REMEDIAL.' }
        ]
      },
      {
        id: '3-5-decision-logic',
        title: 'Logika Belah Ketupat',
        theme: 'blue',
        type: 'checklist',
        badge: 'Bedah Node',
        items: [
          { label: 'Kondisi', desc: 'nilai >= 75' },
          { label: 'Cabang True', desc: 'Cetak "LULUS" & Selesai.' },
          { label: 'Cabang False', desc: 'Cetak "REMEDIAL" & Selesai.' }
        ]
      },
      {
        id: '3-5-quiz-cta',
        title: 'Siap Uji Pemahaman?',
        theme: 'purple',
        type: 'guide',
        badge: 'Langkah Akhir',
        description: 'Setelah mencoba simulator, klik tombol "Mulai Latihan Soal" di bawah untuk menguji materi Modul 3.'
      }
    ]
  },

  // ==========================================
  // MODUL 4 — PSEUDOCODE
  // ==========================================
  '4-1-pengertian-pseudocode': {
    subtopicId: '4-1-pengertian-pseudocode',
    estimatedReadTime: '7 menit',
    levelBadge: 'Video & Konsep Dasar',
    focusSummary: 'Kode semu sebagai jembatan intuitif antara bahasa manusia dan bahasa pemrograman.',
    cards: [
      {
        id: '4-1-video-notes',
        title: 'Panduan Video Pseudocode',
        theme: 'purple',
        type: 'guide',
        badge: 'Video CODEPOLITAN',
        description: 'Perhatikan penjelasan cara merancang pseudocode tanpa terikat sintaks titik-koma yang kaku.',
        items: [
          { label: 'Arti "Pseudo"', desc: 'Berasal dari bahasa Yunani yang berarti semu atau tiruan.' },
          { label: 'Fokus Logika', desc: 'Pemrogram tidak dipusingkan oleh syntax error saat merancang alur.' }
        ]
      },
      {
        id: '4-1-contrast',
        title: 'Pseudocode vs Kode Nyata',
        theme: 'blue',
        type: 'checklist',
        badge: 'Perbandingan',
        items: [
          { label: 'Pseudocode', desc: 'Ditulis untuk dibaca manusia, bebas compiler.' },
          { label: 'Kode Nyata', desc: 'Ditulis dengan aturan kaku agar dipahami compiler komputer.' }
        ]
      }
    ],
    quote: {
      text: 'Algorithms + Data Structures = Programs. Rancang algoritmanya terlebih dahulu dalam kode semu.',
      author: 'Niklaus Wirth',
      role: 'Perancang Bahasa Pascal'
    }
  },

  '4-2-fungsi-pseudocode': {
    subtopicId: '4-2-fungsi-pseudocode',
    estimatedReadTime: '4 menit',
    levelBadge: 'Manfaat & Portabilitas',
    focusSummary: 'Keunggulan kode semu dalam konversi cepat ke berbagai bahasa pemrograman.',
    cards: [
      {
        id: '4-2-benefits',
        title: 'Portabilitas Pseudocode',
        theme: 'emerald',
        type: 'checklist',
        badge: 'Kelebihan',
        items: [
          { label: '1 Dokumen untuk Semua', desc: 'Bisa langsung dikonversi ke Python, C++, Java, atau PHP.' },
          { label: 'Komunikasi Cepat', desc: 'Mudah dipahami oleh anggota tim walau beda bahasa spesialisasi.' }
        ]
      }
    ]
  },

  '4-3-struktur-pseudocode': {
    subtopicId: '4-3-struktur-pseudocode',
    estimatedReadTime: '5 menit',
    levelBadge: 'Struktur Standar',
    focusSummary: 'Tiga bagian baku penyusunan pseudocode: Judul, Deklarasi, dan Deskripsi.',
    cards: [
      {
        id: '4-3-blueprint',
        title: '3 Blok Utama Pseudocode',
        theme: 'indigo',
        type: 'checklist',
        badge: 'Struktur Baku',
        items: [
          { label: '1. Judul (Header)', desc: 'PROGRAM NamaProgram dan komentar penjelasan fungsi.' },
          { label: '2. Deklarasi', desc: 'Kamus seluruh variabel dan tipe data yang akan dipakai.' },
          { label: '3. Deskripsi', desc: 'Inti algoritma: INPUT, kalkulasi operasi, percabangan, dan PRINT.' }
        ]
      }
    ]
  },

  '4-4-aturan-penulisan': {
    subtopicId: '4-4-aturan-penulisan',
    estimatedReadTime: '6 menit',
    levelBadge: 'Aktivitas Interaktif',
    focusSummary: 'Penggunaan kata kunci kapital (UPPERCASE) dan simbol penugasan panah kiri.',
    cards: [
      {
        id: '4-4-reorder-guide',
        title: 'Petunjuk Latihan Pseudocode',
        theme: 'emerald',
        type: 'guide',
        badge: 'Tantangan Lab',
        description: 'Urutkan baris-baris pseudocode di sebelah kanan sesuai struktur baku (Judul -> Deklarasi -> Deskripsi).'
      },
      {
        id: '4-4-keywords',
        title: 'Kata Kunci Standar',
        theme: 'amber',
        type: 'checklist',
        badge: 'Notasi Baku',
        items: [
          { label: 'Masukan / Luaran', desc: 'INPUT / READ dan OUTPUT / PRINT.' },
          { label: 'Penugasan Nilai', desc: 'Gunakan simbol panah kiri (←) atau sama dengan (=).' },
          { label: 'Indentasi', desc: 'Wajib menjorok ke dalam pada blok IF atau WHILE.' }
        ]
      }
    ]
  },

  '4-5-contoh-pseudocode': {
    subtopicId: '4-5-contoh-pseudocode',
    estimatedReadTime: '7 menit',
    levelBadge: 'Studi Kasus Lengkap',
    focusSummary: 'Studi kasus program cek bilangan ganjil-genap dan perhitungan luas persegi panjang.',
    cards: [
      {
        id: '4-5-case-study',
        title: 'Bedah Operator MOD',
        theme: 'indigo',
        type: 'code-breakdown',
        badge: 'Logika MOD',
        description: 'Operator MOD menghasilkan sisa pembagian bulat.',
        items: [
          { label: '8 MOD 2 = 0', desc: 'Tidak ada sisa bagi -> Bilangan GENAP.' },
          { label: '9 MOD 2 = 1', desc: 'Ada sisa bagi 1 -> Bilangan GANJIL.' }
        ]
      },
      {
        id: '4-5-exam-tips',
        title: 'Tips Menulis di Lembar Ujian',
        theme: 'amber',
        type: 'guide',
        badge: 'Tips Ujian',
        description: 'Jangan pernah lupa menuliskan tipe data di bagian DEKLARASI sebelum variabel digunakan di bagian DESKRIPSI.'
      }
    ]
  },

  // ==========================================
  // MODUL 5 — VARIABEL & TIPE DATA
  // ==========================================
  '5-1-pengertian-variabel': {
    subtopicId: '5-1-pengertian-variabel',
    estimatedReadTime: '7 menit',
    levelBadge: 'Video & Alokasi RAM',
    focusSummary: 'Konsep memori variabel sebagai wadah berlabel di memori RAM komputer.',
    cards: [
      {
        id: '5-1-video-notes',
        title: 'Panduan Video Variabel',
        theme: 'purple',
        type: 'guide',
        badge: 'Video CODEPOLITAN',
        description: 'Simak video tutorial #5 Variabel dan Tipe Data dari kanal CODEPOLITAN.',
        items: [
          { label: 'Label Wadah', desc: 'Nama variabel (misal: "umur").' },
          { label: 'Isi Wadah', desc: 'Nilai data yang disimpan (misal: 20).' },
          { label: 'Ukuran Wadah', desc: 'Tipe data penentu kapasitas RAM (misal: integer 4 Byte).' }
        ]
      },
      {
        id: '5-1-ram-map',
        title: 'Peta Alokasi RAM',
        theme: 'blue',
        type: 'checklist',
        badge: 'Arsitektur',
        items: [
          { label: '0x1000: int', desc: '4 Byte bilangan bulat.' },
          { label: '0x1004: float', desc: '8 Byte desimal presisi ganda.' },
          { label: '0x100C: char', desc: '1 Byte karakter tunggal.' }
        ]
      }
    ],
    quote: {
      text: 'Mesin komputasi bekerja dengan membaca dan mengubah simbol-simbol di dalam sel memori terorganisir.',
      author: 'Alan Turing',
      role: 'Bapak Ilmu Komputer Modern'
    }
  },

  '5-2-fungsi-variabel': {
    subtopicId: '5-2-fungsi-variabel',
    estimatedReadTime: '4 menit',
    levelBadge: 'Peran Kritis',
    focusSummary: 'Berbagai fungsi vital variabel untuk menampung input, hasil kalkulasi, counter, dan flag.',
    cards: [
      {
        id: '5-2-roles',
        title: '4 Peran Pokok Variabel',
        theme: 'emerald',
        type: 'checklist',
        badge: 'Fungsi Nyata',
        items: [
          { label: 'Data Input Pengguna', desc: 'Menyimpan nama, password, dan email akun.' },
          { label: 'Kalkulasi Sementara', desc: 'Menghitung total keranjang belanja & skor game.' },
          { label: 'Penghitung (Counter)', desc: 'Menghitung jumlah iterasi dalam perulangan loop.' },
          { label: 'Status Sistem (Flag)', desc: 'Menyimpan status login (isLoggedIn = true/false).' }
        ]
      }
    ]
  },

  '5-3-aturan-penamaan': {
    subtopicId: '5-3-aturan-penamaan',
    estimatedReadTime: '5 menit',
    levelBadge: 'Kaidah Identifier',
    focusSummary: 'Aturan penamaan variabel yang sah, standar camelCase, dan kata kunci terlarang.',
    cards: [
      {
        id: '5-3-naming-rules',
        title: 'Aturan Sah Identifier',
        theme: 'amber',
        type: 'checklist',
        badge: 'Kaidah Baku',
        items: [
          { label: 'Karakter Pertama', desc: 'Wajib huruf (A-Z, a-z) atau garis bawah (_).' },
          { label: 'Dilarang Diawali Angka', desc: 'Penamaan "1nilai" ilegal dan menimbulkan syntax error.' },
          { label: 'Dilarang Spasi', desc: 'Gunakan camelCase (namaMahasiswa) atau snake_case.' },
          { label: 'Case-Sensitive', desc: 'Huruf besar dan kecil dianggap variabel yang berbeda.' }
        ]
      }
    ]
  },

  '5-4-tipe-data-dasar': {
    subtopicId: '5-4-tipe-data-dasar',
    estimatedReadTime: '6 menit',
    levelBadge: 'Aktivitas Interaktif',
    focusSummary: 'Klasifikasi 5 tipe data primitif: integer, float, char, string, dan boolean.',
    cards: [
      {
        id: '5-4-sorter-guide',
        title: 'Petunjuk Latihan Tipe Data',
        theme: 'emerald',
        type: 'guide',
        badge: 'Tantangan Lab',
        description: 'Tarik dan kelompokkan nilai-nilai data ke dalam wadah tipe data yang sesuai pada modul aktivitas interaktif di layar kanan.'
      },
      {
        id: '5-4-types-matrix',
        title: 'Matriks 5 Tipe Primitif',
        theme: 'blue',
        type: 'checklist',
        badge: 'Katalog Tipe',
        items: [
          { label: 'Integer (int)', desc: 'Bilangan bulat tanpa koma: 25, 0, -100.' },
          { label: 'Float / Double', desc: 'Bilangan desimal/pecahan: 3.14, 0.75.' },
          { label: 'Char', desc: 'Karakter tunggal diapit petik tunggal: \'A\', \'9\'.' },
          { label: 'String', desc: 'Untaian teks diapit petik ganda: "Halo Dunia".' },
          { label: 'Boolean (bool)', desc: 'Logika biner: true atau false.' }
        ]
      }
    ]
  },

  '5-5-contoh-kode': {
    subtopicId: '5-5-contoh-kode',
    estimatedReadTime: '7 menit',
    levelBadge: 'Perbandingan C++ vs Python',
    focusSummary: 'Perbandingan implementasi tipe data bertipe statis (C++) dan bertipe dinamis (Python).',
    cards: [
      {
        id: '5-5-code-diff',
        title: 'Static vs Dynamic Typing',
        theme: 'purple',
        type: 'checklist',
        badge: 'Perbandingan',
        items: [
          { label: 'C++ (Statically Typed)', desc: 'Tipe data harus ditulis eksplisit di awal (int umur = 19;).' },
          { label: 'Python (Dynamic Typed)', desc: 'Tipe data dideteksi otomatis saat program berjalan (umur = 19).' }
        ]
      },
      {
        id: '5-5-finish-cta',
        title: 'Selamat! Modul Selesai',
        theme: 'emerald',
        type: 'guide',
        badge: 'Evaluasi Akhir',
        description: 'Kamu telah menuntaskan seluruh materi dari Modul 1 sampai Modul 5. Uji seluruh pemahamanmu di Latihan Soal & Studi Kasus!'
      }
    ]
  }
};

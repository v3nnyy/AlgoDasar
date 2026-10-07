import { QuizQuestion } from '../types/learning';

export const mcqQuestions: QuizQuestion[] = [
  {
    id: 1,
    materialId: 1,
    materialTitle: 'Materi 1 — Pengertian Algoritma',
    question: 'Berdasarkan konsep ilmu komputer, manakah definisi yang paling tepat mengenai algoritma?',
    options: [
      'Kumpulan kode program yang sudah dikompilasi menjadi file biner mesin.',
      'Urutan langkah-langkah logis dan sistematis untuk memecahkan suatu masalah atau mencapai tujuan tertentu.',
      'Perangkat keras komputer yang berfungsi melakukan perhitungan aritmatika dan logika.',
      'Aplikasi perangkat lunak yang bertugas mengelola sistem operasi pada komputer.'
    ],
    correctIndex: 1,
    explanation: 'Algoritma adalah serangkaian langkah logis, terstruktur, dan sistematis untuk menyelesaikan masalah, serta bersifat independen dari bahasa pemrograman apa pun.',
    relatedSubtopic: 'Pengertian Algoritma'
  },
  {
    id: 2,
    materialId: 1,
    materialTitle: 'Materi 1 — Pengertian Algoritma',
    question: 'Tiga komponen pokok alur pemrosesan data yang selalu terdapat dalam setiap algoritma adalah...',
    options: [
      'Input, Database, dan Server',
      'Kompiler, Interpreter, dan Linker',
      'Input, Proses (Processing), dan Output',
      'Header, Variabel, dan Perulangan'
    ],
    correctIndex: 2,
    explanation: 'Setiap algoritma bekerja dengan menerima Masukan (Input), melakukan pengolahan/komputasi (Proses), dan menghasilkan solusi akhir (Output).',
    relatedSubtopic: 'Tiga Elemen Utama Algoritma'
  },
  {
    id: 3,
    materialId: 2,
    materialTitle: 'Materi 2 — Karakteristik Algoritma',
    question: 'Menurut Donald E. Knuth, algoritma harus berhenti setelah mengerjakan sejumlah langkah terhingga. Karakteristik ini dinamakan...',
    options: [
      'Definiteness',
      'Effectiveness',
      'Finiteness',
      'Feasibility'
    ],
    correctIndex: 2,
    explanation: 'Finiteness (keterbatasan) menyatakan bahwa algoritma tidak boleh berjalan selamanya (infinite loop); ia harus mencapai kondisi berhenti setelah menyelesaikan langkah berhingga.',
    relatedSubtopic: 'Finiteness'
  },
  {
    id: 4,
    materialId: 2,
    materialTitle: 'Materi 2 — Karakteristik Algoritma',
    question: 'Sebuah instruksi dalam resep bertuliskan: "Aduk adonan beberapa saat hingga dirasa cukup". Mengapa instruksi tersebut melanggar kriteria Definiteness dalam algoritma?',
    options: [
      'Karena instruksi tersebut membutuhkan bahan masukan (input) yang terlalu banyak.',
      'Karena tidak menghasilkan keluaran berupa makanan matang.',
      'Karena instruksi tersebut bersifat ambigu, tidak terukur, dan memiliki multitafsir.',
      'Karena instruksi tersebut menggunakan operasi matematika yang terlalu kompleks.'
    ],
    correctIndex: 2,
    explanation: 'Definiteness mewajibkan setiap instruksi jelas, tidak ambigu, dan hanya memiliki satu interpretasi logika yang pasti bagi mesin/pelaksana.',
    relatedSubtopic: 'Definiteness'
  },
  {
    id: 5,
    materialId: 3,
    materialTitle: 'Materi 3 — Flowchart',
    question: 'Dalam diagram alir (flowchart) standar ANSI/ISO, simbol belah ketupat (diamond) digunakan untuk melambangkan...',
    options: [
      'Mulai atau Berhentinya suatu program (Terminator)',
      'Operasi pemrosesan aritmatika dan penugasan variabel (Process)',
      'Pembacaan data dari pengguna atau pencetakan hasil (Input/Output)',
      'Pengambilan keputusan kondisi logika dengan cabang Ya/Tidak (Decision)'
    ],
    correctIndex: 3,
    explanation: 'Simbol belah ketupat (Decision) melambangkan titik percabangan kondisi logika yang menghasilkan jalur Ya (True) atau Tidak (False).',
    relatedSubtopic: 'Simbol Standar Flowchart'
  },
  {
    id: 6,
    materialId: 3,
    materialTitle: 'Materi 3 — Flowchart',
    question: 'Bentuk geometris yang digunakan untuk menggambarkan operasi membaca input dari keyboard atau mencetak output ke layar monitor adalah...',
    options: [
      'Persegi Panjang',
      'Jajar Genjang',
      'Lingkaran Kecil',
      'Oval / Kapsul'
    ],
    correctIndex: 1,
    explanation: 'Jajar genjang (parallelogram) adalah simbol standar internasional untuk operasi Input/Output data.',
    relatedSubtopic: 'Simbol Standar Flowchart'
  },
  {
    id: 7,
    materialId: 4,
    materialTitle: 'Materi 4 — Pseudocode',
    question: 'Struktur baku pseudocode secara akademis terdiri atas tiga bagian utama, yaitu...',
    options: [
      'Import, Class, dan Method',
      'Judul (Header), Deklarasi, dan Deskripsi',
      'Input, Output, dan Komentar',
      'Inisialisasi, Kondisi, dan Eksekusi'
    ],
    correctIndex: 1,
    explanation: 'Struktur standar pseudocode tersusun dari Bagian Judul (Header), Bagian Deklarasi (kamus data/variabel), dan Bagian Deskripsi (inti instruksi algoritma).',
    relatedSubtopic: 'Struktur Dasar Pseudocode'
  },
  {
    id: 8,
    materialId: 4,
    materialTitle: 'Materi 4 — Pseudocode',
    question: 'Apa alasan utama para programmer merancang algoritma menggunakan pseudocode sebelum menulis program langsung?',
    options: [
      'Agar kode tersebut dapat langsung dijalankan oleh mesin komputer tanpa dikompilasi.',
      'Karena pseudocode membebaskan programmer dari sintaks bahasa yang kaku dan fokus pada alur logika pemecahan masalah.',
      'Karena pseudocode otomatis mengenkripsi data penting agar aman dari peretasan.',
      'Karena pseudocode merupakan satu-satunya bahasa resmi yang diakui standar ISO.'
    ],
    correctIndex: 1,
    explanation: 'Pseudocode mempermudah programmer berkonsentrasi mematangkan alur logika berpikir tanpa terbebani aturan sintaksis spesifik (seperti titik koma atau kurung kurawal).',
    relatedSubtopic: 'Fungsi & Tujuan Pseudocode'
  },
  {
    id: 9,
    materialId: 5,
    materialTitle: 'Materi 5 — Variabel & Tipe Data',
    question: 'Di antara nama variabel berikut, manakah penamaan yang TIDAK VALID (menyebabkan syntax error) dalam kebanyakan bahasa pemrograman?',
    options: [
      'totalHarga',
      '_statusUser',
      '2totalPembayaran',
      'nilai_ujian_1'
    ],
    correctIndex: 2,
    explanation: 'Aturan baku penamaan variabel melarang karakter pertama diawali dengan angka (misal: "2totalPembayaran" adalah ilegal, seharusnya "totalPembayaran2").',
    relatedSubtopic: 'Aturan Penamaan Variabel'
  },
  {
    id: 10,
    materialId: 5,
    materialTitle: 'Materi 5 — Variabel & Tipe Data',
    question: 'Tipe data manakah yang paling tepat untuk menyimpan status keaktifan mahasiswa yang hanya bernilai benar (aktif) atau salah (cuti)?',
    options: [
      'Integer',
      'Float',
      'Boolean',
      'Char'
    ],
    correctIndex: 2,
    explanation: 'Tipe data Boolean (bool) dirancang khusus untuk menyimpan nilai kebenaran logika dua kondisi: true atau false.',
    relatedSubtopic: 'Jenis Tipe Data Dasar'
  }
];

export const caseStudyQuestions: QuizQuestion[] = [
  {
    id: 101,
    materialId: 1,
    materialTitle: 'Materi 1 — Pengertian Algoritma',
    question: 'Sebuah mesin ATM menerima kartu nasabah, meminta PIN, lalu memverifikasi saldo sebelum mengeluarkan uang. Jika PIN salah dimasukkan berturut-turut sebanyak 3 kali, kartu otomatis diblokir. Konsep algoritma apakah yang diterapkan pada pemblokiran tersebut?',
    contextSnippet: 'Kasus Keamanan Mesin ATM: Percobaan PIN salah berulang.',
    options: [
      'Algoritma Pengurutan (Sorting Algorithm) dari kartu terlama',
      'Percabangan Logika Bersyarat (Conditional Branching) dengan penghitung (counter) kesalahan',
      'Perulangan Tak Hingga (Infinite Loop) tanpa batas terminasi',
      'Pengalokasian Memori Dinamis untuk uang tunai'
    ],
    correctIndex: 1,
    explanation: 'Sistem menerapkan percabangan bersyarat (IF counter_salah >= 3 THEN blokir_kartu) yang dievaluasi setiap kali nasabah salah memasukkan PIN.',
    relatedSubtopic: 'Contoh Algoritma dalam Kehidupan'
  },
  {
    id: 202,
    materialId: 2,
    materialTitle: 'Materi 2 — Karakteristik Algoritma',
    question: 'Seorang mahasiswa membuat program untuk mencetak angka ganjil 1 sampai 100. Namun saat program dijalankan, komputer tiba-tiba menjadi lambat (hang) dan angka terus bertambah tanpa henti melewati 10.000. Karakteristik Donald Knuth manakah yang dilanggar oleh program tersebut?',
    contextSnippet: 'Kasus Program Macet: Komputer hang mencetak angka tiada henti.',
    options: [
      'Input — karena program tidak meminta input dari mouse',
      'Finiteness — karena perulangan tidak memiliki kondisi berhenti (infinite loop)',
      'Definiteness — karena perintah print memakai huruf kapital',
      'Output — karena program mencetak terlalu banyak angka ke layar'
    ],
    correctIndex: 1,
    explanation: 'Program mengalami infinite loop karena kondisi terminasi perulangan tidak pernah tercapai, melanggar karakteristik Finiteness (keterbatasan langkah).',
    relatedSubtopic: 'Finiteness'
  },
  {
    id: 303,
    materialId: 3,
    materialTitle: 'Materi 3 — Flowchart',
    question: 'Kamu diminta merancang flowchart untuk sistem gerbang tol otomatis: Jika saldo kartu e-toll >= Rp 15.000, maka gerbang terbuka dan saldo berkurang. Jika tidak, lampu merah menyala dan gerbang tetap tertutup. Simbol apakah yang harus digunakan untuk memeriksa apakah saldo >= Rp 15.000?',
    contextSnippet: 'Kasus Gerbang Tol: Mengecek kecukupan saldo e-toll.',
    options: [
      'Persegi Panjang (Process)',
      'Belah Ketupat (Decision)',
      'Jajar Genjang (Input/Output)',
      'Terminator (Oval)'
    ],
    correctIndex: 1,
    explanation: 'Pemeriksaan kondisi (apakah saldo >= 15.000?) adalah evaluasi percabangan logika yang wajib menggunakan simbol belah ketupat (Decision).',
    relatedSubtopic: 'Simbol Standar Flowchart'
  },
  {
    id: 404,
    materialId: 3,
    materialTitle: 'Materi 3 — Flowchart',
    question: 'Di minimarket, kasir men-scan barcode barang menggunakan barcode scanner, lalu monitor kasir langsung menampilkan nama barang dan harganya. Pada flowchart sistem kasir ini, proses scan barcode digambarkan dengan simbol...',
    contextSnippet: 'Kasus Kasir Minimarket: Barcode scanner membaca kode barang.',
    options: [
      'Terminator karena kasir menyalakan scanner',
      'Jajar Genjang (Input/Output) karena sistem membaca masukan data eksternal',
      'Persegi Panjang (Process) karena barcode berbentuk garis-garis',
      'Lingkaran Kecil (Connector) karena menghubungkan kasir dengan kasir lain'
    ],
    correctIndex: 1,
    explanation: 'Membaca kode batang melalui alat scanner merupakan operasi masukan (Input) data ke dalam sistem komputer, sehingga menggunakan simbol Jajar Genjang.',
    relatedSubtopic: 'Simbol Standar Flowchart'
  },
  {
    id: 505,
    materialId: 4,
    materialTitle: 'Materi 4 — Pseudocode',
    question: 'Perhatikan potongan pseudocode kasir diskon berikut:\n\nIF totalBelanja > 100000 THEN\n    diskon ← totalBelanja * 0.10\nELSE\n    diskon ← 0\nENDIF\ntotalBayar ← totalBelanja - diskon\n\nJika seorang pembeli berbelanja dengan total Rp 150.000, berapakah nilai variabel totalBayar yang dihasilkan?',
    contextSnippet: 'Perhitungan Total Bayar Belanja Diskon 10%.',
    options: [
      'Rp 150.000',
      'Rp 135.000',
      'Rp 100.000',
      'Rp 15.000'
    ],
    correctIndex: 1,
    explanation: 'Karena 150.000 > 100.000 (kondisi benar), maka diskon = 150.000 * 0.10 = 15.000. Total bayar = 150.000 - 15.000 = Rp 135.000.',
    relatedSubtopic: 'Contoh Pseudocode Sederhana'
  },
  {
    id: 606,
    materialId: 4,
    materialTitle: 'Materi 4 — Pseudocode',
    question: 'Seorang mahasiswa menulis pseudocode untuk menghitung luas segitiga. Di bagian manakah variabel "alas", "tinggi", dan "luas" harus pertama kali diperkenalkan dan ditentukan tipe datanya?',
    contextSnippet: 'Penyusunan Struktur Kode Semu Program Luas Segitiga.',
    options: [
      'Di Bagian Judul (Header)',
      'Di Bagian Deklarasi',
      'Di Bagian Deskripsi paling akhir',
      'Di luar dokumen algoritma'
    ],
    correctIndex: 1,
    explanation: 'Seluruh nama variabel, konstanta, dan tipe data yang akan dipakai dalam algoritma wajib dicantumkan pada Bagian Deklarasi (kamus data).',
    relatedSubtopic: 'Struktur Dasar Pseudocode'
  },
  {
    id: 707,
    materialId: 5,
    materialTitle: 'Materi 5 — Variabel & Tipe Data',
    question: 'Dalam aplikasi registrasi mahasiswa baru, sistem perlu menyimpan: Nomor Induk Mahasiswa ("24050123"), Nilai Indeks Prestasi Kumulatif (3.82), dan Golongan Darah (\'O\'). Tipe data yang paling tepat secara berurutan untuk ketiga variabel tersebut adalah...',
    contextSnippet: 'Kasus Form Registrasi Mahasiswa Baru.',
    options: [
      'Integer, Integer, String',
      'String, Float, Char',
      'Float, String, Boolean',
      'Char, Float, Integer'
    ],
    correctIndex: 1,
    explanation: 'NIM disimpan sebagai String (karena tidak dilakukan operasi hitung matematika dan bisa diawali angka 0), IPK desimal sebagai Float, dan satu huruf golongan darah sebagai Char.',
    relatedSubtopic: 'Jenis Tipe Data Dasar'
  },
  {
    id: 808,
    materialId: 5,
    materialTitle: 'Materi 5 — Variabel & Tipe Data',
    question: 'Seorang programmer pemula menulis kode: int hargaBarang = 50000; lalu pada baris berikutnya menulis: hargaBarang = "Gratis";. Mengapa pada bahasa dengan pengecekan tipe statis (seperti C++ atau Java) baris kedua tersebut memicu error kompilasi?',
    contextSnippet: 'Kasus Type Mismatch pada Variabel Statis.',
    options: [
      'Karena kata "Gratis" tidak diawali dengan huruf kapital.',
      'Karena variabel hargaBarang sudah dideklarasikan bertipe Integer, sehingga menolak nilai teks (String) yang tidak sesuai tipenya.',
      'Karena variabel tidak boleh diubah nilainya lebih dari satu kali.',
      'Karena harga barang wajib bernilai minimal Rp 10.000.'
    ],
    correctIndex: 1,
    explanation: 'Type mismatch: variabel yang telah dideklarasikan dengan tipe data Integer hanya dapat menampung bilangan bulat, dan tidak kompatibel dengan teks bertipe String.',
    relatedSubtopic: 'Pengertian Tipe Data'
  },
  {
    id: 909,
    materialId: 2,
    materialTitle: 'Materi 2 — Karakteristik Algoritma',
    question: 'Pada sebuah kalkulator digital sederhana, seorang pengguna memasukkan operasi "10 / 0" (sepuluh dibagi nol). Algoritma kalkulator langsung menampilkan pesan "Error: Division by Zero" dan tidak mencoba melakukan pembagian tak hingga. Karakteristik algoritma manakah yang dijaga oleh pencegahan ini?',
    contextSnippet: 'Kasus Pembagian Nol pada Kalkulator.',
    options: [
      'Effectiveness dan Definiteness — mencegah operasi yang secara matematis tidak terdefinisi dan menjaga sistem tetap stabil',
      'Input — karena angka 0 dilarang dimasukkan ke memori',
      'Output — agar kalkulator tidak perlu menyalakan layar LCD',
      'Format — agar angka tidak tercetak miring'
    ],
    correctIndex: 0,
    explanation: 'Instruksi harus efektif (dapat dikerjakan secara realistis) dan pasti. Pembagian dengan nol tidak terdefinisi sehingga sistem harus menangani kondisi tersebut secara definitif dengan pesan error.',
    relatedSubtopic: 'Effectiveness'
  },
  {
    id: 1010,
    materialId: 3,
    materialTitle: 'Materi 3 — Flowchart',
    question: 'Perhatikan alur flowchart berikut:\n[Mulai] → [Input Umur] → <Apakah Umur >= 17?>\nJalur YA: [Cetak "Boleh Membuat SIM"] → [Selesai]\nJalur TIDAK: [Cetak "Belum Boleh Membuat SIM"] → [Selesai]\n\nBerdasarkan alur tersebut, jika pengguna memasukkan angka 17, apa yang akan terjadi?',
    contextSnippet: 'Kasus Alur Kelayakan Pembuatan KTP / SIM.',
    options: [
      'Program akan kembali ke langkah Mulai karena angka 17 terlalu pas.',
      'Sistem akan mencetak "Boleh Membuat SIM" lalu alur berakhir pada Terminator Selesai.',
      'Sistem akan mencetak kedua pesan secara bersamaan.',
      'Program akan error karena kondisi belah ketupat tidak dapat membandingkan angka sama dengan.'
    ],
    correctIndex: 1,
    explanation: 'Kondisi adalah "Umur >= 17" (lebih besar atau sama dengan 17). Karena nilai yang dimasukkan adalah 17, kondisi bernilai YA (True), sehingga mencetak "Boleh Membuat SIM" lalu selesai.',
    relatedSubtopic: 'Contoh Flowchart Sederhana'
  }
];

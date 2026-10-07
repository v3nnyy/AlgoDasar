import { Material } from '../types/learning';

export const materialsData: Material[] = [
  {
    id: 1,
    slug: 'pengertian-algoritma',
    title: 'Materi 1 — Pengertian Algoritma',
    shortDesc: 'Konsep dasar algoritma, urutan logis pemecahan masalah, fungsi, serta contoh penerapannya dalam kehidupan sehari-hari dan pemrograman.',
    iconName: 'Cpu',
    color: 'from-purple-500 to-indigo-600',
    subtopics: [
      {
        id: '1-1-definisi',
        title: '1. Pengertian Algoritma',
        badge: 'Konsep Dasar',
        summary: 'Memahami arti harfiah dan teknis algoritma sebagai urutan langkah terstruktur untuk menyelesaikan masalah.',
        sections: [
          {
            heading: 'Asal Usul & Definisi Konsep',
            paragraphs: [
              'Istilah "Algoritma" berasal dari nama seorang ilmuwan matematika muslim ternama asal Persia, yaitu Muhammad ibn Musa al-Khwarizmi (abad ke-9 Masehi), yang menulis kitab Al-Jabr wa-al-Muqabala.',
              'Dalam konteks ilmu komputer dan pemrograman, algoritma diartikan sebagai urutan langkah-langkah logis, sistematis, dan terhingga yang disusun untuk memecahkan suatu masalah atau mencapai tujuan tertentu.'
            ],
            callout: {
              type: 'info',
              title: 'Prinsip Kunci Algoritma',
              text: 'Algoritma bersifat independen terhadap bahasa pemrograman apa pun. Logika algoritma yang sama dapat diimplementasikan menggunakan Python, C++, Java, JavaScript, atau bahasa lainnya.'
            }
          },
          {
            heading: 'Tiga Elemen Utama dalam Algoritma',
            paragraphs: [
              'Setiap algoritma pada dasarnya bekerja dengan memproses informasi melalui tiga tahapan utama:'
            ],
            bulletPoints: [
              'Masukan (Input): Data mentah atau informasi awal yang diberikan kepada algoritma untuk diproses.',
              'Proses (Processing): Serangkaian instruksi atau perhitungan logika yang mengubah data masukan menjadi informasi yang bermakna.',
              'Keluaran (Output): Hasil akhir berupa solusi atau informasi terorganisir yang diharapkan pengguna.'
            ],
            diagramType: 'algorithm-flow'
          }
        ],
        youtubeVideo: {
          videoId: '654I1WqPlK8',
          title: 'Pendahuluan Algoritma Pemrograman - 01 Algoritma dan Pemrograman Dasar',
          description: 'Pengenalan konsep dasar algoritma pemrograman, logika komputasi, dan cara komputer memproses instruksi bertahap.',
          channelName: 'CODEPOLITAN'
        }
      },
      {
        id: '1-2-fungsi-tujuan',
        title: '2. Fungsi dan Tujuan Algoritma',
        badge: 'Tujuan & Peran',
        summary: 'Mengetahui mengapa programmer wajib menguasai algoritma sebelum mulai menulis kode program.',
        sections: [
          {
            heading: 'Fungsi Utama Algoritma',
            paragraphs: [
              'Algoritma bukan sekadar teori, melainkan cetak biru (blueprint) dari setiap program komputer yang diciptakan manusia. Tanpa algoritma yang matang, program akan mudah mengalami error logika dan sulit dikembangkan.'
            ],
            bulletPoints: [
              'Memecahkan Masalah Kompleks: Menguraikan masalah rumit menjadi langkah-langkah kecil yang terstruktur (Divide and Conquer).',
              'Memudahkan Proses Debugging: Jika terjadi kesalahan logika, pemrogram dapat menelusuri langkah per langkah dengan presisi.',
              'Dapat Digunakan Berulang (Reusable): Algoritma yang baik dapat digunakan kembali untuk memecahkan kasus serupa dengan input berbeda.',
              'Meningkatkan Efisiensi Sumber Daya: Algoritma yang optimal menghemat waktu pemrosesan (Time Complexity) dan penggunaan memori (Space Complexity).'
            ],
            callout: {
              type: 'analogy',
              title: 'Analogi Arsitektur Bangunan',
              text: 'Algoritma ibarat gambar denah arsitektur sebuah gedung. Sebelum tukang menyusun batu bata (menulis baris kode), cetak biru denah harus dipastikan benar agar gedung tidak roboh.'
            }
          }
        ]
      },
      {
        id: '1-3-contoh-sehari-hari',
        title: '3. Contoh Algoritma dalam Kehidupan Sehari-hari',
        badge: 'Contoh Nyata',
        summary: 'Melihat penerapan algoritma dalam rutinitas harian manusia seperti memasak dan transaksi mesin ATM.',
        sections: [
          {
            heading: 'Rutinitas Sebagai Algoritma',
            paragraphs: [
              'Tanpa kita sadari, otak manusia selalu menjalankan algoritma setiap hari. Prosedur apa pun yang memiliki langkah berurutan dengan hasil yang dapat diprediksi adalah bentuk algoritma.'
            ]
          },
          {
            heading: 'Contoh 1: Algoritma Membuat Secangkir Kopi Hangat',
            paragraphs: [
              'Langkah-langkah yang harus dilakukan secara berurutan:'
            ],
            bulletPoints: [
              'Langkah 1: Siapkan cangkir, sendok, bubuk kopi, gula, dan air mendidih.',
              'Langkah 2: Masukkan 1 sendok teh bubuk kopi ke dalam cangkir.',
              'Langkah 3: Masukkan 1,5 sendok teh gula ke dalam cangkir.',
              'Langkah 4: Tuangkan air panas mendidih secukupnya ke dalam cangkir.',
              'Langkah 5: Aduk menggunakan sendok secara merata hingga larut sempurna.',
              'Langkah 6: Kopi hangat siap dinikmati.'
            ],
            callout: {
              type: 'tip',
              title: 'Perhatikan Urutan Logis!',
              text: 'Jika langkah 4 dilakukan sebelum langkah 2 dan 3, air panas bisa tumpah saat diaduk atau takaran gula tidak sesuai. Urutan langkah sangat krusial dalam algoritma.'
            }
          },
          {
            heading: 'Contoh 2: Algoritma Menarik Uang di Mesin ATM',
            paragraphs: [
              'Contoh interaksi mesin dengan pengguna yang membutuhkan verifikasi ketat:'
            ],
            bulletPoints: [
              '1. Masukkan kartu ATM ke dalam slot mesin.',
              '2. Pilih bahasa pengantar (Indonesia / English).',
              '3. Masukkan 6 digit nomor PIN ATM.',
              '4. Jika PIN salah sebanyak 3 kali, blokir kartu (Kondisi). Jika benar, tampilkan menu utama.',
              '5. Pilih nominal penarikan uang tunai.',
              '6. Mesin memeriksa saldo rekening: jika saldo mencukupi, keluarkan uang tunai dan cetak struk. Jika tidak, tampilkan pesan saldo tidak mencukupi.',
              '7. Ambil uang tunai dan jangan lupa ambil kembali kartu ATM.'
            ]
          }
        ],
        interactiveActivity: 'algorithm-order'
      },
      {
        id: '1-4-contoh-pemrograman',
        title: '4. Contoh Algoritma dalam Pemrograman',
        badge: 'Komputasi',
        summary: 'Penerapan algoritma untuk memproses data angka, percabangan logika, dan perulangan.',
        sections: [
          {
            heading: 'Algoritma Menentukan Nilai Terbesar dari Tiga Bilangan',
            paragraphs: [
              'Misalkan komputer menerima tiga nilai angka dari pengguna, yaitu A, B, dan C. Bagaimana komputer menentukan bilangan mana yang paling besar?'
            ],
            codeExample: {
              language: 'Algoritma Deskriptif',
              filename: 'Algoritma_Maksimum_Tiga_Bilangan.txt',
              code: `1. Mulai (Start)
2. Baca nilai bilangan A, B, dan C
3. Asumsikan bilangan Terbesar sementara = A
4. Jika B > Terbesar, maka ubah Terbesar = B
5. Jika C > Terbesar, maka ubah Terbesar = C
6. Tampilkan nilai Terbesar ke layar
7. Selesai (End)`,
              explanation: 'Algoritma ini menggunakan perbandingan beruntun. Terlepas dari nilai berapa pun yang dimasukkan untuk A, B, dan C, algoritma selalu menghasilkan output yang benar.'
            }
          },
          {
            heading: 'Algoritma Menghitung Nilai Rata-rata Ujian',
            paragraphs: [
              'Menghitung nilai rata-rata dari 3 komponen nilai: Tugas, UTS, dan UAS.'
            ],
            codeExample: {
              language: 'Algoritma Deskriptif',
              filename: 'Algoritma_Hitung_RataRata.txt',
              code: `1. Mulai
2. Input nilai_tugas, nilai_uts, nilai_uas
3. total_nilai = nilai_tugas + nilai_uts + nilai_uas
4. rata_rata = total_nilai / 3
5. Tampilkan nilai rata_rata
6. Selesai`,
              explanation: 'Operasi aritmatika dijalankan setelah seluruh input tersedia. Tanpa input, proses perhitungan tidak dapat dieksekusi.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'karakteristik-algoritma',
    title: 'Materi 2 — Karakteristik Algoritma',
    shortDesc: 'Lima pilar penting karakteristik algoritma menurut Donald E. Knuth: Input, Output, Definiteness, Finiteness, dan Effectiveness.',
    iconName: 'CheckCircle2',
    color: 'from-blue-500 to-cyan-600',
    subtopics: [
      {
        id: '2-1-knuth-overview',
        title: 'Pengantar 5 Karakteristik Algoritma',
        badge: 'Teori Fundamental',
        summary: 'Menurut ilmuwan komputer legendaris Donald E. Knuth, sebuah algoritma yang valid wajib memenuhi lima kriteria penting.',
        sections: [
          {
            heading: 'Kriteria Donald Knuth',
            paragraphs: [
              'Dalam buku monumentalnya "The Art of Computer Programming", Donald E. Knuth merumuskan bahwa serangkaian instruksi baru dapat diakui sah sebagai algoritma jika memenuhi 5 karakteristik berikut:'
            ],
            bulletPoints: [
              '1. Input: Memiliki nol atau lebih nilai masukan dari luar.',
              '2. Output: Menghasilkan minimal satu nilai keluaran sebagai solusi.',
              '3. Definiteness (Kepastian): Setiap langkah tidak ambigu dan bermakna tunggal.',
              '4. Finiteness (Keterbatasan): Harus berhenti setelah melakukan langkah berhingga.',
              '5. Effectiveness (Efektivitas): Setiap instruksi dapat dikerjakan secara realistis.'
            ],
            diagramType: 'knuth-grid'
          }
        ],
        youtubeVideo: {
          videoId: 'Xt4VYAvnD1M',
          title: 'Karakteristik Algoritma - 02 Algoritma dan Pemrograman Dasar',
          description: 'Pembahasan mendalam 5 karakteristik wajib algoritma menurut Donald Knuth disertai analisis kasus nyata.',
          channelName: 'CODEPOLITAN'
        }
      },
      {
        id: '2-2-input-output',
        title: '1 & 2. Karakteristik Input dan Output',
        badge: 'Input & Output',
        summary: 'Hubungan antara data yang masuk ke dalam algoritma dan hasil yang dihasilkan untuk pengguna.',
        sections: [
          {
            heading: '1. Input (Masukan)',
            paragraphs: [
              'Sebuah algoritma dapat memiliki nol (0) atau lebih masukan. Jika memiliki nol masukan, artinya data yang diproses sudah didefinisikan secara internal di dalam algoritma itu sendiri (misalnya algoritma mencetak teks salam "Halo Dunia" atau mencetak 10 bilangan prima pertama).'
            ],
            callout: {
              type: 'tip',
              title: 'Catatan Input',
              text: 'Algoritma yang fleksibel umumnya menerima input dinamis dari pengguna atau berkas eksternal sehingga menghasilkan output yang sesuai dengan kasus yang dihadapi.'
            }
          },
          {
            heading: '2. Output (Keluaran)',
            paragraphs: [
              'Algoritma WAJIB memiliki minimal 1 (satu) output. Tujuan utama algoritma adalah memecahkan masalah. Jika serangkaian instruksi dijalankan tanpa menghasilkan keluaran apa pun (berupa pesan di layar, penyimpanan ke berkas, atau perubahan status), maka instruksi tersebut tidak memiliki manfaat fungsional.'
            ]
          }
        ]
      },
      {
        id: '2-3-definiteness',
        title: '3. Definiteness (Kepastian / Tidak Ambigu)',
        badge: 'Definiteness',
        summary: 'Setiap instruksi harus jelas, tegas, dan tidak menimbulkan multitafsir bagi pemrogram maupun komputer.',
        sections: [
          {
            heading: 'Mengapa Kepastian Itu Mutlak?',
            paragraphs: [
              'Komputer adalah mesin deterministik yang tidak memiliki intuisi manusia. Oleh karena itu, setiap instruksi algoritma harus dirumuskan dengan jelas, tepat, dan hanya memiliki satu interpretasi logika.'
            ],
            callout: {
              type: 'warning',
              title: 'Contoh Ambigu vs Tidak Ambigu',
              text: 'Instruksi ambigu: "Tambahkan gula secukupnya, lalu aduk beberapa saat". Komputer tidak mengerti apa arti "secukupnya" atau "beberapa saat". Instruksi pasti: "Tambahkan 15 gram gula pasir, lalu aduk selama 30 detik pada kecepatan 100 rpm".'
            }
          }
        ]
      },
      {
        id: '2-4-finiteness',
        title: '4. Finiteness (Keterbatasan / Harus Berhenti)',
        badge: 'Finiteness',
        summary: 'Algoritma harus memiliki kondisi berhenti dan tidak boleh terjebak dalam perulangan tak hingga (infinite loop).',
        sections: [
          {
            heading: 'Harus Ada Garis Akhir',
            paragraphs: [
              'Algoritma harus berhenti setelah mengerjakan sejumlah langkah terhingga (finite steps). Jika suatu algoritma berjalan terus menerus tanpa pernah berhenti, maka program tersebut mengalami kegagalan fatal yang dinamakan infinite loop.'
            ],
            codeExample: {
              language: 'Pseudocode Bahaya Infinite Loop',
              filename: 'InfiniteLoopExample.txt',
              code: `// CONTOH KELIRU (Melanggar Finiteness):
i = 1
WHILE (i > 0) DO
    PRINT i
    i = i + 1   // Nilai i selalu bertambah, selalu > 0, program TIDAK PERNAH BERHENTI!
ENDWHILE

// CONTOH BENAR (Memenuhi Finiteness):
i = 1
WHILE (i <= 5) DO
    PRINT i
    i = i + 1   // Berhenti saat i mencapai angka 6
ENDWHILE`,
              explanation: 'Pada contoh kedua, perulangan berhenti tepat setelah 5 kali iterasi, sehingga memenuhi kriteria finiteness.'
            }
          }
        ]
      },
      {
        id: '2-5-effectiveness',
        title: '5. Effectiveness (Efektivitas)',
        badge: 'Effectiveness',
        summary: 'Setiap langkah instruksi harus sesederhana mungkin dan realistis untuk dieksekusi dalam waktu yang wajar.',
        sections: [
          {
            heading: 'Dapat Dikerjakan Secara Masuk Akal',
            paragraphs: [
              'Setiap instruksi harus merupakan operasi dasar yang benar-benar dapat dikerjakan oleh komputer atau manusia dalam periode waktu yang wajar. Operasi seperti membagi angka dengan nol (x / 0) melanggar efektivitas karena secara matematis tidak terdefinisi dan menyebabkan program crash.'
            ]
          }
        ],
        interactiveActivity: 'characteristics-match'
      }
    ]
  },
  {
    id: 3,
    slug: 'flowchart',
    title: 'Materi 3 — Flowchart',
    shortDesc: 'Diagram alir representasi visual algoritma: simbol-simbol standar ANSI, aturan perancangan, dan simulasi alur eksekusi.',
    iconName: 'GitBranch',
    color: 'from-emerald-500 to-teal-600',
    subtopics: [
      {
        id: '3-1-pengertian-flowchart',
        title: '1. Pengertian Flowchart',
        badge: 'Definisi',
        summary: 'Memahami flowchart sebagai diagram visual yang menggambarkan urutan instruksi program menggunakan simbol geometri standar.',
        sections: [
          {
            heading: 'Apa itu Flowchart?',
            paragraphs: [
              'Flowchart (Diagram Alir) adalah representasi grafis berupa diagram yang menggambarkan aliran langkah-langkah logika dan instruksi dalam suatu algoritma atau sistem.',
              'Dengan menggunakan bentuk-bentuk geometris tertentu yang dihubungkan dengan garis berpanah (flowline), flowchart memudahkan pembaca melihat alur logika program secara sekilas tanpa harus membaca baris-baris kode yang rumit.'
            ]
          }
        ],
        youtubeVideo: {
          videoId: 'u1huXRBkSbE',
          title: '#3 Notasi FLOWCHART pada Algoritma | DASAR DASAR PEMROGRAMAN',
          description: 'Penjelasan lengkap notasi diagram alir (flowchart), pengenalan fungsi simbol-simbol standar ANSI/ISO, aturan arah aliran logika, dan contoh kasus.',
          channelName: 'SWS Space',
          alternativeVideos: [
            {
              videoId: 'J0AAtd8hwKY',
              title: 'Flowchart (Pengertian, Fungsi, dan Simbol Lengkap)',
              channelName: 'Kevin Winardi'
            },
            {
              videoId: 'B1q2q3aDnRY',
              title: 'Penjelasan Flowchart, Simbol, dan Contoh Kasus Nyata',
              channelName: 'Andreas Wenang'
            }
          ]
        }
      },
      {
        id: '3-2-fungsi-flowchart',
        title: '2. Fungsi dan Manfaat Flowchart',
        badge: 'Manfaat',
        summary: 'Manfaat strategis flowchart dalam komunikasi tim rekayasa perangkat lunak dan dokumentasi sistem.',
        sections: [
          {
            heading: 'Mengapa Membuat Flowchart Sangat Penting?',
            paragraphs: [
              'Dalam industri perangkat lunak modern, flowchart memegang peranan krusial sebelum tahapan pengodean dimulai:'
            ],
            bulletPoints: [
              'Mempermudah Komunikasi Logika: Tim pengembang, analis sistem, dan klien bisnis dapat memahami logika kerja aplikasi yang sama.',
              'Pendeteksi Cacat Logika (Bug Discovery): Kesalahan alur (seperti jalan buntu atau cabang yang tidak selesai) terlihat jelas secara visual.',
              'Dokumentasi Sistem yang Kuat: Berfungsi sebagai petunjuk teknis ketika aplikasi hendak diperbarui atau dipelihara di masa depan.',
              'Pedoman Penyusunan Kode: Programmer dapat menulis kode baris demi baris mengikuti urutan node diagram alir tanpa keraguan.'
            ]
          }
        ]
      },
      {
        id: '3-3-simbol-flowchart',
        title: '3. Simbol-simbol Standar Flowchart',
        badge: 'Simbol Standar',
        summary: 'Mengenal 6 simbol standar internasional (ANSI / ISO) yang sering digunakan dalam penyusunan flowchart.',
        sections: [
          {
            heading: 'Katalog Simbol ANSI / ISO',
            paragraphs: [
              'Setiap bentuk bangun geometris pada diagram alir memiliki makna fungsional yang baku dan tidak boleh ditukar sembarangan:'
            ],
            diagramType: 'flowchart-shapes',
            bulletPoints: [
              'Terminator (Kapsul / Oval): Menandai titik awal (Mulai / Start) dan titik akhir (Selesai / End) dari suatu diagram alir.',
              'Process / Proses (Persegi Panjang): Menunjukkan pengolahan data, operasi aritmatika, atau inisialisasi variabel.',
              'Input / Output (Jajar Genjang): Menunjukkan operasi membaca masukan dari pengguna atau mencetak keluaran ke layar.',
              'Decision / Keputusan (Belah Ketupat / Diamond): Menunjukkan titik percabangan kondisi logika dengan keluaran Ya (True) atau Tidak (False).',
              'Flowline / Garis Alir (Anak Panah): Menunjukkan arah aliran eksekusi instruksi dari satu simbol ke simbol lainnya.',
              'Connector / Penghubung (Lingkaran Kecil): Menghubungkan alur flowchart yang terpisah namun masih berada pada satu halaman yang sama.'
            ]
          }
        ],
        interactiveActivity: 'flowchart-symbols'
      },
      {
        id: '3-4-aturan-dasar',
        title: '4. Aturan Dasar Membuat Flowchart',
        badge: 'Aturan Desain',
        summary: 'Pedoman kaidah tata letak dan aliran agar diagram alir mudah dibaca dan valid.',
        sections: [
          {
            heading: 'Kaidah Penyusunan Flowchart yang Baik',
            paragraphs: [
              'Agar diagram alir tidak membingungkan pembaca, ikuti aturan standar berikut:'
            ],
            bulletPoints: [
              'Arah Aliran Standar: Alur utama flowchart selalu digambarkan mengalir dari atas ke bawah (Top-to-Bottom) atau dari kiri ke kanan (Left-to-Right).',
              'Hanya Satu Titik Masuk Utama: Flowchart hanya boleh memiliki 1 simbol Terminator Mulai (Start).',
              'Cabang Simbol Decision: Simbol belah ketupat (Decision) wajib memiliki minimal dua jalur panah keluar yang diberi label jelas ("Ya / Benar" dan "Tidak / Salah").',
              'Hindari Garis Silang yang Bertabrakan: Usahakan garis panah tidak saling memotong tanpa tanda penghubung agar tidak menimbulkan kebingungan arah.'
            ]
          }
        ]
      },
      {
        id: '3-5-contoh-simulator',
        title: '5. Contoh Flowchart & Simulator Eksekusi',
        badge: 'Simulasi Interaktif',
        summary: 'Uji langsung alur eksekusi logika penentuan kelulusan mahasiswa berdasarkan nilai ujian.',
        sections: [
          {
            heading: 'Studi Kasus: Sistem Penentuan Kelulusan Siswa',
            paragraphs: [
              'Misalkan batas minimal nilai kelulusan (passing grade) adalah 75. Jika nilai ujian mahasiswa >= 75, maka sistem mencetak "LULUS". Jika nilai < 75, maka sistem mencetak "REMEDIAL".',
              'Di bawah ini kamu dapat menjalankan simulasi interaktif untuk melihat bagaimana komputer mengevaluasi kondisi belah ketupat (Decision) dan memilih cabang yang tepat.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'pseudocode',
    title: 'Materi 4 — Pseudocode',
    shortDesc: 'Menuliskan algoritma dengan kode semu yang mirip bahasa pemrograman, struktur baku, serta perbandingan dengan kode nyata.',
    iconName: 'FileCode2',
    color: 'from-amber-500 to-orange-600',
    subtopics: [
      {
        id: '4-1-pengertian-pseudocode',
        title: '1. Pengertian Pseudocode',
        badge: 'Definisi',
        summary: 'Memahami konsep kode semu sebagai jembatan intuitif antara bahasa manusia dan bahasa pemrograman komputer.',
        sections: [
          {
            heading: 'Apa itu Pseudocode?',
            paragraphs: [
              'Kata "Pseudo" berarti palsu atau semu. Pseudocode (kode semu) adalah representasi algoritma yang ditulis menyerupai struktur bahasa pemrograman tingkat tinggi, namun dirancang khusus agar mudah dibaca dan dipahami oleh manusia.',
              'Pseudocode tidak terikat pada aturan sintaksis (syntax rules) yang kaku seperti tanda titik koma (;) atau tanda kurung kurawal ({}), sehingga pemrogram dapat berfokus murni pada ketepatan alur logika.'
            ]
          }
        ],
        youtubeVideo: {
          videoId: 'Qf4Npdwar_s',
          title: 'Mengenal Pseudocode - 08 Algoritma dan Pemrograman Dasar',
          description: 'Panduan menyusun pseudocode yang rapi, struktur 3 bagian, serta aturan notasi penulisan algoritma.',
          channelName: 'CODEPOLITAN'
        }
      },
      {
        id: '4-2-fungsi-pseudocode',
        title: '2. Fungsi dan Tujuan Pseudocode',
        badge: 'Manfaat',
        summary: 'Mengapa pemrogram profesional menulis pseudocode sebelum mengimplementasikan ke bahasa seperti Python atau C++.',
        sections: [
          {
            heading: 'Keunggulan Pseudocode',
            paragraphs: [
              'Pseudocode menjadi jembatan paling efektif antara perancangan konseptual dan implementasi kode nyata:'
            ],
            bulletPoints: [
              'Jembatan Transisi Bahasa: Menghubungkan kalimat deskriptif bahasa manusia yang panjang dengan sintaks bahasa pemrograman yang padat.',
              'Konversi Cepat ke Banyak Bahasa: Satu dokumen pseudocode dapat dengan sangat mudah diterjemahkan ke bahasa Python, Java, C++, PHP, atau JavaScript.',
              'Meringankan Beban Kognitif: Pemrogram tidak perlu pusing memikirkan syntax error saat masih merancang algoritma.'
            ]
          }
        ]
      },
      {
        id: '4-3-struktur-pseudocode',
        title: '3. Struktur Dasar Pseudocode',
        badge: 'Struktur Standar',
        summary: 'Tiga bagian baku yang membentuk pseudocode yang baik: Judul (Header), Deklarasi, dan Deskripsi.',
        sections: [
          {
            heading: 'Tiga Blok Pembangun Pseudocode',
            paragraphs: [
              'Dalam standar akademik informatika, pseudocode terbagi menjadi 3 bagian teratur:'
            ],
            diagramType: 'pseudocode-structure',
            bulletPoints: [
              '1. Bagian Judul (Header): Berisi nama algoritma serta penjelasan ringkas mengenai tujuan algoritma tersebut.',
              '2. Bagian Deklarasi: Mendefinisikan seluruh nama variabel, tipe data, atau konstanta yang akan digunakan dalam program.',
              '3. Bagian Deskripsi: Berisi inti langkah-langkah logika algoritma, termasuk operasi baca (input), proses komputasi, percabangan, perulangan, dan cetak (output).'
            ]
          }
        ]
      },
      {
        id: '4-4-aturan-penulisan',
        title: '4. Aturan Penulisan & Kata Kunci',
        badge: 'Sintaks Notasi',
        summary: 'Kata kunci umum seperti INPUT/READ, OUTPUT/PRINT, IF-THEN-ELSE, dan aturan indentasi.',
        sections: [
          {
            heading: 'Kata Kunci Baku yang Sering Digunakan',
            paragraphs: [
              'Untuk menjaga keterbacaan, umumnya kata kunci ditulis dengan huruf kapital (UPPERCASE) dan menggunakan indentasi untuk blok kode di dalam kondisi/perulangan:'
            ],
            bulletPoints: [
              'Masukan: INPUT, READ, BACA',
              'Keluaran: OUTPUT, WRITE, PRINT, TAMPILKAN',
              'Penugasan Nilai (Assignment): Simbol panah kiri (←) atau sama dengan (=), misalnya: luas ← panjang * lebar',
              'Percabangan: IF <kondisi> THEN ... ELSE ... ENDIF',
              'Perulangan: FOR ... TO ... DO ... ENDFOR atau WHILE <kondisi> DO ... ENDWHILE'
            ]
          }
        ],
        interactiveActivity: 'pseudocode-order'
      },
      {
        id: '4-5-contoh-pseudocode',
        title: '5. Contoh Pseudocode Sederhana',
        badge: 'Contoh Praktis',
        summary: 'Dua contoh lengkap: menentukan bilangan ganjil atau genap serta menghitung luas persegi panjang.',
        sections: [
          {
            heading: 'Contoh 1: Menentukan Bilangan Ganjil atau Genap',
            paragraphs: [
              'Sebuah bilangan bulat disebut genap jika habis dibagi 2 (sisa bagi / modulo = 0), dan ganjil jika tidak habis dibagi 2.'
            ],
            codeExample: {
              language: 'Pseudocode Standar',
              filename: 'GanjilGenap.algo',
              code: `PROGRAM CekGanjilGenap
// Menentukan apakah bilangan yang diinput adalah ganjil atau genap

DEKLARASI:
    bilangan : integer
    sisaBagi : integer

DESKRIPSI:
    PRINT("Masukkan sebuah bilangan bulat: ")
    INPUT(bilangan)
    
    sisaBagi ← bilangan MOD 2
    
    IF sisaBagi == 0 THEN
        PRINT(bilangan, "adalah Bilangan GENAP")
    ELSE
        PRINT(bilangan, "adalah Bilangan GANJIL")
    ENDIF
    
    PRINT("Program Selesai")`,
              explanation: 'Operator MOD menghasilkan sisa pembagian. Jika 8 MOD 2 = 0 (Genap), sedangkan 9 MOD 2 = 1 (Ganjil).'
            }
          },
          {
            heading: 'Contoh 2: Menghitung Luas Persegi Panjang',
            paragraphs: [
              'Menerima input panjang dan lebar, lalu mencetak hasil perhitungan luas.'
            ],
            codeExample: {
              language: 'Pseudocode Standar',
              filename: 'HitungLuasPersegiPanjang.algo',
              code: `PROGRAM HitungLuasPersegiPanjang
// Menghitung luas persegi panjang berdasarkan rumus Luas = P x L

DEKLARASI:
    panjang : float
    lebar   : float
    luas    : float

DESKRIPSI:
    PRINT("Masukkan nilai panjang:")
    INPUT(panjang)
    
    PRINT("Masukkan nilai lebar:")
    INPUT(lebar)
    
    luas ← panjang * lebar
    
    PRINT("Luas Persegi Panjang =", luas)
    PRINT("Terima Kasih")`,
              explanation: 'Tipe data float digunakan agar pengguna dapat memasukkan angka pecahan/desimal seperti 7.5 atau 3.2.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: 'variabel-dan-tipe-data',
    title: 'Materi 5 — Variabel & Tipe Data',
    shortDesc: 'Konsep memori variabel, aturan penamaan identitas, 5 tipe data primitif (Integer, Float, Char, String, Boolean), dan contoh kode.',
    iconName: 'Boxes',
    color: 'from-pink-500 to-rose-600',
    subtopics: [
      {
        id: '5-1-pengertian-variabel',
        title: '1. Pengertian Variabel',
        badge: 'Definisi Memori',
        summary: 'Memahami variabel sebagai wadah berlabel di memori RAM komputer untuk menyimpan nilai sementara.',
        sections: [
          {
            heading: 'Apa itu Variabel?',
            paragraphs: [
              'Dalam pemrograman, variabel adalah lokasi penyimpanan di memori komputer (RAM) yang diberi nama atau label khusus, di mana nilai data di dalamnya dapat diubah atau dimanipulasi selama program berjalan.',
              'Bayangkan variabel seperti sebuah kotak kardus yang ditempeli label nama (misalnya label "umur"). Di dalam kotak tersebut kamu bisa menaruh angka 20. Jika ulang tahun tiba, angka 20 bisa kamu ambil dan ganti dengan angka 21.'
            ],
            diagramType: 'memory-boxes',
            callout: {
              type: 'analogy',
              title: 'Analogi Wadah Berlabel',
              text: 'Label kotak = Nama Variabel (misal: skorPemain). Isi barang dalam kotak = Nilai Variabel (misal: 1500). Ukuran dan bentuk wadah = Tipe Data.'
            }
          }
        ],
        youtubeVideo: {
          videoId: 'b94sx5iDhgY',
          title: 'Variabel dan Tipe Data - 05 Algoritma dan Pemrograman Dasar',
          description: 'Penjelasan konsep memori variabel, aturan penamaan identifier, dan 5 tipe data dasar (Integer, Float, Char, String, Boolean).',
          channelName: 'CODEPOLITAN'
        }
      },
      {
        id: '5-2-fungsi-variabel',
        title: '2. Fungsi Variabel dalam Pemrograman',
        badge: 'Peran Variabel',
        summary: 'Berbagai fungsi vital variabel untuk menampung input, hasil komputasi, dan pengendali alur.',
        sections: [
          {
            heading: 'Peran Kritis Variabel',
            paragraphs: [
              'Hampir tidak ada program komputer berguna yang tidak menggunakan variabel. Variabel berfungsi untuk:'
            ],
            bulletPoints: [
              'Menyimpan Data Masukan Pengguna: Nama pengguna, password, nomor telepon, dan preferensi akun.',
              'Menyimpan Hasil Komputasi Sementara: Menyimpan total belanja sebelum ditambah pajak, atau menghitung skor game.',
              'Sebagai Pengendali Perulangan (Counter): Menghitung sudah berapa kali suatu perulangan (loop) telah dieksekusi.',
              'Menyimpan Status Sistem (Flag/State): Menyimpan status apakah user sudah login (true/false) atau game sedang paused.'
            ]
          }
        ]
      },
      {
        id: '5-3-aturan-penamaan',
        title: '3. Aturan Dasar Penamaan Variabel (Identifier)',
        badge: 'Kaidah Penamaan',
        summary: 'Aturan baku penamaan variabel agar tidak error dan mudah dibaca oleh sesama pemrogram.',
        sections: [
          {
            heading: 'Kaidah Baku Penamaan Variabel',
            paragraphs: [
              'Setiap bahasa pemrograman modern memiliki aturan umum yang seragam mengenai penamaan variabel:'
            ],
            bulletPoints: [
              'Diawali Huruf atau Garis Bawah: Karakter pertama wajib berupa huruf (A-Z, a-z) atau underscore (_). Contoh: totalNilai, _status.',
              'Dilarang Diawali Angka: Penamaan seperti 1nilai atau 2ndPlace adalah ILEGAL dan menyebabkan syntax error.',
              'Tidak Mengandung Spasi: Gunakan gaya camelCase (misal: jumlahMahasiswa) atau snake_case (misal: jumlah_mahasiswa).',
              'Tidak Menggunakan Kata Kunci Terlarang (Reserved Keywords): Jangan menamai variabel dengan kata seperti if, while, class, return, int, float.',
              'Bersifat Peka Huruf Kapital (Case-Sensitive): Variabel namaUser, NamaUser, dan NAMAUSER dianggap sebagai 3 variabel yang sepenuhnya berbeda.'
            ],
            callout: {
              type: 'tip',
              title: 'Best Practice Penamaan',
              text: 'Gunakan nama variabel yang deskriptif dan mencerminkan isinya. Hindari penamaan 1 huruf yang ambigu seperti x, a, b (kecuali untuk indeks perulangan seperti i, j).'
            }
          }
        ]
      },
      {
        id: '5-4-tipe-data-dasar',
        title: '4 & 5. Pengertian & Jenis Tipe Data Dasar',
        badge: 'Klasifikasi Tipe',
        summary: 'Mengenal 5 tipe data primitif: Integer, Float, Char, String, dan Boolean.',
        sections: [
          {
            heading: 'Mengapa Tipe Data Diperlukan?',
            paragraphs: [
              'Tipe data memberi tahu komputer jenis informasi apa yang disimpan di dalam variabel, berapa banyak ruang memori RAM yang harus dialokasikan, dan operasi apa saja yang valid dilakukan pada data tersebut.',
              'Sebagai contoh, kamu bisa mengalikan dua buah angka (10 * 5 = 50), tetapi kamu tidak bisa mengalikan kata ("kucing" * "anjing").'
            ]
          },
          {
            heading: '5 Tipe Data Primitif Utama',
            paragraphs: [
              'Berikut adalah lima tipe data dasar yang wajib dikuasai oleh setiap mahasiswa informatika:'
            ],
            bulletPoints: [
              'Integer (int): Bilangan bulat tanpa koma/pecahan, bisa bernilai positif maupun negatif. Contoh: 25, 0, -100, 2026.',
              'Float / Double: Bilangan riil atau desimal (pecahan). Contoh: 3.14, 0.75, -99.5, 98.75.',
              'Char: Karakter tunggal (huruf, angka, atau simbol) yang diapit tanda petik tunggal (\'). Contoh: \'A\', \'x\', \'9\', \'#\'.',
              'String: Sekumpulan atau untaian karakter (teks) yang diapit tanda petik ganda ("). Contoh: "Universitas", "Algoritma 2026", "true".',
              'Boolean (bool): Tipe data logika yang hanya memiliki dua kemungkinan nilai: true (benar / 1) atau false (salah / 0).'
            ]
          }
        ],
        interactiveActivity: 'datatype-sorter'
      },
      {
        id: '5-5-contoh-kode',
        title: '6. Contoh Penggunaan dalam Kode Program',
        badge: 'Sintaks Kode',
        summary: 'Perbandingan deklarasi variabel dan tipe data dalam Python, C++, dan JavaScript.',
        sections: [
          {
            heading: 'Perbandingan Sintaksis Antar Bahasa Pemrograman',
            paragraphs: [
              'Perhatikan bagaimana konsep variabel dan tipe data yang sama diimplementasikan pada bahasa bertipe statis (C++) dan dinamis (Python & JavaScript):'
            ],
            codeExample: {
              language: 'C++ (Statically Typed)',
              filename: 'mahasiswa.cpp',
              code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Deklarasi variabel dengan tipe data eksplisit
    string namaMahasiswa = "Budi Pratama";
    int umur = 19;
    float ipk = 3.85;
    char grade = 'A';
    bool isAktif = true;

    cout << "Nama: " << namaMahasiswa << " (" << umur << " th)" << endl;
    cout << "IPK: " << ipk << " | Grade: " << grade << endl;
    return 0;
}`,
              explanation: 'Dalam C++, tipe data harus dituliskan secara eksplisit sebelum nama variabel (misal: string, int, float).'
            }
          },
          {
            heading: 'Implementasi dalam Python',
            paragraphs: [
              'Python menggunakan sistem dynamic typing di mana tipe data otomatis ditentukan oleh interpreter berdasarkan nilai yang diberikan:'
            ],
            codeExample: {
              language: 'Python (Dynamically Typed)',
              filename: 'mahasiswa.py',
              code: `# Python secara otomatis mengenali tipe data
nama_mahasiswa = "Budi Pratama"   # str (String)
umur = 19                        # int (Integer)
ipk = 3.85                       # float (Float)
grade = 'A'                      # str (Char dianggap string di Python)
is_aktif = True                  # bool (Boolean)

print(f"Nama: {nama_mahasiswa}, Umur: {umur}, IPK: {ipk}")`,
              explanation: 'Ketik tipe data pada Python ditentukan saat runtime tanpa perlu mendeklarasikan tipe di awal.'
            }
          }
        ]
      }
    ]
  }
];

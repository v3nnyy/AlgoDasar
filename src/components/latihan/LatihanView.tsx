import React, { useState } from 'react';
import { QuizQuestion, QuizType, QuizSessionResult, Material } from '../../types/learning';
import { mcqQuestions, caseStudyQuestions } from '../../data/quizData';
import {
  HelpCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Home,
  Award,
  Briefcase,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface LatihanViewProps {
  materials: Material[];
  onNavigateToMaterial: (materialId: number) => void;
  onNavigateHome: () => void;
}

type QuizScreenState = 'select_mode' | 'instructions' | 'in_quiz' | 'results';

export const LatihanView: React.FC<LatihanViewProps> = ({
  materials,
  onNavigateToMaterial,
  onNavigateHome,
}) => {
  const [selectedQuizType, setSelectedQuizType] = useState<QuizType>('mcq');
  const [screenState, setScreenState] = useState<QuizScreenState>('select_mode');
  
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<QuizSessionResult['userAnswers']>([]);

  const handleSelectTypeAndShowInstructions = (type: QuizType) => {
    setSelectedQuizType(type);
    setScreenState('instructions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    const questions = selectedQuizType === 'mcq' ? mcqQuestions : caseStudyQuestions;
    setCurrentQuestions(questions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setUserAnswers([]);
    setScreenState('in_quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const currentQ = currentQuestions[currentIndex];
    const isCorrect = selectedOption === currentQ.correctIndex;

    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = {
      questionId: currentQ.id,
      selectedIndex: selectedOption,
      isCorrect,
    };
    setUserAnswers(newAnswers);
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      const nextAnswer = userAnswers[currentIndex + 1];
      if (nextAnswer) {
        setSelectedOption(nextAnswer.selectedIndex);
        setIsSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsSubmitted(false);
      }
    } else {
      setScreenState('results');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartQuiz = () => {
    setScreenState('select_mode');
    setCurrentQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setUserAnswers([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQ = currentQuestions[currentIndex];
  const totalQuestions = currentQuestions.length;
  const correctCount = userAnswers.filter(a => a?.isCorrect).length;
  const wrongCount = totalQuestions - correctCount;
  const finalScore = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Find module IDs of wrong questions for smart recommendation
  const wrongMaterialIds = Array.from(
    new Set(
      userAnswers
        .filter(a => a && !a.isCorrect)
        .map(a => {
          const q = currentQuestions.find(cq => cq.id === a.questionId);
          return q?.materialId;
        })
        .filter((id): id is number => id !== undefined)
    )
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

      {/* SCREEN 1: SELECT MODE */}
      {screenState === 'select_mode' && (
        <div className="space-y-8">
          <div className="max-w-xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1 block">
              Evaluasi Pemahaman
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pusat Latihan Algoritma & Pemrograman
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              Pilih jenis latihan yang ingin kamu kerjakan untuk menguji pemahaman konsep teoritis maupun penerapan studi kasus praktis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Card 1: Pilihan Ganda */}
            <div className="p-7 rounded-2xl glass-card-interactive border border-purple-500/25 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-4 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono font-bold text-purple-400 mb-1">Mode 1</div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  Pilihan Ganda Konseptual
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  10 butir soal langsung mengenai konsep dasar algoritma, karakteristik Knuth, simbol flowchart standar, struktur pseudocode, serta tipe data primitif.
                </p>

                <div className="space-y-2 text-xs text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Jumlah: 10 Soal (4 Opsi Jawaban)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Feedback penjelasan di setiap nomor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Rekomendasi materi yang perlu dievaluasi</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectTypeAndShowInstructions('mcq')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Pilih Pilihan Ganda</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Studi Kasus */}
            <div className="p-7 rounded-2xl glass-card-interactive border border-purple-500/25 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center mb-4 text-fuchsia-300 shadow-[0_0_15px_rgba(217,70,239,0.25)]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono font-bold text-fuchsia-400 mb-1">Mode 2</div>
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-200 transition-colors">
                  Latihan Studi Kasus
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  10 skenario permasalahan terapan (sistem kasir, transaksi mesin ATM, gerbang tol, validasi nilai, dan penanganan bug logika).
                </p>

                <div className="space-y-2 text-xs text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                    <span>Jumlah: 10 Kasus Masalah Nyata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                    <span>Analisis alur komputasi & logika</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                    <span>Pembahasan analitis setiap langkah</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectTypeAndShowInstructions('case_study')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-fuchsia-600/30 border border-fuchsia-400/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Pilih Studi Kasus</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 2: INSTRUCTIONS SCREEN */}
      {screenState === 'instructions' && (
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-purple-500/30 glow-purple max-w-2xl mx-auto space-y-6 bg-[#130d2f]/95 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>Petunjuk Pengerjaan</span>
          </div>

          <h1 className="text-2xl font-extrabold text-white">
            {selectedQuizType === 'mcq' ? 'Latihan Pilihan Ganda' : 'Latihan Studi Kasus'}
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed">
            Perhatikan petunjuk pengerjaan di bawah ini dengan saksama sebelum memulai latihan:
          </p>

          <div className="p-5 rounded-2xl glass-card-inner border border-purple-500/20 space-y-3.5 text-xs sm:text-sm text-slate-200">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">1</span>
              <span>Latihan ini terdiri atas <strong>10 butir soal</strong> yang menguji 5 modul kurikulum.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">2</span>
              <span>Setiap butir soal memiliki <strong>4 pilihan jawaban</strong> (A, B, C, D).</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">3</span>
              <span>Pilihlah <strong>satu jawaban yang paling tepat</strong>, lalu klik tombol <strong>"Submit Jawaban"</strong>.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">4</span>
              <span>Feedback dan penjelasan logis akan langsung ditampilkan setelah jawaban dikirim.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-sm">5</span>
              <span>Setelah membaca pembahasan, klik <strong>"Lanjut ke Soal Berikutnya →"</strong> hingga selesai.</span>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setScreenState('select_mode')}
              className="text-xs text-purple-300 hover:text-white transition-colors cursor-pointer"
            >
              &larr; Ganti Jenis Latihan
            </button>

            <button
              onClick={handleStartQuiz}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/40 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              Mulai Latihan Sekarang
            </button>
          </div>
        </div>
      )}

      {/* SCREEN 3: IN_QUIZ SCREEN & FEEDBACK */}
      {screenState === 'in_quiz' && currentQ && (
        <div className="space-y-6">
          
          {/* Header Progress Bar */}
          <div className="p-4 rounded-2xl glass-card border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono text-purple-400 font-bold">
                {selectedQuizType === 'mcq' ? 'Latihan Pilihan Ganda' : 'Latihan Studi Kasus'}
              </div>
              <div className="text-sm font-extrabold text-white">
                Soal {currentIndex + 1} dari {totalQuestions}
              </div>
            </div>

            {/* Step numbers */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {currentQuestions.map((q, idx) => {
                const answer = userAnswers[idx];
                let bg = 'glass-card-subtle text-slate-400 border border-purple-500/20';
                if (answer) {
                  bg = answer.isCorrect ? 'bg-emerald-600 text-white shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-rose-600 text-white shadow-[0_0_8px_rgba(244,63,94,0.5)]';
                } else if (idx === currentIndex) {
                  bg = 'bg-purple-600 text-white ring-2 ring-purple-300/50 shadow-[0_0_12px_rgba(168,85,247,0.5)] font-bold';
                }

                return (
                  <div
                    key={idx}
                    className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-mono font-bold transition-all ${bg}`}
                  >
                    {idx + 1}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-purple-500/30 glow-purple bg-[#130d2f]/90 shadow-2xl">
            <div className="flex items-center gap-2 text-xs text-purple-300 font-mono mb-3">
              <span>{currentQ.materialTitle}</span>
              <span className="opacity-50">·</span>
              <span>{currentQ.relatedSubtopic}</span>
            </div>

            {/* Context snippet if case study */}
            {currentQ.contextSnippet && (
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 mb-4 font-mono leading-relaxed">
                {currentQ.contextSnippet}
              </div>
            )}

            {/* Question Text */}
            <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed mb-6">
              {currentQ.question}
            </h2>

            {/* Options List */}
            <div className="space-y-2.5 mb-6">
              {currentQ.options.map((optionText, optIdx) => {
                const optionLetter = String.fromCharCode(65 + optIdx);
                const isSelected = selectedOption === optIdx;
                const isCorrectOption = optIdx === currentQ.correctIndex;

                let optionStyle = 'glass-card-subtle hover:bg-purple-600/15 border-purple-500/20 text-slate-200 cursor-pointer';

                if (isSubmitted) {
                  if (isCorrectOption) {
                    optionStyle = 'bg-emerald-950/40 border-emerald-400 text-emerald-100 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.25)]';
                  } else if (isSelected && !isCorrectOption) {
                    optionStyle = 'bg-rose-950/40 border-rose-400 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.25)]';
                  } else {
                    optionStyle = 'glass-card-subtle border-white/5 text-slate-500 opacity-50';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-purple-600/35 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => {
                      if (!isSubmitted) setSelectedOption(optIdx);
                    }}
                    disabled={isSubmitted}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                      isSubmitted && isCorrectOption
                        ? 'bg-emerald-500 text-white'
                        : isSubmitted && isSelected && !isCorrectOption
                        ? 'bg-rose-500 text-white'
                        : isSelected
                        ? 'bg-purple-500 text-white shadow-sm'
                        : 'bg-purple-950/50 text-purple-300 border border-purple-500/30'
                    }`}>
                      {optionLetter}
                    </span>

                    <span className="text-xs sm:text-sm font-medium leading-relaxed pt-0.5">
                      {optionText}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Actions & Feedback */}
            {!isSubmitted ? (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white font-bold text-xs shadow-lg shadow-purple-600/40 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
                >
                  Submit Jawaban
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-4 border-t border-purple-500/20">
                {/* Feedback Box as specified in PRD */}
                {selectedOption === currentQ.correctIndex ? (
                  <div className="p-4 rounded-xl glass-card border border-emerald-500/40 bg-emerald-950/30 text-emerald-100">
                    <div className="flex items-center gap-2 font-bold text-sm text-emerald-300 mb-1">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span>Jawaban benar!</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed pl-7">
                      {currentQ.explanation}
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl glass-card border border-rose-500/40 bg-rose-950/30 text-rose-100">
                    <div className="flex items-center gap-2 font-bold text-sm text-rose-300 mb-1">
                      <XCircle className="w-5 h-5 text-rose-400" />
                      <span>Jawaban belum tepat.</span>
                    </div>
                    <div className="text-xs text-slate-200 leading-relaxed pl-7 space-y-1">
                      <div>
                        <strong className="text-rose-200">Jawaban yang benar:</strong> {String.fromCharCode(65 + currentQ.correctIndex)}. {currentQ.options[currentQ.correctIndex]}
                      </div>
                      <div className="text-slate-300 pt-1">
                        <strong className="text-purple-300">Penjelasan:</strong> {currentQ.explanation}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/40 border border-purple-400/30 transition-all cursor-pointer hover:scale-[1.02]"
                  >
                    <span>
                      {currentIndex < totalQuestions - 1
                        ? 'Lanjut ke Soal Berikutnya →'
                        : 'Lihat Hasil Latihan →'}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SCREEN 4: RESULTS SCREEN WITH SMART MATERIAL RECOMMENDATIONS */}
      {screenState === 'results' && (
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-purple-500/35 glow-purple-lg space-y-8 bg-[#130d2f]/95 shadow-2xl">
          <div className="max-w-md mx-auto text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Award className="w-6 h-6 text-purple-300" />
            </div>
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              Hasil Latihan Selesai
            </div>
            <h1 className="text-2xl font-extrabold text-white">
              {selectedQuizType === 'mcq' ? 'Kuis Pilihan Ganda' : 'Studi Kasus'}
            </h1>
          </div>

          {/* Score & Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl glass-card border border-purple-500/30 text-center">
              <span className="text-xs text-purple-300 font-bold block mb-1">Nilai Akhir</span>
              <span className="text-4xl font-black text-white font-mono">{finalScore}</span>
              <span className="text-xs text-slate-400 block mt-1">Skala 100</span>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-emerald-500/30 bg-emerald-950/20 text-center">
              <span className="text-xs text-emerald-300 font-bold block mb-1">Jawaban Benar</span>
              <span className="text-4xl font-black text-emerald-400 font-mono">{correctCount}</span>
              <span className="text-xs text-slate-400 block mt-1">dari {totalQuestions} Soal</span>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-rose-500/30 bg-rose-950/20 text-center">
              <span className="text-xs text-rose-300 font-bold block mb-1">Jawaban Salah</span>
              <span className="text-4xl font-black text-rose-400 font-mono">{wrongCount}</span>
              <span className="text-xs text-slate-400 block mt-1">Perlu Evaluasi</span>
            </div>
          </div>

          {/* Rekomendasi Materi Section as specified in PRD */}
          <div className="p-6 rounded-2xl glass-card-inner border border-purple-500/25 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white text-sm sm:text-base">Rekomendasi Materi Belajar</h3>
            </div>

            {wrongMaterialIds.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-300">
                  Berdasarkan jawaban yang salah, kamu disarankan untuk membuka dan membaca kembali modul materi berikut:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {wrongMaterialIds.map((matId) => {
                    const mat = materials.find(m => m.id === matId);
                    if (!mat) return null;

                    return (
                      <div
                        key={matId}
                        className="p-4 rounded-xl glass-card border border-purple-500/25 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-[11px] font-mono text-purple-400 font-bold">Modul 0{mat.id}</div>
                          <div className="text-xs font-bold text-white">{mat.title.replace(/^Materi\s\d+\s—\s/, '')}</div>
                        </div>

                        <button
                          onClick={() => onNavigateToMaterial(mat.id)}
                          className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                        >
                          Pelajari
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl glass-card border border-emerald-500/30 bg-emerald-950/30 text-emerald-100 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Luar biasa! Kamu berhasil menjawab seluruh 10 soal dengan sempurna (Skor 100). Kamu telah menguasai materi ini dengan sangat baik.
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons as specified in PRD */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-purple-500/20">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:bg-purple-600/20 text-purple-200 text-xs font-bold border border-purple-500/30 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-purple-300" />
              <span>Ulangi Latihan</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigateToMaterial(1)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-purple-600/30 border border-purple-400/30 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-purple-200" />
                <span>Pelajari Materi</span>
              </button>

              <button
                onClick={onNavigateHome}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:bg-white/10 text-white text-xs font-bold border border-purple-500/30 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4 text-purple-300" />
                <span>Kembali ke Beranda</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

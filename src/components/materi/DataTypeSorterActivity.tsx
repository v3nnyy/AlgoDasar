import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Boxes } from 'lucide-react';

interface ValueCard {
  id: string;
  displayValue: string;
  expectedType: 'integer' | 'float' | 'char' | 'string' | 'boolean';
}

const ALL_CARDS: ValueCard[] = [
  { id: 'c1', displayValue: '25', expectedType: 'integer' },
  { id: 'c2', displayValue: '3.14', expectedType: 'float' },
  { id: 'c3', displayValue: '"Algoritma"', expectedType: 'string' },
  { id: 'c4', displayValue: 'true', expectedType: 'boolean' },
  { id: 'c5', displayValue: "'A'", expectedType: 'char' },
  { id: 'c6', displayValue: '-150', expectedType: 'integer' },
  { id: 'c7', displayValue: '0.85', expectedType: 'float' },
  { id: 'c8', displayValue: '"Universitas"', expectedType: 'string' },
  { id: 'c9', displayValue: 'false', expectedType: 'boolean' },
  { id: 'c10', displayValue: "'#'", expectedType: 'char' }
];

const BUCKETS = [
  { type: 'integer', label: 'Integer', desc: 'Bilangan Bulat', color: 'border-purple-400/40 bg-purple-950/40 text-purple-200' },
  { type: 'float', label: 'Float', desc: 'Desimal / Pecahan', color: 'border-teal-400/40 bg-teal-950/40 text-teal-200' },
  { type: 'char', label: 'Char', desc: 'Karakter Tunggal', color: 'border-amber-400/40 bg-amber-950/40 text-amber-200' },
  { type: 'string', label: 'String', desc: 'Teks / Karakter', color: 'border-fuchsia-400/40 bg-fuchsia-950/40 text-fuchsia-200' },
  { type: 'boolean', label: 'Boolean', desc: 'Logika true / false', color: 'border-emerald-400/40 bg-emerald-950/40 text-emerald-200' }
] as const;

export const DataTypeSorterActivity: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [placedCards, setPlacedCards] = useState<Record<string, string>>({});
  const [mistakeFeedback, setMistakeFeedback] = useState<string | null>(null);

  const handleSelectCard = (cardId: string) => {
    setSelectedCardId(cardId);
    setMistakeFeedback(null);
  };

  const handleSelectBucket = (bucketType: ValueCard['expectedType']) => {
    if (!selectedCardId) return;

    const card = ALL_CARDS.find(c => c.id === selectedCardId);
    if (!card) return;

    if (card.expectedType === bucketType) {
      setPlacedCards(prev => ({ ...prev, [selectedCardId]: bucketType }));
      setSelectedCardId(null);
      setMistakeFeedback(null);
    } else {
      setMistakeFeedback(`Nilai ${card.displayValue} bukan bertipe ${bucketType.toUpperCase()}. Perhatikan format nilainya.`);
    }
  };

  const handleReset = () => {
    setPlacedCards({});
    setSelectedCardId(null);
    setMistakeFeedback(null);
  };

  const remainingCards = ALL_CARDS.filter(c => !placedCards[c.id]);

  return (
    <div className="mt-8 p-6 rounded-2xl glass-card border border-purple-500/25">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            <Boxes className="w-4 h-4 text-purple-300" />
            <span>Aktivitas Interaktif</span>
          </div>
          <h3 className="text-base font-bold text-white">Klasifikasi Nilai ke Keranjang Tipe Data</h3>
          <p className="text-xs text-slate-300">
            Pilih kartu nilai di bawah, lalu klik keranjang tipe data yang sesuai.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-purple-200 hover:text-white glass-card hover:bg-purple-600/20 rounded-xl border border-purple-500/30 transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5 text-purple-300" />
          Reset Latihan
        </button>
      </div>

      {/* Unclassified Cards Deck */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
            Nilai yang Belum Diklasifikasikan ({remainingCards.length} tersisa):
          </span>
          <span className="text-xs text-purple-200/80 font-bold font-mono">
            Tersusun: {Object.keys(placedCards).length} / {ALL_CARDS.length}
          </span>
        </div>

        {remainingCards.length > 0 ? (
          <div className="flex flex-wrap gap-2.5 p-3.5 rounded-xl glass-card-inner border border-purple-500/20 min-h-[58px] items-center shadow-inner">
            {remainingCards.map((card) => {
              const isSelected = selectedCardId === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => handleSelectCard(card.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] ring-2 ring-purple-300/40'
                      : 'glass-card-subtle hover:bg-purple-600/20 text-purple-200 border-purple-500/30'
                  }`}
                >
                  {card.displayValue}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="p-4 rounded-xl glass-card border border-emerald-500/40 bg-emerald-950/30 text-emerald-200 text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Selamat! Seluruh 10 nilai telah berhasil dimasukkan ke keranjang tipe data yang tepat!</span>
          </div>
        )}

        {mistakeFeedback && (
          <div className="mt-2 text-xs text-rose-200 bg-rose-950/40 border border-rose-500/30 p-2.5 rounded-xl">
            {mistakeFeedback}
          </div>
        )}
      </div>

      {/* Target Buckets */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-purple-300 block mb-3">
          5 Keranjang Tipe Data:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {BUCKETS.map((bucket) => {
            const itemsInThisBucket = ALL_CARDS.filter(c => placedCards[c.id] === bucket.type);

            return (
              <button
                key={bucket.type}
                onClick={() => handleSelectBucket(bucket.type)}
                disabled={!selectedCardId}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between min-h-[140px] transition-all ${bucket.color} ${
                  selectedCardId
                    ? 'hover:border-purple-300 hover:scale-[1.02] cursor-pointer shadow-lg'
                    : 'cursor-default'
                }`}
              >
                <div>
                  <div className="font-bold text-sm tracking-wide text-white">{bucket.label}</div>
                  <div className="text-[11px] text-slate-300 leading-tight mb-2">{bucket.desc}</div>
                </div>

                <div className="flex flex-wrap gap-1 mt-auto pt-2.5 border-t border-white/10">
                  {itemsInThisBucket.length === 0 ? (
                    <span className="text-[11px] text-slate-400 italic">Kosong</span>
                  ) : (
                    itemsInThisBucket.map(c => (
                      <span
                        key={c.id}
                        className="px-2 py-0.5 rounded-md bg-[#0b081e] text-[11px] font-mono font-bold text-purple-200 border border-purple-500/30 shadow-xs"
                      >
                        {c.displayValue}
                      </span>
                    ))
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

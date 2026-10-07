import React, { useState, useEffect } from 'react';
import { Youtube, ExternalLink, Play, AlertCircle, RefreshCw, Film } from 'lucide-react';

interface AlternativeVideo {
  videoId: string;
  title: string;
  channelName: string;
}

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  description: string;
  channelName: string;
  alternativeVideos?: AlternativeVideo[];
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  description,
  channelName,
  alternativeVideos = [],
}) => {
  const [selectedVideoId, setSelectedVideoId] = useState<string>(videoId);
  const [selectedTitle, setSelectedTitle] = useState<string>(title);
  const [selectedChannel, setSelectedChannel] = useState<string>(channelName);
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedKey, setEmbedKey] = useState(0);

  // Sync if prop videoId changes
  useEffect(() => {
    setSelectedVideoId(videoId);
    setSelectedTitle(title);
    setSelectedChannel(channelName);
    setIsPlaying(false);
  }, [videoId, title, channelName]);

  const allVideoOptions: AlternativeVideo[] = [
    { videoId, title, channelName },
    ...alternativeVideos
  ];

  const handleSelectOption = (opt: AlternativeVideo) => {
    setSelectedVideoId(opt.videoId);
    setSelectedTitle(opt.title);
    setSelectedChannel(opt.channelName);
    setIsPlaying(false);
    setEmbedKey(k => k + 1);
  };

  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${selectedVideoId}`;
  const embedUrl = `https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="my-8 rounded-xl overflow-hidden border shadow-sm transition-colors"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Top Banner with Direct Access & Channel indicator */}
      <div className="px-4 py-2.5 border-b flex flex-wrap items-center justify-between gap-2 text-xs"
        style={{
          backgroundColor: 'var(--color-surface-subtle)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center gap-2 font-medium">
          <Youtube className="w-4 h-4 text-red-500 fill-current shrink-0" />
          <span className="font-semibold" style={{ color: 'var(--color-text-main)' }}>
            Video Pembelajaran Terverifikasi
          </span>
          <span className="opacity-40">·</span>
          <span style={{ color: 'var(--color-text-muted)' }}>Kanal: {selectedChannel}</span>
        </div>

        <a
          href={youtubeWatchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium text-xs shadow-xs transition-colors"
        >
          <span>Buka di YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Alternative Video Switcher */}
      {allVideoOptions.length > 1 && (
        <div className="px-4 py-2 border-b flex flex-wrap items-center gap-2 text-xs"
          style={{
            backgroundColor: 'var(--color-surface-subtle)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center gap-1.5 shrink-0 font-medium text-[11px]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <Film className="w-3.5 h-3.5" style={{ color: 'var(--color-primary-text)' }} />
            <span>Pilihan Sumber Belajar:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {allVideoOptions.map((opt, idx) => {
              const isSelected = selectedVideoId === opt.videoId;
              return (
                <button
                  key={opt.videoId}
                  onClick={() => handleSelectOption(opt)}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer border"
                  style={{
                    backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-surface)',
                    borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                    color: isSelected ? '#ffffff' : 'var(--color-text-muted)',
                    fontWeight: isSelected ? 600 : 500,
                  }}
                >
                  Opsi {idx + 1}: {opt.channelName}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Video Container */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        {isPlaying ? (
          <iframe
            key={embedKey}
            className="w-full h-full border-0"
            src={embedUrl}
            title={selectedTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div
            className="relative w-full h-full group cursor-pointer"
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsPlaying(true);
              }
            }}
            aria-label={`Putar video YouTube: ${selectedTitle}`}
          >
            {/* High-res YouTube thumbnail with fallback to medium res */}
            <img
              key={selectedVideoId}
              src={`https://img.youtube.com/vi/${selectedVideoId}/hqdefault.jpg`}
              alt={selectedTitle}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('mqdefault')) {
                  target.src = `https://img.youtube.com/vi/${selectedVideoId}/mqdefault.jpg`;
                }
              }}
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <button
                type="button"
                className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-xl shadow-black/50 group-hover:scale-110 transition-all border border-white/20 cursor-pointer"
                aria-label={`Putar video: ${selectedTitle}`}
              >
                <Play className="w-7 h-7 fill-white ml-1" />
              </button>
              <span className="text-xs font-semibold text-slate-100 bg-black/70 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                Klik untuk memutar video
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Video Metadata / Information Card */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-bold" style={{ color: 'var(--color-text-main)' }}>
            {selectedTitle}
          </h4>
          <p className="text-xs max-w-2xl leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {isPlaying && (
            <button
              onClick={() => setEmbedKey(k => k + 1)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs border transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--color-surface-subtle)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-main)',
              }}
              title="Muat ulang pemutar"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Muat Ulang</span>
            </button>
          )}

          <a
            href={youtubeWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium text-xs shadow-xs transition-colors"
          >
            <Youtube className="w-3.5 h-3.5 fill-current" />
            <span>Tonton di YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Footer note */}
      <div className="px-4 py-2 border-t flex items-center gap-2 text-[11px]"
        style={{
          backgroundColor: 'var(--color-surface-subtle)',
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-muted)',
        }}
      >
        <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span>
          Jika pemutar mengalami kendala jaringan atau pembatasan pihak ketiga, klik tombol <strong>"Tonton di YouTube"</strong> untuk langsung membukanya.
        </span>
      </div>
    </div>
  );
};

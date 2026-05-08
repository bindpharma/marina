'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { SiteImage } from '@/lib/images';

interface SmartImageProps {
  image: SiteImage;
  fallbackVariant?: 'yacht' | 'marina' | 'craft' | 'fabric' | 'compass';
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Akıllı görsel komponenti.
 * - Önce gerçek görseli (Unsplash/lokal) yüklemeye çalışır
 * - Yüklenemezse zengin SVG fallback gösterir (yat silüeti, marin tema vs.)
 */
export default function SmartImage({
  image,
  fallbackVariant = 'yacht',
  className = '',
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`visual-placeholder ${className}`} aria-label={image.alt}>
        <FallbackArt variant={fallbackVariant} />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

function FallbackArt({ variant }: { variant: SmartImageProps['fallbackVariant'] }) {
  const common = 'h-32 w-32 text-gold/35';
  switch (variant) {
    case 'yacht':
      return (
        <svg className={common} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path
            d="M10 65 L90 65 L80 80 L20 80 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path d="M50 15 L50 65 M50 15 L75 60 M50 15 L25 60" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 80 Q20 75, 35 80 T65 80 T95 80" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M5 88 Q20 83, 35 88 T65 88 T95 88" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      );
    case 'marina':
      return (
        <svg className={common} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M50 12 L50 88 M40 25 L60 25 M35 35 L65 35" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="55" r="14" stroke="currentColor" strokeWidth="1.5" />
          <path d="M50 41 L50 69 M36 55 L64 55" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 88 Q25 83, 50 88 T95 88" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'craft':
      return (
        <svg className={common} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path
            d="M20 30 L80 30 L75 70 L25 70 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <path d="M30 40 L70 40 M30 50 L70 50 M30 60 L70 60" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'fabric':
      return (
        <svg className={common} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path
            d="M15 20 Q35 12 50 20 T85 20 L85 80 Q65 88 50 80 T15 80 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <path d="M15 35 Q35 27 50 35 T85 35" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <path d="M15 50 Q35 42 50 50 T85 50" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <path d="M15 65 Q35 57 50 65 T85 65" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
      );
    case 'compass':
      return (
        <svg className={common} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <path d="M50 12 L55 50 L50 88 L45 50 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 50 L50 45 L88 50 L50 55 Z" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
}

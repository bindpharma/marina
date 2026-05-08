/**
 * Görsel Sistemi
 * ----------------
 * Tüm site görselleri buradan yönetilir.
 *
 * Gerçek fotoğraflarınızı eklemek için:
 * 1. Görseli `/public/images/` altına koyun (örn: hero.jpg)
 * 2. Aşağıda ilgili anahtarın `src` değerini `/images/hero.jpg` olarak değiştirin
 *
 * Ya da Unsplash gibi bir CDN kullanın:
 * - `next.config.mjs` içinde `images.remotePatterns` listesine domain ekleyin (eklenmiş)
 * - Buradaki URL'i değiştirin
 *
 * Tüm görseller next/image ile otomatik optimize edilir (WebP, lazy load, responsive).
 */

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Bunlar Unsplash CDN'den gelen profesyonel yat/marin görselleri.
 * Production'da URL'leri kendi fotoğraflarınızla değiştirebilirsiniz.
 *
 * Eğer Unsplash domain'i çalışmazsa SVG fallback'ler devreye girer.
 */
export const IMAGES = {
  hero: {
    src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80&auto=format&fit=crop',
    alt: 'İstanbul marinasında demirli lüks yat — Aslan Marin yat döşeme',
    width: 1600,
    height: 1067,
  },
  about: {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80&auto=format&fit=crop',
    alt: 'Yat döşeme atölyesinde profesyonel uygulama',
    width: 1200,
    height: 1500,
  },
  // Hizmet görselleri
  serviceUpholstery: {
    src: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80&auto=format&fit=crop',
    alt: 'Yat iç döşeme uygulaması — Sunbrella kumaş ile özel imalat',
    width: 1200,
    height: 800,
  },
  serviceBimini: {
    src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80&auto=format&fit=crop',
    alt: 'Yat tentesi ve bimini uygulaması',
    width: 1200,
    height: 800,
  },
  serviceCarpet: {
    src: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80&auto=format&fit=crop',
    alt: 'Yat halısı — anti-bakteriyel marin halı',
    width: 1200,
    height: 800,
  },
  serviceCushions: {
    src: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80&auto=format&fit=crop',
    alt: 'Yat minderleri — fast-dry sünger ve marin kumaş',
    width: 1200,
    height: 800,
  },
  serviceDecoration: {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80&auto=format&fit=crop',
    alt: 'Yat dekorasyonu — tavan ve duvar kaplama',
    width: 1200,
    height: 800,
  },
  // Marina görselleri
  marina1: {
    src: 'https://images.unsplash.com/photo-1599582909646-2b4f3a5a8a3a?w=1600&q=80&auto=format&fit=crop',
    alt: 'İstanbul marina — Tuzla ve Pendik yatları',
    width: 1600,
    height: 900,
  },
  // Proje görselleri
  project1: {
    src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80&auto=format&fit=crop',
    alt: 'Tamamlanan yat döşeme projesi — Tuzla Marina',
    width: 1200,
    height: 800,
  },
  project2: {
    src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80&auto=format&fit=crop',
    alt: 'Yat tentesi projesi — Fenerbahçe',
    width: 1200,
    height: 1500,
  },
  project3: {
    src: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80&auto=format&fit=crop',
    alt: 'Fly bridge minder uygulaması — Kalamış',
    width: 1200,
    height: 1500,
  },
  project4: {
    src: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80&auto=format&fit=crop',
    alt: 'Marin halı projesi — Pendik Marina',
    width: 1200,
    height: 800,
  },
  project5: {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80&auto=format&fit=crop',
    alt: 'Tavan kaplama projesi — Ataköy',
    width: 1200,
    height: 1500,
  },
  project6: {
    src: 'https://images.unsplash.com/photo-1599582909646-2b4f3a5a8a3a?w=1200&q=80&auto=format&fit=crop',
    alt: 'Sundeck tente — West İstanbul',
    width: 1200,
    height: 800,
  },
  // Materyaller / kumaşlar
  materials: {
    src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80&auto=format&fit=crop',
    alt: 'Marin sınıfı kumaş örnekleri — Sunbrella, Stamoid',
    width: 1200,
    height: 800,
  },
  workshop: {
    src: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=1200&q=80&auto=format&fit=crop',
    alt: 'Sütlüce atölyemizdeki üretim alanı',
    width: 1200,
    height: 800,
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;

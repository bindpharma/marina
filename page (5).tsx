'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import type { SiteSettings } from '@/lib/store';

interface Props {
  initialSettings: SiteSettings;
}

export default function SettingsClient({ initialSettings }: Props) {
  const [settings, setSettings] = useState(initialSettings);
  const [brandName, setBrandName] = useState(initialSettings.brandName || '');
  const [tagline, setTagline] = useState(initialSettings.tagline || '');
  const [uploading, setUploading] = useState<'light' | 'dark' | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const lightFileRef = useRef<HTMLInputElement>(null);
  const darkFileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function uploadLogo(file: File, variant: 'light' | 'dark') {
    setError(null);
    setUploading(variant);

    const formData = new FormData();
    formData.append('logo', file);
    formData.append('variant', variant);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Yükleme başarısız');
      } else {
        setSettings((s) => ({
          ...s,
          ...(variant === 'dark' ? { logoUrlDark: data.url } : { logoUrl: data.url }),
        }));
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      }
    } catch (e) {
      setError('Bağlantı hatası');
    } finally {
      setUploading(null);
    }
  }

  async function removeLogo(variant: 'light' | 'dark') {
    if (!confirm(variant === 'dark' ? 'Koyu zemin logosunu kaldırmak istiyor musunuz?' : 'Logoyu kaldırmak istiyor musunuz? (varsayılan SVG geri gelir)')) return;

    const res = await fetch('/api/admin/settings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(variant === 'dark' ? { logoUrlDark: null } : { logoUrl: null }),
    });

    if (res.ok) {
      setSettings((s) => ({
        ...s,
        ...(variant === 'dark' ? { logoUrlDark: undefined } : { logoUrl: undefined }),
      }));
    }
  }

  async function saveText() {
    setError(null);
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandName, tagline }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Kaydedilemedi');
      } else {
        setSettings(data);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      }
    } catch (e) {
      setError('Bağlantı hatası');
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/giris');
  }

  return (
    <div className="min-h-screen bg-sand-100">
      {/* Header */}
      <header className="border-b border-navy/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <Logo size="sm" withTagline={false} />
            <span className="hidden text-xs uppercase tracking-widest text-muted sm:inline">
              Admin Panel
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin"
              className="rounded-full px-4 py-2 text-sm font-medium text-navy hover:bg-sand-100"
            >
              Talepler
            </Link>
            <Link
              href="/admin/ayarlar"
              className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white"
            >
              Ayarlar
            </Link>
            <button
              onClick={logout}
              className="ml-2 rounded-full border border-navy/15 px-4 py-2 text-sm text-navy hover:bg-sand-100"
            >
              Çıkış
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl tracking-tight text-navy">Site Ayarları</h1>
            <p className="mt-2 text-sm text-muted">
              Logo, marka adı ve tag line. Değişiklikler 5 dakika içinde sitede görünür.
            </p>
          </div>
          {saved && (
            <span className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Kaydedildi
            </span>
          )}
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Logo upload — Light variant */}
        <section className="mt-8 rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl tracking-tight text-navy">Ana Logo</h2>
              <p className="mt-1 text-sm text-muted">
                Beyaz/açık zeminler için. Sitenin üst menüsünde ve footer'da bu logo görünür.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-[200px,1fr]">
            {/* Preview */}
            <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-navy/15 bg-sand-100 p-4">
              {settings.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.logoUrl}
                  alt="Logo önizleme"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <Logo size="md" withTagline={false} />
                  <p className="mt-3 text-[10px] uppercase tracking-widest text-muted">
                    Varsayılan
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center gap-3">
              <input
                ref={lightFileRef}
                type="file"
                accept="image/svg+xml,image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadLogo(file, 'light');
                  e.target.value = '';
                }}
              />
              <button
                onClick={() => lightFileRef.current?.click()}
                disabled={uploading === 'light'}
                className="flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark disabled:opacity-60"
              >
                {uploading === 'light' ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                      <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Yükleniyor...
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {settings.logoUrl ? 'Değiştir' : 'Logo Yükle'}
                  </>
                )}
              </button>
              {settings.logoUrl && (
                <button
                  onClick={() => removeLogo('light')}
                  className="flex items-center justify-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  Kaldır
                </button>
              )}
              <p className="text-xs text-muted">
                <strong>Önerilen:</strong> SVG formatı (her boyutta keskin). PNG ya da WebP de
                kullanılabilir. Maksimum 1 MB.
              </p>
            </div>
          </div>
        </section>

        {/* Logo upload — Dark variant */}
        <section className="mt-6 rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl tracking-tight text-navy">Koyu Zemin Logosu (Opsiyonel)</h2>
              <p className="mt-1 text-sm text-muted">
                Footer ve koyu bölümler için. Boş bırakılırsa ana logo kullanılır.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-[200px,1fr]">
            <div className="flex aspect-square items-center justify-center rounded-xl bg-navy p-4">
              {settings.logoUrlDark ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.logoUrlDark}
                  alt="Koyu zemin logo önizleme"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="text-center text-white/50 text-xs">
                  Yok — ana logo kullanılır
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center gap-3">
              <input
                ref={darkFileRef}
                type="file"
                accept="image/svg+xml,image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadLogo(file, 'dark');
                  e.target.value = '';
                }}
              />
              <button
                onClick={() => darkFileRef.current?.click()}
                disabled={uploading === 'dark'}
                className="flex items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-sand-100 disabled:opacity-60"
              >
                {uploading === 'dark' ? 'Yükleniyor...' : settings.logoUrlDark ? 'Değiştir' : 'Yükle'}
              </button>
              {settings.logoUrlDark && (
                <button
                  onClick={() => removeLogo('dark')}
                  className="flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Kaldır
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Brand name & tagline */}
        <section className="mt-6 rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
          <h2 className="font-serif text-xl tracking-tight text-navy">Marka Metni</h2>
          <p className="mt-1 text-sm text-muted">
            Logo yanındaki yazı. Boş bırakırsanız varsayılan kullanılır.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="brandName" className="block text-sm font-medium text-navy">
                Marka Adı
              </label>
              <input
                id="brandName"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Aslan Marin"
                className="mt-2 w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                maxLength={80}
              />
              <p className="mt-1 text-xs text-muted">Maks. 80 karakter</p>
            </div>

            <div>
              <label htmlFor="tagline" className="block text-sm font-medium text-navy">
                Tag Line (alt yazı)
              </label>
              <input
                id="tagline"
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Yat Döşeme · Est. 2007"
                className="mt-2 w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                maxLength={120}
              />
              <p className="mt-1 text-xs text-muted">Logo altındaki küçük yazı. Maks. 120 karakter</p>
            </div>

            <button
              onClick={saveText}
              disabled={saving}
              className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark disabled:opacity-60"
            >
              {saving ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>
        </section>

        <div className="mt-8 rounded-xl bg-blue-50 px-5 py-4 text-sm text-blue-900">
          <strong>İpucu:</strong> Yüklediğiniz logo Vercel KV'ye base64 olarak kaydedilir. Sayfa
          ziyaret edildiğinde tarayıcı 5 dakika cache'ler — değişiklik anında görünmeyebilir,
          sayfayı yeniden yükleyin (Ctrl+Shift+R / Cmd+Shift+R).
        </div>
      </main>
    </div>
  );
}

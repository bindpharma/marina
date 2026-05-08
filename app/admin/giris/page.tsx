'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || 'Hata');
      }
    } catch {
      setError('Bağlantı hatası');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen place-items-center px-5 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
          <h1 className="font-serif text-3xl tracking-tight">Yönetim Paneli</h1>
          <p className="mt-2 text-sm text-muted">
            Devam etmek için yönetici şifrenizi girin.
          </p>
          <form onSubmit={onSubmit} className="mt-7 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted"
              >
                Şifre
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
                className="w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-gold"
              />
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold hover:text-navy disabled:opacity-50"
            >
              {loading ? 'Giriş yapılıyor…' : 'Giriş Yap'}
            </button>
          </form>
          <p className="mt-6 text-center text-[11px] text-muted">
            Şifrenizi unuttuysanız Vercel Dashboard&apos;dan{' '}
            <code className="rounded bg-sand-200 px-1.5 py-0.5 font-mono">ADMIN_PASSWORD</code>{' '}
            environment variable&apos;ını güncelleyin.
          </p>
        </div>
      </div>
    </div>
  );
}

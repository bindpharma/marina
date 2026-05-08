'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import type { ContactSubmission } from '@/lib/store';

interface Stats {
  total: number;
  new: number;
  last7: number;
  last30: number;
}

interface Props {
  submissions: ContactSubmission[];
  stats: Stats;
}

export default function AdminClient({ submissions: initialSubs, stats }: Props) {
  const [submissions, setSubmissions] = useState(initialSubs);
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');
  const [selected, setSelected] = useState<ContactSubmission | null>(null);
  const router = useRouter();

  const filtered = filter === 'all' ? submissions : submissions.filter((s) => s.status === filter);

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/giris');
    router.refresh();
  }

  async function updateStatus(id: string, status: ContactSubmission['status']) {
    const res = await fetch(`/api/admin/submissions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
      if (selected?.id === id) setSelected({ ...selected, status });
    }
  }

  async function deleteOne(id: string) {
    if (!confirm('Bu talebi silmek istediğinizden emin misiniz?')) return;
    const res = await fetch(`/api/admin/submissions/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selected?.id === id) setSelected(null);
    }
  }

  return (
    <div>
      {/* Header */}
      <header className="border-b border-navy/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <Logo withTagline={false} />
            <span className="ml-2 hidden rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-dark sm:inline-flex">
              Yönetim Paneli
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin"
              className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white"
            >
              Talepler
            </Link>
            <Link
              href="/admin/ayarlar"
              className="rounded-full px-4 py-2 text-xs font-semibold text-navy hover:bg-sand-100"
            >
              Ayarlar
            </Link>
            <Link
              href="/"
              target="_blank"
              className="ml-2 rounded-full border border-navy/15 px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-navy hover:bg-sand-100"
            >
              Siteyi Görüntüle
            </Link>
            <button
              onClick={logout}
              className="rounded-full border border-navy/15 px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-sand-100"
            >
              Çıkış
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-7 sm:py-10">
        <div className="mb-2">
          <h1 className="font-serif text-3xl tracking-tight sm:text-4xl">Teklif Talepleri</h1>
          <p className="mt-1 text-sm text-muted">
            Web sitesinden gelen tüm form gönderimleri ve durumları
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Toplam Talep" value={stats.total} />
          <StatCard label="Yeni Talep" value={stats.new} accent />
          <StatCard label="Son 7 Gün" value={stats.last7} />
          <StatCard label="Son 30 Gün" value={stats.last30} />
        </div>

        {/* Filters */}
        <div className="mb-5 flex flex-wrap gap-2">
          <FilterChip active={filter === 'all'} onClick={() => setFilter('all')}>
            Tümü ({submissions.length})
          </FilterChip>
          <FilterChip active={filter === 'new'} onClick={() => setFilter('new')}>
            Yeni ({submissions.filter((s) => s.status === 'new').length})
          </FilterChip>
          <FilterChip active={filter === 'contacted'} onClick={() => setFilter('contacted')}>
            İletişime Geçildi ({submissions.filter((s) => s.status === 'contacted').length})
          </FilterChip>
          <FilterChip active={filter === 'closed'} onClick={() => setFilter('closed')}>
            Kapatıldı ({submissions.filter((s) => s.status === 'closed').length})
          </FilterChip>
        </div>

        {/* Submissions list */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-navy/15 bg-white p-12 text-center">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-sand-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted">
                <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-sm text-muted">
              {filter === 'all'
                ? 'Henüz teklif talebi yok. İlk talebiniz geldiğinde burada görünecek.'
                : 'Bu filtreye uygun talep yok.'}
            </p>
            <p className="mt-3 text-xs text-muted">
              Vercel KV bağlı değilse talepler kaybolur. README&apos;deki kurulum adımlarını izleyin.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
            <ul className="divide-y divide-navy/8">
              {filtered.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => setSelected(s)}
                    className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-sand-100 sm:items-center"
                  >
                    <span
                      className={`mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full sm:mt-0 ${
                        s.status === 'new'
                          ? 'bg-gold'
                          : s.status === 'contacted'
                          ? 'bg-blue-500'
                          : 'bg-navy/30'
                      }`}
                      aria-label={statusLabel(s.status)}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-semibold text-navy">{s.name}</span>
                        <span className="text-sm text-muted">{s.phone}</span>
                        <span className="hidden text-xs text-muted sm:inline">·</span>
                        <span className="text-xs text-muted">{formatDate(s.createdAt)}</span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-2">
                        <span className="text-xs text-gold-dark">{s.service}</span>
                      </div>
                      {s.message && (
                        <p className="mt-1.5 line-clamp-1 text-sm text-muted">{s.message}</p>
                      )}
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${statusClass(
                        s.status
                      )}`}
                    >
                      {statusLabel(s.status)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {/* Detail Drawer */}
      {selected && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-navy/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-hidden="true"
          />
          <div className="flex w-full max-w-lg flex-col bg-white shadow-xl">
            <div className="flex items-start justify-between border-b border-navy/10 p-6">
              <div>
                <h2 className="font-serif text-2xl tracking-tight">{selected.name}</h2>
                <p className="mt-1 text-sm text-muted">{formatDate(selected.createdAt)}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-sand-200"
                aria-label="Kapat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <Field label="Telefon">
                <a
                  href={`tel:${selected.phone}`}
                  className="text-base font-semibold text-navy hover:text-gold-dark"
                >
                  {selected.phone}
                </a>
              </Field>
              <Field label="WhatsApp">
                <a
                  href={`https://wa.me/${selected.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
                >
                  WhatsApp&apos;tan Yaz
                </a>
              </Field>
              {selected.email && (
                <Field label="E-posta">
                  <a
                    href={`mailto:${selected.email}`}
                    className="text-base text-navy hover:text-gold-dark"
                  >
                    {selected.email}
                  </a>
                </Field>
              )}
              <Field label="İlgilendiği Hizmet">
                <span className="badge">{selected.service}</span>
              </Field>
              {selected.message && (
                <Field label="Mesaj">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate2">
                    {selected.message}
                  </p>
                </Field>
              )}
              <Field label="Durum">
                <div className="flex flex-wrap gap-2">
                  {(['new', 'contacted', 'closed'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-all ${
                        selected.status === s
                          ? 'bg-navy text-white'
                          : 'border border-navy/15 text-navy hover:border-navy'
                      }`}
                    >
                      {statusLabel(s)}
                    </button>
                  ))}
                </div>
              </Field>
            </div>

            <div className="border-t border-navy/10 p-6">
              <button
                onClick={() => deleteOne(selected.id)}
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Bu talebi sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-soft ${
        accent ? 'bg-navy text-white' : 'bg-white'
      }`}
    >
      <div
        className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
          accent ? 'text-gold-light' : 'text-muted'
        }`}
      >
        {label}
      </div>
      <div className="mt-2 font-serif text-4xl font-light tracking-tight">{value}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
        active
          ? 'bg-navy text-white'
          : 'border border-navy/15 bg-white text-navy hover:border-navy/40'
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function statusLabel(status: ContactSubmission['status']) {
  return status === 'new' ? 'Yeni' : status === 'contacted' ? 'Görüşüldü' : 'Kapatıldı';
}

function statusClass(status: ContactSubmission['status']) {
  return status === 'new'
    ? 'bg-gold/15 text-gold-dark'
    : status === 'contacted'
    ? 'bg-blue-50 text-blue-700'
    : 'bg-sand-200 text-muted';
}

function formatDate(ts: number) {
  const d = new Date(ts);
  return d.toLocaleString('tr-TR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

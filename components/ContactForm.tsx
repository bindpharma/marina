'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      website: formData.get('website') as string, // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.ok) {
        setState('success');
      } else {
        setState('error');
        setError(data.error || 'Bir hata oluştu.');
      }
    } catch {
      setState('error');
      setError('Bağlantı hatası. Lütfen tekrar deneyin ya da bizi telefondan arayın.');
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-2xl bg-navy p-10 text-center text-white shadow-card sm:p-12">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-gold text-navy">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-serif text-3xl tracking-tight">Talebiniz alındı.</h3>
        <p className="mt-3 max-w-md text-white/75">
          Genellikle aynı iş günü içinde sizi arıyoruz. Aciliyse{' '}
          <a href={`tel:${CONTACT.phoneRaw}`} className="text-gold-light underline">
            {CONTACT.phone}
          </a>{' '}
          numarasından doğrudan ulaşabilirsiniz.
        </p>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
        >
          WhatsApp&apos;tan da yazın
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-navy p-8 text-white shadow-card sm:p-11"
      aria-label="Teklif formu"
    >
      <h3 className="font-serif text-3xl tracking-tight">Ücretsiz teklif alın</h3>
      <p className="mt-2 text-sm text-white/65">
        Bilgilerinizi bırakın, sizi aynı iş günü içinde arayalım.
      </p>

      {/* Honeypot — gizli */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] -top-[9999px]"
        aria-hidden="true"
      />

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Ad Soyad" type="text" required placeholder="Adınız Soyadınız" />
        <Field name="phone" label="Telefon" type="tel" required placeholder="+90 ___ ___ __ __" />
      </div>

      <div className="mt-4">
        <Field
          name="email"
          label="E-posta (opsiyonel)"
          type="email"
          placeholder="ornek@email.com"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
          İlgilenilen Hizmet
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full appearance-none rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none transition-colors focus:border-gold"
        >
          <option value="" disabled className="bg-navy">
            Seçiniz…
          </option>
          <option value="Yat Döşeme" className="bg-navy">Yat Döşeme</option>
          <option value="Yat Tentesi" className="bg-navy">Yat Tentesi (Bimini & Kapela)</option>
          <option value="Yat Halısı" className="bg-navy">Yat Halısı</option>
          <option value="Yat Minderleri" className="bg-navy">Yat Minderleri</option>
          <option value="Yat Dekorasyonu" className="bg-navy">Yat Dekorasyonu</option>
          <option value="Diğer" className="bg-navy">Diğer / Birden Fazla</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
          Mesaj (opsiyonel)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tekneniz, marina ve ihtiyacınız hakkında kısa bilgi…"
          className="w-full resize-y rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold"
        />
      </div>

      {error && (
        <div role="alert" className="mt-4 rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="mt-7 w-full rounded-full bg-gold px-6 py-4 text-sm font-semibold tracking-wide text-navy transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-gold disabled:opacity-50"
      >
        {state === 'submitting' ? 'Gönderiliyor…' : 'Teklif Talebi Gönder'}
      </button>

      <p className="mt-5 flex items-start gap-2 text-xs text-white/50">
        <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        Bilgileriniz güvende. Sadece sizinle iletişime geçmek için kullanılır.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type,
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

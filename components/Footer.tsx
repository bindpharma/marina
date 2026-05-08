import Link from 'next/link';
import Logo from './Logo';
import { CONTACT, SERVICES, MARINAS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-x py-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              İstanbul merkezli yat döşeme ve dekorasyon atölyesi. Sütlüce&apos;deki üretim
              üssümüzden tüm İstanbul marinalarına marin sınıfı malzeme ve atölye standartlarında
              işçilikle hizmet veriyoruz.
            </p>
            <div className="mt-7 flex gap-3">
              <Social href={CONTACT.social.instagram} label="Instagram">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </Social>
              <Social href={CONTACT.social.facebook} label="Facebook">
                <path
                  d="M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 14.5 6H17V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z"
                  fill="currentColor"
                />
              </Social>
              <Social href={`https://wa.me/${CONTACT.whatsapp}`} label="WhatsApp">
                <path d="M17 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 2.9 1.2 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" fill="currentColor" />
                <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C2 6.5 6.5 2 12 2c2.7 0 5.2 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.4 9.8-9.9 9.8z" fill="currentColor" />
              </Social>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
              Menü
            </h4>
            <ul className="grid gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
              Hizmetler
            </h4>
            <ul className="grid gap-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-sm transition-colors hover:text-gold-light"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
              İletişim
            </h4>
            <address className="not-italic">
              <p className="mb-4 text-sm leading-relaxed">{CONTACT.address.full}</p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="mb-2 block text-sm transition-colors hover:text-gold-light"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-sm transition-colors hover:text-gold-light"
              >
                {CONTACT.email}
              </a>
              <p className="mt-4 text-sm text-white/50">{CONTACT.hours}</p>
            </address>
          </div>
        </div>

        <div className="border-b border-white/10 py-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
            Hizmet Verdiğimiz Marinalar
          </p>
          <p className="text-xs leading-relaxed text-white/55">{MARINAS.join(' · ')}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-8 text-xs text-white/45">
          <p>© {year} Aslan Marin Yat Döşeme ve Dekorasyon. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-5">
            <Link href="/sitemap.xml" className="transition-colors hover:text-gold-light">
              Sitemap
            </Link>
            <span>·</span>
            <span>İstanbul · Sütlüce, Beyoğlu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Aslan Marin ${label}`}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-all hover:border-gold hover:bg-gold hover:text-navy"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}

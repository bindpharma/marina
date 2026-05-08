'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy/10 bg-white/95 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container-x">
        <nav className="flex items-center justify-between py-4" aria-label="Ana navigasyon">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.filter((l) => l.href !== '/').map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative text-sm font-medium transition-colors ${
                      active ? 'text-gold-dark' : 'text-navy hover:text-gold-dark'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/iletisim"
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-3 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-navy lg:inline-flex"
          >
            Teklif Al
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg lg:hidden"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
          >
            <span className="relative block h-0.5 w-6 bg-navy">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-navy transition-all ${
                  open ? 'top-0 rotate-45' : '-top-2'
                }`}
              />
              <span className={`block h-0.5 w-6 bg-navy ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-navy transition-all ${
                  open ? 'top-0 -rotate-45' : 'top-2'
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-navy/10 bg-white lg:hidden transition-[max-height] duration-500 ${
          open ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 font-serif text-2xl text-navy transition-colors hover:text-gold-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link href="/iletisim" className="btn btn-primary w-full justify-center">
              Ücretsiz Teklif Al
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }
  body {
    @apply bg-white text-ink antialiased;
    font-feature-settings: 'ss01', 'cv11';
  }
  ::selection {
    @apply bg-gold text-navy;
  }
  h1, h2, h3, h4 {
    @apply font-serif font-normal tracking-tight;
  }
}

@layer components {
  .container-x {
    @apply mx-auto w-full max-w-container px-5 sm:px-7 lg:px-10;
  }

  .eyebrow {
    @apply inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-dark;
  }
  .eyebrow::before {
    content: '';
    @apply block h-px w-7 bg-gold;
  }
  .eyebrow-light {
    @apply inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light;
  }
  .eyebrow-light::before {
    content: '';
    @apply block h-px w-7 bg-gold-light;
  }

  .btn {
    @apply inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] font-semibold tracking-wide transition-all duration-200;
  }
  .btn-primary {
    @apply bg-gold text-navy hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold;
  }
  .btn-dark {
    @apply bg-navy text-white hover:bg-navy-700;
  }
  .btn-ghost-dark {
    @apply border border-white/20 text-white hover:border-gold hover:bg-gold/10 hover:text-gold;
  }
  .btn-ghost-light {
    @apply border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-white;
  }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.9, 0.2, 1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Görsel placeholder — zengin gradyan + desen */
  .visual-placeholder {
    @apply relative grid h-full w-full place-items-center overflow-hidden;
    background:
      radial-gradient(ellipse at top right, rgba(212, 169, 90, 0.22), transparent 55%),
      radial-gradient(ellipse at bottom left, rgba(11, 27, 51, 0.4), transparent 60%),
      linear-gradient(135deg, #1C3661, #0B1B33);
  }

  .visual-placeholder::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(255, 255, 255, 0.03) 18px, rgba(255, 255, 255, 0.03) 19px);
    pointer-events: none;
  }

  /* Kart hover efekti */
  .card {
    @apply rounded-2xl border border-navy/10 bg-white shadow-soft transition-all duration-300;
  }
  .card-hover {
    @apply hover:-translate-y-1 hover:border-navy/20 hover:shadow-card;
  }

  /* Image overlay - dikey gradyan */
  .img-overlay {
    @apply pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent;
  }

  /* Image overlay - hafif */
  .img-overlay-light {
    @apply pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent;
  }

  /* Loading shimmer */
  .shimmer {
    background: linear-gradient(90deg, #f1f0ea 0%, #fafaf7 50%, #f1f0ea 100%);
    background-size: 1000px 100%;
    animation: shimmer 2s linear infinite;
  }

  /* Badge */
  .badge {
    @apply inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold-dark;
  }
  .badge-dark {
    @apply inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-gold-light;
  }
}

/* Form focus rings */
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 2px solid #D4A95A;
  outline-offset: 2px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}

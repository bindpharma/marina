import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı',
  description: 'Aradığınız sayfa bulunamadı. Aslan Marin yat döşeme hizmetleri için ana sayfaya dönün.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-cream pt-32">
      <div className="container-x text-center">
        <div className="font-serif text-[clamp(80px,18vw,200px)] font-light leading-none tracking-tight text-brass">
          404
        </div>
        <h1 className="mt-4 text-[clamp(28px,4vw,44px)] font-light leading-[1.1] tracking-[-0.025em]">
          Bu sayfa <em className="italic font-normal text-brass">demir atmamış</em> görünüyor.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          Aradığınız sayfa kaldırılmış ya da adresi değişmiş olabilir. Sizi ana sayfaya alalım mı?
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">Ana Sayfa</Link>
          <Link href="/iletisim" className="btn btn-ghost-light">İletişim</Link>
        </div>
      </div>
    </section>
  );
}

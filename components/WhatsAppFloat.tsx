import { CONTACT } from '@/lib/constants';

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    'Merhaba, yat döşeme/dekorasyon hizmetiniz için bilgi almak istiyorum.'
  );

  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] sm:bottom-6 sm:right-6"
    >
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-100" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative z-10">
        <path d="M17 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 2.9 1.2 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
        <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C2 6.5 6.5 2 12 2c2.7 0 5.2 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.4 9.8-9.9 9.8z" />
      </svg>
    </a>
  );
}

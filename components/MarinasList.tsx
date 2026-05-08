import { MARINAS } from '@/lib/constants';

export default function MarinasList() {
  return (
    <div className="grid border-t border-navy/10 sm:grid-cols-2 lg:grid-cols-3">
      {MARINAS.map((marina) => (
        <div
          key={marina}
          className="flex items-center gap-4 border-b border-r border-navy/10 bg-white px-6 py-7 transition-colors hover:bg-sand-100"
        >
          <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-navy text-gold-light">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="text-[15px] font-medium text-navy">{marina}</span>
        </div>
      ))}
    </div>
  );
}

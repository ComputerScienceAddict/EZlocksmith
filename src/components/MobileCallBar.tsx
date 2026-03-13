"use client";

export default function MobileCallBar() {
  return (
    <a
      href="tel:+16196748833"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-center gap-2 bg-brand-red text-white py-4 font-bold text-lg shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-area-pb select-none active:bg-red-700"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call 619-674-8833
    </a>
  );
}

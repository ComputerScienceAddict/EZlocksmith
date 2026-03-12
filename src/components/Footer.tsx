"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Red accent bar */}
      <div className="bg-brand-red py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/90 font-medium text-base sm:text-lg text-center sm:text-left">Ready to call?</p>
          <a
            href="tel:+16195551234"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] bg-white text-brand-red px-8 py-3 font-bold text-lg sm:text-xl rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
          >
            619-555-1234
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-neutral-950 py-10 sm:py-12 px-4 sm:px-6 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-neutral-800">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 sm:p-2 shrink-0">
                <Image
                  src="/logo.png"
                  alt="EZ Locksmith"
                  width={100}
                  height={32}
                  className="h-5 sm:h-6 w-auto object-contain"
                />
              </div>
              <span className="text-white font-bold text-base sm:text-lg">EZ Locksmith</span>
            </Link>
            <div className="flex items-center gap-4 sm:gap-6 text-neutral-400 text-sm flex-wrap justify-center md:justify-end">
              <span>San Diego County</span>
              <span className="text-brand-red font-semibold">24/7</span>
            </div>
          </div>
          <p className="mt-6 text-neutral-500 text-sm">
            © {new Date().getFullYear()} EZ Locksmith
          </p>
        </div>
      </div>
    </footer>
  );
}

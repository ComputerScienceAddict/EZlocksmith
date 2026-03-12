"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="EZ Locksmith"
              width={140}
              height={44}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="hidden sm:inline font-bold text-brand-black text-base tracking-tight">
              EZ Locksmith
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-neutral-600 hover:text-brand-black hover:bg-neutral-100 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:+16195551234"
            className="hidden md:inline-flex items-center bg-brand-red text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
          >
            619-555-1234
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-neutral-600 hover:bg-neutral-100 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+16195551234"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 block text-center bg-brand-red text-white py-3 rounded-lg font-bold"
              >
                619-555-1234
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

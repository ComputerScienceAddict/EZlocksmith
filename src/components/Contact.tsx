"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function Contact() {
  const { ref, visible } = useScrollFadeIn(0.15);

  return (
    <section ref={ref} id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-neutral-100">
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-4">
          Need Help?
        </h2>
        <p className="text-neutral-600 text-base sm:text-lg mb-6 sm:mb-8">
          San Diego County &middot; Available 24/7
        </p>
        <a
          href="tel:+16196748833"
          className="inline-flex items-center justify-center w-full sm:w-auto min-h-[52px] sm:min-h-[56px] bg-brand-red text-white px-6 sm:px-10 py-3.5 sm:py-4 font-bold text-lg sm:text-2xl rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors select-none"
        >
          619-674-8833
        </a>
      </div>
    </section>
  );
}

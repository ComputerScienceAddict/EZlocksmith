"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function Contact() {
  const { ref, visible } = useScrollFadeIn(0.15);

  return (
    <section ref={ref} id="contact" className="py-24 px-6 bg-neutral-100">
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-4">
          Need Help?
        </h2>
        <p className="text-neutral-600 text-lg mb-8">
          San Diego County &middot; Available 24/7
        </p>
        <a
          href="tel:+16195551234"
          className="inline-block bg-brand-red text-white px-10 py-4 font-bold text-2xl rounded-xl hover:bg-red-700 transition-colors"
        >
          619-555-1234
        </a>
      </div>
    </section>
  );
}

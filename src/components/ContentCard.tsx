"use client";

import { useRef, useState, useEffect } from "react";

export default function ContentCard() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-y border-neutral-200"
    >
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black tracking-tight mb-4 sm:mb-6">
          Locked out?
        </h2>
        <p className="text-neutral-600 text-lg sm:text-xl md:text-2xl">
          We come to you. Fast service across San Diego County.
        </p>
      </div>
    </section>
  );
}

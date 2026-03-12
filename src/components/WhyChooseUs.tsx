"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const benefits = [
  { label: "Licensed", detail: "California certified" },
  { label: "Fast", detail: "ETA when you call" },
  { label: "Upfront", detail: "Quote before we start" },
  { label: "24/7", detail: "Always available" },
];

export default function WhyChooseUs() {
  const { ref, visible } = useScrollFadeIn(0.15);

  return (
    <section id="why-us" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 bg-neutral-950">
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-8 sm:mb-12 text-center">
          Why <span className="text-brand-red">EZ</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="text-center py-4 md:py-0">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                {b.label}
              </p>
              <p className="text-neutral-500 text-xs sm:text-sm">{b.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

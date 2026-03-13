"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const services = [
  { name: "Residential", desc: "Locks, rekeys, deadbolts" },
  { name: "Commercial", desc: "Business doors, master keys" },
  { name: "Automotive", desc: "Keys, programming, lockouts" },
];

export default function Services() {
  const { ref, visible } = useScrollFadeIn(0.15);

  return (
    <section id="services" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-8 sm:mb-12 text-center">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-10 md:gap-12">
          {services.map((service, i) => (
            <div key={i} className="text-center sm:text-left py-6 sm:py-0 border-b border-neutral-200 last:border-b-0 first:pt-0 last:pb-0">
              <h3 className="text-xl font-bold text-brand-black mb-2">
                {service.name}
              </h3>
              <p className="text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

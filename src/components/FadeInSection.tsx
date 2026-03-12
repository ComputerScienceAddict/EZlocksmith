"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollFadeIn(0.15);

  return (
    <section ref={ref} className={className}>
      <div
        className={`transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

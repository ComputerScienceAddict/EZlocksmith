"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    alt: "Residential Locksmith San Diego",
  },
  {
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=600&fit=crop",
    alt: "Automotive Locksmith San Diego",
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=600&fit=crop",
    alt: "Safe Locksmith San Diego",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900">
            LOCKSMITH SERVICES
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="aspect-square relative rounded-2xl overflow-hidden bg-slate-200">
            <Image
              key={activeIndex}
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === activeIndex ? "bg-primary-500" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

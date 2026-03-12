"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-44 px-4 sm:px-6 min-h-[min(560px,100svh)] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950/95" />
      
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-red" />
      
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Logo - big and centered at top */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="EZ Locksmith"
            width={280}
            height={90}
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain drop-shadow-lg"
            priority
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
          />
        </div>
        
        <p className="text-brand-red font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
          San Diego County
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 sm:mb-8">
          <span className="text-brand-red">EZ</span> Locksmith
        </h1>
        
        <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-xl mx-auto">
          Fast. Licensed. 24/7.
        </p>
        
        <a
          href="tel:+16196748833"
          className="inline-flex items-center justify-center w-full sm:w-auto min-h-[56px] bg-brand-red text-white px-8 sm:px-12 py-4 sm:py-5 font-bold text-xl sm:text-2xl hover:bg-red-700 active:bg-red-800 transition-all duration-200 rounded-xl sm:hover:scale-105"
        >
          <span>619-674-8833</span>
        </a>
      </div>
    </section>
  );
}

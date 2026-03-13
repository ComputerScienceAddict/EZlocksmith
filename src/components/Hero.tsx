"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-6 sm:px-6 min-h-[min(100dvh,680px)] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl">
        <Image
          src="/logo.png"
          alt="E.Z. Keys Locksmith"
          width={320}
          height={100}
          className="w-[85vw] max-w-[320px] sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
          priority
          sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
        />
      </div>
    </section>
  );
}

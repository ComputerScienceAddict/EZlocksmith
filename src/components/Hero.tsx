"use client";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-44 px-6 min-h-[560px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950/95" />
      
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-red" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-brand-red font-bold text-sm tracking-widest uppercase mb-6">
          San Diego County
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8">
          <span className="text-brand-red">EZ</span> Locksmith
        </h1>
        
        <p className="text-neutral-400 text-xl md:text-2xl mb-12 max-w-xl mx-auto">
          Fast. Licensed. 24/7.
        </p>
        
        <a
          href="tel:+16195551234"
          className="inline-flex items-center gap-3 bg-brand-red text-white px-12 py-5 font-bold text-2xl hover:bg-red-700 transition-all duration-200 rounded-xl hover:scale-105"
        >
          <span>619-555-1234</span>
        </a>
      </div>
    </section>
  );
}

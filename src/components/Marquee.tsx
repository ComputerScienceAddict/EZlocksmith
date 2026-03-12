"use client";

interface MarqueeProps {
  text: string;
  className?: string;
}

export default function Marquee({ text, className = "" }: MarqueeProps) {
  const repeat = 6;
  const content = Array(repeat).fill(text).join(" • ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-marquee inline-block text-white text-lg md:text-xl font-medium uppercase tracking-wider">
        <span className="inline-block pr-8">{content}</span>
        <span className="inline-block pr-8">{content}</span>
      </div>
    </div>
  );
}

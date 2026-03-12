import Image from "next/image";
import Link from "next/link";

export default function CarKeySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=500&fit=crop"
              alt="Car key replacement San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
              Car Key Replacement
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Did you lose your car keys? No problem! We can replace yours on the same day! We will drive to your location and cut a brand new car key and we can even program it!
            </p>
            <p className="text-slate-600 mb-8">
              We work with all makes and models. Locked out of your vehicle? Our mobile units are ready to assist you quickly.
            </p>
            <Link
              href="tel:+16195551234"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

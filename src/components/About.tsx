import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
              About Us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Within our years of experience in the locksmith industry we picked only the best people for our team, who undergo rigorous training to meet your needs.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our technicians are trained so that they understand the importance of your security and respond with the professionalism and expertise you deserve. We proudly serve San Diego County with reliable, trustworthy locksmith services.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=450&fit=crop"
              alt="Professional locksmith San Diego"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

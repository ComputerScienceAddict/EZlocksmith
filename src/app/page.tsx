import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ContentCard from "@/components/ContentCard";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <section className="bg-neutral-900 py-6 overflow-hidden flex items-center">
        <Marquee text="24/7 Emergency Service • San Diego County • Call 619-555-1234" />
      </section>
      <ContentCard />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}

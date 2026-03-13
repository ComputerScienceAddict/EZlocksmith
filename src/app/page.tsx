import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ContentCard from "@/components/ContentCard";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden pb-20 md:pb-0">
      <Header />
      <Hero />
      <section className="bg-neutral-900 py-4 sm:py-6 overflow-hidden flex items-center px-4 sm:px-6">
        <Marquee text="24/7 Emergency Service • San Diego County • Call 619-674-8833" />
      </section>
      <ContentCard />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <MobileCallBar />
    </main>
  );
}

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PackageCard } from "@/components/PackageCard";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="packages">
        <PackageCard />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;

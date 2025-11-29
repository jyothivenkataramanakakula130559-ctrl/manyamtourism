import { Hero } from "@/components/Hero";
import { PackageCard } from "@/components/PackageCard";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PackageCard />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";
import { Phone } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking the Gudisa 1 Night Package. Can you provide more details?");
    window.open(`https://wa.me/919392439935?text=${message}`, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground font-serif">
          Manyam Tourism
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
          Experience the beauty of Maredumilli with our exclusive travel packages
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Book on WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-foreground/20 hover:bg-accent px-8 py-6 text-lg"
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

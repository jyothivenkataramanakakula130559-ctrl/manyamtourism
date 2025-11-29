import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone } from "lucide-react";
import gudisaImage from "@/assets/gudisa.jpg";
import campingImage from "@/assets/camping.jpg";

const inclusions = [
  "Vehicle (Maredumilli to Maredumilli)",
  "Accommodation - Camping",
  "Food - 1 Dinner",
  "Complimentary - South Indian Breakfast",
  "Campfire",
  "Foldable Chairs & Beds",
  "Sound Box (Bluetooth Speaker)",
  "Mineral Water"
];

const exclusions = [
  "Entry tickets not included"
];

export const PackageCard = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I want to book the Gudisa 1 Night Package.\n\nPackage Details:\n- Pick-up: Maredumilli\n- Duration: 1 Night\n\nPlease confirm availability and booking details."
    );
    window.open(`https://wa.me/919392439935?text=${message}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-foreground">
            Our Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the stunning Gudisa Hill Station with our carefully curated package
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl border-border/50">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img 
                src={gudisaImage} 
                alt="Gudisa Hill Station" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div>
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary text-primary-foreground">Featured Package</Badge>
                </div>
                <CardTitle className="text-3xl font-serif">Gudisa 1 Night Package</CardTitle>
                <div className="flex items-center justify-between">
                  <CardDescription className="text-base">
                    Pick-up Location: Maredumilli
                  </CardDescription>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">₹599/-</div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src={campingImage} 
                    alt="Camping Experience" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Package Includes:</h3>
                  <ul className="space-y-2">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-foreground">Payment Terms:</h4>
                  <p className="text-sm text-foreground/70">
                    50% payment when booking, remaining 50% on first day of package
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    * {exclusions[0]}
                  </p>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book on WhatsApp
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

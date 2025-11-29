import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QRCode } from "./QRCode";

export const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch for bookings and inquiries
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          <Card className="border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
              <a 
                href="tel:+919392439935" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 93924 39935
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground">
                Maredumilli, Andhra Pradesh
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
              <Button
                variant="link"
                className="text-muted-foreground hover:text-primary p-0 h-auto"
                onClick={() => window.open('https://wa.me/919392439935', '_blank')}
              >
                Chat with us
              </Button>
            </CardContent>
          </Card>

          <QRCode />
        </div>
      </div>
    </section>
  );
};

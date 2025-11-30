import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary-foreground/90 mb-2 font-semibold">
          Manyam Tourism - Travels & Restaurants
        </p>
        <p className="text-secondary-foreground/70 text-sm">
          © {new Date().getFullYear()} Manyam Tourism. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <a
            href="https://www.instagram.com/maredumilli_manyam_tourism"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-sm">@maredumilli_manyam_tourism</span>
          </a>
        </div>
        <p className="text-secondary-foreground/60 text-xs mt-3">
          Follow Maredumilli | Explore Gudisa Hill Station
        </p>
      </div>
    </footer>
  );
};

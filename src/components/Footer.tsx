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
        <p className="text-secondary-foreground/60 text-xs mt-4">
          Follow Maredumilli | Explore Gudisa Hill Station
        </p>
      </div>
    </footer>
  );
};

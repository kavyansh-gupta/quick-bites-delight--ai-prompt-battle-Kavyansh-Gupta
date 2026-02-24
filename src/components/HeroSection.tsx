import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/30" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-28 md:py-40">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Delicious Food,<br />Delivered Fast
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            Savor every bite with Quick Bites — fresh ingredients, bold flavors, and lightning-fast delivery right to your door.
          </p>
          <a href="#categories">
            <Button size="lg" className="rounded-full text-base px-8 mt-2 bg-primary hover:bg-primary/90">
              Browse Categories
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

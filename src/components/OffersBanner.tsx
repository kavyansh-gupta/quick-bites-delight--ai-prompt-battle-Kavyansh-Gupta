import { Button } from "@/components/ui/button";

const OffersBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80"
            alt="Special pizza offer"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80 flex items-center">
            <div className="px-8 md:px-16 space-y-4 max-w-lg">
              <span className="bg-primary-foreground text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Limited Time
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
                Buy 1 Get 1 Free on All Pizzas!
              </h2>
              <p className="text-primary-foreground/90 text-sm md:text-base">
                This weekend only — grab your favorite pizza and get another one absolutely free.
              </p>
              <Button variant="secondary" size="lg" className="rounded-full font-semibold">
                View Offers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;

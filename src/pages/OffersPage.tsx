import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offers = [
  { title: "Buy 1 Get 1 Free Pizzas", desc: "This weekend only! Order any pizza and get the second one free.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80", badge: "Weekend Special" },
  { title: "20% Off All Burgers", desc: "Every Tuesday, enjoy 20% off our entire burger menu.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", badge: "Taco Tuesday" },
  { title: "Free Dessert with Orders $25+", desc: "Spend $25 or more and get a complimentary dessert of your choice.", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80", badge: "Sweet Deal" },
  { title: "Happy Hour Drinks 50% Off", desc: "From 4–7 PM daily, all drinks are half price.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80", badge: "Happy Hour" },
];

const OffersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Hot <span className="text-primary">Offers</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.title} className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col justify-end p-6">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mb-2 uppercase tracking-wide">
                  {offer.badge}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground">{offer.title}</h3>
                <p className="text-primary-foreground/80 text-sm mt-1">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OffersPage;

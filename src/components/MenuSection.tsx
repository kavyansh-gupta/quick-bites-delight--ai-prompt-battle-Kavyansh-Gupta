import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Classic Cheeseburger", desc: "Juicy beef patty with cheddar, lettuce & tomato", price: "$8.99", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80" },
  { name: "Margherita Pizza", desc: "Fresh mozzarella, basil & San Marzano tomatoes", price: "$12.99", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
  { name: "Caesar Salad", desc: "Crisp romaine, parmesan & our house dressing", price: "$7.49", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80" },
  { name: "Chocolate Lava Cake", desc: "Warm molten center with vanilla ice cream", price: "$6.99", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80" },
  { name: "Creamy Alfredo Pasta", desc: "Fettuccine in rich parmesan cream sauce", price: "$11.49", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80" },
  { name: "Berry Smoothie", desc: "Mixed berries blended with yogurt & honey", price: "$5.49", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80" },
];

const MenuSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-primary">Menu</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                  <span className="text-primary font-bold text-lg whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                <Button size="sm" className="rounded-full w-full mt-2">
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

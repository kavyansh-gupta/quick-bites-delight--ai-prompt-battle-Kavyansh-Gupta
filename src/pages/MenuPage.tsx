import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const menuData = {
  Burgers: [
    { name: "Classic Cheeseburger", price: "$8.99", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80" },
    { name: "BBQ Bacon Burger", price: "$10.99", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80" },
    { name: "Mushroom Swiss Burger", price: "$9.99", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80" },
  ],
  Pizza: [
    { name: "Margherita", price: "$12.99", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    { name: "Pepperoni", price: "$13.99", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80" },
    { name: "Veggie Supreme", price: "$14.49", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
  ],
  Salads: [
    { name: "Caesar Salad", price: "$7.49", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80" },
    { name: "Greek Salad", price: "$7.99", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", price: "$6.99", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80" },
    { name: "Tiramisu", price: "$7.49", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80" },
  ],
};

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Full <span className="text-primary">Menu</span>
        </h1>
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-secondary">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.name} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <h3 className="font-bold text-foreground">{item.name}</h3>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;

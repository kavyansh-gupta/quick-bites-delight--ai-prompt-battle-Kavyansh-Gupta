import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import MenuSection from "@/components/MenuSection";
import OffersBanner from "@/components/OffersBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <MenuSection />
        <OffersBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

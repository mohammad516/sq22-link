import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import CategoriesSection from "@/components/CategoriesSection";
import ClientsCarousel from "@/components/ClientsCarousel";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <CategoriesSection />
      <ClientsCarousel />
      <Footer />
    </main>
  );
}
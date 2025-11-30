import Navbar from "@/components/Navbar";
import AboutPage from "@/components/About";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
}
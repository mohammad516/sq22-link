import Navbar from "@/components/Navbar";
import Client from "@/components/Client";
import Footer from "@/components/Footer";

export default function ClientPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Client />
      <Footer />
    </main>
  );
}

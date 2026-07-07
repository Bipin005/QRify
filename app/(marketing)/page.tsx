import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import QRGrid from "@/components/home/QRGrid";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";

export default function MarketingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <QRGrid />
        <Features />
      </main>

      <Footer />
    </>
  );
}
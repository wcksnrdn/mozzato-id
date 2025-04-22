
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FeaturedProductsSection from "@/components/featuredproducts/FeaturedProducts";

export const metadata = {
  title: "Mozatto",
  description: "Stay Cheesy, Strectch Easy!",
};

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <FeaturedProductsSection />
    </main>
  );
}

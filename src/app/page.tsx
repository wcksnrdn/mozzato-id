
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FeaturedProductsSection from "@/components/featuredproducts/FeaturedProducts";
import WhyChooseUs from "@/components/whychooseus/WhyChooseUs";
import TestimonialSection from "@/components/testimonial/Testimonial";
import FAQSection from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";

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
      <WhyChooseUs />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

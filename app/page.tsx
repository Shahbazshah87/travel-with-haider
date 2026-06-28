
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import AdventureVideos from "@/components/AdventureVideos";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Destinations */}
      <Destinations />

      {/* Tour Packages */}
      <Packages />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Travel Videos */}
      <AdventureVideos />

      {/* Customer Reviews */}
      <Testimonials />

      {/* Gallery */}
      <Gallery />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </>
  );
}


import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "ZIU Infotech | Professional IT Solutions - Web, Mobile & AI Development";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ZIU Infotech delivers high-quality web development, mobile apps, and AI solutions. WordPress, Laravel, Flutter & more. Transform your business with our professional IT services.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "ZIU Infotech delivers high-quality web development, mobile apps, and AI solutions. WordPress, Laravel, Flutter & more. Transform your business with our professional IT services.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Professional IT Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Building Digital
            <br />
            <span className="gradient-text">Excellence</span> Together
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Transform your business with modern, scalable, and performance-driven 
            websites and applications tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="glow" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Service Icons */}
          <div className="flex items-center justify-center gap-8 md:gap-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border/50 flex items-center justify-center group hover:border-primary/50 transition-colors duration-300">
                <Code2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs text-muted-foreground">Web Dev</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border/50 flex items-center justify-center group hover:border-primary/50 transition-colors duration-300">
                <Smartphone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs text-muted-foreground">Mobile Apps</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border/50 flex items-center justify-center group hover:border-primary/50 transition-colors duration-300">
                <Brain className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs text-muted-foreground">AI Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

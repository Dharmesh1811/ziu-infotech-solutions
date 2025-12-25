import { 
  Users, 
  Code2, 
  Palette, 
  Clock, 
  DollarSign, 
  HeadphonesIcon,
  CheckCircle2
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Experienced Freelancing Team",
      description: "Our team brings years of diverse experience across multiple technologies and industries."
    },
    {
      icon: Code2,
      title: "Professional & Clean Code",
      description: "We follow best practices and coding standards to ensure maintainable, scalable solutions."
    },
    {
      icon: Palette,
      title: "Modern UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and engagement."
    },
    {
      icon: Clock,
      title: "On-Time Project Delivery",
      description: "We respect deadlines and ensure timely delivery without compromising quality."
    },
    {
      icon: DollarSign,
      title: "Affordable & Transparent Pricing",
      description: "Competitive rates with no hidden costs. You know exactly what you're paying for."
    },
    {
      icon: HeadphonesIcon,
      title: "Long-Term Technical Support",
      description: "We don't just deliver and leave. We provide ongoing support for your success."
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Success is
              <br />
              <span className="gradient-text">Our Priority</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We combine creativity, technology, and strategy to build digital solutions 
              that help businesses grow online. Whether you are a startup, small business, 
              or enterprise, ZIU Infotech ensures reliable support and professional 
              execution from idea to launch.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {["Enterprise-level solutions", "Flexible engagement models", "Dedicated project managers"].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-5 group hover:bg-card/70 transition-all duration-300 glow-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

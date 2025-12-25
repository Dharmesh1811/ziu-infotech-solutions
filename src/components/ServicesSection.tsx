import { 
  Globe, 
  Code, 
  Brain, 
  Smartphone, 
  Wrench,
  Database,
  Shield,
  Zap
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "CMS & Business Websites",
      description: "Professional WordPress, corporate websites, portfolios with SEO-friendly & responsive design.",
      features: ["WordPress Development", "Corporate Websites", "Portfolio Sites", "SEO Optimization"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Code,
      title: "Custom Web Development",
      description: "PHP and Laravel solutions with secure admin panels and comprehensive API integrations.",
      features: ["PHP Development", "Laravel Framework", "Admin Panels", "API Integration"],
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Intelligent web applications with chatbots, automation tools, and smart dashboards.",
      features: ["AI Applications", "Chatbots", "Automation Tools", "Smart Dashboards"],
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Flutter apps for Android & iOS with high-performance UI/UX and backend integration.",
      features: ["Flutter Apps", "Cross-Platform", "UI/UX Design", "Backend Integration"],
      color: "from-orange-500 to-amber-400"
    },
    {
      icon: Wrench,
      title: "Professional Services",
      description: "Website maintenance, performance optimization, security updates, and hosting support.",
      features: ["Maintenance", "Optimization", "Bug Fixing", "Hosting Support"],
      color: "from-rose-500 to-red-400"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Secure database design, optimization, and management with MySQL expertise.",
      features: ["MySQL", "Database Design", "Optimization", "Data Security"],
      color: "from-indigo-500 to-violet-400"
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Specialities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End Development
            <br />
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive digital solutions with a professional approach, 
            from concept to deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 glow-border"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-lg">Ready to Start?</h4>
              <p className="text-muted-foreground text-sm">Let's discuss your project requirements</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(187_92%_50%/0.4)] hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

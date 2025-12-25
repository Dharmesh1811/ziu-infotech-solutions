import { Target, Eye, Users, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section id="about" className="py-24 relative section-glow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional IT Solutions
              <br />
              <span className="gradient-text">Driven by Passion</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              ZIU Infotech is a professional IT solutions company driven by a passionate 
              group of skilled freelancers delivering high-quality digital products. We 
              specialize in creating modern, scalable, and performance-driven websites 
              and applications tailored to business needs.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To deliver innovative, secure, and user-friendly digital solutions 
                    that add real value to our clients' businesses.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To become a trusted global IT partner by providing cutting-edge 
                    technology solutions with honesty, quality, and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center glow-border hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <Award className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

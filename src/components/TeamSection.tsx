import { Code, Smartphone, Brain, Palette, Database } from "lucide-react";

const TeamSection = () => {
  const expertise = [
    { icon: Code, label: "Web Development", description: "Full-stack web solutions" },
    { icon: Smartphone, label: "Mobile App Development", description: "Cross-platform apps" },
    { icon: Brain, label: "AI Solutions", description: "Intelligent automation" },
    { icon: Palette, label: "UI/UX Design", description: "Beautiful interfaces" },
    { icon: Database, label: "Backend & Database", description: "Scalable architecture" },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-400/5" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                Our Team
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Powered by
                <span className="gradient-text"> Professionals</span>
              </h2>
              <p className="text-muted-foreground">
                ZIU Infotech is powered by a group of professional freelancers 
                working collaboratively to deliver enterprise-level solutions.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-background/50 backdrop-blur-sm rounded-xl p-4 text-center group hover:bg-background/70 transition-all duration-300 border border-border/30 hover:border-primary/30"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Team Values */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center">
              {["Flexibility", "Dedication", "Quality", "Innovation"].map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

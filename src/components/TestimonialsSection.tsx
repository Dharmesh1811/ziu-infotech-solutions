import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Business Owner",
      content: "ZIU Infotech delivered a highly professional website for my business. Excellent design and fast delivery.",
      rating: 5,
      avatar: "RM"
    },
    {
      name: "Sneha Patel",
      role: "Startup Founder",
      content: "Their Laravel work is clean and secure. The team understands requirements very well.",
      rating: 5,
      avatar: "SP"
    },
    {
      name: "Amit Shah",
      role: "Tech Entrepreneur",
      content: "Great experience working with ZIU Infotech. Their Flutter app solution exceeded our expectations.",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Neha Desai",
      role: "Marketing Director",
      content: "Reliable team, professional communication, and quality output. Highly recommended.",
      rating: 5,
      avatar: "ND"
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02]" />
      
      {/* Decorative Quote */}
      <div className="absolute top-20 right-20 opacity-5">
        <Quote className="w-64 h-64 text-primary" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Client Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 flex flex-col glow-border group hover:scale-105 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50">
          <div className="text-muted-foreground font-heading font-semibold text-lg">Trusted by</div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Startups", "SMBs", "Enterprises", "Agencies"].map((type, index) => (
              <span key={index} className="text-muted-foreground font-medium">{type}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

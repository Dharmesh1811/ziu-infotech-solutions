import { ArrowUp, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "WordPress Development",
    "Laravel Solutions",
    "Flutter Apps",
    "AI Integration",
    "Web Maintenance",
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/50 relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">Z</span>
              </div>
              <span className="font-heading font-bold text-xl">
                ZIU <span className="gradient-text">Infotech</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Professional IT Solutions company delivering high-quality digital products 
              with creativity, technology, and strategy.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:info@ziuinfotech.com"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.ziuinfotech.com"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span>info@ziuinfotech.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 text-primary" />
                <span>www.ziuinfotech.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} ZIU Infotech. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors duration-200 text-primary"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

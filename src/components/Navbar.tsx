import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCrmPage = location.pathname === "/crm";

  const navLinks = [
    { name: "Home", href: "#home", isRoute: false },
    { name: "About", href: "#about", isRoute: false },
    { name: "Services", href: "#services", isRoute: false },
    { name: "Why Us", href: "#why-us", isRoute: false },
    { name: "Reviews", href: "#reviews", isRoute: false },
    { name: "Contact", href: "#contact", isRoute: false },
    { name: "CRM", href: "http://localhost:5173/", isRoute: true, isExternal: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex flex-col items-center justify-center px-1 py-1"
          aria-label="ZIU Infotech home"
        >
          <img src="/ziu_logo.png" alt="ZIU" className="h-7 w-auto object-contain" />
          <span className="mt-0.5 font-heading text-sm font-medium leading-none text-primary">
            Infotech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-semibold border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/10 hover:border-primary/60" target="_blank"
              >
                {link.name}
              </Link>
            ) : link.isExternal ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-semibold border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/10 hover:border-primary/60"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={isCrmPage ? `/${link.href}` : link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            )
          )}
          <a href="#contact">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary font-semibold text-sm py-2 border border-primary/30 px-3 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : link.isExternal ? (
                <Link
                  key={link.name}
                  to={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm py-2 border border-primary/30 px-3 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={isCrmPage ? `/${link.href}` : link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  target="_blank"
                >
                  {link.name}
                </a>
              )
            )}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="hero" size="sm" className="mt-2 w-full">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

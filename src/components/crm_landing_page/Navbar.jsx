import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/ziu_crm_logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/crm" className="flex items-center gap-2">
              <img src={logo} alt="Ziu CRM Logo" className="h-10 sm:h-12 w-auto object-contain rounded" />
            </a>
          </div>
 
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="http://ziucrm.ziuinfotech.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sign In
            </a>
            <a 
              href="http://ziucrm.ziuinfotech.in/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-gray-700">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 text-gray-700">
                How It Works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-gray-700">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left py-2 text-gray-700">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700">
                Contact
              </button>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <a 
                  href="http://ziucrm.ziuinfotech.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-gray-700 border border-gray-300 rounded-lg text-center"
                >
                  Sign In
                </a>
                <a 
                  href="http://ziucrm.ziuinfotech.in/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

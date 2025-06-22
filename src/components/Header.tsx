import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top contact bar */}
      <div className="bg-viking-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:8017878893" className="flex items-center space-x-1 hover:text-viking-red transition-colors">
              <Phone size={14} />
              <span>(801) 787-8893</span>
            </a>
            <a href="mailto:andreas@builtbyvikings.com" className="hidden sm:flex items-center space-x-1 hover:text-viking-red transition-colors">
              <Mail size={14} />
              <span>andreas@builtbyvikings.com</span>
            </a>
          </div>
          <div className="text-xs">
            <span className="font-semibold">20+ Years Experience</span> | Licensed & Insured
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/viking.jpg" 
              alt="Viking Construction Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-viking-gray hover:text-viking-black font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-viking-gray hover:text-viking-black font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-viking-gray hover:text-viking-black font-medium transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-viking-gray hover:text-viking-black font-medium transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-viking-gray hover:text-viking-black font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-viking-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-viking-red/90 transition-all transform hover:scale-105"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-viking-black hover:text-viking-red transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-viking-gray hover:text-viking-black font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-viking-gray hover:text-viking-black font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-viking-gray hover:text-viking-black font-medium transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-viking-gray hover:text-viking-black font-medium transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-viking-gray hover:text-viking-black font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-viking-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-viking-red/90 transition-all text-center"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
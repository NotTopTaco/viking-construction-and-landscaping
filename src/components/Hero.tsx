import React from 'react';
import { Phone, Star, Shield, Award, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CounterDisplay from './CounterDisplay';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Construction site background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center text-white mt-20 sm:mt-0">
        <div>
          {/* Main Headline */}
          <AnimatedSection animation="slide-up" delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              UTAH'S PREMIER
              <br />
              <span className="text-viking-red">CONSTRUCTION</span>
              <br />
              & LANDSCAPING EXPERTS
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
            <CounterDisplay endValue={20} suffix="+" /> Years of Perfection | Rain or Shine, We Get It Done
          </p>

          {/* Trust Indicators */}
          <AnimatedSection animation="fade-in" delay={700}>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                <Award className="text-viking-red" size={20} />
                <span className="font-semibold">
                  <CounterDisplay endValue={20} suffix="+" /> Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                <Star className="text-yellow-400" size={20} />
                <span className="font-semibold">
                  <CounterDisplay endValue={100} suffix="%" /> Satisfaction
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                <Shield className="text-viking-blue" size={20} />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                <MapPin className="text-green-400" size={20} />
                <span className="font-semibold">All of Utah</span>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="scale-in" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToContact}
                className="bg-viking-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-viking-red/90 transition-all transform hover:scale-105 shadow-lg animate-button-pulse"
              >
                GET FREE ESTIMATE
              </button>
              <a 
                href="tel:8017878893"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-viking-black transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>CALL NOW: (801) 787-8893</span>
              </a>
            </div>
          </AnimatedSection>

          {/* Tagline */}
          <AnimatedSection animation="fade-in" delay={1100}>
            <p className="mt-8 text-lg font-medium">
              "Rain or shine, Viking will get it done"
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
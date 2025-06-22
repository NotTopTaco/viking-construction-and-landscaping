import React from 'react';
import { Home, Building, Hammer, TreePine, Droplets, Snowflake, Wrench, Palette } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CounterDisplay from './CounterDisplay';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Custom Home Construction",
      description: "From foundation to finish, we build your dream home with precision and quality craftsmanship.",
      features: ["Custom Design", "Quality Materials", "Timely Completion", "Warranty Included"]
    },
    {
      icon: <Building size={40} />,
      title: "Commercial Construction",
      description: "Professional commercial building services for businesses of all sizes across Utah.",
      features: ["Project Management", "Licensed Contractors", "Code Compliance", "Budget Control"]
    },
    {
      icon: <Hammer size={40} />,
      title: "Home Additions & Remodels",
      description: "Transform your existing space with expert renovations and thoughtful additions.",
      features: ["Kitchen Remodels", "Bathroom Updates", "Room Additions", "Basement Finishing"]
    },
    {
      icon: <Palette size={40} />,
      title: "Landscape Design & Installation",
      description: "Create stunning outdoor spaces with our comprehensive landscape design services.",
      features: ["Custom Design", "Plant Selection", "Installation", "Maintenance Plans"]
    },
    {
      icon: <TreePine size={40} />,
      title: "Hardscaping",
      description: "Beautiful patios, walkways, retaining walls, and outdoor living spaces.",
      features: ["Patios & Decks", "Retaining Walls", "Walkways", "Outdoor Kitchens"]
    },
    {
      icon: <Droplets size={40} />,
      title: "Irrigation Systems",
      description: "Efficient watering solutions to keep your landscape healthy and beautiful year-round.",
      features: ["Sprinkler Systems", "Drip Irrigation", "Smart Controllers", "Maintenance"]
    },
    {
      icon: <TreePine size={40} />,
      title: "Tree Services",
      description: "Professional tree care including trimming, removal, and health assessments.",
      features: ["Tree Trimming", "Tree Removal", "Stump Grinding", "Health Assessment"]
    },
    {
      icon: <Snowflake size={40} />,
      title: "Snow Removal",
      description: "Reliable snow removal services to keep your property safe and accessible.",
      features: ["Residential Service", "Commercial Plowing", "Salt Application", "24/7 Availability"]
    },
    {
      icon: <Wrench size={40} />,
      title: "Emergency Repairs",
      description: "Fast response for urgent construction and landscaping repair needs.",
      features: ["24/7 Emergency", "Storm Damage", "Quick Response", "Insurance Claims"]
    }
  ];

  const scrollToContact = (serviceName?: string) => {
    const element = document.getElementById('contact');
    if (element) {
      // Add service parameter to URL if provided
      if (serviceName) {
        const url = new URL(window.location.href);
        url.searchParams.set('service', serviceName);
        window.history.pushState({}, '', url.toString());
        console.log('Service parameter set:', serviceName);
        console.log('New URL:', url.toString());
        
        // Dispatch custom event to notify Contact component
        window.dispatchEvent(new CustomEvent('serviceSelected', { 
          detail: { service: serviceName } 
        }));
      }
      
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-viking-black mb-6">
              OUR SERVICES
            </h2>
            <p className="text-xl text-viking-gray max-w-3xl mx-auto">
              From custom construction to complete landscaping solutions, we deliver excellence in every project. 
              No job is too small or too big for our experienced team.
            </p>
          </div>
        </AnimatedSection>

        {/* Project Statistics */}
        <AnimatedSection animation="scale-in" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-viking-red mb-2">
                <CounterDisplay endValue={500} suffix="+" />
              </div>
              <p className="text-viking-gray">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-viking-red mb-2">
                <CounterDisplay endValue={300} suffix="+" />
              </div>
              <p className="text-viking-gray">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-viking-red mb-2">
                <CounterDisplay endValue={20} suffix="+" />
              </div>
              <p className="text-viking-gray">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-viking-red mb-2">
                <CounterDisplay endValue={5} suffix=".0" />
              </div>
              <p className="text-viking-gray">Star Rating</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 150}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 service-card-hover group h-full">
                <div className="text-viking-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-viking-black mb-4">
                  {service.title}
                </h3>
                <p className="text-viking-gray mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-viking-gray">
                      <div className="w-2 h-2 bg-viking-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToContact(service.title)}
                  className="w-full bg-viking-black text-white py-3 rounded-lg font-semibold hover:bg-viking-red transition-all duration-300 transform hover:scale-105"
                >
                  Request Estimate
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Service Areas */}
        <AnimatedSection animation="scale-in">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-viking-black mb-4">
              Service Areas
            </h3>
            <p className="text-viking-gray mb-6">
              We proudly serve Utah County and all surrounding areas throughout Utah and neighboring states.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-viking-gray">
              <span className="bg-gray-100 px-4 py-2 rounded-full hover:bg-viking-red hover:text-white transition-colors duration-300">Utah County</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full hover:bg-viking-red hover:text-white transition-colors duration-300">Salt Lake County</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full hover:bg-viking-red hover:text-white transition-colors duration-300">Davis County</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full hover:bg-viking-red hover:text-white transition-colors duration-300">Weber County</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full hover:bg-viking-red hover:text-white transition-colors duration-300">All of Utah</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full hover:bg-viking-red hover:text-white transition-colors duration-300">Surrounding States</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
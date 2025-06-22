import React from 'react';
import { Shield, Award, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CounterDisplay from './CounterDisplay';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award size={40} />,
      title: "20+ Years Experience",
      description: "Two decades of perfecting our craft and building lasting relationships with clients across Utah."
    },
    {
      icon: <Shield size={40} />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: <Users size={40} />,
      title: "Expert Team",
      description: "Skilled craftsmen and designers committed to delivering exceptional results on every project."
    },
    {
      icon: <Clock size={40} />,
      title: "Reliable Service",
      description: "On-time completion and responsive communication throughout your entire project."
    }
  ];

  const certifications = [
    "Utah State Licensed Contractor",
    "Fully Insured & Bonded",
    "OSHA Safety Certified",
    "Better Business Bureau Member",
    "Landscape Industry Certified",
    "Emergency Response Certified"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-viking-black mb-6">
              ABOUT VIKING CONSTRUCTION
            </h2>
            <p className="text-xl text-viking-gray max-w-3xl mx-auto">
              Built on a foundation of integrity, quality, and customer satisfaction. 
              We're not just contractors – we're your partners in bringing your vision to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Story */}
          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="text-3xl font-bold text-viking-black mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-viking-gray leading-relaxed">
                <p>
                  For over <CounterDisplay endValue={20} suffix="+" className="font-bold text-viking-red" /> years, Viking Construction and Landscaping has been Utah's trusted partner 
                  for construction and landscaping excellence. What started as a small family business has 
                  grown into one of Utah County's most respected construction companies.
                </p>
                <p>
                  Our commitment to perfection and <CounterDisplay endValue={100} suffix="%" className="font-bold text-viking-red" /> customer satisfaction has earned us a reputation 
                  for quality that spans generations of satisfied clients. From custom homes to commercial 
                  buildings, from landscape design to emergency repairs, we approach every project with 
                  the same dedication to excellence.
                </p>
                <p>
                  <strong className="text-viking-black">"Rain or shine, Viking will get it done"</strong> isn't 
                  just our tagline – it's our promise. We understand that your project is important to you, 
                  and we're committed to delivering results that exceed your expectations, no matter the challenges.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Company Image */}
          <AnimatedSection animation="slide-right">
            <div className="relative image-hover">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Viking Construction team at work"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-viking-black/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-black mb-2">
                    <CounterDisplay endValue={20} suffix="+" />
                  </div>
                  <div className="text-lg font-semibold">Years of Excellence</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 200}
            >
              <div className="text-center">
                <div className="text-viking-red mb-4 flex justify-center transform hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-viking-black mb-3">
                  {value.title}
                </h4>
                <p className="text-viking-gray">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Service Area & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Area */}
          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="text-2xl font-bold text-viking-black mb-6 flex items-center">
                <MapPin className="text-viking-red mr-3" size={28} />
                Service Area
              </h3>
              <p className="text-viking-gray mb-6">
                We proudly serve clients throughout Utah and surrounding states, with our primary 
                focus on Utah County where we've built lasting relationships with homeowners and 
                businesses for over two decades.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-viking-black mb-2">Primary Service Area</h4>
                  <ul className="text-sm text-viking-gray space-y-1">
                    <li>• Utah County</li>
                    <li>• Salt Lake County</li>
                    <li>• Davis County</li>
                    <li>• Weber County</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-viking-black mb-2">Extended Coverage</h4>
                  <ul className="text-sm text-viking-gray space-y-1">
                    <li>• All of Utah</li>
                    <li>• Southern Idaho</li>
                    <li>• Western Colorado</li>
                    <li>• Northern Arizona</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection animation="slide-right">
            <div>
              <h3 className="text-2xl font-bold text-viking-black mb-6 flex items-center">
                <CheckCircle className="text-viking-red mr-3" size={28} />
                Licenses & Certifications
              </h3>
              <p className="text-viking-gray mb-6">
                Our commitment to professionalism is backed by proper licensing, insurance, 
                and industry certifications that protect both our team and our clients.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <AnimatedSection
                    key={index}
                    animation="slide-left"
                    delay={index * 150}
                  >
                    <div className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span className="text-viking-gray">{cert}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="scale-in" delay={400}>
          <div className="mt-16 bg-viking-black rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the Viking difference. Contact us today for your free consultation and estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-viking-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-viking-red/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Estimate
              </button>
              <a 
                href="tel:8017878893"
                className="bg-white text-viking-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Call (801) 787-8893
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
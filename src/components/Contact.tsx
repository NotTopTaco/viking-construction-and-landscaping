import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Award, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  'Custom Home Construction',
  'Commercial Construction',
  'Home Additions & Remodels',
  'Landscape Design & Installation',
  'Hardscaping',
  'Irrigation Systems',
  'Tree Services',
  'Snow Removal',
  'Emergency Repairs',
  'Other'
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    timeline: '',
    contactMethod: 'phone'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-select service from URL parameter
  useEffect(() => {
    const checkForServiceParam = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceFromUrl = urlParams.get('service');
      
      console.log('URL params:', window.location.search);
      console.log('Service from URL:', serviceFromUrl);
      console.log('Available services:', services);
      
      if (serviceFromUrl && services.includes(serviceFromUrl)) {
        console.log('Setting service in form:', serviceFromUrl);
        setFormData(prev => ({
          ...prev,
          service: serviceFromUrl
        }));
        
        // Clear the URL parameter after setting it
        const url = new URL(window.location.href);
        url.searchParams.delete('service');
        window.history.replaceState({}, '', url.toString());
      }
    };

    // Check immediately
    checkForServiceParam();

    // Listen for custom serviceSelected event
    const handleServiceSelected = (event: CustomEvent) => {
      const { service } = event.detail;
      console.log('Service selected event received:', service);
      
      if (services.includes(service)) {
        console.log('Setting service in form from event:', service);
        setFormData(prev => ({
          ...prev,
          service: service
        }));
      }
    };

    // Listen for URL changes
    const handlePopState = () => {
      checkForServiceParam();
    };

    window.addEventListener('serviceSelected', handleServiceSelected as EventListener);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('serviceSelected', handleServiceSelected as EventListener);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []); // Empty dependency array since services is now outside component

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Free Estimate Request - ${formData.service}`;
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Needed: ${formData.service}
Preferred Contact Method: ${formData.contactMethod}
Timeline: ${formData.timeline}

Project Description:
${formData.message}
    `;
    
    const mailtoLink = `mailto:andreas@builtbyvikings.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
        timeline: '',
        contactMethod: 'phone'
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-viking-black mb-3">
              GET YOUR FREE ESTIMATE
            </h2>
            <p className="text-lg md:text-xl text-viking-gray max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free consultation and estimate. 
              We'll work with you to bring your vision to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact Form */}
          <AnimatedSection animation="slide-left">
            <div className="flex justify-center h-full">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 w-full max-w-xl flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-bold text-viking-black mb-4">
                  Request Your Free Estimate
                </h3>
                {isSubmitted ? (
                  <div className="text-center py-8 animate-scale-in">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                    <h4 className="text-xl font-bold text-viking-black mb-2">Thank You!</h4>
                    <p className="text-viking-gray">
                      Your estimate request has been sent. We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AnimatedSection animation="slide-left" delay={100}>
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold text-viking-black mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viking-red focus:border-transparent transition-all duration-300 text-sm"
                            placeholder="Your full name"
                          />
                        </div>
                      </AnimatedSection>

                      <AnimatedSection animation="slide-right" delay={150}>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold text-viking-black mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viking-red focus:border-transparent transition-all duration-300 text-sm"
                            placeholder="(801) 123-4567"
                          />
                        </div>
                      </AnimatedSection>
                    </div>

                    <AnimatedSection animation="slide-left" delay={200}>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-viking-black mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viking-red focus:border-transparent transition-all duration-300 text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AnimatedSection animation="slide-left" delay={250}>
                        <div>
                          <label htmlFor="service" className="block text-xs font-semibold text-viking-black mb-1">
                            Service Needed *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viking-red focus:border-transparent transition-all duration-300 text-sm"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection animation="slide-right" delay={300}>
                        <div>
                          <label htmlFor="timeline" className="block text-xs font-semibold text-viking-black mb-1">
                            Project Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viking-red focus:border-transparent transition-all duration-300 text-sm"
                          >
                            <option value="">Select timeline</option>
                            <option value="ASAP">ASAP</option>
                            <option value="Within 1 month">Within 1 month</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="6+ months">6+ months</option>
                            <option value="Just planning">Just planning</option>
                          </select>
                        </div>
                      </AnimatedSection>
                    </div>

                    <AnimatedSection animation="slide-left" delay={350}>
                      <div>
                        <label htmlFor="contactMethod" className="block text-xs font-semibold text-viking-black mb-1">
                          Preferred Contact Method
                        </label>
                        <div className="flex space-x-3">
                          <label className="flex items-center text-sm">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="phone"
                              checked={formData.contactMethod === 'phone'}
                              onChange={handleInputChange}
                              className="mr-2 text-viking-red focus:ring-viking-red"
                            />
                            Phone
                          </label>
                          <label className="flex items-center text-sm">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="email"
                              checked={formData.contactMethod === 'email'}
                              onChange={handleInputChange}
                              className="mr-2 text-viking-red focus:ring-viking-red"
                            />
                            Email
                          </label>
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={400}>
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-viking-black mb-1">
                          Project Description *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-viking-red focus:border-transparent transition-all duration-300 text-sm resize-vertical"
                          placeholder="Please describe your project in detail. Include size, materials, timeline, and any specific requirements..."
                        ></textarea>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="scale-in" delay={450}>
                      <button
                        type="submit"
                        className="w-full bg-viking-red text-white py-3 px-6 rounded-lg font-bold text-base hover:bg-viking-red/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Send size={18} />
                        <span>Send Free Estimate Request</span>
                      </button>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-in" delay={500}>
                      <p className="text-xs text-viking-gray text-center">
                        * Required fields. We'll respond within 24 hours with your free estimate.
                      </p>
                    </AnimatedSection>
                  </form>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="flex justify-center h-full">
              <div className="space-y-4 w-full max-w-xl flex flex-col h-full">
                {/* Contact Info */}
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-base md:text-lg font-bold text-viking-black mb-3">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 group">
                      <div className="bg-viking-red p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-viking-black text-sm">Phone</h4>
                        <a href="tel:8017878893" className="text-viking-gray hover:text-viking-red transition-colors text-sm">
                          (801) 787-8893
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 group">
                      <div className="bg-viking-red p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-viking-black text-sm">Email</h4>
                        <a href="mailto:andreas@builtbyvikings.com" className="text-viking-gray hover:text-viking-red transition-colors text-sm">
                          andreas@builtbyvikings.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 group">
                      <div className="bg-viking-red p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-viking-black text-sm">Service Area</h4>
                        <p className="text-viking-gray text-sm">Utah County & Surrounding Areas</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 group">
                      <div className="bg-viking-red p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-viking-black text-sm">Business Hours</h4>
                        <p className="text-viking-gray text-sm">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
                        <p className="text-xs text-viking-gray mt-1">Emergency services 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators & Service Areas Combined */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Trust Indicators */}
                    <div>
                      <h4 className="font-bold text-viking-black mb-3 flex items-center text-sm">
                        <Shield className="text-viking-red mr-2" size={16} />
                        Why Choose Viking?
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 mr-2" size={14} />
                          <span className="text-xs text-viking-gray">20+ Years Experience</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="text-viking-red mr-2" size={14} />
                          <span className="text-xs text-viking-gray">Licensed & Insured</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2" size={14} />
                          <span className="text-xs text-viking-gray">100% Satisfaction</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Areas */}
                    <div>
                      <h4 className="font-bold text-viking-black mb-3 text-sm">Service Areas</h4>
                      <div className="space-y-1 text-xs text-viking-gray">
                        <div>• Utah County</div>
                        <div>• Salt Lake County</div>
                        <div>• Davis County</div>
                        <div>• Weber County</div>
                        <div>• All of Utah</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="font-semibold text-viking-black mb-3 text-sm">Follow Us</h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.instagram.com/built_by_vikings/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-viking-black text-white p-2 rounded-lg hover:bg-viking-red transition-all duration-300 transform hover:scale-110"
                      aria-label="Instagram (opens in new tab)"
                    >
                      <span className="sr-only">Instagram (opens in new tab)</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com/Viking.Construction.and.Landscaping/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-viking-black text-white p-2 rounded-lg hover:bg-viking-red transition-all duration-300 transform hover:scale-110"
                      aria-label="Facebook (opens in new tab)"
                    >
                      <span className="sr-only">Facebook (opens in new tab)</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
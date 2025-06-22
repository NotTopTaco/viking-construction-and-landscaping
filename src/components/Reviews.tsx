import React from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CounterDisplay from './CounterDisplay';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Provo, UT",
      rating: 5,
      project: "Custom Home Build",
      text: "Viking Construction exceeded our expectations in every way. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was outstanding. Our dream home became a reality thanks to their expertise.",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Orem, UT",
      rating: 5,
      project: "Landscape Design",
      text: "The team transformed our backyard into an absolute paradise. The design was creative, the installation was flawless, and they completed everything on time and within budget. Highly recommend!",
      date: "3 months ago"
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "American Fork, UT",
      rating: 5,
      project: "Kitchen Remodel",
      text: "Professional, reliable, and incredibly skilled. Our kitchen remodel was completed faster than expected with beautiful results. The Viking team was respectful of our home and cleaned up perfectly each day.",
      date: "1 month ago"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Lehi, UT",
      rating: 5,
      project: "Commercial Building",
      text: "As a business owner, I needed a contractor I could trust with my commercial project. Viking delivered exceptional work on time and handled all the complexities professionally. Will definitely use them again.",
      date: "4 months ago"
    },
    {
      id: 5,
      name: "Lisa Martinez",
      location: "Spanish Fork, UT",
      rating: 5,
      project: "Hardscaping",
      text: "Our new patio and retaining wall are absolutely gorgeous! The craftsmanship is top-notch and the design perfectly complements our home. Rain or shine, they really do get it done!",
      date: "2 weeks ago"
    },
    {
      id: 6,
      name: "Robert Wilson",
      location: "Springville, UT",
      rating: 5,
      project: "Home Addition",
      text: "Adding a second story to our home was a big decision, but Viking made the process smooth and stress-free. The quality of work is exceptional and you can't even tell where the old house ends and the addition begins.",
      date: "6 months ago"
    }
  ];

  const stats = [
    { number: 500, label: "Projects Completed", suffix: "+" },
    { number: 20, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Customer Satisfaction", suffix: "%" },
    { number: 4.9, label: "Average Rating", suffix: "/5" }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-viking-black mb-6">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-xl text-viking-gray max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about 
              their experience working with Viking Construction and Landscaping.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 200}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-viking-red mb-2">
                  <CounterDisplay 
                    endValue={stat.number} 
                    suffix={stat.suffix}
                    duration={3500}
                  />
                </div>
                <div className="text-viking-gray font-semibold">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <AnimatedSection
              key={review.id}
              animation="slide-up"
              delay={index * 200}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 service-card-hover h-full">
                {/* Quote Icon */}
                <div className="text-viking-red mb-4">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-yellow-400 fill-current animate-star-fill"
                      style={{ 
                        animationDelay: `${i * 150}ms`,
                        animationDuration: '0.8s'
                      }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-viking-gray mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="border-t pt-4">
                  <div className="font-bold text-viking-black">{review.name}</div>
                  <div className="text-sm text-viking-gray">{review.location}</div>
                  <div className="text-sm text-viking-red font-semibold">{review.project}</div>
                  <div className="text-xs text-viking-gray mt-1">{review.date}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Review Summary */}
        <AnimatedSection animation="scale-in" delay={300}>
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-viking-black mb-4">
              Join Our Satisfied Customers
            </h3>
            <p className="text-viking-gray mb-6">
              Experience the Viking difference for yourself. Contact us today for your free estimate 
              and see why we maintain a 100% customer satisfaction rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-viking-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-viking-red/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Estimate
              </button>
              <a 
                href="tel:8017878893"
                className="bg-viking-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-viking-gray transition-all duration-300 transform hover:scale-105"
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

export default Reviews;
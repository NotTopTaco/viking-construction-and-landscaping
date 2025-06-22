import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential Construction' },
    { id: 'commercial', name: 'Commercial Projects' },
    { id: 'landscaping', name: 'Landscaping' },
    { id: 'hardscaping', name: 'Hardscaping' }
  ];

  const projects = [
    {
      id: 1,
      category: 'residential',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Home Build',
      description: 'Modern 3,500 sq ft custom home with premium finishes'
    },
    {
      id: 2,
      category: 'landscaping',
      image: 'https://static.wixstatic.com/media/555dea_9ad00b05328a4b9ba21493efe4f8db51~mv2.jpg/v1/fill/w_980,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/555dea_9ad00b05328a4b9ba21493efe4f8db51~mv2.jpg',
      title: 'Landscape Transformation',
      description: 'Complete backyard makeover with native plants and irrigation'
    },
    {
      id: 3,
      category: 'commercial',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Office Complex',
      description: '15,000 sq ft commercial office building'
    },
    {
      id: 4,
      category: 'hardscaping',
      image: 'https://images.squarespace-cdn.com/content/v1/630e3fa6fd39705e332ea93b/1672851866772-ITM19EE4XPWT6MR9E311/Outdoor+Design+by+Oz.1.jpeg',
      title: 'Stone Patio & Fire Pit',
      description: 'Natural stone patio with custom fire pit and seating'
    },
    {
      id: 5,
      category: 'residential',
      image: 'https://st.hzcdn.com/simgs/pictures/kitchens/stunning-kitchen-and-whole-house-remodel-from-outdated-to-gorgeous-paper-moon-painting-img~833198da0af5b7c4_4-0707-1-dc21462.jpg',
      title: 'Kitchen Remodel',
      description: 'Complete kitchen renovation with custom cabinetry'
    },
    {
      id: 6,
      category: 'landscaping',
      image: 'https://st.hzcdn.com/simgs/19a1b8f50775dc0b_14-7725/_.jpg',
      title: 'Garden Design',
      description: 'Drought-resistant garden with decorative elements'
    },
    {
      id: 7,
      category: 'commercial',
      image: 'https://thumbs.dreamstime.com/b/image-shows-exterior-modern-retail-store-large-glass-storefront-black-accents-warm-lighting-located-322225849.jpg',
      title: 'Retail Space',
      description: 'Modern retail storefront with custom fixtures'
    },
    {
      id: 8,
      category: 'hardscaping',
      image: 'https://www.bianchibrickyard.com/wp-content/uploads/2023/10/GettyImages-469909496-scaled.jpg',
      title: 'Retaining Wall',
      description: 'Decorative retaining wall with integrated lighting'
    },
    {
      id: 9,
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Home Addition',
      description: 'Two-story addition with seamless integration'
    },
    {
      id: 10,
      category: 'landscaping',
      image: 'https://cdn.cdnparenting.com/articles/2021/06/07171806/360087803.webp',
      title: 'Front Yard Makeover',
      description: 'Complete front yard redesign with curb appeal focus'
    },
    {
      id: 11,
      category: 'hardscaping',
      image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/1/23/0/OA19_Paradise-Restored-Landscaping_Morrow-Hillside-Waterfall_002.jpg.rend.hgtvcom.1280.960.85.suffix/1548264573427.webp',
      title: 'Outdoor Kitchen',
      description: 'Custom outdoor kitchen with stone countertops'
    },
    {
      id: 12,
      category: 'residential',
      image: 'https://progressivedesignbuild.com/wp-content/uploads/2024/10/Primary-Bathroom-Remodel-Naples-FL-2.jpg',
      title: 'Bathroom Renovation',
      description: 'Luxury master bathroom with custom tile work'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-viking-black mb-6">
              OUR WORK
            </h2>
            <p className="text-xl text-viking-gray max-w-3xl mx-auto">
              Explore our portfolio of completed projects showcasing our commitment to quality, 
              craftsmanship, and customer satisfaction across Utah.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="slide-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-viking-red text-white shadow-lg'
                    : 'bg-gray-100 text-viking-gray hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="scale-in"
              delay={index * 150} // Stagger delay for masonry effect
            >
              <div 
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg image-hover">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-viking-red transition-colors z-10 transform hover:scale-110 transition-all duration-300"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-viking-red transition-colors z-10 hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-viking-red transition-colors z-10 hover:scale-110 transition-all duration-300"
              >
                <ChevronRight size={32} />
              </button>

              <img 
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 p-4 rounded-lg animate-slide-up">
                <h3 className="font-bold text-xl mb-2">{filteredProjects[selectedImage].title}</h3>
                <p className="text-sm">{filteredProjects[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
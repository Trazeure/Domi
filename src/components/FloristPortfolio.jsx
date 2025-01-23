import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';

// Principal images imports
import principal1 from '../assets/images/principal1.png';
import principal2 from '../assets/images/principal2.JPG';
import principal3 from '../assets/images/principal3.JPG';
import principal4 from '../assets/images/principal4.PNG';
import principal5 from '../assets/images/principal5.jpg';

// Work images imports
const workImages = {
  funeral1: new URL('../assets/images/funeral1.JPG', import.meta.url).href,
  funeral2: new URL('../assets/images/funeral2.JPG', import.meta.url).href,
  funeral3: new URL('../assets/images/funeral3.JPG', import.meta.url).href,
  gerbera1: new URL('../assets/images/gerbera1.JPG', import.meta.url).href,
  gerbera2: new URL('../assets/images/gerbera2.JPG', import.meta.url).href,
  gerbera3: new URL('../assets/images/gerbera3.JPG', import.meta.url).href,
  happy1: new URL('../assets/images/happy1.jpg', import.meta.url).href,
  happy2: new URL('../assets/images/happy2.jpg', import.meta.url).href,
  happy3: new URL('../assets/images/happy3.PNG', import.meta.url).href,
  happy4: new URL('../assets/images/happy4.PNG', import.meta.url).href,
  happy5: new URL('../assets/images/happy5.PNG', import.meta.url).href,
  happy6: new URL('../assets/images/happy6.PNG', import.meta.url).href,
  happy7: new URL('../assets/images/happy7.PNG', import.meta.url).href,
  happy8: new URL('../assets/images/happy8.PNG', import.meta.url).href,
  happy9: new URL('../assets/images/happy9.PNG', import.meta.url).href,
  happy10: new URL('../assets/images/happy10.PNG', import.meta.url).href,
  happy11: new URL('../assets/images/happy11.JPG', import.meta.url).href,
  box1: new URL('../assets/images/box1.jpg', import.meta.url).href,
  box2: new URL('../assets/images/box2.PNG', import.meta.url).href,
  box3: new URL('../assets/images/box3.PNG', import.meta.url).href,
  box4: new URL('../assets/images/box4.PNG', import.meta.url).href,
  box5: new URL('../assets/images/box5.PNG', import.meta.url).href,
  box6: new URL('../assets/images/box6.jpg', import.meta.url).href,
  box7: new URL('../assets/images/box7.JPG', import.meta.url).href,
  vase1: new URL('../assets/images/vase1.jpeg', import.meta.url).href,
  vase2: new URL('../assets/images/vase2.jpeg', import.meta.url).href,
  vase3: new URL('../assets/images/vase3.jpeg', import.meta.url).href,
  vase4: new URL('../assets/images/vase4.jpeg', import.meta.url).href,
  vase5: new URL('../assets/images/vase5.JPG', import.meta.url).href,
  sunflower1: new URL('../assets/images/sunflower1.JPG', import.meta.url).href,
  sunflower2: new URL('../assets/images/sunflower2.PNG', import.meta.url).href,
  sunflower3: new URL('../assets/images/sunflower3.PNG', import.meta.url).href,
  tulip1: new URL('../assets/images/tulip1.JPG', import.meta.url).href,
  tulip2: new URL('../assets/images/tulip2.JPG', import.meta.url).href,
  tulip3: new URL('../assets/images/tulip3.jpeg', import.meta.url).href,
  wrapped1: new URL('../assets/images/wrapped1.JPG', import.meta.url).href,
  wrapped2: new URL('../assets/images/wrapped2.JPG', import.meta.url).href,
  wrapped3: new URL('../assets/images/wrapped3.PNG', import.meta.url).href,
  wrapped4: new URL('../assets/images/wrapped4.PNG', import.meta.url).href,
  wrapped5: new URL('../assets/images/wrapped5.PNG', import.meta.url).href,
  wrapped6: new URL('../assets/images/wrapped6.PNG', import.meta.url).href,
  wrapped7: new URL('../assets/images/wrapped7.PNG', import.meta.url).href,
  wrapped8: new URL('../assets/images/wrapped8.PNG', import.meta.url).href,
  wrapped9: new URL('../assets/images/wrapped9.PNG', import.meta.url).href,
  wrapped10: new URL('../assets/images/wrapped10.PNG', import.meta.url).href,
  wrapped11: new URL('../assets/images/wrapped11.PNG', import.meta.url).href,
  wrapped12: new URL('../assets/images/wrapped12.PNG', import.meta.url).href,
  more1: new URL('../assets/images/more1.PNG', import.meta.url).href,
  more2: new URL('../assets/images/more2.PNG', import.meta.url).href,
  more3: new URL('../assets/images/more3.JPG', import.meta.url).href,
};

const FloristPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [activeSection, setActiveSection] = useState('gerbera');
  const [visibleSection, setVisibleSection] = useState(null);

  const portfolioItems = [
    { id: 1, image: principal1 },
    { id: 2, image: principal2 },
    { id: 3, image: principal3 },
    { id: 4, image: principal4 },
    { id: 5, image: principal5 }
  ];
  useEffect(() => {
    setIsVisible(true);
    portfolioItems.forEach(item => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setImagesLoaded(prev => ({
          ...prev,
          [item.id]: true
        }));
      };
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.dataset.section);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-section]').forEach(
      section => observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  const workSections = {
    funeral: {
      title: 'Funeral Arrangements',
      images: [
        { id: 'funeral1', src: workImages.funeral1 },
        { id: 'funeral2', src: workImages.funeral2 },
        { id: 'funeral3', src: workImages.funeral3 },
      ]
    },
    gerbera: {
      title: 'Gerbera',
      images: [
        { id: 'gerbera1', src: workImages.gerbera1 },
        { id: 'gerbera2', src: workImages.gerbera2 },
        { id: 'gerbera3', src: workImages.gerbera3 },
      ]
    },
    happy: {
      title: 'Happy Clients',
      images: [
        { id: 'happy1', src: workImages.happy1 },
        { id: 'happy2', src: workImages.happy2 },
        { id: 'happy3', src: workImages.happy3 },
        { id: 'happy4', src: workImages.happy4 },
        { id: 'happy5', src: workImages.happy5 },
        { id: 'happy6', src: workImages.happy6 },
        { id: 'happy7', src: workImages.happy7 },
        { id: 'happy8', src: workImages.happy8 },
        { id: 'happy9', src: workImages.happy9 },
        { id: 'happy10', src: workImages.happy10 },
        { id: 'happy11', src: workImages.happy11 },
      ]
    },
    box: {
      title: 'In a Box',
      images: [
        { id: 'box1', src: workImages.box1 },
        { id: 'box2', src: workImages.box2 },
        { id: 'box3', src: workImages.box3 },
        { id: 'box4', src: workImages.box4 },
        { id: 'box5', src: workImages.box5 },
        { id: 'box6', src: workImages.box6 },
        { id: 'box7', src: workImages.box7 },
      ]
    },
    vase: {
      title: 'In Vase',
      images: [
        { id: 'vase1', src: workImages.vase1 },
        { id: 'vase2', src: workImages.vase2 },
        { id: 'vase3', src: workImages.vase3 },
        { id: 'vase4', src: workImages.vase4 },
        { id: 'vase5', src: workImages.vase5 },
      ]
    },
    sunflowers: {
      title: "Sunflower's",
      images: [
        { id: 'sunflower1', src: workImages.sunflower1 },
        { id: 'sunflower2', src: workImages.sunflower2 },
        { id: 'sunflower3', src: workImages.sunflower3 },
      ]
    },
    tulips: {
      title: 'Tulips',
      images: [
        { id: 'tulip1', src: workImages.tulip1 },
        { id: 'tulip2', src: workImages.tulip2 },
        { id: 'tulip3', src: workImages.tulip3 },
      ]
    },
    wrapped: {
      title: 'Wrapped Flowers',
      images: [
        { id: 'wrapped1', src: workImages.wrapped1 },
        { id: 'wrapped2', src: workImages.wrapped2 },
        { id: 'wrapped3', src: workImages.wrapped3 },
        { id: 'wrapped4', src: workImages.wrapped4 },
        { id: 'wrapped5', src: workImages.wrapped5 },
        { id: 'wrapped6', src: workImages.wrapped6 },
        { id: 'wrapped7', src: workImages.wrapped7 },
        { id: 'wrapped8', src: workImages.wrapped8 },
        { id: 'wrapped9', src: workImages.wrapped9 },
        { id: 'wrapped10', src: workImages.wrapped10 },
        { id: 'wrapped11', src: workImages.wrapped11 },
        { id: 'wrapped12', src: workImages.wrapped12 },
      ]
    },
    more: {
      title: 'More',
      images: [
        { id: 'more1', src: workImages.more1 },
        { id: 'more2', src: workImages.more2 },
        { id: 'more3', src: workImages.more3 },
      ]
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const loadImagesForSection = (sectionKey) => {
    if (!workSections[sectionKey]) return;
    
    workSections[sectionKey].images.forEach(image => {
      if (!imagesLoaded[image.id]) {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          setImagesLoaded(prev => ({
            ...prev,
            [image.id]: true
          }));
        };
      }
    });
  };

  useEffect(() => {
    if (visibleSection) {
      loadImagesForSection(visibleSection);
    }
  }, [visibleSection]);

  useEffect(() => {
    loadImagesForSection(activeSection);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Flower2 className="w-8 h-8 text-pink-400" />
              <span className="text-2xl font-serif text-gray-800">Dominica Renee</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-pink-400 font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg 
                className="w-6 h-6 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-pink-100">
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-600 hover:text-pink-400 hover:bg-pink-50 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="pt-24 px-4 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {/* Image Gallery - Carousel */}
          <div className="relative mb-16">
            <div className="w-full h-96 md:h-[32rem] bg-gray-50 rounded-lg overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {portfolioItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 h-full">
                    <div className="relative h-full flex items-center justify-center bg-white">
                      <img
                        src={item.image}
                        className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${
                          imagesLoaded[item.id] ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        onLoad={() => {
                          setImagesLoaded(prev => ({
                            ...prev,
                            [item.id]: true
                          }));
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `/images/principal${item.id}.png`;
                        }}
                      />
                      {!imagesLoaded[item.id] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"/>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-pink-400' : 'bg-white/70 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center mt-[-2rem]">About Me</h2>
          <div 
            className={`bg-white p-8 md:p-12 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed text-lg">
                Hello! I'm <span className="font-semibold text-pink-400">Dominica</span>, and I have 3 years of experience in floristry. 
                I began in 2021, working for a local flower shop for a year. Then, from February to June 2023, I worked at another one, 
                and in August of that same year, I decided to open my own flower shop.
              </p>

              <div className="border-l-4 border-pink-200 pl-6 py-2 bg-pink-50/50 rounded-r-lg">
                <p className="leading-relaxed italic text-gray-700">
                  Over the years, I've gained valuable experience working in high-pressure environments, ensuring attention to detail in every project. 
                  I'm also skilled at interpreting design ideas and recreating them from photos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section id="work" className="py-16 bg-gradient-to-b from-pink-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-serif mb-8 text-center">My Work</h2>
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4 px-4 hide-scrollbar">
            {Object.entries(workSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`flex-shrink-0 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105
                  ${activeSection === key 
                    ? 'bg-pink-200 text-gray-800 shadow-md hover:shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-pink-100 hover:text-gray-800'}`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className={`mt-12 max-w-7xl mx-auto px-4 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {Object.entries(workSections).map(([key, section]) => (
              <div
                key={key}
                data-section={key}
                className={`transition-all duration-500 ${
                  activeSection === key 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 hidden'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.images.map((image) => (
                    <div
                      key={image.id}
                      className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
                    >
                      {!imagesLoaded[image.id] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"/>
                        </div>
                      )}
                      <img
                        src={image.src}
                        alt={`${section.title} image`}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110
                          ${imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <button className="bg-pink-400 hover:bg-pink-500 text-white text-lg px-12 py-4 
            rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Me
          </button>
        </div>
      </section>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FloristPortfolio;
          
          
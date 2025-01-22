import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';

// Importar las imágenes
import principal1 from '../assets/images/principal1.png';
import principal2 from '../assets/images/principal2.JPG';
import principal3 from '../assets/images/principal3.JPG';
import principal4 from '../assets/images/principal4.PNG';
import principal5 from '../assets/images/principal5.jpg';

const FloristPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  useEffect(() => {
    setIsVisible(true);
    // Precarga las imágenes
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

  const portfolioItems = [
    {
      id: 1,
      image: principal1
    },
    {
      id: 2,
      image: principal2
    },
    {
      id: 3,
      image: principal3
    },
    {
      id: 4,
      image: principal4
    },
    {
      id: 5,
      image: principal5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
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
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
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
            <div className="w-full h-full max-w-full">
              <div className="flex transition-transform duration-500 ease-out h-[600px] md:h-[700px]"
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {portfolioItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0 h-full">
                    <div className="relative h-full">
                      <img
                        src={item.image}
                        className={`w-full h-full object-contain transform transition-opacity duration-500 ${
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
                      {/* Loading spinner */}
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
          <h2 className="text-3xl font-serif mb-12 text-center">About Me</h2>
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

        {/* Get Started Button */}
        <div className="max-w-4xl mx-auto px-4 text-center mt-12">
          <button 
            className="bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium px-12 py-3 
              rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            MY WORK
          </button>
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
    </div>
  );
};

export default FloristPortfolio;
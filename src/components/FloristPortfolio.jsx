import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';

// Importación de imágenes
import principal1 from '../assets/images/principal1.png';
import principal2 from '../assets/images/principal2.JPG';
import principal3 from '../assets/images/principal3.JPG';
import principal4 from '../assets/images/principal4.PNG';
import principal5 from '../assets/images/principal5.jpg';

const FloristPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    { id: 1, image: principal1 },
    { id: 2, image: principal2 },
    { id: 3, image: principal3 },
    { id: 4, image: principal4 },
    { id: 5, image: principal5 }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
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

      {/* Hero Section with Horizontal Slider */}
      <header id="home" className="pt-24 px-4 max-w-6xl mx-auto">
        <div className={`text-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {/* Image Gallery - Horizontal Slider */}
          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out"
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {portfolioItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-2">
                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={item.image}
                        alt={`Portfolio ${item.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-r-lg shadow-md"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-l-lg shadow-md"
            >
              →
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-pink-400' : 'bg-pink-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* "Looking for" Section */}
          <div className="mb-12 pt-8">
            <h2 className="text-2xl font-serif mb-2">
              I'M LOOKING FOR THE PERFECT:
            </h2>
            <p className="text-2xl font-serif italic mb-8">
              Floral arrangement
            </p>
            <button 
              className="bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium px-12 py-3 
                rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              GET STARTED!
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">About Me</h2>
          <div 
            className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed text-lg">
                Hello! I'm <span className="font-semibold text-pink-400">Dominica</span>, and I have 3 years of experience in floristry. 
                My journey began in 2021, where I started working at a local flower shop, laying the foundation for my passion in floral design.
              </p>
              
              <p className="leading-relaxed text-lg">
                From February to June 2023, I expanded my expertise at another establishment, 
                before taking the exciting step of opening my own flower shop in August of the same year.
              </p>

              <div className="border-l-4 border-pink-200 pl-6 py-2 bg-pink-50/50 rounded-r-lg">
                <p className="leading-relaxed italic text-gray-700">
                  Throughout my career, I've thrived in high-pressure environments, ensuring meticulous attention 
                  to detail in every project. I've developed a particular skill for interpreting design ideas 
                  and bringing them to life from photos, creating perfect floral arrangements that match my 
                  clients' visions.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Flower2 className="text-pink-300 w-8 h-8 animate-pulse" />
            </div>
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
    </div>
  );
};

export default FloristPortfolio;
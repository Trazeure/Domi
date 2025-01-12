import React, { useState } from 'react';
import { Flower2, Heart, Sun, Stars } from 'lucide-react';

const FloristPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const categories = [
    { id: 'wedding', name: 'Wedding Flowers', icon: Heart },
    { id: 'luxury', name: 'Luxury Bouquets', icon: Stars },
    { id: 'colorful', name: 'Colorful Arrangements', icon: Sun }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      title: 'Spring Wedding Collection',
      description: 'Delicate blend of roses and peonies in soft pastels',
      icon: Heart,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      category: 'luxury',
      title: 'Royal Garden Bouquet',
      description: 'Premium orchids with gold-leaf accents',
      icon: Stars,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      category: 'colorful',
      title: 'Summer Burst',
      description: 'Vibrant mix of seasonal wildflowers',
      icon: Sun,
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Flower2 className="w-8 h-8 text-pink-500 animate-pulse" />
              <span className="text-2xl font-serif text-gray-800">Dominica Renee</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-pink-500 font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
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
              {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-4 rounded-lg transition-colors"
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
      <header id="home" className="pt-24 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <div className="flex justify-center mb-8">
            <Flower2 className="text-pink-500 w-24 h-24 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-800 mb-8">
            Dominica Renee
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Transforming special moments through the art of floral design. 
            Each arrangement is a unique story told through nature's most beautiful petals.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View Our Work
          </button>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCategory === 'all' 
                  ? 'bg-pink-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-pink-100 shadow-md'
              }`}
            >
              All Work
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedCategory === category.id 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-pink-100 shadow-md'
                }`}
              >
                <category.icon size={20} />
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems
              .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
              .map(item => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      <item.icon className="text-pink-500 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-serif text-gray-800 mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to transform your special moment with stunning floral arrangements? 
            Let's bring your vision to life.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default FloristPortfolio;
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Flower2 } from 'lucide-react';

// Dynamic image imports
const images = {
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

const WorkGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('gerbera');
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
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

  const sections = {
    funeral: {
      title: 'Funeral Arrangements',
      images: [
        { id: 'funeral1', src: images.funeral1 },
        { id: 'funeral2', src: images.funeral2 },
        { id: 'funeral3', src: images.funeral3 },
      ]
    },
    gerbera: {
      title: 'Gerbera',
      images: [
        { id: 'gerbera1', src: images.gerbera1 },
        { id: 'gerbera2', src: images.gerbera2 },
        { id: 'gerbera3', src: images.gerbera3 },
      ]
    },
    happy: {
        title: 'Happy Clients',
        images: [
          { id: 'happy1', src: images.happy1 },
          { id: 'happy2', src: images.happy2 },
          { id: 'happy3', src: images.happy3 },
          { id: 'happy4', src: images.happy4 },
          { id: 'happy5', src: images.happy5 },
          { id: 'happy6', src: images.happy6 },
          { id: 'happy7', src: images.happy7 },
          { id: 'happy8', src: images.happy8 },
          { id: 'happy9', src: images.happy9 },
          { id: 'happy10', src: images.happy10 },
          { id: 'happy11', src: images.happy11 },
        ]
      },
      box: {
        title: 'In a Box',
        images: [
          { id: 'box1', src: images.box1 },
          { id: 'box2', src: images.box2 },
          { id: 'box3', src: images.box3 },
          { id: 'box4', src: images.box4 },
          { id: 'box5', src: images.box5 },
          { id: 'box6', src: images.box6 },
          { id: 'box7', src: images.box7 },
        ]
      },
      vase: {
        title: 'In Vase',
        images: [
          { id: 'vase1', src: images.vase1 },
          { id: 'vase2', src: images.vase2 },
          { id: 'vase3', src: images.vase3 },
          { id: 'vase4', src: images.vase4 },
          { id: 'vase5', src: images.vase5 },
        ]
      },
      sunflowers: {
        title: "Sunflower's",
        images: [
          { id: 'sunflower1', src: images.sunflower1 },
          { id: 'sunflower2', src: images.sunflower2 },
          { id: 'sunflower3', src: images.sunflower3 },
        ]
      },
      tulips: {
        title: 'Tulips',
        images: [
          { id: 'tulip1', src: images.tulip1 },
          { id: 'tulip2', src: images.tulip2 },
          { id: 'tulip3', src: images.tulip3 },
        ]
      },
      wrapped: {
        title: 'Wrapped Flowers',
        images: [
          { id: 'wrapped1', src: images.wrapped1 },
          { id: 'wrapped2', src: images.wrapped2 },
          { id: 'wrapped3', src: images.wrapped3 },
          { id: 'wrapped4', src: images.wrapped4 },
          { id: 'wrapped5', src: images.wrapped5 },
          { id: 'wrapped6', src: images.wrapped6 },
          { id: 'wrapped7', src: images.wrapped7 },
          { id: 'wrapped8', src: images.wrapped8 },
          { id: 'wrapped9', src: images.wrapped9 },
          { id: 'wrapped10', src: images.wrapped10 },
          { id: 'wrapped11', src: images.wrapped11 },
          { id: 'wrapped12', src: images.wrapped12 },
        ]
      },
      more: {
        title: 'More',
        images: [
          { id: 'more1', src: images.more1 },
          { id: 'more2', src: images.more2 },
          { id: 'more3', src: images.more3 },
        ]
      }
    };
  
    const loadImagesForSection = (sectionKey) => {
      if (!sections[sectionKey]) return;
      
      sections[sectionKey].images.forEach(image => {
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
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
 <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-pink-100">
   <div className="max-w-7xl mx-auto px-4">
     <div className="flex items-center justify-between h-16">
       <div className="flex items-center space-x-3">
         <Link 
           to="/"
           className="flex items-center space-x-2 text-gray-600 hover:text-pink-400 transition-colors duration-300"
         >
           <ArrowLeft className="w-6 h-6" />
           <span className="font-medium">Back</span>
         </Link>
       </div>
       <div className="flex items-center space-x-3">
         <Flower2 className="w-8 h-8 text-pink-400" />
         <span className="text-2xl font-serif text-gray-800">My Work</span>
       </div>
       <div className="w-20"></div>
     </div>
   </div>
 </nav> 
      

  
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="flex justify-start md:justify-center space-x-4 overflow-x-auto pb-4 px-4 hide-scrollbar">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex-shrink-0 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105
                    ${activeSection === key 
                      ? 'bg-pink-200 text-gray-800 shadow-md hover:shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-pink-100 hover:text-gray-800'}`}
                >
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          </div>
  
          <div className={`max-w-7xl mx-auto px-4 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {Object.entries(sections).map(([key, section]) => (
              <div
                key={key}
                data-section={key}
                className={`transition-all duration-500 ${
                  activeSection === key 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 hidden'
                }`}
              >
                <h2 className="text-3xl font-serif text-center mb-8 text-gray-800">
                  {section.title}
                </h2>
                
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
        </main>
  
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
  
  export default WorkGallery;
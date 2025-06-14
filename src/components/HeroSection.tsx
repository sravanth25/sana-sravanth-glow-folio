
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['smarter', 'faster', 'louder'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Circular Gradient Background */}
      <div className="absolute inset-0 bg-black">
        {/* Main circular gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/30 via-blue-600/20 to-transparent" 
             style={{
               background: `radial-gradient(circle at center, 
                 rgba(147, 51, 234, 0.4) 0%,
                 rgba(59, 130, 246, 0.3) 25%,
                 rgba(139, 92, 246, 0.2) 50%,
                 rgba(0, 0, 0, 0.8) 70%,
                 rgba(0, 0, 0, 1) 100%)`
             }}>
        </div>
        
        {/* Secondary circular overlay for depth */}
        <div className="absolute inset-0"
             style={{
               background: `radial-gradient(circle at 60% 40%, 
                 rgba(168, 85, 247, 0.15) 0%,
                 transparent 50%)`
             }}>
        </div>
        
        {/* Third circular overlay */}
        <div className="absolute inset-0"
             style={{
               background: `radial-gradient(circle at 30% 70%, 
                 rgba(59, 130, 246, 0.1) 0%,
                 transparent 40%)`
             }}>
        </div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute inset-0">
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300/15 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300/25 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I help brands grow{' '}
            <span className="text-cyan-400 relative inline-block">
              <span key={currentWordIndex} className="animate-fade-in" style={{
                animation: 'fadeIn 0.5s ease-in-out'
              }}>
                {words[currentWordIndex]}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/30 via-cyan-400 to-cyan-400/30 rounded shadow-lg shadow-cyan-400/50"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Digital Marketing Executive crafting data-first growth strategies that deliver real results
          </p>

          <button 
            onClick={scrollToContact} 
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25 transform"
          >
            Let's Work Together
            <ChevronDown className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

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
    }, 2000); // Change word every 2 seconds

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

  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        left: '10%',
        top: '20%'
      }} />
        <div className="absolute w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl" style={{
        transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
        right: '10%',
        bottom: '20%'
      }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight px-[8px] py-[10px] mx-[8px] my-[8px] text-center">
            I help brands grow{' '}
            <span className="text-cyan-400 relative inline-block">
              <span key={currentWordIndex} className="animate-fade-in" style={{
              animation: 'fadeIn 0.5s ease-in-out'
            }}>
                {words[currentWordIndex]}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-400/30 rounded"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Digital Marketing Executive crafting data-first growth strategies that deliver real results.
          </p>

          <button onClick={scrollToContact} className="group inline-flex items-center px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
            Let's Work Together
            <ChevronDown className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};

export default HeroSection;

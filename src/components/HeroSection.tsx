
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Declare the spline-viewer element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
      };
    }
  }
}

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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-blue-900/20"></div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%',
            animationDuration: '6s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-400/3 to-cyan-400/3 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: '10%',
            bottom: '20%',
            animationDuration: '8s'
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="animate-fade-in text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
            Digital Marketing Executive crafting data-first growth strategies that deliver real results
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact} 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25 transform"
            >
              Let's Work Together
              <ChevronDown className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105">
              View My Work
            </button>
          </div>

          {/* Stats or highlights */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-lg">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">200%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right side - Spline 3D viewer */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <spline-viewer 
            url="https://prod.spline.design/ADKI36hrAyh2PJ5a/scene.splinecode"
            className="w-full h-full rounded-lg"
            style={{
              background: 'transparent'
            }}
          />
          
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20 pointer-events-none rounded-lg"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

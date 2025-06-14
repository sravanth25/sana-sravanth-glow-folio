
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
      {/* Modern Fluid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800">
        {/* Animated fluid blobs */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl animate-pulse"
            style={{
              background: 'linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              left: '-20%',
              top: '-20%',
              animationDuration: '8s'
            }}
          />
          <div 
            className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)',
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
              right: '-15%',
              bottom: '-15%',
              animationDuration: '12s'
            }}
          />
          <div 
            className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-2xl animate-pulse"
            style={{
              background: 'linear-gradient(225deg, #10b981, #06b6d4, #3b82f6)',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              left: '50%',
              top: '50%',
              marginLeft: '-250px',
              marginTop: '-250px',
              animationDuration: '10s'
            }}
          />
        </div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
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

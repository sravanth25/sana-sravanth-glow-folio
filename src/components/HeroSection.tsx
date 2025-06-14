
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
      {/* Modern gradient background similar to Framer waitlist */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, #8B5CF6, #3B82F6)',
              left: '10%',
              top: '20%',
              animation: 'float 8s ease-in-out infinite',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          />
          
          <div 
            className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, #06B6D4, #8B5CF6)',
              right: '10%',
              top: '30%',
              animation: 'float 6s ease-in-out infinite reverse',
              animationDelay: '2s',
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
            }}
          />

          <div 
            className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, #F59E0B, #EF4444)',
              left: '60%',
              bottom: '20%',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '4s',
              transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
            }}
          />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Subtle light rays */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{
              left: '20%',
              top: '10%',
              transform: 'rotate(15deg)',
              animation: 'fade-in 3s ease-in-out infinite alternate'
            }}
          />
          <div 
            className="absolute w-px h-48 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"
            style={{
              right: '30%',
              bottom: '20%',
              transform: 'rotate(-20deg)',
              animation: 'fade-in 4s ease-in-out infinite alternate',
              animationDelay: '2s'
            }}
          />
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
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
      </div>
    </section>
  );
};

export default HeroSection;

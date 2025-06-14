
import { ChevronDown, TrendingUp, BarChart3, Target, Users, Zap } from 'lucide-react';
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
      {/* Digital Marketing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating marketing icons */}
        <div className="absolute inset-0">
          {[TrendingUp, BarChart3, Target, Users, Zap].map((Icon, i) => (
            <Icon
              key={i}
              className="absolute text-cyan-400/20 animate-float"
              size={24}
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 2) * 30}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${6 + i}s`
              }}
            />
          ))}
        </div>

        {/* Data visualization elements */}
        <div className="absolute inset-0">
          {/* Chart lines */}
          <svg className="absolute top-1/4 left-1/4 w-64 h-32 opacity-20">
            <polyline
              fill="none"
              stroke="rgb(6, 182, 212)"
              strokeWidth="2"
              points="0,30 20,25 40,15 60,20 80,10 100,5 120,8 140,3 160,7 180,2 200,5 220,1 240,4 256,0"
              className="animate-pulse"
            />
          </svg>
          
          <svg className="absolute bottom-1/4 right-1/4 w-64 h-32 opacity-20">
            <polyline
              fill="none"
              stroke="rgb(34, 197, 94)"
              strokeWidth="2"
              points="0,25 20,20 40,30 60,15 80,25 100,10 120,20 140,8 160,18 180,5 200,15 220,3 240,12 256,2"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>

        {/* Floating data points */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Glowing orbs with marketing colors */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #06b6d4, #3b82f6)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%',
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #10b981, #059669)',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '15%',
            bottom: '25%',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />

        {/* Performance metrics overlay */}
        <div className="absolute top-10 right-10 opacity-20">
          <div className="text-cyan-400 font-mono text-sm space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>ROI: +247%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>CTR: 12.4%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Conv: 8.9%</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 opacity-20">
          <div className="text-cyan-400 font-mono text-sm space-y-1">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>Engagement ↗</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={16} />
              <span>Targeting Active</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>Audience: 2.4M</span>
            </div>
          </div>
        </div>
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

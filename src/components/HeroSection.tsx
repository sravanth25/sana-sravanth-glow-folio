import { ChevronDown, TrendingUp, Target, BarChart, Users, Globe, Mail, Search, Zap, Award, Eye, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from "@/components/ui/magnetic-button";
import StatusIndicator from './ui/status-indicator';

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-blue-900/20"></div>
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-400/5 to-cyan-400/5 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: '10%',
            bottom: '20%',
            animationDuration: '6s'
          }}
        />

        {/* Digital Marketing Icons - Floating Background Elements */}
        <div className="absolute top-20 left-20 text-cyan-400/20 animate-pulse" style={{ animationDelay: '0s' }}>
          <TrendingUp size={32} />
        </div>
        <div className="absolute top-32 right-32 text-blue-400/20 animate-bounce" style={{ animationDelay: '1s' }}>
          <Target size={28} />
        </div>
        <div className="absolute bottom-40 left-40 text-cyan-300/20 animate-pulse" style={{ animationDelay: '2s' }}>
          <BarChart size={24} />
        </div>
        <div className="absolute top-1/2 right-20 text-purple-400/20 animate-bounce" style={{ animationDelay: '3s' }}>
          <Users size={26} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-cyan-400/20 animate-pulse" style={{ animationDelay: '4s' }}>
          <Globe size={30} />
        </div>
        <div className="absolute top-1/4 left-1/3 text-blue-400/20 animate-bounce" style={{ animationDelay: '5s' }}>
          <Mail size={22} />
        </div>
        <div className="absolute bottom-20 right-1/3 text-cyan-300/20 animate-pulse" style={{ animationDelay: '6s' }}>
          <Search size={25} />
        </div>
        <div className="absolute top-2/3 left-1/4 text-purple-400/20 animate-bounce" style={{ animationDelay: '7s' }}>
          <Zap size={20} />
        </div>
        <div className="absolute top-1/3 right-1/2 text-cyan-400/20 animate-pulse" style={{ animationDelay: '8s' }}>
          <Award size={24} />
        </div>

        {/* Additional smaller marketing icons */}
        <div className="absolute top-1/6 left-1/2 text-blue-400/20 animate-bounce" style={{ animationDelay: '2.5s' }}>
          <TrendingUp size={18} />
        </div>
        <div className="absolute bottom-1/4 left-1/6 text-cyan-300/20 animate-pulse" style={{ animationDelay: '3.5s' }}>
          <Target size={16} />
        </div>
        <div className="absolute top-3/4 right-1/6 text-purple-400/20 animate-bounce" style={{ animationDelay: '4.5s' }}>
          <BarChart size={20} />
        </div>

        {/* Original floating geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rotate-45 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-8 bg-cyan-300/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-1 bg-purple-400/20 animate-pulse" style={{ animationDelay: '3s' }}></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-4">
            <StatusIndicator />
          </div>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <a
                href="https://ik.imagekit.io/sravanth/Sana_Sravanth_Resume%20(1)%20(1).pdf?updatedAt=1766919820779"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
              >
                Download Resume
                <Download className="ml-2" size={20} />
              </a>
            </MagneticButton>
            
            <Link 
              to="/work"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25 transform"
            >
              View My Work
              <Eye className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

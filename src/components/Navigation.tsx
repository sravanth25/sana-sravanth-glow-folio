import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'My Work' },
    { id: 'contact', label: 'Hire for Freelancing' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section
      const sections = ['home', 'experience', 'contact'];
      const scrollY = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="text-2xl font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300"
          >
            Sana Sravanth
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link relative text-white hover:text-cyan-400 transition-colors duration-300 ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
                {/* Active dot indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full glow-dot"></div>
                )}
              </button>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 py-2 border border-cyan-400/50 text-cyan-400 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Let's Talk</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300 relative z-50"
          >
            <div className="w-6 h-6 relative">
              <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={24} />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'}`}>
                <X size={24} />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`md:hidden fixed inset-0 top-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Drawer */}
          <div className={`absolute left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-md border-r border-gray-800 transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="pt-20 px-6">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-xl text-white hover:text-cyan-400 transition-all duration-300 py-3 transform ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile CTA */}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`w-full mt-8 px-6 py-3 border border-cyan-400/50 text-cyan-400 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? '600ms' : '0ms'
                  }}
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-cyan-400/30">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navigation;

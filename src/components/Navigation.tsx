
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'experience',
    label: 'Experience'
  }, {
    id: 'contact',
    label: 'Hire Me'
  }];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'contact'];
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
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300 mr-8"
          >
            Sana Sravanth
          </div>

          {/* Desktop Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link relative text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 rounded-full ${
                  activeSection === item.id ? 'active bg-cyan-400/20' : 'hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header with Logo */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 px-4 py-3">
          <div
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300"
          >
            Sana Sravanth
          </div>
        </div>

        {/* Mobile Menu Button - Pinterest Style (Bottom Right) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-cyan-400 text-black rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-300 transition-all duration-300 hover:scale-110"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl text-white hover:text-cyan-400 transition-colors duration-300 py-4 px-8 rounded-full hover:bg-gray-800/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add top padding to body content for mobile header */}
        <div className="pt-16"></div>
      </div>
    </>
  );
};

export default Navigation;

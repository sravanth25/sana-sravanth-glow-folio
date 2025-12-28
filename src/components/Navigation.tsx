
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ModernMobileMenu from './ui/modern-mobile-menu';

const Navigation = () => {
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
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300 mr-8"
        >
          Sana Sravanth
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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

        {/* Mobile Menu */}
        <ModernMobileMenu />

      </div>
    </nav>
  );
};

export default Navigation;



import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowUp, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  // Page entrance animation variants
  const pageVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* Main Content with Entrance Animation */}
      {showContent && (
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          className="min-h-screen bg-black text-white overflow-x-hidden"
        >
          <motion.div variants={sectionVariants}>
            <Navigation />
          </motion.div>
          
          <main>
            <motion.div variants={sectionVariants}>
              <HeroSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <AboutSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <ExperienceSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <SkillsSection />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <ContactSection />
            </motion.div>
          </main>

          <motion.div variants={sectionVariants}>
            <Footer />
          </motion.div>

          {/* Scroll to top button */}
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Index;


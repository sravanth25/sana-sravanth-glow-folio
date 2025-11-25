

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
    setShowContent(true);
  };

  // Animation variants for content entrance
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* Main Content with soft entrance animation */}
      {!isLoading && (
        <motion.div 
          className="min-h-screen bg-black text-white overflow-x-hidden"
          variants={contentVariants}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
        >
          <motion.div variants={sectionVariants}>
            <Navigation />
          </motion.div>
          
          <motion.main variants={sectionVariants}>
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
          </motion.main>

          <motion.div variants={sectionVariants}>
            <Footer />
          </motion.div>

          {/* Scroll to top button */}
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
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


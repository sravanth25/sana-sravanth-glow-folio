
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const ModernMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 z-50">
        <Menu className="text-cyan-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="text-cyan-400" />
              </button>
            </div>
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial="closed"
              animate="open"
              variants={{ open: { transition: { staggerChildren: 0.1 } } }}
            >
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                  variants={linkVariants}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernMobileMenu;

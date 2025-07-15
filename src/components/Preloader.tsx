
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Show text after avatar animation - slower timing
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1200);

    // Complete animation after text appears - slower timing
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, 5000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl"
            />
          </div>

          {/* Centered Content - Avatar and Text in One Line */}
          <div className="relative flex items-center space-x-6 px-4">
            {/* Avatar with Bounce Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                duration: 1.2
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer flex-shrink-0"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0,0,0,0.1)",
                    "0 0 40px rgba(34, 211, 238, 0.3)",
                    "0 0 20px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full"
              >
                <Avatar className="w-20 h-20 md:w-24 md:h-24 border-4 border-cyan-400/30 shadow-2xl">
                  <AvatarImage 
                    src="/lovable-uploads/8fa4e79a-f98c-43d9-a239-6b73b4557146.png"
                    alt="Sana Sravanth"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-xl md:text-2xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 text-black">
                    Sana
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </motion.div>

            {/* Welcome Text Animation - Inline */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 25,
                    delay: 0.3
                  }}
                  className="text-left"
                >
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="inline-block"
                    >
                      Hey, I'm{" "}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.8 }}
                      className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    >
                      Sana Sravanth
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                      className="inline-block text-gray-300"
                    >
                      {" — Welcome to my Portfolio!"}
                    </motion.span>
                  </motion.h1>

                  {/* Animated Dots */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="flex space-x-2 mt-3"
                  >
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }}
                        className="w-2 h-2 rounded-full bg-cyan-400/60"
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

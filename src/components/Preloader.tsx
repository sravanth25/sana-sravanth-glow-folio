
import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500); // Allow fade out before showing main content
    }, 3000); // 3 seconds animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
      isAnimating ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Rocket container */}
      <div className="relative">
        {/* Smoke trail */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gray-400 rounded-full opacity-70 animate-smoke"
              style={{
                left: `${-8 + Math.random() * 16}px`,
                bottom: `${i * 20}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>

        {/* Rocket */}
        <div className="rocket-container animate-rocket-launch">
          <Rocket 
            size={48} 
            className="text-cyan-400 transform rotate-45" 
          />
          
          {/* Rocket fire/exhaust */}
          <div className="absolute -bottom-2 -right-2 w-6 h-6">
            <div className="fire-particle bg-orange-500 rounded-full animate-fire-1" />
            <div className="fire-particle bg-red-500 rounded-full animate-fire-2" />
            <div className="fire-particle bg-yellow-500 rounded-full animate-fire-3" />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">
            Launching Portfolio
          </h2>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

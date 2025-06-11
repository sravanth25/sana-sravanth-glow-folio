
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/4573ccc2-a1f3-41aa-b600-6d064367deb9.png"
                    alt="Sana Sravanth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-300`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Hi, I'm <strong className="text-white">Sana Sravanth</strong> — a results-driven Digital Marketing Executive. 
              I specialize in SEO, paid ads, and performance strategy to help brands scale their digital presence 
              and achieve measurable growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">SEO, SEM, Social Campaigns</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Conversion-Focused Execution</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Data-Driven & Automation-Savvy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

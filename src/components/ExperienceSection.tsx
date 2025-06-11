
import { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
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
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {/* Experience card */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-300`}>
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 md:pr-8">
                <div className="ml-12 md:ml-0 md:text-right">
                  <h3 className="text-2xl font-bold text-white mb-2">Digital Marketing Executive</h3>
                  <p className="text-cyan-400 font-semibold mb-4">JaaGa.AI</p>
                  <p className="text-gray-400 text-sm mb-4">2023 - Present</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full border-4 border-black"></div>

              <div className="md:w-1/2 md:pl-8">
                <div className="ml-12 md:ml-0 bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors duration-300 hover:scale-105 transform">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Led SEO & PPC campaigns boosting lead generation by 40%</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Created Looker Studio dashboards for real-time analytics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Managed performance ads on Meta & Google with 3.2x ROAS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

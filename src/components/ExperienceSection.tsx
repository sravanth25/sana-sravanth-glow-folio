
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
          <span className="text-cyan-400">My Work</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {/* Work experience card */}
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
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Projects & Achievements</h4>
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
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed comprehensive digital marketing strategies for B2B clients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Portfolio Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <h4 className="text-xl font-bold text-cyan-400 mb-3">SEO Strategy</h4>
            <p className="text-gray-300 mb-4">Comprehensive SEO audits and strategy implementation for improved organic visibility.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">Keyword Research</span>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">On-page SEO</span>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">Technical SEO</span>
            </div>
          </div>

          <div className={`bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <h4 className="text-xl font-bold text-cyan-400 mb-3">Paid Advertising</h4>
            <p className="text-gray-300 mb-4">High-performing ad campaigns across Google Ads, Meta, and LinkedIn platforms.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">Google Ads</span>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">Meta Ads</span>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">LinkedIn Ads</span>
            </div>
          </div>

          <div className={`bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
            <h4 className="text-xl font-bold text-cyan-400 mb-3">Analytics & Reporting</h4>
            <p className="text-gray-300 mb-4">Data-driven insights through custom dashboards and comprehensive reporting.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">Looker Studio</span>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">GA4</span>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">Data Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

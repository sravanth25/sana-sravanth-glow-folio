import { useEffect, useRef, useState } from 'react';
const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const skills = [{
    name: 'Google Ads',
    level: 90
  }, {
    name: 'Meta Ads',
    level: 85
  }, {
    name: 'SEO',
    level: 88
  }, {
    name: 'Figma',
    level: 82
  }, {
    name: 'SEMrush',
    level: 80
  }];
  const tools = ['Google Ads', 'Meta Ads', 'SEMrush', 'Canva', 'Figma', 'WhatsApp Automation (Meta Cloud API)'];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setTimeout(() => setAnimatedSkills(true), 500);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="skills" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Skills & <span className="text-cyan-400">Tools</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills with progress bars */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-300`}>
            <h3 className="text-2xl font-bold mb-8">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-300 h-2 rounded-full transition-all duration-1000 ease-out" style={{
                  width: animatedSkills ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }} />
                  </div>
                </div>)}
            </div>
          </div>

          {/* Tools grid */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-500`}>
            <h3 className="text-2xl font-bold mb-8">Tools I Use</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => <div key={tool} style={{
              animationDelay: `${index * 100}ms`
            }} className="bg-gray-800/50 p-4 text-center hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-cyan-400/50 rounded-md mx-[4px] my-px">
                  <span className="text-white font-medium">{tool}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;
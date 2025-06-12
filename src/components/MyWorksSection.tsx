
import { useState, useRef, useEffect } from 'react';
import { ArrowUp, TrendingUp, FileChartColumn, Search } from 'lucide-react';

const MyWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      icon: TrendingUp,
      title: "Smart Property Access Campaign",
      description: "Increased lead conversions by 3x via targeted LinkedIn Ads and landing page optimization.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: FileChartColumn,
      title: "Analytics Automation",
      description: "Built end-to-end reporting dashboards using Google Looker Studio and GA4.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Blog SEO Growth",
      description: "Boosted organic traffic by 40% in 90 days through structured content planning and backlinking.",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: ArrowUp,
      title: "Real Estate Funnels",
      description: "Integrated WhatsApp + lead form funnels into ad campaigns with CRM sync.",
      color: "from-orange-400 to-red-500"
    }
  ];

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
    <section id="my-works" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Campaigns & <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from strategic digital marketing campaigns and creative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`work-card group bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden hover:border-transparent transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Front */}
              <div className="p-8 relative">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20`}>
                    <project.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
              </div>

              {/* Card Flip Details (shown on hover) */}
              <div className="px-8 pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">View Details</span>
                    <ArrowUp className="w-4 h-4 text-cyan-400 transform rotate-45 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Work Button */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-600`}>
          <button className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105">
            <span className="mr-2">View More Work</span>
            <ArrowUp className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyWorksSection;


import { useEffect, useRef, useState } from 'react';
import { Search, Target, Brain, Palette, Mail, Linkedin, Workflow, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Drive organic growth with search-first strategies, on-page optimization, and keyword-rich content that ranks.',
      color: 'from-cyan-400 to-blue-500',
      isClickable: true,
      path: '/seo-guide'
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Launch targeted campaigns that convert — with smart audience segmentation and conversion tracking.',
      color: 'from-purple-400 to-pink-400',
      isClickable: true,
      path: '/meta-google-ads'
    },
    {
      icon: Brain,
      title: 'Website Design',
      description: 'Craft modern, responsive websites with cutting-edge tools that speed up delivery and boost performance.',
      color: 'from-orange-400 to-red-400',
      isClickable: true,
      path: '/blog'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design interfaces that engage users and simplify journeys – from landing pages to dashboards.',
      color: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Workflow,
      title: 'N8N Automation',
      description: 'Automate workflows and streamline business processes with powerful N8N integrations that save time and boost productivity.',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: Sparkles,
      title: 'Branding & Design',
      description: 'Create compelling brand identities and visual assets that make your business stand out and resonate with your audience.',
      color: 'from-yellow-400 to-orange-400'
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

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.isClickable && service.path) {
      navigate(service.path);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Pitch */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            If you're looking for creative digital marketing that performs, you've found your partner. 
            I bring strategy, storytelling, and smart tools together for real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div 
                  className={`group bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10 border border-gray-700 hover:border-cyan-400/50 h-full ${
                    service.isClickable ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="text-black" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                        {service.isClickable && <span className="text-sm text-cyan-400 ml-2">→ Learn More</span>}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA Box */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-1000`}>
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to grow your brand?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how we can take your digital presence to the next level.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:sanasravanth25@gmail.com"
                className="group inline-flex items-center px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <Mail className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
                Send Inquiry
              </a>
              
              <a
                href="https://in.linkedin.com/in/sana-sravanth-3b084a231"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800/50 text-white font-semibold rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-cyan-400/50"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </div>
            
            <p className="text-gray-400 mt-4 text-sm">
              Email: <span className="text-cyan-400">sanasravanth25@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

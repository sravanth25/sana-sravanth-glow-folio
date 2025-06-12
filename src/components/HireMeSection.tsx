
import { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, Search, TrendingUp, Grid3x3, Image, FileChartColumn, ArrowUp } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const HireMeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Drive organic growth with search-first strategies, on-page optimization, and keyword-rich content that ranks."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      description: "Full-funnel digital plans across platforms – tailored for performance, powered by storytelling."
    },
    {
      icon: Grid3x3,
      title: "Meta & Google Ads",
      description: "Launch targeted campaigns that convert — with smart audience segmentation and conversion tracking."
    },
    {
      icon: Image,
      title: "Website Design Using AI",
      description: "Craft modern, responsive websites with AI tools that speed up delivery and boost performance."
    },
    {
      icon: FileChartColumn,
      title: "UI/UX Design",
      description: "Design interfaces that engage users and simplify journeys – from landing pages to dashboards."
    },
    {
      icon: ArrowUp,
      title: "Custom Solutions & Integrations",
      description: "Automation, CRM workflows, analytics dashboards — if it's digital, I can optimize it."
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="hire-me" ref={sectionRef} className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            If you're looking for creative digital marketing that performs, you've found your partner. 
            I bring strategy, storytelling, and smart tools together for real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-400/10 rounded-full group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <service.icon className="text-cyan-400 pulse-icon" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-300`}>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Ready to grow your brand?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="p-3 bg-cyan-400/10 rounded-full group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    hi@sanasravanth.com
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="p-3 bg-cyan-400/10 rounded-full group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Linkedin className="text-cyan-400" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    linkedin.com/in/sana-sravanth
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-white transition-all duration-300 ripple-effect">
                Send Inquiry
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-500`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors duration-300 peer"
                  placeholder="Your Name"
                />
                <label className="floating-label">Your Name</label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors duration-300 peer"
                  placeholder="Your Email"
                />
                <label className="floating-label">Your Email</label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors duration-300 peer resize-none"
                  placeholder="Your Message"
                />
                <label className="floating-label">Your Message</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;

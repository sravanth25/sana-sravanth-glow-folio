
import { useState, useEffect, useRef } from 'react';
import { Send, Mail, Linkedin, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        project: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-cyan-400">Hire Me for Freelancing</span>
        </h2>
        
        <p className={`text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          Ready to boost your digital presence? Let's discuss your project and create a winning digital marketing strategy together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Start Your Project</h3>
            
            {isSubmitted ? (
              <div className="bg-green-400/10 border border-green-400/30 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h4>
                <p className="text-gray-300">I'll get back to you within 24 hours to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="project" className="block text-gray-300 mb-2">Project Type *</label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="seo">SEO Strategy & Implementation</option>
                      <option value="ppc">PPC Campaign Management</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="analytics">Analytics & Reporting</option>
                      <option value="complete">Complete Digital Marketing</option>
                      <option value="consultation">Strategy Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-gray-300 mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-plus">$10,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your business, goals, target audience, and what you're looking to achieve..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Project Inquiry</span>
                  <Send size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Proven Results</h4>
                  <p className="text-gray-400">40% increase in lead generation and 3.2x ROAS on ad campaigns</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Data-Driven Approach</h4>
                  <p className="text-gray-400">Every strategy backed by analytics and measurable KPIs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Full Transparency</h4>
                  <p className="text-gray-400">Regular reporting and clear communication throughout the project</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <div className="space-y-3">
                <a href="mailto:sana@example.com" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail size={20} />
                  <span>sana@example.com</span>
                </a>
                <a href="https://linkedin.com/in/sana-sravanth" className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={20} />
                  <span>Available Worldwide (Remote)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Let's <span className="text-cyan-400">Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 delay-300`}>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to take your digital marketing to the next level? Let's discuss how we can work together 
              to achieve your business goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-cyan-400/10 rounded-full group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <span className="text-gray-300">sana.sravanth@email.com</span>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-cyan-400/10 rounded-full group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <Linkedin className="text-cyan-400" size={20} />
                </div>
                <span className="text-gray-300">linkedin.com/in/sanasravanth</span>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-cyan-400/10 rounded-full group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
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
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400">
                  Your Name
                </label>
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
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400">
                  Your Email
                </label>
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
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-xl hover:bg-cyan-300 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

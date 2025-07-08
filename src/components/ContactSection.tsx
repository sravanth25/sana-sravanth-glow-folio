
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, TrendingUp, Target, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import InquiryPopup from './InquiryPopup';

const ContactSection = () => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    { 
      name: 'SEO Optimization', 
      icon: <TrendingUp className="w-6 h-6" />, 
      description: 'Boost your organic rankings',
      slug: 'seo'
    },
    { 
      name: 'PPC Advertising', 
      icon: <Target className="w-6 h-6" />, 
      description: 'Maximize ad performance',
      slug: 'ppc'
    },
    { 
      name: 'Social Media', 
      icon: <Users className="w-6 h-6" />, 
      description: 'Engage your audience',
      slug: 'social'
    },
    { 
      name: 'Analytics & Data', 
      icon: <BarChart className="w-6 h-6" />, 
      description: 'Make data-driven decisions',
      slug: 'analytics'
    }
  ];

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setShowInquiry(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-blue-900/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work{' '}
            <span className="text-cyan-400 relative">
              Together
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/30 via-cyan-400 to-cyan-400/30 rounded"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Choose a service below to learn more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/blog?service=${service.slug}`}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white font-semibold">hello@digitalmarketer.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white font-semibold">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quick Inquiry</h3>
            <p className="text-gray-300 mb-6">
              Not sure which service you need? Send me a quick message and I'll help you find the right solution.
            </p>
            <button
              onClick={() => handleServiceClick('General Inquiry')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25 transform"
            >
              <MessageCircle className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              Send Quick Message
            </button>
          </div>
        </div>
      </div>

      {/* Inquiry Popup */}
      <InquiryPopup 
        open={showInquiry} 
        onOpenChange={setShowInquiry}
        service={selectedService}
      />
    </section>
  );
};

export default ContactSection;

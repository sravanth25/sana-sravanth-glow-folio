
import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, TrendingUp, Target, Eye, Users, DollarSign, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      type: 'website',
      title: 'E-commerce Fashion Store',
      description: 'Modern responsive design with advanced filtering and checkout system',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['UI/UX', 'E-commerce', 'React'],
      metrics: {
        conversionRate: '12%',
        pageViews: '45K+',
        bounceRate: '28%'
      }
    },
    {
      id: 2,
      type: 'website',
      title: 'SaaS Dashboard',
      description: 'Clean admin dashboard with data visualization and user management',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tags: ['Dashboard', 'SaaS', 'Analytics'],
      metrics: {
        userEngagement: '89%',
        sessionTime: '8min',
        retention: '76%'
      }
    },
    {
      id: 3,
      type: 'ads',
      title: 'Meta Ads Campaign - Tech Startup',
      description: 'Lead generation campaign targeting B2B decision makers',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tags: ['Meta Ads', 'B2B', 'Lead Gen'],
      metrics: {
        ctr: '3.2%',
        cpa: '$45',
        leads: '350+'
      }
    },
    {
      id: 4,
      type: 'ads',
      title: 'Google Ads - E-commerce',
      description: 'Shopping campaigns with dynamic product ads and remarketing',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tags: ['Google Ads', 'Shopping', 'ROAS'],
      metrics: {
        roas: '4.8x',
        impressions: '2.1M',
        clicks: '67K'
      }
    },
    {
      id: 5,
      type: 'website',
      title: 'Restaurant Landing Page',
      description: 'Food delivery app landing with online ordering integration',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['Landing Page', 'Food', 'Mobile-First'],
      metrics: {
        orders: '23%',
        mobile: '78%',
        speed: '2.1s'
      }
    },
    {
      id: 6,
      type: 'ads',
      title: 'LinkedIn Ads - Professional Services',
      description: 'Thought leadership campaign for consulting firm',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['LinkedIn', 'B2B', 'Consulting'],
      metrics: {
        engagement: '8.5%',
        leads: '120+',
        quality: '92%'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'website', label: 'Websites' },
    { id: 'ads', label: 'Ad Campaigns' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Link 
              to="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-cyan-400">Work</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A showcase of websites I've designed and advertising campaigns I've managed, 
              complete with real performance metrics and results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-wrap gap-4 justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10 border border-gray-800 hover:border-cyan-400/50 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'website' 
                        ? 'bg-blue-500/80 text-white' 
                        : 'bg-green-500/80 text-white'
                    }`}>
                      {item.type === 'website' ? 'Website' : 'Ad Campaign'}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-800/50 p-2 rounded">
                        <div className="text-cyan-400 font-bold text-sm">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to create something <span className="text-cyan-400">amazing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and bring your vision to life with data-driven strategies.
            </p>
            <Link 
              to="/#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
            >
              Let's Work Together
              <TrendingUp className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;


import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, BarChart, Users, Search, Mail, Globe, Target, Award, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import InquiryPopup from '../components/InquiryPopup';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service') || 'seo';
  const [showInquiry, setShowInquiry] = useState(false);

  const serviceData = {
    seo: {
      title: 'SEO Optimization',
      icon: <Search className="w-8 h-8" />,
      description: 'Drive organic traffic and improve your search engine rankings with data-driven SEO strategies.',
      content: [
        {
          title: 'Keyword Research & Strategy',
          description: 'In-depth analysis to identify high-converting keywords for your business.',
          result: '300% increase in organic traffic'
        },
        {
          title: 'Technical SEO Audit',
          description: 'Complete website optimization for better search engine crawling.',
          result: '85% improvement in page load speed'
        },
        {
          title: 'Content Optimization',
          description: 'Strategic content creation and optimization for better rankings.',
          result: '150% increase in organic leads'
        }
      ],
      projects: [
        {
          client: 'E-commerce Store',
          result: '400% organic traffic growth in 6 months',
          metrics: 'From 2K to 10K monthly visits'
        },
        {
          client: 'Local Business',
          result: 'Ranked #1 for 15+ local keywords',
          metrics: '250% increase in local inquiries'
        }
      ]
    },
    ppc: {
      title: 'PPC Advertising',
      icon: <Target className="w-8 h-8" />,
      description: 'Maximize ROI with targeted pay-per-click campaigns across Google Ads and social platforms.',
      content: [
        {
          title: 'Google Ads Management',
          description: 'Strategic campaign setup and optimization for maximum conversions.',
          result: '45% reduction in cost per acquisition'
        },
        {
          title: 'Facebook & Instagram Ads',
          description: 'Social media advertising campaigns that drive engagement and sales.',
          result: '300% return on ad spend'
        }
      ],
      projects: [
        {
          client: 'SaaS Company',
          result: '$50K revenue from $10K ad spend',
          metrics: '5:1 ROAS achieved'
        }
      ]
    },
    social: {
      title: 'Social Media Marketing',
      icon: <Users className="w-8 h-8" />,
      description: 'Build brand awareness and engage your audience across all social platforms.',
      content: [
        {
          title: 'Content Strategy',
          description: 'Engaging content that resonates with your target audience.',
          result: '500% increase in engagement'
        },
        {
          title: 'Community Management',
          description: '24/7 social media monitoring and customer engagement.',
          result: '90% faster response time'
        }
      ],
      projects: [
        {
          client: 'Fashion Brand',
          result: '100K+ followers gained in 3 months',
          metrics: '800% increase in brand mentions'
        }
      ]
    },
    analytics: {
      title: 'Analytics & Reporting',
      icon: <BarChart className="w-8 h-8" />,
      description: 'Make data-driven decisions with comprehensive analytics and reporting solutions.',
      content: [
        {
          title: 'Google Analytics Setup',
          description: 'Complete tracking implementation for better insights.',
          result: '100% accurate data tracking'
        },
        {
          title: 'Custom Dashboards',
          description: 'Real-time dashboards for monitoring key metrics.',
          result: '75% faster decision making'
        }
      ],
      projects: [
        {
          client: 'B2B Company',
          result: 'Identified $200K revenue opportunity',
          metrics: '30% improvement in conversion rate'
        }
      ]
    }
  };

  const currentService = serviceData[service as keyof typeof serviceData] || serviceData.seo;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <Button 
              onClick={() => setShowInquiry(true)}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400"
            >
              Send Inquiry
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6 text-cyan-400">
            {currentService.icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {currentService.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {currentService.description}
          </p>
          <Button 
            onClick={() => setShowInquiry(true)}
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.content.map((item, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-cyan-400">{item.title}</CardTitle>
                  <CardDescription className="text-gray-300">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 p-4 rounded-lg">
                    <p className="text-sm font-medium text-cyan-400">Result:</p>
                    <p className="text-white">{item.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Results */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Project Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentService.projects.map((project, index) => (
              <Card key={index} className="bg-black/50 border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-cyan-400" />
                    <CardTitle className="text-xl">{project.client}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 p-4 rounded-lg">
                      <p className="text-green-400 font-semibold text-lg">{project.result}</p>
                      <p className="text-gray-300 text-sm mt-1">{project.metrics}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can help grow your business with proven {currentService.title.toLowerCase()} strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowInquiry(true)}
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Inquiry
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              asChild
            >
              <Link to="/work">View All Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Inquiry Popup */}
      <InquiryPopup 
        open={showInquiry} 
        onOpenChange={setShowInquiry}
        service={currentService.title}
      />
    </div>
  );
};

export default Blog;

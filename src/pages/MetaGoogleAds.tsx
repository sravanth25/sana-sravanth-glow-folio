
import { useState } from 'react';
import { ArrowLeft, TrendingUp, Target, DollarSign, Users, ShoppingCart, Instagram, Globe, Mail, Phone, Building, MessageSquare, Eye, BarChart3, Zap, Award, CheckCircle, X, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const MetaGoogleAds = () => {
  const navigate = useNavigate();
  const [showInquiry, setShowInquiry] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmitInquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      inquiryType: "Digital Marketing",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      website: formData.get("website") as string,
      goals: formData.get("goals") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-inquiry-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your inquiry has been sent successfully. We'll get back to you soon!",
      });

      setShowInquiry(false);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const digitalMarketingTypes = [
    {
      title: "Search Engine Marketing (SEM)",
      description: "Paid advertising on search engines to capture high-intent traffic when users search for your products or services",
      examples: ["Google Ads search campaigns", "Bing Ads", "Shopping campaigns", "Local service ads", "Performance Max campaigns"]
    },
    {
      title: "Social Media Advertising",
      description: "Targeted advertising across social platforms to reach specific demographics and interests",
      examples: ["Facebook & Instagram ads", "LinkedIn sponsored content", "Twitter ads", "TikTok advertising", "YouTube ads"]
    },
    {
      title: "Display & Remarketing",
      description: "Visual banner advertising and retargeting campaigns to re-engage website visitors",
      examples: ["Google Display Network", "Facebook remarketing", "Dynamic product ads", "Lookalike audiences", "Video remarketing"]
    }
  ];

  const campaignResults = [
    {
      id: 1,
      platform: 'Meta Ads',
      client: 'Omicare - Healthcare Platform',
      duration: '2 days',
      image: '/lovable-uploads/70da02da-61cb-4f16-859a-5cce52e70323.png',
      metrics: {
        websitePurchases: 1,
        costPerPurchase: '₹334.95',
        totalSpent: '₹334.95',
        roas: '100%'
      },
      description: 'Healthcare platform campaign targeting specific demographics for medical product sales.',
      tags: ['Healthcare', 'B2C', 'Medical Products']
    },
    {
      id: 2,
      platform: 'Meta Ads',
      client: 'Vacuum Cleaner E-commerce',
      duration: '1 day',
      image: '/lovable-uploads/512eab13-bea4-47d7-b5e0-4303c2d7f5f8.png',
      metrics: {
        websitePurchases: 2,
        costPerPurchase: '₹211.04',
        totalSpent: '₹422.08',
        roas: '200%'
      },
      description: 'High-performance campaign for home appliances with excellent conversion rates.',
      tags: ['E-commerce', 'Home Appliances', 'DTC']
    },
    {
      id: 3,
      platform: 'Google Ads',
      client: 'Red Karpet - Fashion Brand',
      duration: 'Ongoing',
      image: '/lovable-uploads/5353e765-8c8e-4009-ac88-42e12d8041ac.png',
      metrics: {
        reach: '42,948',
        impressions: '47,620',
        totalSpent: '₹820.53',
        linkClicks: '231',
        cpc: '₹3.55'
      },
      description: 'Fashion brand campaign with high reach and engagement targeting style-conscious consumers.',
      tags: ['Fashion', 'Lifestyle', 'Brand Awareness']
    }
  ];

  const adStrategies = [
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Advanced demographic, behavioral, and interest-based targeting to reach your ideal customers.',
      tips: ['Lookalike audiences', 'Custom audiences', 'Interest layering', 'Behavioral targeting']
    },
    {
      icon: BarChart3,
      title: 'Campaign Optimization',
      description: 'Continuous A/B testing and optimization to maximize ROI and reduce acquisition costs.',
      tips: ['Split testing ads', 'Bid optimization', 'Creative rotation', 'Landing page alignment']
    },
    {
      icon: Zap,
      title: 'Conversion Tracking',
      description: 'Comprehensive tracking setup to measure and attribute every conversion accurately.',
      tips: ['Facebook Pixel', 'Google Analytics', 'Conversion API', 'UTM parameters']
    },
    {
      icon: Award,
      title: 'Creative Strategy',
      description: 'Compelling ad creatives that stop the scroll and drive action across all platforms.',
      tips: ['Video content', 'Carousel ads', 'Dynamic ads', 'User-generated content']
    }
  ];

  const platformFeatures = {
    meta: [
      'Facebook & Instagram advertising',
      'Advanced audience targeting',
      'Lookalike audience creation',
      'Dynamic product ads',
      'Video & carousel formats',
      'Instagram Stories & Reels ads'
    ],
    google: [
      'Search campaign optimization',
      'Display network advertising',
      'YouTube ads management',
      'Shopping campaigns',
      'Smart bidding strategies',
      'Performance Max campaigns'
    ]
  };

  const benefits = [
    "Immediate traffic and lead generation",
    "Precise audience targeting and segmentation",
    "Measurable ROI and performance tracking",
    "Scalable budget management",
    "Brand awareness and visibility boost",
    "Competitive advantage in digital space"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full">
              <Target className="text-black" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Digital Marketing</h1>
              <p className="text-gray-300 text-lg">Master the art of digital advertising with Meta & Google Ads</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">What is Digital Marketing?</h2>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Digital marketing is the practice of promoting products, services, or brands through digital channels 
              and platforms. It encompasses various online strategies including paid advertising, social media marketing, 
              email campaigns, and content marketing to reach and engage target audiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With the power of data-driven insights and precise targeting, digital marketing allows businesses to 
              reach the right people at the right time with the right message, maximizing ROI and driving sustainable growth.
            </p>
          </div>
        </section>

        {/* Types of Digital Marketing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Types of Digital Marketing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {digitalMarketingTypes.map((type, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="mr-2 text-cyan-400" size={16} />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Platform Expertise</h2>
          
          <Tabs defaultValue="meta" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 mb-8">
              <TabsTrigger value="meta" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black">
                Meta Ads (Facebook & Instagram)
              </TabsTrigger>
              <TabsTrigger value="google" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black">
                Google Ads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="meta" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Meta Advertising Services</h3>
                  <ul className="space-y-3">
                    {platformFeatures.meta.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Why Choose Meta Ads?</h4>
                  <p className="text-gray-300 mb-4">
                    With over 3 billion users across Facebook and Instagram, Meta platforms offer unparalleled 
                    reach and sophisticated targeting options to connect with your ideal customers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Visual Content Performance</span>
                      <span className="text-cyan-400">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile Optimization</span>
                      <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Targeting Precision</span>
                      <span className="text-cyan-400">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="google" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Google Advertising Services</h3>
                  <ul className="space-y-3">
                    {platformFeatures.google.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Why Choose Google Ads?</h4>
                  <p className="text-gray-300 mb-4">
                    Capture high-intent customers at the moment they're searching for your products or services. 
                    Google Ads puts your business in front of ready-to-buy prospects.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Search Intent Capture</span>
                      <span className="text-cyan-400">99%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cross-Platform Reach</span>
                      <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Tracking</span>
                      <span className="text-cyan-400">97%</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Campaign Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Real Campaign Results</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            See how I've helped businesses across industries achieve exceptional ROI with targeted advertising campaigns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignResults.map((campaign, index) => (
              <Card key={campaign.id} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                      {campaign.platform}
                    </Badge>
                    <span className="text-sm text-gray-400">{campaign.duration}</span>
                  </div>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                    {campaign.client}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {campaign.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {campaign.metrics.websitePurchases && (
                        <div>
                          <div className="text-gray-400">Purchases</div>
                          <div className="text-xl font-bold text-cyan-400">{campaign.metrics.websitePurchases}</div>
                        </div>
                      )}
                      {campaign.metrics.reach && (
                        <div>
                          <div className="text-gray-400">Reach</div>
                          <div className="text-xl font-bold text-cyan-400">{campaign.metrics.reach}</div>
                        </div>
                      )}
                      {campaign.metrics.costPerPurchase && (
                        <div>
                          <div className="text-gray-400">Cost/Purchase</div>
                          <div className="text-lg font-bold text-green-400">{campaign.metrics.costPerPurchase}</div>
                        </div>
                      )}
                      {campaign.metrics.cpc && (
                        <div>
                          <div className="text-gray-400">CPC</div>
                          <div className="text-lg font-bold text-green-400">{campaign.metrics.cpc}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-gray-400">Total Spent</div>
                        <div className="text-lg font-bold text-orange-400">{campaign.metrics.totalSpent}</div>
                      </div>
                      {campaign.metrics.linkClicks && (
                        <div>
                          <div className="text-gray-400">Link Clicks</div>
                          <div className="text-lg font-bold text-purple-400">{campaign.metrics.linkClicks}</div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {campaign.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Strategy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-cyan-400">My Advertising Strategy</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <Card key={strategy.title} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 w-fit mb-4">
                      <IconComponent className="text-black" size={24} />
                    </div>
                    <CardTitle className="text-white text-lg">{strategy.title}</CardTitle>
                    <CardDescription className="text-gray-300">{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Why Digital Advertising Matters for Your Business</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <TrendingUp className="mr-3 text-cyan-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Let's create high-converting ad campaigns that drive real results for your business. 
              Get a free consultation and strategy session.
            </p>
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Mail className="mr-2" size={20} />
              Send Digital Marketing Inquiry
            </button>
          </div>
        </section>
      </div>

      {/* Inquiry Popup */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInquiry(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </Button>
            
            <h3 className="text-2xl font-bold text-white mb-6">Digital Marketing Inquiry</h3>
            
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Name *
                  </label>
                  <Input 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </label>
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </label>
                  <Input 
                    name="phone" 
                    placeholder="Your phone number" 
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Company
                  </label>
                  <Input 
                    name="company" 
                    placeholder="Your company" 
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Website URL</label>
                <Input 
                  name="website" 
                  placeholder="https://yourwebsite.com" 
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Campaign Goals & Requirements</label>
                <Textarea 
                  name="goals" 
                  placeholder="Tell us about your marketing goals..." 
                  className="min-h-[100px] bg-gray-700 border-gray-600 text-white" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Budget Range</label>
                  <Input 
                    name="budget" 
                    placeholder="e.g., $5,000 - $10,000/month" 
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Timeline</label>
                  <Input 
                    name="timeline" 
                    placeholder="e.g., Start in 2 weeks" 
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowInquiry(false)}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-cyan-400 hover:bg-cyan-300 text-black" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetaGoogleAds;

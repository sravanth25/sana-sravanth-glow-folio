
import { useState } from 'react';
import { ArrowLeft, TrendingUp, Target, DollarSign, Users, ShoppingCart, Instagram, Globe, Mail, Phone, Building, MessageSquare, Eye, BarChart3, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const MetaGoogleAds = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="text-xl font-bold text-cyan-400">Meta & Google Ads Mastery</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meta & Google <span className="text-cyan-400">Ads Expertise</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Drive qualified traffic, generate leads, and boost sales with data-driven advertising campaigns 
            that deliver measurable ROI across Meta and Google platforms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">200%+</div>
              <div className="text-gray-400">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">₹3.55</div>
              <div className="text-gray-400">Avg CPC</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">47K+</div>
              <div className="text-gray-400">Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">231</div>
              <div className="text-gray-400">Conversions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Platform <span className="text-cyan-400">Expertise</span>
          </h2>
          
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
        </div>
      </section>

      {/* Campaign Results */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real Campaign <span className="text-cyan-400">Results</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Advertising <span className="text-cyan-400">Strategy</span>
          </h2>

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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your <span className="text-cyan-400">Business</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create high-converting ad campaigns that drive real results for your business. 
            Get a free consultation and strategy session.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen}>
              <DialogTrigger asChild>
                <Button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25">
                  Get Free Strategy Session
                  <Target className="ml-2" size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-white">Request Strategy Session</DialogTitle>
                  <DialogDescription className="text-gray-300">
                    Fill out the form below and I'll get back to you within 24 hours with a custom strategy for your business.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                    <Input id="fullName" className="bg-gray-800 border-gray-700 text-white" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input id="email" type="email" className="bg-gray-800 border-gray-700 text-white" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                    <Input id="phone" className="bg-gray-800 border-gray-700 text-white" placeholder="+91 12345 67890" />
                  </div>
                  <div>
                    <Label htmlFor="organization" className="text-white">Organization</Label>
                    <Input id="organization" className="bg-gray-800 border-gray-700 text-white" placeholder="Your company name" />
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-white">Monthly Ad Budget</Label>
                    <Input id="budget" className="bg-gray-800 border-gray-700 text-white" placeholder="₹50,000" />
                  </div>
                  <div>
                    <Label htmlFor="details" className="text-white">Project Details *</Label>
                    <Textarea id="details" className="bg-gray-800 border-gray-700 text-white" placeholder="Tell me about your business goals, target audience, and what you're looking to achieve with advertising..." />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold">
                    Send Inquiry
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Link to="/work" className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105">
              View More Work
              <Eye className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaGoogleAds;

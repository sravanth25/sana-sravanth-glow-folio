
import { useState } from 'react';
import { ArrowLeft, Search, Code, TrendingUp, Target, FileText, CheckCircle, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SeoGuide = () => {
  const navigate = useNavigate();
  const [showInquiry, setShowInquiry] = useState(false);

  const seoTypes = [
    {
      title: "On-Page SEO",
      description: "Optimizing individual web pages to rank higher and earn more relevant traffic",
      examples: ["Title tags optimization", "Meta descriptions", "Header tags (H1-H6)", "Internal linking", "Content optimization"]
    },
    {
      title: "Off-Page SEO",
      description: "Activities outside your website that impact your rankings within search engine results",
      examples: ["Backlink building", "Social media marketing", "Guest posting", "Brand mentions", "Local citations"]
    },
    {
      title: "Technical SEO",
      description: "Optimizing your website's technical aspects to help search engines crawl and index your site",
      examples: ["Site speed optimization", "Mobile responsiveness", "XML sitemaps", "Schema markup", "SSL certificates"]
    }
  ];

  const metaTagExamples = [
    {
      tag: "Title Tag",
      code: `<title>Best Digital Marketing Agency | SEO & PPC Services</title>`,
      description: "Most important on-page SEO element. Keep it under 60 characters."
    },
    {
      tag: "Meta Description",
      code: `<meta name="description" content="Boost your online presence with our expert SEO and digital marketing services. Get more traffic, leads, and sales with proven strategies." />`,
      description: "Summarizes page content in 150-160 characters. Influences click-through rates."
    },
    {
      tag: "Open Graph",
      code: `<meta property="og:title" content="Digital Marketing Services" />
<meta property="og:description" content="Professional SEO and marketing solutions" />
<meta property="og:image" content="https://yoursite.com/image.jpg" />`,
      description: "Controls how your content appears when shared on social media platforms."
    },
    {
      tag: "Schema Markup",
      code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Agency",
  "url": "https://yoursite.com",
  "description": "Digital marketing agency"
}
</script>`,
      description: "Helps search engines understand your content better."
    }
  ];

  const benefits = [
    "Increased organic traffic and visibility",
    "Better user experience and site performance",
    "Higher conversion rates and ROI",
    "Long-term sustainable growth",
    "Competitive advantage in search results",
    "Enhanced brand credibility and trust"
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
              <Search className="text-black" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold">SEO Optimization Guide</h1>
              <p className="text-gray-300 text-lg">Master the art of search engine optimization</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">What is SEO?</h2>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Search Engine Optimization (SEO) is the practice of optimizing your website to increase its visibility 
              when people search for products or services related to your business in search engines like Google, Bing, and Yahoo.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The better visibility your pages have in search results, the more likely you are to garner attention 
              and attract prospective and existing customers to your business.
            </p>
          </div>
        </section>

        {/* Types of SEO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Types of SEO</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {seoTypes.map((type, index) => (
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

        {/* Meta Tags Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Essential Meta Tags & Code Examples</h2>
          <div className="space-y-8">
            {metaTagExamples.map((example, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <Code className="mr-3 text-cyan-400" size={24} />
                  <h3 className="text-xl font-bold text-white">{example.tag}</h3>
                </div>
                <p className="text-gray-300 mb-4">{example.description}</p>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Why SEO Matters for Your Business</h2>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your SEO?</h2>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Let's work together to improve your search engine rankings and drive more organic traffic to your website.
            </p>
            <button
              onClick={() => setShowInquiry(true)}
              className="inline-flex items-center px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Mail className="mr-2" size={20} />
              Send SEO Inquiry
            </button>
          </div>
        </section>
      </div>

      {/* Inquiry Popup */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-6">SEO Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your organization name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Current Website (if any)</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">SEO Goals & Requirements</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none resize-none"
                  placeholder="Tell us about your SEO goals, target keywords, current challenges, and what you'd like to achieve..."
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowInquiry(false)}
                  className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-300"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoGuide;

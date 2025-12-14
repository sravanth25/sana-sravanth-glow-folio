import { useState } from 'react';
import { ArrowLeft, ExternalLink, Eye, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
        id: 1,
        title: "Astrosravs — Astrology Website",
        category: "website",
        description: "Personalized Tarot, Numerology & Name-Correction — guidance that aligns with your life.",
        image: "https://ik.imagekit.io/sravanth/Screenshot%202025-11-30%20191039.png", 
        link: "https://www.astrosravs.in/",
        date: "2024",
        tags: ["Responsive", "CMS", "WhatsApp booking", "UX-focused"],
        metrics: [
          "Higher engagement and bookings via WhatsApp",
          "Stronger trust signals from certificate + testimonials",
          "Simpler intake for readings"
        ],
        caseStudy: {
          problem: "Visitors seeking spiritual guidance needed an easy, trustworthy way to book readings, verify expertise, and view real client results.",
          solution: "Built a conversion-focused site with clear services sections, WhatsApp booking flow, testimonials carousel, and certificate proof to build trust.",
          outcome: "Higher engagement and bookings via WhatsApp, stronger trust signals from certificate + testimonials, and simpler intake for readings."
        },
        testimonial: "“Everything she said was true — it was an unforgettable experience.” — Referred Client"
    },
    {
        id: 2,
        title: "Reymedic — Pharmacy Website",
        category: "website",
        description: "Community pharmacy with online product browsing & prescription services.",
        image: "https://ik.imagekit.io/sravanth/Screenshot%202025-11-30%20192717.png",
        link: "https://www.reymedic.com/",
        date: "2024",
        tags: ["E-commerce-lite", "Product catalog", "Prescription upload", "SEO basics"],
        metrics: [
            "Reduced in-store phone queries",
            "Streamlined prescription handling",
            "Better conversion from product pages to in-store / pickup visits"
        ],
        caseStudy: {
          problem: "Local customers needed a reliable online way to browse products, submit prescriptions, and get quick answers from pharmacists.",
          solution: "Designed a clear product-first site with an easy prescription upload flow, health tips, and visible pharmacist expertise.",
          outcome: "Reduced in-store phone queries, streamlined prescription handling and better conversion from product pages to in-store / pickup visits."
        },
        testimonial: "“Fast service, competitive prices, and genuine care.” — Michael Chen"
    },
    {
        id: 3,
        title: "Satyanarayancollege — College Website",
        category: "website",
        description: "Educational institute website showcasing courses, admissions, campus life, achievements, and community initiatives.",
        image: "https://ik.imagekit.io/sravanth/Screenshot%202025-11-30%20193158.png",
        link: "https://satyanarayancollege.in/",
        date: "2023",
        tags: ["Courses & Programs Showcase", "Faculty & Leadership Profiles", "Achievements & Placements", "Campus Life & Events", "Admissions & Contact Information"],
        metrics: [
            "Improved information discoverability for students & parents",
            "Higher-quality admission enquiries through clear course structure",
            "Stronger credibility via achievements, placement partners & community outreach"
        ]
    },
    {
        id: 4,
        title: "Botivo — WhatsApp Web Chat (API Connected)",
        category: "website",
        description: "Real-time web-based WhatsApp chat interface fully integrated with the WhatsApp Cloud API.",
        image: "https://ik.imagekit.io/sravanth/Screenshot%202025-11-30%20193807.png",
        date: "2023",
        tags: ["WhatsApp Cloud API", "Real-time Chat UI", "Message Automation Ready", "API-driven Messaging"],
        metrics: [
            "Seamless two-way messaging using WhatsApp Cloud API",
            "Faster customer responses with a clean, intuitive chat interface",
            "Extendable for chatbot flows, n8n automations, and CRM integrations"
        ]
    },
    {
        id: 5,
        title: "DigiStellar — Agency Website",
        category: "website",
        description: "Futuristic digital agency website built to showcase services, projects, branding, and digital solutions.",
        image: "https://ik.imagekit.io/sravanth/Screenshot%202025-11-30%20194204.png",
        link: "https://www.digistellar.in/",
        date: "2023",
        tags: ["Web & App Development", "Branding & UI/UX", "Digital Marketing", "Automation & AI Solutions"],
        metrics: [
            "Stronger agency positioning with premium visual identity",
            "Improved leads via structured services + contact funnels",
            "Portfolio-driven trust building with showcased client projects"
        ]
    },
    {
        id: 6,
        title: "AI Chatbot — Powered by n8n",
        category: "n8n",
        description: "Instant, accurate answers about your company, services, documents, and processes — available 24/7.",
        image: "https://ik.imagekit.io/sravanth/AI%20CHATBOT%20(2).jpg",
        link: "/ai-chatbot-work", // Updated link
        date: "2024",
        tags: ["Fast", "Automated", "WhatsApp-ready", "Customer-first UX"],
        metrics: [
            "Faster customer responses with automated WhatsApp chat",
            "Higher lead conversion through instant answers & guided flows",
            "Reduced support workload with self-serve service explanations",
            "Consistent, accurate information across all customer interactions"
        ]
    },
    {
        id: 7,
        title: "Email Automation — Powered by n8n",
        category: "n8n",
        description: "Automated email sequences, follow-ups, and personalized campaigns to nurture leads and engage customers.",
        image: "https://ik.imagekit.io/sravanth/AI%20CHATBOT%20(3).jpg",
        link: "/email-automation-work",
        date: "2024",
        tags: ["Lead Nurturing", "Automated Follow-ups", "Personalized Campaigns", "Trigger-based Emails"],
        metrics: [
            "Increased open rates and click-throughs",
            "Higher engagement with targeted content",
            "Improved lead-to-customer conversion rates",
            "Saved time and resources on manual email tasks"
        ]
    }
];


  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Website Design' },
    { id: 'n8n', label: 'N8N Automation' },
    
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="text-xl font-bold text-cyan-400">My Portfolio</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-cyan-400">Work</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore my portfolio of successful projects across UI/UX design, web development, 
            and digital marketing campaigns that drove real business results.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 mb-8">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={project.link}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="text-white" size={24} />
                    </div>
                  </div>
                
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar size={14} />
                        {project.date}
                      </div>
                      <ExternalLink size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Link>

                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something <span className="text-cyan-400">Amazing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can help bring your next project to life with proven strategies and exceptional design.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          >
            Let's Work Together
            <ExternalLink className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;

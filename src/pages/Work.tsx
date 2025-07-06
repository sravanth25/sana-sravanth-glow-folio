
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
      title: "E-commerce Platform Redesign",
      category: "ui-ux",
      description: "Complete UI/UX overhaul of an e-commerce platform resulting in 40% increase in conversion rates",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "2024",
      tags: ["UI/UX", "E-commerce", "Mobile First"],
      metrics: ["40% ↑ Conversion", "25% ↑ User Engagement"]
    },
    {
      id: 2,
      title: "SaaS Dashboard Interface",
      category: "ui-ux",
      description: "Modern dashboard design for B2B SaaS platform with complex data visualization",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      date: "2024",
      tags: ["Dashboard", "SaaS", "Data Viz"],
      metrics: ["60% ↑ Task Completion", "35% ↓ Support Tickets"]
    },
    {
      id: 3,
      title: "Tech Startup Website",
      category: "website",
      description: "Full website design and development for AI startup with modern animations",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      date: "2024",
      tags: ["React", "Animation", "Startup"],
      metrics: ["200% ↑ Lead Generation", "50% ↑ Time on Site"]
    },
    {
      id: 4,
      title: "Healthcare Platform",
      category: "website",
      description: "Responsive website for telemedicine platform with patient portal integration",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      date: "2023",
      tags: ["Healthcare", "Portal", "Responsive"],
      metrics: ["150% ↑ Patient Bookings", "45% ↑ User Satisfaction"]
    },
    {
      id: 5,
      title: "Fashion Brand Campaign",
      category: "meta-ads",
      description: "Meta ads campaign for luxury fashion brand targeting millennials",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      date: "2024",
      tags: ["Fashion", "Luxury", "Millennials"],
      metrics: ["300% ROAS", "2.5M+ Impressions", "15K+ Conversions"]
    },
    {
      id: 6,
      title: "SaaS Product Launch",
      category: "meta-ads",
      description: "Complete Meta ads strategy for B2B SaaS product launch and user acquisition",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "2024",
      tags: ["B2B", "SaaS", "Launch"],
      metrics: ["450% ROAS", "5K+ Qualified Leads", "$2.50 CPC"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'website', label: 'Website Design' },
    { id: 'meta-ads', label: 'Meta Ads Results' }
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
            <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 mb-8">
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

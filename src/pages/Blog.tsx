
import { useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Astro Sravs - Astrology Platform",
      url: "https://www.astrosravs.in",
      description: "A comprehensive astrology platform with modern UI/UX design, responsive layout, and seamless user experience for astrology consultations.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop",
      date: "2024",
      readTime: "5 min read",
      category: "Astrology Platform",
      highlights: [
        "Modern responsive design",
        "User-friendly consultation booking",
        "Mobile-first approach",
        "SEO optimized"
      ]
    },
    {
      id: 2,
      title: "Sravanth Live - Personal Portfolio",
      url: "https://www.sravanth.live",
      description: "A sleek personal portfolio website showcasing professional work and achievements with clean design and smooth animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      date: "2024",
      readTime: "4 min read",
      category: "Portfolio Website",
      highlights: [
        "Clean, professional design",
        "Smooth animations",
        "Fast loading performance",
        "Contact integration"
      ]
    },
    {
      id: 3,
      title: "Docu Home Secure - Documentation Platform",
      url: "https://preview--docu-home-secure.lovable.app/",
      description: "A secure documentation platform with advanced features for document management, user authentication, and collaborative editing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      date: "2024",
      readTime: "6 min read",
      category: "Documentation Platform",
      highlights: [
        "Secure authentication system",
        "Collaborative editing features",
        "Advanced document management",
        "Real-time updates"
      ]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Website Design: Trends and Innovations",
      excerpt: "Exploring the latest trends in web design and how they impact user experience and business growth.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Responsive Design Best Practices for Modern Websites",
      excerpt: "Learn how to create websites that work seamlessly across all devices and screen sizes.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "SEO Optimization Through Smart Design Choices",
      excerpt: "How design decisions can significantly impact your website's search engine rankings.",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="text-xl font-bold text-cyan-400">Website Design Blog</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Website <span className="text-cyan-400">Design</span> Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how modern website design transforms businesses and creates exceptional user experiences. 
            Explore my featured projects and insights into the world of web design.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
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
                    <span className="text-xs text-cyan-400 font-semibold">{project.category}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar size={14} />
                      {project.date}
                    </div>
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
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Visit Website
                    <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Blog Posts Section */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Latest <span className="text-cyan-400">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-400 text-black text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      {post.readTime}
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
            Ready to Build Your <span className="text-cyan-400">Website</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a stunning website that represents your brand and drives results. 
            Get in touch to discuss your project requirements.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          >
            Start Your Project
            <ExternalLink className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;

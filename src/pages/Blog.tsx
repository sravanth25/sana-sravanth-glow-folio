import { ArrowLeft, Calendar, Clock, ExternalLink, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Astro Sravs - Astrology Platform",
      url: "https://www.astrosravs.in",
      description: "A comprehensive astrology platform with modern UI/UX design, responsive layout, and seamless user experience for astrology consultations.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop",
      date: "2024",
      readTime: "5 min",
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
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-['Manrope',_sans-serif]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-slate-500 hover:text-slate-900 transition-colors font-medium">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="text-xl font-extrabold text-slate-900 tracking-tighter">Sravanth's Blog</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
            Website <span className="text-slate-500">Design</span> Showcase
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover how modern website design transforms businesses and creates exceptional user experiences. 
            Explore my featured projects and insights into the world of web design.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-8 pb-20">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="text-white w-8 h-8" />
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 px-2 py-1 bg-slate-100 rounded-md">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Calendar size={14} />
                      {project.date}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Features</h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors"
                    >
                      Visit Website
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Posts Section */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 cursor-pointer flex flex-col"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-black transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's create a stunning website that represents your brand and drives results. 
            Get in touch to discuss your project requirements.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-slate-800 transition-colors hover:scale-105 transform duration-300 shadow-lg"
          >
            Start Your Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;

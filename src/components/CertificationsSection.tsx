
import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    {
      title: 'Digital Marketing Certificate',
      issuer: 'Internshala',
      year: '2023',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Fundamentals of Digital Marketing',
      issuer: 'Google',
      year: '2023',
      color: 'from-green-400 to-cyan-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="text-cyan-400">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className="group bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10 border border-gray-700 hover:border-cyan-400/50">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="text-black" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

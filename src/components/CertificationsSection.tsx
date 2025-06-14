
import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const certifications = [{
    title: 'Digital Marketing Certificate',
    issuer: 'Internshala',
    year: '2023',
    color: 'from-cyan-400 to-blue-500'
  }, {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    year: '2023',
    color: 'from-green-400 to-cyan-400'
  }];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-cyan-400 font-medium">{cert.year}</p>
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

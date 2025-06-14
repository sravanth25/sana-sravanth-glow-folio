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
  return;
};
export default CertificationsSection;
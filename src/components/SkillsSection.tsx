import { Search, Target, Workflow, Layout, Image, Share2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from './ui/grid-feature-cards';
import n8nLogo from '@/assets/n8n-logo.png';

const skills = [
  {
    title: 'Google Ads',
    icon: Target,
    description: 'Expert in creating high-converting Google Ads campaigns with strategic targeting and optimization.',
  },
  {
    title: 'Meta Ads',
    icon: Share2,
    description: 'Specialized in Facebook and Instagram advertising with proven ROI-driven strategies.',
  },
  {
    title: 'N8N',
    icon: (props: React.SVGProps<SVGSVGElement>) => <img src={n8nLogo} alt="N8N" className="size-6" />,
    description: 'Automation specialist using N8N to streamline workflows and boost productivity.',
  },
  {
    title: 'SEO',
    icon: Search,
    description: 'Data-driven SEO strategies to improve rankings and drive organic traffic growth.',
  },
  {
    title: 'Website Design',
    icon: Layout,
    description: 'Creating beautiful, responsive websites that deliver exceptional user experiences.',
  },
  {
    title: 'Canva',
    icon: Image,
    description: 'Professional graphic design and visual content creation for marketing campaigns.',
  },
];

const SkillsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const AnimatedContainer = ({ delay = 0.1, className, children }: { delay?: number; className?: string; children: React.ReactNode }) => {
    if (shouldReduceMotion) {
      return <div className={className}>{children}</div>;
    }

    return (
      <motion.div
        initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
        whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="mx-auto w-full max-w-7xl px-6 space-y-8">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl">
            Core <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
            Everything you need to grow your business with digital marketing expertise.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {skills.map((skill, i) => (
            <FeatureCard key={i} feature={skill} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default SkillsSection;

import React, { useState } from 'react';
import { Github, Brain, Shield, Book, School, Cpu, Briefcase, ExternalLink, Code2 } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Arogyam Kiosk',
      description: 'Revolutionary AI/ML-powered healthcare platform combining five predictive models with advanced NLP chatbot capabilities for personalized medical assistance.',
      icon: <Brain className="w-12 h-12" />,
      tech: ['TensorFlow', 'PyTorch', 'React', 'Node.js'],
      github: 'https://github.com/sudhaanshuu/Arogyam',
      metrics: ['50,000+ Predictions', '98% Accuracy', '30% Faster Diagnoses'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Arogyam Kiosk',
      description: 'Revolutionary AI/ML-powered healthcare platform combining five predictive models with advanced NLP chatbot capabilities for personalized medical assistance.',
      icon: <Brain className="w-12 h-12" />,
      tech: ['TensorFlow', 'PyTorch', 'React', 'Node.js'],
      github: 'https://github.com/sudhaanshuu/Arogyam',
      metrics: ['50,000+ Predictions', '98% Accuracy', '30% Faster Diagnoses'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Arogyam Kiosk',
      description: 'Revolutionary AI/ML-powered healthcare platform combining five predictive models with advanced NLP chatbot capabilities for personalized medical assistance.',
      icon: <Brain className="w-12 h-12" />,
      tech: ['TensorFlow', 'PyTorch', 'React', 'Node.js'],
      github: 'https://github.com/sudhaanshuu/Arogyam',
      metrics: ['50,000+ Predictions', '98% Accuracy', '30% Faster Diagnoses'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Arogyam Kiosk',
      description: 'Revolutionary AI/ML-powered healthcare platform combining five predictive models with advanced NLP chatbot capabilities for personalized medical assistance.',
      icon: <Brain className="w-12 h-12" />,
      tech: ['TensorFlow', 'PyTorch', 'React', 'Node.js'],
      github: 'https://github.com/sudhaanshuu/Arogyam',
      metrics: ['50,000+ Predictions', '98% Accuracy', '30% Faster Diagnoses'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Arogyam Kiosk',
      description: 'Revolutionary AI/ML-powered healthcare platform combining five predictive models with advanced NLP chatbot capabilities for personalized medical assistance.',
      icon: <Brain className="w-12 h-12" />,
      tech: ['TensorFlow', 'PyTorch', 'React', 'Node.js'],
      github: 'https://github.com/sudhaanshuu/Arogyam',
      metrics: ['50,000+ Predictions', '98% Accuracy', '30% Faster Diagnoses'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Anti-Ragging System',
      description: 'Next-gen campus safety solution utilizing advanced ML algorithms and real-time monitoring to create secure educational environments.',
      icon: <Shield className="w-12 h-12" />,
      tech: ['Machine Learning', 'Python', 'Real-time Analytics'],
      github: 'https://github.com/sudhaanshuu/CollegeWellbeing-SupportSystem',
      metrics: ['25% Safety Improvement', '1000+ Users', '24/7 Monitoring'],
      color: 'from-blue-500 to-purple-500'
    },
    // ... other projects with enhanced details
  ];

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Innovation Portfolio
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              isActive={activeProject === index}
              onHover={() => setActiveProject(index)}
              onLeave={() => setActiveProject(null)}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  icon,
  tech,
  github,
  metrics,
  color,
  isActive,
  onHover,
  onLeave
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  tech: string[];
  github: string;
  metrics: string[];
  color: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      className="group relative rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 p-6 h-full transform transition-transform duration-500 hover:translate-z-10">
        <div className={`text-purple-400 transition-all duration-500 transform group-hover:scale-110 ${isActive ? 'rotate-12' : ''}`}>
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white mt-4 mb-2">
          {title}
        </h3>

        <p className="text-purple-200/80 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-2 mb-4">
          {metrics.map((metric, i) => (
            <div key={i} className="text-sm text-purple-300/80 flex items-center">
              <Code2 className="w-4 h-4 mr-2 text-purple-400" />
              {metric}
            </div>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Github className="w-4 h-4 mr-2" />
          View Project
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
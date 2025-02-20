import { Github, Brain, Shield, Book, School, Cpu, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

// Define the types for ProjectCard props
interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tech: string[];
  github: string;
}

// Define the type for each project
const projects: ProjectCardProps[] = [
  {
    title: 'Arogyam Kiosk',
    description: 'AI/ML-based website with five models for disease prediction and an NLP chatbot, enhancing healthcare accessibility and personalization.',
    icon: <Brain className="w-12 h-12" />,
    tech: ['AI/ML', 'NLP', 'Python', 'React'],
    github: 'https://github.com/sudhaanshuu/Arogyam',
  },
  {
    title: 'Anti-Ragging System',
    description: 'ML model to mitigate ragging incidents, leveraging data-driven insights for a safer campus environment, decreasing reported safety concerns by 25%.',
    icon: <Shield className="w-12 h-12" />,
    tech: ['Machine Learning', 'Python', 'Data Analysis'],
    github: 'https://github.com/sudhaanshuu/CollegeWellbeing-SupportSystem',
  },
  {
    title: 'Placement Help',
    description: 'Open-source project offering free resources for placement prep, including DSA practice, coding exercises, and essential study materials.',
    icon: <Book className="w-12 h-12" />,
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/sudhaanshuu/Placement_Help',
  },
  {
    title: 'College Insider',
    description: 'Versatile app for campus tours, library book availability, and lost-and-found section, making campus life easier for students and staff.',
    icon: <School className="w-12 h-12" />,
    tech: ['React', 'Firebase', 'Node.js'],
    github: 'https://github.com/sudhaanshuu/College-Insider',
  },
  {
    title: 'Job Role Prediction',
    description: 'AI-powered application for predicting suitable job roles based on user skills, experience, and preferences, providing data-driven career guidance.',
    icon: <Briefcase className="w-12 h-12" />,
    tech: ['React', 'MySql', 'Node.js'],
    github: 'https://github.com/sudhaanshuu/Placement_Help',
  },
  {
    title: 'Data Acquisition System',
    description: 'Embedded C project utilizing USART, ADC, and potentiometer to obtain and transmit analog input data, with push button-triggered data acquisition.',
    icon: <Cpu className="w-12 h-12" />,
    tech: ['Embedded C', 'USART', 'ADC'],
    github: 'https://github.com/sudhaanshuu/Embedded_C/tree/main/SuProject5',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(200,0,255,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Correctly typed ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  tech,
  github,
}) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(200, 0, 255, 0.3)' }}
    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    className="group relative rounded-lg overflow-hidden border border-purple-500/20 text-gray-400 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
  >
    <div className="p-6">
      <div className="text-purple-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t: string, i: number) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-full border border-purple-500/30 text-purple-500"
          >
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-purple-500 transition-colors"
        >
          <Github className="w-4 h-4 mr-1" />
          View Project
        </a>
      </div>
    </div>
  </motion.div>
);

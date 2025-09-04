import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Shield, Book, School, Briefcase, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'Arogyam Kiosk',
    description: 'AI-powered healthcare platform with disease prediction models',
    longDescription: 'Comprehensive AI/ML-based healthcare website featuring five specialized disease prediction models and an intelligent NLP chatbot. The platform enhances healthcare accessibility by providing personalized health insights and recommendations.',
    icon: <Brain className="w-8 h-8" />,
    tech: ['React', 'Python', 'TensorFlow', 'NLP', 'Flask', 'MongoDB'],
    github: 'https://github.com/sudhaanshuu/Arogyam',
    featured: true,
  },
  {
    title: 'Anti-Ragging System',
    description: 'ML-based campus safety solution reducing incidents by 25%',
    longDescription: 'Advanced machine learning model designed to identify and mitigate ragging incidents in educational institutions. Uses data-driven insights to create a safer campus environment with real-time monitoring and alert systems.',
    icon: <Shield className="w-8 h-8" />,
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'SQLite'],
    github: 'https://github.com/sudhaanshuu/CollegeWellbeing-SupportSystem',
    featured: true,
  },
  {
    title: 'Placement Help',
    description: 'Open-source platform for coding interview preparation',
    longDescription: 'Comprehensive placement preparation platform offering free resources including DSA practice problems, coding exercises, interview tips, and study materials. Built to help students succeed in technical interviews.',
    icon: <Book className="w-8 h-8" />,
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/sudhaanshuu/Placement_Help',
    featured: false,
  },
  {
    title: 'College Insider',
    description: 'All-in-one campus management application',
    longDescription: 'Versatile campus application featuring virtual tours, real-time library book availability tracking, lost-and-found management, and student services integration to streamline campus life.',
    icon: <School className="w-8 h-8" />,
    tech: ['React', 'Firebase', 'Node.js', 'Google Maps API'],
    github: 'https://github.com/sudhaanshuu/College-Insider',
    featured: false,
  },
  {
    title: 'Job Role Prediction',
    description: 'AI-driven career guidance and job matching system',
    longDescription: 'Intelligent application that analyzes user skills, experience, and preferences to predict suitable job roles. Provides data-driven career guidance and personalized recommendations for professional development.',
    icon: <Briefcase className="w-8 h-8" />,
    tech: ['React', 'Python', 'MySQL', 'Scikit-learn', 'Node.js'],
    github: 'https://github.com/sudhaanshuu/Placement_Help',
    featured: true,
  },
  {
    title: 'Data Acquisition System',
    description: 'Embedded system for real-time data collection',
    longDescription: 'Sophisticated embedded C project utilizing USART communication, ADC conversion, and potentiometer input for precise analog data acquisition. Features push-button triggered data collection with real-time transmission capabilities.',
    icon: <Cpu className="w-8 h-8" />,
    tech: ['Embedded C', 'USART', 'ADC', 'Microcontrollers'],
    github: 'https://github.com/sudhaanshuu/Embedded_C/tree/main/SuProject5',
    featured: false,
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-12 text-gray-300"
        >
          Other Projects
        </motion.h3>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeaturedProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -10 }}
    className="group relative rounded-xl overflow-hidden bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative p-8">
      <div className="flex items-center mb-6">
        <div className="text-purple-400 mr-4">{project.icon}</div>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      </div>
      
      <p className="text-gray-400 mb-4 leading-relaxed">{project.longDescription}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          <Github className="w-4 h-4 mr-2" />
          Code
        </motion.a>
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="group relative rounded-lg overflow-hidden bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
  >
    <div className="p-6">
      <div className="text-purple-400 mb-4">{project.icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tech.slice(0, 3).map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded bg-purple-500/20 text-purple-300"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-400">
            +{project.tech.length - 3}
          </span>
        )}
      </div>
      
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
      >
        <Github className="w-4 h-4 mr-2" />
        View Code
      </a>
    </div>
  </motion.div>
);
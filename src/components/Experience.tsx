import { motion } from 'framer-motion';
import {  Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Tech Startup',
      period: 'Jun 2024 - Aug 2024',
      location: 'Remote',
      description: [
        'Developed responsive web applications using React and Node.js',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with cross-functional teams using Agile methodologies',
        'Optimized application performance resulting in 40% faster load times'
      ]
    },
    {
      title: 'AI/ML Research Assistant',
      company: 'University Research Lab',
      period: 'Jan 2024 - Present',
      location: 'Bhubaneswar, India',
      description: [
        'Researched and implemented machine learning models for healthcare applications',
        'Developed NLP chatbot with 85% accuracy in medical query responses',
        'Published research paper on AI-driven disease prediction systems',
        'Mentored junior students in machine learning concepts'
      ]
    },
    {
      title: 'Open Source Contributor',
      company: 'Various Projects',
      period: 'Mar 2023 - Present',
      location: 'Global',
      description: [
        'Contributed to multiple open-source projects on GitHub',
        'Maintained and developed educational resources for coding interviews',
        'Created tutorials and documentation for beginner developers',
        'Built community around placement preparation resources'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20"
              >
                <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-950" />
                
                <div className="p-6 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, Wrench, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Express.js', level: 80 },
      ]
    },
    {
      title: 'Database & Backend',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Deep Learning', level: 75 },
        { name: 'NLP', level: 70 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Scikit-learn', level: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Linux', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 80 },
        { name: 'GitHub Actions', level: 70 },
        { name: 'CI/CD', level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-purple-400 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 text-sm">{name}</span>
      <span className="text-purple-400 text-sm">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />
    </div>
  </div>
);
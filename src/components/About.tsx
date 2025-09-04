import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a dedicated Computer Science student with a strong foundation in full-stack development 
                and artificial intelligence. My journey in technology is driven by curiosity and a desire 
                to create meaningful solutions that make a difference.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                With experience in modern web technologies and machine learning, I enjoy tackling complex 
                challenges and turning innovative ideas into reality. I'm always eager to learn new 
                technologies and contribute to impactful projects.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">Passionate about AI & Web Development</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StatCard number="30+" label="Hackathons Participated" />
                <StatCard number="200" label="Global LeetCode Rank" />
                <StatCard number="9.28" label="Current CGPA" />
                <StatCard number="5+" label="Major Projects" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <EducationSection />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AchievementsSection />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 rounded-lg bg-gray-800/50 border border-purple-500/20 text-center"
  >
    <div className="text-3xl font-bold text-purple-400 mb-2">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </motion.div>
);

const EducationSection = () => (
  <div className="p-6 rounded-lg bg-gray-800/30 border border-purple-500/20">
    <div className="flex items-center mb-6">
      <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
      <h3 className="text-2xl font-semibold text-white">Education</h3>
    </div>
    
    <div className="space-y-6">
      <EducationCard
        degree="B.Tech in Computer Science"
        institution="C.V. Raman Global University"
        period="2022 - 2025"
        grade="CGPA: 9.28"
      />
      <EducationCard
        degree="Diploma in Computer Science"
        institution="Government Polytechnic Darbhanga"
        period="2019 - 2022"
        grade="CGPA: 8.9/10"
      />
    </div>
  </div>
);

const EducationCard = ({ degree, institution, period, grade }: {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}) => (
  <div className="border-l-4 border-purple-500 pl-4">
    <h4 className="text-lg font-semibold text-white">{degree}</h4>
    <p className="text-purple-400">{institution}</p>
    <p className="text-gray-500 text-sm">{period}</p>
    <p className="text-gray-400 text-sm mt-1">{grade}</p>
  </div>
);

const AchievementsSection = () => (
  <div className="p-6 rounded-lg bg-gray-800/30 border border-purple-500/20">
    <div className="flex items-center mb-6">
      <Award className="w-8 h-8 text-purple-400 mr-3" />
      <h3 className="text-2xl font-semibold text-white">Key Achievements</h3>
    </div>
    
    <ul className="space-y-3">
      {[
        'Global rank 200 on LeetCode weekly Contest',
        '3rd runner-up in SOH-2022',
        '1st place in Jagran Junior Award (2019)',
        'World Skill State level Finalist in Cloud Computing (2024)',
        '1st place in Block level Chess Contest (2022)',
        'C++ Certification from IIT Bombay'
      ].map((achievement, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start"
        >
          <Target className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0" />
          <span className="text-gray-400">{achievement}</span>
        </motion.li>
      ))}
    </ul>
  </div>
);
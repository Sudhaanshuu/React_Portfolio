import { Code2, GraduationCap, Award, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <EducationCard
            title="B.Tech in Computer Science"
            institution="C.V. Raman Global University"
            period="2022 - 2025"
            grade="CGPA: 9.28"
          />
          <EducationCard
            title="Diploma in Computer Science"
            institution="Government Polytechnic Darbhanga"
            period="2019 - 2022"
            grade="CGPA: 8.9/10"
          />
          <AchievementsCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillsSection />
          <CertificationsSection />
        </div>
      </div>
    </section>
  );
}

const EducationCard = ({ title, institution, period, grade }: { 
  title: string; 
  institution: string; 
  period: string; 
  grade: string; 
}) => (
  <div className="p-6 rounded-lg border border-purple-500/20 bg-gray-800/50 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
    <GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{institution}</p>
    <p className="text-purple-500">{period}</p>
    <p className="text-gray-300 mt-2">{grade}</p>
  </div>
);

const AchievementsCard = () => (
  <div className="p-6 rounded-lg border border-purple-500/20 bg-gray-800/50 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
    <Award className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
    <ul className="space-y-2 text-gray-400">
      <li>• Global rank 200 on LeetCode weekly Contest</li>
      <li>• 3rd runner-up in SOH-2022</li>
      <li>• 1st place in Jagran Junior Award (2019)</li>
    </ul>
  </div>
);

const SkillsSection = () => (
  <div className="p-6 rounded-lg border border-purple-500/20 bg-gray-800/50 backdrop-blur-sm">
    <Terminal className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
    <div className="grid grid-cols-2 gap-4">
      <SkillCategory title="Programming" skills={['Java', 'C','C++','Python']} />
      <SkillCategory title="Web Development" skills={['HTML', 'CSS', 'Js', 'React']} />
      <SkillCategory title="Frameworks" skills={['Node.js', 'Tailwind', 'Bootstrap']} />
      <SkillCategory title="Other" skills={['Git', 'AWS', 'SEO']} />
    </div>
  </div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h4 className="text-purple-500 mb-2">{title}</h4>
    <ul className="space-y-1">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-400">• {skill}</li>
      ))}
    </ul>
  </div>
);

const CertificationsSection = () => (
  <div className="p-6 rounded-lg border border-purple-500/20 bg-gray-800/50 backdrop-blur-sm">
    <Code2 className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-4">Certifications / Achievements</h3>
    <ul className="space-y-3 text-gray-400">
      <li>• Cisco Certified Network Associate (CCNA)</li>
      <li>• C++ Certification from IIT Bombay</li>
      <li>• Participated in 30+ hackathons</li>
      <li>• Kushal Yuva Program (KYP) Certification</li>
      <li>• Achieved a global ranking of 200 on LeetCode weekly Contest</li>
      <li>• 1st place in Jagran Junior Award (2019)</li>
      <li>• World Skill State level Finalist in Cloud Computing (2024)</li>
      <li>• 1st place in Block level Chess Contest (2022).</li>
    </ul>
  </div>
);

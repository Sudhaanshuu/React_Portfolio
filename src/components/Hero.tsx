import React from 'react';
import { Github, Linkedin, Code2, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.1),transparent_50%)]" />
        {/* Futuristic grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 200, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 200, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <img 
            src="public/sudhanshu.jpg" 
            alt="Sudhanshu Kumar"
            className="w-32 h-32 rounded-full mx-auto border-2 border-cyan-500 p-1"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Sudhanshu Kumar
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer | Tech Innovator | Problem Solver
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <SocialLink href="https://github.com/sudhaanshuu" icon={<Github />} label="Github" />
          <SocialLink href="https://linkedin.com/in/sudhanshuu/" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="https://leetcode.com/imsudhanshuu" icon={<Code2 />} label="LeetCode" />
          <SocialLink href="https://geeksforgeeks.org/user/sudhanshuu/" icon={<BookOpen />} label="GeeksForGeeks" />
        </div>

        {/* <div className="inline-flex items-center space-x-4">
          <a
            href="mailto:sudhanshukumarbihar74@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-colors"
          >
            View Portfolio
          </a>
        </div> */}
      </div>
    </section>
  );
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10 transition-colors group relative"
  >
    {icon}
    <span className="absolute -bottom-8 scale-0 transition-all group-hover:scale-100 text-sm">
      {label}
    </span>
  </a>
);
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, BookOpen, Download, ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const socialLinks = [
    {
      href: "https://github.com/sudhaanshuu",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/sudhanshuu/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "https://leetcode.com/imsudhanshuu",
      icon: <Code2 className="w-5 h-5" />,
      label: "LeetCode",
    },
    {
      href: "https://geeksforgeeks.org/user/sudhanshuu/",
      icon: <BookOpen className="w-5 h-5" />,
      label: "GeeksForGeeks",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950/50 to-pink-900/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 blur-lg animate-pulse" />
            <img
              src="/sudhanshu.jpg"
              alt="Sudhanshu Kumar"
              className="relative w-40 h-40 rounded-full border-4 border-purple-500/50 object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block text-gray-300"
            >
              Hi, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
            >
              Sudhanshu
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-4"
          >
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
              Full Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Passionate about creating innovative solutions with modern technologies. 
              Specializing in React, Node.js, and Machine Learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-3 bg-gray-800/50 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-purple-400 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-purple-300 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
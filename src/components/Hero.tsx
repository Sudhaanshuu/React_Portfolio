import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Code2, BookOpen, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(147, 51, 234, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="group relative mb-8 inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
          <img 
            src="/sudhanshu.jpg" 
            alt="Sudhanshu Kumar"
            className="relative w-32 h-32 rounded-full border-2 border-purple-500 p-1 transform transition-all duration-500 hover:scale-110"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Sudhanshu Kumar
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-purple-200 max-w-2xl mx-auto opacity-0 animate-fadeIn">
            Crafting Digital Experiences Through Code
          </p>
          
          <div className="flex justify-center space-x-6 py-8">
            {[
              { href: "https://github.com/sudhaanshuu", icon: <Github />, label: "Github" },
              { href: "https://linkedin.com/in/sudhanshuu/", icon: <Linkedin />, label: "LinkedIn" },
              { href: "https://leetcode.com/imsudhanshuu", icon: <Code2 />, label: "LeetCode" },
              { href: "https://geeksforgeeks.org/user/sudhanshuu/", icon: <BookOpen />, label: "GeeksForGeeks" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur" />
                <div className="relative flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg border border-purple-500/50 text-purple-400 hover:text-white transition-colors">
                  {link.icon}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-purple-900 text-purple-100 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-6">
            <button className="group relative px-6 py-3 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500 group-hover:scale-110" />
              <span className="relative flex items-center text-white">
                View Projects <ExternalLink className="ml-2 w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default HeroSection;
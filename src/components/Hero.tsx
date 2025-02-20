import { useEffect, useRef, useCallback } from "react";
import { Github, Linkedin, Code2, BookOpen, ExternalLink } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      color: `rgba(147, 51, 234, ${Math.random() * 0.5})`,
      update() {
        this.x += this.speedX;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;

        this.y += this.speedY;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      },
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      },
    };
  }, []);

  const initCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    return ctx;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = initCanvas(canvas);
    if (!ctx) return;

    const particleCount = Math.min(
      100,
      Math.floor((canvas.width * canvas.height) / 10000)
    );
    particlesRef.current = Array.from({ length: particleCount }, () =>
      createParticle(canvas)
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const newCtx = initCanvas(canvas);
      if (!newCtx) return;

      // Recreate particles for new dimensions
      const newParticleCount = Math.min(
        100,
        Math.floor((canvas.width * canvas.height) / 10000)
      );
      particlesRef.current = Array.from({ length: newParticleCount }, () =>
        createParticle(canvas)
      );
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [createParticle, initCanvas]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />

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
              {
                href: "https://github.com/sudhaanshuu",
                icon: <Github />,
                label: "Github",
              },
              {
                href: "https://linkedin.com/in/sudhanshuu/",
                icon: <Linkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://leetcode.com/imsudhanshuu",
                icon: <Code2 />,
                label: "LeetCode",
              },
              {
                href: "https://geeksforgeeks.org/user/sudhanshuu/",
                icon: <BookOpen />,
                label: "GeeksForGeeks",
              },
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
                <a
                  href="https://github.com/sudhaanshuu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  View Projects <ExternalLink className="ml-2 w-4 h-4" />
                </a>
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

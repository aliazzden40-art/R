import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, BrainCircuit, Heart, Sparkles, Compass } from 'lucide-react';

export const YourFuture: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Interactive constellation nodes with warm romantic gold & rose glow
    const nodeCount = 42;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1.2,
      brightness: Math.random() * 0.5 + 0.35,
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(198, 161, 91, ${node.brightness})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(198, 161, 91, ${0.25 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        const mouseDist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (mouseDist < 150) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(90, 15, 24, ${0.5 * (1 - mouseDist / 150)})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const futurePillars = [
    {
      title: 'Architect of Secure Digital Worlds',
      desc: 'In cybersecurity and computing, your sharp intellect will command respect. You have the mind to see through complex architectures and build what truly matters.',
      icon: <Shield className="w-5 h-5 text-[#5A0F18]" />,
    },
    {
      title: 'A Mind That Truly Inspires Me',
      desc: 'You never settle for easy answers. The depth and integrity with which you learn makes you someone extraordinarily rare, both in science and in life.',
      icon: <BrainCircuit className="w-5 h-5 text-[#5A0F18]" />,
    },
    {
      title: 'Walking Hand In Hand Forever',
      desc: 'No matter how high you rise or how vast your success becomes, I will always be right there beside you, holding your hand and cheering the loudest for you.',
      icon: <Heart className="w-5 h-5 text-[#5A0F18] fill-[#5A0F18]" />,
    },
  ];

  return (
    <section
      id="your-future"
      className="py-28 sm:py-36 px-6 sm:px-8 bg-gradient-to-b from-[#F8F5EF] via-[#FFFDF9] to-[#F8F5EF] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5A0F18] font-sans font-medium flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#5A0F18] fill-[#5A0F18]" />
              BOUNDLESS HORIZONS
            </span>
            <span className="w-6 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal text-[#171717] tracking-tight mb-3">
            YOUR FUTURE IS BIGGER THAN YOU THINK.
          </h2>

          <div className="font-script text-3xl sm:text-4xl text-[#C6A15B] mb-4">
            And I Am Proud to Walk It With You
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#171717]/80 max-w-2xl mx-auto">
            “You are not defined by the doubts of today. You are defined by the immense brilliance and strength you possess to shape tomorrow.”
          </p>
        </div>

        {/* Interactive Constellation Grid Canvas Box */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C6A15B]/30 bg-white/80 shadow-2xl mb-16">
          <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden bg-gradient-to-b from-[#F8F5EF] via-white to-[#F8F5EF]">
            {/* Interactive Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

            {/* Guide overlay */}
            <div className="absolute top-5 left-6 pointer-events-none">
              <span className="font-script text-2xl text-[#5A0F18] block">
                The Constellation of Our Tomorrow
              </span>
              <p className="text-xs font-serif italic text-[#171717]/60 mt-0.5">
                Touch or move across the stars to connect our paths
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 pointer-events-none flex flex-col sm:flex-row items-baseline justify-between gap-2 border-t border-[#C6A15B]/25 pt-4">
              <span className="font-serif italic text-sm text-[#5A0F18] font-medium">
                Every dream you nurture today will flourish into something magnificent.
              </span>
              <span className="font-mono text-xs text-[#C6A15B]">
                ALI &amp; RAYAN · 08 · 01 · 2026
              </span>
            </div>
          </div>
        </div>

        {/* 3 Strategic Pillars of Her Future */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {futurePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white/95 border border-[#C6A15B]/25 hover:border-[#5A0F18]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F8F5EF] flex items-center justify-center mb-6 shadow-xs border border-[#C6A15B]/20">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl text-[#171717] mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#171717]/75 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

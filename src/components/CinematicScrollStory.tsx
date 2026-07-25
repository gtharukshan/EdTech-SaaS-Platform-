import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Brain, BookOpen, BarChart3, GraduationCap, CheckCircle2, ArrowRight, Layers, Cpu, Compass } from 'lucide-react';

export const CinematicScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Scroll Progress across 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Story Beat Visibility Triggers
  const beat1Opacity = useTransform(smoothProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const beat1Y = useTransform(smoothProgress, [0, 0.18], [0, -40]);

  const beat2Opacity = useTransform(smoothProgress, [0.18, 0.25, 0.40, 0.46], [0, 1, 1, 0]);
  const beat2X = useTransform(smoothProgress, [0.18, 0.25, 0.40, 0.46], [-60, 0, 0, -60]);

  const beat3Opacity = useTransform(smoothProgress, [0.44, 0.52, 0.65, 0.72], [0, 1, 1, 0]);
  const beat3X = useTransform(smoothProgress, [0.44, 0.52, 0.65, 0.72], [60, 0, 0, 60]);

  const beat4Opacity = useTransform(smoothProgress, [0.70, 0.76, 0.84, 0.88], [0, 1, 1, 0]);
  const beat4Y = useTransform(smoothProgress, [0.70, 0.76, 0.84, 0.88], [40, 0, 0, -40]);

  const beat5Opacity = useTransform(smoothProgress, [0.86, 0.92, 1], [0, 1, 1]);
  const beat5Scale = useTransform(smoothProgress, [0.86, 0.96], [0.95, 1]);

  // Interactive HTML5 Canvas Animation for particle disassembly & transformation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = 75;
    const isDark = document.documentElement.classList.contains('dark');
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * width * 0.8,
      y: (Math.random() - 0.5) * height * 0.8,
      size: Math.random() * 3 + 1.5,
      color: i % 3 === 0 ? '#00D6FF' : i % 3 === 1 ? '#0050FF' : isDark ? '#FFFFFF' : '#334155',
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      angle: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      const progress = smoothProgress.get();
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      particles.forEach((p) => {
        p.angle += 0.01;
        p.x += p.speedX + Math.cos(p.angle) * 0.2;
        p.y += p.speedY + Math.sin(p.angle) * 0.2;

        if (Math.abs(p.x) > width / 2) p.x = (Math.random() - 0.5) * width * 0.5;
        if (Math.abs(p.y) > height / 2) p.y = (Math.random() - 0.5) * height * 0.5;

        const posX = centerX + p.x;
        const posY = centerY + p.y;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(posX, posY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [smoothProgress]);

  return (
    <section 
      id="story"
      ref={containerRef} 
      className="relative h-[400vh] bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Sticky 100vh Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Radial Glow & Noise */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-[#050505] dark:via-[#070914] dark:to-[#050505]" />
        <div className="ambient-glow-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        
        {/* Background Interactive Particle Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

        {/* Scroll Progress Bar Indicator (Right side) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3">
          <span className="text-[10px] font-mono text-slate-400 dark:text-white/40 rotate-90 mb-6 uppercase tracking-widest">Story Timeline</span>
          <div className="w-1 h-48 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden relative">
            <motion.div 
              style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-[#0050FF] to-[#00D6FF] rounded-full"
            />
          </div>
          <motion.span className="text-xs font-mono text-[#0050FF] dark:text-[#00D6FF] font-bold">
            {Math.round(smoothProgress.get() * 100)}%
          </motion.span>
        </div>

        {/* BEAT 1 */}
        <motion.div 
          style={{ opacity: beat1Opacity, y: beat1Y }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#0050FF] dark:text-[#00D6FF] border border-[#0050FF]/30 dark:border-[#00D6FF]/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> BEAT 01 / TRADITIONAL TO INTELLIGENT
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 max-w-4xl">
            The Future of Learning <span className="text-gradient-cyan">Begins Here.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-white/70 max-w-xl font-normal leading-relaxed mb-4">
            Discover a smarter way to study, practice, and grow.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-white/40 uppercase tracking-widest animate-bounce">
            Scroll to Experience Transformation &darr;
          </div>
        </motion.div>

        {/* BEAT 2 */}
        <motion.div 
          style={{ opacity: beat2Opacity, x: beat2X }}
          className="absolute inset-0 z-20 max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#0050FF] dark:text-[#00D6FF] border border-[#0050FF]/30 dark:border-[#00D6FF]/30 mb-6">
                <BookOpen className="w-3.5 h-3.5" /> BEAT 02 / KNOWLEDGE UNLOCKED
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
                Every lesson becomes an <span className="text-gradient-cyan">experience.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed mb-8">
                Transform traditional textbooks and static notes into interactive, multidimensional study experiences that adapt in real time to your understanding.
              </p>
              
              <div className="space-y-4">
                {[
                  'AI-powered step-by-step concept resolution',
                  'Personalized learning pathways based on mastery',
                  'Connected knowledge graphs bridging concepts',
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-md">
                    <CheckCircle2 className="w-5 h-5 text-[#0050FF] dark:text-[#00D6FF] flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-800 dark:text-white/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="w-full max-w-md h-80 sm:h-96 rounded-2xl glass-panel p-6 border border-slate-200 dark:border-white/20 relative shadow-2xl overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D6FF]" />
                    <span className="text-xs font-mono text-slate-800 dark:text-white/80 font-bold">PHYSICS: QUANTUM MECHANICS</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-white/40">Page 142 / Interactive</span>
                </div>

                <div className="my-auto space-y-3 text-left">
                  <div className="p-3 rounded-lg bg-slate-900 text-cyan-300 border border-slate-700 text-xs font-mono">
                    E = mc² &rarr; Schrödinger Wave Equation &Psi;(x,t)
                  </div>
                  <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
                    "When a particle is unobserved, wave-particle duality dictates superpositions across quantum field matrices."
                  </p>
                  <div className="p-2.5 rounded-lg bg-[#0050FF]/10 dark:bg-[#0050FF]/15 border border-[#0050FF]/40 text-xs text-slate-900 dark:text-white flex items-center justify-between">
                    <span className="font-semibold">AI Note: Key Exam Topic</span>
                    <span className="text-[10px] font-mono text-[#0050FF] dark:text-[#00D6FF]">High Probability</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-white/50">
                  <span>Interactive Formulas</span>
                  <span className="text-[#0050FF] dark:text-[#00D6FF] font-mono">Live Simulation Active</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* BEAT 3 */}
        <motion.div 
          style={{ opacity: beat3Opacity, x: beat3X }}
          className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
              <div className="w-full max-w-md h-84 sm:h-96 rounded-2xl glass-panel p-6 border border-[#0050FF]/50 shadow-[0_0_50px_rgba(0,80,255,0.25)] relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#0050FF] dark:text-[#00D6FF]" />
                    <span className="text-xs font-mono text-slate-900 dark:text-white font-bold">NEURAL REASONING CORE</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00D6FF]/20 text-[#0050FF] dark:text-[#00D6FF]">Real-Time Synthesis</span>
                </div>

                <div className="my-auto space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-white/70">
                    <span>Weak Area Detected: Calculus Integrals</span>
                    <span className="text-red-500 font-bold">-18% Margin</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="w-[62%] h-full bg-gradient-to-r from-red-500 via-yellow-500 to-[#00D6FF]" />
                  </div>

                  <div className="p-3 rounded-xl bg-[#0050FF]/10 dark:bg-[#0050FF]/20 border border-[#0050FF]/40 text-xs text-slate-900 dark:text-white space-y-1">
                    <div className="font-bold text-[#0050FF] dark:text-[#00D6FF] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> AI Recommended Practice Plan
                    </div>
                    <p className="text-slate-700 dark:text-white/80 text-[11px]">
                      "Complete 5 Integration by Parts problems to boost score efficiency by +24% before mock exams."
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-white/60">
                  <span>Confidence Index: 91.4%</span>
                  <span className="text-[#0050FF] dark:text-[#00D6FF]">Adaptive Mode</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#0050FF] dark:text-[#00D6FF] border border-[#0050FF]/30 dark:border-[#00D6FF]/30 mb-6">
                <Brain className="w-3.5 h-3.5" /> BEAT 03 / INTELLIGENT ADAPTATION
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
                AI that understands <span className="text-gradient-cyan">how you learn.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed mb-8">
                Personalized AI recommendations continuously analyze your pace, retention, and problem-solving patterns to engineer optimal study schedules.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-panel border border-slate-200 dark:border-white/10">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Smart Learning Paths</h4>
                  <p className="text-xs text-slate-500 dark:text-white/60">Tailored syllabus built specifically for your target exam goals.</p>
                </div>
                <div className="p-4 rounded-xl glass-panel border border-slate-200 dark:border-white/10">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Real-Time Insights</h4>
                  <p className="text-xs text-slate-500 dark:text-white/60">Instant diagnostic metrics for accuracy, speed, and mastery.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* BEAT 4 */}
        <motion.div 
          style={{ opacity: beat4Opacity, y: beat4Y }}
          className="absolute inset-0 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center"
        >
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#0050FF] dark:text-[#00D6FF] border border-[#0050FF]/30 dark:border-[#00D6FF]/30 mb-6">
              <GraduationCap className="w-3.5 h-3.5" /> BEAT 04 / MASTERY & EXCELLENCE
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              From studying to <span className="text-gradient-cyan">mastering.</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-white/70 max-w-2xl mx-auto mb-10">
              Build unwavering exam confidence through world-class video lessons, interactive practice banks, and instant AI tutor feedback.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-[#00D6FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#0050FF]/20 border border-[#0050FF]/40 flex items-center justify-center text-[#0050FF] dark:text-[#00D6FF] mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Master Lectures</h4>
                <p className="text-xs text-slate-500 dark:text-white/60">Structured HD video series taught by Cambridge & MIT educators.</p>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-[#00D6FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#00D6FF]/20 border border-[#00D6FF]/40 flex items-center justify-center text-[#0050FF] dark:text-[#00D6FF] mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Adaptive Quizzes</h4>
                <p className="text-xs text-slate-500 dark:text-white/60">10,000+ past paper questions auto-curated to your skill level.</p>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-[#00D6FF]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-0.5 mb-4">
                  <div className="w-full h-full bg-white dark:bg-[#050505] rounded-[10px] flex items-center justify-center text-[#0050FF] dark:text-[#00D6FF]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Instant AI Feedback</h4>
                <p className="text-xs text-slate-500 dark:text-white/60">Step-by-step correction of working steps and mathematical errors.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BEAT 5 */}
        <motion.div 
          style={{ opacity: beat5Opacity, scale: beat5Scale }}
          className="absolute inset-0 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
        >
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-[#00D6FF]/30 shadow-xl dark:shadow-[0_0_80px_rgba(0,214,255,0.2)] max-w-3xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#00D6FF]/10 text-[#0050FF] dark:text-[#00D6FF] border border-[#00D6FF]/30 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" /> REASSEMBLY COMPLETE / DIGITAL LIBRARY READY
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Your success starts with <span className="text-gradient-cyan">smarter learning.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 max-w-xl mx-auto mb-8">
              Everything you need to learn, practice, and achieve your academic and professional goals in one intuitive platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-semibold text-base shadow-[0_0_30px_rgba(0,214,255,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span>Start Your Learning Journey</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#courses"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-slate-800 dark:text-white font-medium text-base hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-300 dark:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-[#0050FF] dark:text-[#00D6FF]" />
                <span>View All Courses</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-400 dark:text-white/40 font-mono uppercase tracking-widest">
              Built for advanced students, educators & lifelong learners worldwide.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

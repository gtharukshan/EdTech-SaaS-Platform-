import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, Star, Zap } from 'lucide-react';

interface HeroProps {
  onOpenAuth?: (mode?: 'register' | 'login') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth }) => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505] bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="ambient-glow-cyan top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="ambient-glow-blue top-1/3 left-1/3 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Announcement Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div 
            onClick={() => onOpenAuth && onOpenAuth('register')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs sm:text-sm text-white/80 border border-white/10 hover:border-[#00D6FF]/40 transition-all cursor-pointer group shadow-[0_0_15px_rgba(0,214,255,0.1)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D6FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D6FF]"></span>
            </span>
            <span className="font-semibold text-white">Academy AI 3.0 Live</span>
            <span className="text-white/40">|</span>
            <span className="text-white/70 group-hover:text-white flex items-center gap-1">
              Next-Gen Learning Ecosystem
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#00D6FF]" />
            </span>
          </div>
        </motion.div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
          >
            Learn Smarter.<br />
            <span className="text-gradient-cyan">Achieve More.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg sm:text-2xl text-white/80 font-medium mb-4 max-w-2xl mx-auto tracking-tight"
          >
            An AI-powered learning platform designed for the next generation of students.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-sm sm:text-base text-white/60 mb-10 max-w-xl mx-auto font-normal leading-relaxed"
          >
            Personalized courses, intelligent practice, and expert guidance in one powerful learning ecosystem.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => onOpenAuth && onOpenAuth('register')}
              className="w-full sm:w-auto relative group inline-flex items-center justify-center p-0.5 overflow-hidden font-semibold rounded-full shadow-[0_0_35px_rgba(0,80,255,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,214,255,0.6)] hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0050FF] via-[#00A3FF] to-[#00D6FF]"></span>
              <span className="relative w-full sm:w-auto px-8 py-4 rounded-full bg-[#050505]/10 backdrop-blur-sm text-white flex items-center justify-center gap-3 text-base tracking-wide font-medium">
                <span>Start Learning Now</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-[#00D6FF]" />
              </span>
            </button>

            <button
              onClick={() => onOpenAuth && onOpenAuth('register')}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white/90 hover:text-white font-medium text-base flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5"
            >
              <BookOpen className="w-5 h-5 text-[#00D6FF]" />
              <span>Explore Courses & Register</span>
            </button>
          </motion.div>
        </div>

        {/* 3D Floating Book Visual Centerstage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative max-w-5xl mx-auto mt-4"
        >
          {/* Outer glow ring around mock camera */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00D6FF]/20 via-[#0050FF]/10 to-transparent blur-3xl opacity-60 pointer-events-none" />

          <div className="relative rounded-2xl glass-panel p-4 sm:p-8 border border-white/15 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-white/40">Academy Neural Core v3.8</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#00D6FF]/10 text-[#00D6FF] border border-[#00D6FF]/30">
                  <Zap className="w-3.5 h-3.5" /> 60 FPS Canvas Stream
                </span>
              </div>
            </div>

            {/* 3D Visual Floating Books Canvas Mockup */}
            <div className="relative h-[320px] sm:h-[440px] w-full rounded-xl bg-[#08090E] border border-white/10 overflow-hidden flex items-center justify-center">
              
              {/* Dark infinite room background grid */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-[#090D1A] to-[#050505] opacity-90" />
              
              {/* Central Floating Book Stacks Representation */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                
                {/* Book 1: Biology */}
                <motion.div 
                  animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="w-44 sm:w-52 h-64 sm:h-76 rounded-xl bg-gradient-to-b from-[#161922] to-[#0A0C12] border border-white/20 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,214,255,0.2)] flex flex-col justify-between group cursor-pointer hover:border-[#00D6FF]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#00D6FF]">Advanced Level</span>
                    <span className="w-2 h-2 rounded-full bg-[#00D6FF] animate-pulse"></span>
                  </div>
                  <div className="my-auto text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#00D6FF]/10 border border-[#00D6FF]/30 flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-[#00D6FF]" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">BIOLOGY & GENETICS</h3>
                    <p className="text-xs text-white/50 mt-1 font-mono">Genetics & Molecular</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span>70 Lessons</span>
                    <span className="text-[#00D6FF]">99.2% Accuracy</span>
                  </div>
                </motion.div>

                {/* Book 2: Combined Mathematics (CENTERPIECE) */}
                <motion.div 
                  animate={{ y: [-8, 10, -8], scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-52 sm:w-60 h-72 sm:h-84 rounded-xl bg-gradient-to-b from-[#1C2030] via-[#0E1220] to-[#080A10] border-2 border-[#0050FF]/60 p-6 shadow-[0_25px_60px_rgba(0,80,255,0.4),0_0_40px_rgba(0,214,255,0.3)] flex flex-col justify-between relative group z-20"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0050FF] via-[#00D6FF] to-[#0050FF]" />
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#0050FF] text-white tracking-widest uppercase">Core Subject</span>
                    <Sparkles className="w-4 h-4 text-[#00D6FF]" />
                  </div>
                  <div className="my-auto text-left">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-0.5 mb-4 shadow-[0_0_20px_rgba(0,214,255,0.5)]">
                      <div className="w-full h-full bg-[#080A10] rounded-[10px] flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-[#00D6FF]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-white leading-tight">COMBINED MATHS</h3>
                    <p className="text-xs text-white/60 mt-1 font-mono">Pure & Applied Mechanics</p>
                  </div>
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/70">
                    <span className="flex items-center gap-1 text-[#00D6FF]"><Star className="w-3.5 h-3.5 fill-current" /> 4.99</span>
                    <span className="text-white/50">24.5k Learners</span>
                  </div>
                </motion.div>

                {/* Book 3: Physics & Chemistry */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [2, -2, 2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-44 sm:w-52 h-64 sm:h-76 rounded-xl bg-gradient-to-b from-[#161922] to-[#0A0C12] border border-white/20 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,80,255,0.2)] flex flex-col justify-between group cursor-pointer hover:border-[#0050FF]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#0050FF]">Core STEM</span>
                    <span className="w-2 h-2 rounded-full bg-[#0050FF]"></span>
                  </div>
                  <div className="my-auto text-left">
                    <div className="w-10 h-10 rounded-lg bg-[#0050FF]/10 border border-[#0050FF]/30 flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-[#0050FF]" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">PHYSICS & CHEM</h3>
                    <p className="text-xs text-white/50 mt-1 font-mono">Fields & Reaction Kinetics</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span>160 Lessons</span>
                    <span className="text-[#0050FF]">AI Assisted</span>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Bottom Proof Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">99.4%</div>
                <div className="text-xs text-white/50 font-medium">Exam Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan font-mono tracking-tight">50,000+</div>
                <div className="text-xs text-white/50 font-medium">Active Students</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">24/7</div>
                <div className="text-xs text-white/50 font-medium">AI Tutor Assistance</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient-blue font-mono tracking-tight">4.9 / 5</div>
                <div className="text-xs text-white/50 font-medium">Student Satisfaction</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

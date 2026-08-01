import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, ShieldCheck, Star, Users, Zap } from 'lucide-react';

interface HeroProps {
  onOpenAuth?: (mode?: 'register' | 'login') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth }) => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[var(--bg-main)] bg-grid-pattern transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="ambient-glow-cyan top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="ambient-glow-blue top-1/3 left-1/3 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)] via-transparent to-[var(--bg-main)] pointer-events-none" />

      <div className="relative max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 w-full z-10">
        
        {/* Top Announcement Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div 
            onClick={() => onOpenAuth && onOpenAuth('register')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs sm:text-sm text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--border-brand)] transition-all cursor-pointer group shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-gold-mid)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-gold-mid)]"></span>
            </span>
            <span className="font-semibold text-[var(--text-primary)]">Academy AI 3.0 Live</span>
            <span className="text-[var(--text-subtle)]">|</span>
            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] flex items-center gap-1">
              Next-Gen Learning Ecosystem
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[var(--brand-gold-start)]" />
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]"
          >
            Master Sri Lankan <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">A/L Science Stream</span> With AI
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Empowering Physical Science & Biological Science students with instant step-by-step math proofs, syllabus-indexed past papers, and personal AI tutoring.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button 
              onClick={() => onOpenAuth && onOpenAuth('register')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-bold text-base shadow-[0_0_30px_var(--shadow-glow)] hover:shadow-[0_0_40px_var(--shadow-glow)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button 
              onClick={() => onOpenAuth && onOpenAuth('login')}
              className="w-full sm:w-auto p-0.5 rounded-full bg-gradient-to-r from-[var(--brand-gold-start)] via-[var(--brand-gold-mid)] to-[var(--brand-gold-start)] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_var(--shadow-glow)] cursor-pointer group"
            >
              <span className="relative w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--bg-main)] backdrop-blur-sm text-[var(--text-primary)] flex items-center justify-center gap-3 text-base tracking-wide font-medium">
                <Sparkles className="w-5 h-5 text-[var(--brand-gold-mid)]" />
                <span>Student Login</span>
              </span>
            </button>

            <a
              href="#courses"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-[var(--text-primary)] font-medium text-base flex items-center justify-center gap-2 border border-[var(--border-primary)] transition-all duration-300 hover:border-[var(--border-brand)] shadow-sm hover:shadow-md"
            >
              <BookOpen className="w-5 h-5 text-[var(--brand-gold-start)]" />
              <span>Explore Courses</span>
            </a>
          </motion.div>
        </div>

        {/* 3D Floating Book Visual Centerstage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative max-w-6xl mx-auto mt-4"
        >
          {/* Outer glow ring around mock camera */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[var(--brand-glow)] via-transparent to-transparent blur-3xl opacity-60 pointer-events-none" />

          <div className="relative rounded-2xl glass-panel p-4 sm:p-8 border border-[var(--border-primary)] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-[var(--text-subtle)]">Academy Neural Core v3.8</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-semibold">
                  <Zap className="w-3.5 h-3.5" /> 60 FPS Canvas Stream
                </span>
              </div>
            </div>

            {/* 3D Visual Floating Books Canvas Mockup */}
            <div className="relative h-[320px] sm:h-[440px] w-full rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden flex items-center justify-center">
              
              {/* Dark infinite room background grid */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-main)] via-[var(--bg-secondary)] to-[var(--bg-main)] opacity-90" />
              
              {/* Central Floating Book Stacks Representation */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                
                {/* Book 1: Biology */}
                <motion.div 
                  animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="w-44 sm:w-52 h-64 sm:h-76 rounded-xl bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-secondary)] border border-[var(--border-primary)] p-5 shadow-2xl flex flex-col justify-between group cursor-pointer hover:border-[var(--border-brand)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--brand-gold-mid)]">Advanced Level</span>
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-gold-mid)] animate-pulse"></span>
                  </div>
                  <div className="my-auto text-left">
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-[var(--brand-gold-mid)]" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight">BIOLOGY & GENETICS</h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">Genetics & Molecular</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-primary)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                    <span>70 Lessons</span>
                    <span className="text-[var(--brand-gold-mid)]">99.2% Accuracy</span>
                  </div>
                </motion.div>

                {/* Book 2: Combined Mathematics (CENTERPIECE) */}
                <motion.div 
                  animate={{ y: [-8, 10, -8], scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-52 sm:w-60 h-72 sm:h-84 rounded-xl bg-gradient-to-b from-[var(--bg-surface)] via-[var(--bg-card)] to-[var(--bg-secondary)] border-2 border-[var(--border-brand)] p-6 shadow-[0_25px_60px_var(--shadow-glow)] flex flex-col justify-between relative group z-20"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-gold-start)] via-[var(--brand-gold-mid)] to-[var(--brand-gold-start)]" />
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[var(--brand-gold-start)] text-[var(--btn-primary-text)] tracking-widest uppercase">Core Subject</span>
                    <Sparkles className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                  </div>
                  <div className="my-auto text-left">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 mb-4 shadow-[0_0_20px_var(--shadow-glow)]">
                      <div className="w-full h-full bg-[var(--bg-main)] rounded-[10px] flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-[var(--brand-gold-mid)]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-[var(--text-primary)] leading-tight">COMBINED MATHS</h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">Pure & Applied Mechanics</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-primary)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1 text-[var(--brand-gold-mid)]"><Star className="w-3.5 h-3.5 fill-current" /> 4.99</span>
                    <span className="text-[var(--text-muted)]">24.5k Learners</span>
                  </div>
                </motion.div>

                {/* Book 3: Physics & Chemistry */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [2, -2, 2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-44 sm:w-52 h-64 sm:h-76 rounded-xl bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-secondary)] border border-[var(--border-primary)] p-5 shadow-2xl flex flex-col justify-between group cursor-pointer hover:border-[var(--border-brand)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--brand-gold-start)]">Core STEM</span>
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-gold-start)]"></span>
                  </div>
                  <div className="my-auto text-left">
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-[var(--brand-gold-start)]" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight">PHYSICS & CHEM</h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">Fields & Reaction Kinetics</p>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-primary)] flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                    <span>160 Lessons</span>
                    <span className="text-[var(--brand-gold-start)]">AI Assisted</span>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Bottom Proof Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[var(--border-primary)] text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-mono tracking-tight">99.4%</div>
                <div className="text-xs text-[var(--text-muted)] font-medium">Exam Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan font-mono tracking-tight">50,000+</div>
                <div className="text-xs text-[var(--text-muted)] font-medium">Active Students</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-mono tracking-tight">24/7</div>
                <div className="text-xs text-[var(--text-muted)] font-medium">AI Tutor Assistance</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient-blue font-mono tracking-tight">4.9 / 5</div>
                <div className="text-xs text-[var(--text-muted)] font-medium">Student Satisfaction</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

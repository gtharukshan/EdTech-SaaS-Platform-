import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, CheckCircle2, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Julian Vance',
      role: 'Cambridge University — Computer Science',
      score: '4 A* Grades (A-Levels)',
      quote: 'Academy transformed how I study. The AI Tutor identified my weak spots in integration and quantum mechanics in minutes. My exam confidence skyrocketed.',
      improvement: '+38% Score Boost',
      acceptedAt: 'Cambridge University',
    },
    {
      name: 'Sophia Patel',
      role: 'MIT Scholar — Bioengineering',
      score: 'Top 0.1% Global Olympiad Rank',
      quote: 'The 3D interactive physics labs and automated past paper grading are simply unmatched. It feels like having a PhD Cambridge tutor available 24/7.',
      improvement: '4.95/5 Mastery',
      acceptedAt: 'MIT Admissions',
    },
    {
      name: 'Liam Sterling',
      role: 'Imperial College London — Physics',
      score: '3 A* Grades (A-Levels)',
      quote: 'Traditional textbooks felt static and boring. Academy made every concept visual and adaptive. The AI exam predictor predicted my exact A* grade!',
      improvement: '+42% Speed Increase',
      acceptedAt: 'Imperial College',
    },
  ];

  return (
    <section className="relative py-28 bg-[var(--bg-main)] overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-blue bottom-1/3 left-1/2 -translate-x-1/2 opacity-40 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--brand-gold-start)] border border-[var(--border-brand)] mb-4 font-bold">
            <Award className="w-3.5 h-3.5" /> PROVEN STUDENT SUCCESS
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            Results that speak <span className="text-gradient-cyan">for themselves.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Hear from top-performing students admitted to Cambridge, MIT, Imperial College, and Stanford.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-3xl glass-panel p-8 border border-[var(--border-primary)] hover:border-[var(--border-brand)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[var(--brand-gold-mid)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[var(--brand-gold-mid)]" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-bold">
                    {t.improvement}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--border-primary)]">
                <h4 className="text-base font-bold text-[var(--text-primary)] mb-0.5">{t.name}</h4>
                <p className="text-xs text-[var(--brand-gold-start)] font-mono mb-2 font-bold">{t.role}</p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-muted)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" />
                  <span>Accepted at {t.acceptedAt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

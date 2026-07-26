import React from 'react';
import { motion } from 'framer-motion';
import { Bot, GraduationCap, LineChart, Award, ArrowUpRight, Sparkles } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      id: '01',
      title: 'AI Learning Assistant',
      description: 'Get instant explanations, guidance, and personalized support anytime.',
      icon: Bot,
      accent: 'from-[#D4AF37] to-[#F5D061]',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(245,208,97,0.35)]',
      highlight: '24/7 Real-Time Math & Code Solver',
    },
    {
      id: '02',
      title: 'Expert Courses',
      description: 'Learn from experienced educators with structured, curriculum-aligned lessons.',
      icon: GraduationCap,
      accent: 'from-[#F5D061] to-[#D4AF37]',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]',
      highlight: '100% Cambridge & Edexcel Aligned',
    },
    {
      id: '03',
      title: 'Smart Analytics',
      description: 'Track your progress and pinpoint weak areas with neural accuracy metrics.',
      icon: LineChart,
      accent: 'from-[#D4AF37] to-[#F5D061]',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(245,208,97,0.35)]',
      highlight: 'Automated Score Prediction',
    },
    {
      id: '04',
      title: 'Exam Preparation',
      description: 'Practice with timed quizzes, mock assessments, and real examination patterns.',
      icon: Award,
      accent: 'from-[#F5D061] to-[#D4AF37]',
      glowColor: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]',
      highlight: '10,000+ Past Papers & Marking Schemes',
    },
  ];

  return (
    <section id="features" className="relative py-28 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      {/* Background Lighting */}
      <div className="ambient-glow-blue top-1/2 left-1/4 -translate-y-1/2 opacity-40 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#D4AF37] dark:text-[#F5D061] border border-[#D4AF37]/30 dark:border-[#F5D061]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> CORE PLATFORM INNOVATIONS
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Engineered for <span className="text-gradient-cyan">academic mastery.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70">
            Four interconnected pillars powering a seamless, personalized education experience.
          </p>
        </div>

        {/* 4 Glassmorphism Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative rounded-2xl glass-panel p-8 border border-slate-200 dark:border-white/10 hover:border-[#F5D061]/40 transition-all duration-500 flex flex-col justify-between ${feature.glowColor}`}
              >
                {/* Top Card Bar */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-white dark:bg-[#08090E] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D4AF37] dark:text-[#F5D061]" />
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-400 dark:text-white/40 group-hover:text-[#D4AF37] dark:group-hover:text-[#F5D061] transition-colors">
                      {feature.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#D4AF37] dark:group-hover:text-[#F5D061] transition-colors flex items-center justify-between">
                    <span>{feature.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37] dark:text-[#F5D061]" />
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-white/65 leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-[#D4AF37] dark:text-[#F5D061]/80 group-hover:text-[#D4AF37] dark:group-hover:text-[#F5D061]">
                  <span>{feature.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

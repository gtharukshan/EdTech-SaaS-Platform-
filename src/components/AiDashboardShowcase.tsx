import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, AlertTriangle, Target, Award, Sparkles, BarChart2, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export const AiDashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Weakness' | 'Predictions'>('Overview');

  return (
    <section className="relative py-28 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-blue bottom-1/4 right-1/3 opacity-40 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#D4AF37] dark:text-[#F5D061] border border-[#D4AF37]/30 dark:border-[#F5D061]/30 mb-4">
            <LayoutDashboard className="w-3.5 h-3.5" /> STUDENT DASHBOARD ENVIRONMENT
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Intelligent command center for <span className="text-gradient-cyan">your growth.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70">
            Monitor real-time progress insights, pinpoint retention weak spots, and track AI exam score predictions.
          </p>
        </div>

        {/* Floating Glass Dashboard Container */}
        <div className="max-w-6xl mx-auto rounded-3xl glass-panel p-6 sm:p-10 border border-slate-200 dark:border-white/15 shadow-lg dark:shadow-[0_25px_70px_rgba(0,0,0,0.8)] relative">
          
          {/* Top Navigation & Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 dark:bg-[#F5D061]/10 border border-[#D4AF37]/30 dark:border-[#F5D061]/30 flex items-center justify-center text-[#D4AF37] dark:text-[#F5D061]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900 dark:text-white">Student Neural Dashboard</div>
                <div className="text-xs text-slate-500 dark:text-white/50 font-mono">Target Exam: Cambridge International A-Levels</div>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-slate-200/80 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10">
              {(['Overview', 'Weakness', 'Predictions'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-slate-950 font-extrabold shadow-[0_0_15px_rgba(245,208,97,0.4)]'
                      : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab === 'Overview' ? 'Progress Overview' : tab === 'Weakness' ? 'Weak Areas' : 'AI Predictions'}
                </button>
              ))}
            </div>
          </div>

          {/* Main Dashboard Panel Body */}
          {activeTab === 'Overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                  <div className="text-xs text-slate-500 dark:text-white/50 font-mono mb-1">Overall Mastery</div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">94.2%</div>
                  <div className="text-[10px] text-amber-500 dark:text-amber-400 font-mono mt-1">+4.8% this week</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                  <div className="text-xs text-slate-500 dark:text-white/50 font-mono mb-1">Completed Lessons</div>
                  <div className="text-3xl font-extrabold text-gradient-cyan font-mono">42 / 50</div>
                  <div className="text-[10px] text-slate-400 dark:text-white/40 font-mono mt-1">84% Syllabus Covered</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                  <div className="text-xs text-slate-500 dark:text-white/50 font-mono mb-1">Practice Accuracy</div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono">98.1%</div>
                  <div className="text-[10px] text-[#D4AF37] dark:text-[#F5D061] font-mono mt-1">Top 2% Percentile</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                  <div className="text-xs text-slate-500 dark:text-white/50 font-mono mb-1">Study Hours</div>
                  <div className="text-3xl font-extrabold text-gradient-blue font-mono">128 hrs</div>
                  <div className="text-[10px] text-slate-400 dark:text-white/40 font-mono mt-1">Active Streak: 18 days</div>
                </div>
              </div>

              {/* Progress Visual Chart Bars */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-700 dark:border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-[#F5D061]" /> Subject Progress Breakdown
                  </span>
                  <span className="text-white/40">Updated 10m ago</span>
                </div>

                {[
                  { name: 'Combined Mathematics', progress: 96, score: 'A*', color: 'from-[#D4AF37] to-[#F5D061]' },
                  { name: 'Physics', progress: 92, score: 'A*', color: 'from-[#F5D061] to-[#AA771C]' },
                  { name: 'Chemistry', progress: 88, score: 'A*', color: 'from-[#D4AF37] to-[#F5D061]' },
                  { name: 'Biology', progress: 95, score: 'A*', color: 'from-[#F5D061] to-[#FFFFFF]' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs text-white font-mono">
                      <span>{item.name}</span>
                      <span className="text-[#F5D061]">{item.progress}% ({item.score})</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          )}

          {activeTab === 'Weakness' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-700 dark:text-amber-300">2 Focus Areas Require Attention</h4>
                  <p className="text-xs text-slate-700 dark:text-white/70 mt-1">
                    Academy AI has analyzed your recent mock exams and identified slight friction in Integration by Parts and Benzene Reaction Mechanisms.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl glass-panel border border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-500 dark:text-white/50">Mathematics</span>
                    <span className="text-xs font-mono text-red-500 dark:text-red-400 font-bold">Priority High</span>
                  </div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Integration by Parts & Trig Substitutions</h5>
                  <p className="text-xs text-slate-600 dark:text-white/60 mb-4">Accuracy dropped to 74% on multi-step integrals.</p>
                  <button className="w-full py-2.5 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37]/30 text-xs font-bold text-[#D4AF37] dark:text-[#F5D061] border border-[#D4AF37]/40 transition-colors flex items-center justify-center gap-2">
                    <span>Start 10-Min Remedial Quiz</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-5 rounded-xl glass-panel border border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-500 dark:text-white/50">Chemistry</span>
                    <span className="text-xs font-mono text-amber-500 dark:text-yellow-400 font-bold">Priority Medium</span>
                  </div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-base mb-1">Electrophilic Aromatic Substitution</h5>
                  <p className="text-xs text-slate-600 dark:text-white/60 mb-4">Needs review on reaction energy diagrams.</p>
                  <button className="w-full py-2.5 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37]/30 text-xs font-bold text-[#D4AF37] dark:text-[#F5D061] border border-[#D4AF37]/40 transition-colors flex items-center justify-center gap-2">
                    <span>Watch 6-Min Concept Video</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Predictions' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 to-[#F5D061]/20 border border-[#D4AF37]/30 dark:border-[#F5D061]/40 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D061]/10 text-[#D4AF37] dark:text-[#F5D061] border border-[#F5D061]/30 text-xs font-mono">
                  <Zap className="w-3.5 h-3.5" /> AI EXAM PREDICTION ALGORITHM v4.1
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-white/50 uppercase">Predicted A-Level Grade</div>
                    <div className="text-6xl font-extrabold text-gradient-cyan font-mono">A*</div>
                  </div>
                  <div className="h-12 w-px bg-slate-300 dark:bg-white/10 hidden sm:block" />
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-white/50 uppercase">Global Percentile</div>
                    <div className="text-4xl font-extrabold text-slate-900 dark:text-white font-mono">98.6th</div>
                  </div>
                  <div className="h-12 w-px bg-slate-300 dark:bg-white/10 hidden sm:block" />
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-white/50 uppercase">Model Confidence</div>
                    <div className="text-4xl font-extrabold text-[#D4AF37] dark:text-[#F5D061] font-mono">99.4%</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-white/70 max-w-xl mx-auto">
                  Based on 140+ practice attempts, speed metric analysis, and historical marking scheme correlations from past Cambridge & Edexcel exams.
                </p>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};

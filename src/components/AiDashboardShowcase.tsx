import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, AlertTriangle, Target, Award, Sparkles, BarChart2, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export const AiDashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Weakness' | 'Predictions'>('Overview');

  return (
    <section className="relative py-28 bg-[var(--bg-main)] overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-blue bottom-1/4 right-1/3 opacity-40 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--brand-gold-start)] border border-[var(--border-brand)] mb-4">
            <LayoutDashboard className="w-3.5 h-3.5" /> STUDENT DASHBOARD ENVIRONMENT
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            Intelligent command center for <span className="text-gradient-cyan">your growth.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Monitor real-time progress insights, pinpoint retention weak spots, and track AI exam score predictions.
          </p>
        </div>

        {/* Floating Glass Dashboard Container */}
        <div className="max-w-6xl mx-auto rounded-3xl glass-panel p-6 sm:p-10 border border-[var(--border-primary)] shadow-lg relative bg-[var(--bg-card)]">
          
          {/* Top Navigation & Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-primary)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center text-[var(--brand-gold-start)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-[var(--text-primary)]">Student Neural Dashboard</div>
                <div className="text-xs text-[var(--text-subtle)] font-mono">Target Exam: Cambridge International A-Levels</div>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-[var(--bg-pill)] border border-[var(--border-primary)]">
              {(['Overview', 'Weakness', 'Predictions'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold shadow-[0_0_15px_var(--shadow-glow)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
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
                <div className="p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-subtle)] font-mono mb-1">Overall Mastery</div>
                  <div className="text-3xl font-extrabold text-[var(--text-primary)] font-mono">94.2%</div>
                  <div className="text-[10px] text-[var(--brand-gold-start)] font-mono mt-1">+4.8% this week</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-subtle)] font-mono mb-1">Completed Lessons</div>
                  <div className="text-3xl font-extrabold text-gradient-cyan font-mono">42 / 50</div>
                  <div className="text-[10px] text-[var(--text-subtle)] font-mono mt-1">84% Syllabus Covered</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-subtle)] font-mono mb-1">Practice Accuracy</div>
                  <div className="text-3xl font-extrabold text-[var(--text-primary)] font-mono">98.1%</div>
                  <div className="text-[10px] text-[var(--brand-gold-start)] font-mono mt-1">Top 2% Percentile</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-subtle)] font-mono mb-1">Study Hours</div>
                  <div className="text-3xl font-extrabold text-gradient-blue font-mono">128 hrs</div>
                  <div className="text-[10px] text-[var(--text-subtle)] font-mono mt-1">Active Streak: 18 days</div>
                </div>
              </div>

              {/* Progress Visual Chart Bars */}
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-primary)] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--text-primary)] font-bold flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-[var(--brand-gold-mid)]" /> Subject Progress Breakdown
                  </span>
                  <span className="text-[var(--text-subtle)]">Updated 10m ago</span>
                </div>

                {[
                  { name: 'Combined Mathematics', progress: 96, score: 'A*', color: 'from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)]' },
                  { name: 'Physics', progress: 92, score: 'A*', color: 'from-[var(--brand-gold-mid)] to-[var(--brand-gold-end)]' },
                  { name: 'Chemistry', progress: 88, score: 'A*', color: 'from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)]' },
                  { name: 'Biology', progress: 95, score: 'A*', color: 'from-[var(--brand-gold-mid)] to-[var(--text-primary)]' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs text-[var(--text-primary)] font-mono">
                      <span>{item.name}</span>
                      <span className="text-[var(--brand-gold-mid)]">{item.progress}% ({item.score})</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[var(--bg-pill)] overflow-hidden">
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
              <div className="p-5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[var(--brand-gold-start)] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">2 Focus Areas Require Attention</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    Academy AI has analyzed your recent mock exams and identified slight friction in Integration by Parts and Benzene Reaction Mechanisms.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--text-subtle)]">Mathematics</span>
                    <span className="text-xs font-mono text-[var(--color-error)] font-bold">Priority High</span>
                  </div>
                  <h5 className="font-bold text-[var(--text-primary)] text-base mb-1">Integration by Parts & Trig Substitutions</h5>
                  <p className="text-xs text-[var(--text-secondary)] mb-4">Accuracy dropped to 74% on multi-step integrals.</p>
                  <button className="w-full py-2.5 rounded-lg bg-[var(--bg-pill)] hover:bg-[var(--bg-surface)] text-xs font-bold text-[var(--brand-gold-start)] border border-[var(--border-brand)] transition-colors flex items-center justify-center gap-2">
                    <span>Start 10-Min Remedial Quiz</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-5 rounded-xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[var(--text-subtle)]">Chemistry</span>
                    <span className="text-xs font-mono text-[var(--color-warning)] font-bold">Priority Medium</span>
                  </div>
                  <h5 className="font-bold text-[var(--text-primary)] text-base mb-1">Electrophilic Aromatic Substitution</h5>
                  <p className="text-xs text-[var(--text-secondary)] mb-4">Needs review on reaction energy diagrams.</p>
                  <button className="w-full py-2.5 rounded-lg bg-[var(--bg-pill)] hover:bg-[var(--bg-surface)] text-xs font-bold text-[var(--brand-gold-start)] border border-[var(--border-brand)] transition-colors flex items-center justify-center gap-2">
                    <span>Watch 6-Min Concept Video</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Predictions' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-brand)] text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-card)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] text-xs font-mono">
                  <Zap className="w-3.5 h-3.5" /> AI EXAM PREDICTION ALGORITHM v4.1
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
                  <div>
                    <div className="text-xs font-mono text-[var(--text-subtle)] uppercase">Predicted A-Level Grade</div>
                    <div className="text-6xl font-extrabold text-gradient-cyan font-mono">A*</div>
                  </div>
                  <div className="h-12 w-px bg-[var(--border-primary)] hidden sm:block" />
                  <div>
                    <div className="text-xs font-mono text-[var(--text-subtle)] uppercase">Global Percentile</div>
                    <div className="text-4xl font-extrabold text-[var(--text-primary)] font-mono">98.6th</div>
                  </div>
                  <div className="h-12 w-px bg-[var(--border-primary)] hidden sm:block" />
                  <div>
                    <div className="text-xs font-mono text-[var(--text-subtle)] uppercase">Model Confidence</div>
                    <div className="text-4xl font-extrabold text-[var(--brand-gold-start)] font-mono">99.4%</div>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] max-w-xl mx-auto">
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

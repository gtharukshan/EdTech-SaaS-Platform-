import React from 'react';
import { Cpu, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border-primary)] pt-20 pb-12 overflow-hidden text-[var(--text-secondary)] transition-colors duration-300">
      <div className="ambient-glow-cyan bottom-0 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--border-primary)]">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-[1px] shadow-[0_0_20px_var(--shadow-glow)]">
                <div className="w-full h-full bg-[var(--bg-card)] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[var(--brand-gold-start)]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Sci<span className="text-gradient-cyan">Ence</span>
              </span>
            </a>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Traditional knowledge transformed into intelligent digital learning. Designed for the next generation of students and educators.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
              <span>All AI Engines Operational • 99.99% Uptime</span>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] font-bold">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#overview" className="hover:text-[var(--brand-gold-start)] transition-colors">Overview</a></li>
              <li><a href="#story" className="hover:text-[var(--brand-gold-start)] transition-colors">Scroll Story</a></li>
              <li><a href="#features" className="hover:text-[var(--brand-gold-start)] transition-colors">Core Features</a></li>
              <li><a href="#courses" className="hover:text-[var(--brand-gold-start)] transition-colors">Course Catalog</a></li>
              <li><a href="#ai-tutor" className="hover:text-[var(--brand-gold-start)] transition-colors">AI Tutor Engine</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] font-bold">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#teachers" className="hover:text-[var(--brand-gold-start)] transition-colors">Educators</a></li>
              <li><a href="#pricing" className="hover:text-[var(--brand-gold-start)] transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-[var(--brand-gold-start)] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[var(--brand-gold-start)] transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-[var(--brand-gold-start)] transition-colors">Security & Privacy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe (Cols 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] font-bold">Stay Updated</h4>
            <p className="text-xs text-[var(--text-secondary)]">Get weekly AI education insights & study resources.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your student email..."
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs shadow-[0_0_15px_var(--shadow-glow)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-subtle)] gap-4 font-mono">
          <div>
            © {new Date().getFullYear()} SciEnce Academy Hatton. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

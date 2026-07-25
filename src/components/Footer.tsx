import React from 'react';
import { Cpu, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-100 dark:bg-[#050505] border-t border-slate-200 dark:border-white/10 pt-20 pb-12 overflow-hidden text-slate-600 dark:text-white/70 transition-colors duration-300">
      <div className="ambient-glow-cyan bottom-0 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-[1px] shadow-[0_0_20px_rgba(0,214,255,0.4)]">
                <div className="w-full h-full bg-white dark:bg-[#050505] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#0050FF] dark:text-[#00D6FF]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Sci<span className="text-gradient-cyan">Ence</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed max-w-sm">
              Traditional knowledge transformed into intelligent digital learning. Designed for the next generation of students and educators.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>All AI Engines Operational • 99.99% Uptime</span>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#overview" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Overview</a></li>
              <li><a href="#story" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Scroll Story</a></li>
              <li><a href="#features" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Core Features</a></li>
              <li><a href="#courses" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Course Catalog</a></li>
              <li><a href="#ai-tutor" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">AI Tutor Engine</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#teachers" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Educators</a></li>
              <li><a href="#pricing" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-[#0050FF] dark:hover:text-[#00D6FF] transition-colors">Security & Privacy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe (Cols 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-bold">Stay Updated</h4>
            <p className="text-xs text-slate-600 dark:text-white/60">Get weekly AI education insights & study resources.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your student email..."
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder-white/40 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-semibold text-xs shadow-[0_0_15px_rgba(0,214,255,0.3)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-white/40 gap-4 font-mono">
          <div>
            © {new Date().getFullYear()} SciEnce Academy Hatton. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

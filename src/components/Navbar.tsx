import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, BookOpen, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Story', href: '#story' },
    { name: 'Features', href: '#features' },
    { name: 'Courses', href: '#courses' },
    { name: 'AI Tutor', href: '#ai-tutor' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-3.5 bg-[#050505]/75 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-[1px] shadow-[0_0_20px_rgba(0,214,255,0.4)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#00D6FF] transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Edu<span className="text-gradient-cyan">Nova</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 -mt-1 font-mono">
                AI Ecosystem
              </span>
            </div>
          </a>

          {/* CENTER: Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: Primary CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#ai-tutor"
              className="relative group inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full shadow-[0_0_25px_rgba(0,80,255,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,214,255,0.5)] hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] group-hover:opacity-90 transition-opacity"></span>
              <span className="relative px-5 py-2 rounded-full bg-[#050505]/20 backdrop-blur-sm text-white flex items-center gap-2 text-xs lg:text-sm tracking-wide">
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#00D6FF]" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#0A0A0C]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,80,255,0.4)]"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, BookOpen, Cpu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenAuth?: (mode?: 'register' | 'login') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? 'py-3.5 bg-white/80 dark:bg-[#050505]/75 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-[1px] shadow-[0_0_20px_rgba(0,214,255,0.4)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white dark:bg-[#050505] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#0050FF] dark:text-[#00D6FF] transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Sci<span className="text-gradient-cyan">Ence</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-white/40 -mt-1 font-mono">
                Academy Hatton
              </span>
            </div>
          </a>

          {/* CENTER: Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 rounded-full hover:bg-slate-200/60 dark:hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: Theme Toggle & Primary CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Color Mode Toggle Icon Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="relative p-2.5 rounded-full bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-amber-300 hover:text-[#0050FF] dark:hover:text-amber-200 hover:bg-slate-200/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-sm active:scale-95 group"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-500 group-hover:-rotate-12 text-slate-800" />
              )}
            </button>

            {onOpenAuth && (
              <button
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2 rounded-full text-xs lg:text-sm font-mono text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-all"
              >
                Sign In
              </button>
            )}

            {/* CTA Button */}
            <button
              onClick={() => onOpenAuth ? onOpenAuth('register') : null}
              className="relative group inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full shadow-[0_0_25px_rgba(0,80,255,0.35)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,214,255,0.5)] hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] group-hover:opacity-90 transition-opacity"></span>
              <span className="relative px-5 py-2 rounded-full bg-slate-900 dark:bg-[#050505]/20 backdrop-blur-sm text-white flex items-center gap-2 text-xs lg:text-sm tracking-wide">
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#00D6FF]" />
              </span>
            </button>
          </div>

          {/* Mobile Right Bar: Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="p-2 rounded-lg text-slate-700 dark:text-amber-300 bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 focus:outline-none"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-800" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 dark:text-white/80 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-white/95 dark:bg-[#0A0A0C]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl transition-all animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-medium text-sm"
              >
                <span>Theme Mode</span>
                <div className="flex items-center gap-2 font-semibold text-xs text-[#0050FF] dark:text-[#00D6FF]">
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-slate-800" />
                      <span>Light Mode</span>
                    </>
                  )}
                </div>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth && onOpenAuth('register');
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,80,255,0.4)]"
              >
                <span>Start Learning Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

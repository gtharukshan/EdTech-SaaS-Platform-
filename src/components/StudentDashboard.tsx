import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  User, 
  Bell, 
  BookOpen, 
  Calendar, 
  Clock, 
  Video, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  LogOut, 
  ChevronDown,
  Atom,
  Dna,
  FileText,
  TrendingUp,
  Cpu,
  Bookmark,
  PlayCircle
} from 'lucide-react';

interface StudentDashboardProps {
  studentName?: string;
  stream?: 'Physical Science' | 'Biological Science';
  onNavigateHome: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  studentName = 'Student Candidate',
  stream = 'Physical Science',
  onNavigateHome,
}) => {
  const [activeSubject, setActiveSubject] = useState<'All' | 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Sample Enrolled Subject Data
  const subjectsData = [
    {
      id: 'maths',
      name: 'Combined Mathematics',
      teacher: 'Eng R. Jeyakumar',
      teacherDegree: 'B.Sc. Eng (Peradeniya), AMIE (SL)',
      stream: 'Physical Science',
      progress: 68,
      lessonsCompleted: '42 / 92 Lessons',
      nextClass: 'Today, 4:00 PM (Pure Math - Integration)',
      gradient: 'from-[#0050FF]/25 to-[#00D6FF]/15 border-[#0050FF]/40',
      icon: Atom,
      accentColor: '#0050FF',
    },
    {
      id: 'physics',
      name: 'Advanced Physics',
      teacher: 'Eng S. Balamurugan',
      teacherDegree: 'B.Sc. Eng (Peradeniya), MBA',
      stream: 'Both',
      progress: 74,
      lessonsCompleted: '52 / 84 Lessons',
      nextClass: 'Tomorrow, 5:30 PM (Electromagnetic Induction)',
      gradient: 'from-[#00D6FF]/25 to-[#0050FF]/15 border-[#00D6FF]/40',
      icon: Cpu,
      accentColor: '#00D6FF',
    },
    {
      id: 'chemistry',
      name: 'Advanced Chemistry',
      teacher: 'Sivanesan Sir',
      teacherDegree: 'B.Sc. Special Degree in Chemistry',
      stream: 'Both',
      progress: 61,
      lessonsCompleted: '38 / 76 Lessons',
      nextClass: 'Thursday, 4:30 PM (Organic Reactions)',
      gradient: 'from-[#0050FF]/20 to-[#70CFFF]/20 border-[#0050FF]/30',
      icon: Sparkles,
      accentColor: '#70CFFF',
    },
    {
      id: 'biology',
      name: 'Biological Sciences',
      teacher: 'K. Umamaheswaran',
      teacherDegree: 'B.Sc., PGDE, NDIT(Sci)',
      stream: 'Biological Science',
      progress: 82,
      lessonsCompleted: '56 / 70 Lessons',
      nextClass: 'Friday, 3:00 PM (Molecular Genetics)',
      gradient: 'from-[#00D6FF]/20 to-[#0050FF]/20 border-[#00D6FF]/40',
      icon: Dna,
      accentColor: '#00D6FF',
    },
  ];

  // Filter subjects based on stream and active subject tab
  const filteredSubjects = subjectsData.filter(s => {
    const matchesSubject = activeSubject === 'All' || s.name.includes(activeSubject) || (activeSubject === 'Combined Maths' && s.name.includes('Mathematics'));
    const matchesSearch = searchQuery === '' || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00D6FF]/30 selection:text-[#00D6FF]">
      
      {/* 1. DASHBOARD NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#08090E]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 group text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-0.5 shadow-[0_0_20px_rgba(0,214,255,0.4)] group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#00D6FF]" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
                  Sci<span className="text-gradient-cyan">Ence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse"></span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-white/40 block font-mono -mt-1">
                  Academy Student Portal
                </span>
              </div>
            </button>
          </div>

          {/* Search Bar in Navbar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics, lessons, past papers, or teachers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D6FF] transition-all font-mono"
            />
          </div>

          {/* Subjects Shortcuts in Navbar */}
          <div className="hidden lg:flex items-center gap-1.5 bg-white/[0.03] p-1 rounded-full border border-white/10">
            {(['All', 'Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((subj) => (
              <button
                key={subj}
                onClick={() => setActiveSubject(subj)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  activeSubject === subj
                    ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-bold shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>

          {/* Student Profile Icon & Notification Menu */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Notification Icon */}
            <button className="relative p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/10 text-white/80 transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#00D6FF] animate-pulse"></span>
            </button>

            {/* Student Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pl-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#00D6FF]/40 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-0.5 shadow-md">
                  <div className="w-full h-full bg-[#08090E] rounded-[6px] flex items-center justify-center font-bold text-xs text-white">
                    {studentName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs font-bold text-white leading-none">{studentName}</div>
                  <div className="text-[10px] text-[#00D6FF] font-mono mt-0.5">{stream}</div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-white/50" />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl glass-panel border border-white/15 bg-[#0C0D14] p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2 border-b border-white/10 mb-1">
                    <p className="text-xs font-bold text-white">{studentName}</p>
                    <p className="text-[10px] font-mono text-[#00D6FF]">{stream}</p>
                  </div>

                  <button 
                    onClick={() => { setProfileDropdownOpen(false); alert('Opening Student Profile Settings...'); }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-2 font-mono transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-[#00D6FF]" />
                    <span>My Account & Profile</span>
                  </button>

                  <button 
                    onClick={onNavigateHome}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-2 font-mono transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#00D6FF]" />
                    <span>Landing Page View</span>
                  </button>

                  <div className="pt-1 mt-1 border-t border-white/10">
                    <button 
                      onClick={onNavigateHome}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-red-400 hover:bg-red-500/10 flex items-center gap-2 font-mono transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </header>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pt-3">
        <div className="relative">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topics or teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D6FF] font-mono"
          />
        </div>
      </div>

      {/* 2. MAIN DASHBOARD CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Welcome Hero Banner */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-[#00D6FF]/40 bg-gradient-to-r from-[#0050FF]/25 via-[#00D6FF]/15 to-transparent overflow-hidden shadow-[0_15px_40px_rgba(0,80,255,0.2)]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D6FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#00D6FF]/15 text-[#00D6FF] border border-[#00D6FF]/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> STUDENT LEARNING PORTAL
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Welcome back, <span className="text-gradient-cyan">{studentName}</span>! 👋
              </h1>
              <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-xl font-mono">
                Enrolled Stream: <strong className="text-[#00D6FF]">{stream}</strong> • Advanced Level Exam Preparation Platform
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="p-3.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-center font-mono">
                <span className="text-[10px] text-white/50 block uppercase">Overall Progress</span>
                <span className="text-xl font-extrabold text-[#00D6FF]">71%</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-center font-mono">
                <span className="text-[10px] text-white/50 block uppercase">Study Streak</span>
                <span className="text-xl font-extrabold text-amber-400">🔥 14 Days</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 text-center font-mono">
                <span className="text-[10px] text-white/50 block uppercase">A/L Target</span>
                <span className="text-xl font-extrabold text-emerald-400">3 A* Goal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Subjects Header & Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#00D6FF]" />
              <span>Enrolled Core Subjects ({filteredSubjects.length})</span>
            </h2>

            {/* Mobile Subject Filter Tabs */}
            <div className="flex lg:hidden items-center gap-1 overflow-x-auto max-w-xs">
              {(['All', 'Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((subj) => (
                <button
                  key={subj}
                  onClick={() => setActiveSubject(subj === 'Maths' ? 'Combined Maths' : subj)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono whitespace-nowrap ${
                    activeSubject.includes(subj) ? 'bg-[#00D6FF] text-black font-bold' : 'bg-white/5 text-white/60'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredSubjects.map((subj) => {
              const IconComp = subj.icon;
              return (
                <motion.div
                  key={subj.id}
                  whileHover={{ y: -4 }}
                  className={`relative rounded-3xl glass-panel p-6 border bg-gradient-to-br ${subj.gradient} hover:border-[#00D6FF] transition-all duration-300 flex flex-col justify-between shadow-lg`}
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-[#00D6FF]">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{subj.name}</h3>
                          <p className="text-xs text-[#00D6FF] font-mono">Faculty: {subj.teacher}</p>
                          <p className="text-[10px] text-white/50 font-mono">{subj.teacherDegree}</p>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-white/10 text-white border border-white/15">
                        {subj.progress}% Done
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-[11px] font-mono text-white/60 mb-1">
                        <span>Course Progress</span>
                        <span>{subj.lessonsCompleted}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] rounded-full transition-all duration-500"
                          style={{ width: `${subj.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Next Class Notification */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2 mb-6">
                      <Clock className="w-4 h-4 text-[#00D6FF] shrink-0" />
                      <div>
                        <span className="text-white/50">Next Live Class: </span>
                        <span className="text-white font-semibold">{subj.nextClass}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => alert(`Launching ${subj.name} Interactive Video Player...`)}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:from-[#0050FF] hover:to-[#70CFFF] text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,214,255,0.3)]"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Continue Learning</span>
                    </button>

                    <button
                      onClick={() => alert(`Opening ${subj.name} Past Papers & Notes...`)}
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
                      title="View Notes & Past Papers"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. LIVE LECTURE SCHEDULE & AI STUDY SOLVER ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Live Lecture Schedule */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-6 border border-white/10 bg-[#080A10]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                <Video className="w-5 h-5 text-[#00D6FF]" />
                <span>Upcoming Live Auditoriums</span>
              </h3>
              <span className="text-xs font-mono text-[#00D6FF]">Hybrid Stream</span>
            </div>

            <div className="space-y-4">
              
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#0050FF]/20 text-[#00D6FF] border border-[#0050FF]/40 font-mono text-center shrink-0">
                    <div className="text-xs font-bold uppercase">Today</div>
                    <div className="text-lg font-extrabold">04:00</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Pure Maths: Integration & Calculus</h4>
                    <p className="text-xs text-[#00D6FF] font-mono">Eng R. Jeyakumar • Colombo Main Hall</p>
                  </div>
                </div>

                <button
                  onClick={() => alert('Joining Live Auditorium HD Stream...')}
                  className="px-4 py-2 rounded-xl bg-[#00D6FF] hover:bg-[#70CFFF] text-black font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <Video className="w-3.5 h-3.5" /> Join Live
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#00D6FF]/20 text-[#00D6FF] border border-[#00D6FF]/40 font-mono text-center shrink-0">
                    <div className="text-xs font-bold uppercase">Tomorrow</div>
                    <div className="text-lg font-extrabold">05:30</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Physics: Electromagnetic Field Equations</h4>
                    <p className="text-xs text-[#00D6FF] font-mono">Eng S. Balamurugan • Kandy Campus</p>
                  </div>
                </div>

                <button
                  onClick={() => alert('Reminder set for Physics Live Stream!')}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all flex items-center gap-1.5"
                >
                  <Bell className="w-3.5 h-3.5 text-[#00D6FF]" /> Set Reminder
                </button>
              </div>

            </div>
          </div>

          {/* Quick AI Study Assistant Prompt */}
          <div className="lg:col-span-5 rounded-3xl glass-panel p-6 border border-[#00D6FF]/30 bg-gradient-to-br from-[#00D6FF]/10 to-transparent flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#00D6FF]/15 text-[#00D6FF] border border-[#00D6FF]/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> AI REASONING ASSISTANT
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Need Help With a Problem?</h3>
              <p className="text-xs text-white/70 font-mono mb-4 leading-relaxed">
                Type any Combined Maths, Physics, Chemistry, or Biology question for step-by-step AI proof solving.
              </p>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ask AI: e.g. How to integrate sin^2(x)..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D6FF] font-mono"
                />
                <button
                  onClick={() => alert('AI Reasoning Engine activated! Processing query...')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-bold text-xs shadow-[0_0_20px_rgba(0,214,255,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Solve with AI Assistant</span>
                </button>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono text-white/50 flex items-center justify-between">
              <span>Latency: 12ms</span>
              <span className="text-[#00D6FF]">Academy AI Core v3.8</span>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

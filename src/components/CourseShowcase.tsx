import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, Users, Clock, ArrowRight, CheckCircle2, Sparkles, Filter, X, GraduationCap, Award, ListChecks } from 'lucide-react';
import { TeacherProfileContainer, TEACHER_DATA } from './TeacherProfileContainer';
import { SubjectSyllabusPanel } from './SubjectSyllabusPanel';

interface Course {
  id: string;
  title: string;
  category: 'A-Level' | 'University' | 'Professional';
  subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology';
  instructor: string;
  instructorRole: string;
  rating: number;
  students: string;
  duration: string;
  lessons: number;
  description: string;
  topics: string[];
  gradient: string;
}

interface CourseShowcaseProps {
  onOpenAuth?: (mode?: 'register' | 'login') => void;
}

export const CourseShowcase: React.FC<CourseShowcaseProps> = ({ onOpenAuth }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology'>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: 'math-101',
      title: 'Combined Mathematics: Pure & Applied Mechanics',
      category: 'A-Level',
      subject: 'Combined Maths',
      instructor: 'Eng R. Jeyakumar',
      instructorRole: 'B.Sc. Engineering (Peradeniya), AMIE (SL)',
      rating: 4.99,
      students: '24,500+',
      duration: '64 Hours',
      lessons: 92,
      description: 'Comprehensive mastery of Pure Mathematics, Trigonometry, Calculus, Vectors, Statics, and Dynamics.',
      topics: ['Integration & Differentiation', 'Vector Geometry & Matrices', 'Statics & Newton Laws', 'Projectiles & Equilibrium'],
      gradient: 'from-[#0050FF]/30 to-[#00D6FF]/20 border-[#0050FF]/60',
    },
    {
      id: 'phy-201',
      title: 'Advanced Physics: Mechanics, Fields & Quantum',
      category: 'A-Level',
      subject: 'Physics',
      instructor: 'Eng S. Balamurugan',
      instructorRole: 'B.Sc. Engineering (Peradeniya), MBA',
      rating: 4.98,
      students: '21,900+',
      duration: '58 Hours',
      lessons: 84,
      description: 'Master Gravitational & Electric Fields, Electromagnetic Induction, Wave Optics, and Quantum Mechanics.',
      topics: ['Schrödinger Wave Math', 'Electric & Magnetic Fields', 'Wave Optics & Interference', 'Nuclear & Quantum Physics'],
      gradient: 'from-[#00D6FF]/25 to-[#0050FF]/25 border-[#00D6FF]/50',
    },
    {
      id: 'chem-301',
      title: 'Advanced Chemistry: Physical, Organic & Inorganic',
      category: 'A-Level',
      subject: 'Chemistry',
      instructor: 'Sivanesan Sir',
      instructorRole: 'Senior Chemistry Master Educator',
      rating: 4.96,
      students: '19,800+',
      duration: '52 Hours',
      lessons: 76,
      description: 'Master organic reaction mechanisms, chemical thermodynamics, electrochemistry, and transition element chemistry.',
      topics: ['Organic Reaction Mechanisms', 'Enthalpy & Chemical Equilibrium', 'NMR & Mass Spectrometry', 'Electrochemistry'],
      gradient: 'from-[#0050FF]/20 to-[#70CFFF]/20 border-[#0050FF]/50',
    },
    {
      id: 'bio-401',
      title: 'Advanced Biology: Genetics, Molecular & Physiology',
      category: 'A-Level',
      subject: 'Biology',
      instructor: 'K. Umamaheswaran',
      instructorRole: 'B.Sc., PGDE, NDIT(Sci)',
      rating: 4.97,
      students: '18,400+',
      duration: '48 Hours',
      lessons: 70,
      description: 'In-depth study of molecular genetics, cellular respiration, plant physiology, biotechnology, and human anatomy.',
      topics: ['Gene Editing & CRISPR', 'Cellular Respiration & Photosynthesis', 'Neurobiology & Homeostasis', 'Recombinant DNA Tech'],
      gradient: 'from-[#00D6FF]/30 to-[#0050FF]/20 border-[#00D6FF]/60',
    },
  ];

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(c => c.subject === activeTab);

  return (
    <section id="courses" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Glow Backdrop */}
      <div className="ambient-glow-cyan top-1/3 right-1/4 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#00D6FF] border border-[#00D6FF]/30 mb-4">
              <BookOpen className="w-3.5 h-3.5" /> CURRICULUM CATALOG
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              World-class <span className="text-gradient-cyan">structured courses.</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white shadow-[0_0_20px_rgba(0,214,255,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'All' ? 'All Subjects' : `${tab}`}
              </button>
            ))}
          </div>
        </div>

        {/* Educator Spotlight Container / Classroom Container */}
        <TeacherProfileContainer
          selectedSubject={activeTab}
          onSubjectChange={(subj) => setActiveTab(subj)}
        />

        {/* Course Cards Grid Header */}
        <div className="flex items-center justify-between mt-12 mb-6">
          <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#00D6FF]" />
            <span>
              {activeTab === 'All' 
                ? 'All Available Course Modules (4)' 
                : `${activeTab} Module & Official Core Syllabus`}
            </span>
          </h3>
        </div>

        {/* Course Layout Area */}
        {activeTab !== 'All' ? (
          /* Single Subject Active: Left = Course Card, Right = Full Official Core Syllabus Panel */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Course Card */}
            <div className="lg:col-span-5 flex flex-col">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-2xl glass-panel p-6 border bg-gradient-to-b ${course.gradient} hover:border-[#00D6FF] transition-all duration-500 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,80,255,0.25)] h-full`}
                >
                  <div>
                    {/* Course Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/10 text-white border border-white/15">
                        {course.subject}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-mono text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{course.rating.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D6FF] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Topics Pills */}
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#00D6FF] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Module Core Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.topics.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-white/80 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course Footer Info */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-4 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#00D6FF]" />
                        <span>{course.duration} ({course.lessons} Lessons)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0050FF]" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:from-[#0050FF] hover:to-[#70CFFF] font-semibold text-xs text-white border border-white/15 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_15px_rgba(0,214,255,0.3)]"
                    >
                      <span>View Detailed Syllabus Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Full Official Core Subject Syllabus Container */}
            <div className="lg:col-span-7 flex flex-col">
              <SubjectSyllabusPanel subject={activeTab} />
            </div>

          </div>
        ) : (
          /* All Subjects Active: 4 Column Course Cards Grid + Syllabus Panel below */
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-2xl glass-panel p-6 border bg-gradient-to-b ${course.gradient} hover:border-[#00D6FF] transition-all duration-500 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,80,255,0.25)]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/10 text-white border border-white/15">
                        {course.subject}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-mono text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{course.rating.toFixed(2)}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D6FF] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-white/65 leading-relaxed mb-6 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.topics.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-white/70 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-4 font-mono">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#00D6FF]" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#0050FF]" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab(course.subject);
                      }}
                      className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#00D6FF] hover:text-black font-semibold text-xs text-white border border-white/15 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Explore Subject Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comprehensive Syllabus Explorer for All Subjects */}
            <SubjectSyllabusPanel subject="Combined Maths" />
          </div>
        )}

      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl rounded-3xl glass-panel p-8 border border-[#00D6FF]/50 shadow-[0_0_80px_rgba(0,214,255,0.3)] bg-[#0C0D12]"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#00D6FF]/10 text-[#00D6FF] border border-[#00D6FF]/30 mb-4">
                {selectedCourse.category} Syllabus Overview
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedCourse.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-mono text-white/60 mb-6">
                <span>Instructor: <strong className="text-white">{selectedCourse.instructor}</strong></span>
                <span>•</span>
                <span>{selectedCourse.instructorRole}</span>
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {selectedCourse.description} This comprehensive module includes AI-driven step-by-step problem sets, interactive visual laboratories, and real-time exam prediction scoring.
              </p>

              <h4 className="text-xs uppercase font-mono tracking-widest text-[#00D6FF] mb-3">Core Modules Included</h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {selectedCourse.topics.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/90 p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#00D6FF]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <span className="text-xs text-white/50 block font-mono">Enrolled Students</span>
                  <span className="text-lg font-bold text-white font-mono">{selectedCourse.students}</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    onOpenAuth && onOpenAuth('register');
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-semibold text-xs shadow-[0_0_20px_rgba(0,214,255,0.4)] hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <span>Enroll & Register</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Star, Sparkles, BookOpen } from 'lucide-react';

interface Teacher {
  name: string;
  role: string;
  subject: string;
  credentials: string;
  studentsTaught: string;
  passRate: string;
  bio: string;
  avatarColor: string;
}

export const TeacherSection: React.FC = () => {
  const teachers: Teacher[] = [
    {
      name: 'Prof. Sarah Lin',
      role: 'Head of Combined Mathematics',
      subject: 'Combined Mathematics',
      credentials: 'Fields Medal Finalist • MIT Alum',
      studentsTaught: '32,000+',
      passRate: '99.9% A/A*',
      bio: 'Pioneer in visual mathematics pedagogy. Master of Pure Mathematics, Calculus, Vector Algebra, Statics, and Dynamics.',
      avatarColor: 'from-[#0050FF] to-[#00D6FF]',
    },
    {
      name: 'Prof. Marcus Sterling',
      role: 'Lead Physics Master Educator',
      subject: 'Physics',
      credentials: 'Chair of Physics • Oxford Alum',
      studentsTaught: '24,000+',
      passRate: '99.8% A/A*',
      bio: 'Published author in quantum optics, mechanics, and field theory. Taught thousands of top-ranking STEM candidates worldwide.',
      avatarColor: 'from-[#00D6FF] to-[#70CFFF]',
    },
    {
      name: 'Dr. Aris Thorne',
      role: 'Senior Chemistry Master Educator',
      subject: 'Chemistry',
      credentials: 'Senior Olympiad Coach • PhD Imperial',
      studentsTaught: '21,000+',
      passRate: '99.5% A/A*',
      bio: 'International Chemistry Olympiad head mentor specializing in organic reaction mechanisms, thermodynamics, and physical chemistry.',
      avatarColor: 'from-[#0050FF] to-[#70CFFF]',
    },
    {
      name: 'Dr. Evelyn Vance',
      role: 'Head of Biological Sciences',
      subject: 'Biology',
      credentials: 'PhD Molecular Biology • Cambridge Alum',
      studentsTaught: '18,500+',
      passRate: '99.4% A/A*',
      bio: 'Former Cambridge research fellow specializing in molecular genetics, cellular respiration, plant physiology, and biotechnology.',
      avatarColor: 'from-[#00D6FF] to-[#0050FF]',
    },
  ];

  return (
    <section id="teachers" className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="ambient-glow-cyan top-1/4 left-1/3 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#00D6FF] border border-[#00D6FF]/30 mb-4">
            <GraduationCap className="w-3.5 h-3.5" /> MASTER EDUCATORS
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Learn from <span className="text-gradient-cyan">world-class minds.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Our faculty combines decades of university teaching, research excellence, and proven exam coaching.
          </p>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl glass-panel p-8 border border-white/10 hover:border-[#00D6FF]/50 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,80,255,0.25)]"
            >
              <div>
                {/* Avatar Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${teacher.avatarColor} p-0.5 shadow-lg group-hover:scale-105 transition-transform`}>
                    <div className="w-full h-full bg-[#08090E] rounded-[14px] flex items-center justify-center font-bold text-xl text-white">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00D6FF] transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-[#00D6FF] font-mono">{teacher.subject}</p>
                    <p className="text-[11px] text-white/40 font-mono mt-0.5">{teacher.credentials}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-normal">
                  "{teacher.bio}"
                </p>
              </div>

              {/* Educator Metrics Footer */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-white/50 font-mono">Students Taught</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">{teacher.studentsTaught}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-white/50 font-mono">Exam Success</div>
                  <div className="text-base font-bold text-gradient-cyan font-mono mt-0.5">{teacher.passRate}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Users, Star, Sparkles, BookOpen, Upload, ArrowUpRight } from 'lucide-react';
import { TeacherProfileContainer, TEACHER_DATA, TeacherProfile } from './TeacherProfileContainer';

export const TeacherSection: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology' | null>(null);

  const teacherList = Object.values(TEACHER_DATA);

  return (
    <section id="teachers" className="relative py-28 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-cyan top-1/4 left-1/3 opacity-40 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#D4AF37] dark:text-[#F5D061] border border-[#D4AF37]/30 dark:border-[#F5D061]/30 mb-4 font-bold">
            <GraduationCap className="w-3.5 h-3.5" /> MASTER EDUCATORS
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Learn from <span className="text-gradient-cyan">world-class minds.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70">
            Our faculty combines university research excellence, top academic degrees, and decades of proven exam coaching.
          </p>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teacherList.map((teacher, index) => (
            <TeacherCard 
              key={teacher.id} 
              teacher={teacher} 
              index={index} 
              isSelected={selectedSubject === teacher.subject}
              onSelect={() => setSelectedSubject(teacher.subject)}
            />
          ))}
        </div>

        {/* Interactive Detailed Spotlight when a Teacher Card is Selected */}
        <AnimatePresence>
          {selectedSubject && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TeacherProfileContainer
                selectedSubject={selectedSubject}
                onSubjectChange={(subj) => setSelectedSubject(subj)}
                showSelectorTabs={true}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

// Sub-component for individual Teacher Card with image fallback
interface TeacherCardProps {
  teacher: TeacherProfile;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, index, isSelected, onSelect }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImgError = () => {
    if (imgIndex < teacher.imageCandidates.length - 1) {
      setImgIndex(prev => prev + 1);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onSelect}
      className={`group relative rounded-3xl glass-panel p-6 border transition-all duration-500 flex flex-col justify-between cursor-pointer hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] ${
        isSelected 
          ? 'border-[#D4AF37] dark:border-[#F5D061] bg-gradient-to-b from-[#D4AF37]/15 to-[#F5D061]/10 shadow-[0_0_30px_rgba(245,208,97,0.3)]' 
          : 'border-slate-200 dark:border-white/10 hover:border-[#F5D061]/50 bg-white/80 dark:bg-white/[0.02]'
      }`}
    >
      <div>
        {/* Photo / Avatar Box */}
        <div className="relative w-full aspect-[3/4] h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-slate-900 dark:bg-[#08090E] border border-slate-200 dark:border-white/10">
          {!imgFailed ? (
            <img
              src={teacher.imageCandidates[imgIndex]}
              alt={teacher.name}
              onError={handleImgError}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${teacher.avatarColor} p-0.5 flex items-center justify-center`}>
              <div className="w-full h-full bg-[#07080D] rounded-[14px] flex flex-col items-center justify-center p-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${teacher.avatarColor} p-0.5 mb-2`}>
                  <div className="w-full h-full bg-[#05060A] rounded-[14px] flex items-center justify-center font-bold text-lg text-white">
                    {teacher.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-white/50 flex items-center gap-1">
                  <Upload className="w-2.5 h-2.5 text-[#F5D061]" /> Upload photo
                </span>
              </div>
            </div>
          )}

          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-950/70 dark:bg-black/60 backdrop-blur-md text-[#D4AF37] dark:text-[#F5D061] border border-slate-700 dark:border-[#F5D061]/30 font-bold">
            {teacher.subject}
          </div>
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#D4AF37] dark:group-hover:text-[#F5D061] transition-colors leading-snug">
          {teacher.name}
        </h3>
        <p className="text-xs text-[#D4AF37] dark:text-[#F5D061] font-mono mb-2 font-bold">{teacher.title}</p>
        
        {/* Degrees */}
        <div className="mb-4 text-[11px] text-slate-700 dark:text-white/70 font-mono space-y-1 bg-slate-100 dark:bg-white/[0.03] p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-1 text-[#D4AF37] dark:text-[#F5D061] font-bold">
            <Award className="w-3 h-3 text-[#F5D061]" /> Highest Qualifications:
          </div>
          <div className="text-slate-800 dark:text-white/80 line-clamp-2">
            {teacher.degrees[0]}
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-white/65 leading-relaxed mb-6 font-normal line-clamp-2">
          "{teacher.bio}"
        </p>
      </div>

      {/* Educator Metrics Footer */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 dark:text-white/50 font-mono">Students</div>
          <div className="text-xs font-bold text-slate-900 dark:text-white font-mono">{teacher.studentsTaught}</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-500 dark:text-white/50 font-mono">Exam Success</div>
          <div className="text-xs font-bold text-[#D4AF37] dark:text-[#F5D061] font-mono">{teacher.passRate}</div>
        </div>
        <button 
          onClick={onSelect}
          className="p-2 rounded-xl bg-slate-200 dark:bg-white/10 group-hover:bg-[#D4AF37] dark:group-hover:bg-[#F5D061] group-hover:text-slate-950 dark:group-hover:text-slate-950 text-slate-800 dark:text-white transition-colors"
          title="View Full Educator Profile"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

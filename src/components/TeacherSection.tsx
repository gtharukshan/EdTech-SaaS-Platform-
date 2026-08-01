import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Users, Star, Sparkles, BookOpen, Upload, ArrowUpRight } from 'lucide-react';
import { TeacherProfileContainer, TEACHER_DATA, TeacherProfile } from './TeacherProfileContainer';

export const TeacherSection: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology' | null>(null);

  const teacherList = Object.values(TEACHER_DATA);

  return (
    <section id="teachers" className="relative py-28 bg-[var(--bg-main)] overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-cyan top-1/4 left-1/3 opacity-40 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--brand-gold-start)] border border-[var(--border-brand)] mb-4 font-bold">
            <GraduationCap className="w-3.5 h-3.5" /> MASTER EDUCATORS
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            Learn from <span className="text-gradient-cyan">world-class minds.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
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
      className={`group relative rounded-3xl glass-panel p-6 border transition-all duration-500 flex flex-col justify-between cursor-pointer hover:shadow-[0_20px_50px_var(--shadow-glow)] ${
        isSelected 
          ? 'border-[var(--border-brand)] bg-[var(--bg-card)] shadow-[0_0_30px_var(--shadow-glow)]' 
          : 'border-[var(--border-primary)] hover:border-[var(--border-brand)] bg-[var(--bg-card)]'
      }`}
    >
      <div>
        {/* Photo / Avatar Box */}
        <div className="relative w-full aspect-[3/4] h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-[var(--bg-card)] border border-[var(--border-primary)]">
          {!imgFailed ? (
            <img
              src={teacher.imageCandidates[imgIndex]}
              alt={teacher.name}
              onError={handleImgError}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${teacher.avatarColor} p-0.5 flex items-center justify-center`}>
              <div className="w-full h-full bg-[var(--bg-card)] rounded-[14px] flex flex-col items-center justify-center p-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${teacher.avatarColor} p-0.5 mb-2`}>
                  <div className="w-full h-full bg-[var(--bg-surface)] rounded-[14px] flex items-center justify-center font-bold text-lg text-[var(--text-primary)]">
                    {teacher.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                  <Upload className="w-2.5 h-2.5 text-[var(--brand-gold-start)]" /> Upload photo
                </span>
              </div>
            </div>
          )}

          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-[var(--bg-pill)] backdrop-blur-md text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-bold">
            {teacher.subject}
          </div>
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-gold-start)] transition-colors leading-snug">
          {teacher.name}
        </h3>
        <p className="text-xs text-[var(--brand-gold-start)] font-mono mb-2 font-bold">{teacher.title}</p>
        
        {/* Degrees */}
        <div className="mb-4 text-[11px] text-[var(--text-secondary)] font-mono space-y-1 bg-[var(--bg-pill)] p-2.5 rounded-xl border border-[var(--border-primary)]">
          <div className="flex items-center gap-1 text-[var(--brand-gold-start)] font-bold">
            <Award className="w-3 h-3 text-[var(--brand-gold-mid)]" /> Highest Qualifications:
          </div>
          <div className="text-[var(--text-primary)] line-clamp-2">
            {teacher.degrees[0]}
          </div>
        </div>

        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6 font-normal line-clamp-2">
          "{teacher.bio}"
        </p>
      </div>

      {/* Educator Metrics Footer */}
      <div className="pt-4 border-t border-[var(--border-primary)] flex items-center justify-between">
        <div>
          <div className="text-[10px] text-[var(--text-muted)] font-mono">Students</div>
          <div className="text-xs font-bold text-[var(--text-primary)] font-mono">{teacher.studentsTaught}</div>
        </div>
        <div>
          <div className="text-[10px] text-[var(--text-muted)] font-mono">Exam Success</div>
          <div className="text-xs font-bold text-[var(--brand-gold-start)] font-mono">{teacher.passRate}</div>
        </div>
        <button 
          onClick={onSelect}
          className="p-2 rounded-xl bg-[var(--bg-pill)] group-hover:bg-[var(--brand-gold-start)] group-hover:text-[var(--btn-primary-text)] text-[var(--text-primary)] transition-colors"
          title="View Full Educator Profile"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

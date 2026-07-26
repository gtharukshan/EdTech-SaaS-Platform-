import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  ListChecks, 
  Layers, 
  ChevronRight,
  Download,
  FileText,
  Bookmark
} from 'lucide-react';

export interface SyllabusCategory {
  title: string;
  topics: string[];
}

export interface SubjectSyllabus {
  subject: string;
  subtitle: string;
  totalUnitsText: string;
  categories: SyllabusCategory[];
}

export const SYLLABUS_DATA: Record<string, SubjectSyllabus> = {
  'Combined Maths': {
    subject: 'Combined Mathematics',
    subtitle: 'Full National & International Core Syllabus',
    totalUnitsText: '39 Core Topics (2 Main Branches)',
    categories: [
      {
        title: 'Pure Mathematics (26 Topics)',
        topics: [
          'Real Number System',
          'Functions',
          'Quadratic Functions',
          'Polynomials',
          'Indices and Logarithms',
          'Inequalities',
          'Circular Measure',
          'Trigonometric Functions',
          'Trigonometric Identities',
          'Sine Rule and Cosine Rule',
          'Inverse Trigonometric Functions',
          'Limits',
          'Differentiation',
          'Applications of Differentiation',
          'Integration',
          'Coordinate Geometry (Straight Line)',
          'Mathematical Induction',
          'Finite Series',
          'Infinite Series',
          'Binomial Expansion',
          'Complex Numbers',
          'Permutations and Combinations',
          'Matrices',
          'Circle',
          'System of Circles',
          'Parabola'
        ]
      },
      {
        title: 'Applied Mathematics / Mechanics (13 Topics)',
        topics: [
          'Vectors',
          'System of Coplanar Forces',
          'Friction',
          'Center of Gravity',
          'Kinematics (Straight Line)',
          'Relative Motion',
          'Projectiles',
          'Newton\'s Laws of Motion',
          'Work, Power and Energy',
          'Impulse and Momentum',
          'Circular Motion',
          'Simple Harmonic Motion',
          'Probability & Statistics'
        ]
      }
    ]
  },
  'Physics': {
    subject: 'Physics',
    subtitle: 'Advanced Level Physics Curriculum',
    totalUnitsText: '11 Comprehensive Core Units',
    categories: [
      {
        title: 'Complete Core Syllabus (Units 01 to 11)',
        topics: [
          'Unit 01: Measurement & Units',
          'Unit 02: Mechanics & Dynamics',
          'Unit 03: Oscillations and Waves',
          'Unit 04: Thermal Physics & Kinetic Theory',
          'Unit 05: Gravitational Field',
          'Unit 06: Electrostatic Field',
          'Unit 07: Current Electricity',
          'Unit 08: Electromagnetism & Induction',
          'Unit 09: Electronics & Semiconductors',
          'Unit 10: Mechanical Properties of Matter',
          'Unit 11: Matter and Radiation (Modern & Quantum Physics)'
        ]
      }
    ]
  },
  'Chemistry': {
    subject: 'Chemistry',
    subtitle: 'Physical, Organic & Inorganic Syllabus',
    totalUnitsText: '14 Core Units (All Branches)',
    categories: [
      {
        title: 'Complete Core Syllabus (Units 01 to 14)',
        topics: [
          'Unit 01: Atomic Structure',
          'Unit 02: Structure and Bonding',
          'Unit 03: Chemical Calculations & Stoichiometry',
          'Unit 04: Gaseous State of Matter',
          'Unit 05: Energetics & Thermodynamics',
          'Unit 06: Chemistry of s, p, and d Block Elements',
          'Unit 07: Basic Concepts of Organic Chemistry',
          'Unit 08: Hydrocarbons & Haloalkanes',
          'Unit 09: Oxygen-Containing Organic Compounds',
          'Unit 10: Nitrogen-Containing Organic Compounds',
          'Unit 11: Chemical Kinetics',
          'Unit 12: Chemical Equilibrium & Ionic Equilibrium',
          'Unit 13: Electrochemistry',
          'Unit 14: Environmental & Industrial Chemistry'
        ]
      }
    ]
  },
  'Biology': {
    subject: 'Biology',
    subtitle: 'Molecular, Genetics & Physiology Syllabus',
    totalUnitsText: '10 Core Units (Detailed Modules)',
    categories: [
      {
        title: 'Complete Core Syllabus (Units 01 to 10)',
        topics: [
          'Unit 01: Introduction to Biology & Cell Biology',
          'Unit 02: Chemical and Cellular Basis of Life',
          'Unit 03: Diversity of Organisms',
          'Unit 04: Plant Form and Function',
          'Unit 05: Animal Form and Function (Human Physiology)',
          'Unit 06: Genetics & Inheritance',
          'Unit 07: Molecular Biology & Biotechnology',
          'Unit 08: Environmental Biology',
          'Unit 09: Ecology',
          'Unit 10: Practical Biology'
        ]
      }
    ]
  }
};

interface SubjectSyllabusPanelProps {
  subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology' | 'All';
}

export const SubjectSyllabusPanel: React.FC<SubjectSyllabusPanelProps> = ({ subject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeSubjectKey = subject === 'All' ? 'Combined Maths' : subject;
  const syllabus = SYLLABUS_DATA[activeSubjectKey];

  if (!syllabus) return null;

  const currentCategory = syllabus.categories[activeCategoryIndex] || syllabus.categories[0];

  // Filter topics based on search term
  const filteredTopics = currentCategory.topics.filter(t => 
    t.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      key={activeSubjectKey}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl glass-panel p-6 border border-slate-200 dark:border-[#D4AF37]/30 bg-white dark:bg-[#080A10] flex flex-col justify-between shadow-lg dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-full min-h-[480px]"
    >
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5D061]/5 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-[#D4AF37]/10 dark:bg-[#F5D061]/15 text-[#D4AF37] dark:text-[#F5D061] border border-[#D4AF37]/30 dark:border-[#F5D061]/30 mb-2">
              <ListChecks className="w-3.5 h-3.5" /> Official Core Syllabus
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{syllabus.subject} Syllabus</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-white/50 font-mono mt-0.5">
              {syllabus.totalUnitsText}
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full sm:w-56">
            <Search className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] dark:focus:border-[#F5D061] transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Tabs (e.g. for Combined Maths: Pure vs Applied) */}
        {syllabus.categories.length > 1 && (
          <div className="flex items-center gap-2 mb-4 p-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
            {syllabus.categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setSearchTerm('');
                }}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-extrabold transition-all duration-300 ${
                  activeCategoryIndex === idx
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-slate-950 shadow-md'
                    : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {/* Category Section Title */}
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-600 dark:text-white/60">
          <span className="text-[#D4AF37] dark:text-[#F5D061] font-bold">{currentCategory.title}</span>
          <span>Showing {filteredTopics.length} topics</span>
        </div>

        {/* Scrollable Topics List Grid */}
        <div className="max-h-[320px] overflow-y-auto pr-2 custom-scrollbar grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="group p-2.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] hover:bg-[#D4AF37]/10 dark:hover:bg-[#F5D061]/10 border border-slate-200 dark:border-white/10 hover:border-[#D4AF37]/40 dark:hover:border-[#F5D061]/40 transition-all duration-300 flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-md bg-[#D4AF37]/15 dark:bg-[#F5D061]/15 text-[#D4AF37] dark:text-[#F5D061] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <span className="text-xs text-slate-800 dark:text-white/85 group-hover:text-slate-900 dark:group-hover:text-white font-medium leading-snug">
                  {topic}
                </span>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center py-8 text-xs font-mono text-slate-400 dark:text-white/40">
              No syllabus topics found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* Footer Info & Download Syllabus */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-600 dark:text-white/60">
          <Bookmark className="w-4 h-4 text-[#D4AF37] dark:text-[#F5D061]" />
          <span>Includes Theory + Past Paper Revisions</span>
        </div>
        <button
          onClick={() => alert(`Downloading full official ${syllabus.subject} Syllabus PDF...`)}
          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#D4AF37] hover:text-slate-950 dark:bg-white/10 dark:hover:bg-[#F5D061] dark:hover:text-black text-slate-800 dark:text-white text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 border border-slate-300 dark:border-white/15"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Syllabus PDF</span>
        </button>
      </div>

    </motion.div>
  );
};

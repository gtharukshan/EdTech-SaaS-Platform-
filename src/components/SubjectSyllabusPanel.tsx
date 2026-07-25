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
          'Vectors',
          'Conic Sections'
        ]
      },
      {
        title: 'Applied Mathematics (13 Topics)',
        topics: [
          'Statics',
          'Kinematics',
          'Dynamics',
          'Relative Velocity',
          'Friction',
          'Work, Energy and Power',
          'Circular Motion',
          'Gravitation',
          'Hydrostatics',
          'Simple Harmonic Motion',
          'Probability',
          'Statistics',
          'Linear Programming'
        ]
      }
    ]
  },
  'Physics': {
    subject: 'Physics',
    subtitle: 'Advanced Level Physics Curriculum',
    totalUnitsText: '11 Core Syllabus Units',
    categories: [
      {
        title: 'Complete 11 Units',
        topics: [
          'Unit 01: Measurement',
          'Unit 02: Mechanics',
          'Unit 03: Mechanical Properties of Matter',
          'Unit 04: Oscillations and Waves',
          'Unit 05: Thermal Physics',
          'Unit 06: Electricity',
          'Unit 07: Magnetism',
          'Unit 08: Electronics',
          'Unit 09: Matter and Radiation',
          'Unit 10: Modern Physics',
          'Unit 11: Practical Physics'
        ]
      }
    ]
  },
  'Chemistry': {
    subject: 'Chemistry',
    subtitle: 'Physical, Organic & Inorganic Chemistry',
    totalUnitsText: '14 Core Syllabus Units',
    categories: [
      {
        title: 'Complete 14 Units',
        topics: [
          'Unit 01: Atomic Structure',
          'Unit 02: Chemical Bonding',
          'Unit 03: Stoichiometry',
          'Unit 04: States of Matter',
          'Unit 05: Energetics',
          'Unit 06: Chemical Equilibrium',
          'Unit 07: Acids and Bases',
          'Unit 08: Redox Reactions and Electrochemistry',
          'Unit 09: Reaction Kinetics',
          'Unit 10: Inorganic Chemistry',
          'Unit 11: Organic Chemistry',
          'Unit 12: Industrial Chemistry',
          'Unit 13: Environmental Chemistry',
          'Unit 14: Practical Chemistry'
        ]
      }
    ]
  },
  'Biology': {
    subject: 'Biology',
    subtitle: 'Biological Sciences & Life System Curriculum',
    totalUnitsText: '10 Core Syllabus Units',
    categories: [
      {
        title: 'Complete 10 Units',
        topics: [
          'Unit 01: Biological Molecules',
          'Unit 02: Cell Biology',
          'Unit 03: Plant Biology',
          'Unit 04: Animal Biology',
          'Unit 05: Evolution and Biodiversity',
          'Unit 06: Genetics',
          'Unit 07: Microbiology',
          'Unit 08: Applied Biology and Biotechnology',
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
      className="relative rounded-2xl glass-panel p-6 border border-[#00D6FF]/30 bg-[#080A10] flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-full min-h-[480px]"
    >
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D6FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-[#00D6FF]/15 text-[#00D6FF] border border-[#00D6FF]/30 mb-2">
              <ListChecks className="w-3.5 h-3.5" /> Official Core Syllabus
            </div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>{syllabus.subject} Syllabus</span>
            </h3>
            <p className="text-xs text-white/50 font-mono mt-0.5">
              {syllabus.totalUnitsText}
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full sm:w-56">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D6FF] transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Tabs (e.g. for Combined Maths: Pure vs Applied) */}
        {syllabus.categories.length > 1 && (
          <div className="flex items-center gap-2 mb-4 p-1 rounded-xl bg-white/[0.04] border border-white/10">
            {syllabus.categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setSearchTerm('');
                }}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium font-mono transition-all duration-300 ${
                  activeCategoryIndex === idx
                    ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {/* Category Section Title */}
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-white/60">
          <span className="text-[#00D6FF] font-semibold">{currentCategory.title}</span>
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
                className="group p-2.5 rounded-xl bg-white/[0.03] hover:bg-[#00D6FF]/10 border border-white/10 hover:border-[#00D6FF]/40 transition-all duration-300 flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-md bg-[#00D6FF]/15 text-[#00D6FF] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <span className="text-xs text-white/85 group-hover:text-white font-medium leading-snug">
                  {topic}
                </span>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center py-8 text-xs font-mono text-white/40">
              No syllabus topics found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* Footer Info & Download Syllabus */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-white/60">
          <Bookmark className="w-4 h-4 text-[#00D6FF]" />
          <span>Includes Theory + Past Paper Revisions</span>
        </div>
        <button
          onClick={() => alert(`Downloading full official ${syllabus.subject} Syllabus PDF...`)}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#00D6FF] hover:text-black text-white text-xs font-mono transition-all duration-300 flex items-center gap-2 border border-white/15"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Syllabus PDF</span>
        </button>
      </div>

    </motion.div>
  );
};

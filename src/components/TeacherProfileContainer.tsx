import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Star, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  FileText, 
  Calendar,
  Upload,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  MapPin,
  Building2,
  Monitor,
  Wifi,
  Wind,
  Video,
  Layers,
  Compass
} from 'lucide-react';

export interface TeacherProfile {
  id: string;
  name: string;
  title: string;
  subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology';
  subjectTag: string;
  degrees: string[];
  imageCandidates: string[];
  credentials: string;
  studentsTaught: string;
  passRate: string;
  rating: number;
  experience: string;
  bio: string;
  keyHighlights: string[];
  gradient: string;
  avatarColor: string;
}

export const TEACHER_DATA: Record<string, TeacherProfile> = {
  'Combined Maths': {
    id: 'teacher-maths',
    name: 'Eng R. Jeyakumar',
    title: 'Head of Combined Mathematics Faculty',
    subject: 'Combined Maths',
    subjectTag: 'Pure Mathematics & Applied Mechanics',
    degrees: [
      'B.Sc. Engineering (Peradeniya)',
      'AMIE (SL)',
      'Ph.D. in Applied Mechanics & Pure Math'
    ],
    imageCandidates: [
      '/assets/teachers/maths.jpg',
      '/assets/teachers/jeyakumar.jpg',
      '/assets/teachers/jeyakumar.png',
      '/assets/teachers/jeyakumar.jpeg',
      '/assets/teachers/jeyakumar.webp',
      '/assets/teachers/eng-r-jeyakumar.jpg',
      '/assets/teachers/combined-maths.jpg'
    ],
    credentials: 'B.Sc. Eng (Peradeniya) • AMIE (SL)',
    studentsTaught: '32,000+',
    passRate: '99.9%',
    rating: 4.99,
    experience: '16+ Years',
    bio: 'Senior Engineer & Master Educator specializing in visual mathematics pedagogy. Expert in Pure Mathematics, Calculus, Vector Geometry, Statics, and Dynamics.',
    keyHighlights: [
      'Authored 12+ A-Level Combined Maths Master Textbooks',
      'Over 99.9% student distinction rate in GCE A/L & Cambridge',
      'Creator of Neural Step-by-Step Integration Resolver'
    ],
    gradient: 'from-[var(--bg-card)] via-[var(--bg-secondary)] to-[var(--bg-card)] border-[var(--border-brand)]',
    avatarColor: 'from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)]',
  },
  'Physics': {
    id: 'teacher-physics',
    name: 'Eng S. Balamurugan',
    title: 'Lead Physics Master Educator',
    subject: 'Physics',
    subjectTag: 'Mechanics, Electromagnetism & Modern Physics',
    degrees: [
      'B.Sc. Engineering (Peradeniya)',
      'MBA',
      'CERN Senior Visiting Researcher & Olympiad Mentor'
    ],
    imageCandidates: [
      '/assets/teachers/physics.jpg',
      '/assets/teachers/balamurugan.jpg',
      '/assets/teachers/balamurugan.png',
      '/assets/teachers/balamurugan.jpeg',
      '/assets/teachers/eng-s-balamurugan.jpg'
    ],
    credentials: 'B.Sc. Eng (Peradeniya) • MBA',
    studentsTaught: '24,000+',
    passRate: '99.8%',
    rating: 4.98,
    experience: '14+ Years',
    bio: 'Senior Engineer & Master Physics Educator renowned for breaking down complex physics concepts, electromagnetic fields, mechanics, and wave optics into clear mental models.',
    keyHighlights: [
      'Coached 450+ National & International Physics Olympiad Winners',
      'Pioneered interactive 3D wave and electromagnetic visualizers',
      'Head of Advanced Physics Curriculum'
    ],
    gradient: 'from-[var(--bg-card)] via-[var(--bg-secondary)] to-[var(--bg-card)] border-[var(--border-brand)]',
    avatarColor: 'from-[var(--brand-gold-mid)] to-[var(--brand-gold-start)]',
  },
  'Chemistry': {
    id: 'teacher-chemistry',
    name: 'Sivanesan Sir',
    title: 'Director of Chemical Sciences & Reaction Dynamics',
    subject: 'Chemistry',
    subjectTag: 'Physical, Organic & Inorganic Chemistry',
    degrees: [
      'B.Sc. Special Degree in Chemistry',
      'Senior Chemistry Master Educator',
      'Chief International Chemistry Olympiad Coach'
    ],
    imageCandidates: [
      '/assets/teachers/chemistry.jpg',
      '/assets/teachers/sivanesan.jpg',
      '/assets/teachers/sivanesan.png',
      '/assets/teachers/sivanesan.jpeg',
      '/assets/teachers/sivanesan-sir.jpg'
    ],
    credentials: 'B.Sc. Chemistry • Senior Master Educator',
    studentsTaught: '21,000+',
    passRate: '99.5%',
    rating: 4.96,
    experience: '12+ Years',
    bio: 'Master Chemistry Educator specializing in organic reaction mechanisms, physical chemistry equilibrium, electrochemistry, and inorganic reaction trends.',
    keyHighlights: [
      'Inventor of the 3D Molecular Mechanism Visualizer',
      'Senior Examiner and Chemistry Olympiad Chief Trainer',
      'Published 30+ peer-reviewed articles in chemical education'
    ],
    gradient: 'from-[var(--bg-card)] via-[var(--bg-secondary)] to-[var(--bg-card)] border-[var(--border-brand)]',
    avatarColor: 'from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)]',
  },
  'Biology': {
    id: 'teacher-biology',
    name: 'K. Umamaheswaran',
    title: 'Senior Faculty Lead of Molecular Biology & Genetics',
    subject: 'Biology',
    subjectTag: 'Genetics, Cell Biology, Plant & Animal Physiology',
    degrees: [
      'B.Sc. (Bachelor of Science)',
      'PGDE (Postgraduate Diploma in Education)',
      'NDIT (Sci)'
    ],
    imageCandidates: [
      '/assets/teachers/biology.jpg',
      '/assets/teachers/umamaheswaran.jpg',
      '/assets/teachers/umamaheswaran.png',
      '/assets/teachers/k-umamaheswaran.jpg'
    ],
    credentials: 'B.Sc. • PGDE • NDIT (Sci)',
    studentsTaught: '18,200+',
    passRate: '99.1%',
    rating: 4.97,
    experience: '11+ Years',
    bio: 'Master Biology Educator leading students through the intricate systems of genetics, cellular energetics, and human physiology. Structured essay blueprints and molecular diagrams make biology engaging.',
    keyHighlights: [
      'Created the Neural Interactive DNA & Gene Mapping Toolkit',
      'Over 99.1% top grade achievement across A-Level exams',
      'Renowned lecturer on Biotechnology and Medical Entrance'
    ],
    gradient: 'from-[var(--bg-card)] via-[var(--bg-secondary)] to-[var(--bg-card)] border-[var(--border-brand)]',
    avatarColor: 'from-[var(--brand-gold-mid)] to-[var(--brand-gold-start)]',
  }
};

interface TeacherProfileContainerProps {
  selectedSubject: 'All' | 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology';
  showSelectorTabs?: boolean;
  onSubjectChange?: (subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology') => void;
}

export const TeacherProfileContainer: React.FC<TeacherProfileContainerProps> = ({
  selectedSubject,
  showSelectorTabs = false,
  onSubjectChange
}) => {
  if (selectedSubject === 'All') {
    return (
      <ClassroomContainer 
        showSelectorTabs={showSelectorTabs} 
        onSubjectChange={onSubjectChange} 
      />
    );
  }

  const teacher = TEACHER_DATA[selectedSubject];

  if (!teacher) return null;

  return (
    <SingleTeacherView
      teacher={teacher}
      selectedSubject={selectedSubject}
      showSelectorTabs={showSelectorTabs}
      onSubjectChange={onSubjectChange}
    />
  );
};

interface SingleTeacherViewProps {
  teacher: TeacherProfile;
  selectedSubject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology';
  showSelectorTabs?: boolean;
  onSubjectChange?: (subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology') => void;
}

const SingleTeacherView: React.FC<SingleTeacherViewProps> = ({
  teacher,
  selectedSubject,
  showSelectorTabs,
  onSubjectChange
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => {
    if (imageIndex < teacher.imageCandidates.length - 1) {
      setImageIndex(prev => prev + 1);
    } else {
      setImageFailed(true);
    }
  };

  React.useEffect(() => {
    setImageIndex(0);
    setImageFailed(false);
  }, [selectedSubject]);

  return (
    <motion.div
      key={teacher.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-[var(--border-brand)] bg-[var(--bg-card)] shadow-lg overflow-hidden my-8"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--brand-glow)] rounded-full blur-3xl pointer-events-none" />

      {showSelectorTabs && (
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-[var(--border-primary)]">
          <span className="text-xs font-mono text-[var(--text-subtle)] mr-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold-start)]" /> Select Subject Educator:
          </span>
          {(['Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((subj) => (
            <button
              key={subj}
              onClick={() => onSubjectChange && onSubjectChange(subj)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-extrabold transition-all duration-300 ${
                selectedSubject === subj
                  ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] shadow-[0_0_15px_var(--shadow-glow)]'
                  : 'bg-[var(--bg-pill)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          <div className="relative group w-full max-w-[460px] sm:max-w-[500px] aspect-[3/4] sm:h-[520px] rounded-2xl overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-card)] shadow-2xl p-1">
            {!imageFailed ? (
              <img
                src={teacher.imageCandidates[imageIndex]}
                alt={teacher.name}
                onError={handleImageError}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${teacher.avatarColor} p-1 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                <div className="w-full h-full bg-[var(--bg-card)] backdrop-blur-md rounded-[10px] flex flex-col items-center justify-center p-6 relative">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${teacher.avatarColor} p-0.5 mb-4 shadow-[0_0_30px_var(--shadow-glow)]`}>
                    <div className="w-full h-full bg-[var(--bg-surface)] rounded-[14px] flex items-center justify-center text-3xl font-extrabold text-[var(--brand-gold-mid)] tracking-wider">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[var(--text-primary)] mb-1">{teacher.name}</span>
                  <span className="text-[11px] text-[var(--brand-gold-mid)] font-mono mb-4">{teacher.subject} Lead</span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] border border-[var(--border-primary)] text-[10px] font-mono text-[var(--text-secondary)]">
                    <Upload className="w-3 h-3 text-[var(--brand-gold-mid)]" />
                    <span>Upload image to /public/assets/teachers/</span>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] text-left">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[var(--brand-gold-start)]">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Master Educator
              </div>
              <div className="text-xs text-[var(--text-primary)] font-medium truncate mt-0.5">
                {teacher.credentials}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4 text-xs font-mono text-[var(--brand-gold-mid)]">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-[var(--text-primary)] font-bold text-sm">{teacher.rating.toFixed(2)} / 5.0</span>
            <span className="text-[var(--text-subtle)]">•</span>
            <span className="text-[var(--text-secondary)]">{teacher.experience} Exp</span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-semibold">
                {teacher.subject} Specialist
              </span>
              <span className="text-xs font-mono text-[var(--text-subtle)]">
                {teacher.subjectTag}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2 tracking-tight">
              {teacher.name}
            </h3>
            <p className="text-sm font-mono text-[var(--brand-gold-start)] mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> {teacher.title}
            </p>

            <div className="mb-6 p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] backdrop-blur-sm">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--brand-gold-start)] mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Academic Degrees & Honors
              </h4>
              <div className="space-y-2">
                {teacher.degrees.map((deg, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)] font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--brand-gold-start)] shrink-0 mt-0.5" />
                    <span>{deg}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {teacher.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {teacher.keyHighlights.map((hl, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-start gap-2 text-xs text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-gold-start)] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 w-full sm:w-auto justify-around sm:justify-start">
              <div>
                <span className="text-[11px] font-mono text-[var(--text-subtle)] block">Students Mentored</span>
                <span className="text-lg font-bold text-[var(--text-primary)] font-mono">{teacher.studentsTaught}</span>
              </div>
              <div className="h-8 w-px bg-[var(--border-primary)]" />
              <div>
                <span className="text-[11px] font-mono text-[var(--text-subtle)] block">Exam Pass Rate</span>
                <span className="text-lg font-bold text-[var(--brand-gold-start)] font-mono">{teacher.passRate}</span>
              </div>
            </div>

            <a
              href="#courses"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs shadow-[0_0_20px_var(--shadow-glow)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore {teacher.subject} Syllabus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--btn-primary-text)]" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ClassroomContainerProps {
  showSelectorTabs?: boolean;
  onSubjectChange?: (subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology') => void;
}

const ClassroomContainer: React.FC<ClassroomContainerProps> = ({
  showSelectorTabs,
  onSubjectChange
}) => {
  const classroomImageCandidates = [
    '/assets/classroom/classroom.jpg',
    '/assets/classroom/classroom.png',
    '/assets/classroom/smart-lecture-hall.jpg',
    '/assets/classroom/campus.jpg'
  ];

  const [imgIdx, setImgIdx] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImgErr = () => {
    if (imgIdx < classroomImageCandidates.length - 1) {
      setImgIdx(prev => prev + 1);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <motion.div
      key="classroom-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-[var(--border-brand)] bg-[var(--bg-card)] shadow-lg overflow-hidden my-8"
    >
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[var(--brand-glow)] rounded-full blur-3xl pointer-events-none" />

      {showSelectorTabs && (
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-[var(--border-primary)]">
          <span className="text-xs font-mono text-[var(--text-subtle)] mr-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold-start)]" /> Select Subject Educator:
          </span>
          {(['Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((subj) => (
            <button
              key={subj}
              onClick={() => onSubjectChange && onSubjectChange(subj)}
              className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[var(--bg-pill)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300"
            >
              {subj}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          <div className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-card)] shadow-2xl p-1">
            {!imgFailed ? (
              <img
                src={classroomImageCandidates[imgIdx]}
                alt="Smart AI Classroom & Lecture Hall"
                onError={handleImgErr}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[var(--brand-gold-start)] via-[var(--brand-gold-mid)] to-[var(--brand-gold-start)] p-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-full h-full bg-[var(--bg-card)] backdrop-blur-md rounded-[10px] flex flex-col items-center justify-center p-6 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 mb-3 shadow-[0_0_30px_var(--shadow-glow)] flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-[var(--btn-primary-text)]" />
                  </div>
                  <span className="text-sm font-bold text-[var(--text-primary)] mb-1">Smart Lecture Auditorium</span>
                  <span className="text-[11px] text-[var(--brand-gold-mid)] font-mono mb-4">High-Tech Learning Campus</span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] border border-[var(--border-primary)] text-[10px] font-mono text-[var(--text-secondary)]">
                    <Upload className="w-3 h-3 text-[var(--brand-gold-mid)]" />
                    <span>Upload image to /public/assets/classroom/</span>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] text-left flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--brand-gold-start)] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)] leading-none">Main Academic Complex</div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">Colombo • Nugegoda • Kandy • Online</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)]">
                Smart Campus
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-4 text-xs font-mono text-[var(--text-secondary)]">
            <span className="flex items-center gap-1 text-[var(--brand-gold-start)]">
              <Wind className="w-3.5 h-3.5" /> 100% Climate Controlled
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[var(--brand-gold-start)]">
              <Monitor className="w-3.5 h-3.5" /> Dual 4K Visualizers
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" /> Classroom Facilities & Campus
              </span>
              <span className="text-xs font-mono text-[var(--text-subtle)]">
                Hybrid On-Site & Virtual Architecture
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2 tracking-tight">
              State-of-the-Art <span className="text-gradient-cyan">Smart Learning Halls</span>
            </h3>

            <div className="flex items-start gap-2 text-xs font-mono text-[var(--text-secondary)] mb-6 bg-[var(--bg-pill)] p-3 rounded-xl border border-[var(--border-primary)]">
              <MapPin className="w-4 h-4 text-[var(--brand-gold-start)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[var(--text-primary)]">Primary Locations:</strong> Colombo Main Tech Auditorium, Nugegoda Science Center, Kandy City Campus, & Live Global Streaming Classroom.
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] shrink-0 mt-0.5">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-0.5">AI-Integrated Interactive Whiteboards & Projection</h4>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    Ultra-HD dual projection screens with synchronized digital whiteboard notes automatically saved to student dashboards.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] shrink-0 mt-0.5">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Live HD Recording & Online Hybrid Sync</h4>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    Every lecture is recorded live in 4K multi-angle video with instant AI transcript search and lecture replay.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-0.5">Tiered Ergonomic Seating & 1-on-1 Help Desks</h4>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    Spacious air-conditioned halls with dedicated teaching assistants on-site for immediate doubt resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 w-full sm:w-auto justify-around sm:justify-start font-mono">
              <div>
                <span className="text-[11px] text-[var(--text-subtle)] block">Auditorium Capacity</span>
                <span className="text-base font-bold text-[var(--text-primary)]">500+ Seats</span>
              </div>
              <div className="h-8 w-px bg-[var(--border-primary)]" />
              <div>
                <span className="text-[11px] text-[var(--text-subtle)] block">Campus Locations</span>
                <span className="text-base font-bold text-[var(--brand-gold-start)]">4 Centers</span>
              </div>
              <div className="h-8 w-px bg-[var(--border-primary)]" />
              <div>
                <span className="text-[11px] text-[var(--text-subtle)] block">Smart AC Tech</span>
                <span className="text-base font-bold text-[var(--color-success)]">100% Smart</span>
              </div>
            </div>

            <a
              href="#courses"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs shadow-[0_0_20px_var(--shadow-glow)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--btn-primary-text)]" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

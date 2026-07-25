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
      'AMIE (SL)'
    ],
    imageCandidates: [
      '/assets/teachers/jeyakumar.jpg',
      '/assets/teachers/jeyakumar.png',
      '/assets/teachers/jeyakumar.jpeg',
      '/assets/teachers/jeyakumar.webp',
      '/assets/teachers/eng-r-jeyakumar.jpg',
      '/assets/teachers/eng-r-jeyakumar.png',
      '/assets/teachers/combined-maths.jpg',
      '/assets/teachers/combined-maths.png',
      '/assets/teachers/combined-maths.jpeg',
      '/assets/teachers/combined-maths.webp',
      '/assets/teachers/maths-teacher.jpg',
      '/assets/teachers/maths-teacher.png',
      '/assets/teachers/maths.jpg',
      '/assets/teachers/maths.png'
    ],
    credentials: 'B.Sc. Eng (Peradeniya) • AMIE (SL)',
    studentsTaught: '32,000+',
    passRate: '99.9% A/A*',
    rating: 4.99,
    experience: '14+ Years',
    bio: 'Senior Engineer & Master Educator specializing in visual mathematics pedagogy. Expert in Pure Mathematics, Calculus, Vector Geometry, Statics, and Dynamics.',
    keyHighlights: [
      'Author of Top-Rank Combined Maths Resources',
      'Mentored 120+ Island / District Top Rank Students',
      'Custom Step-by-Step Problem Solving Systems'
    ],
    gradient: 'from-[#0050FF]/25 via-[#00D6FF]/15 to-transparent border-[#0050FF]/50',
    avatarColor: 'from-[#0050FF] to-[#00D6FF]'
  },
  'Physics': {
    id: 'teacher-physics',
    name: 'Eng S. Balamurugan',
    title: 'Lead Physics Master Educator',
    subject: 'Physics',
    subjectTag: 'Mechanics, Fields, Waves & Modern Physics',
    degrees: [
      'B.Sc. Engineering (Peradeniya)',
      'MBA'
    ],
    imageCandidates: [
      '/assets/teachers/balamurugan.jpg',
      '/assets/teachers/balamurugan.png',
      '/assets/teachers/balamurugan.jpeg',
      '/assets/teachers/balamurugan.webp',
      '/assets/teachers/eng-s-balamurugan.jpg',
      '/assets/teachers/eng-s-balamurugan.png',
      '/assets/teachers/marcus-sterling.png',
      '/assets/teachers/physics.jpg',
      '/assets/teachers/physics.png',
      '/assets/teachers/physics.jpeg',
      '/assets/teachers/physics-teacher.jpg'
    ],
    credentials: 'B.Sc. Eng (Peradeniya) • MBA',
    studentsTaught: '24,000+',
    passRate: '99.8% A/A*',
    rating: 4.98,
    experience: '12+ Years',
    bio: 'Senior Engineer & Master Physics Educator renowned for breaking down complex physics concepts, electromagnetic fields, mechanics, and wave optics into clear mental models.',
    keyHighlights: [
      'Senior Advanced Level Physics Master Coach',
      '98% Distinction Rate in Mechanics & Field Theory',
      'Interactive Visual Physics Learning Systems'
    ],
    gradient: 'from-[#00D6FF]/25 via-[#0050FF]/15 to-transparent border-[#00D6FF]/50',
    avatarColor: 'from-[#00D6FF] to-[#70CFFF]'
  },
  'Chemistry': {
    id: 'teacher-chemistry',
    name: 'Sivanesan Sir',
    title: 'Senior Chemistry Master Educator',
    subject: 'Chemistry',
    subjectTag: 'Physical, Organic & Inorganic Chemistry',
    degrees: [
      'B.Sc. Special Degree in Chemistry',
      'Senior Chemistry Master Educator'
    ],
    imageCandidates: [
      '/assets/teachers/sivanesan.jpg',
      '/assets/teachers/sivanesan.png',
      '/assets/teachers/sivanesan.jpeg',
      '/assets/teachers/sivanesan.webp',
      '/assets/teachers/sivanesan-sir.jpg',
      '/assets/teachers/sivanesan-sir.png',
      '/assets/teachers/mr-sivanesan.jpg',
      '/assets/teachers/mr-sivanesan.png',
      '/assets/teachers/chemistry.jpg',
      '/assets/teachers/chemistry.png',
      '/assets/teachers/chemistry-teacher.jpg'
    ],
    credentials: 'B.Sc. Chemistry • Senior Master Educator',
    studentsTaught: '21,000+',
    passRate: '99.5% A/A*',
    rating: 4.96,
    experience: '11+ Years',
    bio: 'Master Chemistry Educator specializing in organic reaction mechanisms, physical chemistry equilibrium, electrochemistry, and inorganic reaction trends.',
    keyHighlights: [
      'Senior Advanced Level Chemistry Pedagogy Coach',
      'Creator of Reaction Mechanism Visualizer System',
      'Complete Inorganic & Organic Exam Mastery Systems'
    ],
    gradient: 'from-[#0050FF]/20 via-[#70CFFF]/15 to-transparent border-[#0050FF]/40',
    avatarColor: 'from-[#0050FF] to-[#70CFFF]'
  },
  'Biology': {
    id: 'teacher-biology',
    name: 'K. Umamaheswaran',
    title: 'Head of Biological Sciences',
    subject: 'Biology',
    subjectTag: 'Genetics, Cell Biology, Plant & Animal Physiology',
    degrees: [
      'B.Sc. (Bachelor of Science)',
      'PGDE (Postgraduate Diploma in Education)',
      'NDIT (Sci)'
    ],
    imageCandidates: [
      '/assets/teachers/umamaheswaran.jpg',
      '/assets/teachers/umamaheswaran.png',
      '/assets/teachers/umamaheswaran.jpeg',
      '/assets/teachers/umamaheswaran.webp',
      '/assets/teachers/k-umamaheswaran.jpg',
      '/assets/teachers/k-umamaheswaran.png',
      '/assets/teachers/biology.jpg',
      '/assets/teachers/biology.png',
      '/assets/teachers/biology-teacher.jpg'
    ],
    credentials: 'B.Sc. • PGDE • NDIT(Sci)',
    studentsTaught: '18,500+',
    passRate: '99.4% A/A*',
    rating: 4.97,
    experience: '10+ Years',
    bio: 'Master Biology Educator specializing in cell biology, molecular genetics, plant physiology, animal anatomy, biotechnology, and ecology.',
    keyHighlights: [
      'Pioneered High-Score Essay & Diagram Formatting',
      'Senior Advanced Level Biology Pedagogy Master',
      'Integrated Visual & Conceptual Biological Learning'
    ],
    gradient: 'from-[#00D6FF]/25 via-[#0050FF]/15 to-transparent border-[#00D6FF]/50',
    avatarColor: 'from-[#00D6FF] to-[#0050FF]'
  }
};

interface TeacherProfileContainerProps {
  selectedSubject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology' | 'All';
  onSubjectChange?: (subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology') => void;
  showSelectorTabs?: boolean;
}

export const TeacherProfileContainer: React.FC<TeacherProfileContainerProps> = ({
  selectedSubject,
  onSubjectChange,
  showSelectorTabs = false,
}) => {
  // IF 'All' IS SELECTED -> RENDER CLASSROOM PICTURE, LOCATION & DETAILS CONTAINER!
  if (selectedSubject === 'All') {
    return (
      <ClassroomContainer 
        showSelectorTabs={showSelectorTabs} 
        onSubjectChange={onSubjectChange} 
      />
    );
  }

  // OTHERWISE -> RENDER SPECIFIC TEACHER PROFILE CONTAINER (Combined Maths, Physics, Chemistry, Biology)
  const teacher = TEACHER_DATA[selectedSubject];
  const [imageIndex, setImageIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  // Handle image error fallback logic
  const handleImageError = () => {
    if (imageIndex < teacher.imageCandidates.length - 1) {
      setImageIndex(prev => prev + 1);
    } else {
      setImageFailed(true);
    }
  };

  // Reset image state when teacher changes
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
      className={`relative rounded-3xl glass-panel p-6 sm:p-8 border bg-gradient-to-br ${teacher.gradient} shadow-[0_20px_60px_rgba(0,80,255,0.2)] overflow-hidden my-8`}
    >
      {/* Glow background accent */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00D6FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Optional Top Selector Tabs */}
      {showSelectorTabs && (
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-white/10">
          <span className="text-xs font-mono text-white/50 mr-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#00D6FF]" /> Select Subject Educator:
          </span>
          {(['Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((subj) => (
            <button
              key={subj}
              onClick={() => onSubjectChange && onSubjectChange(subj)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedSubject === subj
                  ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white shadow-[0_0_15px_rgba(0,214,255,0.4)]'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Teacher Image & Photo Upload Container */}
        <div className="lg:col-span-4 flex flex-col items-center text-center">
          <div className="relative group w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 bg-[#0A0D14] shadow-2xl p-1">
            
            {!imageFailed ? (
              <img
                src={teacher.imageCandidates[imageIndex]}
                alt={teacher.name}
                onError={handleImageError}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              /* Fallback Placeholder Badge when image is not uploaded yet */
              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${teacher.avatarColor} p-1 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                <div className="w-full h-full bg-[#08090E]/90 backdrop-blur-md rounded-[10px] flex flex-col items-center justify-center p-6 relative">
                  
                  {/* Glowing Initials Badge */}
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${teacher.avatarColor} p-0.5 mb-4 shadow-[0_0_30px_rgba(0,214,255,0.3)]`}>
                    <div className="w-full h-full bg-[#05060A] rounded-[14px] flex items-center justify-center text-3xl font-extrabold text-white tracking-wider">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  <span className="text-sm font-bold text-white mb-1">{teacher.name}</span>
                  <span className="text-[11px] text-[#00D6FF] font-mono mb-4">{teacher.subject} Lead</span>

                  {/* Upload Notice Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-[10px] font-mono text-white/80">
                    <Upload className="w-3 h-3 text-[#00D6FF]" />
                    <span>Upload image to /public/assets/teachers/</span>
                  </div>

                </div>
              </div>
            )}

            {/* Floating Qualification Tag on Image */}
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-left">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#00D6FF]">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Master Educator
              </div>
              <div className="text-xs text-white/90 font-medium truncate mt-0.5">
                {teacher.credentials}
              </div>
            </div>

          </div>

          {/* Quick Stats below image */}
          <div className="flex items-center justify-center gap-3 mt-4 text-xs font-mono text-amber-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-white font-bold text-sm">{teacher.rating.toFixed(2)} / 5.0</span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">{teacher.experience} Exp</span>
          </div>
        </div>

        {/* Right Column: Detailed Qualifications & Info */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          
          <div>
            {/* Subject Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#00D6FF]/15 text-[#00D6FF] border border-[#00D6FF]/40 font-semibold">
                {teacher.subject} Specialist
              </span>
              <span className="text-xs font-mono text-white/50">
                {teacher.subjectTag}
              </span>
            </div>

            {/* Teacher Name & Title */}
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
              {teacher.name}
            </h3>
            <p className="text-sm font-mono text-[#00D6FF] mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> {teacher.title}
            </p>

            {/* Degrees & Higher Education Section */}
            <div className="mb-6 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00D6FF] mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Academic Degrees & Honors
              </h4>
              <div className="space-y-2">
                {teacher.degrees.map((deg, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90 font-medium">
                    <ChevronRight className="w-3.5 h-3.5 text-[#00D6FF] shrink-0 mt-0.5" />
                    <span>{deg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Biography & Information */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
              {teacher.bio}
            </p>

            {/* Key Achievements & Pedagogy Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {teacher.keyHighlights.map((hl, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#00D6FF] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Stats Bar & Action Buttons */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Educator Metrics */}
            <div className="flex items-center gap-6 w-full sm:w-auto justify-around sm:justify-start">
              <div>
                <span className="text-[11px] font-mono text-white/50 block">Students Mentored</span>
                <span className="text-lg font-bold text-white font-mono">{teacher.studentsTaught}</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-[11px] font-mono text-white/50 block">Exam Pass Rate</span>
                <span className="text-lg font-bold text-[#00D6FF] font-mono">{teacher.passRate}</span>
              </div>
            </div>

            {/* Action Button */}
            <a
              href="#courses"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:from-[#0050FF] hover:to-[#70CFFF] text-white font-semibold text-xs shadow-[0_0_20px_rgba(0,214,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore {teacher.subject} Syllabus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>

      </div>

    </motion.div>
  );
};


// CLASSROOM CONTAINER COMPONENT FOR "ALL SUBJECTS"
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
      className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-[#00D6FF]/40 bg-gradient-to-br from-[#00D6FF]/15 via-[#0050FF]/15 to-transparent shadow-[0_20px_60px_rgba(0,214,255,0.15)] overflow-hidden my-8"
    >
      {/* Background ambient glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0050FF]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Optional Top Selector Tabs */}
      {showSelectorTabs && (
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-white/10">
          <span className="text-xs font-mono text-white/50 mr-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#00D6FF]" /> Select Subject Educator:
          </span>
          {(['Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((subj) => (
            <button
              key={subj}
              onClick={() => onSubjectChange && onSubjectChange(subj)}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {subj}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Classroom Photo & Location Badge */}
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          <div className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-[#0A0D14] shadow-2xl p-1">
            
            {!imgFailed ? (
              <img
                src={classroomImageCandidates[imgIdx]}
                alt="Smart AI Classroom & Lecture Hall"
                onError={handleImgErr}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              /* Fallback Visual for Classroom Photo */
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0050FF] via-[#00D6FF]/80 to-[#0050FF] p-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-full h-full bg-[#08090E]/95 backdrop-blur-md rounded-[10px] flex flex-col items-center justify-center p-6 relative">
                  
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-0.5 mb-3 shadow-[0_0_30px_rgba(0,214,255,0.4)] flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>

                  <span className="text-sm font-bold text-white mb-1">Smart Lecture Auditorium</span>
                  <span className="text-[11px] text-[#00D6FF] font-mono mb-4">High-Tech Learning Campus</span>

                  {/* Upload Notice Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-[10px] font-mono text-white/80">
                    <Upload className="w-3 h-3 text-[#00D6FF]" />
                    <span>Upload image to /public/assets/classroom/</span>
                  </div>

                </div>
              </div>
            )}

            {/* Floating Location Overlay Tag */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-left flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00D6FF] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white leading-none">Main Academic Complex</div>
                  <div className="text-[10px] font-mono text-white/60 mt-0.5">Colombo • Nugegoda • Kandy • Online</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#00D6FF]/20 text-[#00D6FF] border border-[#00D6FF]/30">
                Smart Campus
              </span>
            </div>

          </div>

          {/* Quick Classroom Highlights Below Image */}
          <div className="flex items-center justify-center gap-4 mt-4 text-xs font-mono text-white/70">
            <span className="flex items-center gap-1 text-[#00D6FF]">
              <Wind className="w-3.5 h-3.5" /> 100% Climate Controlled
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#00D6FF]">
              <Monitor className="w-3.5 h-3.5" /> Dual 4K Visualizers
            </span>
          </div>
        </div>

        {/* Right Column: Classroom Location & Detailed Features */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          <div>
            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#00D6FF]/15 text-[#00D6FF] border border-[#00D6FF]/40 font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" /> Classroom Facilities & Campus
              </span>
              <span className="text-xs font-mono text-white/50">
                Hybrid On-Site & Virtual Architecture
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
              State-of-the-Art <span className="text-gradient-cyan">Smart Learning Halls</span>
            </h3>

            {/* Location Address & Details */}
            <div className="flex items-start gap-2 text-xs font-mono text-white/70 mb-6 bg-white/[0.03] p-3 rounded-xl border border-white/10">
              <MapPin className="w-4 h-4 text-[#00D6FF] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Primary Locations:</strong> Colombo Main Tech Auditorium, Nugegoda Science Center, Kandy City Campus, & Live Global Streaming Classroom.
              </div>
            </div>

            {/* Facilities & Details List */}
            <div className="space-y-3 mb-6">
              
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#00D6FF]/10 text-[#00D6FF] shrink-0 mt-0.5">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">AI-Integrated Interactive Whiteboards & Projection</h4>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Ultra-HD dual projection screens with synchronized digital whiteboard notes automatically saved to student dashboards.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0050FF]/10 text-[#0050FF] shrink-0 mt-0.5">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Live HD Recording & Online Hybrid Sync</h4>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Every lecture is recorded live in 4K multi-angle video with instant AI transcript search and lecture replay.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#00D6FF]/10 text-[#00D6FF] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Tiered Ergonomic Seating & 1-on-1 Help Desks</h4>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Spacious air-conditioned halls with dedicated teaching assistants on-site for immediate doubt resolution.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Classroom Stats & Action Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Campus Metrics */}
            <div className="flex items-center gap-6 w-full sm:w-auto justify-around sm:justify-start font-mono">
              <div>
                <span className="text-[11px] text-white/50 block">Auditorium Capacity</span>
                <span className="text-base font-bold text-white">500+ Seats</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-[11px] text-white/50 block">Campus Locations</span>
                <span className="text-base font-bold text-[#00D6FF]">4 Centers</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-[11px] text-white/50 block">Smart AC Tech</span>
                <span className="text-base font-bold text-emerald-400">100% Smart</span>
              </div>
            </div>

            {/* Action Button */}
            <a
              href="#courses"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:scale-105 text-white font-semibold text-xs shadow-[0_0_20px_rgba(0,214,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

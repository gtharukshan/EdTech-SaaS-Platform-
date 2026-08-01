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
  PlayCircle,
  Sun,
  Moon,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Zap,
  Filter,
  X,
  Star,
  Check,
  Building2,
  Layers,
  ArrowUpRight,
  Menu,
  QrCode,
  FileCheck,
  ClipboardList,
  CheckSquare,
  ShieldCheck,
  Download,
  AlertCircle,
  ArrowLeft,
  CreditCard,
  Receipt,
  Upload,
  BarChart2,
  Trophy,
  FileDown,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Send,
  Edit3,
  PenTool,
  Bot,
  Trash2,
  Save,
  Maximize2,
  Camera,
  Image as ImageIcon,
  Paperclip,
  Smile,
  Mic,
  MoreVertical,
  CheckCheck,
  Phone,
  PhoneCall,
  History,
  DollarSign
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { TEACHER_DATA, TeacherProfileContainer } from './TeacherProfileContainer';

interface StudentDashboardProps {
  studentName?: string;
  stream?: 'Physical Science' | 'Biological Science';
  onNavigateHome: () => void;
}

export interface ProductBook {
  id: string;
  title: string;
  subject: 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology';
  author: string;
  price: string;
  rating: number;
  salesCount: string;
  coverImage: string;
  badge: string;
  description: string;
}

export const PRODUCT_BOOKS: ProductBook[] = [
  {
    id: 'book-maths-1',
    title: 'Pure Mathematics Integration & Calculus Master Guide',
    subject: 'Combined Maths',
    author: 'Eng R. Jeyakumar',
    price: 'LKR 2,800',
    rating: 4.98,
    salesCount: '4,200+ Sold',
    coverImage: '/assets/teachers/maths.jpg',
    badge: 'Best Seller',
    description: 'Complete step-by-step resolution techniques for 200+ integration and differentiation exam problems.'
  },
  {
    id: 'book-maths-2',
    title: 'Applied Mechanics Statics & Dynamics Model Answers',
    subject: 'Combined Maths',
    author: 'Eng R. Jeyakumar',
    price: 'LKR 3,200',
    rating: 4.96,
    salesCount: '3,800+ Sold',
    coverImage: '/assets/teachers/maths.jpg',
    badge: 'Exam Mastery',
    description: 'Visual vector diagrams, friction mechanics, and rigid body dynamics problem sets.'
  },
  {
    id: 'book-physics-1',
    title: 'Electromagnetic Fields & Wave Optics Visual Blueprint',
    subject: 'Physics',
    author: 'Eng S. Balamurugan',
    price: 'LKR 2,900',
    rating: 4.97,
    salesCount: '3,500+ Sold',
    coverImage: '/assets/teachers/physics.jpg',
    badge: 'Top Rated',
    description: 'High-yield field theory summaries, circuit shortcuts, and wave interference proofs.'
  },
  {
    id: 'book-physics-2',
    title: 'Modern Physics & Thermal Physics Master Workbook',
    subject: 'Physics',
    author: 'Eng S. Balamurugan',
    price: 'LKR 3,100',
    rating: 4.95,
    salesCount: '2,900+ Sold',
    coverImage: '/assets/teachers/physics.jpg',
    badge: 'Revision Pack',
    description: 'Quantum radiation, kinetic theory, and nuclear physics structured essay solutions.'
  },
  {
    id: 'book-chemistry-1',
    title: 'Organic Chemistry Reaction Mechanism Map & Shortcuts',
    subject: 'Chemistry',
    author: 'Sivanesan Sir',
    price: 'LKR 2,750',
    rating: 4.99,
    salesCount: '5,100+ Sold',
    coverImage: '/assets/teachers/chemistry.jpg',
    badge: 'Best Seller',
    description: 'Complete 3D reaction pathways, electron pushing guides, and synthesis flowcharts.'
  },
  {
    id: 'book-chemistry-2',
    title: 'Physical & Inorganic Chemistry Equilibrium Handbook',
    subject: 'Chemistry',
    author: 'Sivanesan Sir',
    price: 'LKR 2,600',
    rating: 4.94,
    salesCount: '2,700+ Sold',
    coverImage: '/assets/teachers/chemistry.jpg',
    badge: 'Core Reference',
    description: 'Chemical kinetics, ionic equilibrium, electrochemistry, and s/p/d block element trends.'
  },
  {
    id: 'book-biology-1',
    title: 'Molecular Genetics & Recombinant DNA Blueprint',
    subject: 'Biology',
    author: 'K. Umamaheswaran',
    price: 'LKR 2,950',
    rating: 4.98,
    salesCount: '4,600+ Sold',
    coverImage: '/assets/teachers/biology.jpg',
    badge: 'Hot Item',
    description: 'Cellular energetics, DNA transcription, translation diagrams, and biotechnology case studies.'
  },
  {
    id: 'book-biology-2',
    title: 'Plant & Human Physiology Structural Essay Guide',
    subject: 'Biology',
    author: 'K. Umamaheswaran',
    price: 'LKR 3,050',
    rating: 4.96,
    salesCount: '3,100+ Sold',
    coverImage: '/assets/teachers/biology.jpg',
    badge: 'Must Have',
    description: 'Standardized labeling diagrams and scoring blueprints for A/L Biology essay papers.'
  }
];

// Detailed Exam Results Dataset with Topper Photo, Marks & Topper Paper PDF
export const DETAILED_SUBJECT_EXAMS = [
  // Combined Maths
  {
    id: 'm-ex-1',
    subject: 'Combined Maths',
    examTitle: 'Exam 1: Pure Mathematics - Differentiation & Limits',
    date: 'Jan 14, 2026',
    score: 92,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Eng R. Jeyakumar',
    rank: '#8 in Class',
    remarks: 'Outstanding performance in limit proofs and chain rule applications.',
    topperName: 'K. Thivakar',
    topperScore: '99 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/maths.jpg'
  },
  {
    id: 'm-ex-2',
    subject: 'Combined Maths',
    examTitle: 'Exam 2: Applied Mechanics - Vectors & Rigid Body Statics',
    date: 'Feb 20, 2026',
    score: 88,
    maxScore: 100,
    grade: 'A',
    teacher: 'Eng R. Jeyakumar',
    rank: '#12 in Class',
    remarks: 'Strong vector resolution; revise moments of force questions.',
    topperName: 'S. Archana',
    topperScore: '98 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/maths.jpg'
  },
  {
    id: 'm-ex-3',
    subject: 'Combined Maths',
    examTitle: 'Exam 3: Pure Mathematics - Definite & Indefinite Integration',
    date: 'Mar 28, 2026',
    score: 96,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Eng R. Jeyakumar',
    rank: '#3 in Class',
    remarks: 'Flawless substitution & integration by parts methods.',
    topperName: 'V. Danushan',
    topperScore: '100 / 100',
    topperRank: 'Island #1 (Perfect Score)',
    topperAvatar: '/assets/teachers/maths.jpg'
  },
  {
    id: 'm-ex-4',
    subject: 'Combined Maths',
    examTitle: 'Exam 4: Applied Mechanics - Friction & Projectile Dynamics',
    date: 'May 15, 2026',
    score: 94,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Eng R. Jeyakumar',
    rank: '#5 in Class',
    remarks: 'Excellent trajectory calculations and force balance diagrams.',
    topperName: 'T. Kavithan',
    topperScore: '99 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/maths.jpg'
  },

  // Physics
  {
    id: 'p-ex-1',
    subject: 'Physics',
    examTitle: 'Exam 1: Units, Dimensions & Measurement Error Analysis',
    date: 'Jan 18, 2026',
    score: 90,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Eng S. Balamurugan',
    rank: '#9 in Class',
    remarks: 'Good precision in vernier calliper & screw gauge problem sets.',
    topperName: 'M. Nithusan',
    topperScore: '98 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/physics.jpg'
  },
  {
    id: 'p-ex-2',
    subject: 'Physics',
    examTitle: 'Exam 2: Mechanics, Circular Motion & Gravitational Fields',
    date: 'Feb 25, 2026',
    score: 93,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Eng S. Balamurugan',
    rank: '#6 in Class',
    remarks: 'Strong centripetal acceleration and Kepler’s law proofs.',
    topperName: 'P. Sharaniya',
    topperScore: '99 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/physics.jpg'
  },
  {
    id: 'p-ex-3',
    subject: 'Physics',
    examTitle: 'Exam 3: Wave Motion, Interference & Sound Intensity',
    date: 'Apr 04, 2026',
    score: 87,
    maxScore: 100,
    grade: 'A',
    teacher: 'Eng S. Balamurugan',
    rank: '#15 in Class',
    remarks: 'Solid wave equations; practice standing waves in closed pipes.',
    topperName: 'R. Luxman',
    topperScore: '97 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/physics.jpg'
  },
  {
    id: 'p-ex-4',
    subject: 'Physics',
    examTitle: 'Exam 4: Electromagnetic Field Theory & Circuit Induction',
    date: 'May 22, 2026',
    score: 95,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Eng S. Balamurugan',
    rank: '#4 in Class',
    remarks: 'Top score in Lenz’s law and flux change derivations.',
    topperName: 'S. Archana',
    topperScore: '100 / 100',
    topperRank: 'Island #1 (Perfect Score)',
    topperAvatar: '/assets/teachers/physics.jpg'
  },

  // Chemistry
  {
    id: 'c-ex-1',
    subject: 'Chemistry',
    examTitle: 'Exam 1: Atomic Structure & Chemical Bonding Trends',
    date: 'Jan 22, 2026',
    score: 89,
    maxScore: 100,
    grade: 'A',
    teacher: 'Sivanesan Sir',
    rank: '#11 in Class',
    remarks: 'Good understanding of hybridization and VSEPR geometry.',
    topperName: 'A. Priyanka',
    topperScore: '97 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/chemistry.jpg'
  },
  {
    id: 'c-ex-2',
    subject: 'Chemistry',
    examTitle: 'Exam 2: Gaseous State & Chemical Energetics',
    date: 'Mar 02, 2026',
    score: 92,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Sivanesan Sir',
    rank: '#7 in Class',
    remarks: 'Accurate Hess’s law calculations and PV=nRT ideal gas graphs.',
    topperName: 'K. Thivakar',
    topperScore: '99 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/chemistry.jpg'
  },
  {
    id: 'c-ex-3',
    subject: 'Chemistry',
    examTitle: 'Exam 3: Organic Reaction Pathways & Electrophilic Addition',
    date: 'Apr 12, 2026',
    score: 97,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Sivanesan Sir',
    rank: '#2 in Class',
    remarks: 'Highest score in reaction mechanisms and functional group tests.',
    topperName: 'G. Tharukshan',
    topperScore: '100 / 100',
    topperRank: 'Island #1 (Perfect Score)',
    topperAvatar: '/assets/teachers/chemistry.jpg'
  },
  {
    id: 'c-ex-4',
    subject: 'Chemistry',
    examTitle: 'Exam 4: Inorganic Chemistry - S/P Block Element Reactions',
    date: 'Jun 01, 2026',
    score: 91,
    maxScore: 100,
    grade: 'A*',
    teacher: 'Sivanesan Sir',
    rank: '#8 in Class',
    remarks: 'Solid trend explanations for halide solubility & thermal stability.',
    topperName: 'V. Danushan',
    topperScore: '98 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/chemistry.jpg'
  },

  // Biology
  {
    id: 'b-ex-1',
    subject: 'Biology',
    examTitle: 'Exam 1: Cellular Structure & Biomolecule Biochemistry',
    date: 'Jan 26, 2026',
    score: 94,
    maxScore: 100,
    grade: 'A*',
    teacher: 'K. Umamaheswaran',
    rank: '#5 in Class',
    remarks: 'Perfect organelle function summaries and enzyme kinetics.',
    topperName: 'S. Archana',
    topperScore: '99 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/biology.jpg'
  },
  {
    id: 'b-ex-2',
    subject: 'Biology',
    examTitle: 'Exam 2: Plant Physiology & Photosynthetic Light Reactions',
    date: 'Mar 10, 2026',
    score: 96,
    maxScore: 100,
    grade: 'A*',
    teacher: 'K. Umamaheswaran',
    rank: '#3 in Class',
    remarks: 'Flawless Calvin cycle and transpiration stream labeling.',
    topperName: 'P. Sharaniya',
    topperScore: '100 / 100',
    topperRank: 'Island #1 (Perfect Score)',
    topperAvatar: '/assets/teachers/biology.jpg'
  },
  {
    id: 'b-ex-3',
    subject: 'Biology',
    examTitle: 'Exam 3: Human Physiology - Digestive & Respiratory Systems',
    date: 'Apr 20, 2026',
    score: 91,
    maxScore: 100,
    grade: 'A*',
    teacher: 'K. Umamaheswaran',
    rank: '#9 in Class',
    remarks: 'Great gas exchange graphs; review enzyme secretion sites.',
    topperName: 'A. Priyanka',
    topperScore: '98 / 100',
    topperRank: 'Island #1 (Batch Top)',
    topperAvatar: '/assets/teachers/biology.jpg'
  },
  {
    id: 'b-ex-4',
    subject: 'Biology',
    examTitle: 'Exam 4: Recombinant DNA & Molecular Genetics Blueprint',
    date: 'Jun 08, 2026',
    score: 98,
    maxScore: 100,
    grade: 'A*',
    teacher: 'K. Umamaheswaran',
    rank: '#1 in Class',
    remarks: 'Top score in PCR stages and restriction enzyme cleavage diagrams!',
    topperName: 'Student Candidate (You!)',
    topperScore: '98 / 100',
    topperRank: 'Island #1 (Batch Top Scorer)',
    topperAvatar: '/assets/teachers/biology.jpg'
  }
];

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Teacher Whiteboard Session Dates & Captured Photos Dataset Across Months & Years
export const TEACHER_WHITEBOARD_SESSIONS = [
  // July 2026 Sessions
  {
    date: 'Jul 24, 2026',
    month: 6,
    year: 2026,
    topic: 'Integration by Substitution & Trigo Identities',
    photos: [
      { id: 'w-1', photoNum: 1, image: '/assets/teachers/maths.jpg' },
      { id: 'w-2', photoNum: 2, image: '/assets/teachers/physics.jpg' },
      { id: 'w-3', photoNum: 3, image: '/assets/teachers/chemistry.jpg' },
      { id: 'w-4', photoNum: 4, image: '/assets/teachers/biology.jpg' }
    ]
  },
  {
    date: 'Jul 17, 2026',
    month: 6,
    year: 2026,
    topic: 'Applied Dynamics & Friction Coefficients',
    photos: [
      { id: 'w-5', photoNum: 1, image: '/assets/teachers/maths.jpg' },
      { id: 'w-6', photoNum: 2, image: '/assets/teachers/physics.jpg' },
      { id: 'w-7', photoNum: 3, image: '/assets/teachers/chemistry.jpg' },
      { id: 'w-8', photoNum: 4, image: '/assets/teachers/biology.jpg' }
    ]
  },
  {
    date: 'Jul 10, 2026',
    month: 6,
    year: 2026,
    topic: 'Electromagnetic Induction & Faraday Laws',
    photos: [
      { id: 'w-9', photoNum: 1, image: '/assets/teachers/physics.jpg' },
      { id: 'w-10', photoNum: 2, image: '/assets/teachers/maths.jpg' },
      { id: 'w-11', photoNum: 3, image: '/assets/teachers/chemistry.jpg' },
      { id: 'w-12', photoNum: 4, image: '/assets/teachers/biology.jpg' }
    ]
  },
  {
    date: 'Jul 03, 2026',
    month: 6,
    year: 2026,
    topic: 'Organic Reaction Pathways & Mechanisms',
    photos: [
      { id: 'w-13', photoNum: 1, image: '/assets/teachers/chemistry.jpg' },
      { id: 'w-14', photoNum: 2, image: '/assets/teachers/biology.jpg' },
      { id: 'w-15', photoNum: 3, image: '/assets/teachers/maths.jpg' },
      { id: 'w-16', photoNum: 4, image: '/assets/teachers/physics.jpg' }
    ]
  },

  // June 2026 Sessions
  {
    date: 'Jun 26, 2026',
    month: 5,
    year: 2026,
    topic: 'Definite Integration & Area Under Curves',
    photos: [
      { id: 'w-17', photoNum: 1, image: '/assets/teachers/maths.jpg' },
      { id: 'w-18', photoNum: 2, image: '/assets/teachers/physics.jpg' },
      { id: 'w-19', photoNum: 3, image: '/assets/teachers/chemistry.jpg' },
      { id: 'w-20', photoNum: 4, image: '/assets/teachers/biology.jpg' }
    ]
  },
  {
    date: 'Jun 19, 2026',
    month: 5,
    year: 2026,
    topic: 'Wave Optics & Double Slit Interference',
    photos: [
      { id: 'w-21', photoNum: 1, image: '/assets/teachers/physics.jpg' },
      { id: 'w-22', photoNum: 2, image: '/assets/teachers/maths.jpg' },
      { id: 'w-23', photoNum: 3, image: '/assets/teachers/chemistry.jpg' },
      { id: 'w-24', photoNum: 4, image: '/assets/teachers/biology.jpg' }
    ]
  },

  // May 2026 Sessions
  {
    date: 'May 22, 2026',
    month: 4,
    year: 2026,
    topic: 'Chemical Equilibrium & Le Chatelier Principle',
    photos: [
      { id: 'w-25', photoNum: 1, image: '/assets/teachers/chemistry.jpg' },
      { id: 'w-26', photoNum: 2, image: '/assets/teachers/biology.jpg' },
      { id: 'w-27', photoNum: 3, image: '/assets/teachers/maths.jpg' },
      { id: 'w-28', photoNum: 4, image: '/assets/teachers/physics.jpg' }
    ]
  }
];

// Mock Subject-Specific Upcoming Assignments & Coursework Data
const subjectAssignments: Record<string, Array<{
  id: string;
  title: string;
  dueDate: string;
  dueCountdown: string;
  totalMarks: number;
  passingMarks: number;
  submissionType: string;
  fileSize: string;
  description: string;
  instructions: string[];
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  feedback?: string;
}>> = {
  'Combined Maths': [
    {
      id: 'cm-assign-1',
      title: 'Assignment 04: Definite Integration & Area Under Curves Proofs',
      dueDate: 'Aug 02, 2026 • 11:59 PM',
      dueCountdown: '3 Days Left',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Handcopy / Scan',
      fileSize: '2.4 MB PDF',
      description: 'Solve step-by-step calculus integration proofs from Module 3. Must show vector diagrams and definite integral evaluations.',
      instructions: [
        'Write answers on A4 paper and scan into a single clear PDF document.',
        'Include your Student Index Number on top of each page.',
        'Late submissions will be penalized by 10% per day.'
      ],
      status: 'pending'
    },
    {
      id: 'cm-assign-2',
      title: 'Assignment 03: Rigid Body Statics & Moments of Force Problem Set',
      dueDate: 'Jul 25, 2026 • 11:59 PM',
      dueCountdown: 'Graded',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Scan',
      fileSize: '1.8 MB PDF',
      description: 'Applied Mathematics problem set covering equilibrium of coplanar forces and ladder friction problems.',
      instructions: ['Submit full working with free body diagrams.'],
      status: 'graded',
      grade: '96/100 (A*)',
      feedback: 'Excellent work on moment equations and friction coefficients. Full marks awarded for problem 4.'
    },
    {
      id: 'cm-assign-3',
      title: 'Assignment 05: Complex Numbers & De Moivre Theorem Challenge',
      dueDate: 'Aug 10, 2026 • 11:59 PM',
      dueCountdown: '11 Days Left',
      totalMarks: 50,
      passingMarks: 30,
      submissionType: 'PDF Scan',
      fileSize: '3.1 MB PDF',
      description: 'Advanced polynomial root proofs, loci in Argand diagrams, and trigonometric identities using De Moivre theorem.',
      instructions: ['Show all working. Use neat diagrams for loci questions.'],
      status: 'pending'
    }
  ],
  'Physics': [
    {
      id: 'phy-assign-1',
      title: 'Assignment 04: Wave Optics & Double Slit Interference Calculation',
      dueDate: 'Aug 04, 2026 • 11:59 PM',
      dueCountdown: '5 Days Left',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Scan',
      fileSize: '2.1 MB PDF',
      description: 'Derive Youngs double slit fringe width formula and solve structured questions on diffraction grating resolution.',
      instructions: [
        'Draw clean optical path diagrams with ray directions.',
        'Use SI units in all numerical calculations.'
      ],
      status: 'pending'
    },
    {
      id: 'phy-assign-2',
      title: 'Assignment 03: Electrostatic Fields & Potential Difference Worksheet',
      dueDate: 'Jul 20, 2026 • 11:59 PM',
      dueCountdown: 'Graded',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Scan',
      fileSize: '1.5 MB PDF',
      description: 'Gauss Law applications and electric field calculations around charged spheres and parallel plates.',
      instructions: ['Complete all section A and section B questions.'],
      status: 'graded',
      grade: '92/100 (A*)',
      feedback: 'Well detailed force vectors. Remember to specify field direction for vector quantities.'
    }
  ],
  'Chemistry': [
    {
      id: 'chem-assign-1',
      title: 'Assignment 04: Organic Synthesis Pathways & Reaction Mechanisms',
      dueDate: 'Aug 03, 2026 • 11:59 PM',
      dueCountdown: '4 Days Left',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Scan',
      fileSize: '2.8 MB PDF',
      description: 'Multi-step organic synthesis sequences starting from benzene and alkenes. Curly arrow electron push mechanism proofs.',
      instructions: [
        'Draw all intermediate organic structures clearly.',
        'Specify exact reaction conditions (reagents, temperature, catalysts).'
      ],
      status: 'pending'
    },
    {
      id: 'chem-assign-2',
      title: 'Assignment 03: Chemical Equilibrium & Le Chatelier Principle Calculations',
      dueDate: 'Jul 18, 2026 • 11:59 PM',
      dueCountdown: 'Graded',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Scan',
      fileSize: '1.9 MB PDF',
      description: 'Kc and Kp equilibrium constant calculations, partial pressure matrices, and temperature dependence shifts.',
      instructions: ['Round final values to 3 significant figures.'],
      status: 'graded',
      grade: '98/100 (A*)',
      feedback: 'Flawless equilibrium expression setups. Great attention to unit conversions.'
    }
  ],
  'Biology': [
    {
      id: 'bio-assign-1',
      title: 'Assignment 04: Human Physiology & Nervous System Signal Transduction',
      dueDate: 'Aug 05, 2026 • 11:59 PM',
      dueCountdown: '6 Days Left',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Scan / Structured Essay',
      fileSize: '3.0 MB PDF',
      description: 'Action potential propagation, synaptic transmission pathways, and reflex arc anatomical diagrams.',
      instructions: [
        'Label all anatomical diagrams clearly.',
        'Use bullet points for sequential physiological events.'
      ],
      status: 'pending'
    },
    {
      id: 'bio-assign-2',
      title: 'Assignment 03: Molecular Genetics & Recombinant DNA Technology',
      dueDate: 'Jul 22, 2026 • 11:59 PM',
      dueCountdown: 'Graded',
      totalMarks: 100,
      passingMarks: 60,
      submissionType: 'PDF Scan',
      fileSize: '2.2 MB PDF',
      description: 'PCR amplification stages, restriction enzyme mapping, and plasmid vector insertion mechanisms.',
      instructions: ['Draw gel electrophoresis band migration results for question 3.'],
      status: 'graded',
      grade: '94/100 (A*)',
      feedback: 'Thorough explanation of PCR cycle temperatures and primer annealings.'
    }
  ]
};

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  studentName = 'Student Candidate',
  stream = 'Physical Science',
  onNavigateHome,
}) => {
  const [activeNav, setActiveNav] = useState<'dashboard' | 'maths' | 'physics' | 'chemistry' | 'biology' | 'products' | 'settings'>('dashboard');
  const [dashboardSubTab, setDashboardSubTab] = useState<'overview' | 'upcoming-exams' | 'exam-history' | 'attendance' | 'attendance-qr' | 'payments' | 'subject-results'>('overview');
  const [selectedResultSubject, setSelectedResultSubject] = useState<'All' | 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology'>('All');
  const [selectedProductFilter, setSelectedProductFilter] = useState<'All' | 'Combined Maths' | 'Physics' | 'Chemistry' | 'Biology'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [showUpgradeCard, setShowUpgradeCard] = useState(true);
  const [orderedBooks, setOrderedBooks] = useState<string[]>([]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Subject Page Specific Action Feature Tabs: Profile, Notes, Whiteboard, Direct Message, Academy AI, Assignments
  const [subjectFeatureTab, setSubjectFeatureTab] = useState<'profile' | 'notes' | 'whiteboard' | 'direct-message' | 'academy-ai' | 'assignments'>('notes');
  const [submittedAssignmentIds, setSubmittedAssignmentIds] = useState<string[]>([]);
  const [assignmentModalOpen, setAssignmentModalOpen] = useState<boolean>(false);
  const [selectedAssignmentForModal, setSelectedAssignmentForModal] = useState<any | null>(null);
  const [selectedFileForUpload, setSelectedFileForUpload] = useState<string>('');
  
  // Whiteboard Month, Year & Date Filter States
  const [whiteboardMonth, setWhiteboardMonth] = useState<number>(6); // 6: July
  const [whiteboardYear, setWhiteboardYear] = useState<number>(2026);
  const [selectedWhiteboardDate, setSelectedWhiteboardDate] = useState<string>('Jul 24, 2026');

  // Full-Screen Image Lightbox Index State for Prev/Next Navigation
  const [selectedBoardPhotoIndex, setSelectedBoardPhotoIndex] = useState<number | null>(null);

  const [chatMessages, setChatMessages] = useState<{ 
    sender: 'user' | 'teacher'; 
    text: string; 
    time: string;
    attachment?: { type: 'photo' | 'pdf' | 'voice' | 'exam'; name: string; size?: string };
    read?: boolean;
  }>([
    { 
      sender: 'teacher', 
      text: 'Hello Candidate! How can I assist you with your subject revision today? Feel free to attach photos of your doubts or PDF homework assignments.', 
      time: '10:14 AM',
      read: true
    }
  ]);
  const [inputChatMsg, setInputChatMsg] = useState('');
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState<{ type: 'photo' | 'pdf' | 'voice' | 'exam'; name: string; size?: string } | null>(null);

  // AI Prompt State inside Subject Page
  const [aiPromptInput, setAiPromptInput] = useState('');
  const [aiResponseList, setAiResponseList] = useState<{ query: string; response: string }[]>([
    {
      query: 'Explain differentiation chain rule with a step-by-step example.',
      response: 'The Chain Rule states: d/dx [f(g(x))] = f\'(g(x)) * g\'(x). Example: For y = (3x^2 + 2)^5, let u = 3x^2 + 2. dy/du = 5u^4 and du/dx = 6x. Therefore, dy/dx = 5(3x^2 + 2)^4 * 6x = 30x(3x^2 + 2)^4.'
    }
  ]);

  // Attendance History Modal States
  const [showAttendanceHistoryModal, setShowAttendanceHistoryModal] = useState(false);
  const [selectedHistoryMonth, setSelectedHistoryMonth] = useState<number>(new Date().getMonth()); // 0-indexed
  const [selectedHistoryYear, setSelectedHistoryYear] = useState<number>(2026);

  // Maximum 3 Years back only (2026, 2025, 2024). Next/Future years disabled.
  const AVAILABLE_YEARS = [2026, 2025, 2024];

  // Interactive Multi-Step Pay Online Modal States
  const [showPayOnlineModal, setShowPayOnlineModal] = useState(false);
  const [payStep, setPayStep] = useState<1 | 2 | 3 | 4>(1);
  const [paySelectedSubjects, setPaySelectedSubjects] = useState<string[]>(['Combined Maths', 'Physics']);
  const [paySelectedMonths, setPaySelectedMonths] = useState<string[]>(['August 2026']);
  const [payStudentName, setPayStudentName] = useState<string>(studentName);
  const [payRemarks, setPayRemarks] = useState<string>('August tuition fee payment for Term 2 revision');
  const [payCardName, setPayCardName] = useState<string>(studentName);
  const [payCardNumber, setPayCardNumber] = useState<string>('4532 8910 2482 8981');
  const [payCardExpiry, setPayCardExpiry] = useState<string>('08/28');
  const [payCardCvc, setPayCardCvc] = useState<string>('492');
  const [payMethod, setPayMethod] = useState<'card' | 'bank' | 'qr'>('card');
  const [isProcessingPay, setIsProcessingPay] = useState(false);

  // Payment History Sub-Tab & Filter States
  const [activePaymentTab, setActivePaymentTab] = useState<'current' | 'history'>('current');
  const [paymentHistoryMonthFilter, setPaymentHistoryMonthFilter] = useState<string>('All');
  const [paymentSearchQuery, setPaymentSearchQuery] = useState<string>('');
  const [selectedReceiptModal, setSelectedReceiptModal] = useState<any | null>(null);

  // Comprehensive Month-by-Month Payment History Records
  const [paymentHistoryData, setPaymentHistoryData] = useState<Array<{
    id: string;
    invoiceNo: string;
    transactionRef: string;
    month: string;
    date: string;
    time: string;
    subject: string;
    teacher: string;
    amount: number;
    method: string;
    status: 'Paid' | 'Verified' | 'Pending';
    remarks?: string;
  }>>([
    // August 2026
    {
      id: 'pay-aug-01',
      invoiceNo: 'INV-2026-081',
      transactionRef: 'TRX-98234101',
      month: 'August 2026',
      date: 'August 05, 2026',
      time: '09:30 AM',
      subject: 'Combined Mathematics',
      teacher: 'Eng R. Jeyakumar',
      amount: 3000,
      method: 'Bank Slip Upload',
      status: 'Paid',
      remarks: 'August tuition fee payment for Term 2 revision'
    },
    {
      id: 'pay-aug-02',
      invoiceNo: 'INV-2026-082',
      transactionRef: 'TRX-98234102',
      month: 'August 2026',
      date: 'August 06, 2026',
      time: '02:15 PM',
      subject: 'Advanced Physics',
      teacher: 'Eng S. Balamurugan',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'Physics monthly theory & paper class'
    },
    {
      id: 'pay-aug-03',
      invoiceNo: 'INV-2026-083',
      transactionRef: 'TRX-98234103',
      month: 'August 2026',
      date: 'August 07, 2026',
      time: '11:45 AM',
      subject: 'Advanced Chemistry',
      teacher: 'Sivanesan Sir',
      amount: 3000,
      method: 'Online Payment Gateway',
      status: 'Paid',
      remarks: 'Organic chemistry special module fee'
    },
    // July 2026
    {
      id: 'pay-jul-01',
      invoiceNo: 'INV-2026-071',
      transactionRef: 'TRX-87123901',
      month: 'July 2026',
      date: 'July 03, 2026',
      time: '10:00 AM',
      subject: 'Combined Mathematics',
      teacher: 'Eng R. Jeyakumar',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'July tuition fee payment'
    },
    {
      id: 'pay-jul-02',
      invoiceNo: 'INV-2026-072',
      transactionRef: 'TRX-87123902',
      month: 'July 2026',
      date: 'July 03, 2026',
      time: '10:05 AM',
      subject: 'Advanced Physics',
      teacher: 'Eng S. Balamurugan',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'July tuition fee payment'
    },
    {
      id: 'pay-jul-03',
      invoiceNo: 'INV-2026-073',
      transactionRef: 'TRX-87123903',
      month: 'July 2026',
      date: 'July 04, 2026',
      time: '03:30 PM',
      subject: 'Advanced Chemistry',
      teacher: 'Sivanesan Sir',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'July chemistry revision class'
    },
    {
      id: 'pay-jul-04',
      invoiceNo: 'INV-2026-074',
      transactionRef: 'TRX-87123904',
      month: 'July 2026',
      date: 'July 04, 2026',
      time: '03:35 PM',
      subject: 'Biological Sciences',
      teacher: 'K. Umamaheswaran',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'July biology lab & theory sessions'
    },
    // June 2026
    {
      id: 'pay-jun-01',
      invoiceNo: 'INV-2026-061',
      transactionRef: 'TRX-76012801',
      month: 'June 2026',
      date: 'June 02, 2026',
      time: '08:45 AM',
      subject: 'Combined Mathematics',
      teacher: 'Eng R. Jeyakumar',
      amount: 3000,
      method: 'Bank Slip Upload',
      status: 'Paid',
      remarks: 'June tuition fee'
    },
    {
      id: 'pay-jun-02',
      invoiceNo: 'INV-2026-062',
      transactionRef: 'TRX-76012802',
      month: 'June 2026',
      date: 'June 02, 2026',
      time: '08:50 AM',
      subject: 'Advanced Physics',
      teacher: 'Eng S. Balamurugan',
      amount: 3000,
      method: 'Bank Slip Upload',
      status: 'Paid',
      remarks: 'June physics fee'
    },
    {
      id: 'pay-jun-03',
      invoiceNo: 'INV-2026-063',
      transactionRef: 'TRX-76012803',
      month: 'June 2026',
      date: 'June 05, 2026',
      time: '01:20 PM',
      subject: 'Advanced Chemistry',
      teacher: 'Sivanesan Sir',
      amount: 3000,
      method: 'Online Payment Gateway',
      status: 'Paid',
      remarks: 'June chemistry fee'
    },
    {
      id: 'pay-jun-04',
      invoiceNo: 'INV-2026-064',
      transactionRef: 'TRX-76012804',
      month: 'June 2026',
      date: 'June 05, 2026',
      time: '01:25 PM',
      subject: 'Biological Sciences',
      teacher: 'K. Umamaheswaran',
      amount: 3000,
      method: 'Online Payment Gateway',
      status: 'Paid',
      remarks: 'June biology fee'
    },
    // May 2026
    {
      id: 'pay-may-01',
      invoiceNo: 'INV-2026-051',
      transactionRef: 'TRX-65901701',
      month: 'May 2026',
      date: 'May 04, 2026',
      time: '09:15 AM',
      subject: 'Combined Mathematics',
      teacher: 'Eng R. Jeyakumar',
      amount: 3000,
      method: 'MasterCard (•••• 4310)',
      status: 'Paid',
      remarks: 'May tuition fee'
    },
    {
      id: 'pay-may-02',
      invoiceNo: 'INV-2026-052',
      transactionRef: 'TRX-65901702',
      month: 'May 2026',
      date: 'May 04, 2026',
      time: '09:18 AM',
      subject: 'Advanced Physics',
      teacher: 'Eng S. Balamurugan',
      amount: 3000,
      method: 'MasterCard (•••• 4310)',
      status: 'Paid',
      remarks: 'May physics fee'
    },
    {
      id: 'pay-may-03',
      invoiceNo: 'INV-2026-053',
      transactionRef: 'TRX-65901703',
      month: 'May 2026',
      date: 'May 04, 2026',
      time: '09:22 AM',
      subject: 'Advanced Chemistry',
      teacher: 'Sivanesan Sir',
      amount: 3000,
      method: 'MasterCard (•••• 4310)',
      status: 'Paid',
      remarks: 'May chemistry fee'
    },
    {
      id: 'pay-may-04',
      invoiceNo: 'INV-2026-054',
      transactionRef: 'TRX-65901704',
      month: 'May 2026',
      date: 'May 04, 2026',
      time: '09:25 AM',
      subject: 'Biological Sciences',
      teacher: 'K. Umamaheswaran',
      amount: 3000,
      method: 'MasterCard (•••• 4310)',
      status: 'Paid',
      remarks: 'May biology fee'
    },
    // April 2026
    {
      id: 'pay-apr-01',
      invoiceNo: 'INV-2026-041',
      transactionRef: 'TRX-54890601',
      month: 'April 2026',
      date: 'April 03, 2026',
      time: '10:10 AM',
      subject: 'Combined Mathematics',
      teacher: 'Eng R. Jeyakumar',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'April tuition fee'
    },
    {
      id: 'pay-apr-02',
      invoiceNo: 'INV-2026-042',
      transactionRef: 'TRX-54890602',
      month: 'April 2026',
      date: 'April 03, 2026',
      time: '10:12 AM',
      subject: 'Advanced Physics',
      teacher: 'Eng S. Balamurugan',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'April physics fee'
    },
    {
      id: 'pay-apr-03',
      invoiceNo: 'INV-2026-043',
      transactionRef: 'TRX-54890603',
      month: 'April 2026',
      date: 'April 03, 2026',
      time: '10:15 AM',
      subject: 'Advanced Chemistry',
      teacher: 'Sivanesan Sir',
      amount: 3000,
      method: 'Visa Card (•••• 8981)',
      status: 'Paid',
      remarks: 'April chemistry fee'
    },
    // March 2026
    {
      id: 'pay-mar-01',
      invoiceNo: 'INV-2026-031',
      transactionRef: 'TRX-43789501',
      month: 'March 2026',
      date: 'March 01, 2026',
      time: '02:00 PM',
      subject: 'Combined Mathematics',
      teacher: 'Eng R. Jeyakumar',
      amount: 3000,
      method: 'Bank Slip Deposit',
      status: 'Paid',
      remarks: 'March maths fee'
    },
    {
      id: 'pay-mar-02',
      invoiceNo: 'INV-2026-032',
      transactionRef: 'TRX-43789502',
      month: 'March 2026',
      date: 'March 01, 2026',
      time: '02:05 PM',
      subject: 'Advanced Physics',
      teacher: 'Eng S. Balamurugan',
      amount: 3000,
      method: 'Bank Slip Deposit',
      status: 'Paid',
      remarks: 'March physics fee'
    },
    {
      id: 'pay-mar-03',
      invoiceNo: 'INV-2026-033',
      transactionRef: 'TRX-43789503',
      month: 'March 2026',
      date: 'March 02, 2026',
      time: '04:10 PM',
      subject: 'Advanced Chemistry',
      teacher: 'Sivanesan Sir',
      amount: 3000,
      method: 'Bank Slip Deposit',
      status: 'Paid',
      remarks: 'March chemistry fee'
    }
  ]);

  // Available 3 Months Period Options (Current & Next 2 Months)
  const PAY_MONTH_OPTIONS = ['August 2026', 'September 2026', 'October 2026'];
  
  // Available Subjects List & Base Prices
  const PAY_SUBJECT_OPTIONS = [
    { name: 'Combined Mathematics', key: 'Combined Maths', price: 3000 },
    { name: 'Advanced Physics', key: 'Physics', price: 3000 },
    { name: 'Advanced Chemistry', key: 'Chemistry', price: 3000 },
    { name: 'Biological Sciences', key: 'Biology', price: 3000 }
  ];

  const calculatedPayTotal = paySelectedSubjects.length * paySelectedMonths.length * 3000;

  const { theme, toggleTheme } = useTheme();

  // Enrolled Subject Data
  const subjectsData = [
    {
      id: 'combined-maths',
      name: 'Combined Mathematics',
      teacher: 'A. Thavabalasingam',
      teacherDegree: 'B.Sc. (Hons) Peradeniya',
      stream: 'Physical Science',
      progress: 68,
      lessonsCompleted: '42 / 92 Lessons',
      nextClass: 'Today, 4:00 PM (Pure Math - Integration)',
      gradient: 'from-[var(--brand-gold-start)]/25 to-[var(--brand-gold-mid)]/15 border-[var(--border-brand)]',
      icon: Atom,
      accentColor: 'var(--brand-gold-start)',
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
      gradient: 'from-[var(--brand-gold-mid)]/25 to-[var(--brand-gold-start)]/15 border-[var(--border-brand)]',
      icon: Cpu,
      accentColor: 'var(--brand-gold-mid)',
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
      gradient: 'from-[var(--brand-gold-start)]/20 to-[var(--brand-gold-mid)]/20 border-[var(--border-brand)]',
      icon: Sparkles,
      accentColor: 'var(--brand-gold-mid)',
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
      gradient: 'from-[var(--brand-gold-mid)]/20 to-[var(--brand-gold-start)]/20 border-[var(--border-brand)]',
      icon: Dna,
      accentColor: 'var(--brand-gold-mid)',
    },
  ];

  const handleOrderBook = (bookId: string, title: string) => {
    if (!orderedBooks.includes(bookId)) {
      setOrderedBooks(prev => [...prev, bookId]);
      alert(`🎉 Order Confirmed!\n\n"${title}" has been added to your student portal orders. Our team will contact you for delivery details.`);
    }
  };

  const handleSendMessage = () => {
    if (!inputChatMsg.trim() && !selectedAttachment) return;
    const userMsg = inputChatMsg || (selectedAttachment ? `Attached File: ${selectedAttachment.name}` : '');
    const currentAtt = selectedAttachment;
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatMessages(prev => [
      ...prev, 
      { 
        sender: 'user', 
        text: userMsg, 
        time: nowTime,
        attachment: currentAtt || undefined,
        read: true
      }
    ]);
    setInputChatMsg('');
    setSelectedAttachment(null);
    setShowAttachmentMenu(false);
    setShowEmojiPicker(false);

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { 
          sender: 'teacher', 
          text: currentAtt 
            ? `Received your ${currentAtt.type} attachment "${currentAtt.name}". I am reviewing your work now and will send a detailed response.`
            : `Thank you for your message! I've logged your doubt regarding "${userMsg}". I will send a full handwritten explanation shortly.`, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: true
        }
      ]);
    }, 1200);
  };

  const handleAskAi = () => {
    if (!aiPromptInput.trim()) return;
    const q = aiPromptInput;
    setAiResponseList(prev => [
      {
        query: q,
        response: `🤖 Academy AI Solution for: "${q}"\n\n1. Analyze Given Parameters\n2. Apply Core Formula Derivation\n3. Execute Step-by-Step Mathematical Simplification\n4. Verified Final Result.`
      },
      ...prev
    ]);
    setAiPromptInput('');
  };

  // Filter products based on search & filter
  const filteredProducts = PRODUCT_BOOKS.filter(book => {
    const matchesSubject = selectedProductFilter === 'All' || book.subject === selectedProductFilter;
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  // Filter subject detailed exam results
  const filteredExamResults = DETAILED_SUBJECT_EXAMS.filter(item => {
    const matchesSubject = selectedResultSubject === 'All' || item.subject === selectedResultSubject;
    const matchesSearch = searchQuery === '' || 
      item.examTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.remarks.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.topperName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  // Available Whiteboard Sessions for Selected Month & Year
  const monthFilteredWhiteboardSessions = TEACHER_WHITEBOARD_SESSIONS.filter(
    s => s.month === whiteboardMonth && s.year === whiteboardYear
  );

  // Active Session or Fallback
  const activeWhiteboardSession = TEACHER_WHITEBOARD_SESSIONS.find(s => s.date === selectedWhiteboardDate) 
    || monthFilteredWhiteboardSessions[0] 
    || TEACHER_WHITEBOARD_SESSIONS[0];

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'maths', label: 'Combined Maths', icon: Atom },
    { id: 'physics', label: 'Physics', icon: Cpu },
    { id: 'chemistry', label: 'Chemistry', icon: Sparkles },
    { id: 'biology', label: 'Biology', icon: Dna },
    { id: 'products', label: 'Products & Books', icon: ShoppingBag, badge: 'Special' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] selection:bg-[var(--brand-gold-start)] selection:text-[var(--btn-primary-text)] flex flex-col lg:flex-row transition-colors duration-300 font-sans">
      
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR NAVIGATION (Matching ShipX SaaS Architecture) */}
      {/* ========================================================================= */}
      <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-[var(--bg-card)] border-r border-[var(--border-primary)] p-5 flex flex-col justify-between transition-transform duration-300 ${
        mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div>
          {/* Logo Brand Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--border-primary)]">
            <button 
              onClick={() => {
                setActiveNav('dashboard');
                setDashboardSubTab('overview');
              }}
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-[0_0_20px_var(--shadow-glow)] group-hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full bg-[var(--bg-card)] rounded-[11px] flex items-center justify-center p-0.5 overflow-hidden">
                  <img 
                    src="/assets/logo/logo1.png" 
                    alt="SciEnce Academy Logo" 
                    className="w-full h-full object-contain rounded-[9px] group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[var(--text-primary)] flex items-center gap-1">
                  Sci<span className="text-gradient-cyan">Ence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold-mid)] animate-pulse"></span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[var(--text-subtle)] block font-mono -mt-1">
                  Academy Hatton
                </span>
              </div>
            </button>

            <button 
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-[var(--text-muted)] hover:bg-[var(--bg-pill)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links Menu */}
          <nav className="space-y-1.5">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeNav === link.id;
              return (
                <React.Fragment key={link.id}>
                  <button
                    onClick={() => {
                      setActiveNav(link.id as any);
                      if (link.id === 'dashboard') {
                        setDashboardSubTab('overview');
                      }
                      setMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] shadow-[0_0_20px_var(--shadow-glow)] font-extrabold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-[var(--btn-primary-text)]' : 'text-[var(--text-muted)] group-hover:text-[var(--brand-gold-start)]'}`} />
                      <span>{link.label}</span>
                    </div>

                    {link.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        isActive ? 'bg-[var(--bg-card)] text-[var(--btn-primary-text)]' : 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)]'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </button>

                  {/* SPECIAL DASHBOARD SUB-OPTIONS MENU (EXPANDS UNDER DASHBOARD FOR MOBILE & SMALL SCREENS) */}
                  {link.id === 'dashboard' && activeNav === 'dashboard' && (
                    <div className="pl-4 pr-1 py-1.5 space-y-1 border-l-2 border-[var(--border-brand)] ml-5 my-1 font-mono text-xs animate-in fade-in slide-in-from-top-1">
                      <button
                        onClick={() => {
                          setActiveNav('dashboard');
                          setDashboardSubTab('upcoming-exams');
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                          dashboardSubTab === 'upcoming-exams'
                            ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-[var(--brand-gold-start)] shrink-0" />
                        <span>Upcoming Exams</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveNav('dashboard');
                          setDashboardSubTab('exam-history');
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                          dashboardSubTab === 'exam-history'
                            ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                        }`}
                      >
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Exam History</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveNav('dashboard');
                          setDashboardSubTab('subject-results');
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                          dashboardSubTab === 'subject-results'
                            ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                        }`}
                      >
                        <BarChart2 className="w-3.5 h-3.5 text-[var(--brand-gold-mid)] shrink-0" />
                        <span>Subject Results</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveNav('dashboard');
                          setDashboardSubTab('attendance');
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                          dashboardSubTab === 'attendance'
                            ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-gold-mid)] shrink-0" />
                        <span>Attendance</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveNav('dashboard');
                          setDashboardSubTab('attendance-qr');
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                          dashboardSubTab === 'attendance-qr'
                            ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                        }`}
                      >
                        <QrCode className="w-3.5 h-3.5 text-[var(--brand-gold-start)] shrink-0" />
                        <span>Attendance QR</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveNav('dashboard');
                          setDashboardSubTab('payments');
                          setActivePaymentTab('current');
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                          dashboardSubTab === 'payments' && activePaymentTab === 'current'
                            ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                        }`}
                      >
                        <CreditCard className="w-3.5 h-3.5 text-[var(--brand-gold-mid)] shrink-0" />
                        <span>Tuition Invoices</span>
                      </button>

                      <button
                        onClick={() => {
                          setActiveNav('dashboard');
                          setDashboardSubTab('payments');
                          setActivePaymentTab('history');
                          setMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${
                          dashboardSubTab === 'payments' && activePaymentTab === 'history'
                            ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)] shadow-sm'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                        }`}
                      >
                        <History className="w-3.5 h-3.5 text-[var(--brand-gold-mid)] shrink-0" />
                        <span>Payment History</span>
                      </button>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>

        {/* Bottom AI Pro Upgrade Card & Sign Out */}
        <div className="pt-4 space-y-3">
          {showUpgradeCard && (
            <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[var(--brand-gold-start)]/15 via-[var(--brand-gold-mid)]/15 to-transparent border border-[var(--border-primary)] shadow-lg text-left overflow-hidden">
              <button 
                onClick={() => setShowUpgradeCard(false)}
                className="absolute top-2.5 right-2.5 p-1 rounded-full text-[var(--text-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 mb-3 flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-[var(--btn-primary-text)]" />
              </div>
              <h4 className="text-xs font-bold text-[var(--text-primary)] mb-1">Get Full Access of Academy AI</h4>
              <p className="text-[11px] text-[var(--text-secondary)] mb-3 font-mono leading-tight">
                Upgrade to Pro for unlimited step-by-step solvers & exam predictions.
              </p>
              <button
                onClick={() => alert('🚀 Upgrading to Academy AI Pro Membership...')}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-bold text-xs hover:opacity-90 transition-opacity font-mono"
              >
                Upgrade to Pro
              </button>
            </div>
          )}

          <button
            onClick={onNavigateHome}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-mono font-medium text-[var(--color-error)] hover:bg-[var(--color-error)]/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay Backdrop */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* ========================================================================= */}
      {/* 2. RIGHT MAIN CONTENT AREA */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* TOP HEADER BAR */}
        <header className="sticky top-0 z-30 bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border-primary)] px-4 sm:px-8 py-4 flex items-center justify-between gap-4 transition-colors">
          
          {/* Mobile Drawer Trigger & Search Bar + FULL SPACE UNIFORM DASHBOARD BUTTONS */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Main Search Input */}
            <div className="relative w-full max-w-[170px] sm:max-w-[200px] shrink-0">
              <Search className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] transition-all font-mono"
              />
            </div>
          </div>

          {/* RIGHT ACTIONS BAR: Notification -> Theme Mode Toggle -> User Profile Button with Dropdown */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Notification Bell Icon */}
            <button className="relative p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)] transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--brand-gold-mid)] animate-pulse"></span>
            </button>

            {/* MODE SWITCHER ICON (Placed strictly BETWEEN Notification & User Profile) */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)] transition-all duration-300 active:scale-95 group"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform group-hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--text-primary)] transition-transform group-hover:-rotate-12" />
              )}
            </button>

            {/* USER PROFILE BUTTON WITH DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pl-2.5 rounded-full bg-[var(--bg-pill)] border border-[var(--border-primary)] hover:border-[var(--border-brand)] transition-all text-left"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-md shrink-0">
                  <div className="w-full h-full bg-[var(--bg-card)] rounded-full flex items-center justify-center font-bold text-xs text-[var(--text-primary)]">
                    {studentName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="text-xs font-bold text-[var(--text-primary)] leading-none">{studentName}</div>
                  <div className="text-[10px] text-[var(--brand-gold-start)] font-mono mt-0.5 font-bold">{stream}</div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-[var(--text-subtle)] mr-1" />
              </button>

              {/* USER PROFILE DROPDOWN MENU */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl glass-panel border border-[var(--border-brand)] bg-[var(--bg-card)] p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 text-[var(--text-primary)]">
                  <div className="px-3 py-2.5 border-b border-[var(--border-primary)] mb-2">
                    <p className="text-sm font-bold text-[var(--text-primary)]">{studentName}</p>
                    <p className="text-xs font-mono text-[var(--brand-gold-start)] font-bold">{stream}</p>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-semibold mt-1">
                      ● Active Student Account
                    </span>
                  </div>

                  <button 
                    onClick={toggleTheme}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] flex items-center justify-between font-mono transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {theme === 'dark' ? <Sun className="w-4 h-4 text-[var(--brand-gold-mid)]" /> : <Moon className="w-4 h-4 text-[var(--text-primary)]" />}
                      <span>Theme Mode</span>
                    </span>
                    <span className="text-[10px] text-[var(--brand-gold-start)] font-bold capitalize">{theme}</span>
                  </button>

                  <button 
                    onClick={() => { 
                      setActiveNav('dashboard'); 
                      setDashboardSubTab('subject-results');
                      setProfileDropdownOpen(false); 
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] flex items-center gap-2 font-mono transition-colors"
                  >
                    <BarChart2 className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                    <span>Detailed Subject Results</span>
                  </button>

                  <button 
                    onClick={() => { 
                      setActiveNav('dashboard'); 
                      setDashboardSubTab('payments');
                      setActivePaymentTab('current');
                      setProfileDropdownOpen(false); 
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] flex items-center gap-2 font-mono transition-colors"
                  >
                    <CreditCard className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                    <span>Tuition Fee Invoices</span>
                  </button>

                  <button 
                    onClick={() => { 
                      setActiveNav('dashboard'); 
                      setDashboardSubTab('payments');
                      setActivePaymentTab('history');
                      setProfileDropdownOpen(false); 
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] flex items-center gap-2 font-mono transition-colors"
                  >
                    <History className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                    <span>Monthly Payment History</span>
                  </button>

                  <button 
                    onClick={() => { setActiveNav('products'); setProfileDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] flex items-center gap-2 font-mono transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4 text-[var(--brand-gold-start)]" />
                    <span>Special Books & Products</span>
                  </button>

                  <button 
                    onClick={() => { setActiveNav('settings'); setProfileDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] flex items-center gap-2 font-mono transition-colors"
                  >
                    <User className="w-4 h-4 text-[var(--brand-gold-start)]" />
                    <span>Account Settings</span>
                  </button>

                  <button 
                    onClick={onNavigateHome}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] flex items-center gap-2 font-mono transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[var(--brand-gold-start)]" />
                    <span>Return to Landing View</span>
                  </button>

                  <div className="pt-2 mt-1 border-t border-[var(--border-primary)]">
                    <button 
                      onClick={onNavigateHome}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs text-[var(--color-error)] hover:bg-[var(--color-error)]/10 flex items-center gap-2 font-mono transition-colors font-bold"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </header>

        {/* MAIN BODY DASHBOARD CONTENT */}
        <main className="p-4 sm:p-8 space-y-8 flex-1">
          
          {/* ========================================================================= */}
          {/* VIEW 1: DASHBOARD VIEWS (Overview, Upcoming Exams, Exam History, Attendance, Attendance QR, Payments, Subject Results) */}
          {/* ========================================================================= */}
          {activeNav === 'dashboard' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              
              {/* SUB-VIEW 1.1: OVERVIEW */}
              {dashboardSubTab === 'overview' && (
                <div className="space-y-8">
                  {/* Welcome Hero Banner */}
                  <div className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-[var(--border-brand)] bg-gradient-to-r from-[var(--brand-gold-start)]/15 via-[var(--brand-gold-mid)]/10 to-transparent overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--brand-gold-mid)]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] mb-3 font-semibold">
                          <Sparkles className="w-3.5 h-3.5" /> ACADEMY STUDENT DASHBOARD
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                          Welcome back, <span className="text-gradient-cyan">{studentName}</span>! 👋
                        </h1>
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 font-mono">
                          Stream: <span className="font-bold text-[var(--text-primary)]">{stream}</span> • Academic Term 2026
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setDashboardSubTab('upcoming-exams')}
                          className="px-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-center font-mono shadow-sm hover:border-[var(--border-brand)] transition-all"
                        >
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block">Next Term Exam</span>
                          <span className="text-base font-bold text-[var(--brand-gold-start)]">Aug 12, 2026</span>
                        </button>

                        <button
                          onClick={() => setDashboardSubTab('subject-results')}
                          className="px-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-center font-mono shadow-sm hover:border-[var(--border-brand)] transition-all"
                        >
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block">Overall Average</span>
                          <span className="text-base font-bold text-[var(--brand-gold-mid)]">93.2%</span>
                        </button>

                        <button
                          onClick={() => setDashboardSubTab('attendance')}
                          className="px-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-center font-mono shadow-sm hover:border-[var(--color-success)] transition-all"
                        >
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block">Attendance Rate</span>
                          <span className="text-base font-bold text-[var(--color-success)]">98.5%</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Enrolled Courses Grid */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[var(--brand-gold-start)]" />
                        <span>Enrolled Core Subjects</span>
                      </h2>
                      <span className="text-xs font-mono text-[var(--text-subtle)]">
                        4 Active Subjects
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {subjectsData.map((sub) => {
                        const IconComp = sub.icon;
                        return (
                          <div 
                            key={sub.id}
                            className="rounded-2xl glass-panel p-5 border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--border-brand)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center text-[var(--brand-gold-start)]">
                                  <IconComp className="w-5 h-5" />
                                </div>
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[var(--bg-pill)] text-[var(--text-secondary)] font-semibold">
                                  {sub.progress}% Done
                                </span>
                              </div>

                              <h3 
                                onClick={() => setActiveNav(sub.id as any)}
                                className="text-base font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--brand-gold-start)] transition-colors cursor-pointer"
                              >
                                {sub.name}
                              </h3>
                              <p className="text-xs font-mono text-[var(--text-secondary)] mb-3">
                                {sub.teacher}
                              </p>

                              <div className="w-full h-1.5 rounded-full bg-[var(--bg-pill)] mb-4 overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] rounded-full"
                                  style={{ width: `${sub.progress}%` }}
                                />
                              </div>
                            </div>

                            <div className="pt-3 border-t border-[var(--border-primary)] flex items-center justify-between text-xs font-mono">
                              <button 
                                onClick={() => {
                                  const subjKey = sub.id === 'maths' ? 'Combined Maths' : sub.id === 'physics' ? 'Physics' : sub.id === 'chemistry' ? 'Chemistry' : 'Biology';
                                  setSelectedResultSubject(subjKey);
                                  setDashboardSubTab('subject-results');
                                }}
                                className="text-xs text-[var(--brand-gold-start)] hover:underline font-semibold flex items-center gap-1 font-bold"
                              >
                                <BarChart2 className="w-3.5 h-3.5" />
                                <span>Exam Results</span>
                              </button>

                              <button 
                                onClick={() => setActiveNav(sub.id as any)}
                                className="text-[var(--brand-gold-start)] flex items-center gap-1 font-extrabold hover:opacity-80"
                              >
                                <span>Portal</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timetable & AI Launcher Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 rounded-2xl glass-panel p-6 border border-[var(--border-primary)] bg-[var(--bg-card)]">
                      <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[var(--brand-gold-start)]" />
                        <span>Upcoming Live Timetable</span>
                      </h3>

                      <div className="space-y-3">
                        {subjectsData.map((s) => (
                          <div key={s.id} className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[var(--bg-pill)] flex items-center justify-center text-[var(--brand-gold-start)]">
                                <Video className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-[var(--text-primary)]">{s.name}</div>
                                <div className="text-[11px] font-mono text-[var(--text-secondary)]">{s.nextClass}</div>
                              </div>
                            </div>
                            <button className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-mono font-extrabold hover:opacity-90 transition-opacity">
                              Join Stream
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 rounded-2xl glass-panel p-6 border border-[var(--border-brand)] bg-gradient-to-br from-[var(--brand-gold-start)]/15 via-[var(--brand-gold-mid)]/10 to-transparent flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold">
                            Special Learning Materials
                          </span>
                          <ShoppingBag className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                        </div>
                        <h3 className="text-lg font-extrabold text-[var(--text-primary)] mb-2">
                          Exam Prep & Practice Books
                        </h3>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono mb-4">
                          Get author-written Combined Maths, Physics, Chemistry, and Biology guidebooks delivered directly to your portal.
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveNav('products')}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-all font-mono"
                      >
                        <span>Browse Books & Products</span>
                        <ArrowRight className="w-4 h-4 text-[var(--btn-primary-text)]" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 1.2: UPCOMING EXAMS SECTION */}
              {dashboardSubTab === 'upcoming-exams' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setDashboardSubTab('overview')}
                        className="p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                          <Calendar className="w-6 h-6 text-[var(--brand-gold-start)]" />
                          <span>Upcoming Examination Schedule</span>
                        </h1>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">Official Academy Term & Mock Examinations 2026</p>
                      </div>
                    </div>

                    <button
                      onClick={() => alert('📥 Downloading Examination Admission Slip PDF...')}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                    >
                      <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                      <span>Download Admission Slip</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
                    <div className="rounded-2xl glass-panel p-6 border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)]">
                            In 18 Days
                          </span>
                          <Atom className="w-5 h-5 text-[var(--brand-gold-start)]" />
                        </div>
                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Combined Mathematics Term Test</h3>
                        <p className="text-xs text-[var(--text-secondary)] mb-4">Pure Mathematics Integration & Mechanics Paper</p>
                        <div className="space-y-1.5 text-xs text-[var(--text-primary)]">
                          <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> Aug 12, 2026 (09:00 AM)</div>
                          <div className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> Hatton Main Auditorium</div>
                        </div>
                      </div>
                      <button onClick={() => alert('Viewing Combined Maths Exam Syllabus...')} className="mt-6 w-full py-2 rounded-xl bg-[var(--bg-pill)] text-xs font-bold hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)]">
                        View Exam Syllabus
                      </button>
                    </div>

                    <div className="rounded-2xl glass-panel p-6 border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)]">
                            In 24 Days
                          </span>
                          <Cpu className="w-5 h-5 text-[var(--brand-gold-start)]" />
                        </div>
                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Physics Electromagnetism Mock Test</h3>
                        <p className="text-xs text-[var(--text-secondary)] mb-4">Field Theory & Circuit Structured Essays</p>
                        <div className="space-y-1.5 text-xs text-[var(--text-primary)]">
                          <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> Aug 18, 2026 (01:30 PM)</div>
                          <div className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> Physics Auditorium</div>
                        </div>
                      </div>
                      <button onClick={() => alert('Viewing Physics Exam Syllabus...')} className="mt-6 w-full py-2 rounded-xl bg-[var(--bg-pill)] text-xs font-bold hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)]">
                        View Exam Syllabus
                      </button>
                    </div>

                    <div className="rounded-2xl glass-panel p-6 border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)]">
                            In 28 Days
                          </span>
                          <Sparkles className="w-5 h-5 text-[var(--brand-gold-mid)]" />
                        </div>
                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Chemistry Organic Reaction Speed Quiz</h3>
                        <p className="text-xs text-[var(--text-secondary)] mb-4">Reaction Pathways & Synthesis Speed Test</p>
                        <div className="space-y-1.5 text-xs text-[var(--text-primary)]">
                          <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> Aug 22, 2026 (04:00 PM)</div>
                          <div className="flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> Online Exam Portal</div>
                        </div>
                      </div>
                      <button onClick={() => alert('Viewing Chemistry Exam Syllabus...')} className="mt-6 w-full py-2 rounded-xl bg-[var(--bg-pill)] text-xs font-bold hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)]">
                        View Exam Syllabus
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 1.3: EXAM HISTORY SECTION */}
              {dashboardSubTab === 'exam-history' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setDashboardSubTab('overview')}
                        className="p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                          <Award className="w-6 h-6 text-[var(--brand-gold-start)]" />
                          <span>Examination Performance History</span>
                        </h1>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">Past Academic Grades & Island Distinction Rankings</p>
                      </div>
                    </div>

                    <button
                      onClick={() => alert('📄 Exporting Official Transcript PDF...')}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                    >
                      <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                      <span>Export Full Transcript</span>
                    </button>
                  </div>

                  <div className="space-y-4 font-mono">
                    <div className="p-5 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="px-2.5 py-0.5 rounded text-[10px] bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold mb-1 inline-block">Term Exam</span>
                          <h3 className="text-base font-bold text-[var(--text-primary)]">2026 Term 1 Model Examination</h3>
                          <p className="text-xs text-[var(--text-secondary)]">Combined Maths, Physics & Chemistry Aggregate</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-xl font-extrabold text-[var(--brand-gold-start)]">94 / 100</span>
                            <span className="block text-[10px] text-[var(--text-subtle)]">Percentile: 99.4%</span>
                          </div>
                          <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30">
                            Grade A* (Island #14)
                          </span>
                        </div>
                      </div>

                      {/* TOPPER SPOTLIGHT BOX */}
                      <div className="pt-3 border-t border-[var(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--bg-pill)] p-3 rounded-xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-sm overflow-hidden">
                            <img src="/assets/teachers/maths.jpg" alt="Topper" className="w-full h-full object-cover rounded-full" />
                          </div>
                          <div className="text-xs">
                            <span className="font-bold text-[var(--text-primary)] flex items-center gap-1">
                              <Trophy className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> K. Thivakar (Island #1 - 99/100)
                            </span>
                            <span className="text-[10px] text-[var(--text-secondary)]">Batch Top Model Answer Paper</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <button 
                            onClick={() => alert('📄 Downloading Topper Model Answer Paper PDF for "2026 Term 1 Model Examination"...')}
                            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center justify-center gap-1.5"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>Topper Paper PDF</span>
                          </button>
                          
                          <button 
                            onClick={() => alert('📥 Downloading My Evaluated Paper PDF for "2026 Term 1 Model Examination"...')}
                            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center justify-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>My Paper PDF</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="px-2.5 py-0.5 rounded text-[10px] bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold mb-1 inline-block">Grand Mock</span>
                          <h3 className="text-base font-bold text-[var(--text-primary)]">2025 Grand Mock Exam II</h3>
                          <p className="text-xs text-[var(--text-secondary)]">Island-wide Model Paper Evaluation</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-xl font-extrabold text-[var(--brand-gold-start)]">91 / 100</span>
                            <span className="block text-[10px] text-[var(--text-subtle)]">Percentile: 98.8%</span>
                          </div>
                          <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30">
                            Grade A* (Island #18)
                          </span>
                        </div>
                      </div>

                      {/* TOPPER SPOTLIGHT BOX */}
                      <div className="pt-3 border-t border-[var(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--bg-pill)] p-3 rounded-xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-sm overflow-hidden">
                            <img src="/assets/teachers/physics.jpg" alt="Topper" className="w-full h-full object-cover rounded-full" />
                          </div>
                          <div className="text-xs">
                            <span className="font-bold text-[var(--text-primary)] flex items-center gap-1">
                              <Trophy className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> S. Archana (Island #1 - 98/100)
                            </span>
                            <span className="text-[10px] text-[var(--text-secondary)]">Batch Top Model Answer Paper</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <button 
                            onClick={() => alert('📄 Downloading Topper Model Answer Paper PDF for "2025 Grand Mock Exam II"...')}
                            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center justify-center gap-1.5"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>Topper Paper PDF</span>
                          </button>
                          
                          <button 
                            onClick={() => alert('📥 Downloading My Evaluated Paper PDF for "2025 Grand Mock Exam II"...')}
                            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center justify-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>My Paper PDF</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="px-2.5 py-0.5 rounded text-[10px] bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold mb-1 inline-block">Subject Quiz</span>
                          <h3 className="text-base font-bold text-[var(--text-primary)]">Calculus Speed Test</h3>
                          <p className="text-xs text-[var(--text-secondary)]">Integration by Parts & Substitution Methods</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="text-xl font-extrabold text-[var(--brand-gold-start)]">96 / 100</span>
                            <span className="block text-[10px] text-[var(--text-subtle)]">Accuracy: 100%</span>
                          </div>
                          <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30">
                            Grade A*
                          </span>
                        </div>
                      </div>

                      {/* TOPPER SPOTLIGHT BOX */}
                      <div className="pt-3 border-t border-[var(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--bg-pill)] p-3 rounded-xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-sm overflow-hidden">
                            <img src="/assets/teachers/maths.jpg" alt="Topper" className="w-full h-full object-cover rounded-full" />
                          </div>
                          <div className="text-xs">
                            <span className="font-bold text-[var(--text-primary)] flex items-center gap-1">
                              <Trophy className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" /> V. Danushan (Island #1 - 100/100)
                            </span>
                            <span className="text-[10px] text-[var(--text-secondary)]">Perfect Score Model Paper</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <button 
                            onClick={() => alert('📄 Downloading Topper Model Answer Paper PDF for "Calculus Speed Test"...')}
                            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center justify-center gap-1.5"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>Topper Paper PDF</span>
                          </button>
                          
                          <button 
                            onClick={() => alert('📥 Downloading My Evaluated Paper PDF for "Calculus Speed Test"...')}
                            className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center justify-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>My Paper PDF</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================================= */}
                  {/* VERY LAST SECTION ON EXAM HISTORY: OFFICIAL MARKING SCHEMES & PDF DOWNLOADS */}
                  {/* ========================================================================= */}
                  <div className="pt-8 border-t border-[var(--border-primary)] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                          <FileCheck className="w-5 h-5 text-[var(--brand-gold-mid)]" />
                          <span>Official Exam Paper Marking Schemes & Answer Keys</span>
                        </h2>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">
                          Download official G.C.E. A/L teacher marking schemes, point distribution breakdowns, and official marking guidelines for every past examination.
                        </p>
                      </div>

                      <button
                        onClick={() => alert('📦 Downloading Full Archive: All 2025-2026 Official Marking Schemes (ZIP)...')}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-bold flex items-center gap-2 shadow-md hover:opacity-90 shrink-0"
                      >
                        <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                        <span>Download All Schemes (ZIP)</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                      {/* Scheme Card 1: Combined Maths */}
                      <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center text-[var(--brand-gold-start)] shrink-0">
                            <Atom className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-bold text-[var(--text-primary)] block">Combined Maths 2026 Term 1 Marking Scheme PDF</span>
                            <span className="text-[11px] text-[var(--text-secondary)]">Author: Eng R. Jeyakumar • Official Answer Guide</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => alert('📄 Downloading "Combined Maths 2026 Term 1 Marking Scheme PDF"...')}
                          className="px-3 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-all"
                        >
                          <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                          <span>Scheme PDF</span>
                        </button>
                      </div>

                      {/* Scheme Card 2: Physics */}
                      <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center text-[var(--brand-gold-mid)] shrink-0">
                            <Cpu className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-bold text-[var(--text-primary)] block">Physics Electromagnetism Official Scheme PDF</span>
                            <span className="text-[11px] text-[var(--text-secondary)]">Author: Eng S. Balamurugan • Vector & Field Key</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => alert('📄 Downloading "Physics Electromagnetism Official Scheme PDF"...')}
                          className="px-3 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-all"
                        >
                          <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                          <span>Scheme PDF</span>
                        </button>
                      </div>

                      {/* Scheme Card 3: Chemistry */}
                      <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center text-[var(--brand-gold-start)] shrink-0">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-bold text-[var(--text-primary)] block">Chemistry Organic Reactions Marking Scheme PDF</span>
                            <span className="text-[11px] text-[var(--text-secondary)]">Author: Sivanesan Sir • Reaction Mechanism Guide</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => alert('📄 Downloading "Chemistry Organic Reactions Marking Scheme PDF"...')}
                          className="px-3 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-all"
                        >
                          <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                          <span>Scheme PDF</span>
                        </button>
                      </div>

                      {/* Scheme Card 4: Biology */}
                      <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-center text-[var(--brand-gold-mid)] shrink-0">
                            <Dna className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-bold text-[var(--text-primary)] block">Biology Genetics & Molecular Marking Scheme PDF</span>
                            <span className="text-[11px] text-[var(--text-secondary)]">Author: K. Umamaheswaran • Essay Point Scheme</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => alert('📄 Downloading "Biology Genetics & Molecular Marking Scheme PDF"...')}
                          className="px-3 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-all"
                        >
                          <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                          <span>Scheme PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 1.4: DETAILED SUBJECT EXAMINATION RESULTS (Exam 1, Exam 2, Exam 3, Exam 4) */}
              {dashboardSubTab === 'subject-results' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setDashboardSubTab('overview')}
                        className="p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                          <BarChart2 className="w-6 h-6 text-[var(--brand-gold-mid)]" />
                          <span>Detailed Subject Examination Results</span>
                        </h1>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">Full Exam-by-Exam Mark Sheets for Combined Maths, Physics, Chemistry & Biology</p>
                      </div>
                    </div>

                    {/* Subject Filter Tabs */}
                    <div className="flex items-center gap-1.5 p-1 rounded-full bg-[var(--bg-pill)] border border-[var(--border-primary)] flex-wrap">
                      {(['All', 'Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((subj) => (
                        <button
                          key={subj}
                          onClick={() => setSelectedResultSubject(subj)}
                          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                            selectedResultSubject === subj
                              ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold shadow-md'
                              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {subj}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono">
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Total Exams Evaluated</span>
                      <span className="text-2xl font-extrabold text-[var(--text-primary)]">16 Exams</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Mean Score</span>
                      <span className="text-2xl font-extrabold text-[var(--brand-gold-start)]">93.2%</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Highest Score</span>
                      <span className="text-2xl font-extrabold text-[var(--color-success)]">98 / 100</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">A* Distinction Count</span>
                      <span className="text-2xl font-extrabold text-[var(--color-warning)]">14 Exams</span>
                    </div>
                  </div>

                  {/* Exam-by-Exam Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
                    {filteredExamResults.map((exam) => (
                      <div 
                        key={exam.id}
                        className="p-6 rounded-3xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between hover:border-[var(--border-brand)] transition-all shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)]">
                              {exam.subject}
                            </span>
                            <span className="text-xs text-[var(--text-subtle)]">{exam.date}</span>
                          </div>

                          <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 leading-snug">
                            {exam.examTitle}
                          </h3>
                          <p className="text-xs text-[var(--text-secondary)] mb-4">
                            Faculty Evaluator: {exam.teacher}
                          </p>

                          <div className="p-3.5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-center justify-between mb-4">
                            <div>
                              <span className="text-[10px] text-[var(--text-subtle)] uppercase block">Score Achieved</span>
                              <span className="text-2xl font-extrabold text-[var(--text-primary)]">{exam.score} <span className="text-xs text-[var(--text-subtle)]">/ {exam.maxScore}</span></span>
                            </div>
                            <div className="text-right">
                              <span className="px-3 py-1 rounded-xl text-xs font-bold bg-[var(--color-success)]/20 text-[var(--color-success)] border border-[var(--color-success)]/30">
                                Grade {exam.grade}
                              </span>
                              <span className="block text-[11px] text-[var(--brand-gold-start)] font-bold mt-1">{exam.rank}</span>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] mb-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-sm overflow-hidden shrink-0">
                                <img src={exam.topperAvatar} alt={exam.topperName} className="w-full h-full object-cover rounded-full" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1">
                                  <Trophy className="w-3.5 h-3.5 text-[var(--color-warning)]" /> {exam.topperName}
                                </span>
                                <span className="text-[10px] text-[var(--brand-gold-start)] font-mono block">
                                  {exam.topperRank} • Score: <span className="font-bold text-[var(--color-success)]">{exam.topperScore}</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-brand)] text-xs text-[var(--text-secondary)]">
                            <span className="font-bold text-[var(--brand-gold-start)]">Faculty Remarks: </span>
                            "{exam.remarks}"
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[var(--border-primary)] flex items-center justify-between gap-2 text-xs flex-wrap">
                          <button 
                            onClick={() => alert(`📄 Downloading Island #1 Topper Model Answer Paper PDF for "${exam.examTitle}"...`)}
                            className="px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center gap-1.5"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>Topper Paper PDF</span>
                          </button>

                          <button 
                            onClick={() => alert(`📥 Downloading Evaluated Paper PDF for "${exam.examTitle}"...`)}
                            className="px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono text-[11px] font-bold border border-[var(--border-brand)] hover:bg-[var(--btn-hover-overlay)] flex items-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>My Paper PDF</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SUB-VIEW 1.5: ATTENDANCE SECTION */}
              {dashboardSubTab === 'attendance' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setDashboardSubTab('overview')}
                        className="p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                          <CheckCircle2 className="w-6 h-6 text-[var(--color-success)]" />
                          <span>Attendance Record & Gate Logs</span>
                        </h1>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">Automated Smart Campus & Live Stream Checks</p>
                      </div>
                    </div>

                    {/* ATTENDANCE HISTORY BUTTON */}
                    <button
                      onClick={() => setShowAttendanceHistoryModal(true)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                    >
                      <Calendar className="w-4 h-4 text-[var(--btn-primary-text)]" />
                      <span>Attendance History</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Monthly Rate</span>
                      <span className="text-2xl font-extrabold text-[var(--color-success)]">98.5%</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Total Sessions</span>
                      <span className="text-2xl font-extrabold text-[var(--text-primary)]">35 Sessions</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Attended</span>
                      <span className="text-2xl font-extrabold text-[var(--brand-gold-start)]">34 Sessions</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                      <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Absences</span>
                      <span className="text-2xl font-extrabold text-[var(--color-warning)]">1 Session</span>
                    </div>
                  </div>

                  <div className="rounded-2xl glass-panel p-6 border border-[var(--border-primary)] bg-[var(--bg-card)] space-y-3 font-mono text-xs">
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">Recent Campus Gate & Stream Logs</h3>
                    
                    <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-center justify-between">
                      <div>
                        <span className="text-[var(--text-primary)] font-bold block">Combined Maths Pure Lecture</span>
                        <span className="text-[11px] text-[var(--text-secondary)]">Hatton Main Auditorium • Gate 01</span>
                      </div>
                      <span className="text-[var(--color-success)] font-bold bg-[var(--color-success)]/10 px-3 py-1 rounded-full border border-[var(--color-success)]/20">
                        ● Gate Checked 08:52 AM
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-center justify-between">
                      <div>
                        <span className="text-[var(--text-primary)] font-bold block">Physics Field Theory Live Stream</span>
                        <span className="text-[11px] text-[var(--text-secondary)]">Online Portal Stream Pass</span>
                      </div>
                      <span className="text-[var(--color-success)] font-bold bg-[var(--color-success)]/10 px-3 py-1 rounded-full border border-[var(--color-success)]/20">
                        ● Stream Synced 01:28 PM
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-center justify-between">
                      <div>
                        <span className="text-[var(--text-primary)] font-bold block">Chemistry Organic Reactions Practical</span>
                        <span className="text-[11px] text-[var(--text-secondary)]">Hatton Chemistry Lab 02</span>
                      </div>
                      <span className="text-[var(--color-success)] font-bold bg-[var(--color-success)]/10 px-3 py-1 rounded-full border border-[var(--color-success)]/20">
                        ● Gate Checked 03:58 PM
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 1.6: ATTENDANCE QR CODE SECTION */}
              {dashboardSubTab === 'attendance-qr' && (
                <div className="space-y-6 text-center max-w-xl mx-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setDashboardSubTab('overview')}
                        className="p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                        <QrCode className="w-6 h-6 text-[var(--brand-gold-start)]" />
                        <span>Digital Student QR Pass</span>
                      </h1>
                    </div>
                  </div>

                  {/* Interactive QR Code Pass Card */}
                  <div className="p-8 rounded-3xl border border-[var(--border-brand)] bg-[var(--bg-card)] shadow-2xl flex flex-col items-center">
                    <div className="w-56 h-56 bg-white p-4 rounded-2xl border-2 border-[var(--border-brand)] flex items-center justify-center shadow-inner mb-6">
                      {/* Generated SVG QR Pattern */}
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M10 10 h30 v30 h-30 z M15 15 h20 v20 h-20 z M60 10 h30 v30 h-30 z M65 15 h20 v20 h-20 z M10 60 h30 v30 h-30 z M15 65 h20 v20 h-20 z M45 10 h10 v10 h-10 z M45 25 h10 v10 h-10 z M45 45 h10 v10 h-10 z M10 45 h10 v10 h-10 z M25 45 h10 v10 h-10 z M60 45 h10 v10 h-10 z M75 45 h15 v10 h-15 z M45 60 h10 v10 h-10 z M60 60 h10 v10 h-10 z M75 60 h15 v30 h-15 z M45 75 h10 v15 h-10 z M60 75 h10 v15 h-10 z" fill="#05060A" />
                      </svg>
                    </div>

                    <div className="text-center font-mono">
                      <div className="text-lg font-extrabold text-[var(--text-primary)]">{studentName}</div>
                      <div className="text-xs text-[var(--brand-gold-start)] font-bold mt-1">ID: STU-2026-8981-X</div>
                      <div className="text-xs text-[var(--text-secondary)] mt-1">{stream} • Hatton Campus Pass</div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={() => alert('📱 Saved Digital QR Pass to Device Wallet!')}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                    >
                      <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                      <span>Save QR Pass to Wallet</span>
                    </button>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 1.7: PAYMENTS SECTION */}
              {dashboardSubTab === 'payments' && (
                <div className="space-y-6">
                  {/* Header with Nav Back & Primary Payment Online Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-primary)]">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setDashboardSubTab('overview')}
                        className="p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                          <CreditCard className="w-6 h-6 text-[var(--color-success)]" />
                          <span>Tuition Fee Payments & History</span>
                        </h1>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">Manage Monthly Class Fees, Track Payment History & Download Receipts</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setPayStep(1);
                          setShowPayOnlineModal(true);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                      >
                        <CreditCard className="w-4 h-4 text-[var(--btn-primary-text)]" />
                        <span>Pay Online Now</span>
                      </button>
                    </div>
                  </div>

                  {/* Sub-Tab Navigation Bar: Current Invoices vs Monthly Payment History */}
                  <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] w-fit font-mono text-xs">
                    <button
                      onClick={() => setActivePaymentTab('current')}
                      className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
                        activePaymentTab === 'current'
                          ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-brand)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-[var(--color-success)]" />
                      <span>Current Invoices & Pay</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-[var(--bg-pill)] text-[var(--brand-gold-mid)] font-extrabold border border-[var(--border-brand)]">
                        1 Due
                      </span>
                    </button>

                    <button
                      onClick={() => setActivePaymentTab('history')}
                      className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
                        activePaymentTab === 'history'
                          ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-brand)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <History className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                      <span>Monthly Payment History</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-extrabold border border-[var(--border-brand)]">
                        {paymentHistoryData.length} Paid
                      </span>
                    </button>
                  </div>

                  {/* TAB 1: CURRENT INVOICES VIEW */}
                  {activePaymentTab === 'current' && (
                    <div className="space-y-6">
                      {/* Payment Summary Stats */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono">
                        <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Total Monthly Fee</span>
                          <span className="text-2xl font-extrabold text-[var(--text-primary)]">LKR 12,000</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Fees Paid (August)</span>
                          <span className="text-2xl font-extrabold text-[var(--color-success)]">LKR 9,000</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Pending Balance</span>
                          <span className="text-2xl font-extrabold text-[var(--color-warning)]">LKR 3,000</span>
                        </div>
                      </div>

                      {/* Banner to Switch to Payment History */}
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-[var(--brand-gold-start)]/10 via-[var(--brand-gold-mid)]/10 to-transparent border border-[var(--border-brand)] flex items-center justify-between gap-4 font-mono">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--brand-gold-start)]">
                            <History className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[var(--text-primary)] block">Looking for past months' payment details?</span>
                            <span className="text-[11px] text-[var(--text-secondary)]">View date paid, exact amounts, and downloadable receipts for all previous months.</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setActivePaymentTab('history')}
                          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
                        >
                          <span>View Monthly History</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                        </button>
                      </div>

                      {/* Class Fees Breakdown List */}
                      <div className="space-y-4 font-mono">
                        <h3 className="text-base font-bold text-[var(--text-primary)]">Monthly Subject Class Invoices (August 2026)</h3>

                        <div className="p-4.5 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-sm font-bold text-[var(--text-primary)] block">Combined Mathematics — Eng R. Jeyakumar</span>
                            <span className="text-xs text-[var(--text-secondary)] font-mono font-medium">Invoice #INV-2026-081 • Paid on Aug 05, 2026 via Bank Slip</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-[var(--text-primary)]">LKR 3,000</span>
                            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30">
                              Paid
                            </span>
                          </div>
                        </div>

                        <div className="p-4.5 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-sm font-bold text-[var(--text-primary)] block">Advanced Physics — Eng S. Balamurugan</span>
                            <span className="text-xs text-[var(--text-secondary)] font-mono font-medium">Invoice #INV-2026-082 • Paid on Aug 06, 2026 via Visa Card</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-[var(--text-primary)]">LKR 3,000</span>
                            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30">
                              Paid
                            </span>
                          </div>
                        </div>

                        <div className="p-4.5 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-sm font-bold text-[var(--text-primary)] block">Advanced Chemistry — Sivanesan Sir</span>
                            <span className="text-xs text-[var(--text-secondary)] font-mono font-medium">Invoice #INV-2026-083 • Paid on Aug 07, 2026 via Online Gateway</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-[var(--text-primary)]">LKR 3,000</span>
                            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30">
                              Paid
                            </span>
                          </div>
                        </div>

                        <div className="p-4.5 rounded-2xl glass-panel border border-[var(--border-brand)] bg-[var(--bg-pill)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-sm font-bold text-[var(--text-primary)] block">Biological Sciences — K. Umamaheswaran</span>
                            <span className="text-xs text-[var(--color-warning)] font-mono font-semibold">Invoice #INV-2026-084 • Payment Due</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-[var(--brand-gold-start)]">LKR 3,000</span>
                            <button
                              onClick={() => {
                                setPaySelectedSubjects(['Biology']);
                                setPaySelectedMonths(['August 2026']);
                                setPayStep(1);
                                setShowPayOnlineModal(true);
                              }}
                              className="px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] shadow-md hover:scale-105 transition-all"
                            >
                              Pay LKR 3,000
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: MONTH-BY-MONTH PAYMENT HISTORY PAGE */}
                  {activePaymentTab === 'history' && (
                    <div className="space-y-6 font-mono">
                      
                      {/* Overall History Stats Header Cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Total Lifetime Paid</span>
                          <span className="text-xl font-extrabold text-[var(--text-primary)]">
                            LKR {paymentHistoryData.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">This Month Paid</span>
                          <span className="text-xl font-extrabold text-[var(--color-success)]">
                            LKR {paymentHistoryData.filter(p => p.month === 'August 2026').reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Verified Receipts</span>
                          <span className="text-xl font-extrabold text-[var(--brand-gold-start)]">
                            {paymentHistoryData.length} Files
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
                          <span className="text-[10px] text-[var(--text-subtle)] uppercase block mb-1">Compliance</span>
                          <span className="text-xl font-extrabold text-[var(--color-warning)]">
                            100% On-Time
                          </span>
                        </div>
                      </div>

                      {/* Filter & Search Toolbar */}
                      <div className="p-4 rounded-2xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          {/* Search Input */}
                          <div className="relative flex-1">
                            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[var(--text-subtle)]" />
                            <input
                              type="text"
                              value={paymentSearchQuery}
                              onChange={(e) => setPaymentSearchQuery(e.target.value)}
                              placeholder="Search by subject, invoice #, date, or method..."
                              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)]"
                            />
                            {paymentSearchQuery && (
                              <button 
                                onClick={() => setPaymentSearchQuery('')}
                                className="absolute right-3 top-2.5 text-[var(--text-subtle)] hover:text-[var(--text-primary)]"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Quick Export Button */}
                          <button
                            onClick={() => {
                              const csvHeader = "Month,Date,Time,Subject,Teacher,InvoiceNo,TransactionRef,Amount,Method,Status\n";
                              const csvRows = paymentHistoryData.map(p => 
                                `"${p.month}","${p.date}","${p.time}","${p.subject}","${p.teacher}","${p.invoiceNo}","${p.transactionRef}",${p.amount},"${p.method}","${p.status}"`
                              ).join("\n");
                              const blob = new Blob([csvHeader + csvRows], { type: 'text/csv' });
                              const url = URL.createObjectURL(blob);
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = `Payment_History_Report_${studentName.replace(/\s+/g, '_')}.csv`;
                              a.click();
                              alert('📥 Downloaded complete monthly payment history CSV report!');
                            }}
                            className="px-3.5 py-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] border border-[var(--border-primary)] text-xs font-bold flex items-center gap-2 hover:bg-[var(--btn-hover-overlay)] transition-opacity shrink-0"
                          >
                            <FileDown className="w-4 h-4" />
                            <span>Export CSV Report</span>
                          </button>
                        </div>

                        {/* Month Filter Tabs */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                          <span className="text-[11px] text-[var(--text-subtle)] mr-1 flex items-center gap-1 shrink-0">
                            <Filter className="w-3 h-3" />
                            <span>Filter Month:</span>
                          </span>
                          {['All', 'August 2026', 'July 2026', 'June 2026', 'May 2026', 'April 2026', 'March 2026'].map(monthName => (
                            <button
                              key={monthName}
                              onClick={() => setPaymentHistoryMonthFilter(monthName)}
                              className={`px-3 py-1 rounded-xl text-xs whitespace-nowrap transition-all ${
                                paymentHistoryMonthFilter === monthName
                                  ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-bold shadow-sm'
                                  : 'bg-[var(--bg-pill)] text-[var(--text-secondary)] hover:bg-[var(--btn-hover-overlay)]'
                              }`}
                            >
                              {monthName}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Grouped Month-by-Month Detailed Breakdown */}
                      <div className="space-y-6">
                        {['August 2026', 'July 2026', 'June 2026', 'May 2026', 'April 2026', 'March 2026']
                          .filter(month => paymentHistoryMonthFilter === 'All' || paymentHistoryMonthFilter === month)
                          .map(month => {
                            const monthRecords = paymentHistoryData.filter(record => {
                              const matchesMonth = record.month === month;
                              const query = paymentSearchQuery.toLowerCase();
                              const matchesSearch = !query || 
                                record.subject.toLowerCase().includes(query) ||
                                record.invoiceNo.toLowerCase().includes(query) ||
                                record.transactionRef.toLowerCase().includes(query) ||
                                record.date.toLowerCase().includes(query) ||
                                record.method.toLowerCase().includes(query) ||
                                record.teacher.toLowerCase().includes(query);
                              return matchesMonth && matchesSearch;
                            });

                            if (monthRecords.length === 0 && paymentSearchQuery) return null;

                            const monthTotalPaid = monthRecords.reduce((sum, r) => sum + r.amount, 0);

                            return (
                              <div key={month} className="rounded-2xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden shadow-sm">
                                {/* Month Header Bar */}
                                <div className="px-5 py-3.5 bg-[var(--bg-pill)] border-b border-[var(--border-primary)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <div className="flex items-center gap-2.5">
                                    <Calendar className="w-4.5 h-4.5 text-[var(--brand-gold-start)]" />
                                    <h3 className="text-base font-extrabold text-[var(--text-primary)]">{month}</h3>
                                    <span className="px-3 py-1 rounded-full text-xs bg-[var(--color-success)]/15 text-[var(--color-success)] font-bold border border-[var(--color-success)]/30">
                                      {monthRecords.length} Transactions Settled
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-3 text-sm">
                                    <span className="text-[var(--text-subtle)]">Total Paid in {month}:</span>
                                    <span className="text-base font-extrabold text-[var(--color-success)]">
                                      LKR {monthTotalPaid.toLocaleString()}
                                    </span>
                                  </div>
                                </div>

                                {/* Month Payment Records List */}
                                <div className="divide-y divide-[var(--border-primary)]">
                                  {monthRecords.length > 0 ? (
                                    monthRecords.map(record => (
                                      <div 
                                        key={record.id}
                                        className="p-4.5 hover:bg-[var(--bg-pill)] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                                      >
                                        {/* Left Side: Date, Time & Subject */}
                                        <div className="flex items-start gap-3.5">
                                          <div className="p-2.5 rounded-xl bg-[var(--color-success)]/10 text-[var(--color-success)] shrink-0 mt-0.5">
                                            <Receipt className="w-5 h-5" />
                                          </div>

                                          <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                              <span className="text-sm font-bold text-[var(--text-primary)]">
                                                {record.subject}
                                              </span>
                                              <span className="text-xs text-[var(--text-secondary)] font-medium">
                                                — {record.teacher}
                                              </span>
                                            </div>

                                            <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mt-1.5 flex-wrap">
                                              <span className="flex items-center gap-1 font-semibold text-[var(--text-primary)]">
                                                <Clock className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" />
                                                <span>{record.date} at {record.time}</span>
                                              </span>
                                              <span>•</span>
                                              <span className="font-semibold">Invoice #{record.invoiceNo}</span>
                                              <span>•</span>
                                              <span className="px-2.5 py-0.5 rounded-md bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-semibold">
                                                {record.method}
                                              </span>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Right Side: Amount Paid & Receipt Action */}
                                        <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-[var(--border-primary)]">
                                          <div className="text-right">
                                            <div className="text-lg font-extrabold text-[var(--text-primary)]">
                                              LKR {record.amount.toLocaleString()}
                                            </div>
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30 flex items-center gap-1 w-fit ml-auto mt-0.5">
                                              <CheckCircle2 className="w-3.5 h-3.5" />
                                              <span>Paid & Verified</span>
                                            </span>
                                          </div>

                                          <button
                                            onClick={() => setSelectedReceiptModal(record)}
                                            className="px-3.5 py-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] text-xs font-bold flex items-center gap-1.5 transition-colors"
                                          >
                                            <FileText className="w-4 h-4 text-[var(--brand-gold-start)]" />
                                            <span>Receipt PDF</span>
                                          </button>
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="p-6 text-center text-xs text-[var(--text-subtle)]">
                                      No payment transactions matched your search query in {month}.
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                      </div>

                    </div>
                  )}

                </div>
              )}

            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* VIEW 2: SUBJECT SPECIFIC VIEWS (Combined Maths, Physics, Chemistry, Biology) */}
          {/* ========================================================================= */}
          {(activeNav === 'maths' || activeNav === 'physics' || activeNav === 'chemistry' || activeNav === 'biology') && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              
              {/* Subject Banner Header */}
              {(() => {
                const subjKey = activeNav === 'maths' ? 'Combined Maths' : activeNav === 'physics' ? 'Physics' : activeNav === 'chemistry' ? 'Chemistry' : 'Biology';
                const teacherObj = TEACHER_DATA[subjKey];
                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-[var(--border-primary)]">
                      <div>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-semibold mb-2 inline-block">
                          Core Faculty Module: {subjKey}
                        </span>
                        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">{subjKey} Portal</h1>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            setSelectedResultSubject(subjKey);
                            setActiveNav('dashboard');
                            setDashboardSubTab('subject-results');
                          }}
                          className="px-4 py-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] font-mono text-xs font-bold flex items-center gap-2 hover:bg-[var(--btn-hover-overlay)] transition-all"
                        >
                          <BarChart2 className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                          <span>View {subjKey} Exam Results</span>
                        </button>

                        <button
                          onClick={() => {
                            setSelectedProductFilter(subjKey);
                            setActiveNav('products');
                          }}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                        >
                          <ShoppingBag className="w-4 h-4 text-[var(--btn-primary-text)]" />
                          <span>View Special Books</span>
                        </button>
                      </div>
                    </div>

                    {/* ========================================================================= */}
                    {/* 4 NEW SUBJECT ACTION FEATURE BUTTONS: NOTES | WHITEBOARD | DIRECT MESSAGE | ACADEMY AI */}
                    {/* ========================================================================= */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[var(--border-primary)]">
                      <button
                        onClick={() => setSubjectFeatureTab('notes')}
                        className={`h-11 px-4 sm:px-5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
                          subjectFeatureTab === 'notes'
                            ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-lg scale-[1.02]'
                            : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-primary)]'
                        }`}
                      >
                        <FileText className="w-4 h-4 text-[var(--color-success)] shrink-0" />
                        <span>Lecture Notes</span>
                      </button>

                      <button
                        onClick={() => setSubjectFeatureTab('whiteboard')}
                        className={`h-11 px-4 sm:px-5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
                          subjectFeatureTab === 'whiteboard'
                            ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-lg scale-[1.02]'
                            : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-primary)]'
                        }`}
                      >
                        <PenTool className="w-4 h-4 text-[var(--color-warning)] shrink-0" />
                        <span>Teacher Whiteboard</span>
                      </button>

                      <button
                        onClick={() => setSubjectFeatureTab('direct-message')}
                        className={`h-11 px-4 sm:px-5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
                          subjectFeatureTab === 'direct-message'
                            ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-lg scale-[1.02]'
                            : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-primary)]'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4 text-[var(--brand-gold-mid)] shrink-0" />
                        <span>Direct Message</span>
                      </button>

                      <button
                        onClick={() => setSubjectFeatureTab('academy-ai')}
                        className={`h-11 px-4 sm:px-5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
                          subjectFeatureTab === 'academy-ai'
                            ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-lg scale-[1.02]'
                            : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-primary)]'
                        }`}
                      >
                        <Sparkles className="w-4 h-4 text-[var(--brand-secondary)] shrink-0" />
                        <span>Academy AI Tutor</span>
                      </button>

                      <button
                        onClick={() => setSubjectFeatureTab('assignments')}
                        className={`h-11 px-4 sm:px-5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
                          subjectFeatureTab === 'assignments'
                            ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-lg scale-[1.02]'
                            : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-primary)]'
                        }`}
                      >
                        <ClipboardList className="w-4 h-4 text-[var(--color-warning)] shrink-0" />
                        <span>Assignments</span>
                      </button>

                      <button
                        onClick={() => setSubjectFeatureTab('profile')}
                        className={`h-11 px-4 sm:px-5 rounded-2xl text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
                          subjectFeatureTab === 'profile'
                            ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-lg scale-[1.02]'
                            : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-primary)]'
                        }`}
                      >
                        <User className="w-4 h-4 text-[var(--brand-gold-start)] shrink-0" />
                        <span>Teacher Profile</span>
                      </button>
                    </div>

                    {/* DYNAMIC FEATURE CONTENT RENDERING BASED ON SELECTED BUTTON */}
                    
                    {/* FEATURE 1: LECTURE NOTES & HANDOUTS VAULT */}
                    {subjectFeatureTab === 'notes' && (
                      <div className="space-y-4 font-mono">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                            <FileText className="w-5 h-5 text-[var(--color-success)]" />
                            <span>{subjKey} Official Lecture Notes & Handouts Vault</span>
                          </h3>
                          <span className="text-xs text-[var(--text-secondary)]">4 Active Handout PDF Modules</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                            <div>
                              <span className="font-bold text-[var(--text-primary)] block">Module 01: Core Concepts & Formula Proofs</span>
                              <span className="text-[11px] text-[var(--text-secondary)]">Author: {teacherObj.name} • 18 Pages PDF</span>
                            </div>
                            <button onClick={() => alert(`📥 Downloading Module 01 Notes PDF for ${subjKey}...`)} className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md">
                              <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                              <span>Notes PDF</span>
                            </button>
                          </div>

                          <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                            <div>
                              <span className="font-bold text-[var(--text-primary)] block">Module 02: Worked Problem Sets & Solutions</span>
                              <span className="text-[11px] text-[var(--text-secondary)]">Author: {teacherObj.name} • 24 Pages PDF</span>
                            </div>
                            <button onClick={() => alert(`📥 Downloading Module 02 Notes PDF for ${subjKey}...`)} className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md">
                              <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                              <span>Notes PDF</span>
                            </button>
                          </div>

                          <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                            <div>
                              <span className="font-bold text-[var(--text-primary)] block">Module 03: Structured Essay Scoring Blueprints</span>
                              <span className="text-[11px] text-[var(--text-secondary)]">Author: {teacherObj.name} • 15 Pages PDF</span>
                            </div>
                            <button onClick={() => alert(`📥 Downloading Module 03 Notes PDF for ${subjKey}...`)} className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md">
                              <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                              <span>Notes PDF</span>
                            </button>
                          </div>

                          <div className="p-4 rounded-2xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] flex items-center justify-between gap-4">
                            <div>
                              <span className="font-bold text-[var(--text-primary)] block">Module 04: Last-Minute Mind Maps & Diagrams</span>
                              <span className="text-[11px] text-[var(--text-secondary)]">Author: {teacherObj.name} • High-Yield Revision</span>
                            </div>
                            <button onClick={() => alert(`📥 Downloading Module 04 Notes PDF for ${subjKey}...`)} className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md">
                              <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                              <span>Notes PDF</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FEATURE 2: TEACHER WHITEBOARD & CAPTURED BOARD PHOTOS WITH MONTH/YEAR CALENDAR CONTROL */}
                    {subjectFeatureTab === 'whiteboard' && (
                      <div className="space-y-6 font-mono">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-primary)]">
                          <div>
                            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                              <Camera className="w-5 h-5 text-[var(--brand-gold-mid)]" />
                              <span>{subjKey} Teacher Whiteboard Board Captures</span>
                            </h3>
                            <p className="text-xs text-[var(--text-secondary)]">
                              Select month & year to view historical board photos captured by {teacherObj.name}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button onClick={() => alert(`📥 Downloading All ${activeWhiteboardSession.photos.length} Whiteboard Photos for ${activeWhiteboardSession.date} (ZIP Archive)...`)} className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-mono font-extrabold flex items-center gap-1.5 shadow-md hover:scale-105 transition-all">
                              <Download className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                              <span>Download All Photos</span>
                            </button>
                            <button onClick={() => alert('🧹 Whiteboard Canvas Cleared!')} className="px-3 py-1.5 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-bold hover:bg-[var(--btn-hover-overlay)] flex items-center gap-1">
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Clear Canvas</span>
                            </button>
                            <button onClick={() => alert('💾 Exported Whiteboard Diagram to PDF!')} className="px-3 py-1.5 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-bold flex items-center gap-1">
                              <Save className="w-3.5 h-3.5" />
                              <span>Export PDF</span>
                            </button>
                          </div>
                        </div>

                        {/* MONTH & YEAR CALENDAR CONTROL BAR FOR WHITEBOARD DATES */}
                        <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-[var(--text-secondary)] font-bold flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                                <span>Filter Month & Year:</span>
                              </span>
                              
                              {/* Month Selector */}
                              <select
                                value={whiteboardMonth}
                                onChange={(e) => setWhiteboardMonth(Number(e.target.value))}
                                className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)]"
                              >
                                {MONTH_NAMES.map((m, idx) => (
                                  <option key={m} value={idx}>
                                    {m}
                                  </option>
                                ))}
                              </select>

                              {/* Year Selector */}
                              <select
                                value={whiteboardYear}
                                onChange={(e) => setWhiteboardYear(Number(e.target.value))}
                                className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)]"
                              >
                                {AVAILABLE_YEARS.map(yr => (
                                  <option key={yr} value={yr}>
                                    {yr}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <span className="text-xs font-bold text-[var(--brand-gold-start)]">
                              Showing {monthFilteredWhiteboardSessions.length} Class Sessions in {MONTH_NAMES[whiteboardMonth]} {whiteboardYear}
                            </span>
                          </div>

                          {/* Class Date Chips for Selected Month/Year */}
                          <div className="flex items-center gap-2 overflow-x-auto pb-1">
                            {monthFilteredWhiteboardSessions.length > 0 ? (
                              monthFilteredWhiteboardSessions.map(session => (
                                <button
                                  key={session.date}
                                  onClick={() => setSelectedWhiteboardDate(session.date)}
                                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                                    selectedWhiteboardDate === session.date
                                      ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-md scale-105'
                                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-primary)]'
                                  }`}
                                >
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>{session.date}</span>
                                </button>
                              ))
                            ) : (
                              <span className="text-xs text-[var(--color-warning)] font-semibold py-1">
                                No archived whiteboard photos found for {MONTH_NAMES[whiteboardMonth]} {whiteboardYear}. Try switching to July 2026.
                              </span>
                            )}
                          </div>
                        </div>

                        {/* ACTIVE CLASS SESSION TITLE */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-[var(--bg-pill)] p-3.5 rounded-2xl border border-[var(--border-primary)]">
                          <div>
                            <span className="text-[var(--text-subtle)] block">Active Session Date</span>
                            <span className="text-sm font-extrabold text-[var(--brand-gold-start)]">
                              {activeWhiteboardSession.date} • {activeWhiteboardSession.topic}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-[var(--color-success)]/15 text-[var(--color-success)] font-bold border border-[var(--color-success)]/30">
                              {activeWhiteboardSession.photos.length} Photos
                            </span>
                            <button
                              onClick={() => alert(`📥 Downloading All ${activeWhiteboardSession.photos.length} Whiteboard Photos for ${activeWhiteboardSession.date} (ZIP Archive)...`)}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-mono font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                            >
                              <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                              <span>Download All</span>
                            </button>
                          </div>
                        </div>

                        {/* TEACHER CAPTURED PHOTOS GRID (CLEAN PHOTO CAPTIONS ONLY: Photo 1, Photo 2, Photo 3, Photo 4) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {activeWhiteboardSession.photos.map((photo, index) => (
                            <div
                              key={photo.id}
                              onClick={() => setSelectedBoardPhotoIndex(index)}
                              className="group cursor-pointer rounded-3xl glass-panel p-4 border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--border-brand)] transition-all shadow-md flex flex-col justify-between"
                            >
                              <div>
                                {/* Photo Container */}
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-[var(--border-primary)] mb-3 group-hover:scale-[1.02] transition-transform">
                                  <img
                                    src={photo.image}
                                    alt={`Photo ${photo.photoNum}`}
                                    className="w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                                  />
                                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-xl bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-4 h-4" />
                                  </div>
                                </div>

                                {/* STRICT CLEAN CAPTION: Photo 1, Photo 2, Photo 3, Photo 4 ONLY */}
                                <div className="text-center py-1">
                                  <span className="px-3 py-1.5 rounded-xl text-sm font-extrabold bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] block">
                                    Photo {photo.photoNum}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    )}

                    {/* FEATURE 3: DIRECT MESSAGE WITH TEACHER */}
                    {subjectFeatureTab === 'direct-message' && (
                      <div className="space-y-4 font-mono">
                        
                        {/* Messenger Top Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
                          <div className="flex items-center gap-3">
                            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-md shrink-0">
                              <img 
                                src={teacherObj.imageCandidates?.[0] || '/assets/teachers/maths.jpg'} 
                                alt={teacherObj.name} 
                                className="w-full h-full object-cover rounded-[14px]"
                              />
                              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[var(--color-success)] border-2 border-[var(--bg-main)]" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                                <span>{teacherObj.name}</span>
                                <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-mono font-bold">
                                  {subjKey} Faculty
                                </span>
                              </div>
                              <span className="text-[11px] text-[var(--color-success)] font-semibold block">
                                ● Online & Available for Doubts
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => alert(`📞 Initiating Live Voice Call with ${teacherObj.name}...`)}
                              className="px-3 py-1.5 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-bold hover:bg-[var(--btn-hover-overlay)] flex items-center gap-1.5 transition-all"
                            >
                              <Phone className="w-3.5 h-3.5 text-[var(--color-success)]" />
                              <span>Audio Call</span>
                            </button>
                            <button 
                              onClick={() => alert(`📹 Starting Direct Video Consultation with ${teacherObj.name}...`)}
                              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-extrabold flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
                            >
                              <Video className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                              <span>Video Call</span>
                            </button>
                          </div>
                        </div>

                        {/* Direct Messenger Main Chat Window */}
                        <div className="relative rounded-3xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] p-4 space-y-4 shadow-xl">
                          
                          {/* Chat Stream Messages List */}
                          <div className="h-80 overflow-y-auto space-y-4 p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                            {chatMessages.map((msg, idx) => (
                              <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-md p-3.5 rounded-2xl text-xs space-y-2 ${
                                  msg.sender === 'user'
                                    ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] rounded-br-none shadow-md font-bold'
                                    : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-primary)] rounded-bl-none shadow-sm'
                                }`}>
                                  
                                  {/* Attached File Display if Present */}
                                  {msg.attachment && (
                                    <div className={`p-2.5 rounded-xl border flex items-center gap-3 font-mono text-xs ${
                                      msg.sender === 'user' 
                                        ? 'bg-black/20 border-white/20 text-[var(--btn-primary-text)]' 
                                        : 'bg-[var(--bg-pill)] border-[var(--border-primary)] text-[var(--text-primary)]'
                                    }`}>
                                      {msg.attachment.type === 'photo' && <ImageIcon className="w-5 h-5 text-[var(--color-warning)] shrink-0" />}
                                      {msg.attachment.type === 'pdf' && <FileText className="w-5 h-5 text-[var(--color-success)] shrink-0" />}
                                      {msg.attachment.type === 'voice' && <Mic className="w-5 h-5 text-[var(--brand-gold-mid)] shrink-0" />}
                                      {msg.attachment.type === 'exam' && <FileCheck className="w-5 h-5 text-[var(--brand-secondary)] shrink-0" />}
                                      
                                      <div className="flex-1 min-w-0">
                                        <span className="font-bold block truncate">{msg.attachment.name}</span>
                                        <span className="text-[10px] opacity-75">{msg.attachment.size || 'Attachment'}</span>
                                      </div>
                                      <button 
                                        onClick={() => alert(`📥 Opening preview for "${msg.attachment?.name}"...`)}
                                        className="p-1 rounded-lg hover:bg-white/20 transition-colors"
                                      >
                                        <Download className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  )}

                                  <div>{msg.text}</div>
                                </div>

                                <div className="flex items-center gap-1 text-[9px] text-[var(--text-subtle)] mt-1 font-mono">
                                  <span>{msg.time}</span>
                                  {msg.sender === 'user' && (
                                    <CheckCheck className="w-3.5 h-3.5 text-[var(--brand-gold-mid)]" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* PENDING ATTACHMENT PREVIEW BAR */}
                          {selectedAttachment && (
                            <div className="p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex items-center justify-between gap-3 text-xs animate-in fade-in">
                              <div className="flex items-center gap-2 font-mono">
                                <Paperclip className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                                <span className="font-bold text-[var(--text-primary)]">
                                  Ready to send: {selectedAttachment.name}
                                </span>
                                <span className="text-[10px] text-[var(--text-secondary)]">({selectedAttachment.size})</span>
                              </div>
                              <button 
                                onClick={() => setSelectedAttachment(null)}
                                className="p-1 rounded-full text-[var(--text-subtle)] hover:text-[var(--color-error)] hover:bg-[var(--color-error)]/10 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}

                          {/* EMOJI SHORTCUT POPOVER */}
                          {showEmojiPicker && (
                            <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xl flex items-center gap-2 overflow-x-auto animate-in fade-in">
                              {['👍', '🙏', '❓', '💡', '🔥', '✅', '💯', '📝', '📐', '🧪'].map(emoji => (
                                <button
                                  key={emoji}
                                  onClick={() => {
                                    setInputChatMsg(prev => prev + ' ' + emoji);
                                    setShowEmojiPicker(false);
                                  }}
                                  className="p-2 text-base rounded-xl hover:bg-[var(--bg-pill)] transition-all hover:scale-125"
                                >
                                  {emoji}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* ATTACHMENT MENU POPOVER (PAPERCLIP CLICK ACTION) */}
                          {showAttachmentMenu && (
                            <div className="p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xl grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs animate-in fade-in">
                              <button
                                onClick={() => {
                                  setSelectedAttachment({ type: 'photo', name: 'Problem_Photo_Capture.jpg', size: '2.4 MB' });
                                  setShowAttachmentMenu(false);
                                }}
                                className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] hover:border-[var(--border-brand)] flex flex-col items-center gap-1.5 text-[var(--text-primary)] font-bold hover:scale-105 transition-all"
                              >
                                <ImageIcon className="w-5 h-5 text-[var(--color-warning)]" />
                                <span>Attach Photo</span>
                              </button>

                              <button
                                onClick={() => {
                                  setSelectedAttachment({ type: 'pdf', name: 'Calculus_Homework_Answers.pdf', size: '1.8 MB' });
                                  setShowAttachmentMenu(false);
                                }}
                                className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] hover:border-[var(--border-brand)] flex flex-col items-center gap-1.5 text-[var(--text-primary)] font-bold hover:scale-105 transition-all"
                              >
                                <FileText className="w-5 h-5 text-[var(--color-success)]" />
                                <span>Attach PDF</span>
                              </button>

                              <button
                                onClick={() => {
                                  setSelectedAttachment({ type: 'voice', name: 'Voice_Question_Note.mp3', size: '0.9 MB' });
                                  setShowAttachmentMenu(false);
                                }}
                                className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] hover:border-[var(--border-brand)] flex flex-col items-center gap-1.5 text-[var(--text-primary)] font-bold hover:scale-105 transition-all"
                              >
                                <Mic className="w-5 h-5 text-[var(--brand-gold-mid)]" />
                                <span>Voice Note</span>
                              </button>

                              <button
                                onClick={() => {
                                  setSelectedAttachment({ type: 'exam', name: 'Model_Exam_Proof_Sheet.pdf', size: '3.1 MB' });
                                  setShowAttachmentMenu(false);
                                }}
                                className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] hover:border-[var(--border-brand)] flex flex-col items-center gap-1.5 text-[var(--text-primary)] font-bold hover:scale-105 transition-all"
                              >
                                <FileCheck className="w-5 h-5 text-[var(--brand-secondary)]" />
                                <span>Exam Paper</span>
                              </button>
                            </div>
                          )}

                          {/* STANDARD MESSAGE INPUT BAR WITH PAPERCLIP, EMOJI, MIC & SEND */}
                          <div className="flex items-center gap-2">
                            
                            {/* PAPERCLIP ATTACHMENT ICON BUTTON */}
                            <button
                              onClick={() => {
                                setShowAttachmentMenu(!showAttachmentMenu);
                                setShowEmojiPicker(false);
                              }}
                              className={`p-3 rounded-xl border transition-all ${
                                showAttachmentMenu || selectedAttachment
                                  ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-md'
                                  : 'bg-[var(--bg-pill)] border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)]'
                              }`}
                              title="Attach Files, Photos, PDF or Voice Note"
                            >
                              <Paperclip className="w-4 h-4" />
                            </button>

                            {/* EMOJI SELECTOR SHORTCUT BUTTON */}
                            <button
                              onClick={() => {
                                setShowEmojiPicker(!showEmojiPicker);
                                setShowAttachmentMenu(false);
                              }}
                              className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
                              title="Insert Emoji"
                            >
                              <Smile className="w-4 h-4" />
                            </button>

                            {/* VOICE NOTE RECORD BUTTON */}
                            <button
                              onClick={() => {
                                setSelectedAttachment({ type: 'voice', name: 'Voice_Note_Recorded.mp3', size: '1.2 MB' });
                                alert('🎙️ Recorded 15s Voice Audio Note! Attached to message.');
                              }}
                              className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] text-[var(--brand-gold-mid)] hover:bg-[var(--btn-hover-overlay)] transition-colors hidden sm:block"
                              title="Record Quick Voice Note"
                            >
                              <Mic className="w-4 h-4" />
                            </button>

                            {/* MESSAGE TEXT INPUT FIELD */}
                            <input
                              type="text"
                              placeholder={`Type a direct message to ${teacherObj.name}...`}
                              value={inputChatMsg}
                              onChange={(e) => setInputChatMsg(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                              className="flex-1 px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)]"
                            />

                            {/* SEND BUTTON */}
                            <button
                              onClick={handleSendMessage}
                              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 transition-all shrink-0"
                            >
                              <Send className="w-4 h-4 text-[var(--btn-primary-text)]" />
                              <span>Send</span>
                            </button>
                          </div>

                        </div>
                      </div>
                    )}

                    {/* FEATURE 4: ACADEMY AI TUTOR */}
                    {subjectFeatureTab === 'academy-ai' && (
                      <div className="space-y-4 font-mono">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[var(--brand-secondary)]" />
                            <span>Academy AI — {subjKey} Step-by-Step Solver</span>
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-pill)] text-[var(--brand-gold-start)] text-[10px] font-bold border border-[var(--border-brand)]">
                            Powered by Gemini AI Engine
                          </span>
                        </div>

                        {/* AI Prompt Input Bar */}
                        <div className="p-4 rounded-3xl glass-panel border border-[var(--border-brand)] bg-[var(--bg-card)] space-y-3 shadow-lg">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              placeholder={`Ask any ${subjKey} math proof or physical concept...`}
                              value={aiPromptInput}
                              onChange={(e) => setAiPromptInput(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
                              className="flex-1 px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)]"
                            />
                            <button
                              onClick={handleAskAi}
                              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 transition-all shrink-0"
                            >
                              <Sparkles className="w-4 h-4 text-[var(--btn-primary-text)]" />
                              <span>Solve with AI</span>
                            </button>
                          </div>

                          {/* AI Solutions Feed */}
                          <div className="space-y-3 pt-2">
                            {aiResponseList.map((item, idx) => (
                              <div key={idx} className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs space-y-2">
                                <div className="font-bold text-[var(--brand-gold-start)] flex items-center gap-1.5">
                                  <Bot className="w-4 h-4 text-[var(--brand-secondary)]" />
                                  <span>Q: {item.query}</span>
                                </div>
                                <div className="text-[var(--text-secondary)] whitespace-pre-line leading-relaxed pl-5 border-l-2 border-[var(--border-brand)]">
                                  {item.response}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FEATURE: UPCOMING ASSIGNMENTS & COURSEWORK VAULT */}
                    {subjectFeatureTab === 'assignments' && (
                      <div className="space-y-6 font-mono">
                        {/* Header Banner */}
                        <div className="p-6 rounded-3xl glass-panel border border-[var(--border-brand)] bg-[var(--bg-card)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-[var(--brand-gold-start)] font-bold uppercase tracking-wider">
                              <ClipboardList className="w-4 h-4" />
                              <span>{subjKey} Active Coursework & Worksheets</span>
                            </div>
                            <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                              Upcoming Subject Assignments
                            </h3>
                            <p className="text-xs text-[var(--text-secondary)]">
                              Submit your completed handwritten scans or PDF worksheets before the deadline to earn continuous assessment marks.
                            </p>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="px-4 py-2 rounded-2xl bg-[var(--bg-pill)] border border-[var(--color-warning)]/30 text-[var(--color-warning)] text-xs font-bold flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{(subjectAssignments[subjKey] || []).filter(a => a.status === 'pending').length} Pending Submissions</span>
                            </div>
                          </div>
                        </div>

                        {/* Assignments List Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {(() => {
                            const rawList = subjectAssignments[subjKey] || subjectAssignments['Combined Maths'] || [];
                            return rawList.map((assignment) => {
                              const isSubmitted = submittedAssignmentIds.includes(assignment.id) || assignment.status === 'submitted';
                              const isGraded = assignment.status === 'graded';
                              
                              return (
                                <div
                                  key={assignment.id}
                                  className="p-5 rounded-3xl glass-panel border border-[var(--border-primary)] bg-[var(--bg-card)] space-y-4 shadow-md hover:border-[var(--border-brand)] transition-all flex flex-col justify-between"
                                >
                                  <div className="space-y-3">
                                    <div className="flex items-start justify-between gap-3">
                                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-[var(--bg-pill)] text-[var(--brand-secondary)] border border-[var(--border-primary)]">
                                        {assignment.submissionType}
                                      </span>
                                      
                                      {isGraded ? (
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/30 flex items-center gap-1">
                                          <CheckCircle2 className="w-3.5 h-3.5" />
                                          <span>{assignment.grade}</span>
                                        </span>
                                      ) : isSubmitted ? (
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-primary)] flex items-center gap-1">
                                          <CheckCircle2 className="w-3.5 h-3.5" />
                                          <span>Submitted</span>
                                        </span>
                                      ) : (
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--bg-pill)] text-[var(--color-warning)] border border-[var(--color-warning)]/30 flex items-center gap-1">
                                          <Clock className="w-3.5 h-3.5" />
                                          <span>{assignment.dueCountdown}</span>
                                        </span>
                                      )}
                                    </div>

                                    <div>
                                      <h4 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                                        {assignment.title}
                                      </h4>
                                      <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                                        {assignment.description}
                                      </p>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-1.5 text-xs text-[var(--text-secondary)]">
                                      <div className="flex items-center justify-between text-[11px]">
                                        <span className="text-[var(--text-subtle)]">Due Date:</span>
                                        <span className="font-bold text-[var(--color-warning)]">{assignment.dueDate}</span>
                                      </div>
                                      <div className="flex items-center justify-between text-[11px]">
                                        <span className="text-[var(--text-subtle)]">Total Score:</span>
                                        <span className="font-bold text-[var(--text-primary)]">{assignment.totalMarks} Marks (Pass: {assignment.passingMarks})</span>
                                      </div>
                                      <div className="flex items-center justify-between text-[11px]">
                                        <span className="text-[var(--text-subtle)]">Teacher:</span>
                                        <span className="font-bold text-[var(--text-primary)]">{teacherObj.name}</span>
                                      </div>
                                    </div>

                                    {isGraded && assignment.feedback && (
                                      <div className="p-3 rounded-2xl bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 text-xs text-[var(--color-success)] space-y-1">
                                        <span className="font-bold block text-[var(--color-success)]">Teacher Evaluation Feedback:</span>
                                        <p className="text-[11px] leading-relaxed">{assignment.feedback}</p>
                                      </div>
                                    )}
                                  </div>

                                  {/* Actions */}
                                  <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-primary)]">
                                    <button
                                      onClick={() => alert(`📥 Downloading Question Sheet PDF for "${assignment.title}"...`)}
                                      className="flex-1 px-3.5 py-2.5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-pill)] hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)] font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                                    >
                                      <Download className="w-3.5 h-3.5 text-[var(--brand-gold-start)]" />
                                      <span>Question PDF</span>
                                    </button>

                                    {isSubmitted ? (
                                      <button
                                        onClick={() => alert(`📄 Viewing submission for "${assignment.title}"`)}
                                        className="flex-1 px-3.5 py-2.5 rounded-xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/10 text-[var(--color-success)] font-bold text-xs flex items-center justify-center gap-1.5"
                                      >
                                        <FileCheck className="w-3.5 h-3.5" />
                                        <span>View Submitted</span>
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() => {
                                          setSelectedAssignmentForModal(assignment);
                                          setAssignmentModalOpen(true);
                                        }}
                                        className="flex-1 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] transition-all"
                                      >
                                        <Upload className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                                        <span>Submit Work</span>
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            });
                          })()}
                        </div>

                        {/* Submission Modal */}
                        {assignmentModalOpen && selectedAssignmentForModal && (
                          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                            <div className="w-full max-w-lg p-6 rounded-3xl glass-panel border border-[var(--border-brand)] bg-[var(--bg-card)] text-[var(--text-primary)] space-y-5 shadow-2xl animate-in fade-in zoom-in duration-200">
                              <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-3">
                                <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand-gold-start)]">
                                  <Upload className="w-4 h-4" />
                                  <span>Submit Assignment Solution</span>
                                </div>
                                <button
                                  onClick={() => {
                                    setAssignmentModalOpen(false);
                                    setSelectedAssignmentForModal(null);
                                    setSelectedFileForUpload('');
                                  }}
                                  className="p-1 rounded-lg hover:bg-[var(--bg-pill)] text-[var(--text-subtle)] hover:text-[var(--text-primary)]"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>

                              <div>
                                <h4 className="font-bold text-sm text-[var(--text-primary)]">{selectedAssignmentForModal.title}</h4>
                                <p className="text-xs text-[var(--text-secondary)] mt-1">Due: {selectedAssignmentForModal.dueDate}</p>
                              </div>

                              <div className="p-4 rounded-2xl border border-dashed border-[var(--border-brand)] bg-[var(--bg-pill)] flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:border-[var(--brand-gold-mid)] transition-all">
                                <Upload className="w-8 h-8 text-[var(--brand-gold-mid)]" />
                                <div>
                                  <p className="text-xs font-bold text-[var(--text-primary)]">Click or drag PDF document to upload</p>
                                  <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">Supports PDF, PNG, JPG up to 25MB</p>
                                </div>
                                <input
                                  type="file"
                                  accept=".pdf,.png,.jpg,.jpeg"
                                  onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                      setSelectedFileForUpload(e.target.files[0].name);
                                    }
                                  }}
                                  className="hidden"
                                  id="assignment-file-input"
                                />
                                <label
                                  htmlFor="assignment-file-input"
                                  className="px-4 py-1.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--btn-hover-overlay)] text-xs font-bold text-[var(--text-primary)] border border-[var(--border-primary)] cursor-pointer"
                                >
                                  Select File from Device
                                </label>
                                {selectedFileForUpload && (
                                  <div className="text-xs font-bold text-[var(--color-success)] flex items-center gap-1.5 mt-2 bg-[var(--color-success)]/10 px-3 py-1 rounded-lg border border-[var(--color-success)]/30">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Selected: {selectedFileForUpload}</span>
                                  </div>
                                )}
                              </div>

                              <div className="space-y-2 text-[11px] text-[var(--text-secondary)]">
                                <span className="font-bold text-[var(--text-primary)] block">Submission Rules:</span>
                                {selectedAssignmentForModal.instructions.map((ins: string, idx: number) => (
                                  <p key={idx}>• {ins}</p>
                                ))}
                              </div>

                              <div className="flex items-center gap-3 pt-2">
                                <button
                                  onClick={() => {
                                    setAssignmentModalOpen(false);
                                    setSelectedAssignmentForModal(null);
                                    setSelectedFileForUpload('');
                                  }}
                                  className="flex-1 py-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--btn-hover-overlay)] text-xs font-bold text-[var(--text-primary)]"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() => {
                                    if (!selectedFileForUpload) {
                                      alert('Please select a PDF file before uploading!');
                                      return;
                                    }
                                    setSubmittedAssignmentIds((prev) => [...prev, selectedAssignmentForModal.id]);
                                    alert(`✅ Assignment "${selectedAssignmentForModal.title}" successfully submitted!`);
                                    setAssignmentModalOpen(false);
                                    setSelectedAssignmentForModal(null);
                                    setSelectedFileForUpload('');
                                  }}
                                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs shadow-lg hover:scale-105 transition-all"
                                >
                                  Confirm & Upload
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Default Teacher Profile View */}
                    {subjectFeatureTab === 'profile' && (
                      <TeacherProfileContainer
                        selectedSubject={subjKey}
                        showSelectorTabs={false}
                      />
                    )}

                  </div>
                );
              })()}

            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* VIEW 3: PRODUCTS & SPECIAL BOOKS CATALOG WITH PRICES */}
          {/* ========================================================================= */}
          {activeNav === 'products' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              
              {/* Products Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-primary)]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] mb-2 font-semibold">
                    <ShoppingBag className="w-3.5 h-3.5" /> ACADEMY SPECIAL BOOKS & PRODUCTS
                  </div>
                  <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">
                    Special Study Books & <span className="text-gradient-cyan">Past Paper Guides</span>
                  </h1>
                </div>

                {/* Filter Tabs by Subject */}
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-[var(--bg-pill)] border border-[var(--border-primary)] flex-wrap">
                  {(['All', 'Combined Maths', 'Physics', 'Chemistry', 'Biology'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedProductFilter(filter)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                        selectedProductFilter === filter
                          ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold shadow-md'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((book) => {
                  const isOrdered = orderedBooks.includes(book.id);
                  return (
                    <div 
                      key={book.id}
                      className="rounded-3xl glass-panel p-5 border border-[var(--border-primary)] bg-[var(--bg-card)] flex flex-col justify-between group hover:border-[var(--border-brand)] transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      <div>
                        {/* Book Cover Thumbnail */}
                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-[var(--border-primary)] p-1">
                          <img 
                            src={book.coverImage} 
                            alt={book.title} 
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 text-[var(--brand-gold-mid)] border border-white/10 backdrop-blur-md">
                            {book.badge}
                          </span>
                          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[var(--brand-gold-start)] text-[var(--btn-primary-text)] font-extrabold shadow-md">
                            {book.subject}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs font-mono text-[var(--brand-gold-mid)] mb-1">
                          <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-current" /> {book.rating}</span>
                          <span className="text-[var(--text-subtle)]">{book.salesCount}</span>
                        </div>

                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-1 leading-snug group-hover:text-[var(--brand-gold-start)] transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-xs font-mono text-[var(--text-secondary)] mb-2">
                          Author: {book.author}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2 mb-4">
                          {book.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[var(--border-primary)] flex items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] text-[var(--text-subtle)] block font-mono">Book Price</span>
                          <span className="text-lg font-extrabold text-[var(--brand-gold-start)] font-mono">{book.price}</span>
                        </div>

                        <button
                          onClick={() => handleOrderBook(book.id, book.title)}
                          disabled={isOrdered}
                          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                            isOrdered
                              ? 'bg-[var(--color-success)]/20 text-[var(--color-success)] border border-[var(--color-success)]/30'
                              : 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold shadow-md hover:scale-105'
                          }`}
                        >
                          {isOrdered ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Ordered</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
                              <span>Order Book</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* VIEW 4: SETTINGS VIEW */}
          {/* ========================================================================= */}
          {activeNav === 'settings' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-4xl">
              <div className="pb-4 border-b border-[var(--border-primary)]">
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">Account Settings</h1>
                <p className="text-xs font-mono text-[var(--text-secondary)] mt-1">Manage your student profile preferences and system modes.</p>
              </div>

              <div className="rounded-2xl glass-panel p-6 border border-[var(--border-primary)] bg-[var(--bg-card)] space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-mono">Appearance & Theme Mode</h3>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-between p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] w-full"
                  >
                    <div className="flex items-center gap-3">
                      {theme === 'dark' ? <Sun className="w-5 h-5 text-[var(--brand-gold-mid)]" /> : <Moon className="w-5 h-5 text-[var(--text-primary)]" />}
                      <div className="text-left">
                        <div className="text-xs font-bold text-[var(--text-primary)]">Current Mode: {theme.toUpperCase()}</div>
                        <div className="text-[11px] text-[var(--text-secondary)]">Click to switch between Light and Dark aesthetics</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] font-bold border border-[var(--border-brand)]">
                      Switch Mode
                    </span>
                  </button>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 font-mono">Student Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                      <span className="text-[var(--text-subtle)] block">Student Name</span>
                      <span className="font-bold text-[var(--text-primary)]">{studentName}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                      <span className="text-[var(--text-subtle)] block">Enrolled Stream</span>
                      <span className="font-bold text-[var(--brand-gold-start)]">{stream}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </main>
      </div>

      {/* ========================================================================= */}
      {/* 3. ATTENDANCE HISTORY & MONTHLY CALENDAR MODAL OVERLAY */}
      {/* ========================================================================= */}
      {showAttendanceHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] p-6 sm:p-8 shadow-2xl space-y-6 font-mono text-[var(--text-primary)]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-md flex items-center justify-center text-[var(--btn-primary-text)]">
                  <Calendar className="w-5 h-5 text-[var(--btn-primary-text)]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Student Monthly Attendance History</h2>
                  <p className="text-xs text-[var(--text-secondary)]">Class Schedules & Verification Logs per Month & Year</p>
                </div>
              </div>

              <button
                onClick={() => setShowAttendanceHistoryModal(false)}
                className="p-2 rounded-full text-[var(--text-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MONTH & YEAR CALENDAR CONTROL BAR */}
            <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Month Navigation Tabs / Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
                <button
                  onClick={() => setSelectedHistoryMonth(prev => Math.max(0, prev - 1))}
                  disabled={selectedHistoryMonth === 0}
                  className="p-2 rounded-xl bg-[var(--bg-card)] disabled:opacity-30 border border-[var(--border-primary)] text-[var(--text-primary)] shrink-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <select
                  value={selectedHistoryMonth}
                  onChange={(e) => setSelectedHistoryMonth(Number(e.target.value))}
                  className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)]"
                >
                  {MONTH_NAMES.map((m, idx) => (
                    <option key={m} value={idx}>
                      {m}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setSelectedHistoryMonth(prev => Math.min(11, prev + 1))}
                  disabled={selectedHistoryMonth === 11}
                  className="p-2 rounded-xl bg-[var(--bg-card)] disabled:opacity-30 border border-[var(--border-primary)] text-[var(--text-primary)] shrink-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Year Selector Bar */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--text-secondary)] font-semibold">Select Academic Year:</span>
                <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)]">
                  {AVAILABLE_YEARS.map(yr => (
                    <button
                      key={yr}
                      onClick={() => setSelectedHistoryYear(yr)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedHistoryYear === yr
                          ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold shadow-md'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-pill)]'
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Selected Month Header Title */}
            <div className="text-center py-2">
              <h3 className="text-lg font-extrabold text-[var(--brand-gold-start)]">
                {MONTH_NAMES[selectedHistoryMonth]} {selectedHistoryYear} Class Attendance Summary
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Monthly Class Schedules, Live Times & Gate Scan Verification
              </p>
            </div>

            {/* Core Subject Monthly Attendance Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              {/* Subject 1: Combined Mathematics */}
              <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Atom className="w-4 h-4 text-[var(--brand-gold-start)]" />
                    <span className="font-bold text-[var(--text-primary)]">Combined Mathematics</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[var(--color-success)]/15 text-[var(--color-success)] font-bold border border-[var(--color-success)]/20">
                    4/4 Present (100%)
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] space-y-1">
                  <div>Faculty: <span className="font-bold text-[var(--text-primary)]">Eng R. Jeyakumar</span></div>
                  <div>Class Schedule: <span className="font-bold text-[var(--brand-gold-start)]">Sundays • 08:30 AM – 12:30 PM</span></div>
                  <div>Location: Hatton Main Auditorium (Gate 01)</div>
                  <div className="pt-1 text-[var(--color-success)] font-semibold">● Gate Checked 08:52 AM every Sunday</div>
                </div>
              </div>

              {/* Subject 2: Advanced Physics */}
              <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                    <span className="font-bold text-[var(--text-primary)]">Advanced Physics</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[var(--color-success)]/15 text-[var(--color-success)] font-bold border border-[var(--color-success)]/20">
                    4/4 Present (100%)
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] space-y-1">
                  <div>Faculty: <span className="font-bold text-[var(--text-primary)]">Eng S. Balamurugan</span></div>
                  <div>Class Schedule: <span className="font-bold text-[var(--brand-gold-mid)]">Mondays • 04:00 PM – 07:30 PM</span></div>
                  <div>Location: Physics Auditorium & Live Stream</div>
                  <div className="pt-1 text-[var(--color-success)] font-semibold">● Stream Synced 03:55 PM every Monday</div>
                </div>
              </div>

              {/* Subject 3: Advanced Chemistry */}
              <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-warning)]" />
                    <span className="font-bold text-[var(--text-primary)]">Advanced Chemistry</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[var(--color-warning)]/15 text-[var(--color-warning)] font-bold border border-[var(--color-warning)]/20">
                    3/4 Present (75%)
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] space-y-1">
                  <div>Faculty: <span className="font-bold text-[var(--text-primary)]">Sivanesan Sir</span></div>
                  <div>Class Schedule: <span className="font-bold text-[var(--color-warning)]">Thursdays • 03:30 PM – 07:00 PM</span></div>
                  <div>Location: Hatton Chemistry Lab 02</div>
                  <div className="pt-1 text-[var(--color-warning)] font-semibold">● 1 Absence (Medical Excuse Slip Verified)</div>
                </div>
              </div>

              {/* Subject 4: Biological Sciences */}
              <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Dna className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                    <span className="font-bold text-[var(--text-primary)]">Biological Sciences</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[var(--color-success)]/15 text-[var(--color-success)] font-bold border border-[var(--color-success)]/20">
                    4/4 Present (100%)
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] space-y-1">
                  <div>Faculty: <span className="font-bold text-[var(--text-primary)]">K. Umamaheswaran</span></div>
                  <div>Class Schedule: <span className="font-bold text-[var(--brand-gold-mid)]">Fridays • 03:00 PM – 06:30 PM</span></div>
                  <div>Location: Biology Lab 01</div>
                  <div className="pt-1 text-[var(--color-success)] font-semibold">● Gate Checked 02:50 PM every Friday</div>
                </div>
              </div>

            </div>

            {/* Interactive Calendar Grid Demo for Selected Month */}
            <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-[var(--text-primary)]">
                  Monthly Days Attendance Grid — {MONTH_NAMES[selectedHistoryMonth]} {selectedHistoryYear}
                </span>
                <span className="text-[11px] text-[var(--color-success)] font-bold">
                  Total Monthly Rate: 93.8%
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 text-center text-[11px]">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="font-bold text-[var(--text-subtle)] py-1">{day}</div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map(dayNum => {
                  const isClassDay = dayNum % 3 === 0 || dayNum % 5 === 0;
                  const isAbsentDay = dayNum === 15;
                  return (
                    <div 
                      key={dayNum}
                      className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                        isAbsentDay
                          ? 'bg-[var(--color-warning)]/20 text-[var(--color-warning)] border-[var(--color-warning)]/40'
                          : isClassDay
                          ? 'bg-[var(--color-success)]/20 text-[var(--color-success)] border-[var(--color-success)]/40'
                          : 'bg-[var(--bg-pill)] text-[var(--text-subtle)] border-[var(--border-primary)]'
                      }`}
                    >
                      {dayNum}
                      {isAbsentDay ? (
                        <span className="block text-[8px] font-mono text-[var(--color-warning)] mt-0.5">Absent</span>
                      ) : isClassDay ? (
                        <span className="block text-[8px] font-mono text-[var(--color-success)] mt-0.5 font-bold">Present</span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowAttendanceHistoryModal(false)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-bold text-xs hover:opacity-90 transition-opacity"
              >
                Close Attendance History
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. FULL-SCREEN BOARD PHOTO LIGHTBOX PREVIEW MODAL WITH PREV / NEXT NAVIGATION */}
      {/* ========================================================================= */}
      {selectedBoardPhotoIndex !== null && activeWhiteboardSession.photos[selectedBoardPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-4xl rounded-3xl bg-[var(--bg-card)] border border-[var(--border-brand)] p-6 shadow-2xl space-y-4 font-mono text-[var(--text-primary)]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold">
                  Photo {activeWhiteboardSession.photos[selectedBoardPhotoIndex].photoNum}
                </span>
                <span className="text-xs text-[var(--text-secondary)] font-bold">
                  Photo {selectedBoardPhotoIndex + 1} of {activeWhiteboardSession.photos.length}
                </span>
              </div>

              <button
                onClick={() => setSelectedBoardPhotoIndex(null)}
                className="p-2 rounded-full text-[var(--text-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Photo Image Display with PREVIOUS and NEXT Controls */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-[var(--border-primary)] flex items-center justify-center group shadow-2xl">
              <img
                src={activeWhiteboardSession.photos[selectedBoardPhotoIndex].image}
                alt={`Photo ${activeWhiteboardSession.photos[selectedBoardPhotoIndex].photoNum}`}
                className="w-full h-full object-cover rounded-xl"
              />

              {/* PREVIOUS PHOTO BUTTON (<) */}
              <button
                onClick={() => setSelectedBoardPhotoIndex(prev => 
                  prev !== null ? (prev === 0 ? activeWhiteboardSession.photos.length - 1 : prev - 1) : 0
                )}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 shadow-2xl"
                title="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* NEXT PHOTO BUTTON (>) */}
              <button
                onClick={() => setSelectedBoardPhotoIndex(prev => 
                  prev !== null ? (prev === activeWhiteboardSession.photos.length - 1 ? 0 : prev + 1) : 0
                )}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 shadow-2xl"
                title="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Clean Photo Caption & Save Action */}
            <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-center justify-between gap-3 text-xs">
              <span className="font-extrabold text-[var(--brand-gold-start)] text-sm">
                Photo {activeWhiteboardSession.photos[selectedBoardPhotoIndex].photoNum}
              </span>

              <button
                onClick={() => alert(`📥 Downloaded "Photo ${activeWhiteboardSession.photos[selectedBoardPhotoIndex!].photoNum}" High-Res Board Capture to Device!`)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold flex items-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                <span>Save Board Photo</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. MULTI-STEP PAY ONLINE NOW CHECKOUT MODAL & DOWNLOADABLE RECEIPT */}
      {/* ========================================================================= */}
      {showPayOnlineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] p-6 sm:p-8 shadow-2xl space-y-6 font-mono text-[var(--text-primary)]">
            
            {/* Modal Header Bar & Step Progress Tracker */}
            <div className="pb-4 border-b border-[var(--border-primary)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-md flex items-center justify-center text-[var(--btn-primary-text)] shrink-0">
                  <CreditCard className="w-5 h-5 text-[var(--btn-primary-text)]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Tuition Fee Online Payment Gateway</h2>
                  <p className="text-xs text-[var(--text-secondary)]">Step {payStep} of 4 — {payStep === 1 ? 'Subject & Period Selection' : payStep === 2 ? 'Order Review & Student Info' : payStep === 3 ? 'Payment Card Details' : 'Official Payment Receipt'}</p>
                </div>
              </div>

              <button
                onClick={() => setShowPayOnlineModal(false)}
                className="p-2 rounded-full text-[var(--text-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)] transition-colors self-start sm:self-auto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Step Progress Bar */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
              <div className={`p-2 rounded-xl border ${payStep >= 1 ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)]' : 'bg-[var(--bg-pill)] text-[var(--text-subtle)] border-[var(--border-primary)]'}`}>
                1. Select Subjects
              </div>
              <div className={`p-2 rounded-xl border ${payStep >= 2 ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)]' : 'bg-[var(--bg-pill)] text-[var(--text-subtle)] border-[var(--border-primary)]'}`}>
                2. Student Info & Notes
              </div>
              <div className={`p-2 rounded-xl border ${payStep >= 3 ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)]' : 'bg-[var(--bg-pill)] text-[var(--text-subtle)] border-[var(--border-primary)]'}`}>
                3. Card Payment
              </div>
              <div className={`p-2 rounded-xl border ${payStep === 4 ? 'bg-[var(--color-success)] text-white border-[var(--color-success)]' : 'bg-[var(--bg-pill)] text-[var(--text-subtle)] border-[var(--border-primary)]'}`}>
                4. Payment Receipt
              </div>
            </div>

            {/* STEP 1: SUBJECT & MONTH PERIOD SELECTION */}
            {payStep === 1 && (
              <div className="space-y-6">
                
                {/* 1.1 Subject Selection */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                      <span>Select Subject(s) to Pay For:</span>
                    </label>

                    <div className="flex items-center gap-2 text-[11px]">
                      <button
                        onClick={() => setPaySelectedSubjects(PAY_SUBJECT_OPTIONS.map(s => s.key))}
                        className="text-[var(--brand-gold-start)] font-bold hover:underline"
                      >
                        Select All Subjects
                      </button>
                      <span className="text-[var(--border-primary)]">|</span>
                      <button
                        onClick={() => setPaySelectedSubjects([])}
                        className="text-[var(--text-subtle)] hover:text-[var(--text-primary)]"
                      >
                        Clear Selection
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {PAY_SUBJECT_OPTIONS.map(subj => {
                      const isSelected = paySelectedSubjects.includes(subj.key);
                      return (
                        <div
                          key={subj.key}
                          onClick={() => {
                            setPaySelectedSubjects(prev => 
                              isSelected ? prev.filter(k => k !== subj.key) : [...prev, subj.key]
                            );
                          }}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[var(--bg-pill)] border-[var(--border-brand)] shadow-md scale-[1.01]'
                              : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:bg-[var(--bg-pill)]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-lg border flex items-center justify-center ${
                              isSelected ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)]' : 'border-[var(--border-primary)]'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <div>
                              <span className="font-bold text-[var(--text-primary)] block">{subj.name}</span>
                              <span className="text-[11px] text-[var(--text-secondary)] font-mono">Monthly Fee: LKR {subj.price.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 1.2 Month Period Selection */}
                <div className="space-y-3 pt-2 border-t border-[var(--border-primary)]">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[var(--brand-gold-mid)]" />
                      <span>Select Payment Period (Strictly 3 Months Period: Current & Next 2 Months):</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    {PAY_MONTH_OPTIONS.map((mth, idx) => {
                      const isSelected = paySelectedMonths.includes(mth);
                      return (
                        <div
                          key={mth}
                          onClick={() => {
                            setPaySelectedMonths(prev => 
                              isSelected ? prev.filter(m => m !== mth) : [...prev, mth]
                            );
                          }}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] border-[var(--border-brand)] shadow-md scale-[1.02]'
                              : 'bg-[var(--bg-card)] text-[var(--text-primary)] border-[var(--border-primary)] hover:bg-[var(--bg-pill)]'
                          }`}
                        >
                          <div>
                            <span className="font-extrabold block">{mth}</span>
                            <span className="text-[10px] opacity-80">{idx === 0 ? '● Current Month' : idx === 1 ? '● Next Month' : '● 3rd Month'}</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-white text-[var(--brand-gold-start)]' : 'border-[var(--border-primary)]'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Price Calculation Summary */}
                <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[var(--text-subtle)] uppercase block">Selected Formula</span>
                    <span className="text-xs font-bold text-[var(--text-primary)]">
                      {paySelectedSubjects.length} Subject(s) × {paySelectedMonths.length} Month(s) @ LKR 3,000 / subj
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[var(--text-subtle)] uppercase block">Total Amount</span>
                    <span className="text-xl font-extrabold text-[var(--brand-gold-start)]">LKR {calculatedPayTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 flex justify-between gap-3 border-t border-[var(--border-primary)]">
                  <button
                    onClick={() => setShowPayOnlineModal(false)}
                    className="px-5 py-2.5 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-bold hover:bg-[var(--btn-hover-overlay)]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setPayStep(2)}
                    disabled={paySelectedSubjects.length === 0 || paySelectedMonths.length === 0}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-extrabold disabled:opacity-40 flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                  >
                    <span>Proceed to Student Info</span>
                    <ArrowRight className="w-4 h-4 text-[var(--btn-primary-text)]" />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 2: REVIEW ORDER, STUDENT INFO & REMARKS */}
            {payStep === 2 && (
              <div className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-xs font-bold text-[var(--text-primary)] block mb-1">
                      Student Full Name:
                    </label>
                    <input
                      type="text"
                      value={payStudentName}
                      onChange={(e) => setPayStudentName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[var(--text-primary)] block mb-1">
                      Payment Date:
                    </label>
                    <input
                      type="text"
                      value="July 26, 2026 (Today)"
                      readOnly
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] text-[var(--text-secondary)] font-mono"
                    />
                  </div>
                </div>

                {/* Selected Order Summary Card */}
                <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-2 text-xs">
                  <span className="font-bold text-[var(--text-primary)] block pb-2 border-b border-[var(--border-primary)]">
                    Selected Order Summary:
                  </span>
                  
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Subjects ({paySelectedSubjects.length}):</span>
                    <span className="font-bold text-[var(--text-primary)]">{paySelectedSubjects.join(', ')}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Duration ({paySelectedMonths.length} Months):</span>
                    <span className="font-bold text-[var(--brand-gold-start)]">{paySelectedMonths.join(', ')}</span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-[var(--border-primary)] text-sm font-extrabold">
                    <span>Total Calculated Amount:</span>
                    <span className="text-[var(--color-success)]">LKR {calculatedPayTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Remarks Field Input */}
                <div>
                  <label className="text-xs font-bold text-[var(--text-primary)] block mb-1">
                    Special Remarks / Parent Note (Optional):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter any special remarks or bank transfer reference notes..."
                    value={payRemarks}
                    onChange={(e) => setPayRemarks(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)]"
                  />
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 flex justify-between gap-3 border-t border-[var(--border-primary)]">
                  <button
                    onClick={() => setPayStep(1)}
                    className="px-5 py-2.5 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-bold flex items-center gap-1.5 hover:bg-[var(--btn-hover-overlay)]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back to Step 1</span>
                  </button>
                  <button
                    onClick={() => setPayStep(3)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                  >
                    <span>Proceed to Card Payment</span>
                    <ArrowRight className="w-4 h-4 text-[var(--btn-primary-text)]" />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 3: PAYMENT METHOD & CARD DETAILS */}
            {payStep === 3 && (
              <div className="space-y-6">
                
                {/* Method Switcher */}
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <button
                    onClick={() => setPayMethod('card')}
                    className={`p-3 rounded-2xl border flex flex-col items-center gap-1 font-bold ${
                      payMethod === 'card'
                        ? 'bg-[var(--bg-pill)] border-[var(--border-brand)] text-[var(--brand-gold-start)]'
                        : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-subtle)]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Credit / Debit Card</span>
                  </button>

                  <button
                    onClick={() => setPayMethod('bank')}
                    className={`p-3 rounded-2xl border flex flex-col items-center gap-1 font-bold ${
                      payMethod === 'bank'
                        ? 'bg-[var(--bg-pill)] border-[var(--border-brand)] text-[var(--brand-gold-start)]'
                        : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-subtle)]'
                    }`}
                  >
                    <Building2 className="w-5 h-5" />
                    <span>Bank Transfer</span>
                  </button>

                  <button
                    onClick={() => setPayMethod('qr')}
                    className={`p-3 rounded-2xl border flex flex-col items-center gap-1 font-bold ${
                      payMethod === 'qr'
                        ? 'bg-[var(--bg-pill)] border-[var(--border-brand)] text-[var(--brand-gold-start)]'
                        : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-subtle)]'
                    }`}
                  >
                    <QrCode className="w-5 h-5" />
                    <span>LANKAQR Direct</span>
                  </button>
                </div>

                {/* Card Fields Form */}
                <div className="p-5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-[var(--text-primary)] block mb-1">
                      Cardholder Name:
                    </label>
                    <input
                      type="text"
                      value={payCardName}
                      onChange={(e) => setPayCardName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)]"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[var(--text-primary)] block mb-1">
                      Card Number:
                    </label>
                    <input
                      type="text"
                      value={payCardNumber}
                      onChange={(e) => setPayCardNumber(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-[var(--text-primary)] block mb-1">
                        Expiry Date:
                      </label>
                      <input
                        type="text"
                        value={payCardExpiry}
                        onChange={(e) => setPayCardExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[var(--text-primary)] block mb-1">
                        CVC / CVV:
                      </label>
                      <input
                        type="password"
                        maxLength={4}
                        value={payCardCvc}
                        onChange={(e) => setPayCardCvc(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 flex justify-between gap-3 border-t border-[var(--border-primary)]">
                  <button
                    onClick={() => setPayStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-bold flex items-center gap-1.5 hover:bg-[var(--btn-hover-overlay)]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back to Step 2</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsProcessingPay(true);
                      setTimeout(() => {
                        setIsProcessingPay(false);
                        setPayStep(4);
                      }, 1200);
                    }}
                    disabled={isProcessingPay}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-extrabold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                  >
                    {isProcessingPay ? (
                      <span>Processing Payment...</span>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4 text-[var(--color-success)]" />
                        <span>Proceed to Pay LKR {calculatedPayTotal.toLocaleString()}</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            )}

            {/* STEP 4: OFFICIAL PAYMENT RECEIPT & PDF DOWNLOAD */}
            {payStep === 4 && (
              <div className="space-y-6">
                
                {/* Official Receipt Container */}
                <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-brand)] shadow-2xl space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)]">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs bg-[var(--color-success)]/15 text-[var(--color-success)] font-extrabold border border-[var(--color-success)]/30 flex items-center gap-1.5 w-fit mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>PAYMENT SUCCESSFUL — PAID</span>
                      </span>
                      <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
                        SciEnce Academy Official Tuition Receipt
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)]">
                        Hatton Campus Academic Finance Bureau
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-[var(--brand-gold-start)] block">
                        #REC-2026-98412
                      </span>
                      <span className="text-[11px] text-[var(--text-subtle)]">July 26, 2026 • 12:24 PM</span>
                    </div>
                  </div>

                  {/* Student & Payment Summary Grid */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[var(--text-subtle)] text-[10px] uppercase block">Paid By Student</span>
                      <span className="font-bold text-[var(--text-primary)]">{payStudentName}</span>
                      <span className="text-[11px] text-[var(--text-secondary)] block">{stream}</span>
                    </div>

                    <div>
                      <span className="text-[var(--text-subtle)] text-[10px] uppercase block">Payment Method</span>
                      <span className="font-bold text-[var(--text-primary)]">{payMethod.toUpperCase()} Card</span>
                      <span className="text-[11px] text-[var(--text-secondary)] block">xxxx-xxxx-xxxx-{payCardNumber.slice(-4)}</span>
                    </div>
                  </div>

                  {/* Itemized Table */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)] space-y-3 text-xs">
                    <div className="flex justify-between font-bold text-[var(--text-primary)] border-b pb-2 border-[var(--border-primary)]">
                      <span>Paid Item / Subject</span>
                      <span>Selected Period</span>
                      <span>Subtotal</span>
                    </div>

                    {paySelectedSubjects.map(s => (
                      <div key={s} className="flex justify-between text-[var(--text-secondary)]">
                        <span>{s} Monthly Fee</span>
                        <span>{paySelectedMonths.join(', ')}</span>
                        <span>LKR {(paySelectedMonths.length * 3000).toLocaleString()}</span>
                      </div>
                    ))}

                    {payRemarks && (
                      <div className="pt-2 border-t border-[var(--border-primary)] text-[11px]">
                        <span className="font-bold text-[var(--text-subtle)]">Remarks: </span>
                        <span className="italic text-[var(--text-secondary)]">"{payRemarks}"</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-[var(--border-primary)] flex justify-between items-center text-sm font-extrabold">
                      <span className="text-[var(--text-primary)]">Total Amount Paid:</span>
                      <span className="text-xl text-[var(--color-success)]">LKR {calculatedPayTotal.toLocaleString()}</span>
                    </div>
                  </div>

                </div>

                {/* Footer Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row justify-between gap-3">
                  <button
                    onClick={() => alert(`📥 Downloaded Official Payment Receipt #REC-2026-98412 PDF for LKR ${calculatedPayTotal.toLocaleString()}!`)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-mono text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
                  >
                    <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                    <span>Download Payment Receipt PDF</span>
                  </button>

                  <button
                    onClick={() => {
                      const newRecords = paySelectedMonths.flatMap(mth => 
                        paySelectedSubjects.map((subKey, idx) => ({
                          id: `pay-new-${Date.now()}-${idx}`,
                          invoiceNo: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
                          transactionRef: `TRX-${Math.floor(10000000 + Math.random() * 90000000)}`,
                          month: mth,
                          date: 'July 26, 2026',
                          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                          subject: subKey.includes('Math') ? 'Combined Mathematics' : subKey.includes('Phys') ? 'Advanced Physics' : subKey.includes('Chem') ? 'Advanced Chemistry' : 'Biological Sciences',
                          teacher: subKey.includes('Math') ? 'Eng R. Jeyakumar' : subKey.includes('Phys') ? 'Eng S. Balamurugan' : subKey.includes('Chem') ? 'Sivanesan Sir' : 'K. Umamaheswaran',
                          amount: 3000,
                          method: payMethod === 'card' ? `Visa Card (•••• ${payCardNumber.slice(-4)})` : payMethod === 'bank' ? 'Bank Deposit Slip' : 'Online Gateway',
                          status: 'Paid' as const,
                          remarks: payRemarks
                        }))
                      );
                      setPaymentHistoryData(prev => [...newRecords, ...prev]);
                      setActivePaymentTab('history');
                      setShowPayOnlineModal(false);
                    }}
                    className="px-6 py-3 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] border border-[var(--border-primary)] font-bold text-xs hover:bg-[var(--btn-hover-overlay)] transition-opacity shadow-md"
                  >
                    Done & View Payment History
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* INDIVIDUAL PAYMENT HISTORY RECEIPT PREVIEW MODAL */}
      {/* ========================================================================= */}
      {selectedReceiptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xl space-y-6 font-mono max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setSelectedReceiptModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-pill)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-primary)] pr-8">
              <div>
                <span className="px-3 py-1 rounded-full text-[11px] bg-[var(--color-success)]/15 text-[var(--color-success)] font-extrabold border border-[var(--color-success)]/30 flex items-center gap-1.5 w-fit mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>OFFICIAL RECEIPT — PAID</span>
                </span>
                <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
                  SciEnce Academy Tuition Payment Receipt
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Hatton Campus Academic Finance Bureau
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-[var(--brand-gold-start)] block">
                  #{selectedReceiptModal.invoiceNo}
                </span>
                <span className="text-[10px] text-[var(--text-subtle)] block">{selectedReceiptModal.date}</span>
                <span className="text-[10px] text-[var(--text-subtle)] block">{selectedReceiptModal.time}</span>
              </div>
            </div>

            {/* Student & Payment Info */}
            <div className="grid grid-cols-2 gap-4 text-xs p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-primary)]">
              <div>
                <span className="text-[var(--text-subtle)] text-[10px] uppercase block mb-0.5">Student Candidate</span>
                <span className="font-extrabold text-[var(--text-primary)] block">{studentName}</span>
                <span className="text-[11px] text-[var(--text-secondary)]">{stream} • ID: STU-2026-8981</span>
              </div>

              <div>
                <span className="text-[var(--text-subtle)] text-[10px] uppercase block mb-0.5">Payment Method & Ref</span>
                <span className="font-extrabold text-[var(--text-primary)] block">{selectedReceiptModal.method}</span>
                <span className="text-[11px] text-[var(--text-secondary)]">{selectedReceiptModal.transactionRef}</span>
              </div>
            </div>

            {/* Receipt Table */}
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] space-y-3 text-xs">
              <div className="flex justify-between font-bold text-[var(--text-primary)] border-b pb-2 border-[var(--border-primary)]">
                <span>Subject / Fee Details</span>
                <span>Billing Period</span>
                <span>Subtotal</span>
              </div>

              <div className="flex justify-between text-[var(--text-primary)] font-bold">
                <div>
                  <span>{selectedReceiptModal.subject}</span>
                  <span className="text-[11px] text-[var(--text-secondary)] block font-normal">Instructor: {selectedReceiptModal.teacher}</span>
                </div>
                <span>{selectedReceiptModal.month}</span>
                <span>LKR {selectedReceiptModal.amount.toLocaleString()}</span>
              </div>

              {selectedReceiptModal.remarks && (
                <div className="pt-2 border-t border-[var(--border-primary)] text-[11px]">
                  <span className="font-bold text-[var(--text-subtle)]">Remarks: </span>
                  <span className="italic text-[var(--text-secondary)]">"{selectedReceiptModal.remarks}"</span>
                </div>
              )}

              <div className="pt-3 border-t border-[var(--border-primary)] flex justify-between items-center text-sm font-extrabold">
                <span className="text-[var(--text-primary)]">Total Amount Paid:</span>
                <span className="text-xl text-[var(--color-success)]">LKR {selectedReceiptModal.amount.toLocaleString()}</span>
              </div>
            </div>

            {/* QR Verification & Stamp */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[var(--bg-pill)] text-[11px]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-white p-1 border border-[var(--border-primary)] shrink-0">
                  <QrCode className="w-full h-full text-slate-900" />
                </div>
                <div>
                  <span className="font-bold text-[var(--text-primary)] block">Digital Verification Hash</span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-mono">0x8F92...A7E4 • Signed by SciEnce System</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-lg bg-[var(--color-success)]/20 text-[var(--color-success)] font-extrabold text-[10px] border border-[var(--color-success)]/30">
                VERIFIED STAMP
              </span>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row justify-between gap-3">
              <button
                onClick={() => {
                  const receiptText = `
===================================================
      SCIENCE ACADEMY - OFFICIAL TUITION RECEIPT
===================================================
Receipt #: ${selectedReceiptModal.invoiceNo}
Transaction Ref: ${selectedReceiptModal.transactionRef}
Date Paid: ${selectedReceiptModal.date} at ${selectedReceiptModal.time}

Student Name: ${studentName}
Stream: ${stream}
Subject: ${selectedReceiptModal.subject} (${selectedReceiptModal.teacher})
Period: ${selectedReceiptModal.month}
Payment Method: ${selectedReceiptModal.method}

Total Amount Paid: LKR ${selectedReceiptModal.amount.toLocaleString()}
Status: PAID & VERIFIED
===================================================
Thank you for learning with SciEnce Academy!
                  `;
                  const blob = new Blob([receiptText], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `Official_Receipt_${selectedReceiptModal.invoiceNo}.txt`;
                  a.click();
                  alert(`📥 Downloaded Official Receipt #${selectedReceiptModal.invoiceNo} PDF/Text document!`);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4 text-[var(--btn-primary-text)]" />
                <span>Download Official Receipt PDF</span>
              </button>

              <button
                onClick={() => setSelectedReceiptModal(null)}
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-xs font-bold hover:bg-[var(--btn-hover-overlay)] transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

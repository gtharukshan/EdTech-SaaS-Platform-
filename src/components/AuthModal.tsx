import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Calendar, 
  CreditCard, 
  MapPin, 
  School, 
  GraduationCap, 
  Users, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  BookOpen,
  Atom,
  Dna,
  Sun,
  Moon
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'register' | 'login';
  onNavigateToDashboard?: (profile: { name: string; stream: 'Physical Science' | 'Biological Science' }) => void;
  onNavigateToTeacherDashboard?: (teacherData: { name: string; subject: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'register',
  onNavigateToDashboard,
  onNavigateToTeacherDashboard,
}) => {
  const [mode, setMode] = useState<'register' | 'login'>(initialMode);
  const [userRole, setUserRole] = useState<'student' | 'teacher' | 'admin'>('student');
  const [modalStep, setModalStep] = useState<'role-selection' | 'portal-auth'>('role-selection');
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Form Fields State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    name: '',
    fullName: '',
    dob: '',
    nic: '',
    
    // Step 2: Contact & Address
    address: '',
    city: '',
    district: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',

    // Step 3: Academic
    school: '',
    alYear: '2026 A/L',
    alStream: 'Physical Science' as 'Physical Science' | 'Biological Science',
    medium: 'English Medium',

    // Step 4: Parent Details
    parentName: '',
    parentPhone: '',
    parentRelationship: 'Father',

    // Login fields
    loginIdentity: '',
    loginPassword: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      triggerCelebration();
      setIsSubmitted(true);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userRole === 'teacher') {
      resetModal();
      if (onNavigateToTeacherDashboard) {
        onNavigateToTeacherDashboard({
          name: 'Eng. R. Jeyakumar',
          subject: 'Combined Mathematics',
        });
      }
      return;
    }

    const identityName = formData.loginIdentity || (userRole === 'admin' ? 'Admin' : 'Student Candidate');
    setFormData(prev => ({
      ...prev,
      name: prev.name || identityName,
      fullName: prev.fullName || `${identityName} User`
    }));
    triggerCelebration();
    setIsSubmitted(true);
  };

  const handleFillDemoStudent = () => {
    setUserRole('student');
    setFormData(prev => ({
      ...prev,
      loginIdentity: 'student.candidate@gmail.com',
      loginPassword: '1234',
      name: 'Student Candidate',
      fullName: 'Kavindu Perera',
      alStream: 'Physical Science'
    }));
    resetModal();
    if (onNavigateToDashboard) {
      onNavigateToDashboard({ name: 'Kavindu Perera', stream: 'Physical Science' });
    }
  };

  const handleFillDemoTeacher = () => {
    setUserRole('teacher');
    setFormData(prev => ({
      ...prev,
      loginIdentity: 'teacher.jeyakumar@gmail.com',
      loginPassword: '1234',
      name: 'Eng. R. Jeyakumar',
    }));
    resetModal();
    if (onNavigateToTeacherDashboard) {
      onNavigateToTeacherDashboard({ name: 'Eng. R. Jeyakumar', subject: 'Combined Mathematics' });
    }
  };

  const handleFillDemoAdmin = () => {
    setUserRole('admin');
    setFormData(prev => ({
      ...prev,
      loginIdentity: 'admin.academy@gmail.com',
      loginPassword: '1234',
      name: 'Academy Administrator',
      fullName: 'System Admin',
      alStream: 'Physical Science'
    }));
    triggerCelebration();
    setIsSubmitted(true);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5D061', '#AA771C', '#FFFFFF'],
    });
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setModalStep('role-selection');
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl overflow-y-auto transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl rounded-3xl glass-panel border border-[var(--border-brand)] bg-[var(--bg-card)] p-6 sm:p-10 shadow-2xl my-8 text-[var(--text-primary)]"
      >
        {/* Top Controls: Theme Toggle & Close Button */}
        <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="p-2.5 rounded-full bg-[var(--bg-pill)] hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={resetModal}
            className="p-2.5 rounded-full bg-[var(--bg-pill)] hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: ROLE SELECTION ("Select your portal") */}
        {!isSubmitted && modalStep === 'role-selection' && (
          <div className="space-y-6 animate-fadeIn py-2 font-mono">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-bold">
              <Sparkles className="w-3.5 h-3.5" /> ACADEMY PORTAL DIRECTORY
            </div>

            <div>
              <h2 className="text-3xl font-black text-[var(--text-primary)] tracking-tight">
                Select your portal
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 font-sans">
                Choose your portal account type below to proceed to the login page.
              </p>
            </div>

            {/* 3 Portal Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Option 1: Student Portal */}
              <button
                type="button"
                onClick={() => {
                  setUserRole('student');
                  setModalStep('portal-auth');
                }}
                className="p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)] hover:bg-[var(--bg-pill)] transition-all text-left group shadow-sm hover:shadow-xl hover:scale-[1.03] space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-500 border border-blue-500/30 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-base font-extrabold text-[var(--text-primary)] block">1. Student Portal</span>
                  <span className="text-xs text-[var(--text-secondary)] block mt-1 font-sans">
                    Access live lectures, AI study companion, notes & past papers.
                  </span>
                </div>
                <div className="text-xs font-bold text-[var(--brand-primary)] flex items-center gap-1">
                  <span>Sign In as Student</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 2: Teacher Portal */}
              <button
                type="button"
                onClick={() => {
                  setUserRole('teacher');
                  setModalStep('portal-auth');
                }}
                className="p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)] hover:bg-[var(--bg-pill)] transition-all text-left group shadow-sm hover:shadow-xl hover:scale-[1.03] space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-500 border border-purple-500/30 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-base font-extrabold text-[var(--text-primary)] block">2. Teacher Portal</span>
                  <span className="text-xs text-[var(--text-secondary)] block mt-1 font-sans">
                    Manage subject streams, live classes, student homework & earnings.
                  </span>
                </div>
                <div className="text-xs font-bold text-purple-500 flex items-center gap-1">
                  <span>Sign In as Teacher</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 3: Admin Portal */}
              <button
                type="button"
                onClick={() => {
                  setUserRole('admin');
                  setModalStep('portal-auth');
                }}
                className="p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)] hover:bg-[var(--bg-pill)] transition-all text-left group shadow-sm hover:shadow-xl hover:scale-[1.03] space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-500 border border-amber-500/30 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-base font-extrabold text-[var(--text-primary)] block">3. Admin Portal</span>
                  <span className="text-xs text-[var(--text-secondary)] block mt-1 font-sans">
                    Institute administration, enrollment verification & permissions.
                  </span>
                </div>
                <div className="text-xs font-bold text-amber-500 flex items-center gap-1">
                  <span>Sign In as Admin</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: PORTAL AUTHENTICATION FORM */}
        {!isSubmitted && modalStep === 'portal-auth' && (
          <div className="mb-8">
            <button
              onClick={() => setModalStep('role-selection')}
              className="text-xs font-mono font-bold text-[var(--brand-gold-start)] hover:underline flex items-center gap-1.5 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portal Selection</span>
            </button>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-4 pr-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="uppercase">{userRole} Portal Admissions</span>
              </div>

              {/* Toggle Register vs Login */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-[var(--bg-pill)] border border-[var(--border-primary)]">
                <button
                  type="button"
                  onClick={() => { setMode('register'); setStep(1); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold font-mono transition-all ${
                    mode === 'register' 
                      ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] shadow-md' 
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Registration
                </button>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold font-mono transition-all ${
                    mode === 'login' 
                      ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] shadow-md' 
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  Sign In
                </button>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight capitalize">
              {mode === 'register' ? (
                <>Join Academy <span className="text-gradient-cyan">{userRole} Portal</span></>
              ) : (
                <>Welcome Back to <span className="text-gradient-cyan">{userRole} Portal</span></>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              {mode === 'register'
                ? `Complete your registration details to access the ${userRole} portal.`
                : `Enter your credentials to sign in to the ${userRole} portal.`}
            </p>

            {/* Step Progress Bar (For Registration Mode) */}
            {mode === 'register' && (
              <div className="mt-6 pt-4 border-t border-[var(--border-primary)] grid grid-cols-4 gap-2">
                {[
                  { num: 1, title: 'Personal Info' },
                  { num: 2, title: 'Contact & Address' },
                  { num: 3, title: 'Academic & Stream' },
                  { num: 4, title: 'Parent Details' }
                ].map((s) => (
                  <div key={s.num} className="flex flex-col gap-1">
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${
                      step >= s.num ? 'bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)]' : 'bg-[var(--bg-pill)]'
                    }`} />
                    <span className={`text-[10px] font-mono transition-colors ${
                      step === s.num ? 'text-[var(--brand-gold-start)] font-bold' : 'text-[var(--text-subtle)]'
                    }`}>
                      0{s.num}. {s.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MAIN BODY CONTENT (ONLY RENDER WHEN IN PORTAL-AUTH STEP OR SUBMITTED) */}
        {(modalStep === 'portal-auth' || isSubmitted) && (
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* SUCCESS REGISTRATION / LOGIN CONFIRMATION ID CARD */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 mx-auto mb-4 shadow-[0_0_30px_var(--shadow-glow)] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[var(--btn-primary-text)]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2">
                  {mode === 'register' ? 'Registration Successful!' : 'Welcome Back!'}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-8 font-mono">
                  Your student profile has been registered in the Academy Student System.
                </p>

                {/* Digital Student Pass Badge */}
                <div className="max-w-md mx-auto p-6 rounded-2xl glass-panel border border-[var(--border-brand)] bg-[var(--bg-card)] text-left relative overflow-hidden mb-8 shadow-xl">
                  <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-4 mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-[var(--brand-gold-start)] uppercase tracking-widest block font-bold">Official Student Pass</span>
                      <span className="text-lg font-bold text-[var(--text-primary)] tracking-wide">
                        {formData.name || 'Student Candidate'}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-bold">
                      {formData.alStream}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-[var(--text-secondary)]">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-subtle)]">Full Name:</span>
                      <span className="font-semibold text-[var(--text-primary)] truncate max-w-[200px]">{formData.fullName || formData.name || 'Student'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-subtle)]">NIC / ID:</span>
                      <span className="text-[var(--text-primary)]">{formData.nic || 'Registered'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-subtle)]">School:</span>
                      <span className="text-[var(--text-primary)] truncate max-w-[200px]">{formData.school || 'Academy Campus'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-subtle)]">A/L Year:</span>
                      <span className="text-[var(--brand-gold-start)] font-bold">{formData.alYear}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const studentName = formData.name || formData.fullName || 'Student Candidate';
                    const stream = formData.alStream || 'Physical Science';
                    resetModal();
                    if (onNavigateToDashboard) {
                      onNavigateToDashboard({ name: studentName, stream });
                    }
                  }}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs shadow-[0_0_25px_var(--shadow-glow)] hover:scale-105 transition-all font-mono"
                >
                  Go to Student Dashboard
                </button>
              </motion.div>
            ) : mode === 'login' ? (
              /* UNIFIED LOGIN FORM WITH ROLE SELECTOR & RELEVANT DEMO ACCOUNT */
              <motion.form
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleLoginSubmit}
                className="space-y-5"
              >
                {/* Role Selection Tabs */}
                <div className="space-y-1.5 font-mono">
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase">
                    Selected Portal Role <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setUserRole('student')}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        userRole === 'student'
                          ? 'bg-[var(--brand-primary)] text-white border-[var(--brand-primary)] shadow-md'
                          : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Users className="w-4 h-4" />
                      <span>Student</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserRole('teacher')}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        userRole === 'teacher'
                          ? 'bg-[var(--brand-primary)] text-white border-[var(--brand-primary)] shadow-md'
                          : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Teacher</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserRole('admin')}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        userRole === 'admin'
                          ? 'bg-[var(--brand-primary)] text-white border-[var(--brand-primary)] shadow-md'
                          : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Admin</span>
                    </button>
                  </div>
                </div>

                {/* Quick 1-Click Contextual Demo Account Bar */}
                <div className="p-3.5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-brand)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--brand-gold-start)]">
                    <Sparkles className="w-4 h-4 text-[var(--brand-gold-mid)] shrink-0" />
                    <span>⚡ 1-Click Demo Login ({userRole.toUpperCase()}):</span>
                  </div>

                  {userRole === 'teacher' && (
                    <button
                      type="button"
                      onClick={handleFillDemoTeacher}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-extrabold shadow-md hover:scale-105 transition-all shrink-0"
                    >
                      👨‍🏫 Demo Teacher (Eng. R. Jeyakumar)
                    </button>
                  )}

                  {userRole === 'student' && (
                    <button
                      type="button"
                      onClick={handleFillDemoStudent}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-extrabold shadow-md hover:scale-105 transition-all shrink-0"
                    >
                      🎓 Demo Student (Kavindu Perera)
                    </button>
                  )}

                  {userRole === 'admin' && (
                    <button
                      type="button"
                      onClick={handleFillDemoAdmin}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] text-xs font-extrabold shadow-md hover:scale-105 transition-all shrink-0"
                    >
                      🛡️ Demo Admin (System Admin)
                    </button>
                  )}
                </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                  Email / Mobile Number / NIC Number / Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter registered Email, Phone or NIC"
                    value={formData.loginIdentity}
                    onChange={(e) => updateField('loginIdentity', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.loginPassword}
                    onChange={(e) => updateField('loginPassword', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <label className="flex items-center gap-2 text-[var(--text-secondary)] cursor-pointer">
                  <input type="checkbox" className="rounded bg-[var(--bg-pill)] border-[var(--border-primary)] text-[var(--brand-gold-start)]" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[var(--brand-gold-start)] hover:underline font-bold">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs shadow-[0_0_20px_var(--shadow-glow)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-6"
              >
                <span>Login to Portal</span>
                <ArrowRight className="w-4 h-4 text-[var(--btn-primary-text)]" />
              </button>
            </motion.form>
          ) : (
            /* MULTI-STEP REGISTRATION FORM */
            <form onSubmit={handleNextStep}>
              <AnimatePresence mode="wait">
                
                {/* STEP 1: PERSONAL INFORMATION */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Name with Initials / Preferred Name <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. A.B.C. Perera"
                            value={formData.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Date of Birth <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            required
                            value={formData.dob}
                            onChange={(e) => updateField('dob', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                        Full Name (as in Birth Certificate) <span className="text-[var(--color-error)]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Enter your complete legal full name"
                          value={formData.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5 flex items-center justify-between">
                        <span>National Identity Card (NIC) Number</span>
                        <span className="text-[var(--text-subtle)] text-[10px]">(Optional / if available)</span>
                      </label>
                      <div className="relative">
                        <CreditCard className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. 200512345678 or 991234567V"
                          value={formData.nic}
                          onChange={(e) => updateField('nic', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: CONTACT & ADDRESS DETAILS */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                        Permanent Address <span className="text-[var(--color-error)]">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-3" />
                        <textarea
                          required
                          rows={2}
                          placeholder="House No, Street, City / District"
                          value={formData.address}
                          onChange={(e) => updateField('address', e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Student Contact / Mobile No. <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="077 123 4567"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Email Address <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            placeholder="student@example.com"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Create Password <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => updateField('password', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Confirm Password <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={(e) => updateField('confirmPassword', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: ACADEMIC DETAILS & A/L STREAM */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          School Name & Town <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <School className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Royal College, Colombo"
                            value={formData.school}
                            onChange={(e) => updateField('school', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          A/L Examination Year <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <select
                          value={formData.alYear}
                          onChange={(e) => updateField('alYear', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                        >
                          <option value="2025 A/L" className="bg-[var(--bg-card)] text-[var(--text-primary)]">2025 A/L Batch</option>
                          <option value="2026 A/L" className="bg-[var(--bg-card)] text-[var(--text-primary)]">2026 A/L Batch</option>
                          <option value="2027 A/L" className="bg-[var(--bg-card)] text-[var(--text-primary)]">2027 A/L Batch</option>
                          <option value="Repeat / Revision" className="bg-[var(--bg-card)] text-[var(--text-primary)]">Repeat / Revision Candidate</option>
                        </select>
                      </div>
                    </div>

                    {/* A/L STREAM SELECTOR CARDS */}
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-2">
                        Select Advanced Level (A/L) Stream <span className="text-[var(--color-error)]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Physical Science Option */}
                        <div
                          onClick={() => updateField('alStream', 'Physical Science')}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                            formData.alStream === 'Physical Science'
                              ? 'border-[var(--border-brand)] bg-[var(--bg-pill)] shadow-md'
                              : 'border-[var(--border-primary)] bg-[var(--bg-card)]'
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl shrink-0 ${
                            formData.alStream === 'Physical Science' ? 'bg-[var(--brand-gold-start)] text-[var(--btn-primary-text)] font-bold' : 'bg-[var(--bg-pill)] text-[var(--text-primary)]'
                          }`}>
                            <Atom className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[var(--text-primary)] mb-0.5">Physical Science</h4>
                            <p className="text-[11px] text-[var(--text-secondary)] font-mono">
                              Combined Mathematics, Physics & Chemistry
                            </p>
                          </div>
                        </div>

                        {/* Biological Science Option */}
                        <div
                          onClick={() => updateField('alStream', 'Biological Science')}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                            formData.alStream === 'Biological Science'
                              ? 'border-[var(--border-brand)] bg-[var(--bg-pill)] shadow-md'
                              : 'border-[var(--border-primary)] bg-[var(--bg-card)]'
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl shrink-0 ${
                            formData.alStream === 'Biological Science' ? 'bg-[var(--brand-gold-start)] text-[var(--btn-primary-text)] font-bold' : 'bg-[var(--bg-pill)] text-[var(--text-primary)]'
                          }`}>
                            <Dna className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[var(--text-primary)] mb-0.5">Biological Science</h4>
                            <p className="text-[11px] text-[var(--text-secondary)] font-mono">
                              Biology, Chemistry & Physics
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                        Preferred Learning Medium
                      </label>
                      <div className="flex items-center gap-4 font-mono text-xs text-[var(--text-primary)]">
                        {['English Medium', 'Tamil Medium', 'Sinhala Medium'].map((m) => (
                          <label key={m} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="medium"
                              value={m}
                              checked={formData.medium === m}
                              onChange={(e) => updateField('medium', e.target.value)}
                              className="text-[var(--brand-gold-start)]"
                            />
                            <span>{m}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: PARENT / GUARDIAN DETAILS */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                        Parent / Guardian Full Name <span className="text-[var(--color-error)]">*</span>
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Enter parent's full name"
                          value={formData.parentName}
                          onChange={(e) => updateField('parentName', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Parent Contact / Mobile No. <span className="text-[var(--color-error)]">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="071 234 5678"
                            value={formData.parentPhone}
                            onChange={(e) => updateField('parentPhone', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                          Relationship / Occupation
                        </label>
                        <select
                          value={formData.parentRelationship}
                          onChange={(e) => updateField('parentRelationship', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--border-brand)] font-mono"
                        >
                          <option value="Father" className="bg-[var(--bg-card)] text-[var(--text-primary)]">Father</option>
                          <option value="Mother" className="bg-[var(--bg-card)] text-[var(--text-primary)]">Mother</option>
                          <option value="Guardian" className="bg-[var(--bg-card)] text-[var(--text-primary)]">Guardian</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] text-xs text-[var(--text-secondary)] font-mono flex items-start gap-2.5 mt-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--brand-gold-start)] shrink-0 mt-0.5" />
                      <span>
                        By submitting this application, you confirm that all provided personal and parent information is accurate as per official records.
                      </span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Action Navigation Buttons */}
              <div className="pt-6 mt-6 border-t border-[var(--border-primary)] flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--btn-hover-overlay)] text-[var(--text-primary)] font-mono text-xs transition-all flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] font-extrabold text-xs shadow-[0_0_20px_var(--shadow-glow)] hover:scale-[1.02] transition-all flex items-center gap-2 font-mono"
                >
                  <span>{step === 4 ? 'Submit Student Application' : 'Continue to Next Step'}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--btn-primary-text)]" />
                </button>
              </div>
            </form>
          )}
        </AnimatePresence>
        )}

      </motion.div>
    </div>
  );
};

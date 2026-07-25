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
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'register',
  onNavigateToDashboard,
}) => {
  const [mode, setMode] = useState<'register' | 'login'>(initialMode);
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
    const identityName = formData.loginIdentity || 'Admin';
    setFormData(prev => ({
      ...prev,
      name: prev.name || identityName,
      fullName: prev.fullName || `${identityName} User`
    }));
    triggerCelebration();
    setIsSubmitted(true);
  };

  const handleFillDemoAdmin = () => {
    setFormData(prev => ({
      ...prev,
      loginIdentity: 'Admin',
      loginPassword: '1234',
      name: 'Admin',
      fullName: 'Admin Administrator',
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
      colors: ['#0050FF', '#00D6FF', '#70CFFF', '#FFFFFF'],
    });
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 dark:bg-black/85 backdrop-blur-xl overflow-y-auto transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl rounded-3xl glass-panel border border-slate-200 dark:border-[#00D6FF]/40 bg-white dark:bg-[#08090E] p-6 sm:p-10 shadow-2xl dark:shadow-[0_0_80px_rgba(0,214,255,0.25)] my-8 text-slate-900 dark:text-white"
      >
        {/* Top Controls: Theme Toggle & Close Button */}
        <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-amber-300 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>

          <button
            onClick={resetModal}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Header & Mode Switcher */}
        {!isSubmitted && (
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4 pr-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#0050FF]/10 dark:bg-[#00D6FF]/15 text-[#0050FF] dark:text-[#00D6FF] border border-[#0050FF]/30 dark:border-[#00D6FF]/30 font-semibold">
                <GraduationCap className="w-3.5 h-3.5" /> ACADEMY ADMISSIONS PORTAL
              </div>

              {/* Toggle Register vs Login */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => { setMode('register'); setStep(1); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                    mode === 'register' 
                      ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white shadow-md' 
                      : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Student Registration
                </button>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                    mode === 'login' 
                      ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white shadow-md' 
                      : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Student Login
                </button>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {mode === 'register' ? (
                <>Join Academy <span className="text-gradient-cyan">Student Portal</span></>
              ) : (
                <>Welcome Back to <span className="text-gradient-cyan">Academy</span></>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 mt-1">
              {mode === 'register'
                ? 'Complete your registration details to access live classes, AI tutoring, and syllabus modules.'
                : 'Enter your account credentials to access your student dashboard and learning resources.'}
            </p>

            {/* Step Progress Bar (For Registration Mode) */}
            {mode === 'register' && (
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-4 gap-2">
                {[
                  { num: 1, title: 'Personal Info' },
                  { num: 2, title: 'Contact & Address' },
                  { num: 3, title: 'Academic & Stream' },
                  { num: 4, title: 'Parent Details' }
                ].map((s) => (
                  <div key={s.num} className="flex flex-col gap-1">
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${
                      step >= s.num ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF]' : 'bg-slate-200 dark:bg-white/10'
                    }`} />
                    <span className={`text-[10px] font-mono transition-colors ${
                      step === s.num ? 'text-[#0050FF] dark:text-[#00D6FF] font-bold' : 'text-slate-400 dark:text-white/40'
                    }`}>
                      0{s.num}. {s.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MAIN BODY CONTENT */}
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-0.5 mx-auto mb-4 shadow-[0_0_30px_rgba(0,214,255,0.4)] flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                {mode === 'register' ? 'Registration Successful!' : 'Welcome Back!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 max-w-md mx-auto mb-8 font-mono">
                Your student profile has been registered in the Academy Student System.
              </p>

              {/* Digital Student Pass Badge */}
              <div className="max-w-md mx-auto p-6 rounded-2xl glass-panel border border-[#00D6FF]/40 bg-gradient-to-br from-[#0050FF]/15 via-[#00D6FF]/10 to-transparent text-left relative overflow-hidden mb-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#0050FF] dark:text-[#00D6FF] uppercase tracking-widest block font-bold">Official Student Pass</span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                      {formData.name || 'Student Candidate'}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#00D6FF]/20 text-[#0050FF] dark:text-[#00D6FF] border border-[#00D6FF]/30 font-bold">
                    {formData.alStream}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-700 dark:text-white/80">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-white/50">Full Name:</span>
                    <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">{formData.fullName || formData.name || 'Student'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-white/50">NIC / ID:</span>
                    <span className="text-slate-900 dark:text-white">{formData.nic || 'Registered'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-white/50">School:</span>
                    <span className="text-slate-900 dark:text-white truncate max-w-[200px]">{formData.school || 'Academy Campus'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-white/50">A/L Year:</span>
                    <span className="text-[#0050FF] dark:text-[#00D6FF] font-bold">{formData.alYear}</span>
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
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-semibold text-xs shadow-[0_0_25px_rgba(0,214,255,0.4)] hover:scale-105 transition-all font-mono"
              >
                Go to Student Dashboard
              </button>
            </motion.div>
          ) : mode === 'login' ? (
            /* STUDENT LOGIN FORM */
            <motion.form
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleLoginSubmit}
              className="space-y-4"
            >
              {/* Demo Testing Credentials Banner & Quick Fill Button */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span><strong>Testing Account:</strong> User: <code className="px-1.5 py-0.5 rounded bg-amber-500/20 text-slate-900 dark:text-white font-bold">Admin</code> | Pass: <code className="px-1.5 py-0.5 rounded bg-amber-500/20 text-slate-900 dark:text-white font-bold">1234</code></span>
                </div>
                <button
                  type="button"
                  onClick={handleFillDemoAdmin}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-[11px] shadow hover:scale-105 transition-all shrink-0"
                >
                  ⚡ 1-Click Demo Login
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                  Email / Mobile Number / NIC Number / Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter registered Email, Phone or NIC"
                    value={formData.loginIdentity}
                    onChange={(e) => updateField('loginIdentity', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.loginPassword}
                    onChange={(e) => updateField('loginPassword', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <label className="flex items-center gap-2 text-slate-600 dark:text-white/60 cursor-pointer">
                  <input type="checkbox" className="rounded bg-slate-200 dark:bg-white/10 border-slate-300 dark:border-white/20 text-[#0050FF] dark:text-[#00D6FF]" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#0050FF] dark:text-[#00D6FF] hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:from-[#0050FF] hover:to-[#70CFFF] text-white font-semibold text-xs shadow-[0_0_20px_rgba(0,214,255,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-6"
              >
                <span>Login to Portal</span>
                <ArrowRight className="w-4 h-4" />
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
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Name with Initials / Preferred Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. A.B.C. Perera"
                            value={formData.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            required
                            value={formData.dob}
                            onChange={(e) => updateField('dob', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                        Full Name (as in Birth Certificate) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Enter your complete legal full name"
                          value={formData.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5 flex items-center justify-between">
                        <span>National Identity Card (NIC) Number</span>
                        <span className="text-slate-400 dark:text-white/40 text-[10px]">(Optional / if available)</span>
                      </label>
                      <div className="relative">
                        <CreditCard className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. 200512345678 or 991234567V"
                          value={formData.nic}
                          onChange={(e) => updateField('nic', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
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
                      <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                        Permanent Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-3" />
                        <textarea
                          required
                          rows={2}
                          placeholder="House No, Street, City / District"
                          value={formData.address}
                          onChange={(e) => updateField('address', e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Student Contact / Mobile No. <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="077 123 4567"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            placeholder="student@example.com"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Create Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => updateField('password', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Confirm Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="password"
                            required
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={(e) => updateField('confirmPassword', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
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
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          School Name & Town <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <School className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Royal College, Colombo"
                            value={formData.school}
                            onChange={(e) => updateField('school', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          A/L Examination Year <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.alYear}
                          onChange={(e) => updateField('alYear', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#0F111A] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                        >
                          <option value="2025 A/L" className="bg-white text-slate-900 dark:bg-[#0F111A] dark:text-white">2025 A/L Batch</option>
                          <option value="2026 A/L" className="bg-white text-slate-900 dark:bg-[#0F111A] dark:text-white">2026 A/L Batch</option>
                          <option value="2027 A/L" className="bg-white text-slate-900 dark:bg-[#0F111A] dark:text-white">2027 A/L Batch</option>
                          <option value="Repeat / Revision" className="bg-white text-slate-900 dark:bg-[#0F111A] dark:text-white">Repeat / Revision Candidate</option>
                        </select>
                      </div>
                    </div>

                    {/* A/L STREAM SELECTOR CARDS */}
                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-2">
                        Select Advanced Level (A/L) Stream <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Physical Science Option */}
                        <div
                          onClick={() => updateField('alStream', 'Physical Science')}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                            formData.alStream === 'Physical Science'
                              ? 'border-[#0050FF] dark:border-[#00D6FF] bg-[#0050FF]/15 dark:bg-[#0050FF]/20 shadow-md dark:shadow-[0_0_20px_rgba(0,214,255,0.3)]'
                              : 'border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] hover:border-slate-300 dark:hover:border-white/30'
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl shrink-0 ${
                            formData.alStream === 'Physical Science' ? 'bg-[#0050FF] dark:bg-[#00D6FF] text-white dark:text-black' : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white'
                          }`}>
                            <Atom className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Physical Science</h4>
                            <p className="text-[11px] text-slate-600 dark:text-white/60 font-mono">
                              Combined Mathematics, Physics & Chemistry
                            </p>
                          </div>
                        </div>

                        {/* Biological Science Option */}
                        <div
                          onClick={() => updateField('alStream', 'Biological Science')}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                            formData.alStream === 'Biological Science'
                              ? 'border-[#0050FF] dark:border-[#00D6FF] bg-[#00D6FF]/15 dark:bg-[#00D6FF]/20 shadow-md dark:shadow-[0_0_20px_rgba(0,214,255,0.3)]'
                              : 'border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] hover:border-slate-300 dark:hover:border-white/30'
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl shrink-0 ${
                            formData.alStream === 'Biological Science' ? 'bg-[#0050FF] dark:bg-[#00D6FF] text-white dark:text-black' : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white'
                          }`}>
                            <Dna className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Biological Science</h4>
                            <p className="text-[11px] text-slate-600 dark:text-white/60 font-mono">
                              Biology, Chemistry & Physics
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                        Preferred Learning Medium
                      </label>
                      <div className="flex items-center gap-4 font-mono text-xs text-slate-800 dark:text-white/80">
                        {['English Medium', 'Tamil Medium', 'Sinhala Medium'].map((m) => (
                          <label key={m} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="medium"
                              value={m}
                              checked={formData.medium === m}
                              onChange={(e) => updateField('medium', e.target.value)}
                              className="text-[#0050FF] dark:text-[#00D6FF]"
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
                      <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                        Parent / Guardian Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Enter parent's full name"
                          value={formData.parentName}
                          onChange={(e) => updateField('parentName', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Parent Contact / Mobile No. <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="071 234 5678"
                            value={formData.parentPhone}
                            onChange={(e) => updateField('parentPhone', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-white/70 mb-1.5">
                          Relationship / Occupation
                        </label>
                        <select
                          value={formData.parentRelationship}
                          onChange={(e) => updateField('parentRelationship', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-[#0F111A] border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#0050FF] dark:focus:border-[#00D6FF] font-mono"
                        >
                          <option value="Father" className="bg-white text-slate-900 dark:bg-[#0F111A] dark:text-white">Father</option>
                          <option value="Mother" className="bg-white text-slate-900 dark:bg-[#0F111A] dark:text-white">Mother</option>
                          <option value="Guardian" className="bg-white text-slate-900 dark:bg-[#0F111A] dark:text-white">Guardian</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-white/60 font-mono flex items-start gap-2.5 mt-2">
                      <ShieldCheck className="w-4 h-4 text-[#0050FF] dark:text-[#00D6FF] shrink-0 mt-0.5" />
                      <span>
                        By submitting this application, you confirm that all provided personal and parent information is accurate as per official records.
                      </span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Action Navigation Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-mono text-xs transition-all flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:from-[#0050FF] hover:to-[#70CFFF] text-white font-semibold text-xs shadow-[0_0_20px_rgba(0,214,255,0.4)] hover:scale-[1.02] transition-all flex items-center gap-2 font-mono"
                >
                  <span>{step === 4 ? 'Submit Student Application' : 'Continue to Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
};

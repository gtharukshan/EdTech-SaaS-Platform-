import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  ShieldAlert,
  ArrowLeft,
  Mail,
  Lock,
  LogIn,
  UserPlus,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { TeacherSignupStepper } from './TeacherSignupStepper';
import { Step1Data } from './TeacherProfileStep';
import { Step2Data } from './TeacherAccountStep';

export type PortalType = 'admin' | 'teacher' | 'student';

interface TeacherAuthProps {
  onNavigateHome: () => void;
  onNavigateToStudentPortal: () => void;
  onTeacherLoginSuccess: (teacherData: { name: string; subject: string }) => void;
}

export const TeacherAuth: React.FC<TeacherAuthProps> = ({
  onNavigateHome,
  onNavigateToStudentPortal,
  onTeacherLoginSuccess,
}) => {
  const [selectedPortal, setSelectedPortal] = useState<PortalType>('teacher');
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('signup');

  // Teacher Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setLoginError('Please enter both email address and password');
      return;
    }
    setLoginError('');
    onTeacherLoginSuccess({
      name: 'Eng. R. Jeyakumar',
      subject: 'Combined Mathematics',
    });
  };

  const handleSignupComplete = (data: Step1Data & Step2Data) => {
    onTeacherLoginSuccess({
      name: data.fullName,
      subject: data.subject || 'Combined Mathematics',
    });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 py-12 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--brand-primary)]/15 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar Navigation */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 mb-8">
        <button
          onClick={onNavigateHome}
          className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] text-xs font-bold transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Landing Page</span>
        </button>

        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-[var(--brand-primary)]" />
          <span className="font-extrabold text-base tracking-tight hidden sm:inline">
            Apex Academy Teacher Portal
          </span>
        </div>
      </div>

      {/* PORTAL TYPE SELECTION WIZARD */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-brand)] inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Select Portal Access Type
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight">
          Academy Educator & Administrative Access
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          Select your verified platform portal to continue to dashboard management.
        </p>

        {/* 3 Portal Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 font-mono">
          {/* Option 1: Admin Portal */}
          <button
            type="button"
            onClick={() => setSelectedPortal('admin')}
            className={`p-4 rounded-2xl border transition-all text-left flex items-center sm:flex-col sm:items-start justify-between gap-3 ${
              selectedPortal === 'admin'
                ? 'bg-[var(--bg-pill)] border-[var(--brand-primary)] ring-2 ring-[var(--brand-glow)] shadow-md'
                : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:bg-[var(--btn-hover-overlay)] opacity-70'
            }`}
          >
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-extrabold text-[var(--text-primary)] block">1. Admin Portal</span>
              <span className="text-[11px] text-[var(--text-secondary)]">Institute Management</span>
            </div>
          </button>

          {/* Option 2: Teacher Portal (Active) */}
          <button
            type="button"
            onClick={() => setSelectedPortal('teacher')}
            className={`p-4 rounded-2xl border transition-all text-left flex items-center sm:flex-col sm:items-start justify-between gap-3 ${
              selectedPortal === 'teacher'
                ? 'bg-[var(--bg-pill)] border-[var(--brand-primary)] ring-2 ring-[var(--brand-glow)] shadow-md'
                : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:bg-[var(--btn-hover-overlay)]'
            }`}
          >
            <div className="p-2.5 rounded-xl bg-[var(--brand-primary)]/15 text-[var(--brand-primary)] border border-[var(--border-brand)]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-extrabold text-[var(--text-primary)] block">2. Teacher Portal</span>
              <span className="text-[11px] text-[var(--text-secondary)]">Subject Educator Suite</span>
            </div>
          </button>

          {/* Option 3: Student Portal */}
          <button
            type="button"
            onClick={() => {
              setSelectedPortal('student');
              onNavigateToStudentPortal();
            }}
            className={`p-4 rounded-2xl border transition-all text-left flex items-center sm:flex-col sm:items-start justify-between gap-3 ${
              selectedPortal === 'student'
                ? 'bg-[var(--bg-pill)] border-[var(--brand-primary)] ring-2 ring-[var(--brand-glow)] shadow-md'
                : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:bg-[var(--btn-hover-overlay)] opacity-70'
            }`}
          >
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-extrabold text-[var(--text-primary)] block">3. Student Portal</span>
              <span className="text-[11px] text-[var(--text-secondary)]">Learner Dashboard</span>
            </div>
          </button>
        </div>
      </div>

      {/* ADMIN PORTAL NOTICE */}
      {selectedPortal === 'admin' && (
        <div className="max-w-2xl mx-auto p-6 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-xl text-center space-y-4 font-mono">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 border border-purple-500/20 w-fit mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Admin Portal Protected Entry</h3>
          <p className="text-xs text-[var(--text-secondary)]">
            Super administrative access requires multi-factor Hardware Key authentication. Please contact system engineering.
          </p>
          <button
            onClick={() => setSelectedPortal('teacher')}
            className="px-5 py-2.5 rounded-xl bg-[var(--brand-primary)] text-white text-xs font-bold"
          >
            Switch back to Teacher Portal
          </button>
        </div>
      )}

      {/* TEACHER PORTAL MAIN MODULE */}
      {selectedPortal === 'teacher' && (
        <div className="max-w-2xl mx-auto">
          {/* Login vs Signup Tab Switcher */}
          <div className="flex rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] p-1.5 mb-8 max-w-md mx-auto font-mono">
            <button
              onClick={() => setAuthTab('signup')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                authTab === 'signup'
                  ? 'bg-[var(--brand-primary)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Teacher Multi-Step Signup</span>
            </button>

            <button
              onClick={() => setAuthTab('login')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                authTab === 'login'
                  ? 'bg-[var(--brand-primary)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Teacher Login</span>
            </button>
          </div>

          {/* TAB 1: TEACHER SIGNUP STEPPER */}
          {authTab === 'signup' && (
            <TeacherSignupStepper onComplete={handleSignupComplete} />
          )}

          {/* TAB 2: TEACHER LOGIN FORM */}
          {authTab === 'login' && (
            <div className="p-6 sm:p-8 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xl space-y-6">
              <div className="border-b border-[var(--border-primary)] pb-4 text-center">
                <div className="p-3 rounded-2xl bg-[var(--bg-pill)] text-[var(--brand-primary)] w-fit mx-auto mb-2 border border-[var(--border-brand)]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-extrabold text-[var(--text-primary)]">Teacher Portal Sign In</h2>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Enter your registered Gmail and password to access your teaching dashboard.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-5 font-sans">
                {loginError && (
                  <div className="p-3 rounded-xl bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 text-[var(--color-error)] text-xs font-semibold flex items-center gap-2">
                    <span>⚠️</span>
                    <span>{loginError}</span>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase">
                    Teacher Gmail Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4.5 h-4.5 text-[var(--text-muted)] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. teacher.jeyakumar@gmail.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full rounded-xl bg-[var(--bg-surface)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm py-3 pl-10 pr-3.5 outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-glow)] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase">
                      Password
                    </label>
                    <a href="#" className="text-xs text-[var(--brand-primary)] hover:underline font-semibold">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4.5 h-4.5 text-[var(--text-muted)] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full rounded-xl bg-[var(--bg-surface)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm py-3 pl-10 pr-3.5 outline-none focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-glow)] transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-[var(--btn-primary-text)] font-extrabold text-sm shadow-lg shadow-[var(--brand-glow)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Access Educator Dashboard</span>
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

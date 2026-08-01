import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CinematicScrollStory } from './components/CinematicScrollStory';
import { FeatureCards } from './components/FeatureCards';
import { CourseShowcase } from './components/CourseShowcase';
import { AiTutorDemo } from './components/AiTutorDemo';
import { AiDashboardShowcase } from './components/AiDashboardShowcase';
import { TeacherSection } from './components/TeacherSection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { StudentDashboard } from './components/StudentDashboard';
import { TeacherAuth } from './teacher/TeacherAuth';
import { TeacherDashboard } from './teacher/TeacherDashboard';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'student-dashboard' | 'teacher-dashboard' | 'teacher-auth'>('landing');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register');

  const [studentProfile, setStudentProfile] = useState<{
    name: string;
    stream: 'Physical Science' | 'Biological Science';
  }>({
    name: 'Student Candidate',
    stream: 'Physical Science',
  });

  const [teacherProfile, setTeacherProfile] = useState<{
    name: string;
    subject: string;
  }>({
    name: 'Eng. R. Jeyakumar',
    subject: 'Combined Mathematics',
  });

  const openAuth = (mode: 'register' | 'login' = 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleNavigateToStudentDashboard = (profile: { name: string; stream: 'Physical Science' | 'Biological Science' }) => {
    setStudentProfile(profile);
    setCurrentView('student-dashboard');
  };

  const handleNavigateToTeacherDashboard = (teacherData: { name: string; subject: string }) => {
    setTeacherProfile(teacherData);
    setCurrentView('teacher-dashboard');
  };

  // IF TEACHER AUTH VIEW IS SELECTED -> RENDER TEACHER PORTAL ONBOARDING MODULE!
  if (currentView === 'teacher-auth') {
    return (
      <TeacherAuth
        onNavigateHome={() => setCurrentView('landing')}
        onNavigateToStudentPortal={() => {
          openAuth('login');
          setCurrentView('landing');
        }}
        onTeacherLoginSuccess={(teacherData) => {
          setTeacherProfile(teacherData);
          setCurrentView('teacher-dashboard');
        }}
      />
    );
  }

  // IF TEACHER IS IN DASHBOARD VIEW -> RENDER DEDICATED TEACHER PORTAL DASHBOARD!
  if (currentView === 'teacher-dashboard') {
    return (
      <TeacherDashboard
        teacherName={teacherProfile.name}
        subject={teacherProfile.subject}
        onNavigateHome={() => setCurrentView('landing')}
      />
    );
  }

  // IF STUDENT IS IN DASHBOARD VIEW -> RENDER DEDICATED STUDENT HOME / DASHBOARD PAGE!
  if (currentView === 'student-dashboard') {
    return (
      <StudentDashboard
        studentName={studentProfile.name}
        stream={studentProfile.stream}
        onNavigateHome={() => setCurrentView('landing')}
      />
    );
  }

  // OTHERWISE -> RENDER MAIN LANDING PAGE VIEW
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenAuth={openAuth}
        onOpenTeacherPortal={() => setCurrentView('teacher-auth')}
      />

      {/* Main Content Sections */}
      <main>
        {/* 01: Hero Section */}
        <Hero onOpenAuth={openAuth} />

        {/* 02: Cinematic Parallax Scroll Story */}
        <CinematicScrollStory />

        {/* 03: Feature Cards */}
        <FeatureCards />

        {/* 04: Course Catalog */}
        <CourseShowcase onOpenAuth={openAuth} />

        {/* 05: Live Interactive AI Tutor Prompt */}
        <AiTutorDemo />

        {/* 06: Student Neural Dashboard Showcase */}
        <AiDashboardShowcase />

        {/* 07: Master Educator Profiles */}
        <TeacherSection />

        {/* 08: Testimonials */}
        <Testimonials />

        {/* 09: Pricing Plans */}
        <Pricing onOpenAuth={openAuth} />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Unified Registration & Login Portal Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onNavigateToDashboard={handleNavigateToStudentDashboard}
        onNavigateToTeacherDashboard={handleNavigateToTeacherDashboard}
      />
    </div>
  );
}

export default App;



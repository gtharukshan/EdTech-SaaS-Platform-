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

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register');

  const [studentProfile, setStudentProfile] = useState<{
    name: string;
    stream: 'Physical Science' | 'Biological Science';
  }>({
    name: 'Student Candidate',
    stream: 'Physical Science',
  });

  const openAuth = (mode: 'register' | 'login' = 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleNavigateToDashboard = (profile: { name: string; stream: 'Physical Science' | 'Biological Science' }) => {
    setStudentProfile(profile);
    setCurrentView('dashboard');
  };

  // IF STUDENT IS IN DASHBOARD VIEW -> RENDER DEDICATED STUDENT HOME / DASHBOARD PAGE!
  if (currentView === 'dashboard') {
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
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-white selection:bg-[#D4AF37]/30 selection:text-[#F5D061] transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenAuth={openAuth} />

      {/* Main Content Sections */}
      <main>
        {/* 01: Hero Section with 3D Book Floating Visual */}
        <Hero onOpenAuth={openAuth} />

        {/* 02: Core 400vh Scroll-Linked Canvas Storytelling */}
        <CinematicScrollStory />

        {/* 03: 4 Glassmorphism Feature Cards */}
        <FeatureCards />

        {/* 04: Course Catalog & Interactive Syllabus Modal */}
        <CourseShowcase onOpenAuth={openAuth} />

        {/* 05: Live Interactive AI Tutor Prompt & Reasoning Demo */}
        <AiTutorDemo />

        {/* 06: Student Neural Dashboard Showcase */}
        <AiDashboardShowcase />

        {/* 07: Master Educator Profiles */}
        <TeacherSection />

        {/* 08: Student Success Testimonials */}
        <Testimonials />

        {/* 09: Membership Pricing Plans */}
        <Pricing onOpenAuth={openAuth} />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Interactive Registration & Login Portal Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onNavigateToDashboard={handleNavigateToDashboard}
      />
    </div>
  );
}

export default App;



import React from 'react';
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

export function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00D6FF]/30 selection:text-[#00D6FF]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 01: Hero Section with 3D Book Floating Visual */}
        <Hero />

        {/* 02: Core 400vh Scroll-Linked Canvas Storytelling */}
        <CinematicScrollStory />

        {/* 03: 4 Glassmorphism Feature Cards */}
        <FeatureCards />

        {/* 04: Course Catalog & Interactive Syllabus Modal */}
        <CourseShowcase />

        {/* 05: Live Interactive AI Tutor Prompt & Reasoning Demo */}
        <AiTutorDemo />

        {/* 06: Student Neural Dashboard Showcase */}
        <AiDashboardShowcase />

        {/* 07: Master Educator Profiles */}
        <TeacherSection />

        {/* 08: Student Success Testimonials */}
        <Testimonials />

        {/* 09: Membership Pricing Plans */}
        <Pricing />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />
    </div>
  );
}

export default App;

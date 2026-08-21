import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ImpactMetrics } from './components/ImpactMetrics';
import { Toolbox } from './components/Toolbox';
import { SelectedWorks } from './components/SelectedWorks';
import { SideProjects } from './components/SideProjects';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { SideProjectModal } from './components/SideProjectModal';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Project, SideProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSideProject, setSelectedSideProject] = useState<SideProject | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-[#191c1e] relative selection:bg-[#944a00]/20 selection:text-[#713700]">
      {/* Ambient Canvas Background */}
      <BackgroundEffect />

      {/* Top Fixed Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Hero Section */}
        <Hero
          onContactClick={scrollToContact}
          onWorkClick={scrollToWork}
        />

        {/* About Section */}
        <About />

        {/* Impact & Scale Metrics */}
        <ImpactMetrics />

        {/* Toolbox / Tech Stack */}
        <Toolbox />

        {/* Selected Works Projects */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* Side Projects Grid */}
        <SideProjects
          onSelectSideProject={(project) => setSelectedSideProject(project)}
        />

        {/* Reach Out / Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Side Project Modal */}
      <SideProjectModal
        project={selectedSideProject}
        onClose={() => setSelectedSideProject(null)}
      />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoomSpotlight from './components/LoomSpotlight';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import { PROFILE } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <LoomSpotlight />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      <footer className="py-8 border-t border-slate-200 dark:border-slate-800/80 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind CSS & Vite.
          </p>
          <p className="font-mono">
            Frontend • Mobile (Flutter) • DevOps (Systems Ltd Lahore)
          </p>
        </div>
      </footer>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

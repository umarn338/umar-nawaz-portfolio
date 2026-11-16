import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import {
  PROFILE,
  EXPERIENCES,
  PROJECTS,
  EDUCATION,
  LANGUAGES,
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden my-8 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (Hidden when printing) */}
        <div className="no-print px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Updated Master CV (2026)
            </span>
            <p className="text-xs text-slate-300">
              Includes Systems Limited (Lahore) DevOps Internship & Loom & Label Project
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <a
              href={PROFILE.resumeUrl}
              download="Umar_Nawaz_Original_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Original PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Sheet */}
        <div className="p-6 sm:p-10 space-y-6 max-h-[82vh] overflow-y-auto font-sans text-slate-800">
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-5">
            <h1 className="text-3xl font-bold tracking-wide uppercase text-slate-900">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Islamabad / Lahore, Pakistan
            </p>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              {PROFILE.email} | {PROFILE.phone} | {PROFILE.githubHandle} |{' '}
              {PROFILE.linkedinHandle}
            </p>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
              {PROFILE.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">
                      {exp.role} —{' '}
                      <span className="italic font-medium">{exp.company}, {exp.location}</span>
                    </h3>
                    <span className="text-xs font-semibold text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1.5 text-xs sm:text-sm text-slate-700">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-3.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">
                      {proj.title} |{' '}
                      <span className="font-semibold text-slate-700">
                        {proj.tech.slice(0, 4).join(', ')}
                      </span>
                    </h3>
                    <span className="text-xs text-slate-500">{proj.status}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-xs sm:text-sm text-slate-700">
                    {proj.highlights.slice(0, 4).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>Frontend & Mobile:</strong> JavaScript (ES6+), React.js,
                Flutter, Dart, HTML5, CSS3, Tailwind CSS, Vite
              </p>
              <p>
                <strong>DevOps & Cloud:</strong> CI/CD Pipelines, GitHub Actions,
                Docker, Linux CLI, Cloud Deployment, Release Automation
              </p>
              <p>
                <strong>Backend & Databases:</strong> Supabase, Firebase (Auth &
                Firestore), Node.js, Express.js, PostgreSQL, MongoDB, Prisma
              </p>
              <p>
                <strong>Tools & Core Concepts:</strong> Git, GitHub, VS Code,
                Android Studio, Responsive Design, REST API Integration, State
                Management, Performance Optimization, AI Tools (Claude, ChatGPT)
              </p>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              <p className="text-sm font-bold text-slate-900">
                {EDUCATION.degree}
              </p>
              <p className="text-xs text-slate-700">{EDUCATION.university}</p>
              <p className="text-xs text-slate-500">
                Graduated: {EDUCATION.graduated}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Languages
              </h2>
              <p className="text-xs sm:text-sm text-slate-700">
                {LANGUAGES.map((l) => `${l.name} (${l.proficiency})`).join(' | ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

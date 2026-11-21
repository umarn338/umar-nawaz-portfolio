import React from 'react';
import {
  ArrowRight,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Server,
  Smartphone,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-grid-pattern"
    >
      {/* Ambient Glow Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-32 right-1/4 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column — Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
              <span>{PROFILE.availability}</span>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                BS Software Engineering • COMSATS University
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  {PROFILE.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
                Frontend & Mobile Developer{' '}
                <span className="text-slate-400 dark:text-slate-500">×</span>{' '}
                <span className="text-cyan-600 dark:text-cyan-400">
                  DevOps Engineer
                </span>
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PROFILE.summary}
            </p>

            {/* Role Pillars */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
                <Server className="w-4 h-4 text-cyan-500" />
                <span>DevOps Intern @ Systems Ltd Lahore</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
                <Code2 className="w-4 h-4 text-violet-500" />
                <span>Frontend Intern @ DevelopersHub (Remote)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
                <Smartphone className="w-4 h-4 text-emerald-500" />
                <span>Frontend & Mobile @ Firnas Tech</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#loom-spotlight"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Loom & Label</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Preview Updated CV</span>
              </button>

              <a
                href={PROFILE.resumeUrl}
                download="Umar_Nawaz_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Updated PDF</span>
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {PROFILE.location}
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                {PROFILE.email}
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                {PROFILE.phone}
              </a>
            </div>
          </div>

          {/* Right Column — Interactive Developer & DevOps Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  umar@systems-devops:~/portfolio
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  bash
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] space-y-3.5 leading-relaxed">
                <div>
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="text-cyan-300">whoami</span>
                  <p className="text-slate-300 mt-1 pl-3 border-l-2 border-emerald-500/40">
                    Umar Nawaz — Software Engineer (BSSE, COMSATS '26)
                  </p>
                </div>

                <div>
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="text-cyan-300">cat experience.json</span>
                  <div className="mt-1.5 bg-slate-950/90 p-3 rounded-xl border border-slate-800/90 space-y-2 text-[11.5px]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-cyan-400 font-semibold">
                          Systems Limited (Lahore)
                        </span>
                        <p className="text-slate-400">DevOps Intern • CI/CD & Docker</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 text-[10px]">
                        DevOps
                      </span>
                    </div>
                    <div className="border-t border-slate-800/80 pt-2 flex items-start justify-between gap-2">
                      <div>
                        <span className="text-violet-400 font-semibold">
                          DevelopersHub Corporation
                        </span>
                        <p className="text-slate-400">
                          Frontend Developer Intern (Remote)
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 text-[10px]">
                        Remote
                      </span>
                    </div>
                    <div className="border-t border-slate-800/80 pt-2 flex items-start justify-between gap-2">
                      <div>
                        <span className="text-emerald-400 font-semibold">
                          Firnas Tech (Abbottabad)
                        </span>
                        <p className="text-slate-400">
                          Frontend Developer Intern (Mar–Nov 2025)
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px]">
                        React/Flutter
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-emerald-400">$</span>{' '}
                  <span className="text-cyan-300">git status --active-project</span>
                  <div className="mt-1.5 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent border border-amber-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Loom & Label Boutique E-Commerce
                      </span>
                      <span className="text-[10px] text-emerald-400">ONGOING</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      React 18 • Tailwind CSS • Supabase • Multi-Currency • Admin CRUD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-emerald-500/40 transition-colors"
            >
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

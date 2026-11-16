import React from 'react';
import {
  Code2,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Globe2,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES, EDUCATION, LANGUAGES } from '../data/portfolioData';

export default function SkillsSection() {
  const icons = {
    'frontend-mobile': Code2,
    'devops-cloud': Server,
    'backend-database': Database,
    'tools-practices': Wrench,
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Skills Matrix */}
        <div>
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              Technical Arsenal
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Skills & Engineering Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Bridging modern Frontend & Mobile development (React.js, Flutter, Tailwind CSS) with Cloud Databases (Supabase, Firebase) and Enterprise DevOps practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = icons[cat.id] || Code2;
              return (
                <div
                  key={cat.id}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-700 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="font-mono text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Spoken Languages */}
        <div
          id="education"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          {/* Education Card */}
          <div className="lg:col-span-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Academic Qualification
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {EDUCATION.university}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                Graduated: {EDUCATION.graduated}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800 mb-4">
              <p className="text-xs font-mono uppercase text-slate-400">
                Final Year Project (FYP)
              </p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                {EDUCATION.fyp}
              </p>
            </div>

            <ul className="space-y-2">
              {EDUCATION.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages Card */}
          <div className="lg:col-span-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    Languages
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Communication & Collaboration
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800"
                  >
                    <div className="flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-200">
                      <span>{lang.name}</span>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        {lang.proficiency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              Strong cross-team communication, agile sprint collaboration, and technical documentation skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

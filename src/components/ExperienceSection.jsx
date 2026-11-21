import React from 'react';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Server,
  Code2,
  Laptop,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
            Industry Experience • 3 Internships
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Professional Internships
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Combining enterprise DevOps automation at{' '}
            <span className="font-semibold text-slate-900 dark:text-white">
              Systems Limited (Lahore)
            </span>{' '}
            with remote Frontend Web Engineering at{' '}
            <span className="font-semibold text-slate-900 dark:text-white">
              DevelopersHub Corporation
            </span>{' '}
            and Web & Mobile Development at{' '}
            <span className="font-semibold text-slate-900 dark:text-white">
              Firnas Tech (Abbottabad)
            </span>
            .
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {EXPERIENCES.map((exp) => {
            const isDevOps = exp.id.includes('systems');
            const isRemote = exp.id.includes('developers-hub');
            return (
              <div
                key={exp.id}
                className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                {/* Top Accent Bar */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${exp.highlightColor}`}
                />

                <div>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${exp.highlightColor} flex items-center justify-center text-white shadow-md shrink-0`}
                      >
                        {isDevOps ? (
                          <Server className="w-5 h-5" />
                        ) : isRemote ? (
                          <Laptop className="w-5 h-5" />
                        ) : (
                          <Code2 className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                          {exp.badge}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/70 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-lg text-[10.5px] font-mono font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

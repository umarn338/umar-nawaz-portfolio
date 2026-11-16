import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Server,
  Code2,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
            Industry Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Professional Internships
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Combining enterprise DevOps automation at{' '}
            <span className="font-semibold text-slate-900 dark:text-white">
              Systems Limited (Lahore)
            </span>{' '}
            with hands-on Frontend & Mobile product engineering at{' '}
            <span className="font-semibold text-slate-900 dark:text-white">
              Firnas Tech (Abbottabad)
            </span>
            .
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, idx) => {
            const isDevOps = exp.id.includes('systems');
            return (
              <div
                key={exp.id}
                className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                {/* Top Accent Bar */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${exp.highlightColor}`}
                />

                <div>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.highlightColor} flex items-center justify-center text-white shadow-md shrink-0`}
                      >
                        {isDevOps ? (
                          <Server className="w-6 h-6" />
                        ) : (
                          <Code2 className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                          {exp.badge}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 font-mono">
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

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300"
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

import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  CheckCircle2,
  Smartphone,
  Globe,
  Sparkles,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web App', 'Mobile (Flutter)'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              Portfolio Showcase
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              From full-stack luxury e-commerce (Loom & Label) and construction site mobile management (Track Site Pro) to healthcare & academic portals.
            </p>
          </div>

          {/* Category Filter */}
          <div className="inline-flex p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Status & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {project.category.includes('Mobile') ? (
                      <Smartphone className="w-3.5 h-3.5" />
                    ) : (
                      <Globe className="w-3.5 h-3.5" />
                    )}
                    <span>{project.category}</span>
                  </span>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3.5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Metrics Grid */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-5">
                    {project.metrics.slice(0, 3).map((m, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80"
                      >
                        <p className="text-[10px] font-mono uppercase text-slate-400">
                          {m.label}
                        </p>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Highlights Preview */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source / Repo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-5 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-500 font-semibold">
                  {selectedProject.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProject.summary}
            </p>

            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Engineering Contributions & Features
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-xs sm:text-sm"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

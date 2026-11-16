import React, { useState } from 'react';
import {
  Sparkles,
  Github,
  Layers,
  Database,
  ShoppingBag,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Sliders,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function LoomSpotlight() {
  const loom = PROJECTS[0];
  const [activeTab, setActiveTab] = useState('storefront');

  const architectureTabs = [
    {
      id: 'storefront',
      label: 'Luxury Storefront & UI',
      icon: ShoppingBag,
      title: 'Crystal-Glass Boutique Storefront & Multi-Category Filtering',
      points: [
        'Bespoke luxury stationery & crystal-glass design language with full Dark & Light mode support.',
        "6 curated Pakistani fashion categories: Women's Pret, Unstitched (3-Pc), Festive Wear, Men's Kurta, Accessories, and Archive Sale.",
        'Live instant search across product titles, fabric types (Lawn, Chiffon, Silk), colors, and fit tips.',
        'Interactive Grand Opening digital invitation card modal & Lahore Master Tailoring showcase.',
      ],
    },
    {
      id: 'supabase',
      label: 'Supabase & Admin CRUD',
      icon: Database,
      title: 'Real-Time Supabase Backend & Store Manager Admin Dashboard',
      points: [
        'Powered by @supabase/supabase-js for real-time cloud product synchronization and customer authentication.',
        'Dedicated Admin Dashboard enabling live product creation, editing, deletion, and one-click demo catalog reset.',
        'Supports multi-angle suit photography (front, back, fabric zoom), stock badges, and dynamic pricing.',
      ],
    },
    {
      id: 'commerce',
      label: 'Multi-Currency & Checkout',
      icon: Globe,
      title: 'Live Multi-Currency Engine & WhatsApp Order Flow',
      points: [
        'Instant currency switching between PKR (Rs.), USD ($), and AED (Dirham) across catalog, drawers, and checkout.',
        'Slide-over Shopping Bag & Wishlist drawers with animated cart badge pulse feedback.',
        'Interactive Size Guide modal and direct WhatsApp concierge widget for seamless order confirmation.',
      ],
    },
  ];

  const currentTab = architectureTabs.find((t) => t.id === activeTab);

  return (
    <section
      id="loom-spotlight"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-100/70 via-white to-slate-100/70 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURRENTLY ACTIVE FLAGSHIP PROJECT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Loom & Label — Luxury E-Commerce Platform
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
              Stitched ✦ Unstitched ✦ You — Full-Stack React 18, Tailwind CSS & Supabase Boutique Web App
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={loom.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>github.com/umarn338/loom-and-label</span>
            </a>
          </div>
        </div>

        {/* Main Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-xl">
          {/* Left Preview Image */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 min-h-[280px] sm:min-h-[340px] flex flex-col justify-between group">
            <img
              src={loom.image}
              alt="Loom & Label Boutique Preview"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

            <div className="relative z-10 p-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[11px] font-mono font-semibold">
                STITCHED ✦ UNSTITCHED ✦ YOU
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-400/30 text-[11px] font-mono">
                React + Supabase
              </span>
            </div>

            <div className="relative z-10 p-5 space-y-3">
              <div className="flex items-center gap-3">
                {loom.monogram && (
                  <img
                    src={loom.monogram}
                    alt="L&L Monogram"
                    className="w-11 h-11 rounded-full object-contain bg-white/90 p-1 shadow-md"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">Loom & Label</h3>
                  <p className="text-xs text-amber-200/90">
                    Lahore Master Tailoring & Luxury Pret Storefront
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {loom.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-black/55 backdrop-blur-md border border-white/15"
                  >
                    <p className="text-[10px] font-mono uppercase text-slate-300">
                      {m.label}
                    </p>
                    <p className="text-xs font-bold text-white mt-0.5">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Interactive Architecture Breakdown */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {loom.summary}
              </p>

              {/* Interactive Feature Tabs */}
              <div className="flex flex-wrap gap-2 pt-1">
                {architectureTabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        active
                          ? 'bg-emerald-500 text-slate-950 shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Panel */}
              {currentTab && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {currentTab.title}
                  </h4>
                  <ul className="space-y-2">
                    {currentTab.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tech Pills */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
              {loom.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  FileText,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ContactSection({ onOpenResume }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Frontend / Mobile / DevOps Opportunity',
    message: '',
  });

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${formState.subject} — from ${formState.name || 'Portfolio Visitor'}`
    );
    const body = encodeURIComponent(
      `Hi Umar,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column — Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                Get In Touch
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Let's Build Something Great Together
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
                Whether you're hiring for a Frontend, Mobile (Flutter/React), or DevOps role, or want to collaborate on a project, feel free to reach out directly.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 truncate block"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PROFILE.email, 'email')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:bg-emerald-500/25 transition-colors"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => copyToClipboard(PROFILE.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Socials & Updated CV */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                <span>LinkedIn</span>
              </a>
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Open Updated CV (with Systems Ltd & Loom & Label)</span>
              </button>
            </div>
          </div>

          {/* Right Column — Quick Message Composer */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleMailtoSubmit}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Ahmed"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Hi Umar, we came across your portfolio and would love to discuss a role..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email to Umar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

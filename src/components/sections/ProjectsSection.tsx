import React, { useState } from 'react';
import { PROJECTS } from '../../data/infitechData';
import { ProjectItem } from '../../types';
import { soundFx } from '../../utils/soundEffects';
import {
  X,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';

interface ProjectsSectionProps {
  onStartProject: (projectContext?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onStartProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = ['ALL', 'WHOLESALE', 'MANUFACTURING', 'WEB'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    const itemCategories = (p.categories || [p.category]).map((c) => c.toUpperCase());
    const filterUpper = activeFilter.toUpperCase();
    return (
      itemCategories.includes(filterUpper) ||
      itemCategories.some((cat) => cat.includes(filterUpper) || filterUpper.includes(cat)) ||
      p.category.toUpperCase().includes(filterUpper)
    );
  });

  const handleOpenCaseStudy = (project: ProjectItem) => {
    soundFx.playSubtleClick();
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    soundFx.playSubtleClick();
    setSelectedProject(null);
  };

  return (
    <section
      id="projects-section"
      className="relative py-20 bg-[#05070b] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>REAL WORK FOR REAL BUSINESSES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            CLIENT PROJECTS & <span className="text-cyan-400">WEBSITES.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore websites, product catalogues, and online systems built for local businesses, shops, manufacturers, and clinics.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((cat) => (
            <button
              key={cat}
              id={`btn-project-filter-${cat.toLowerCase()}`}
              onClick={() => {
                soundFx.playSubtleClick();
                setActiveFilter(cat);
              }}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                activeFilter === cat
                  ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              onClick={() => handleOpenCaseStudy(proj)}
              className="md:col-span-2 lg:col-span-2 bg-slate-950/90 border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <div>
                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 rounded-md">
                      {proj.category}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-full flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE SYSTEM</span>
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {proj.clientIndustry}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-3">
                  {proj.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  {proj.summary}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl mb-6 max-w-xl">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <div className="text-sm sm:text-lg font-mono font-black text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-mono text-slate-400 truncate mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack & Actions */}
              <div className="pt-5 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800/80 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm"
                    >
                      <span>LIVE PREVIEW</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <span className="text-xs font-mono font-bold text-cyan-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal / Specification Viewer */}
      {selectedProject && (
        <div
          id="case-study-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        >
          <div className="bg-[#07090e] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative">
            {/* Close Button */}
            <button
              id="btn-close-case-study"
              onClick={handleCloseCaseStudy}
              className="absolute top-6 right-6 p-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8 pr-12">
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-2.5 py-0.5 text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800 rounded">
                  {selectedProject.category} CASE STUDY
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedProject.clientIndustry}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h3>
              {selectedProject.liveUrl && (
                <div className="mt-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs font-mono rounded-lg transition-colors"
                  >
                    <span>View Live Application</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Key Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-950 border border-slate-800 rounded-xl mb-8">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="p-2 text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-mono font-black text-cyan-400">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Structured Case Study Sections */}
            <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
              {/* Challenge */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2">
                  01. THE ENGINEERING CHALLENGE
                </h4>
                <p className="text-slate-300">
                  {selectedProject.caseStudy.challenge}
                </p>
              </div>

              {/* Goals */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2">
                  02. STRATEGIC OBJECTIVES
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.caseStudy.goals.map((g, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture & UX */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-950/70 border border-slate-900 rounded-xl">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase mb-2">
                    UX & INTERFACE DESIGN
                  </h4>
                  <p className="text-xs text-slate-400">
                    {selectedProject.caseStudy.researchAndUx}
                  </p>
                </div>
                <div className="p-4 bg-slate-950/70 border border-slate-900 rounded-xl">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase mb-2">
                    SYSTEM ARCHITECTURE
                  </h4>
                  <p className="text-xs text-slate-400">
                    {selectedProject.caseStudy.architecture}
                  </p>
                </div>
              </div>

              {/* Security Measures */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>SECURITY & RESILIENCE HARDENING</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.caseStudy.securityMeasures.map((sec, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-300"
                    >
                      🛡️ {sec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="p-5 bg-cyan-950/30 border border-cyan-800/50 rounded-xl">
                <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase mb-3 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>VERIFIED OPERATIONAL RESULTS</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.results.map((res, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200">
                      <span className="text-cyan-400 font-mono font-bold">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
                  TECHNOLOGIES INCLUDED IN STACK:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-cyan-300 bg-slate-900 border border-slate-800 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Interested in building a similar architecture?
              </span>

              <button
                id="btn-case-study-start-project"
                onClick={() => {
                  handleCloseCaseStudy();
                  onStartProject(`Similar to ${selectedProject.title}`);
                }}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 text-xs font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>INITIATE PROJECT LIKE THIS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

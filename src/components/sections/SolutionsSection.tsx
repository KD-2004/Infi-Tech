import React, { useState } from 'react';
import { PROBLEM_SOLUTIONS } from '../../data/infitechData';
import { soundFx } from '../../utils/soundEffects';
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

interface SolutionsSectionProps {
  onStartProject: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onStartProject }) => {
  const [activeId, setActiveId] = useState<string>(PROBLEM_SOLUTIONS[0].id);

  const activeItem = PROBLEM_SOLUTIONS.find((p) => p.id === activeId) || PROBLEM_SOLUTIONS[0];

  return (
    <section
      id="solutions-section"
      className="relative py-20 bg-[#07090e] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>TRANSFORM YOUR BUSINESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            FROM "JUST A SHOP" TO A <span className="text-cyan-400">PROFESSIONAL BUSINESS.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            See what makes a local business website actually useful and how it turns everyday online visitors into paying customers.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {PROBLEM_SOLUTIONS.map((item) => {
            const isSelected = item.id === activeId;
            return (
              <button
                key={item.id}
                id={`btn-solution-tab-${item.id}`}
                onClick={() => {
                  soundFx.playSubtleClick();
                  setActiveId(item.id);
                }}
                className={`py-3.5 px-4 text-center rounded-xl border transition-all select-none ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className={`text-xs sm:text-sm font-mono font-bold tracking-wider uppercase ${
                  isSelected ? 'text-cyan-400' : 'text-slate-300'
                }`}>
                  {item.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Before vs After Transformation Card (Split Container) */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
            {/* Left: The Structural Problem (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-950/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-wider text-rose-400 uppercase mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-200 tracking-tight mb-3">
                  {activeItem.problemTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {activeItem.problemDesc}
                </p>

                <div className="space-y-3">
                  <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase">
                    CRITICAL PAIN POINTS:
                  </div>
                  {activeItem.problemPainPoints.map((pain, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-rose-300/80">
                      <span className="text-rose-500 font-mono font-bold">✕</span>
                      <span className="leading-snug">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-900 text-xs font-mono text-slate-500">
                Category: {activeItem.category}
              </div>
            </div>

            {/* Right: The Engineered INFITECH Solution (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-950/95 relative overflow-hidden flex flex-col justify-between">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                    <Zap className="w-4 h-4" />
                    <span>THE INFITECH ENGINEERED SYSTEM</span>
                  </div>

                  <span className="px-3 py-1 text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800 rounded-full">
                    {activeItem.impactMetric}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {activeItem.solutionTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {activeItem.solutionDesc}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono font-semibold text-cyan-400 uppercase">
                    SYSTEM BENEFITS & GAINS:
                  </div>
                  {activeItem.solutionBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="relative z-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-slate-400">
                  Ready to upgrade your business online?
                </div>

                <button
                  id={`btn-solution-action-${activeItem.id}`}
                  onClick={() => {
                    soundFx.playSubtleClick();
                    onStartProject();
                  }}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <span>GET THIS FOR YOUR BUSINESS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

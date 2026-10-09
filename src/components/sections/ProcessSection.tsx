import React, { useState } from 'react';
import { PROCESS_STAGES } from '../../data/infitechData';
import { soundFx } from '../../utils/soundEffects';
import {
  Compass,
  Layout,
  Code,
  ShieldCheck,
  Rocket,
  RefreshCw,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>(PROCESS_STAGES[0].step);

  const stageIcons: Record<string, React.ReactNode> = {
    '01': <Compass className="w-5 h-5 text-cyan-400" />,
    '02': <Layout className="w-5 h-5 text-cyan-400" />,
    '03': <Code className="w-5 h-5 text-cyan-400" />,
    '04': <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
    '05': <Rocket className="w-5 h-5 text-cyan-400" />,
    '06': <RefreshCw className="w-5 h-5 text-cyan-400" />,
  };

  const currentStage = PROCESS_STAGES.find((s) => s.step === activeStep) || PROCESS_STAGES[0];

  return (
    <section
      id="process-section"
      className="relative py-20 bg-[#05070b] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>DETERMINISTIC DELIVERY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            DEVELOPMENT <span className="text-cyan-400">PROCESS.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A battle-tested 6-stage lifecycle engineered to eliminate ambiguity, guarantee code quality, and meet delivery milestones.
          </p>
        </div>

        {/* 6-Stage Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PROCESS_STAGES.map((st) => {
            const isSelected = st.step === activeStep;
            return (
              <button
                key={st.step}
                id={`btn-process-step-${st.step}`}
                onClick={() => {
                  soundFx.playSubtleClick();
                  setActiveStep(st.step);
                }}
                className={`p-4 text-left rounded-xl border transition-all duration-200 select-none ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    STAGE {st.step}
                  </span>
                  {stageIcons[st.step]}
                </div>
                <div className="text-sm font-bold truncate">
                  {st.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-900 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                {stageIcons[currentStage.step]}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  STAGE {currentStage.step} • {currentStage.name}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {currentStage.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shrink-0">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>ESTIMATED DURATION: {currentStage.durationEstimate}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            {currentStage.description}
          </p>

          {/* Activities & Deliverables Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Activities */}
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center space-x-2">
                <span>STAGE ACTIVITIES & MILESTONES</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {currentStage.activities.map((act, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <span className="text-cyan-400 font-mono mt-0.5">•</span>
                    <span className="leading-snug">{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stage Deliverables */}
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center space-x-2">
                <span>CLIENT DELIVERABLES</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {currentStage.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

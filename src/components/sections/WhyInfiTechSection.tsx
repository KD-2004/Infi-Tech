import React from 'react';
import { WHY_INFITECH_PILLARS } from '../../data/infitechData';
import {
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Lock,
  GitBranch,
  Clock,
  Compass
} from 'lucide-react';

export const WhyInfiTechSection: React.FC = () => {
  const iconList = [
    <Compass className="w-5 h-5 text-cyan-400" key="0" />,
    <Cpu className="w-5 h-5 text-cyan-400" key="1" />,
    <ShieldCheck className="w-5 h-5 text-cyan-400" key="2" />,
    <Layers className="w-5 h-5 text-cyan-400" key="3" />,
    <Sparkles className="w-5 h-5 text-cyan-400" key="4" />,
    <GitBranch className="w-5 h-5 text-cyan-400" key="5" />,
    <Clock className="w-5 h-5 text-cyan-400" key="6" />,
  ];

  return (
    <section
      id="why-infitech-section"
      className="relative py-20 bg-[#07090e] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ENGINEERING PRINCIPLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            WHY <span className="text-cyan-400">INFITECH?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Seven foundational pillars defining our standard of engineering, delivery velocity, and client partnership.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_INFITECH_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {iconList[idx] || <Cpu className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

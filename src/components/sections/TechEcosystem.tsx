import React, { useState } from 'react';
import { TECHNOLOGIES } from '../../data/infitechData';
import { soundFx } from '../../utils/soundEffects';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const TechEcosystem: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(TECHNOLOGIES[0].id);

  const activeCategory = TECHNOLOGIES.find((t) => t.id === activeCategoryId) || TECHNOLOGIES[0];

  return (
    <section
      id="tech-ecosystem-section"
      className="relative py-20 bg-[#07090e] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>BUILT WITH MODERN TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            FAST, SECURE & <span className="text-cyan-400">MOBILE-FIRST.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We use modern web standards, secure cloud hosting, and mobile-first best practices to ensure your website loads instantly and works flawlessly.
          </p>
        </div>

        {/* Technology Constellation Category Nav (Pills / Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {TECHNOLOGIES.map((cat) => {
            const isSelected = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                id={`btn-tech-cat-${cat.id}`}
                onClick={() => {
                  soundFx.playSubtleClick();
                  setActiveCategoryId(cat.id);
                }}
                className={`p-3.5 text-left rounded-xl border transition-all duration-200 select-none ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider uppercase mb-1">
                  DOMAIN
                </div>
                <div className="text-xs font-bold leading-tight">
                  {cat.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Technology Deep Inspection Stage */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-900">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                ACTIVE DOMAIN CONSTELLATION
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                {activeCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {activeCategory.description}
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Enterprise</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span>Core</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-slate-600" />
                <span>Specialized</span>
              </span>
            </div>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategory.items.map((tech, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {tech.name}
                    </h4>
                    <span
                      className={`px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded ${
                        tech.level === 'Enterprise'
                          ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
                          : tech.level === 'Core'
                          ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {tech.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-900">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-800/80 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

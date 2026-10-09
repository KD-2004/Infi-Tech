import React from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, Shield, Target } from 'lucide-react';
import { COMPANY_VALUES } from '../../data/infitechData';

export const MissionSection: React.FC = () => {
  const valueIcons = [
    <Lightbulb className="w-5 h-5 text-cyan-400" />,
    <Shield className="w-5 h-5 text-teal-400" />,
    <Target className="w-5 h-5 text-blue-400" />
  ];

  return (
    <section id="team-mission-section" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[250px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>OUR MISSION</span>
          </div>

          {/* Mission Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Three Minds. One Vision. Infinite Possibilities.
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            "We believe technology should solve real business problems, create meaningful experiences, and help businesses move forward with confidence."
          </p>
        </motion.div>

        {/* Optional Values Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              WHAT DRIVES US
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-4">
                  {valueIcons[idx] || <Lightbulb className="w-5 h-5 text-cyan-400" />}
                </div>

                <h3 className="text-base font-bold font-mono text-white tracking-wider mb-2">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  "{val.description}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

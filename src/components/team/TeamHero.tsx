import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users } from 'lucide-react';

export const TeamHero: React.FC = () => {
  return (
    <section id="team-hero-section" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[300px] h-[200px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <Users className="w-3.5 h-3.5" />
            <span>MEET THE TEAM</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
          >
            The People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">INFITECH SOLUTIONS</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal"
          >
            "We are a team of passionate technology professionals focused on building innovative, reliable, and intelligent digital solutions for businesses."
          </motion.p>
        </div>
      </div>
    </section>
  );
};

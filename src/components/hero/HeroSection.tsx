import React from 'react';
import { InfinityScene } from '../three/InfinityScene';
import { HeroParticleCanvas } from './HeroParticleCanvas';
import { COMPANY_INFO } from '../../data/infitechData';
import { soundFx } from '../../utils/soundEffects';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Search,
  Sparkles,
  MessageSquare,
  MapPin,
  Check
} from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020408]"
    >
      {/* Background Three.js 3D Infinity Canvas */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <InfinityScene />
      </div>

      {/* Interactive Responsive Particle Network */}
      <HeroParticleCanvas />

      {/* Premium CSS Layered Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_60%_60%_at_50%_40%,rgba(6,182,212,0.06),rgba(2,4,8,0)_100%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPgo8L3N2Zz4=')] opacity-50 z-0 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge & Price Chip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
              {COMPANY_INFO.status}
            </span>
          </div>
        </motion.div>

        {/* Central Brand Logo (Static/Calm) */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="relative my-4 flex flex-col items-center group pointer-events-none"
        >
          <svg
            viewBox="0 -20 460 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-16 sm:w-32 sm:h-20 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <defs>
              <linearGradient id="heroCoreGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#67e8f9" />
              </linearGradient>
            </defs>
            <path
              d="M 295 95 C 330 50, 400 50, 400 130 C 400 210, 300 210, 230 130 C 160 50, 60 50, 60 130"
              stroke="url(#heroCoreGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 60 130 C 60 210, 160 210, 215 160 C 255 120, 300 80, 370 30"
              stroke="url(#heroCoreGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polygon
              points="306,50 388,14 376,94 346,64"
              fill="#ffffff"
            />
            <circle cx="60" cy="130" r="14" fill="#0891b2" />
            <circle cx="60" cy="130" r="6" fill="#ffffff" />
            <circle cx="230" cy="130" r="16" fill="#22d3ee" />
            <circle cx="230" cy="130" r="8" fill="#ffffff" />
            <circle cx="400" cy="130" r="14" fill="#67e8f9" />
            <circle cx="400" cy="130" r="6" fill="#ffffff" />
            <circle cx="388" cy="14" r="10" fill="#ffffff" />
          </svg>
        </motion.div>

        {/* Company Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="font-mono text-xs sm:text-sm font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-3"
        >
          {COMPANY_INFO.name}
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl"
        >
          A Professional Website That Helps You{' '}
          <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Get More Customers.
          </span>
        </motion.h1>

        {/* Descriptive Body Text */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed"
        >
          {COMPANY_INFO.heroSubheadline}
        </motion.p>

        {/* Primary Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            id="btn-hero-start-project"
            onClick={() => {
              soundFx.playSubtleClick();
              onStartProject();
            }}
            className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ y: -1, backgroundColor: 'rgba(15, 23, 42, 0.9)' }}
            whileTap={{ scale: 0.98 }}
            id="btn-hero-explore-work"
            onClick={() => {
              soundFx.playSubtleClick();
              onExploreWork();
            }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-slate-300 hover:text-white bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-300 backdrop-blur-md"
          >
            <span>SEE OUR WORK</span>
          </motion.button>
        </motion.div>

        {/* Small Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
          className="mt-4 text-xs font-mono text-slate-400"
        >
          Built for shops, retailers, manufacturers, wholesalers and local service businesses.
        </motion.div>

        {/* 4 Micro-Benefit Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.95 }}
          className="mt-12 pt-8 border-t border-slate-900/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-left"
        >
          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase">
                BE FOUND
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Help customers discover your business online.
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase">
                LOOK PROFESSIONAL
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Build trust before the customer contacts you.
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase">
                GET ENQUIRIES
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Make it easy to call, WhatsApp or enquire.
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase">
                GET DIRECTIONS
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Show your location with Google Maps.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


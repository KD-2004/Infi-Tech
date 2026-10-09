import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Layers, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface TeamCTASectionProps {
  onStartConversation: () => void;
  onViewWork: () => void;
}

export const TeamCTASection: React.FC<TeamCTASectionProps> = ({
  onStartConversation,
  onViewWork
}) => {
  return (
    <section id="team-cta-section" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-950 border border-slate-800/90 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Have a Business Challenge?
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto">
              "Let's build something useful together."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Action */}
              <button
                id="btn-team-start-conversation"
                onClick={() => {
                  soundFx.playSubtleClick();
                  onStartConversation();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 text-sm font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Action */}
              <button
                id="btn-team-view-work"
                onClick={() => {
                  soundFx.playSubtleClick();
                  onViewWork();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 text-sm font-mono font-semibold tracking-wider uppercase text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>VIEW OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

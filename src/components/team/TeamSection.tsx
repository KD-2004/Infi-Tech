import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../../data/infitechData';
import { TeamMemberCard } from './TeamMemberCard';
import { ShieldCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team-cards-section" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-2"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDING LEADERSHIP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Meet the Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 font-mono"
          >
            "Three minds. One vision. Infinite possibilities."
          </motion.p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamMemberCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

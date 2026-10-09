import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TeamMember } from '../../types';
import { Mail, ArrowUpRight, UserCheck } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const [imageError, setImageError] = useState<boolean>(false);

  // Generate fallback initials (e.g., "TN", "KD", "AY")
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const handleEmailClick = () => {
    soundFx.playSubtleClick();
  };

  return (
    <motion.div
      id={`team-member-card-${member.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden"
    >
      {/* Ambient background glow on hover */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 group-hover:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-colors" />

      <div>
        {/* Card Header: Number & Member status */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/70 rounded-md">
              TEAM MEMBER {member.number}
            </span>
          </div>
          <span className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LEADERSHIP</span>
          </span>
        </div>

        {/* Real Profile Photo Container */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-all duration-300">
          {!imageError ? (
            <img
              src={member.photo}
              alt={member.altText}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Fallback avatar if local image is unavailable */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-cyan-950/80 border-2 border-cyan-500/40 flex items-center justify-center text-2xl font-mono font-bold text-cyan-400 mb-3 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                {initials}
              </div>
              <p className="text-xs font-mono text-slate-400">{member.name}</p>
              <p className="text-[10px] font-mono text-cyan-400/80 mt-1">{member.role}</p>
            </div>
          )}

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent pointer-events-none" />

          {/* Quick role chip overlaid on image bottom */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 text-xs font-mono font-bold text-white bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-md">
              {member.role}
            </span>
          </div>
        </div>

        {/* Member Name */}
        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2">
          {member.name}
        </h3>

        {/* Member Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {member.description}
        </p>
      </div>

      {/* Footer / Direct Email Action */}
      <div className="pt-4 border-t border-slate-900">
        <a
          id={`member-email-btn-${member.id}`}
          href={`mailto:${member.email}`}
          onClick={handleEmailClick}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-mono font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/60 rounded-xl transition-all duration-200 group/btn"
          aria-label={`Send email to ${member.name} at ${member.email}`}
        >
          <span className="flex items-center space-x-2 truncate mr-2">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0 group-hover/btn:scale-110 transition-transform" />
            <span className="truncate">{member.email}</span>
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

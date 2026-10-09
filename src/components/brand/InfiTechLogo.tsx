import React from 'react';

interface InfiTechLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  animated?: boolean;
}

export const InfiTechLogo: React.FC<InfiTechLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showTagline = false,
  animated = false
}) => {
  const sizeMap = {
    sm: { iconWidth: 38, iconHeight: 24, text: 'text-base', sub: 'text-[9px]', gap: 'gap-2.5' },
    md: { iconWidth: 52, iconHeight: 32, text: 'text-xl', sub: 'text-[10px]', gap: 'gap-3' },
    lg: { iconWidth: 74, iconHeight: 44, text: 'text-2xl sm:text-3xl', sub: 'text-xs', gap: 'gap-3.5' },
    xl: { iconWidth: 100, iconHeight: 58, text: 'text-3xl sm:text-4xl', sub: 'text-sm', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* 3D Chrome Infinity Emblem with Integrated Growth Arrow (Exact Match to Brand Identity) */}
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: currentSize.iconWidth, height: currentSize.iconHeight }}
      >
        <svg
          viewBox="0 -20 460 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full overflow-visible ${animated ? 'filter drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]' : ''}`}
        >
          <defs>
            <linearGradient id="chromeBase" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="25%" stopColor="#334155" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="75%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="chromeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="80%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="blackMatte" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="cyanNeon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* BACKGROUND NEON GLOWS */}
          <circle cx="120" cy="180" r="35" fill="#06b6d4" opacity="0.4" filter="url(#neonGlow)" />
          <circle cx="320" cy="180" r="35" fill="#06b6d4" opacity="0.4" filter="url(#neonGlow)" />
          
          {/* ======================================= */}
          {/* UNDER LAYER (Right Lobe to Top Left) */}
          {/* ======================================= */}
          <g>
            <path d="M 295 95 C 330 50, 400 50, 400 130 C 400 210, 300 210, 230 130 C 160 50, 60 50, 60 130"
                  stroke="#000000" strokeWidth="32" strokeLinecap="round" filter="url(#dropShadow)" />
            <path d="M 295 95 C 330 50, 400 50, 400 130 C 400 210, 300 210, 230 130 C 160 50, 60 50, 60 130"
                  stroke="url(#chromeBase)" strokeWidth="26" strokeLinecap="round" />
            <path d="M 295 95 C 330 50, 400 50, 400 130 C 400 210, 300 210, 230 130 C 160 50, 60 50, 60 130"
                  stroke="url(#chromeHighlight)" strokeWidth="18" strokeLinecap="round" />
            <path d="M 295 95 C 330 50, 400 50, 400 130 C 400 210, 300 210, 230 130 C 160 50, 60 50, 60 130"
                  stroke="url(#blackMatte)" strokeWidth="10" strokeLinecap="round" />
            
            {/* UNDER LAYER CIRCUITS */}
            <g opacity="0.95">
              <path d="M 380 130 L 360 160 L 320 160 L 300 140" stroke="url(#cyanNeon)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="380" cy="130" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
              <circle cx="300" cy="140" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
              <path d="M 245 155 L 260 175 L 300 175" stroke="url(#cyanNeon)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="300" cy="175" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
              <path d="M 120 70 L 140 90 L 180 90" stroke="url(#cyanNeon)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="120" cy="70" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
              <circle cx="180" cy="90" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
            </g>
          </g>

          {/* ======================================= */}
          {/* OVER LAYER (Bottom Left to Arrow) */}
          {/* ======================================= */}
          <g>
            <path d="M 60 130 C 60 210, 160 210, 215 160 C 255 120, 300 80, 370 30"
                  stroke="#000000" strokeWidth="32" strokeLinecap="round" filter="url(#dropShadow)" />
            <path d="M 60 130 C 60 210, 160 210, 215 160 C 255 120, 300 80, 370 30"
                  stroke="url(#chromeBase)" strokeWidth="26" strokeLinecap="round" />
            <path d="M 60 130 C 60 210, 160 210, 215 160 C 255 120, 300 80, 370 30"
                  stroke="url(#chromeHighlight)" strokeWidth="18" strokeLinecap="round" />
            <path d="M 60 130 C 60 210, 160 210, 215 160 C 255 120, 300 80, 370 30"
                  stroke="url(#blackMatte)" strokeWidth="10" strokeLinecap="round" />
                  
            {/* ARROW HEAD */}
            <g>
              <polygon points="302,54 394,10 380,98 348,68" fill="#000000" filter="url(#dropShadow)" />
              <polygon points="306,50 388,14 376,94 346,64" fill="url(#chromeBase)" />
              <polygon points="312,48 384,18 372,90 348,64" fill="url(#chromeHighlight)" />
              <polygon points="312,48 384,18 348,64" fill="#ffffff" opacity="0.9" />
            </g>

            {/* OVER LAYER CIRCUITS */}
            <g opacity="0.95">
              <path d="M 80 180 L 100 200 L 140 200 L 160 180" stroke="url(#cyanNeon)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="80" cy="180" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
              <circle cx="160" cy="180" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
              <path d="M 180 160 L 200 140" stroke="url(#cyanNeon)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="180" cy="160" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
              <circle cx="200" cy="140" r="3" fill="#22d3ee" stroke="#fff" strokeWidth="0.5" />
            </g>
          </g>

          {/* GLOWING HANGING CONNECTORS (Bottom Center) */}
          <g filter="url(#neonGlow)">
            <path d="M 215 175 L 215 195" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="215" cy="195" r="3.5" fill="#ffffff" />
            <path d="M 235 175 L 235 200" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="235" cy="200" r="3.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* Brand Typographic Identity matching the 3D Metallic Video Style */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center tracking-tight font-extrabold text-white">
            <span className={`${currentSize.text} font-black tracking-[-0.02em] flex items-center`}>
              <span className="text-slate-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">INFI</span>
              <span className="text-cyan-400 drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)] ml-0.5">TECH</span>
            </span>
            <span className="ml-2 px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-widest text-slate-300 bg-slate-900 border border-slate-700/80 rounded shadow-inner">
              SOLUTIONS
            </span>
          </div>
          {showTagline && (
            <span className={`${currentSize.sub} font-mono tracking-widest text-slate-400 uppercase font-medium mt-0.5`}>
              Infinite Possibilities. Intelligent Solutions.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

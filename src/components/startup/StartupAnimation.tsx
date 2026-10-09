import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface StartupAnimationProps {
  onComplete: () => void;
}

export const StartupAnimation: React.FC<StartupAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'A' | 'B' | 'C' | 'D' | 'E'>('A');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Skip straight to end for accessibility
      setPhase('E');
      onComplete();
      return;
    }

    // Sequence timings
    // A: 0 - 0.2s
    // B: 0.2 - 0.6s
    // C: 0.6 - 0.9s
    // D: 0.9 - 1.1s
    // E: 1.1s -> unmount

    const t1 = setTimeout(() => setPhase('B'), 200);
    const t2 = setTimeout(() => setPhase('C'), 600);
    const t3 = setTimeout(() => setPhase('D'), 900);
    const t4 = setTimeout(() => {
      setPhase('E');
      onComplete();
    }, 1150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'E' && (
        <motion.div
          key="startup-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070b] overflow-hidden"
        >
          {/* Subtle radial cyan glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.4),rgba(5,7,11,0)_60%)]"
          />

          <div className="relative flex flex-col items-center">
            {/* Phase B: Brand Signal / Logo Assemble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
              animate={
                phase === 'B' || phase === 'C' || phase === 'D'
                  ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mb-4"
            >
              <svg width="48" height="24" viewBox="0 -10 460 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="startupCoreGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#67e8f9" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={phase !== 'A' ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  d="M 295 95 C 330 50, 400 50, 400 130 C 400 210, 300 210, 230 130 C 160 50, 60 50, 60 130"
                  stroke="url(#startupCoreGrad)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={phase !== 'A' ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                  d="M 60 130 C 60 210, 160 210, 215 160 C 255 120, 300 80, 370 30"
                  stroke="url(#startupCoreGrad)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Phase C: Wordmark */}
            <div className="flex space-x-2 overflow-hidden h-8 items-center">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={
                  phase === 'C' || phase === 'D' ? { opacity: 1, x: 0 } : {}
                }
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="font-mono text-xl font-black text-white tracking-widest"
              >
                INFITECH
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={
                  phase === 'C' || phase === 'D' ? { opacity: 1, x: 0 } : {}
                }
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
                className="font-mono text-xl font-light text-cyan-400 tracking-widest"
              >
                SOLUTIONS
              </motion.span>
            </div>

            {/* Phase D: System Line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={phase === 'D' ? { opacity: 1, width: '100%' } : {}}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-3 h-[1px] bg-cyan-500/50"
            />
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={phase === 'D' ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, ease: 'easeOut', delay: 0.05 }}
              className="mt-2 text-[10px] font-mono tracking-[0.2em] text-cyan-500 uppercase text-center"
            >
              SYSTEM READY
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

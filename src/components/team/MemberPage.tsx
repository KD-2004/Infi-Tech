import React, { useEffect } from 'react';
import { TeamHero } from './TeamHero';
import { TeamSection } from './TeamSection';
import { MissionSection } from './MissionSection';
import { TeamCTASection } from './TeamCTASection';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface MemberPageProps {
  onNavigateHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const MemberPage: React.FC<MemberPageProps> = ({
  onNavigateHome,
  onNavigateToSection
}) => {
  useEffect(() => {
    // Set dynamic SEO Title and Meta Description for /member
    const prevTitle = document.title;
    document.title = 'Meet the Team | INFITECH SOLUTIONS';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Meet the people behind INFITECH SOLUTIONS — a team focused on building innovative, reliable and intelligent digital solutions for businesses.'
      );
    }

    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = prevTitle;
      if (metaDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  return (
    <div id="member-page" className="min-h-screen bg-[#05070b] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Breadcrumb Navigation Bar */}
      <div className="pt-24 pb-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <button
            onClick={() => {
              soundFx.playSubtleClick();
              onNavigateHome();
            }}
            className="flex items-center space-x-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">MEET THE TEAM</span>
        </nav>
      </div>

      {/* Hero Section */}
      <TeamHero />

      {/* Team Cards Section (3 founders) */}
      <TeamSection />

      {/* Mission & Core Values Section */}
      <MissionSection />

      {/* Final Action CTA */}
      <TeamCTASection
        onStartConversation={() => {
          onNavigateToSection('contact-section');
        }}
        onViewWork={() => {
          onNavigateToSection('projects-section');
        }}
      />
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { InfiTechLogo } from '../brand/InfiTechLogo';
import { soundFx } from '../../utils/soundEffects';
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath = '/',
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundFx.getMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextMuted = soundFx.toggleMute();
    setIsMuted(nextMuted);
  };

  const navLinks = [
    { label: 'SERVICES', href: '#services-section', isRoute: false },
    { label: 'WHY US', href: '#about-section', isRoute: false },
    { label: 'PRICING / QUOTE', href: '#pricing-section', isRoute: false },
    { label: 'OUR WORK', href: '#projects-section', isRoute: false },
    { label: 'TEAM', href: '/member', isRoute: true },
    { label: 'HOW IT WORKS', href: '#process-section', isRoute: false },
    { label: 'FAQ', href: '#faq-section', isRoute: false },
    { label: 'CONTACT', href: '#contact-section', isRoute: false },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    soundFx.playSubtleClick();
    setMobileMenuOpen(false);

    if (isRoute) {
      if (onNavigate) {
        onNavigate(href);
      } else {
        window.location.href = href;
      }
      return;
    }

    if (currentPath === '/member') {
      if (onNavigate) {
        onNavigate('/', href);
      } else {
        window.location.href = `/${href}`;
      }
      return;
    }

    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070b]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          id="navbar-brand-link"
          onClick={(e) => {
            e.preventDefault();
            soundFx.playSubtleClick();
            if (onNavigate) {
              onNavigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <InfiTechLogo size="md" showTagline={false} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = link.isRoute && currentPath === link.href;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className={`text-xs font-mono font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                  isActive
                    ? 'text-cyan-400 font-bold border-b-2 border-cyan-400 pb-0.5'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls (WhatsApp & Free Demo CTA) */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Audio Synthesizer Toggle */}
          <button
            id="btn-sound-toggle"
            onClick={toggleSound}
            className="p-2 text-slate-400 hover:text-cyan-300 bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors"
            title={isMuted ? 'Enable subtle UI audio' : 'Mute UI audio'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* WhatsApp Direct Link */}
          <a
            id="btn-nav-whatsapp"
            href="https://wa.me/919967603319?text=Hi%2C%20I%20want%20to%20know%20more%20about%20getting%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playSubtleClick()}
            className="hidden md:flex items-center space-x-1.5 px-3 py-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/80 border border-emerald-800/60 rounded-lg transition-all"
          >
            <span>WHATSAPP US</span>
          </a>

          {/* Primary CTA: GET A FREE QUOTE */}
          <button
            id="btn-nav-start-project"
            onClick={() => handleNavClick('#pricing-section', false)}
            className="flex items-center space-x-1.5 px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] cursor-pointer"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 xl:hidden">
          <button
            id="btn-mobile-sound-toggle"
            onClick={toggleSound}
            className="p-2 text-slate-400 hover:text-cyan-300 bg-slate-950/60 border border-slate-800 rounded-lg sm:hidden"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-[#05070b]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all duration-300"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = link.isRoute && currentPath === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className={`text-left text-sm font-mono font-medium tracking-wider py-1 border-b border-slate-900 uppercase cursor-pointer ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://wa.me/919967603319?text=Hi%2C%20I%20want%20to%20know%20more%20about%20getting%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 text-xs font-mono font-bold tracking-wider uppercase text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 rounded-lg"
              >
                <span>WHATSAPP US</span>
              </a>
              <button
                onClick={() => handleNavClick('#pricing-section', false)}
                className="flex items-center justify-center space-x-2 w-full py-3 text-xs font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 rounded-lg cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

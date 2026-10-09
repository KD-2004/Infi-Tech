import React from 'react';
import { InfiTechLogo } from '../brand/InfiTechLogo';
import { soundFx } from '../../utils/soundEffects';
import {
  ShieldCheck,
  Cpu,
  ArrowUp,
  Mail,
  Building,
  Terminal,
  Activity
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    soundFx.playSubtleClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navSitemap = [
    { label: 'About Us', href: '#about-section', isRoute: false },
    { label: 'Website Services', href: '#services-section', isRoute: false },
    { label: 'Pricing & Quote', href: '#pricing-section', isRoute: false },
    { label: 'Why a Website', href: '#solutions-section', isRoute: false },
    { label: 'Key Features', href: '#products-section', isRoute: false },
    { label: 'Meet the Team', href: '/member', isRoute: true },
    { label: 'Technology Stack', href: '#tech-ecosystem-section', isRoute: false },
    { label: 'Client Work & Portfolio', href: '#projects-section', isRoute: false },
    { label: 'How We Work', href: '#process-section', isRoute: false },
    { label: 'Frequently Asked Questions', href: '#faq-section', isRoute: false },
  ];

  const servicesList = [
    'Business Websites',
    'Product & Catalogue Websites',
    'E-Commerce Online Stores',
    'Google Business & Maps Setup',
    'WhatsApp Enquiry Integration',
    'Website Maintenance & Support',
  ];

  return (
    <footer
      id="main-footer"
      className="relative bg-[#040609] border-t border-slate-900 text-slate-400 py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <InfiTechLogo size="lg" showTagline={true} />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              INFITECH SOLUTIONS builds modern, fast, mobile-friendly websites that help local businesses, shops, manufacturers, and service providers get discovered and receive more customer enquiries.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>ACTIVE STATUS: ACCEPTING NEW CLIENT WEBSITES</span>
            </div>
          </div>

          {/* Quick Sitemap Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              NAVIGATION SITEMAP
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {navSitemap.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        soundFx.playSubtleClick();
                        if (link.isRoute) {
                          onNavigate(link.href);
                        } else {
                          onNavigate('/', link.href);
                        }
                      }
                    }}
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              WEBSITE SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {servicesList.map((srv) => (
                <li key={srv} className="hover:text-cyan-400 transition-colors">
                  <a href="#services-section">{srv}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              DIRECT DESK
            </h4>
            <div className="text-xs font-mono space-y-2">
              <a href="mailto:infitechsolutions03@gmail.com" className="block text-slate-300 hover:text-cyan-400 transition-colors">
                infitechsolutions03@gmail.com
              </a>
              <a href="tel:+919967603319" className="block text-slate-300 hover:text-cyan-400 transition-colors">
                +91 99676 03319
              </a>
              <a 
                href="https://wa.me/919967603319?text=Hi%20Infitech%20Solutions,%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business" 
                target="_blank" 
                rel="noreferrer"
                className="block text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
              >
                💬 WhatsApp Chat
              </a>
            </div>

            <button
              id="btn-footer-back-to-top"
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Security Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} INFITECH SOLUTIONS. All rights reserved. 100% Client Ownership.
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mobile-First & SSL Secured</span>
            </span>
            <span>•</span>
            <span>Fast Turnaround</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

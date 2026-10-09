import React from 'react';
import { soundFx } from '../../utils/soundEffects';
import { AnimatedSection } from '../motion/AnimatedSection';
import {
  Store,
  Layers,
  ShoppingBag,
  MapPin,
  ArrowRight,
  Check
} from 'lucide-react';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  const coreDisciplines = [
    {
      title: 'Business Websites',
      desc: 'Clean, modern websites built for shops, retailers, manufacturers, wholesalers, and local service providers.',
      icon: <Store className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Product Catalogues',
      desc: 'Show products, collections, categories, specifications, and instant WhatsApp inquiry buttons.',
      icon: <Layers className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'E-Commerce Stores',
      desc: 'Sell online with product pages, shopping cart, UPI/card checkout, and seamless order management.',
      icon: <ShoppingBag className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Google & WhatsApp Setup',
      desc: 'Direct WhatsApp chat, one-tap calling, and Google Maps integration to bring nearby customers directly to your shop.',
      icon: <MapPin className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section
      id="about-section"
      className="relative py-20 bg-[#07090e] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ABOUT INFITECH SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            YOUR ONLINE PRESENCE <span className="text-cyan-400">MATTERS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Your customers are already looking for you online. We build websites that make your business easy to discover, understand, and contact.
          </p>
        </AnimatedSection>

        {/* Narrative & Practical Difference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story (7 cols) */}
          <AnimatedSection delay={0.1} className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              Before visiting a shop, many customers check the business online. They want to see what you sell, where you are located, what services you provide, your contact details, photos, and whether the business looks trustworthy.
            </p>
            <p>
              If your business has no website, an outdated website, or an incomplete online presence, you may lose customers before they ever contact you.
            </p>
            <p className="text-white font-medium">
              We help local businesses build a professional online presence that is simple, useful, and easy for customers to act on.
            </p>
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Mobile Friendly (Mobile-First)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>WhatsApp Enquiries & Calling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Google Maps & Location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Fast Loading & Reasonable Pricing</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Core Stat / Philosophy Card (5 cols) */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg hover:shadow-cyan-900/10">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
              OUR MISSION
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Websites That Help Local Businesses Grow.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Get found, look professional, and get more enquiries. We take care of design, domain, hosting, and mobile optimization so you can focus on running your business.
            </p>
            <button
              id="btn-about-cta"
              onClick={() => {
                soundFx.playSubtleClick();
                onStartProject();
              }}
              className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-300 hover:text-cyan-200 transition-colors group"
            >
              <span>GET A FREE DEMO</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
        </div>

        {/* 4 Core Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreDisciplines.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={0.1 + (index * 0.05)}
              className="bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-900/20"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 transition-colors group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

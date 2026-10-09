import React, { useState } from 'react';
import { motion } from 'motion/react';
import { soundFx } from '../../utils/soundEffects';
import {
  Check,
  ArrowRight,
  Sparkles,
  Layout,
  Smartphone,
  Zap,
  Search,
  MessageSquare,
  Sliders,
  ShieldCheck,
  HelpCircle,
  Clock,
  Compass,
  Code,
  Rocket
} from 'lucide-react';

interface AffordableWebSectionProps {
  onStartProject?: (context?: string) => void;
}

export const AffordableWebSection: React.FC<AffordableWebSectionProps> = ({
  onStartProject
}) => {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Modern UI/UX Design',
    'Mobile Responsive',
    'WhatsApp Chat Setup'
  ]);

  const toggleNeed = (need: string) => {
    soundFx.playSubtleClick();
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleQuoteClick = (contextNote?: string) => {
    soundFx.playSubtleClick();
    const context = contextNote || (selectedNeeds.length > 0 ? `Custom Web Quote (${selectedNeeds.join(', ')})` : 'Custom Website Quote');
    if (onStartProject) {
      onStartProject(context);
    } else {
      const contactElem = document.getElementById('contact-section');
      contactElem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featurePoints = [
    {
      title: 'Modern UI/UX',
      desc: 'Clean, contemporary visual styling tailored to your brand identity, products, and industry.',
      icon: <Layout className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Mobile Responsive',
      desc: 'Flawless, touch-friendly browsing engineered for Android phones, iPhones, tablets, and laptops.',
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Fast Performance',
      desc: 'Lightweight, ultra-fast loading pages optimized for lightning speed, high retention, and low bounce rates.',
      icon: <Zap className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'SEO-Ready Structure',
      desc: 'Semantic markup, structured metadata, and fast mobile performance built so search engines can discover your business.',
      icon: <Search className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Business Integrations',
      desc: 'One-tap WhatsApp triggers, Google Maps directions, click-to-call, and custom inquiry workflows.',
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Custom Functionality',
      desc: 'Product catalogues, quote calculators, booking forms, or client portals built strictly around your workflows.',
      icon: <Sliders className="w-5 h-5 text-cyan-400" />
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Tell Us',
      desc: 'Share your business, goals and requirements.',
      detail: 'Tell us about your brand, what you sell, and what you want the website to accomplish.',
      icon: <Compass className="w-4 h-4 text-cyan-400" />
    },
    {
      number: '02',
      title: 'We Plan',
      desc: 'We recommend the right features and approach.',
      detail: 'We outline the ideal structure, recommend key integrations, and provide a clear, fair quote.',
      icon: <Layout className="w-4 h-4 text-cyan-400" />
    },
    {
      number: '03',
      title: 'We Build',
      desc: 'Our team designs and develops your website.',
      detail: 'We craft the UI, configure mobile responsiveness, WhatsApp buttons, and populate your content.',
      icon: <Code className="w-4 h-4 text-cyan-400" />
    },
    {
      number: '04',
      title: 'We Launch',
      desc: 'We test, optimize and help get your website live.',
      detail: 'We connect your domain, configure HTTPS security, test across devices, and publish live.',
      icon: <Rocket className="w-4 h-4 text-cyan-400" />
    }
  ];

  const commonNeeds = [
    'Modern UI/UX Design',
    'Mobile Responsive',
    'WhatsApp Chat Setup',
    'Google Maps Location',
    'Product / Service Showcase',
    'Fast Loading Speed',
    'Custom Inquiry Form',
    'Domain & Hosting Setup',
    'B2B Catalog / Gallery'
  ];

  return (
    <section
      id="pricing-section"
      className="relative py-24 bg-[#03060a] border-t border-slate-900 overflow-hidden"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Main Section Header & Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 rounded-full mb-4 uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>WEBSITE DEVELOPMENT</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Professional Websites.{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
              Reasonable Prices.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            We build modern, fast and professional websites for businesses without the expensive agency overhead.
            Tell us what you actually need, and we&apos;ll build a solution around your business, goals and budget — without unnecessary features or inflated packages.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              id="btn-affordable-get-quote"
              onClick={() => handleQuoteClick('Free Website Quote')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)] cursor-pointer"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ y: -1, backgroundColor: 'rgba(15, 23, 42, 0.9)' }}
              whileTap={{ scale: 0.98 }}
              id="btn-affordable-tell-needs"
              onClick={() => handleQuoteClick('Tell Us What You Need')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase text-slate-200 hover:text-white bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <span>TELL US WHAT YOU NEED</span>
            </motion.button>
          </div>

          {/* Small Trust Message */}
          <div className="mt-4 text-xs font-mono text-slate-400">
            From simple business websites to custom digital experiences — we build around your needs.
          </div>
        </motion.div>

        {/* 2. Value Proposition Subsection: Why Pay More Than You Need To? */}
        <div className="mt-12 bg-gradient-to-b from-slate-950/90 to-[#06090e]/95 border border-slate-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
              THE VALUE PROPOSITION
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Pay More Than You Need To?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Big agencies often bundle features and services you may never use. At INFITECH SOLUTIONS, we take a different approach.
            </p>
            <div className="mt-2 inline-flex items-center space-x-2 text-cyan-300 font-mono text-sm font-bold bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-800/40">
              <span>You tell us what you need. We build exactly that.</span>
            </div>
          </motion.div>

          {/* 6 Concise Feature Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featurePoints.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                      {feat.icon}
                    </div>
                    <div className="w-6 h-6 rounded-full bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. "Built Around Your Needs" Section & 4-Step Visual Process */}
        <div className="mt-16 pt-12 border-t border-slate-900/80">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
              <span>FLEXIBLE & TRANSPARENT</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your Website. Your Requirements. Your Budget.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Every business is different. Instead of forcing you into a fixed package, we understand your requirements first and provide a clear, reasonable quote.
            </p>
          </motion.div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400/90 tracking-wider">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                      {step.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm font-medium text-slate-300 mb-2">
                    {step.desc}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900/90 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>STEP {step.number}</span>
                  <span className="text-cyan-400 font-semibold">INFITECH STANDARD</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Interactive Needs Selector & "No Fixed Prices" Highlight Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-950 via-[#070b12] to-slate-950 border border-cyan-900/40 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: No Fixed Prices Statement (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/50 text-[11px] font-mono text-cyan-300 font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>FAIR PRICING COMMITMENT</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm sm:text-base font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-cyan-300 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>No unnecessary packages.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm sm:text-base font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-cyan-300 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>No inflated agency pricing.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm sm:text-base font-semibold text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-cyan-300 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>No paying for features you don&apos;t need.</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-medium pt-2">
                Get a clear quote based on what your business actually needs.
              </p>

              {/* Requirement Chips Picker */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Select what you need (optional):
                </div>
                <div className="flex flex-wrap gap-2">
                  {commonNeeds.map((need) => {
                    const isSelected = selectedNeeds.includes(need);
                    return (
                      <button
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/80 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                            : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {need}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: High-Conversion Quote Card (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center backdrop-blur-md shadow-xl">
              <div>
                <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
                  CUSTOM REQUIREMENT QUOTE
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Ready to Start Your Website?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  Share your business details and requirements. We will analyze your goals and provide an honest, reasonable quote within 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  id="btn-affordable-request-quote-card"
                  onClick={() => handleQuoteClick()}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                >
                  <span>REQUEST YOUR QUOTE →</span>
                </motion.button>

                <a
                  href="https://wa.me/919967603319?text=Hi%2C%20I%20want%20to%20get%20a%20reasonable%20quote%20for%20my%20business%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playSubtleClick()}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/60 rounded-xl transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>DISCUSS ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

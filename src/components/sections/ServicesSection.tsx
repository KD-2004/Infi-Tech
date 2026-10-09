import React, { useState } from 'react';
import { SERVICES } from '../../data/infitechData';
import { ServiceItem } from '../../types';
import { RevolvingServices3D } from '../three/RevolvingServices3D';
import { soundFx } from '../../utils/soundEffects';
import { AnimatedSection } from '../motion/AnimatedSection';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  Cpu,
  Globe,
  Smartphone,
  ShieldCheck,
  Cloud,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Code,
  Users,
  Briefcase
} from 'lucide-react';

interface ServicesSectionProps {
  onStartProjectForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onStartProjectForService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string>(SERVICES[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
    Globe: <Globe className="w-5 h-5 text-cyan-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-cyan-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    Cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
    Layers: <Layers className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
  };

  const filteredServices = SERVICES.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.id === selectedCategory;
  });

  return (
    <section
      id="services-section"
      className="relative py-20 bg-[#05070b] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>WE BUILD FOR LOCAL BUSINESSES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            EVERYTHING YOUR BUSINESS <span className="text-cyan-400">NEEDS ONLINE.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you run a shop, showroom, workshop, office, restaurant or local service business, we build websites around how your customers actually discover and contact you.
          </p>
        </AnimatedSection>

        {/* 1. Signature Revolving 3D Services Ecosystem */}
        <AnimatedSection delay={0.1} className="mb-20">
          <RevolvingServices3D onStartProjectForService={onStartProjectForService} />
        </AnimatedSection>

        {/* 2. Comprehensive All-Services Deep Breakdown */}
        <div id="all-services-breakdown" className="pt-10 border-t border-slate-900">
          <AnimatedSection delay={0.15} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Complete Local Website Service Catalog
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Explore in-depth specifications, features, deliverables, and typical use cases for every service.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Services (6)' },
                { id: 'business-website', label: 'Business Website' },
                { id: 'product-catalogue', label: 'Product Catalogue' },
                { id: 'ecommerce-store', label: 'E-Commerce' },
                { id: 'google-local-presence', label: 'Google Presence' },
                { id: 'whatsapp-enquiry-setup', label: 'WhatsApp Setup' },
                { id: 'website-maintenance', label: 'Maintenance' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  id={`btn-filter-service-${pill.id}`}
                  onClick={() => {
                    soundFx.playSubtleClick();
                    setSelectedCategory(pill.id);
                  }}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    selectedCategory === pill.id
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Detailed Service Accordions / Cards */}
          <div className="space-y-6">
            {filteredServices.map((service, index) => {
              const isExpanded = expandedServiceId === service.id;

              return (
                <AnimatedSection key={service.id} delay={0.1 + (index * 0.05)}>
                  <div
                    id={`service-block-${service.id}`}
                    className={`bg-slate-950/90 border transition-all duration-300 rounded-2xl overflow-hidden ${
                      isExpanded
                        ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)]'
                        : 'border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    {/* Collapsible Header */}
                    <div
                      onClick={() => {
                        soundFx.playSubtleClick();
                        setExpandedServiceId(isExpanded ? '' : service.id);
                      }}
                      className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none bg-slate-950/50 hover:bg-slate-900/30 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                          {iconMap[service.iconName]}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <span className="text-xs font-mono font-bold text-cyan-400">
                              SERVICE {service.number}
                            </span>
                            <span className="text-xs text-slate-500 font-mono">•</span>
                            <span className="text-xs text-slate-400 font-mono">
                              {service.subtitle}
                            </span>
                          </div>
                          <h4 className="text-xl sm:text-2xl font-bold text-white">
                            {service.title}
                          </h4>
                          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Expanded Detailed Specification Body */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-900 bg-slate-950/80">
                            <p className="text-sm text-slate-300 leading-relaxed mb-6">
                              {service.fullDesc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                              {/* What We Provide */}
                              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5">
                                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase mb-3">
                                  <CheckCircle className="w-4 h-4" />
                                  <span>What We Provide</span>
                                </div>
                                <ul className="space-y-2 text-xs text-slate-300">
                                  {service.whatWeProvide.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2">
                                      <span className="text-cyan-500 font-mono">•</span>
                                      <span className="leading-snug">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* What We Can Build */}
                              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5">
                                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase mb-3">
                                  <Cpu className="w-4 h-4" />
                                  <span>What We Can Build</span>
                                </div>
                                <ul className="space-y-2 text-xs text-slate-300">
                                  {service.whatWeCanBuild.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2">
                                      <span className="text-cyan-500 font-mono">•</span>
                                      <span className="leading-snug">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Typical Use Cases & Target Clients */}
                              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5">
                                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase mb-3">
                                  <Briefcase className="w-4 h-4" />
                                  <span>Use Cases & Clients</span>
                                </div>
                                <ul className="space-y-2 text-xs text-slate-300">
                                  {service.typicalUseCases.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2">
                                      <span className="text-cyan-500 font-mono">•</span>
                                      <span className="leading-snug">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Deliverables & Technologies Bottom Bar */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6 border-t border-slate-900">
                              <div className="lg:col-span-8 space-y-2">
                                <div className="text-xs font-mono font-semibold text-slate-400 uppercase">
                                  CORE DELIVERABLES:
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {service.deliverables.map((deliv, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
                                    >
                                      ✓ {deliv}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                                <button
                                  id={`btn-initiate-service-${service.id}`}
                                  onClick={() => {
                                    soundFx.playSubtleClick();
                                    onStartProjectForService(service.title);
                                  }}
                                  className="flex items-center space-x-2 px-6 py-3 text-xs font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                                >
                                  <span>START {service.title.split(' ')[0]} PROJECT</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

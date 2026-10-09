import React, { useState } from 'react';
import { SERVICES } from '../../data/infitechData';
import { ServiceItem } from '../../types';
import { soundFx } from '../../utils/soundEffects';
import {
  Bot,
  Cpu,
  Globe,
  Smartphone,
  ShieldCheck,
  Cloud,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Code2
} from 'lucide-react';

interface RevolvingServices3DProps {
  onSelectService?: (service: ServiceItem) => void;
  onStartProjectForService?: (serviceTitle: string) => void;
}

export const RevolvingServices3D: React.FC<RevolvingServices3DProps> = ({
  onStartProjectForService
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const totalServices = SERVICES.length;
  const currentService = SERVICES[activeIndex];

  // Map icon strings to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Cloud: <Cloud className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
  };

  // Rotate to specific service smoothly on click
  const handleSelectService = (index: number) => {
    setActiveIndex(index);
    setRotationAngle(-index * (360 / totalServices));
    soundFx.playNodeConnect();
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % totalServices;
    handleSelectService(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + totalServices) % totalServices;
    handleSelectService(prevIdx);
  };

  return (
    <div id="revolving-services-ecosystem" className="relative w-full py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>EVERYTHING YOUR BUSINESS NEEDS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Explore Our <span className="text-cyan-400">Website Services</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          Interactive orbital view of our 6 core local business services. Tap any orbital node to rotate it into focus.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3D Spatial Orbital Ring (6 cols on lg) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[440px] select-none">
          {/* Orbital Stage Container */}
          <div className="relative w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] flex items-center justify-center">
            {/* Ambient Background Grid Ring */}
            <div className="absolute inset-0 rounded-full border border-slate-800/60" />
            <div className="absolute inset-6 rounded-full border border-cyan-500/20 border-dashed" />
            <div className="absolute inset-16 rounded-full border border-cyan-900/30 border-dotted" />
            <div className="absolute inset-24 rounded-full border border-slate-800/80" />

            {/* Central INFITECH CORE Nexus */}
            <div 
              onClick={() => {
                soundFx.playChirp();
                handleNext();
              }}
              title="Click to cycle next domain"
              className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-950 border-2 border-cyan-500/50 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:border-cyan-400 group cursor-pointer transition-all duration-300"
            >
              <div className="text-[10px] font-mono text-cyan-300 font-bold tracking-widest text-center px-1 group-hover:scale-110 transition-transform">
                INFITECH
                <br />
                <span className="text-[8px] text-slate-400">CORE</span>
              </div>
              <div className="text-[8px] font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
                {currentService.number}/0{totalServices}
              </div>
            </div>

            {/* 4 Revolving Orbital Service Nodes */}
            {SERVICES.map((service, idx) => {
              const baseAngle = (idx * 360) / totalServices;
              const currentAngleRad = ((baseAngle + rotationAngle) * Math.PI) / 180;
              const radius = 145; // Orbital radius in pixels

              // Calculate (X, Y, Z Depth)
              const x = Math.cos(currentAngleRad) * radius;
              const y = Math.sin(currentAngleRad) * (radius * 0.45); // Elliptical 3D tilt
              const zIndex = Math.round(100 + Math.sin(currentAngleRad) * 50);
              const scale = 0.8 + ((y + radius * 0.45) / (radius * 0.9)) * 0.4;
              const opacity = 0.5 + ((y + radius * 0.45) / (radius * 0.9)) * 0.5;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={service.id}
                  id={`orbital-node-${service.id}`}
                  onClick={() => handleSelectService(idx)}
                  className={`absolute flex flex-col items-center justify-center p-2 rounded-xl focus:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-2 border-cyan-400 text-white shadow-[0_0_30px_rgba(34,211,238,0.55)] scale-110 ring-2 ring-cyan-500/30'
                      : 'bg-slate-950/90 border border-slate-800 text-slate-400 hover:border-cyan-700/60 hover:text-cyan-300 hover:scale-105'
                  }`}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  title={`Click to view ${service.title}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {iconMap[service.iconName] || <Cpu className="w-4 h-4" />}
                  </div>
                  <span className="text-[9px] font-mono font-bold mt-1 tracking-wider whitespace-nowrap max-w-[80px] truncate text-center">
                    {service.number} {service.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Clean Interactive Navigation Bar */}
          <div className="flex flex-col items-center gap-3 mt-6 z-20">
            <div className="flex items-center gap-2">
              <button
                id="btn-orbit-prev"
                onClick={handlePrev}
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white rounded-xl transition-all duration-200"
                aria-label="Previous Service Domain"
                title="Previous Domain"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Service Number Quick Selectors */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl">
                {SERVICES.map((s, idx) => (
                  <button
                    key={s.id}
                    id={`btn-orbit-dot-${s.id}`}
                    onClick={() => handleSelectService(idx)}
                    className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-all duration-200 ${
                      idx === activeIndex
                        ? 'bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                    title={s.title}
                  >
                    {s.number}
                  </button>
                ))}
              </div>

              <button
                id="btn-orbit-next"
                onClick={handleNext}
                className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white rounded-xl transition-all duration-200"
                aria-label="Next Service Domain"
                title="Next Domain"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500 tracking-wide">
              Click any orbital node or number above to inspect
            </span>
          </div>
        </div>

        {/* Right Column: Active Service Synchronized Deep-Dive Card (6 cols on lg) */}
        <div className="lg:col-span-6">
          <div
            id={`service-detail-card-${currentService.id}`}
            className="bg-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Background subtle watermark number */}
            <div className="absolute top-4 right-6 font-mono text-7xl font-black text-slate-900/80 pointer-events-none select-none">
              {currentService.number}
            </div>

            {/* Header / Badge */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                {iconMap[currentService.iconName] || <Cpu className="w-5 h-5" />}
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  SERVICE {currentService.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentService.title}
                </h3>
              </div>
            </div>

            {/* Subtitle & Full Description */}
            <p className="text-sm font-medium text-slate-300 mb-2">
              {currentService.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {currentService.fullDesc}
            </p>

            {/* What We Provide (Key Deliverables & Capabilities) */}
            <div className="mb-6">
              <div className="text-xs font-mono font-semibold tracking-wider text-slate-300 uppercase mb-3 flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>CORE DELIVERABLES & CAPABILITIES</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                {currentService.whatWeProvide.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-cyan-500 font-mono mt-0.5">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Grid */}
            <div className="mb-6 pt-4 border-t border-slate-900">
              <div className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mb-2 flex items-center space-x-2">
                <Code2 className="w-3.5 h-3.5 text-slate-400" />
                <span>DEPLOYED TECHNOLOGIES</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentService.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[11px] font-mono text-slate-300 bg-slate-900/90 border border-slate-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stable Action Button */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-900">
              <button
                id={`btn-service-cta-${currentService.id}`}
                onClick={() => {
                  soundFx.playSubtleClick();
                  if (onStartProjectForService) {
                    onStartProjectForService(currentService.title);
                  } else {
                    const contactElem = document.getElementById('contact-section');
                    contactElem?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center space-x-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>INITIATE {currentService.title.split(' ')[0]} PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#all-services-breakdown"
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
              >
                View Full Specification ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

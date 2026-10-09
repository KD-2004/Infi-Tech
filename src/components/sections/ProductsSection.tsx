import React from 'react';
import { PRODUCTS } from '../../data/infitechData';
import { soundFx } from '../../utils/soundEffects';
import {
  Layers,
  MessageSquare,
  MapPin,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ProductsSectionProps {
  onStartProject: (productName?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onStartProject }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'whatsapp-calling': <MessageSquare className="w-5 h-5 text-cyan-400" />,
    'product-showcase': <Layers className="w-5 h-5 text-cyan-400" />,
    'google-maps-presence': <MapPin className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <section
      id="products-section"
      className="relative py-20 bg-[#05070b] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>BUILT TO CONVERT LOCAL VISITORS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            ESSENTIAL WEBSITE <span className="text-cyan-400">FEATURES.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything included to make your website practical, easy to navigate, and focused on driving real customer enquiries.
          </p>
        </div>

        {/* 3-column Grid of Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group shadow-lg"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {iconMap[product.id] || <Layers className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                        {product.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-md">
                    {product.badge}
                  </span>
                </div>

                {/* Tagline & Description */}
                <p className="text-xs font-mono font-medium text-slate-400 mb-2">
                  {product.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                    FEATURE HIGHLIGHTS:
                  </div>
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-mono mt-0.5">•</span>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Action */}
              <div className="pt-6 border-t border-slate-900">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-900/80 border border-slate-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  id={`btn-product-deploy-${product.id}`}
                  onClick={() => {
                    soundFx.playSubtleClick();
                    onStartProject(`Request ${product.name}`);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all"
                >
                  <span>GET THIS FEATURE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

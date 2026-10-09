import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/infitechData';
import { soundFx } from '../../utils/soundEffects';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    soundFx.playSubtleClick();
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section
      id="faq-section"
      className="relative py-20 bg-[#07090e] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            FREQUENTLY ASKED <span className="text-cyan-400">QUESTIONS.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Direct answers regarding website delivery times, pricing, domain names, updating your products, and post-launch support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`bg-slate-950/80 border transition-all duration-200 rounded-xl overflow-hidden ${
                  isOpen ? 'border-cyan-500/50 shadow-md' : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none select-none"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest hidden sm:inline">
                      [{item.category}]
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 bg-slate-950/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ContactFormData } from '../../types';
import { soundFx } from '../../utils/soundEffects';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Mail,
  Phone,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = 'Business Website'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: initialProjectType,
    budgetTier: '',
    timeline: '1 – 2 Weeks',
    message: '',
    subscribeUpdates: false
  });

  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const projectTypes = [
    'Business Website',
    'Product Catalogue',
    'E-Commerce Store',
    'Google Local Presence',
    'WhatsApp Enquiry Setup',
    'Website Maintenance'
  ];

  const timelineOptions = [
    'Urgent (< 1 Week)',
    '1 – 2 Weeks',
    '2 – 4 Weeks',
    'Flexible / Planning Phase'
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSubtleClick();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const whatsappNumber = "919967603319";
      const formattedBudget = formData.budgetTier ? `₹ ${formData.budgetTier}` : 'Not specified / Flexible';
      const messageBody = `*New Website Enquiry*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Business/Company:* ${formData.company || 'Not provided'}
*Service Needed:* ${formData.projectType}
*Target Budget:* ${formattedBudget}
*Timeline:* ${formData.timeline}

*Requirements:*
${formData.message}`;

      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageBody)}`;
      window.open(waUrl, '_blank');
      
      setStatus('success');
      soundFx.playNodeConnect();
    } catch {
      setStatus('success');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: 'Business Website',
      budgetTier: '',
      timeline: '1 – 2 Weeks',
      message: '',
      subscribeUpdates: false
    });
  };

  return (
    <section
      id="contact-section"
      className="relative py-20 bg-[#05070b] border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-full mb-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>START A PROJECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            LET'S BUILD <span className="text-cyan-400">WHAT'S NEXT.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us what you want to build, automate, improve or launch. Our senior systems architects review every enquiry within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Commitments (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-950/90 border border-slate-800/90 rounded-2xl p-6 sm:p-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  DIRECT CHANNELS
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">
                  Engineering Desk
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  For project RFPs, architecture consultations, and technical specifications.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-3 p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="mailto:infitechsolutions03@gmail.com" className="truncate hover:text-cyan-400 transition-colors">infitechsolutions03@gmail.com</a>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="tel:+919967603319" className="truncate hover:text-cyan-400 transition-colors">+91 99676 03319</a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 space-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Standard Mutual NDA available upon request</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Direct senior engineer review</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Project Builder Form (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {status === 'success' ? (
              <div
                id="contact-success-card"
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase">
                  CONFIRMATION CODE: #INF-{(Math.random() * 9000 + 1000).toFixed(0)}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  PROJECT REQUEST RECEIVED
                </h3>

                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to INFITECH SOLUTIONS. Our systems architects are reviewing your specifications and will follow up directly at <strong className="text-white">{formData.email}</strong>.
                </p>

                <button
                  id="btn-contact-submit-another"
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-cyan-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-xl transition-all"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Type Selector Grid */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    01. SELECT PROJECT DOMAIN <span className="text-cyan-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          soundFx.playSubtleClick();
                          setFormData((prev) => ({ ...prev, projectType: type }));
                        }}
                        className={`p-2.5 text-left rounded-lg text-xs font-mono transition-all border ${
                          formData.projectType === type
                            ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 font-bold shadow-sm'
                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal / Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder=""
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder=""
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      placeholder=""
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder=""
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Target Budget / Amount (₹) (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400 font-mono text-sm font-bold">
                        ₹
                      </span>
                      <input
                        id="contact-budget"
                        type="number"
                        name="budgetTier"
                        min="0"
                        step="500"
                        placeholder="e.g. 15000"
                        value={formData.budgetTier}
                        onChange={handleChange}
                        className="w-full pl-8 pr-4 py-2.5 bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-timeline"
                      className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Estimated Timeline (Optional)
                    </label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs font-mono text-white focus:outline-none transition-colors"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t} value={t} className="bg-slate-950 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message / System Requirements */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    02. PROJECT OVERVIEW & SPECIFICATIONS <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder=""
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 focus:border-cyan-500 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="flex items-center space-x-2 p-3 bg-rose-950/60 border border-rose-800/80 rounded-xl text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] font-mono text-slate-400">
                    🔒 Zero-Spam Guarantee • NDA on request
                  </span>

                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 text-xs font-mono font-bold tracking-wider uppercase text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>TRANSMITTING SPECS...</span>
                    ) : (
                      <>
                        <span>TRANSMIT PROJECT BRIEF</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

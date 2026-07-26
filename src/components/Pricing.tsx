import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenAuth?: (mode?: 'register' | 'login') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenAuth }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Free Starter',
      priceMonthly: '$0',
      priceAnnual: '$0',
      description: 'Ideal for trying out basic AI explanations and starter lessons.',
      features: [
        'Access to 5 intro video lessons',
        '10 AI Tutor questions / month',
        'Basic progress tracking',
        'Community Q&A forum access',
      ],
      cta: 'Get Started Free',
      popular: false,
      buttonStyle: 'bg-slate-900 text-white dark:bg-white/10 dark:text-white hover:bg-slate-800 dark:hover:bg-white/20 border border-slate-700 dark:border-white/15',
    },
    {
      name: 'Pro Student',
      priceMonthly: '$29',
      priceAnnual: '$22',
      description: 'The ultimate AI ecosystem for Advanced Level and University students.',
      features: [
        'Unlimited AI Tutor questions & step-by-step reasoning',
        'Full access to all 5 core subjects & 300+ lessons',
        '10,000+ past paper practice questions with AI grading',
        'AI Exam Score Predictor & weakness diagnostic heat map',
        'Interactive 3D visual physics & chemistry labs',
        '24/7 Priority Discord & Educator support',
      ],
      cta: 'Start 7-Day Free Trial',
      popular: true,
      buttonStyle: 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-slate-950 font-extrabold shadow-[0_0_30px_rgba(245,208,97,0.5)] hover:scale-105',
    },
    {
      name: 'Institutional / School',
      priceMonthly: '$99',
      priceAnnual: '$79',
      description: 'Built for schools, educators, and university faculties.',
      features: [
        'Everything in Pro Student for up to 30 seats',
        'Teacher admin command dashboard & student analytics',
        'Custom curriculum & exam paper uploading',
        'Dedicated account manager & SLA guarantee',
        'Custom SSO & security compliance',
      ],
      cta: 'Register Institution',
      popular: false,
      buttonStyle: 'bg-slate-900 text-white dark:bg-white/10 dark:text-white hover:bg-slate-800 dark:hover:bg-white/20 border border-slate-700 dark:border-white/15',
    },
  ];

  return (
    <section id="pricing" className="relative py-28 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-cyan top-1/2 right-1/4 opacity-50 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#D4AF37] dark:text-[#F5D061] border border-[#D4AF37]/30 dark:border-[#F5D061]/30 mb-4">
            <Zap className="w-3.5 h-3.5" /> TRANSPARENT MEMBERSHIP
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Invest in your <span className="text-gradient-cyan">academic future.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 mb-8">
            Choose the plan that fits your learning pace. Cancel anytime.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-200/80 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 backdrop-blur-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                !isAnnual ? 'bg-[#D4AF37] text-slate-950 font-extrabold' : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-slate-950 font-extrabold shadow-[0_0_15px_rgba(245,208,97,0.4)]' : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-mono font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl glass-panel p-8 border flex flex-col justify-between transition-all duration-500 ${
                plan.popular
                  ? 'border-[#F5D061]/60 bg-white dark:bg-gradient-to-b dark:from-[#D4AF37]/15 dark:via-[#080A10] dark:to-[#050505] shadow-xl dark:shadow-[0_0_60px_rgba(245,208,97,0.25)] scale-105 z-20'
                  : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/30 z-10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D061] text-slate-950 font-mono text-[10px] font-extrabold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-slate-950" /> Most Popular for Students
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-600 dark:text-white/60 mb-6 min-h-[36px]">{plan.description}</p>

                <div className="mb-6 flex items-baseline gap-1 font-mono">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-white/50">/ month</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 dark:text-white/80">
                      <Check className="w-4 h-4 text-[#D4AF37] dark:text-[#F5D061] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenAuth && onOpenAuth('register')}
                  className={`w-full py-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${plan.buttonStyle}`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-slate-400 dark:text-white/40 font-mono mt-3">
                  No credit card required for trial
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

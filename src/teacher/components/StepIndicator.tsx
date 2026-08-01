import React from 'react';
import { UserCheck, ShieldCheck, Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    {
      number: 1,
      title: 'Academic Profile',
      subtitle: 'Personal & Subject Stream',
      icon: <UserCheck className="w-4 h-4" />,
    },
    {
      number: 2,
      title: 'Account Security',
      subtitle: 'Credentials & Contact',
      icon: <ShieldCheck className="w-4 h-4" />,
    },
  ];

  return (
    <div className="w-full mb-8 font-mono">
      {/* Top Header Label */}
      <div className="flex items-center justify-between mb-3 text-xs font-semibold">
        <span className="text-[var(--brand-primary)] uppercase tracking-wider">Teacher Onboarding Wizard</span>
        <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-brand)]">
          {currentStep === 3 ? 'Onboarding Completed 🎉' : `Step ${currentStep} of 2`}
        </span>
      </div>

      {/* Stepper Grid Container */}
      <div className="grid grid-cols-2 gap-3 relative">
        {steps.map((step) => {
          const isCompleted = currentStep > step.number || currentStep === 3;
          const isActive = currentStep === step.number;

          return (
            <div
              key={step.number}
              className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
                isActive
                  ? 'bg-[var(--bg-pill)] border-[var(--brand-primary)] shadow-md ring-2 ring-[var(--brand-glow)]'
                  : isCompleted
                  ? 'bg-[var(--bg-card)] border-emerald-500/30 text-emerald-500'
                  : 'bg-[var(--bg-card)] border-[var(--border-primary)] opacity-60'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 border transition-all ${
                  isCompleted
                    ? 'bg-emerald-500 text-white border-emerald-500'
                    : isActive
                    ? 'bg-[var(--brand-primary)] text-white border-[var(--brand-primary)] shadow-md'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-primary)]'
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5 stroke-[3]" /> : step.icon}
              </div>

              <div className="hidden sm:block min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-[var(--text-primary)] truncate">
                    {step.title}
                  </span>
                </div>
                <span className="text-[11px] text-[var(--text-secondary)] block truncate">
                  {step.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Progress Indicator Bar */}
      <div className="mt-4 h-1.5 w-full bg-[var(--bg-secondary)] rounded-full overflow-hidden border border-[var(--border-primary)]">
        <div
          className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-emerald-500 transition-all duration-500 ease-out rounded-full"
          style={{
            width: currentStep === 1 ? '50%' : currentStep === 2 ? '90%' : '100%',
          }}
        />
      </div>
    </div>
  );
};

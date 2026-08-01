import React from 'react';
import { Check, X } from 'lucide-react';

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  if (!password) return null;

  const checks = [
    { label: 'At least 8 characters long', met: password.length >= 8 },
    { label: 'Contains a number (0-9)', met: /\d/.test(password) },
    { label: 'Contains uppercase letter (A-Z)', met: /[A-Z]/.test(password) },
    { label: 'Contains special character (!@#$%^&*)', met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const score = checks.filter((c) => c.met).length;

  const getStrengthLabel = () => {
    switch (score) {
      case 0:
      case 1:
        return { label: 'Weak Password', color: 'bg-red-500', text: 'text-red-500', width: 'w-1/4' };
      case 2:
        return { label: 'Fair Password', color: 'bg-amber-500', text: 'text-amber-500', width: 'w-2/4' };
      case 3:
        return { label: 'Good Password', color: 'bg-blue-500', text: 'text-blue-500', width: 'w-3/4' };
      case 4:
        return { label: 'Strong & Secure', color: 'bg-emerald-500', text: 'text-emerald-500', width: 'w-full' };
      default:
        return { label: 'Weak', color: 'bg-slate-400', text: 'text-slate-400', width: 'w-0' };
    }
  };

  const strength = getStrengthLabel();

  return (
    <div className="space-y-3 pt-1 animate-fadeIn">
      {/* Strength Bar */}
      <div>
        <div className="flex justify-between items-center text-xs mb-1.5 font-mono">
          <span className="text-[var(--text-secondary)]">Password Strength:</span>
          <span className={`font-bold ${strength.text}`}>{strength.label}</span>
        </div>
        <div className="h-1.5 w-full bg-[var(--bg-secondary)] rounded-full overflow-hidden border border-[var(--border-primary)]">
          <div className={`h-full ${strength.color} ${strength.width} transition-all duration-300 rounded-full`} />
        </div>
      </div>

      {/* Criteria Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono">
        {checks.map((criterion, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            {criterion.met ? (
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            ) : (
              <X className="w-3.5 h-3.5 text-[var(--text-subtle)] shrink-0" />
            )}
            <span className={criterion.met ? 'text-[var(--text-primary)] font-semibold' : 'text-[var(--text-muted)]'}>
              {criterion.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

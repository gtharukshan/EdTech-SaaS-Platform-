import React, { useState } from 'react';
import { Mail, Phone, Lock, ArrowLeft, ShieldCheck } from 'lucide-react';
import { FormInput } from './components/FormInput';
import { PasswordStrength } from './components/PasswordStrength';

export interface Step2Data {
  email: string;
  countryCode: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

interface TeacherAccountStepProps {
  initialData: Step2Data;
  onBack: () => void;
  onSubmit: (data: Step2Data) => void;
}

const COUNTRY_CODES = [
  { code: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
];

export const TeacherAccountStep: React.FC<TeacherAccountStepProps> = ({ initialData, onBack, onSubmit }) => {
  const [formData, setFormData] = useState<Step2Data>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof Step2Data, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Step2Data, string>> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Gmail address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid Gmail address (e.g. educator@gmail.com)';
    }

    // Mobile validation
    const phoneRegex = /^[0-9]{9,11}$/;
    const cleanPhone = formData.mobile.replace(/\D/g, '');
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile phone number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.mobile = 'Please enter a valid 9 to 10 digit mobile number';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      {/* Form Section Header */}
      <div className="border-b border-[var(--border-primary)] pb-4">
        <h2 className="text-xl font-extrabold text-[var(--text-primary)]">Account Security & Credentials</h2>
        <p className="text-xs text-[var(--text-secondary)] mt-1">
          Set up your portal login details and phone contact for multi-factor verification.
        </p>
      </div>

      {/* Field 1: Gmail Address */}
      <FormInput
        label="Gmail Address"
        type="email"
        required
        icon={<Mail className="w-4.5 h-4.5" />}
        placeholder="e.g. teacher.jeyakumar@gmail.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />

      {/* Field 2: Country Code & Mobile Number */}
      <div className="space-y-1.5 w-full">
        <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
          Mobile Number <span className="text-[var(--color-error)]">*</span>
        </label>
        <div className="flex gap-2">
          <select
            value={formData.countryCode}
            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
            className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] text-sm px-3 py-3 outline-none focus:border-[var(--brand-primary)] transition-all font-mono"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>

          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
              <Phone className="w-4.5 h-4.5" />
            </div>
            <input
              type="tel"
              placeholder="77 123 4567"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className={`w-full rounded-xl bg-[var(--bg-card)] border ${
                errors.mobile ? 'border-[var(--color-error)]' : 'border-[var(--border-primary)] focus:border-[var(--brand-primary)]'
              } text-[var(--text-primary)] text-sm py-3 pl-10 pr-3.5 outline-none transition-all placeholder:[var(--text-subtle)] focus:ring-2 focus:ring-[var(--brand-glow)] font-mono`}
            />
          </div>
        </div>
        {errors.mobile && (
          <p className="text-xs text-[var(--color-error)] font-medium mt-1 flex items-center gap-1">
            <span>⚠️</span> {errors.mobile}
          </p>
        )}
      </div>

      {/* Field 3: Password */}
      <div className="space-y-2">
        <FormInput
          label="Password"
          type="password"
          required
          icon={<Lock className="w-4.5 h-4.5" />}
          placeholder="••••••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
        />
        {/* Real-time Password Strength Indicator */}
        <PasswordStrength password={formData.password} />
      </div>

      {/* Field 4: Confirm Password */}
      <FormInput
        label="Confirm Password"
        type="password"
        required
        icon={<Lock className="w-4.5 h-4.5" />}
        placeholder="••••••••••••"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        error={errors.confirmPassword}
      />

      {/* Action Buttons: Back & Submit */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-primary)]">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] font-bold text-sm transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Step 1</span>
        </button>

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-[var(--btn-primary-text)] font-extrabold text-sm shadow-lg shadow-[var(--brand-glow)] hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          <ShieldCheck className="w-5 h-5" />
          <span>Create Teacher Account</span>
        </button>
      </div>
    </form>
  );
};

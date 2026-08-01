import React, { useState } from 'react';
import { User, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { FormInput } from './components/FormInput';
import { SubjectDropdown, SubjectType } from './components/SubjectDropdown';

export interface Step1Data {
  fullName: string;
  subject: SubjectType | '';
  address: string;
  degree: string;
}

interface TeacherProfileStepProps {
  initialData: Step1Data;
  onNext: (data: Step1Data) => void;
}

export const TeacherProfileStep: React.FC<TeacherProfileStepProps> = ({ initialData, onNext }) => {
  const [formData, setFormData] = useState<Step1Data>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof Step1Data, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof Step1Data, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full official name';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select your subject stream specialization';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Residential or Institute address is required';
    }

    if (!formData.degree.trim()) {
      newErrors.degree = 'Academic degree or university qualification is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      {/* Form Section Banner Header */}
      <div className="border-b border-[var(--border-primary)] pb-4">
        <h2 className="text-xl font-extrabold text-[var(--text-primary)]">Personal & Academic Details</h2>
        <p className="text-xs text-[var(--text-secondary)] mt-1">
          Provide your official educator details for academy verified credentials.
        </p>
      </div>

      {/* Field 1: Full Name */}
      <FormInput
        label="Full Name"
        required
        icon={<User className="w-4.5 h-4.5" />}
        placeholder="e.g. Prof. Sivanesan K. / Eng. R. Jeyakumar"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        error={errors.fullName}
      />

      {/* Field 2: Subject Stream Dropdown */}
      <SubjectDropdown
        value={formData.subject}
        onChange={(subject) => setFormData({ ...formData, subject })}
        error={errors.subject}
      />

      {/* Field 3: Degree / Qualification */}
      <FormInput
        label="Degree / Academic Qualification"
        required
        icon={<GraduationCap className="w-4.5 h-4.5" />}
        placeholder="e.g. B.Sc. Engineering (Hons) / B.Sc. Physical Science (First Class)"
        value={formData.degree}
        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
        error={errors.degree}
      />

      {/* Field 4: Address */}
      <FormInput
        label="Residential / Main Institute Address"
        required
        isTextArea
        rows={3}
        icon={<MapPin className="w-4.5 h-4.5" />}
        placeholder="Enter street address, city, and province details..."
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        error={errors.address}
      />

      {/* Step Action Button */}
      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-[var(--btn-primary-text)] font-extrabold text-sm shadow-lg shadow-[var(--brand-glow)] hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          <span>Continue to Account Setup</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

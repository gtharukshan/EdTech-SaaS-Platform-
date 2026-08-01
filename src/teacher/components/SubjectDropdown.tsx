import React from 'react';
import { Calculator, Atom, FlaskConical, Dna, ChevronDown } from 'lucide-react';

export type SubjectType = 'Combined Mathematics' | 'Physics' | 'Chemistry' | 'Biology';

interface SubjectDropdownProps {
  value: SubjectType | '';
  onChange: (subject: SubjectType) => void;
  error?: string;
}

export const SUBJECTS: { label: SubjectType; desc: string; icon: React.ReactNode; color: string }[] = [
  {
    label: 'Combined Mathematics',
    desc: 'Pure & Applied Mathematics for Advanced Level',
    icon: <Calculator className="w-5 h-5" />,
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-500 border-blue-500/30',
  },
  {
    label: 'Physics',
    desc: 'Advanced Physics Mechanics, Waves & Electronics',
    icon: <Atom className="w-5 h-5" />,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-500 border-purple-500/30',
  },
  {
    label: 'Chemistry',
    desc: 'Organic, Inorganic & Physical Chemistry',
    icon: <FlaskConical className="w-5 h-5" />,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-500 border-emerald-500/30',
  },
  {
    label: 'Biology',
    desc: 'Biological Sciences & Human Physiology',
    icon: <Dna className="w-5 h-5" />,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-500 border-amber-500/30',
  },
];

export const SubjectDropdown: React.FC<SubjectDropdownProps> = ({ value, onChange, error }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedSubject = SUBJECTS.find((s) => s.label === value);

  return (
    <div className="space-y-1.5 w-full relative">
      <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
        Subject Specialization <span className="text-[var(--color-error)]">*</span>
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full rounded-xl bg-[var(--bg-card)] border ${
            error ? 'border-[var(--color-error)]' : 'border-[var(--border-primary)] focus:border-[var(--brand-primary)]'
          } text-[var(--text-primary)] text-sm p-3.5 outline-none transition-all flex items-center justify-between gap-3 text-left focus:ring-2 focus:ring-[var(--brand-glow)]`}
        >
          {selectedSubject ? (
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedSubject.color} border`}>
                {selectedSubject.icon}
              </div>
              <div>
                <span className="font-semibold text-sm text-[var(--text-primary)] block">
                  {selectedSubject.label}
                </span>
                <span className="text-xs text-[var(--text-secondary)]">{selectedSubject.desc}</span>
              </div>
            </div>
          ) : (
            <span className="text-[var(--text-subtle)] text-sm">Select your teaching subject stream...</span>
          )}

          <ChevronDown
            className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-2 w-full rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-primary)] shadow-2xl overflow-hidden animate-fadeIn backdrop-blur-xl">
            <div className="p-2 space-y-1 max-h-72 overflow-y-auto">
              {SUBJECTS.map((subject) => {
                const isSelected = subject.label === value;
                return (
                  <button
                    key={subject.label}
                    type="button"
                    onClick={() => {
                      onChange(subject.label);
                      setIsOpen(false);
                    }}
                    className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all text-left ${
                      isSelected
                        ? 'bg-[var(--bg-pill)] border border-[var(--border-brand)]'
                        : 'hover:bg-[var(--btn-hover-overlay)] border border-transparent'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${subject.color} border`}>
                      {subject.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[var(--text-primary)]">{subject.label}</span>
                        {isSelected && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[var(--brand-primary)] text-white">
                            Selected
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[var(--text-secondary)] block mt-0.5">{subject.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs text-[var(--color-error)] font-medium mt-1 animate-fadeIn flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
};

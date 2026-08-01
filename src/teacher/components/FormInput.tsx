import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  isTextArea?: boolean;
  rows?: number;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  icon,
  error,
  isTextArea = false,
  rows = 3,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `form-input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="space-y-1.5 w-full">
      <label 
        htmlFor={inputId}
        className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider"
      >
        {label} {props.required && <span className="text-[var(--color-error)]">*</span>}
      </label>

      <div className="relative rounded-xl shadow-sm transition-all">
        {icon && !isTextArea && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
            {icon}
          </div>
        )}

        {isTextArea ? (
          <textarea
            id={inputId}
            rows={rows}
            className={`w-full rounded-xl bg-[var(--bg-card)] border ${
              error ? 'border-[var(--color-error)]' : 'border-[var(--border-primary)] focus:border-[var(--brand-primary)]'
            } text-[var(--text-primary)] text-sm p-3.5 outline-none transition-all placeholder:[var(--text-subtle)] focus:ring-2 focus:ring-[var(--brand-glow)] ${className}`}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={inputId}
            className={`w-full rounded-xl bg-[var(--bg-card)] border ${
              error ? 'border-[var(--color-error)]' : 'border-[var(--border-primary)] focus:border-[var(--brand-primary)]'
            } text-[var(--text-primary)] text-sm py-3 outline-none transition-all placeholder:[var(--text-subtle)] focus:ring-2 focus:ring-[var(--brand-glow)] ${
              icon ? 'pl-10 pr-3.5' : 'px-3.5'
            } ${className}`}
            {...props}
          />
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

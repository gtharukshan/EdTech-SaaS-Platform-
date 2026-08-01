import React from 'react';
import { CheckCircle2, Award, Mail, Phone, MapPin, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Step1Data } from './TeacherProfileStep';
import { Step2Data } from './TeacherAccountStep';

interface TeacherSignupSuccessProps {
  profileData: Step1Data;
  accountData: Step2Data;
  onContinueToDashboard: () => void;
}

export const TeacherSignupSuccess: React.FC<TeacherSignupSuccessProps> = ({
  profileData,
  accountData,
  onContinueToDashboard,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn text-center">
      {/* Celebration Header Badge */}
      <div className="inline-flex items-center justify-center p-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 animate-bounce">
        <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
      </div>

      <div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-brand)] inline-flex items-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Verified Academy Educator Registration
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
          Your Teacher Account Has Been Created Successfully!
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-md mx-auto">
          Welcome to the faculty portal. Your academic specialization badge and course management tools are now ready.
        </p>
      </div>

      {/* Teacher Profile Preview Card */}
      <div className="p-6 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-xl text-left space-y-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-primary)]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Card Header Profile Row */}
        <div className="flex items-start justify-between gap-4 flex-wrap border-b border-[var(--border-primary)] pb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white flex items-center justify-center text-xl font-black shadow-md border border-white/20">
              {profileData.fullName
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase() || 'T'}
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[var(--text-primary)]">{profileData.fullName}</h3>
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] mt-0.5">
                <Award className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
                <span>{profileData.degree}</span>
              </div>
            </div>
          </div>

          <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-xs font-extrabold shadow-sm flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{profileData.subject} Specialist</span>
          </span>
        </div>

        {/* Card Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[var(--brand-primary)] shrink-0" />
            <div className="min-w-0">
              <span className="text-[var(--text-subtle)] block text-[10px] uppercase font-bold">Gmail Contact</span>
              <span className="text-[var(--text-primary)] font-semibold truncate block">{accountData.email}</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-[var(--text-subtle)] block text-[10px] uppercase font-bold">Verified Phone</span>
              <span className="text-[var(--text-primary)] font-semibold truncate block">
                {accountData.countryCode} {accountData.mobile}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center gap-2.5 sm:col-span-2">
            <MapPin className="w-4 h-4 text-[var(--brand-secondary)] shrink-0" />
            <div className="min-w-0">
              <span className="text-[var(--text-subtle)] block text-[10px] uppercase font-bold">Institute / Location</span>
              <span className="text-[var(--text-primary)] font-semibold truncate block">{profileData.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <button
          onClick={onContinueToDashboard}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-indigo-600 to-[var(--brand-secondary)] text-white font-extrabold text-base shadow-xl shadow-[var(--brand-glow)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
        >
          <span>Continue to Teacher Dashboard</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

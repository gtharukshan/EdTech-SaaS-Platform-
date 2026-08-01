import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, Cpu, CheckCircle2, Zap, HelpCircle, Code, RefreshCw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PromptPreset {
  title: string;
  category: string;
  question: string;
  reasoning: string[];
  answer: string;
}

export const AiTutorDemo: React.FC = () => {
  const presets: PromptPreset[] = [
    {
      title: 'Combined Maths',
      category: 'Combined Mathematics',
      question: 'How do I solve ∫ x · e^x dx using integration by parts, and apply it to Statics velocity vectors?',
      reasoning: [
        'Applying LIATE rule for Pure Maths: u = x, dv = e^x dx',
        'Computing derivatives & integrals: du = dx, v = e^x',
        'Evaluating vector calculus equation: ∫ u dv = u·v - ∫ v du',
      ],
      answer: 'Set u = x (hence du = dx) and dv = e^x dx (hence v = e^x). Applying integration by parts: ∫ x·e^x dx = x·e^x - ∫ e^x dx = x·e^x - e^x + C = e^x(x - 1) + C. In Applied Mechanics, this models continuous vector acceleration vectors over velocity paths.',
    },
    {
      title: 'Physics',
      category: 'Physics',
      question: 'Explain Quantum Entanglement simply with a mathematical intuition.',
      reasoning: [
        'Parsing quantum mechanics state vectors |Ψ⟩',
        'Calculating Bell State matrix superposition: (|00⟩ + |11⟩) / √2',
        'Generating step-by-step physical analogy',
      ],
      answer: 'Quantum entanglement occurs when two particles become deeply connected so that measuring the quantum state of one instantly dictates the state of the other, regardless of distance. In linear algebra terms, their joint wave function cannot be factored into individual state vectors: |Ψ⟩ = (|00⟩ + |11⟩) / √2.',
    },
    {
      title: 'Chemistry',
      category: 'Chemistry',
      question: 'Explain the mechanism of Electrophilic Addition in alkenes with HBr.',
      reasoning: [
        'Identifying HBr dipole Hδ+ — Brδ-',
        'Heterolytic fission of H-Br bond forming carbocation intermediate',
        'Nucleophilic attack by bromide ion according to Markovnikov rule',
      ],
      answer: 'The electron-rich C=C double bond attacks the electrophilic hydrogen of HBr, forming a carbocation intermediate on the more substituted carbon (Markovnikov rule). The bromide ion then rapidly attacks the carbocation, yielding bromoalkane.',
    },
    {
      title: 'Biology',
      category: 'Biology',
      question: 'How does CRISPR-Cas9 targeted gene editing operate at the molecular level?',
      reasoning: [
        'Binding of synthetic guide RNA (gRNA) to target DNA PAM sequence',
        'Cas9 endonuclease double-strand break induction at specific locus',
        'Cellular repair via Non-Homologous End Joining (NHEJ) or HDR',
      ],
      answer: 'CRISPR-Cas9 uses a guide RNA (gRNA) complementary to a 20-base sequence adjacent to a PAM site. The Cas9 enzyme creates a precise double-stranded DNA break. Cellular repair pathways (NHEJ or HDR) then introduce gene knockouts or insertion of target genes.',
    },
  ];

  const [selectedPreset, setSelectedPreset] = useState<PromptPreset>(presets[0]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>('');
  const [showConfettiReward, setShowConfettiReward] = useState<boolean>(false);

  const handleSelectPreset = (preset: PromptPreset) => {
    setSelectedPreset(preset);
    setActiveStep(0);
    setIsThinking(true);

    setTimeout(() => setActiveStep(1), 600);
    setTimeout(() => setActiveStep(2), 1200);
    setTimeout(() => setIsThinking(false), 1800);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const newPreset: PromptPreset = {
      title: 'Custom Query',
      category: 'User Custom Question',
      question: customInput,
      reasoning: [
        'Searching Academy knowledge graph...',
        'Cross-referencing 50,000+ academic papers and textbook models...',
        'Structuring personalized step-by-step explanation...',
      ],
      answer: `Academy AI Tutor response for: "${customInput}". The AI model breaks this down into fundamental principles, providing clear mathematical proofs and interactive practice exercises customized for your learning speed.`,
    };

    handleSelectPreset(newPreset);
    setCustomInput('');
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5D061', '#FFFFFF'],
    });
    setShowConfettiReward(true);
  };

  return (
    <section id="ai-tutor" className="relative py-28 bg-[var(--bg-main)] overflow-hidden transition-colors duration-300">
      <div className="ambient-glow-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--brand-gold-start)] border border-[var(--border-brand)] mb-4">
            <Bot className="w-3.5 h-3.5" /> INTERACTIVE AI DEMO
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            Experience the <span className="text-gradient-cyan">Academy AI Tutor.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            Ask any question across physics, mathematics, chemistry, or code and watch real-time step-by-step neural reasoning.
          </p>
        </div>

        {/* AI Tutor Live Workspace Container */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-6 sm:p-8 border border-[var(--border-primary)] shadow-lg relative bg-[var(--bg-card)]">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[var(--border-primary)] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] p-0.5 shadow-[0_0_20px_var(--shadow-glow)]">
                <div className="w-full h-full bg-[var(--bg-card)] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[var(--brand-gold-start)]" />
                </div>
              </div>
              <div>
                <div className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
                  Academy Reasoning Engine v3.8
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-gold-mid)] animate-pulse"></span>
                </div>
                <div className="text-xs font-mono text-[var(--text-subtle)]">Latency: 14ms • Accuracy: 99.8%</div>
              </div>
            </div>

            {/* Presets Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                    selectedPreset.title === p.title
                      ? 'bg-[var(--bg-pill)] text-[var(--brand-gold-start)] border border-[var(--border-brand)] font-bold'
                      : 'bg-[var(--bg-pill)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-primary)]'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* User Question Prompt Display */}
          <div className="mb-6 p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[var(--brand-gold-start)] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-mono text-[var(--text-subtle)] uppercase tracking-widest mb-1">Student Question</div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{selectedPreset.question}</p>
            </div>
          </div>

          {/* Neural Reasoning Stream Steps */}
          <div className="mb-6 space-y-2">
            <div className="text-[11px] font-mono text-[var(--brand-gold-start)] uppercase tracking-widest flex items-center gap-2 mb-2 font-bold">
              <Cpu className="w-3.5 h-3.5" /> Step-by-Step Reasoning Trace
            </div>

            {selectedPreset.reasoning.map((step, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-all duration-300 font-mono text-xs flex items-center justify-between ${
                  activeStep >= idx
                    ? 'bg-[var(--bg-pill)] border-[var(--border-brand)] text-[var(--text-primary)]'
                    : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-subtle)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {activeStep > idx ? (
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-gold-start)]" />
                  ) : activeStep === idx && isThinking ? (
                    <RefreshCw className="w-4 h-4 text-[var(--brand-gold-start)] animate-spin" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-[var(--border-primary)] flex items-center justify-center text-[10px]">{idx + 1}</span>
                  )}
                  <span>{step}</span>
                </div>
                <span className="text-[10px] text-[var(--text-subtle)]">Step 0{idx + 1}</span>
              </div>
            ))}
          </div>

          {/* AI Solution Box */}
          <div className="p-6 rounded-2xl bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-brand)] shadow-md mb-6">
            <div className="flex items-center justify-between mb-3 border-b border-[var(--border-primary)] pb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--brand-gold-mid)] font-bold">
                <Sparkles className="w-4 h-4" /> Synthesized Core Concept Solution
              </div>
              <span className="text-[10px] font-mono text-[var(--text-subtle)]">Verified by AI Tutor</span>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-normal mb-4">
              {selectedPreset.answer}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[var(--border-primary)]">
              <button
                onClick={triggerCelebration}
                className="px-4 py-2 rounded-lg bg-[var(--bg-pill)] hover:bg-[var(--bg-surface)] text-xs font-bold text-[var(--brand-gold-start)] border border-[var(--border-brand)] transition-colors flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Practice Similar Problem (+15 XP)</span>
              </button>

              {showConfettiReward && (
                <span className="text-xs font-mono text-[var(--brand-gold-mid)] flex items-center gap-1 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-gold-mid)]" /> Mastery XP Added!
                </span>
              )}
            </div>
          </div>

          {/* Custom Question Input Form */}
          <form onSubmit={handleCustomSubmit} className="relative flex items-center">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask any physics problem, math formula, or code concept..."
              className="w-full py-4 pl-5 pr-14 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)] focus:border-[var(--border-brand)] focus:outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-subtle)] backdrop-blur-md transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 p-2.5 rounded-full bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-gold-mid)] text-[var(--btn-primary-text)] hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4 text-[var(--btn-primary-text)]" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

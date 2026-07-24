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
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>('');
  const [activeStep, setActiveStep] = useState<number>(3);
  const [showConfettiReward, setShowConfettiReward] = useState<boolean>(false);

  const handleSelectPreset = (preset: PromptPreset) => {
    setIsThinking(true);
    setSelectedPreset(preset);
    setActiveStep(0);
    setShowConfettiReward(false);

    setTimeout(() => setActiveStep(1), 600);
    setTimeout(() => setActiveStep(2), 1200);
    setTimeout(() => {
      setActiveStep(3);
      setIsThinking(false);
    }, 1800);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const newPreset: PromptPreset = {
      title: 'Custom Query',
      category: 'General AI',
      question: customInput,
      reasoning: [
        'Searching EduNova knowledge graph...',
        'Cross-referencing 50,000+ academic papers and textbook models...',
        'Structuring personalized step-by-step explanation...',
      ],
      answer: `EduNova AI Tutor response for: "${customInput}". The AI model breaks this down into fundamental principles, providing clear mathematical proofs and interactive practice exercises customized for your learning speed.`,
    };

    handleSelectPreset(newPreset);
    setCustomInput('');
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0050FF', '#00D6FF', '#FFFFFF'],
    });
    setShowConfettiReward(true);
  };

  return (
    <section id="ai-tutor" className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="ambient-glow-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#00D6FF] border border-[#00D6FF]/30 mb-4">
            <Bot className="w-3.5 h-3.5" /> INTERACTIVE AI DEMO
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Experience the <span className="text-gradient-cyan">EduNova AI Tutor.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Ask any question across physics, mathematics, chemistry, or code and watch real-time step-by-step neural reasoning.
          </p>
        </div>

        {/* AI Tutor Live Workspace Container */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-[0_20px_60px_rgba(0,80,255,0.25)] relative">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0050FF] to-[#00D6FF] p-0.5 shadow-[0_0_20px_rgba(0,214,255,0.4)]">
                <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00D6FF]" />
                </div>
              </div>
              <div>
                <div className="text-base font-bold text-white flex items-center gap-2">
                  EduNova Reasoning Engine v3.8
                  <span className="w-2 h-2 rounded-full bg-[#00D6FF] animate-pulse"></span>
                </div>
                <div className="text-xs font-mono text-white/50">Latency: 14ms • Accuracy: 99.8%</div>
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
                      ? 'bg-[#00D6FF]/20 text-[#00D6FF] border border-[#00D6FF]/40'
                      : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* User Question Prompt Display */}
          <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#00D6FF] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-1">Student Question</div>
              <p className="text-sm font-semibold text-white">{selectedPreset.question}</p>
            </div>
          </div>

          {/* Neural Reasoning Stream Steps */}
          <div className="mb-6 space-y-2">
            <div className="text-[11px] font-mono text-[#00D6FF] uppercase tracking-widest flex items-center gap-2 mb-2">
              <Cpu className="w-3.5 h-3.5" /> Step-by-Step Reasoning Trace
            </div>

            {selectedPreset.reasoning.map((step, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-all duration-300 font-mono text-xs flex items-center justify-between ${
                  activeStep >= idx
                    ? 'bg-[#0050FF]/15 border-[#0050FF]/40 text-white/90'
                    : 'bg-white/[0.01] border-white/5 text-white/30'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {activeStep > idx ? (
                    <CheckCircle2 className="w-4 h-4 text-[#00D6FF]" />
                  ) : activeStep === idx && isThinking ? (
                    <RefreshCw className="w-4 h-4 text-[#00D6FF] animate-spin" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[10px]">{idx + 1}</span>
                  )}
                  <span>{step}</span>
                </div>
                <span className="text-[10px] text-white/40">Step 0{idx + 1}</span>
              </div>
            ))}
          </div>

          {/* AI Solution Box */}
          <div className="p-6 rounded-2xl bg-[#080A10] border border-[#00D6FF]/40 shadow-[0_0_30px_rgba(0,214,255,0.15)] mb-6">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D6FF]">
                <Sparkles className="w-4 h-4" /> Synthesized Core Concept Solution
              </div>
              <span className="text-[10px] font-mono text-white/40">Verified by AI Tutor</span>
            </div>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-4">
              {selectedPreset.answer}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
              <button
                onClick={triggerCelebration}
                className="px-4 py-2 rounded-lg bg-[#0050FF]/30 hover:bg-[#0050FF]/50 text-xs font-medium text-[#00D6FF] border border-[#0050FF]/50 transition-colors flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Practice Similar Problem (+15 XP)</span>
              </button>

              {showConfettiReward && (
                <span className="text-xs font-mono text-green-400 flex items-center gap-1 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4" /> Mastery XP Added!
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
              className="w-full py-4 pl-5 pr-14 rounded-full bg-white/[0.04] border border-white/15 focus:border-[#00D6FF] focus:outline-none text-sm text-white placeholder-white/40 backdrop-blur-md transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 p-2.5 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { User, ShieldCheck, Server, BrainCircuit, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    { icon: Server, title: 'Backend & APIs', desc: 'Python, PHP, Django, Laravel' },
    { icon: BrainCircuit, title: 'AI Applications', desc: 'GenAI, LLMs, Intelligent Automations' },
    { icon: ShieldCheck, title: 'Security First', desc: 'Ethical Hacking & Best Practices' },
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div
        id="about-card"
        className="neu-surface rounded-3xl p-8 md:p-14 relative overflow-hidden glint-card"
      >
        {/* Ambient Decorative Sunk Well */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full neu-pressed opacity-40 pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          {/* Header with Icon in Pressed Box */}
          <div className="flex items-center gap-3 mb-8">
            <div className="neu-pressed p-3 rounded-xl text-[#944a00] flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#944a00] tracking-tight">
              About Me
            </h2>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 text-[#554337] text-base md:text-lg leading-relaxed mb-10">
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <p key={index} className="transition-colors hover:text-[#191c1e]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Focus Pillars / Highlight Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#d8dadd]/60">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="neu-pressed rounded-2xl p-4 flex items-center gap-3.5 hover:scale-[1.02] transition-transform"
                >
                  <div className="neu-surface p-2.5 rounded-xl text-[#944a00] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#191c1e]">{item.title}</h3>
                    <p className="text-xs text-[#554337]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

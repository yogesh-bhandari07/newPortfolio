import React from 'react';
import { ArrowRight, Code2, Terminal, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onWorkClick }) => {
  return (
    <section
      id="home"
      className="pt-28 md:pt-36 pb-16 md:pb-24 min-h-[85vh] flex flex-col justify-center relative"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 flex flex-col items-start text-left z-10">
          {/* Status Badge */}
          <div
            id="hero-status-pill"
            className="neu-pressed px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#944a00] flex items-center gap-2 mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#944a00] animate-pulse" />
            <span>{PERSONAL_INFO.statusText}</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-main-title"
            className="text-4xl sm:text-5xl lg:text-[64px] lg:leading-[72px] font-bold text-[#191c1e] tracking-tight mb-6"
          >
            Hi There, I'm{' '}
            <span className="text-[#944a00] inline-block hover:scale-[1.02] transition-transform">
              {PERSONAL_INFO.name}
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-xl sm:text-2xl text-[#554337] font-normal leading-relaxed max-w-2xl mb-10"
          >
            {PERSONAL_INFO.headline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onContactClick}
              id="hero-cta-contact"
              className="neu-surface neu-button text-[#713700] font-bold px-8 py-4 rounded-xl flex items-center gap-3 floating-ambient"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 text-[#944a00]" />
            </button>

            <button
              onClick={onWorkClick}
              id="hero-cta-work"
              className="neu-pressed px-8 py-4 rounded-xl text-[#191c1e] font-semibold hover:text-[#944a00] transition-colors"
            >
              <span>View Work</span>
            </button>
          </div>
        </div>

        {/* Right Column: Neumorphic Portrait Frame with Floating Badges */}
        <div className="flex-1 w-full flex justify-center items-center relative mt-6 lg:mt-0">
          {/* Main Circular Frame */}
          <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full neu-surface p-4 relative z-10 floating-ambient">
            <div className="w-full h-full rounded-full neu-pressed overflow-hidden p-2.5">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.avatarAlt}
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Floating Badge 1: Code / Bracket Icon (Top Right) */}
          <div
            className="absolute top-2 right-4 sm:right-10 md:right-12 w-14 h-14 md:w-16 md:h-16 rounded-full neu-surface flex items-center justify-center text-[#944a00] floating-ambient shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] z-20"
            style={{ animationDelay: '-2s' }}
            title="Clean Code & Architecture"
          >
            <Code2 className="w-6 h-6 md:w-7 md:h-7" />
          </div>

          {/* Floating Badge 2: Terminal Icon (Bottom Left) */}
          <div
            className="absolute bottom-4 left-4 sm:left-10 md:left-12 w-12 h-12 md:w-14 md:h-14 rounded-full neu-surface flex items-center justify-center text-[#745943] floating-ambient shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] z-20"
            style={{ animationDelay: '-4s' }}
            title="Backend Engineering"
          >
            <Terminal className="w-5 h-5 md:w-6 md:h-6" />
          </div>

          {/* Floating Badge 3: Quick Connect Badge */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="absolute bottom-20 -left-2 sm:left-4 w-10 h-10 rounded-full neu-surface flex items-center justify-center text-[#944a00] hover:scale-110 transition-transform shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] z-20"
            title="Send an email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

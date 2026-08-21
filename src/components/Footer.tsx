import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="neu-surface w-full py-12 md:py-16 mt-16 shadow-[inset_6px_6px_14px_#d1d9e6,inset_-6px_-6px_14px_#ffffff] bg-[#f0f2f5]/80 backdrop-blur-md relative z-10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#554337]">
        {/* Copyright */}
        <div className="text-xs uppercase font-semibold text-[#745943] tracking-wider text-center md:text-left">
          © {currentYear} {PERSONAL_INFO.name}. Built with precision.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#554337] hover:text-[#944a00] transition-all duration-200 hover:scale-105 font-medium"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#554337] hover:text-[#944a00] transition-all duration-200 hover:scale-105 font-medium"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#554337] hover:text-[#944a00] transition-all duration-200 hover:scale-105 font-medium"
          >
            Twitter
          </a>
          <a
            href={PERSONAL_INFO.socials.email}
            className="text-[#554337] hover:text-[#944a00] transition-all duration-200 hover:scale-105 font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

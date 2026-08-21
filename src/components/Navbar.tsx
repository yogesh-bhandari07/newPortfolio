import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'My Work', href: '#work', id: 'work' },
    { name: 'Reach Out', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f0f2f5]/90 backdrop-blur-md shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff]'
          : 'bg-[#f0f2f5]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-2xl font-bold tracking-tight text-[#713700] hover:text-[#944a00] transition-colors flex items-center gap-2 group"
          id="navbar-brand"
        >
          <span className="w-8 h-8 rounded-lg neu-pressed flex items-center justify-center text-sm font-extrabold text-[#944a00] group-hover:scale-105 transition-transform">
            YB
          </span>
          <span>{PERSONAL_INFO.brandName}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                id={`nav-link-${link.id}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#713700] font-bold neu-pressed'
                    : 'text-[#554337] hover:text-[#713700] hover:neu-surface-sm'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="neu-surface neu-button text-[#713700] font-semibold text-sm rounded-xl px-5 py-2.5 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#944a00]" />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="md:hidden neu-surface p-2.5 rounded-xl text-[#554337] hover:text-[#713700]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden px-6 pt-2 pb-6 bg-[#f0f2f5] border-t border-[#e0e3e6] shadow-[0_12px_20px_#d1d9e6]"
        >
          <div className="flex flex-col gap-2 mt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  id={`mobile-nav-link-${link.id}`}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#713700] font-bold neu-pressed'
                      : 'text-[#554337] hover:text-[#713700] hover:neu-surface-sm'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

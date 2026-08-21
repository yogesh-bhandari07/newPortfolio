import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Calendar, User, ArrowUpRight, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#191c1e]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="neu-surface rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-[10px_10px_30px_rgba(0,0,0,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-project-modal"
          aria-label="Close project modal"
          className="absolute top-6 right-6 neu-surface p-2.5 rounded-full text-[#554337] hover:text-[#944a00] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 text-xs uppercase font-bold tracking-wider text-[#944a00] mb-2">
          <span className="neu-pressed px-3 py-1 rounded-full">{project.number}</span>
          <span>{project.subtitle}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#191c1e] mb-4">
          {project.title}
        </h2>

        {/* Metadata Chips */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#554337] mb-6">
          {project.role && (
            <div className="neu-pressed px-3.5 py-1.5 rounded-xl flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-[#944a00]" />
              <span>{project.role}</span>
            </div>
          )}
          {project.timeline && (
            <div className="neu-pressed px-3.5 py-1.5 rounded-xl flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#944a00]" />
              <span>{project.timeline}</span>
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className="neu-pressed rounded-2xl p-3 mb-8 overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-56 sm:h-72 object-cover rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#191c1e] mb-2 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#944a00]" />
            Overview & Scope
          </h3>
          <p className="text-sm sm:text-base text-[#554337] leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Architecture Highlights */}
        {project.architectureHighlights && (
          <div className="mb-8 neu-pressed p-6 rounded-2xl">
            <h3 className="text-base font-bold text-[#191c1e] mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#944a00]" />
              System Architecture & Core Engineering
            </h3>
            <ul className="space-y-3">
              {project.architectureHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#554337]">
                  <CheckCircle2 className="w-4 h-4 text-[#944a00] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Outcomes */}
        {project.keyOutcomes && (
          <div className="mb-8">
            <h3 className="text-base font-bold text-[#191c1e] mb-3">Key Results & Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyOutcomes.map((outcome, i) => (
                <div key={i} className="neu-surface p-4 rounded-xl text-xs sm:text-sm font-medium text-[#554337]">
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div>
          <h4 className="text-xs uppercase font-bold text-[#745943] tracking-wider mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="neu-surface px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#944a00]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

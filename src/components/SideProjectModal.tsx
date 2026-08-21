import React, { useEffect } from 'react';
import { X, ExternalLink, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { SideProject } from '../types';

interface SideProjectModalProps {
  project: SideProject | null;
  onClose: () => void;
}

export const SideProjectModal: React.FC<SideProjectModalProps> = ({ project, onClose }) => {
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
      id="side-project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#191c1e]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="side-project-modal-content"
        className="neu-surface rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-[10px_10px_30px_rgba(0,0,0,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          id="close-side-project-modal"
          aria-label="Close modal"
          className="absolute top-6 right-6 neu-surface p-2 rounded-full text-[#554337] hover:text-[#944a00]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#944a00]">
          <Globe className="w-3.5 h-3.5" />
          <span>{project.category}</span>
        </div>

        <h3 className="text-2xl font-bold text-[#191c1e] mb-3">{project.domain}</h3>

        <div className="neu-pressed p-4 rounded-2xl mb-6 text-sm text-[#554337] leading-relaxed">
          {project.description}
        </div>

        <div className="space-y-2 mb-6 text-xs text-[#554337]">
          <div className="flex items-center justify-between neu-surface p-3 rounded-xl">
            <span className="font-semibold text-[#191c1e]">Focus Domain:</span>
            <span className="text-[#944a00] font-bold">{project.tag}</span>
          </div>
          <div className="flex items-center justify-between neu-surface p-3 rounded-xl">
            <span className="font-semibold text-[#191c1e]">Status:</span>
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              {project.status}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={project.url || `https://${project.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-button neu-surface flex-1 py-3 rounded-xl text-center text-xs font-bold text-[#713700] hover:text-[#944a00] flex items-center justify-center gap-2"
          >
            <span>Visit Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="neu-pressed px-5 py-3 rounded-xl text-xs font-bold text-[#554337]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

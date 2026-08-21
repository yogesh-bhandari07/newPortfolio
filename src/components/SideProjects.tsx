import React, { useState } from 'react';
import { Link2, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { SIDE_PROJECTS } from '../data/portfolioData';
import { SideProject } from '../types';

interface SideProjectsProps {
  onSelectSideProject?: (project: SideProject) => void;
}

export const SideProjects: React.FC<SideProjectsProps> = ({ onSelectSideProject }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCardClick = (project: SideProject) => {
    if (onSelectSideProject) {
      onSelectSideProject(project);
    }
  };

  return (
    <section id="side-projects" className="py-16 md:py-20">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#944a00] tracking-tight">
          Side Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SIDE_PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`side-project-${project.id}`}
            onClick={() => handleCardClick(project)}
            className="neu-surface rounded-3xl p-8 glint-card flex flex-col justify-between group cursor-pointer transition-all duration-300"
          >
            <div>
              {/* Header: Domain Title & Link Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#191c1e] group-hover:text-[#944a00] transition-colors">
                    {project.domain}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#745943] mt-1">
                    {project.category}
                  </span>
                </div>

                <div className="neu-pressed p-2.5 rounded-full text-[#944a00] group-hover:scale-110 transition-transform">
                  <Link2 className="w-5 h-5" />
                </div>
              </div>

              {/* Description */}
              <p className="text-[#554337] text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom Meta & Status */}
            <div className="flex items-center justify-between pt-4 border-t border-[#d8dadd]/50 text-xs font-medium text-[#745943]">
              <span className="neu-pressed px-3 py-1 rounded-full text-xs font-semibold text-[#944a00]">
                {project.tag}
              </span>
              <span className="flex items-center gap-1.5 text-[#554337]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

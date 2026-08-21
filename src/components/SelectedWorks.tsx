import React from 'react';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#944a00] tracking-tight">
          Selected Works
        </h2>
      </div>

      <div className="space-y-16 md:space-y-20">
        {PROJECTS.map((project, index) => {
          const isReversed = index === 1; // Project 02 has image on left, text on right on desktop

          return (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className={`neu-surface rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-10 lg:gap-14 items-center glint-card`}
            >
              {/* Text Side */}
              <div className="flex-1 w-full">
                {/* Number Badge */}
                <span className="text-4xl sm:text-5xl font-black text-[#d8dadd] tracking-tight block mb-2 select-none">
                  {project.number}
                </span>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#191c1e] mb-4">
                  {project.title}
                </h3>

                {/* Sunk Description Well */}
                <div className="neu-pressed p-6 rounded-2xl mb-6">
                  <p className="text-[#554337] text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="neu-surface px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#944a00] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Action Button */}
                <div>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="neu-button neu-surface inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[#713700] hover:text-[#944a00] font-bold text-sm tracking-wide"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 text-[#944a00]" />
                  </button>
                </div>
              </div>

              {/* Image Side with Neumorphic Well */}
              <div className="flex-1 w-full">
                <div
                  onClick={() => onSelectProject(project)}
                  className="neu-pressed rounded-3xl p-3 sm:p-4 w-full h-[280px] sm:h-[340px] md:h-[400px] overflow-hidden cursor-pointer group"
                  title="Click to view full project breakdown"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

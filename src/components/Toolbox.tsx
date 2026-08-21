import React, { useState } from "react";
import { Code2, Layers, Terminal, Database, Sparkles } from "lucide-react";
import { CURRENT_TECH_STACK, ALL_SKILLS } from "../data/portfolioData";

export const Toolbox: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Actual skill categorization
  const skillCategories: Record<string, string[]> = {
    Languages: ["Python", "PHP", "JavaScript"],

    Backend: ["Django", "DRF", "Laravel", "FastAPI", "Flask"],

    Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "jQuery"],

    Databases: ["MySQL", "ChromaDB", "Vector DB", "Redis", "Elasticsearch"],

    "AI / ML": [
      "LangChain",
      "LangGraph",
      "RAG",
      "Gemini",
      "Multi-Agent Systems",
    ],

    Messaging: ["Kafka", "Redis", "WebSockets"],

    "DevOps / Cloud": [
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
    ],

    Observability: [
      "ELK Stack",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "Prometheus",
      "Grafana",
    ],

    Security: ["JWT", "RBAC", "OAuth2"],

    Tools: ["Git", "GitHub", "GitLab", "Jira", "Figma"],
  };

  // UI filters shown to the user
  // Each filter can contain multiple technical categories.
  const filterGroups: Record<string, string[]> = {
    All: ALL_SKILLS,

    Frontend: [...skillCategories.Frontend],

    Backend: [
      ...skillCategories.Languages,
      ...skillCategories.Backend,
      ...skillCategories.Messaging,
    ],

    "Database & Cloud": [
      ...skillCategories.Databases,
      ...skillCategories["DevOps / Cloud"],
      ...skillCategories.Observability,
    ],

    Tools: [
      ...skillCategories["AI / ML"],
      ...skillCategories.Security,
      ...skillCategories.Tools,
    ],
  };

  const getTechIcon = (name: string) => {
    switch (name) {
      case "PHP":
      case "Python":
      case "JavaScript":
        return <Terminal className="w-4 h-4 text-[#944a00]" />;

      case "Laravel":
      case "Django":
      case "FastAPI":
      case "Flask":
        return <Layers className="w-4 h-4 text-[#944a00]" />;

      case "MySQL":
      case "ChromaDB":
      case "Vector DB":
      case "Redis":
      case "Elasticsearch":
        return <Database className="w-4 h-4 text-[#944a00]" />;

      default:
        return <Code2 className="w-4 h-4 text-[#944a00]" />;
    }
  };

  const filteredSkills = ALL_SKILLS.filter((skill) => {
    const matchesSearch = skill
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    return filterGroups[selectedFilter]?.includes(skill);
  });

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#944a00] tracking-tight">
          My Toolbox
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-semibold text-[#191c1e] mb-6">
            My Current Tech Stack
          </h3>

          <div className="flex flex-wrap gap-4">
            {CURRENT_TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                id={`tech-stack-${tech.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="neu-surface px-6 py-3.5 rounded-2xl font-bold text-[#944a00] flex items-center gap-3 glint-card hover:scale-105 transition-transform cursor-default"
              >
                <span className="w-7 h-7 rounded-lg neu-pressed flex items-center justify-center">
                  {getTechIcon(tech.name)}
                </span>

                <span className="text-base">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 neu-surface p-6 rounded-2xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#745943] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#944a00]" />
              Engineering Philosophy
            </h4>

            <p className="text-sm text-[#554337] leading-relaxed">
              Writing clean, modular, and maintainable code built for scale.
              Focus on secure API contracts, database index optimizations, and
              high transaction throughput.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="neu-pressed rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-semibold text-[#191c1e]">
              My Skills & Technologies
            </h3>

            <span className="text-xs font-semibold text-[#944a00] neu-surface px-3 py-1 rounded-full self-start sm:self-auto">
              {ALL_SKILLS.length} Technologies
            </span>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(filterGroups).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                  selectedFilter === filter
                    ? "neu-pressed text-[#944a00] font-bold"
                    : "neu-surface text-[#554337] hover:text-[#191c1e]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {filteredSkills.map((skill) => (
              <span
                key={skill}
                className="neu-surface px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#554337] glint-card inline-flex items-center gap-1.5 transition-all duration-200 cursor-default hover:text-[#944a00] hover:scale-105"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#944a00]" />
                {skill}
              </span>
            ))}
          </div>

          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <div className="text-sm text-[#745943] text-center py-8">
              No skills found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

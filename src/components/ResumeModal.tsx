import React, { useEffect } from "react";
import {
  X,
  Printer,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#191c1e]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="neu-surface rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative shadow-[10px_10px_30px_rgba(0,0,0,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================================================
            TOP ACTIONS
        ========================================================= */}
        <div className="flex justify-between items-center pb-6 mb-7 border-b border-[#d8dadd]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#944a00]">
              Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="resume-linkedin-btn"
              className="neu-surface neu-button px-4 py-2 rounded-xl text-xs font-bold text-[#944a00] flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onClose}
              id="resume-close-btn"
              aria-label="Close resume modal"
              className="neu-surface p-2 rounded-xl text-[#554337] hover:text-[#944a00]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* =========================================================
            RESUME HEADER
        ========================================================= */}
        <header className="text-center mb-8 pb-7 border-b border-[#d8dadd]">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#191c1e]">
            Yogesh Kumar
          </h1>

          {/* UPDATED TITLE HERE */}
          <p className="text-lg font-semibold text-[#944a00] mt-1">
            AI Engineer & Full Stack Developer
          </p>

          <p className="text-xs text-[#745943] mt-1">
            4.5+ Years of Professional Experience
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4 text-xs text-[#554337]">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#944a00]" />
              yogesh.bhandari285@gmail.com
            </span>

            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#944a00]" />
              +91-8384855717
            </span>

            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#944a00]" />
              New Delhi, India
            </span>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-xs">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#944a00] hover:underline"
            >
              LinkedIn
            </a>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#944a00] hover:underline"
            >
              GitHub
            </a>

            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#944a00] hover:underline"
            >
              LeetCode
            </a>
          </div>
        </header>

        {/* =========================================================
            PROFESSIONAL SUMMARY
        ========================================================= */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-[#944a00] mb-3 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Professional Summary
          </h2>

          {/* UPDATED SUMMARY HERE */}
          <p className="text-sm text-[#554337] leading-relaxed">
            AI Engineer and Full Stack Developer with 4.5+ years of experience
            building scalable web applications, intelligent multi-agent AI
            systems, and secure REST APIs using Python, FastAPI, Laravel, and
            Django. Specialized in integrating LLMs using LangGraph, LangChain,
            and RAG pipelines for contextual automation. Proficient in
            cloud-native deployments (Docker, AWS) and real-time systems
            (WebSockets, Kafka), with a strong focus on production-grade
            architecture, security, and reliable software delivery.
          </p>
        </section>

        {/* =========================================================
            PROFESSIONAL EXPERIENCE
        ========================================================= */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-[#944a00] mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Professional Experience
          </h2>

          <div className="space-y-5">
            {/* MAMILY */}
            <div className="neu-pressed p-5 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  {/* UPDATED JOB TITLE HERE */}
                  <h3 className="text-base font-bold text-[#191c1e]">
                    AI & Software Developer
                  </h3>

                  <p className="text-xs font-semibold text-[#944a00] mt-0.5">
                    Mamily Technology Pvt Ltd
                  </p>

                  <p className="text-xs text-[#745943] mt-0.5">Delhi</p>
                </div>

                <span className="text-xs font-semibold text-[#745943] neu-surface px-2.5 py-1 rounded-md whitespace-nowrap">
                  Jul 2025 – Present
                </span>
              </div>

              <ul className="list-disc list-inside text-xs sm:text-sm text-[#554337] space-y-1.5 mt-4">
                <li>
                  Developed multi-agent AI workflows integrating LLMs,
                  LangGraph, and RAG pipelines for intelligent automation and
                  personalized user experiences.
                </li>

                <li>
                  Architected secure backend systems using JWT-based
                  authentication, RBAC, and security-focused backend practices.
                </li>

                <li>
                  Contributed to reducing security-related user-reported issues
                  by 30%.
                </li>

                <li>
                  Deployed containerized services on AWS using Docker and
                  maintained CI/CD pipelines for consistent delivery.
                </li>
              </ul>
            </div>

            {/* MUNJAL */}
            <div className="neu-pressed p-5 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-base font-bold text-[#191c1e]">
                    Full Stack Developer
                  </h3>

                  <p className="text-xs font-semibold text-[#944a00] mt-0.5">
                    Munjal Chakraborty Software & Media Pvt Ltd
                  </p>

                  <p className="text-xs text-[#745943] mt-0.5">Gurugram</p>
                </div>

                <span className="text-xs font-semibold text-[#745943] neu-surface px-2.5 py-1 rounded-md whitespace-nowrap">
                  May 2024 – Jun 2025
                </span>
              </div>

              <ul className="list-disc list-inside text-xs sm:text-sm text-[#554337] space-y-1.5 mt-4">
                <li>
                  Built and maintained production-grade applications using
                  Laravel, Django, and React.
                </li>

                <li>
                  Contributed to a 20% increase in monthly active users through
                  application and product improvements.
                </li>

                <li>
                  Implemented secure wallet, transaction, and mandate management
                  modules with multiple payment gateway integrations including
                  PayU and UPI Autopay.
                </li>

                <li>
                  Developed modular RESTful APIs using clean architecture
                  principles.
                </li>

                <li>
                  Improved average API response time by 25% through backend
                  optimisation and scalable API design.
                </li>
              </ul>
            </div>

            {/* LAVESSTA */}
            <div className="neu-pressed p-5 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-base font-bold text-[#191c1e]">
                    Senior Lead Developer
                  </h3>

                  <p className="text-xs font-semibold text-[#944a00] mt-0.5">
                    Lavessta Enterprise Pvt Ltd
                  </p>

                  <p className="text-xs text-[#745943] mt-0.5">Noida</p>
                </div>

                <span className="text-xs font-semibold text-[#745943] neu-surface px-2.5 py-1 rounded-md whitespace-nowrap">
                  Apr 2022 – Mar 2024
                </span>
              </div>

              <ul className="list-disc list-inside text-xs sm:text-sm text-[#554337] space-y-1.5 mt-4">
                <li>
                  Implemented ML and AI workflows for data extraction and
                  analysis, contributing to a 15% increase in project revenue.
                </li>

                <li>
                  Engineered fault-resistant REST APIs supporting 1,000+
                  concurrent users.
                </li>

                <li>
                  Led backend development and coordinated delivery across team
                  members.
                </li>

                <li>
                  Reduced production-level user-reported bugs by 35% across
                  projects.
                </li>
              </ul>
            </div>

            {/* BASIC EDUCATION */}
            <div className="neu-pressed p-5 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-base font-bold text-[#191c1e]">
                    Backend Developer
                  </h3>

                  <p className="text-xs font-semibold text-[#944a00] mt-0.5">
                    Basic Education Pvt Ltd
                  </p>

                  <p className="text-xs text-[#745943] mt-0.5">New Delhi</p>
                </div>

                <span className="text-xs font-semibold text-[#745943] neu-surface px-2.5 py-1 rounded-md whitespace-nowrap">
                  Aug 2021 – Apr 2022
                </span>
              </div>

              <ul className="list-disc list-inside text-xs sm:text-sm text-[#554337] space-y-1.5 mt-4">
                <li>
                  Optimized API response and page execution speed by 20% through
                  algorithm restructuring and improved design patterns.
                </li>

                <li>
                  Refactored core backend components and introduced proactive
                  monitoring practices.
                </li>

                <li>Contributed to achieving 99.9% system uptime.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            SELECTED PROJECTS
        ========================================================= */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-[#944a00] mb-4 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ANAYA */}
            <div className="neu-surface p-5 rounded-2xl">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">
                    Anaya – Multi-Agent AI Healthcare Assistant
                  </h3>

                  <p className="text-xs text-[#944a00] mt-1">
                    Mamily Technology Pvt Ltd
                  </p>
                </div>

                <span className="text-[10px] font-semibold text-[#745943] whitespace-nowrap">
                  Nov 2024 – Present
                </span>
              </div>

              <p className="text-xs text-[#554337] leading-relaxed mt-3">
                Architected and implemented the AI and backend architecture from
                scratch. Built multi-agent routing with LangGraph and a RAG
                pipeline using LangChain and ChromaDB for personalized
                responses.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "FastAPI",
                  "LangGraph",
                  "LangChain",
                  "RAG",
                  "ChromaDB",
                  "Gemini",
                  "WebSockets",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 rounded-md bg-[#f0f1f3] text-[#554337]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GLOBAL PAYMENTS */}
            <div className="neu-surface p-5 rounded-2xl">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">
                    Global Payments
                  </h3>

                  <p className="text-xs text-[#944a00] mt-1">
                    Munjal Chakraborty Software & Media Pvt Ltd
                  </p>
                </div>

                <span className="text-[10px] font-semibold text-[#745943] whitespace-nowrap">
                  Jul 2024 – Jul 2025
                </span>
              </div>

              <p className="text-xs text-[#554337] leading-relaxed mt-3">
                Led the project end-to-end as the sole backend developer, owning
                architecture, planning, client requirement discussions, and
                delivery. Maintained a multi-gateway payment processing system
                for secure merchant-customer transactions.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Laravel", "PHP", "Payment APIs", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 rounded-md bg-[#f0f1f3] text-[#554337]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* HDFC */}
            <div className="neu-surface p-5 rounded-2xl">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">
                    HDFC UPI Autopay
                  </h3>

                  <p className="text-xs text-[#944a00] mt-1">
                    Munjal Chakraborty Software & Media Pvt Ltd
                  </p>
                </div>

                <span className="text-[10px] font-semibold text-[#745943] whitespace-nowrap">
                  May 2024 – Jul 2024
                </span>
              </div>

              <p className="text-xs text-[#554337] leading-relaxed mt-3">
                Developed a bank-mandate management system covering mandate
                setup, execution, and revocation in collaboration with PayU.
                Focused on secure and compliant financial transaction
                processing.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Laravel", "JavaScript", "HTML/CSS", "PayU API"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-1 rounded-md bg-[#f0f1f3] text-[#554337]"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* I4INVEST */}
            <div className="neu-surface p-5 rounded-2xl">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">
                    I4Invest – AI Trading Data Platform
                  </h3>

                  <p className="text-xs text-[#944a00] mt-1">
                    Lavessta Enterprise Pvt Ltd
                  </p>
                </div>

                <span className="text-[10px] font-semibold text-[#745943] whitespace-nowrap">
                  May 2023 – Mar 2024
                </span>
              </div>

              <p className="text-xs text-[#554337] leading-relaxed mt-3">
                Led development of a trading data platform that extracted and
                normalized financial information from PDF, HTML, XML, and Excel
                sources and applied ML-based analysis pipelines for investment
                insights.
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {["Django", "DRF", "Python", "React.js", "ML"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 rounded-md bg-[#f0f1f3] text-[#554337]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TECHNICAL SKILLS
        ========================================================= */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-[#944a00] mb-4 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                Languages
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                Python, PHP, JavaScript
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                Backend
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                Django, Django REST Framework, Laravel, FastAPI
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                Frontend
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                React.js, Next.js, Tailwind CSS, HTML/CSS, jQuery
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                Databases
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                MySQL, ChromaDB, Vector Databases
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                AI / ML
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                LangChain, LangGraph, RAG, Gemini, Multi-Agent Systems
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                Messaging & Real-Time
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                Kafka, Redis, WebSockets
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                DevOps & Cloud
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                Docker, Kubernetes, AWS, Jenkins, GitHub Actions, CI/CD
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-xs font-bold text-[#191c1e] mb-2 uppercase">
                Observability & Security
              </h4>

              <p className="text-xs text-[#554337] leading-relaxed">
                ELK Stack, Logstash, Kibana, Prometheus, Grafana, JWT, RBAC,
                OAuth2
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            EDUCATION
        ========================================================= */}
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-[#944a00] mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education
          </h2>

          <div className="space-y-4">
            <div className="neu-pressed p-5 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">
                    B.Tech – Computer Science & Engineering
                  </h3>

                  <p className="text-xs font-semibold text-[#944a00] mt-1">
                    Dr. A.P.J. Abdul Kalam Technical University
                  </p>

                  <p className="text-xs text-[#554337] mt-1">
                    Pursued via lateral entry post-Diploma alongside full-time
                    employment with institutional NOC.
                  </p>
                </div>

                <span className="text-xs font-semibold text-[#745943] whitespace-nowrap">
                  2023 – 2026
                </span>
              </div>
            </div>

            <div className="neu-pressed p-5 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">
                    Diploma in Engineering
                  </h3>

                  <p className="text-xs font-semibold text-[#944a00] mt-1">
                    Mahamaya Polytechnic of Information Technology
                  </p>

                  <p className="text-xs text-[#554337] mt-1">
                    Uttar Pradesh · 79.6%
                  </p>
                </div>

                <span className="text-xs font-semibold text-[#745943] whitespace-nowrap">
                  2021
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CERTIFICATIONS
        ========================================================= */}
        <section>
          <h2 className="text-base font-bold uppercase tracking-wider text-[#944a00] mb-4 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-sm font-bold text-[#191c1e]">
                PHP Programming
              </h4>

              <p className="text-xs text-[#554337] mt-1">
                Mecatredz Technology Pvt Ltd · 2021
              </p>
            </div>

            <div className="neu-surface p-4 rounded-xl">
              <h4 className="text-sm font-bold text-[#191c1e]">
                Python Programming
              </h4>

              <p className="text-xs text-[#554337] mt-1">
                APTRON Solutions Private Limited · 2020
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOOTER
        ========================================================= */}
        <div className="mt-8 pt-5 border-t border-[#d8dadd] text-center">
          {/* UPDATED FOOTER HERE */}
          <p className="text-[10px] text-[#745943]">
            Yogesh Kumar · AI Engineer & Full Stack Developer · New Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
};

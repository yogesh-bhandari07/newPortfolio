import { Project, Metric, SideProject } from "../types";

const gp_iamge = "/projects/gp_1.png";
const icegate_image = "/projects/icegate_1.png";
const anaya_image = "/projects/anaya.png";
const i4invest_1 = "/projects/i4invest_1.png";
const profile = "/projects/profile.png";

export const PERSONAL_INFO = {
  name: "Yogesh Bhandari",
  initials: "Yogesh",
  brandName: "",
  role: "AI Engineer & Full Stack Developer", // Updated role
  headline:
    "I'm a Full Stack Developer & AI Engineer who builds scalable, intelligent applications.", // Updated headline
  availableForWork: true,
  statusText: "AVAILABLE FOR WORK",
  experience: "4.5+ years",
  email: "yogesh.bhandari285@gmail.com",
  avatarUrl: profile,
  avatarAlt:
    "A professional portrait of Yogesh Bhandari, a modern software developer and AI engineer in a bright, clean, minimalist office environment with soft natural lighting.",
  bio: [
    "Hi there! I'm Yogesh Kumar, a Full Stack Developer and AI Engineer with 4.5+ years of experience in building scalable web applications and intelligent systems. My expertise bridges traditional backend architecture (Python, PHP, Laravel, Django) and modern AI technologies (LangChain, LangGraph, RAG pipelines, Gemini).", // Updated to include AI tech
    "My core strength lies in architecting robust backend systems and integrating them with machine learning models to create context-aware, multi-agent AI applications. I thrive on building solutions that enhance user experiences and automate complex workflows.", // Shifted focus to AI integration
    "Beyond standard development and AI, I harbor a keen interest in ethical hacking. This perspective informs my coding practices, ensuring that security is considered a fundamental feature rather than an afterthought in everything I build.",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/the-yogesh-bhandari",
    github: "https://github.com/yogesh-bhandari07",
    leetcode: "https://leetcode.com/u/yogesh-bhandari07/",
    email: "mailto:yogesh.bhandari285@gmail.com",
  },
};

export const IMPACT_METRICS: Metric[] = [
  {
    id: "experience",
    value: "4.5+",
    label: "Years Experience",
    icon: "Briefcase",
    description:
      "Experience building scalable web applications, REST APIs, AI systems, and production backend infrastructure",
  },
  {
    id: "api-performance",
    value: "25%",
    label: "API Response Improvement",
    icon: "Zap",
    description:
      "Improved average API response time through backend optimisation and scalable API design",
  },
  {
    id: "bug-reduction",
    value: "35%",
    label: "Fewer Production Bugs",
    icon: "Bug",
    description:
      "Reduced production-level user-reported bugs through development practices and delivery improvements",
  },
];
export const CURRENT_TECH_STACK = [
  { name: "Python", icon: "Terminal", category: "Backend & AI" }, // Updated category
  { name: "LangChain", icon: "Brain", category: "AI/ML" }, // Added an explicit AI skill to the top stack
  { name: "PHP", icon: "Code2", category: "Backend" },
  { name: "Laravel", icon: "Layers", category: "Framework" },
  { name: "Django", icon: "Cpu", category: "Framework" },
];
export const ALL_SKILLS = [
  // Languages
  "Python",
  "PHP",
  "JavaScript",

  // Backend
  "Django",
  "DRF",
  "Laravel",
  "FastAPI",
  "Flask",

  // Frontend
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML/CSS",
  "jQuery",

  // Databases
  "MySQL",
  "ChromaDB",
  "Vector DB",
  "Redis",
  "Elasticsearch",

  // AI / ML
  "LangChain",
  "LangGraph",
  "RAG",
  "Gemini",
  "Multi-Agent Systems",

  // Messaging
  "Kafka",
  "WebSockets",

  // DevOps / Cloud
  "Docker",
  "Kubernetes",
  "AWS",
  "Jenkins",
  "GitHub Actions",
  "CI/CD",

  // Observability
  "ELK Stack",
  "Logstash",
  "Kibana",
  "Prometheus",
  "Grafana",

  // Security
  "JWT",
  "RBAC",
  "OAuth2",

  // Tools
  "Git",
  "GitHub",
  "GitLab",
  "Jira",
  "Figma",
];
export const PROJECTS: Project[] = [
  {
    id: "anaya-ai-healthcare",
    number: "01",
    title: "Anaya – Multi-Agent AI Healthcare Assistant",
    subtitle: "Multi-Agent AI & Personalized Healthcare Assistant",
    description:
      "Built a multi-agent AI healthcare system focused on personalized user interactions, intelligent query routing, and context-aware responses using RAG.",
    longDescription:
      "Architected the AI and backend system from scratch, combining FastAPI, LangGraph, LangChain, ChromaDB, Gemini, MySQL, and WebSockets. The system uses multi-agent routing to process user queries, retrieves relevant context through a RAG pipeline, and supports real-time communication with emergency escalation workflows.",
    architectureHighlights: [
      "Architected the complete AI and backend system from scratch",
      "Implemented multi-agent query routing using LangGraph",
      "Built a RAG pipeline using LangChain and ChromaDB for contextual responses",
      "Integrated Gemini 2.0 Flash for LLM-powered interactions",
      "Implemented real-time response streaming using WebSockets",
      "Added emergency routing with live doctor escalation",
    ],
    keyOutcomes: [
      "Established a production-oriented architecture for AI-powered healthcare workflows",
      "Enabled contextual responses through retrieval-augmented generation",
      "Added real-time communication and emergency escalation capabilities",
    ],
    tags: [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Gemini",
      "WebSockets",
      "MySQL",
    ],
    image: "/projects/anaya.png",
    imageAlt:
      "AI healthcare assistant interface representing multi-agent workflows and personalized healthcare interactions.",
    role: "AI & Backend Developer",
    timeline: "Nov 2024 – Present",
  },

  {
    id: "global-payments",
    number: "02",
    title: "Global Payments",
    subtitle: "Multi-Gateway Payment Processing System",
    description:
      "Worked on a production payment processing system focused on secure merchant transactions, multi-gateway integrations, and reliable transaction processing.",
    longDescription:
      "Led the project as the sole backend developer, owning architecture, planning, requirement discussions, and delivery timelines. The system handles merchant-customer transactions through multiple payment gateways while maintaining secure transaction processing and financial compliance requirements.",
    architectureHighlights: [
      "Owned backend architecture and implementation end-to-end",
      "Integrated and maintained multiple payment gateway workflows",
      "Designed APIs for secure merchant and customer transaction flows",
      "Worked directly with clients for requirement gathering and feature sign-off",
      "Optimised transaction processing and backend workflows",
      "Maintained security and compliance requirements for financial transactions",
    ],
    keyOutcomes: [
      "Delivered and maintained a production payment processing platform",
      "Improved transaction processing efficiency through backend optimisation",
      "Enabled secure payment flows across multiple gateway integrations",
    ],
    tags: ["Laravel", "PHP", "Payment Gateway APIs", "REST APIs", "MySQL"],
    image: gp_iamge,
    imageAlt:
      "Payment processing platform representing secure merchant transactions and payment gateway integrations.",
    role: "Backend Developer",
    timeline: "Jul 2024 – Jul 2025",
  },

  {
    id: "i4invest",
    number: "03",
    title: "I4Invest – AI Trading Data Platform",
    subtitle: "Trading Data Processing & Investment Intelligence",
    description:
      "Built a trading data platform that collects and normalizes financial data from multiple document formats and applies ML-based analysis for investment insights.",
    longDescription:
      "Led the development team while working closely with stakeholders on planning and delivery. The platform processes trading data from PDF, HTML, XML, and Excel sources, normalizes the information into a unified database model, and applies machine-learning pipelines to generate investment insights.",
    architectureHighlights: [
      "Led development planning, sprint execution, and task allocation",
      "Built backend services using Django REST Framework and Python",
      "Extracted trading data from PDF, HTML, XML, and Excel sources",
      "Normalised heterogeneous trading data into a unified database model",
      "Implemented ML-based analysis pipelines for investment insights",
      "Collaborated with stakeholders on requirements and project deliverables",
    ],
    keyOutcomes: [
      "Created a unified data processing workflow across multiple financial formats",
      "Enabled structured analysis of previously heterogeneous trading data",
      "Introduced ML-based processing for investment-related insights",
    ],
    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "Machine Learning",
    ],
    image: i4invest_1,
    imageAlt:
      "Investment analytics platform representing trading data processing and financial insights.",
    role: "Senior Lead Developer",
    timeline: "May 2023 – Mar 2024",
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: "hdfcupiautopay",
    domain: "hdfcupiautopay.in",
    description:
      "A dedicated portal simplifying UPI autopay setups and management for banking customers, enhancing recurring payment flows.",
    category: "Fintech & Banking",
    tag: "UPI Autopay",
    status: "Live & Operational",
    url: "https://hdfcupiautopay.in",
  },
  {
    id: "mamily",
    domain: "Mamily.in",
    description:
      "A supportive platform designed for modern parenting, providing resources, community tools, and personalized advice.",
    category: "Community & Health",
    tag: "Parenting Tech",
    status: "Active Community",
    url: "https://mamily.in",
  },
  {
    id: "levelnext",
    domain: "Levelnext.in",
    description:
      "An educational tech initiative focused on career advancement and skill-building courses for emerging technologies.",
    category: "EdTech",
    tag: "Skills Platform",
    status: "Growing Platform",
    url: "https://levelnext.in",
  },
  {
    id: "budgeticu",
    domain: "budgeticu.in",
    description:
      "A crucial healthcare tech application designed to optimize resource allocation and budget management for intensive care units.",
    category: "HealthTech",
    tag: "Healthcare Ops",
    status: "Clinical Utility",
    url: "https://budgeticu.in",
  },
];

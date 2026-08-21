export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  architectureHighlights?: string[];
  keyOutcomes?: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
  timeline?: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  icon: string;
  description?: string;
}

export interface SideProject {
  id: string;
  domain: string;
  description: string;
  category: string;
  tag: string;
  status: string;
  url?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: { name: string; level?: 'Expert' | 'Experienced' | 'Proficient' }[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
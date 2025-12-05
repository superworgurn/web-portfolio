export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: number; // 1-5
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}
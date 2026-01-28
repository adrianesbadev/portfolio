export type SkillCategory = 'backend' | 'frontend' | 'database' | 'tools' | 'other';

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export const skills: Skill[] = [
  // Backend
  { name: 'Java', category: 'backend', level: 'intermediate' },
  { name: 'C #', category: 'backend', level: 'intermediate' },
  { name: 'Python', category: 'backend', level: 'beginner' },
  { name: 'PHP', category: 'backend', level: 'beginner' },
  { name: 'ASP.NET', category: 'backend', level: 'intermediate' },
  { name: 'ASP.NET MVC', category: 'backend', level: 'intermediate' },
  { name: 'Spring Boot', category: 'backend', level: 'intermediate' },
  { name: 'Node.js', category: 'backend', level: 'beginner' },
  { name: 'MongoDB', category: 'backend', level: 'beginner' },
  { name: 'PostgreSQL', category: 'backend', level: 'beginner' },
  { name: 'Docker', category: 'backend', level: 'beginner' },
  
  // Frontend
  { name: 'JavaScript', category: 'frontend', level: 'intermediate' },
  { name: 'TypeScript', category: 'frontend', level: 'beginner' },
  { name: 'HTML5', category: 'frontend', level: 'intermediate' },
  { name: 'CSS3', category: 'frontend', level: 'intermediate' },
  { name: 'Thymeleaf', category: 'frontend', level: 'intermediate' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'beginner' },
  { name: 'Bootstrap', category: 'frontend', level: 'beginner' },
  { name: 'React', category: 'frontend', level: 'beginner' },
  { name: 'Astro', category: 'frontend', level: 'beginner' },
  
  // Database
  { name: 'MySQL', category: 'database', level: 'intermediate' },
  { name: 'SQL', category: 'database', level: 'intermediate' },
  
  // Tools
  { name: 'Git', category: 'tools', level: 'intermediate' },
  { name: 'GitHub', category: 'tools', level: 'intermediate' },
  { name: 'VS Code', category: 'tools', level: 'intermediate' },
];

export const skillsByCategory = {
  backend: skills.filter(s => s.category === 'backend'),
  frontend: skills.filter(s => s.category === 'frontend'),
  database: skills.filter(s => s.category === 'database'),
  tools: skills.filter(s => s.category === 'tools'),
  other: skills.filter(s => s.category === 'other'),
};

import { Code, Palette, Database, Wrench } from 'lucide-react';
import skillsData from '../data/skills.json';
import type { Skill } from '../types';

const Skills = () => {
  const skills: Skill[] = skillsData as Skill[];
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return <Code size={24} />;
      case 'backend': return <Database size={24} />;
      case 'tools': return <Wrench size={24} />;
      default: return <Palette size={24} />;
    }
  };
  
  const getCategoryName = (category: string) => {
    switch (category) {
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend';
      case 'tools': return 'Tools';
      default: return 'Other';
    }
  };
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  return (
    <section id="skills" className="py-20 px-4 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-background rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-bold">{getCategoryName(category)}</h3>
              </div>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-surface rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-text/60">
                I'm always exploring new technologies and improving my skills
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-background rounded-full text-sm">
                Currently Learning: Next.js 14
              </div>
              <div className="px-4 py-2 bg-background rounded-full text-sm">
                Exploring: AI/ML Integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
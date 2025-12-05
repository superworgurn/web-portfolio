// Projects.tsx
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectsData from '../data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects = () => {
  const projects: Project[] = projectsData as Project[];
  const [showAll, setShowAll] = useState(false);
  
  // หากต้องการแสดงเฉพาะ featured ให้ใช้บรรทัดนี้แทน
  // const displayedProjects = showAll ? projects : projects.filter(p => p.featured);
  
  // หากต้องการแสดงแค่ 3 อันแรก (ตามที่ถาม)
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-text/60 mt-4 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div key={project.id} className="bg-background rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-text/60 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-surface text-text border border-surface-border rounded-lg hover:bg-surface/50 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
            </button>
            
            {!showAll && (
              <p className="text-text/60 mt-4">
                Showing 3 of {projects.length} projects
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
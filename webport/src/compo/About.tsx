import { User, Calendar, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1 mb-8">
              <div className="bg-surface rounded-2xl p-8">
                <img 
                  src="1000049384.jpg"
                  alt="Profile"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Crafting Digital Experiences</h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-text/70">
                I'm a passionate Full Stack Developer with over 5 years of experience 
                creating web applications. I specialize in modern JavaScript frameworks 
                and have a keen eye for design and user experience.
              </p>
              
              <p className="text-text/70">
                My approach combines technical expertise with creative problem-solving 
                to deliver solutions that not only meet but exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Name</p>
                  <p className="text-text/60">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Experience</p>
                  <p className="text-text/60">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-text/60">Bangkok, Thailand</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-text/60">Open to Work</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              Let's work together →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
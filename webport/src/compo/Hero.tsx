import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 animate-pulse">
          👋 Welcome to my Portfolio
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="relative inline-block">
            {/* ตัวหนังสือแบบ glowing gradient */}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-gradient-shine font-extrabold tracking-tight">
              Worgurn Ruenpitak
            </span>
            
            {/* เอฟเฟกต์เงาสะท้อน (Reflection Effect) */}
            <span className="absolute -bottom-1 left-0 w-full h-4 bg-gradient-to-t from-primary/30 to-transparent opacity-60 blur-sm scale-x-105 -skew-x-6"></span>
            
            {/* เอฟเฟกต์ประกาย (Sparkle Effect) */}
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-70"></span>
            <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
          </span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-text/70 mb-6 md:mb-8 font-medium">
          Full Stack Developer & UI/UX Enthusiast
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-text/60 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
         When I succeed, I will not forget the people who supported me ✌️🤍
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 w-full sm:w-auto">
          <button 
            onClick={handleDownloadResume}
            className="px-6 sm:px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25"
          >
            <span>Download Resume</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
          
          <a 
            href="#contact" 
            className="px-6 sm:px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-primary/10"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/ShoperGamer" 
            className="text-text/60 hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/5"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/worgurn-ruenpitak-243a9330a" 
            className="text-text/60 hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/5"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="text-text/60 hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/5"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" className="block p-2 hover:bg-primary/5 rounded-full transition-colors">
          <ArrowDown size={28} className="text-primary/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
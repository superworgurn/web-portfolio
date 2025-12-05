import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-2xl font-bold mb-2 inline-block">
              <span className="">
                Worgurn Ruenpitak   
              </span>
              Charif
            </a>
            <p className="text-text/60">
              Building the future, one line of code at a time
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/ShoperGamer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/worgurn-ruenpitak-243a9330a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://bsky.app/profile/shopergamer.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/60 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-surface text-center text-text/60">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> · © {currentYear} Worgurn Ruenpitak. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Built with React, TypeScript & Tailwind CSS 4.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 md:py-4 bg-background/90 backdrop-blur-lg shadow-lg border-b border-surface/50' 
        : 'py-4 md:py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-xl sm:text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              WR
            </span>
            <span className="hidden sm:inline">Worgurn Ruenpitak</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text/70 hover:text-primary transition-colors relative group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text hover:bg-surface rounded-lg transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideDown">
            <div className="flex flex-col gap-2 bg-background/95 backdrop-blur-lg rounded-xl p-4 shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 px-4 text-text/70 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
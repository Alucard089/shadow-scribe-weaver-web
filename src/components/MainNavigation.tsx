
import { useState, useEffect } from 'react';
import { Home, User, BookOpen, Award, GraduationCap, Heart, FileText, FileDown } from 'lucide-react';

export const MainNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: BookOpen },
    { id: 'hobbies', label: 'Hobbies', icon: Heart },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'analysis', label: 'Text Analyser', icon: FileText },
    { id: 'cv', label: 'Resume', icon: FileDown },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg3-dark/90 backdrop-blur-md shadow-lg shadow-bg3-purple/10 border-b border-bg3-accent/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <nav className="flex items-center space-x-1">
          <div className="w-8 h-8 mr-2 overflow-hidden relative">
            <div className="w-full h-full bg-bg3-dark rounded-full border-2 border-bg3-accent animate-pulse">
              {/* Astarion-inspired vampire icon */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-bg3-dark rounded-full"></div>
              <div className="absolute inset-[2px] bg-bg3-dark rounded-full"></div>
            </div>
          </div>
          
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  className={`flex items-center px-2 py-1 rounded-md text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-red-400 font-medium'
                      : 'text-bg3-gray hover:text-bg3-light'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <item.icon className="w-4 h-4 mr-1" />
                  <span>{item.label}</span>
                </a>
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-bg3-purple" />
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-bg3-purple group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="font-playfair text-xl italic bg-gradient-to-br from-red-400 to-bg3-purple bg-clip-text text-transparent animate-glow">
          Shoaib Ahmed
        </div>
      </div>
    </header>
  );
};


import { useState, useEffect } from 'react';

export const Navigation = () => {
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
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-4">
        {['hero', 'about', 'education', 'skills', 'cv', 'analysis'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-bg3-purple shadow-[0_0_8px_rgba(155,135,245,0.8)] scale-125' 
                  : 'bg-bg3-gray/50 hover:bg-bg3-purple'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="sr-only">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

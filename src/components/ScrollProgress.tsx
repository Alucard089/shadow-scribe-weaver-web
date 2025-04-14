
import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-full h-1 bg-bg3-dark/30 z-50">
      <div
        className="h-full bg-gradient-to-r from-bg3-purple to-bg3-accent transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

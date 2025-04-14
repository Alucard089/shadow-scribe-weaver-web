
import { useEffect, useState } from 'react';

export const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-bg3-dark z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="w-16 h-16 border-4 border-bg3-purple/20 border-t-bg3-purple rounded-full animate-spin" />
    </div>
  );
};

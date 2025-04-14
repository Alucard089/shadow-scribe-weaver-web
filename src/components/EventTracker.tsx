
import { useEffect } from 'react';

export const EventTracker = () => {
  useEffect(() => {
    const logEvent = (event: MouseEvent | Event, type: string) => {
      const target = event.target as HTMLElement;
      const timestamp = new Date().toISOString();
      const elementType = target.tagName.toLowerCase();
      const objectType = target.getAttribute('data-type') || elementType;
      
      console.log(`${timestamp}, ${type}, ${objectType}`);
    };

    const clickHandler = (e: MouseEvent) => logEvent(e, 'click');
    const viewHandler = (e: Event) => logEvent(e, 'view');

    document.addEventListener('click', clickHandler);
    document.addEventListener('DOMContentLoaded', viewHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('DOMContentLoaded', viewHandler);
    };
  }, []);

  return null;
};

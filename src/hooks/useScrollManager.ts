import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook that handles scroll behavior:
 * 1. Scrolls to top when navigating between pages
 * 2. Scrolls to hash targets when navigating with hash links
 */
export const useScrollManager = () => {
  const { pathname, hash } = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    // If there's a hash in the URL, scroll to the element with that ID
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // No hash, scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]); // Trigger on route or hash changes

  // Add a utility function to smoothly scroll to elements
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { scrollToElement };
}; 
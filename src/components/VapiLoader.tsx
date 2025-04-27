import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * VapiLoader component that conditionally loads Vapi widget
 * except on the AIR product page
 */
const VapiLoader = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Skip loading Vapi on the AIR page
    if (location.pathname === '/products/air') {
      return;
    }
    
    // Load Vapi script dynamically
    const loadVapiScript = async () => {
      try {
        // Create script element
        const script = document.createElement('script');
        script.src = 'https://cdn.vapi.ai/vapi-widget.js';
        script.async = true;
        
        // Handle script load event
        script.onload = () => {
          if (window.VapiWidget) {
            window.vapiWidget = window.VapiWidget.init({
              assistantId: '68682619-14e2-4ec1-b4c1-b0b5e667b3a7',
              shareKey: '4a0b1278-fa3a-41af-a9d2-e87151de2da4',
              autoInit: false,
              hideWidget: true,
            });
          }
        };
        
        // Add script to document
        document.head.appendChild(script);
      } catch (error) {
        console.error('Failed to load Vapi widget:', error);
      }
    };
    
    loadVapiScript();
    
    // Cleanup function
    return () => {
      // Remove Vapi script when component unmounts
      const script = document.querySelector('script[src="https://cdn.vapi.ai/vapi-widget.js"]');
      if (script) {
        document.head.removeChild(script);
      }
      
      // Cleanup Vapi widget instance
      if (window.vapiWidget) {
        delete window.vapiWidget;
      }
    };
  }, [location.pathname]);
  
  // This component doesn't render anything
  return null;
};

// Add TypeScript declarations
declare global {
  interface Window {
    VapiWidget?: {
      init: (config: {
        assistantId: string;
        shareKey: string;
        autoInit: boolean;
        hideWidget: boolean;
      }) => any;
    };
    vapiWidget?: any;
  }
}

export default VapiLoader;

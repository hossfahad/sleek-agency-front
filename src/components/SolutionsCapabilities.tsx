import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import AnimatedServices from "./AnimatedServices";

const SolutionsCapabilities: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  
  // Check device size and update state
  useEffect(() => {
    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    // Initial check
    checkDeviceSize();
    
    // Listen for window resize
    window.addEventListener('resize', checkDeviceSize);
    
    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };
  }, []);

  return (
    <section 
      id="solutions" 
      className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9] -mt-[30px]"
      ref={ref}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-8 gap-8 md:gap-16 items-start">
          {/* Header Section */}
          <div className="md:col-span-3 md:sticky top-24">
            <span className="text-xs opacity-60 mb-6 block">[03]</span>
            <h2 className={`text-4xl md:text-5xl xl:text-6xl font-medium leading-[1.1] mb-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Solutions & Capabilities
              <span className="block mt-4 text-sm font-normal opacity-60">• Comprehensive AI solutions</span>
            </h2>
            
            <p className={`text-lg leading-relaxed mb-8 max-w-md transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Explore our comprehensive solutions and capabilities designed to drive innovation 
              and efficiency across your business operations.
            </p>
            
            <a 
              href="#contact" 
              className={`inline-block underline font-medium hover:opacity-70 transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              Schedule a demo →
            </a>
          </div>

          {/* Services Grid with responsive heights */}
          <div 
            className={`md:col-span-5 relative ${
              isMobile 
                ? 'h-auto' 
                : isTablet 
                  ? 'h-auto'
                  : 'h-[600px]'
            }`}
          >
            <AnimatedServices />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCapabilities;
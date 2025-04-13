import React, { useRef, useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

interface ServiceSection {
  title: string;
  description: string;
  features: string[];
  icon: string;
  borderColor: string;
}

const serviceSections: ServiceSection[] = [
  {
    title: "Rapid Market Validation",
    description: "Build, test, and refine product ideas or service offerings with AI-guided research, prototype generation, and customer feedback loops. Perfect for startups or new divisions looking to de-risk early decisions.",
    features: [
      "Launch greenfield applications with leading technologies",
      "Launch new initiatives and features to assess new customer segments"
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    borderColor: "border-blue-500"
  },
  {
    title: "Operational Efficiency",
    description: "Replace manual, repetitive tasks with intelligent AI agents. From scheduling to client follow-ups and internal coordination, we help you reduce operational overhead and scale without added headcount.",
    features: [
      "We understand your workflow to find key opportunities to save time and resources",
      "Drastically reduce overhead with fully automated agentic overhauls or human-in-the-loop processes",
      "Keeping up with all regulatory guardrails by working with HIPAA or SOC2 compliance"
    ],
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    borderColor: "border-green-500"
  },
  {
    title: "Conversational AI",
    description: "Deploy human-like AI voice agents to handle outbound calls, appointment confirmations, or client intake. Our systems are ideal for high-touch services where every missed call could be lost revenue.",
    features: [
      "Automated outbound appointment confirmations and reminders",
      "Intake surveys and onboarding for legal consultations",
      "Streamlined resume reviews and interviewing"
    ],
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    borderColor: "border-purple-500"
  },
  {
    title: "B2B Lead Generation",
    description: "Find and nurture high-value B2B leads using intelligent targeting, AI-crafted outreach, and automated CRM workflows. Keep your pipeline full with personalized engagement at scale.",
    features: [
      "Hyper-personalized outbound messages at scale",
      "Predictive lead scoring and automated segmentation",
      "Ongoing AI optimization of timing and conversion touchpoints"
    ],
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    borderColor: "border-yellow-500"
  },
  {
    title: "Document Automation",
    description: "Turn complex, document-heavy processes into fully integrated digital workflows. Extract key data from contracts, tax forms, and scanned PDFs, then auto-sync to your systems for instant action.",
    features: [
      "Investor subscription documents auto-processed for fund managers",
      "Tax and compliance paperwork digitized for accountants",
      "Legal forms auto-filled and validated for client onboarding"
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    borderColor: "border-red-500"
  },
  {
    title: "AI-Generated Content",
    description: "Generate polished, on-brand content using just your voice or notes. From blog posts and newsletters to LinkedIn updates and SEO-optimized articles, stay visible without a dedicated content team.",
    features: [
      "Weekly social media and email content for service providers",
      "Thought-leadership pieces from articles to podcasts",
      "AI-assisted keyword-rich copy for SEO & web presence"
    ],
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    borderColor: "border-teal-500"
  }
];

const AnimatedServices: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const reachedEnd = useRef<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef<boolean>(false);
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
  
  // Global wheel event listener to handle horizontal scrolling when section is in view
  // Only active on desktop
  useEffect(() => {
    // Skip this effect on mobile and tablet
    if (isMobile || isTablet) return;
    
    const handleGlobalWheel = (e: WheelEvent) => {
      // First, check if the section is in view
      if (!sectionRef.current || !scrollContainerRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isSectionInView = sectionRect.top <= window.innerHeight * 0.5 && sectionRect.bottom >= window.innerHeight * 0.5;
      
      if (!isSectionInView) return;
      
      // Get the header element (the sticky part of SolutionsCapabilities)
      const headerElement = document.querySelector('#solutions .md\\:sticky');
      if (!headerElement) return;
      
      const headerRect = headerElement.getBoundingClientRect();
      
      // Check if the mouse is horizontally past the header section
      const isPastHeader = e.clientX > headerRect.right;
      
      // Only handle horizontal scrolling when we're past the header
      if (isPastHeader) {
        const scrollContainer = scrollContainerRef.current;
        const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 20;
        const isAtStart = scrollContainer.scrollLeft <= 0;
        
        // If we're at the end and trying to scroll right, or at the start and trying to scroll left,
        // let the page handle vertical scrolling normally
        if ((isAtEnd && e.deltaY > 0) || (isAtStart && e.deltaY < 0)) {
          // We're at an edge, allow regular vertical scroll to take over
          if (isAtEnd) {
            reachedEnd.current = true;
          }
          return;
        }
        
        // If we're not at an edge or scrolling toward an edge, handle horizontal scrolling
        if (!reachedEnd.current) {
          e.preventDefault();
          isScrollingRef.current = true;
          scrollContainer.scrollLeft += e.deltaY;
          
          // Reset scrolling flag after a short delay
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 200);
        }
      }
    };
    
    // Add the global wheel event listener only on desktop
    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleGlobalWheel);
    };
  }, [isMobile, isTablet]);
  
  // Listen for scroll events to detect when we reach the end (desktop only)
  useEffect(() => {
    // Skip this effect on mobile and tablet
    if (isMobile || isTablet) return;
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const handleScroll = () => {
      if (!scrollContainer) return;
      
      const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 20;
      
      if (isAtEnd) {
        reachedEnd.current = true;
        
        // Add a slight delay before releasing the scroll control
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'auto';
          window.scrollBy(0, 10); // Tiny scroll to trigger vertical scrolling
          
          // Restore smooth scrolling after a moment
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
          }, 100);
        }, 100);
      } else if (scrollContainer.scrollLeft <= 0) {
        reachedEnd.current = false;
      }
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isTablet]);
  
  // Reset the reached end state when scrolling back into view
  useEffect(() => {
    // Skip this effect on mobile and tablet
    if (isMobile || isTablet) return;
    
    const resetReachedEndState = () => {
      if (scrollContainerRef.current && sectionRef.current) {
        const containerRect = sectionRef.current.getBoundingClientRect();
        
        // If the container is back in view and we're at the top of it
        if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
          reachedEnd.current = false;
        }
      }
    };
    
    window.addEventListener('scroll', resetReachedEndState);
    
    return () => {
      window.removeEventListener('scroll', resetReachedEndState);
    };
  }, [isMobile, isTablet]);
  
  // Scroll functions for the buttons (desktop only)
  const scrollLeft = () => {
    if (scrollContainerRef.current && !isMobile && !isTablet) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      reachedEnd.current = false;
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current && !isMobile && !isTablet) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
      
      // Check if we'll be at the end after scrolling
      setTimeout(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 20) {
          reachedEnd.current = true;
        }
      }, 500);
    }
  };

  // Ensure desktop view cards are visible when they enter the viewport
  useEffect(() => {
    if (inView && !isMobile && !isTablet && scrollContainerRef.current) {
      // Force container to be visible
      const container = scrollContainerRef.current;
      
      // Make sure all cards are fully visible
      const cards = container.querySelectorAll('.service-card');
      cards.forEach(card => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateY(0)';
      });
    }
  }, [inView, isMobile, isTablet]);

  // Render for mobile view (vertical scroll)
  if (isMobile) {
    return (
      <div className="relative mobile-services-view" ref={sectionRef}>
        <div className="vertical-scroll-container py-4">
          {serviceSections.map((section, index) => (
            <div
              key={index}
              className="service-card-mobile mb-6"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium">{section.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm">{section.description}</p>
              
              <div className="grid gap-4">
                {section.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`${section.borderColor} border-l-2 pl-3`}>
                    <p className="text-xs text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Render for tablet view (grid layout)
  if (isTablet) {
    return (
      <div className="relative tablet-services-view" ref={sectionRef}>
        <div className="grid-scroll-container grid grid-cols-2 gap-6 py-4">
          {serviceSections.map((section, index) => (
            <div
              key={index}
              className="service-card-tablet"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium">{section.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm">{section.description}</p>
              
              <div className="grid gap-4">
                {section.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`${section.borderColor} border-l-2 pl-3`}>
                    <p className="text-xs text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Default desktop view (horizontal scroll)
  return (
    <div className="relative desktop-services-view" ref={sectionRef}>
      <div 
        className={`horizontal-scroll-container ${isScrollingRef.current ? 'scrolling' : ''}`} 
        ref={scrollContainerRef}
      >
        <div className="horizontal-scroll-content" ref={scrollContentRef}>
          {serviceSections.map((section, index) => (
            <div
              key={index}
              className="service-card"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium">{section.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6">{section.description}</p>
              
              <div className="grid gap-6">
                {section.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`${section.borderColor} border-l-2 pl-4`}>
                    <p className="text-sm text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll buttons - only for desktop */}
      <button 
        className="scroll-button scroll-button-left" 
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="scroll-button scroll-button-right" 
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default AnimatedServices; 
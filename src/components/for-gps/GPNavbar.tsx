import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const GPNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setSolutionsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="inline-flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Enhanced Points Logo" 
                className="h-8 sm:h-10 md:h-12"
              />
            </Link>
            <span className="ml-6 text-[#0A382C] font-bold" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              For Asset Managers
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center text-[#0A382C] hover:text-[#0A382C]/80 transition-colors"
              >
                <span>Solutions</span>
                {solutionsOpen ? (
                  <ChevronUp className="h-4 w-4 ml-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </button>
              
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-64 z-50">
                  <button 
                    onClick={() => scrollToSection('ai-sdr-section')}
                    className="block w-full text-left px-4 py-2 text-[#0A382C] hover:bg-[#0A382C]/5 transition-colors"
                  >
                    Sales Outreach
                  </button>
                  <button 
                    onClick={() => scrollToSection('data-room-section')}
                    className="block w-full text-left px-4 py-2 text-[#0A382C] hover:bg-[#0A382C]/5 transition-colors"
                  >
                    Data Room Management
                  </button>
                  <button 
                    onClick={() => scrollToSection('relationship-section')}
                    className="block w-full text-left px-4 py-2 text-[#0A382C] hover:bg-[#0A382C]/5 transition-colors"
                  >
                    Investor Relationships
                  </button>
                </div>
              )}
            </div>
            
            <Button 
              className="bg-[#0A382C] hover:bg-[#0A382C]/90 text-white px-4 py-2 rounded-lg"
              onClick={() => scrollToSection('cta-section')}
            >
              Request Access
            </Button>
            
            <Link 
              to="/" 
              className="flex items-center text-[#0A382C] hover:text-[#0A382C]/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="font-light">Back to EP</span>
            </Link>
          </div>
          
          {/* Mobile menu button - simplified for this implementation */}
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              className="bg-[#0A382C] hover:bg-[#0A382C]/90 text-white px-3 py-1 text-sm rounded-lg"
              onClick={() => scrollToSection('cta-section')}
            >
              Request Access
            </Button>
            
            <Link 
              to="/" 
              className="flex items-center text-[#0A382C] hover:text-[#0A382C]/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to EP</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GPNavbar;

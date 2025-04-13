import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add smooth scroll functionality
  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      // Target the section number span element
      const sectionId = href.substring(1); // Remove the # character
      const sectionNumberElement = document.querySelector(`section#${sectionId} .text-xs.opacity-60`);
      
      if (sectionNumberElement) {
        const navHeight = 80; // Approximate navbar height
        const elementPosition = sectionNumberElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        // Fallback to the section itself if the span isn't found
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const toggleUseCases = (e) => {
    e.preventDefault();
    setUseCasesOpen(!useCasesOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        <nav className="flex items-center justify-between relative">
          <div className="flex items-center">
            <Link to="/" className="inline-flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Enhanced Points Logo" 
                className="h-8 sm:h-10 md:h-12"
              />
            </Link>
          </div>
          
          {isMobile ? (
            <button 
              className="text-viridian relative z-[60]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex items-center space-x-6 lg:space-x-10">
              <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8 text-sm">
                <li>
                  <a href="#overview" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[01]</span> Overview
                  </a>
                </li>
                <li>
                  <a href="#how-we-help" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[02]</span> How We Help
                  </a>
                </li>
                <li>
                  <a href="#capabilities" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[03]</span> Capabilities
                  </a>
                </li>
                <li>
                  <a href="#businesses" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[04]</span> Industries
                  </a>
                </li>
                <li className="relative group">
                  <a 
                    href="#" 
                    onClick={toggleUseCases} 
                    className="text-viridian hover:opacity-100 flex items-center relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all"
                  >
                    <span className="text-xs align-super mr-1">[05]</span> Solutions
                    {useCasesOpen ? <ChevronUp size={14} className="ml-1" /> : <ChevronDown size={14} className="ml-1" />}
                  </a>
                  
                  {useCasesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                      <Link to="/use-cases" className="block px-4 py-2 text-sm text-viridian hover:bg-gray-100 font-medium">
                        View All Solutions
                      </Link>
                      <div className="border-t border-gray-100 my-2"></div>
                      <Link to="/use-cases/voice-agents" className="block px-4 py-2 text-sm text-viridian hover:bg-gray-100">
                        AI Voice Agents
                      </Link>
                      <Link to="/use-cases/document-processing" className="block px-4 py-2 text-sm text-viridian hover:bg-gray-100">
                        Document Processing
                      </Link>
                      <Link to="/use-cases/rapid-prototype" className="block px-4 py-2 text-sm text-viridian hover:bg-gray-100">
                        Rapid Prototyping
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <a href="#pricing" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[06]</span> Pricing
                  </a>
                </li>
              </ul>
              <a href="#contact" onClick={handleLinkClick} className="underline font-medium text-viridian hover:text-cambridge-blue transition-colors">
                Discuss with Us →
              </a>
            </div>
          )}
        </nav>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 z-[55] bg-white pt-24 px-6">
            <ul className="flex flex-col space-y-6 text-xl">
              <li>
                <a href="#overview" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[01]</span> Overview
                </a>
              </li>
              <li>
                <a href="#how-we-help" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[02]</span> How We Help
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[03]</span> Capabilities
                </a>
              </li>
              <li>
                <a href="#businesses" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[04]</span> Industries
                </a>
              </li>
              <li>
                <div>
                  <a href="#" onClick={toggleUseCases} className="flex items-center justify-between py-2 text-viridian">
                    <span>
                      <span className="text-sm opacity-60 mr-2">[05]</span> Solutions
                    </span>
                    {useCasesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </a>
                  
                  {useCasesOpen && (
                    <div className="pl-6 mt-2 space-y-3">
                      <Link to="/use-cases" className="block py-1 text-viridian text-lg font-medium">
                        View All Solutions
                      </Link>
                      <div className="border-t border-gray-100 my-2"></div>
                      <Link to="/use-cases/voice-agents" className="block py-1 text-viridian text-lg">
                        AI Voice Agents
                      </Link>
                      <Link to="/use-cases/document-processing" className="block py-1 text-viridian text-lg">
                        Document Processing
                      </Link>
                      <Link to="/use-cases/rapid-prototype" className="block py-1 text-viridian text-lg">
                        Rapid Prototyping
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a href="#pricing" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[06]</span> Pricing
                </a>
              </li>
              <li className="pt-8">
                <a href="#contact" onClick={handleLinkClick} className="block underline font-medium text-viridian">
                  Discuss with Us →
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

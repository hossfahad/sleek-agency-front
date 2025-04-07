import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 ${
        scrolled ? "bg-mint-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        <nav className="flex items-center justify-between relative">
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center">
              <img src="/images/logo.png" alt="Enhanced Points Logo" className="h-10 sm:h-12 md:h-14" />
            </a>
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
                  <a href="#solutions" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[03]</span> Solutions
                  </a>
                </li>
                <li>
                  <a href="#businesses" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[04]</span> Industries
                  </a>
                </li>
                <li>
                  <a href="#pricing" onClick={handleLinkClick} className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[05]</span> Pricing
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
          <div className="fixed inset-0 z-[55] bg-mint-cream pt-24 px-6">
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
                <a href="#solutions" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[03]</span> Solutions
                </a>
              </li>
              <li>
                <a href="#businesses" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[04]</span> Industries
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={handleLinkClick} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[05]</span> Pricing
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

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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-10 py-5 ${
        scrolled ? "bg-mint-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="inline-flex items-center">
              <img src="/images/logo.png" alt="Enhanced Points Logo" className="h-12 md:h-14" />
            </a>
          </div>
          
          {isMobile ? (
            <button 
              className="text-viridian"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex items-center space-x-10">
              <ul className="flex space-x-8 text-sm">
                <li>
                  <a href="#overview" className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[01]</span> Overview
                  </a>
                </li>
                <li>
                  <a href="#how-we-help" className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[02]</span> How We Help
                  </a>
                </li>
                <li>
                  <a href="#businesses" className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[03]</span> Businesses We Help
                  </a>
                </li>
                <li>
                  <a href="#results" className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[04]</span> Results
                  </a>
                </li>
                <li>
                  <a href="#tools" className="text-viridian hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-viridian after:transition-all">
                    <span className="text-xs align-super mr-1">[05]</span> Tools
                  </a>
                </li>
              </ul>
              <a href="#contact" className="underline font-medium text-viridian hover:text-cambridge-blue transition-colors">
                Discuss with Us →
              </a>
            </div>
          )}
        </nav>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="bg-mint-cream fixed inset-0 z-50 pt-20 px-6 animate-fade-in">
            <ul className="flex flex-col space-y-6 text-xl">
              <li>
                <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[01]</span> Overview
                </a>
              </li>
              <li>
                <a href="#how-we-help" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[02]</span> How We Help
                </a>
              </li>
              <li>
                <a href="#businesses" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[03]</span> Businesses We Help
                </a>
              </li>
              <li>
                <a href="#results" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[04]</span> Results
                </a>
              </li>
              <li>
                <a href="#tools" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-viridian">
                  <span className="text-sm opacity-60 mr-2">[05]</span> Tools
                </a>
              </li>
              <li className="pt-8">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block underline font-medium text-viridian">
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

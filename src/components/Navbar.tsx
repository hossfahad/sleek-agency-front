
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
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="inline-block">
              <div className="bg-black text-white text-xs md:text-sm rounded-3xl px-3 py-2 font-semibold">
                Bold <span className="text-[#aaa]">♦</span> Creatives
              </div>
            </a>
          </div>
          
          {isMobile ? (
            <button 
              className="text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex items-center space-x-10">
              <ul className="flex space-x-8 text-sm">
                <li>
                  <a href="#overview" className="opacity-80 hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                    <span className="text-xs align-super mr-1">[01]</span> Overview
                  </a>
                </li>
                <li>
                  <a href="#services" className="opacity-80 hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                    <span className="text-xs align-super mr-1">[02]</span> Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="opacity-80 hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                    <span className="text-xs align-super mr-1">[03]</span> Bold Labs
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="opacity-80 hover:opacity-100 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-black after:transition-all">
                    <span className="text-xs align-super mr-1">[04]</span> Bold Roast
                  </a>
                </li>
              </ul>
              <a href="#contact" className="underline font-medium hover:opacity-70 transition-opacity">
                Inquiries →
              </a>
            </div>
          )}
        </nav>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="bg-white fixed inset-0 z-50 pt-20 px-6 animate-fade-in">
            <ul className="flex flex-col space-y-6 text-xl">
              <li>
                <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="block py-2">
                  <span className="text-sm opacity-60 mr-2">[01]</span> Overview
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2">
                  <span className="text-sm opacity-60 mr-2">[02]</span> Services
                </a>
              </li>
              <li>
                <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-2">
                  <span className="text-sm opacity-60 mr-2">[03]</span> Bold Labs
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2">
                  <span className="text-sm opacity-60 mr-2">[04]</span> Bold Roast
                </a>
              </li>
              <li className="pt-8">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block underline font-medium">
                  Inquiries →
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

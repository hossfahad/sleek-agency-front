import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ScrollLink from "./ScrollLink";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const industriesDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIndustriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
  };

  const toggleIndustriesDropdown = () => {
    if (isMobile) {
      setIndustriesOpen(!industriesOpen);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 ${
        scrolled || mobileMenuOpen || industriesOpen ? "bg-white shadow-sm" : "bg-transparent"
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
            <div className="flex items-center">
              <ul className="flex space-x-8 text-sm font-medium">
                <li className="relative group" ref={industriesDropdownRef}>
                  <button 
                    className={`py-2 px-1 inline-flex items-center transition-colors hover:text-viridian relative ${
                      location.pathname.includes("/industries") ? 
                      "text-viridian after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-viridian" : 
                      "text-gray-700"
                    }`}
                    onClick={toggleIndustriesDropdown}
                    aria-expanded={industriesOpen}
                    aria-haspopup="true"
                  >
                    Industries
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  <div className="absolute top-full left-0 w-[320px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 grid gap-6 border border-gray-100">
                      <Link 
                        to="/industries" 
                        className="flex items-center gap-3 text-gray-700 hover:text-viridian transition-colors group/item"
                        onClick={handleLinkClick}
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover/item:bg-gray-200 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">All Industries</span>
                          <p className="text-xs text-gray-500 mt-1">See all industry solutions</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/industries/healthcare" 
                        className="flex items-center gap-3 text-gray-700 hover:text-viridian transition-colors group/item"
                        onClick={handleLinkClick}
                      >
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover/item:bg-red-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Healthcare</span>
                          <p className="text-xs text-gray-500 mt-1">Medical & patient solutions</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/industries/financial-services" 
                        className="flex items-center gap-3 text-gray-700 hover:text-viridian transition-colors group/item"
                        onClick={handleLinkClick}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Financial Services</span>
                          <p className="text-xs text-gray-500 mt-1">Banking & finance solutions</p>
                        </div>
                      </Link>

                      <Link 
                        to="/industries/hotels-hospitality" 
                        className="flex items-center gap-3 text-gray-700 hover:text-viridian transition-colors group/item"
                        onClick={handleLinkClick}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Hotels & Hospitality</span>
                          <p className="text-xs text-gray-500 mt-1">Guest service automation</p>
                        </div>
                      </Link>

                      <Link 
                        to="/industries/transportation" 
                        className="flex items-center gap-3 text-gray-700 hover:text-viridian transition-colors group/item"
                        onClick={handleLinkClick}
                      >
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover/item:bg-green-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Ground Transportation</span>
                          <p className="text-xs text-gray-500 mt-1">Booking & dispatch automation</p>
                        </div>
                      </Link>

                      <Link 
                        to="/industries/restaurants-takeouts" 
                        className="flex items-center gap-3 text-gray-700 hover:text-viridian transition-colors group/item"
                        onClick={handleLinkClick}
                      >
                        <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center group-hover/item:bg-yellow-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18v13H3V7zM5 7V5a3 3 0 016 0v2M13 7V5a3 3 0 016 0v2" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Restaurants & Takeouts</span>
                          <p className="text-xs text-gray-500 mt-1">Order & delivery automation</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    to="/use-cases"
                    className={`py-2 px-1 inline-flex items-center transition-colors hover:text-viridian relative ${
                      location.pathname.includes("/use-cases") ? 
                      "text-viridian after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-viridian" : 
                      "text-gray-700"
                    }`}
                    onClick={handleLinkClick}
                  >
                    Agents
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  <div className="absolute top-full left-0 w-[320px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 grid gap-6 border border-gray-100">
                      <Link
                        to="/products/air"
                        className="flex flex-col gap-2 text-gray-700 hover:text-viridian transition-colors"
                        onClick={handleLinkClick}
                      >
                        <span className="font-medium"><strong>AI:R - Receptionist Agent</strong></span>
                        <span className="text-sm">Your 24/7 virtual receptionist that handles calls, books appointments, and provides a professional first impression.</span>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link 
                    to="/measured-performance" 
                    className={`py-2 px-1 inline-block transition-colors hover:text-viridian relative ${
                      location.pathname === "/measured-performance" ? 
                      "text-viridian after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-viridian" : 
                      "text-gray-700"
                    }`}
                  >
                    Savings Calculator
                  </Link>
                </li>
                <li>
                  <ScrollLink 
                    to="#contact" 
                    className="py-2 px-1 inline-block text-gray-700 transition-colors hover:text-viridian"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
              
              <ScrollLink
                to="#contact"
                className="ml-8 px-5 py-2 bg-viridian text-white rounded-lg hover:bg-cambridge-blue transition-colors duration-300"
              >
                Get Started
              </ScrollLink>
            </div>
          )}
        </nav>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 z-[55] bg-white pt-24 px-6">
            <ul className="flex flex-col space-y-6 text-xl">
              <li>
                <button 
                  className={`flex items-center justify-between w-full py-2 ${location.pathname.includes("/industries") ? "text-viridian font-medium" : "text-gray-700"}`}
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                >
                  <span>Industries</span>
                  {industriesOpen ? <ChevronUp className="h-span5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                
                {industriesOpen && (
                  <div className="mt-4 pl-4 space-y-4 animate-in slide-in-from-left-4 duration-200">
                    <Link 
                      to="/industries" 
                      className={`block py-2 ${location.pathname === "/industries" ? "text-viridian" : "text-gray-600"}`}
                      onClick={handleLinkClick}
                    >
                      All Industries
                    </Link>
                    <Link 
                      to="/industries/healthcare" 
                      className={`block py-2 ${location.pathname === "/industries/healthcare" ? "text-viridian" : "text-gray-600"}`}
                      onClick={handleLinkClick}
                    >
                      Healthcare
                    </Link>
                    <Link 
                      to="/industries/financial-services" 
                      className={`block py-2 ${location.pathname === "/industries/financial-services" ? "text-viridian" : "text-gray-600"}`}
                      onClick={handleLinkClick}
                    >
                      Financial Services
                    </Link>
                    <Link 
                      to="/industries/hotels-hospitality" 
                      className={`block py-2 ${location.pathname === "/industries/hotels-hospitality" ? "text-viridian" : "text-gray-600"}`}
                      onClick={handleLinkClick}
                    >
                      Hotels & Hospitality
                    </Link>
                    <Link 
                      to="/industries/transportation" 
                      className={`block py-2 ${location.pathname === "/industries/transportation" ? "text-viridian" : "text-gray-600"}`}
                      onClick={handleLinkClick}
                    >
                      Ground Transportation
                    </Link>
                    <Link 
                      to="/industries/restaurants-takeouts" 
                      className={`block py-2 ${location.pathname === "/industries/restaurants-takeouts" ? "text-viridian" : "text-gray-600"}`} 
                      onClick={handleLinkClick}
                    >
                      Restaurants & Takeouts
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link 
                  to="/use-cases" 
                  className={`block py-2 ${location.pathname.includes("/use-cases") ? "text-viridian font-medium" : "text-gray-700"}`}
                  onClick={handleLinkClick}
                >
                  Solutions
                </Link>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    <Link
                      to="/products/air"
                      className={`block py-1 pl-2 text-sm ${location.pathname === "/products/air" ? "text-viridian font-semibold" : "text-gray-600"}`}
                      onClick={handleLinkClick}
                    >
                      AIR Product
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link 
                  to="/measured-performance" 
                  className={`block py-2 ${location.pathname === "/measured-performance" ? "text-viridian font-medium" : "text-gray-700"}`}
                  onClick={handleLinkClick}
                >
                  Savings Calculator
                </Link>
              </li>
              <li>
                <ScrollLink 
                  to="#contact" 
                  className="block py-2 text-gray-700"
                  onClick={handleLinkClick}
                >
                  Contact
                </ScrollLink>
              </li>
              <li className="pt-8">
                <ScrollLink
                  to="#contact"
                  onClick={handleLinkClick}
                  className="inline-flex items-center px-5 py-2 bg-viridian text-white rounded-lg hover:bg-cambridge-blue transition-colors duration-300"
                >
                  Get Started
                </ScrollLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

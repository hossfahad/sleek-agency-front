import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const GPNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { t, i18n } = useTranslation(['common']);
  const isRTL = i18n.dir() === 'rtl';

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
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link to="/" className={`inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <img 
                src="/images/logo.png" 
                alt="Enhanced Points Logo" 
                className="h-8 sm:h-10 md:h-12"
              />
            </Link>
            <span className={`${isRTL ? 'mr-6' : 'ml-6'} text-[#0A382C] font-bold`} style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
              {t('forAssetManagers')}
            </span>
          </div>
          
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-6 flex-row-reverse' : 'space-x-6'}`}>
            <LanguageSwitcher className="mr-2" />
            <div className="relative">
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center text-[#0A382C] hover:text-[#0A382C]/80 transition-colors"
              >
                <span>{t('solutions')}</span>
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
                    {t('salesOutreach')}
                  </button>
                  <button 
                    onClick={() => scrollToSection('data-room-section')}
                    className="block w-full text-left px-4 py-2 text-[#0A382C] hover:bg-[#0A382C]/5 transition-colors"
                  >
                    {t('dataRoomManagement')}
                  </button>
                  <button 
                    onClick={() => scrollToSection('relationship-section')}
                    className="block w-full text-left px-4 py-2 text-[#0A382C] hover:bg-[#0A382C]/5 transition-colors"
                  >
                    {t('investorRelationships')}
                  </button>
                </div>
              )}
            </div>
            
            <Button
              onClick={() => window.open("https://www.enhancedpoints.com/request-access", "_blank")}
              className="bg-[#0A382C] hover:bg-[#0A382C]/90 text-white rounded-md px-4 py-2 text-sm"
            >
              {t('requestAccess')}
            </Button>
            
            <Link 
              to="/" 
              className="flex items-center text-[#0A382C] hover:text-[#0A382C]/80 transition-colors"
            >
              {isRTL ? <ArrowRight className="ml-2" size={16} /> : <ArrowLeft className="mr-2" size={16} />}
              <span className="font-light">{t('backToEP')}</span>
            </Link>
          </div>
          
          {/* Mobile menu button - simplified for this implementation */}
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              className="bg-[#0A382C] hover:bg-[#0A382C]/90 text-white px-3 py-1 text-sm rounded-lg"
              onClick={() => scrollToSection('cta-section')}
            >
              {t('requestAccess')}
            </Button>
            
            <Link 
              to="/" 
              className="flex items-center text-[#0A382C] hover:text-[#0A382C]/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">{t('backToEP')}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GPNavbar;

import React, { useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Import components
import GPNavbar from "@/components/for-gps/GPNavbar";
import GPFooter from "@/components/for-gps/GPFooter";
import HeroSection from "@/components/for-gps/HeroSection";
import AiSdrAgentSection from "@/components/for-gps/AiSdrAgentSection";
import DataRoomAgentSection from "@/components/for-gps/DataRoomAgentSection";
import RelationshipAgentSection from "@/components/for-gps/RelationshipAgentSection";
import LPCommunicationsAgentSection from "@/components/for-gps/LPCommunicationsAgentSection";
import SecuritySection from "@/components/for-gps/SecuritySection";
import CTASection from "@/components/for-gps/CTASection";
import ForGpsI18nProvider from "@/components/for-gps/ForGpsI18nProvider";


// Loading component for Suspense
const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#0A382C]"></div>
  </div>
);

const ForGPsPageContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { t, i18n } = useTranslation(['hero', 'features']);
  const isRTL = i18n.dir() === 'rtl';

  return (
    <>
      <Helmet>
        <title>Enhanced Points | AI Agents for Alternative Asset Managers</title>
        <meta name="description" content="Our ecosystem of specialized AI Agents acts as a 24/7 extension of your team, automating workflows from fundraising and deal flow to investor relations." />
        {/* Add CSS for the animation background */}
        <style type="text/css">{`
          html, body {
            margin: 0;
            height: 100%;
            background: #FFF;
            font-weight: 300;
            overflow-x: hidden;
          }
          h1, h2, h3, h4, h5, h6, p, span, div, button {
            font-weight: 300 !important;
          }
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400&display=swap');
          
          /* Animation and positioning styles */
          main {
            position: relative;
            z-index: 1;
          }
          
          .section-container {
            position: relative;
            border-radius: 8px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
          }
          
          /* Ensure animations work properly */
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .duration-700 {
            transition-duration: 700ms;
          }
          
          .ease-out {
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        `}</style>
      </Helmet>
      
      {/* Custom GP Navigation */}
      <GPNavbar />
      
      <main className="font-extralight">
        {/* Hero Section with animations preserved */}
        <HeroSection />
        
        {/* Agent Ecosystem Introduction */}
        <section className="py-16 bg-white bg-opacity-80 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-4xl text-center section-container py-8">
            <h2 
              className={`text-3xl md:text-4xl font-extralight text-[#0A382C] mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "200ms" }}
            >
              {t('features:scaleWithAgents')}
            </h2>
            <p 
              className={`text-xl text-gray-700 mb-8 font-light leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "300ms" }}
            >
              {t('features:agentsDescription')}
            </p>
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-center">
                <div className="text-3xl font-light text-[#0A382C] mb-2">5+</div>
                <div className="text-sm text-gray-600">{t('features:orchestratedIntelligence')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-[#0A382C] mb-2">↑</div>
                <div className="text-sm text-gray-600">{t('features:increasedEfficiency')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-[#0A382C] mb-2">24/7</div>
                <div className="text-sm text-gray-600">{t('features:continuousOperation')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-[#0A382C] mb-2">↑</div>
                <div className="text-sm text-gray-600">{t('features:fundraisingGoals')}</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Agent Sections with IDs for jump links */}
        <div 
          id="ai-sdr-section" 
          className={`section-container mx-4 md:mx-auto my-8 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: "500ms" }}
        >
          <AiSdrAgentSection />
        </div>
        
        <div 
          id="data-room-section" 
          className={`section-container mx-4 md:mx-auto my-8 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: "600ms" }}
        >
          <DataRoomAgentSection />
        </div>
        
        {/* <div 
          id="relationship-section" 
          className={`section-container mx-4 md:mx-auto my-8 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: "700ms" }}
        >
          <RelationshipAgentSection />
        </div> */}
        
        <div 
          id="lp-communications-section" 
          className={`section-container mx-4 md:mx-auto my-8 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: "800ms" }}
        >
          <LPCommunicationsAgentSection />
        </div>
        
        <div 
          id="security-section" 
          className={`section-container mx-4 md:mx-auto my-8 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: "850ms" }}
        >
          <SecuritySection />
        </div>
        
        {/* Agent Orchestration Section */}
        <section className="py-16 bg-white bg-opacity-80 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-4xl section-container py-8">
            <div 
              className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "900ms" }}
            >
              <h2 className="text-3xl md:text-4xl font-extralight text-[#0A382C] mb-6">
                {t('features:orchestratedIntelligence')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                {t('features:agentsCollaboration')}
              </p>
            </div>
            <div 
              className={`bg-gradient-to-br from-[#0A382C]/5 to-[#0A382C]/10 p-8 rounded-2xl shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-lg font-medium text-[#0A382C] mb-2">{t('features:sharedIntelligence')}</div>
                  <p className="text-sm text-gray-600">{t('features:sharedIntelligenceDesc')}</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-lg font-medium text-[#0A382C] mb-2">{t('features:workflowAutomation')}</div>
                  <p className="text-sm text-gray-600">{t('features:workflowAutomationDesc')}</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-lg font-medium text-[#0A382C] mb-2">{t('features:institutionalMemory')}</div>
                  <p className="text-sm text-gray-600">{t('features:institutionalMemoryDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final Call-to-Action section with waitlist signup */}
        <div 
          id="cta-section" 
          className={`section-container mx-4 md:mx-auto my-8 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: "1100ms" }}
        >
          <CTASection />
        </div>
      </main>
      
      {/* Simplified GP Footer */}
      <GPFooter />
    </>
  );
};

const ForGPsPage = () => (
  <ForGpsI18nProvider>
    <Suspense fallback={<Loading />}>
      <ForGPsPageContent />
    </Suspense>
  </ForGpsI18nProvider>
);

export default ForGPsPage;

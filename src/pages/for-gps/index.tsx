import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";

// Import components
import GPNavbar from "@/components/for-gps/GPNavbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/for-gps/HeroSection";
import AgentEcosystemSection from "@/components/for-gps/AgentEcosystemSection";
import CTASection from "@/components/for-gps/CTASection";

const ForGPsPage = () => {
  // Animation on scroll setup
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ecosystemRef, inView: ecosystemInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Enhanced Points | For GPs</title>
        <meta name="description" content="The Agentic Layer for Alternative Asset Managers - Our ecosystem of AI Agents acts as a 24/7 extension of your team, automating workflows from fundraising and deal flow to investor relations." />
        {/* Add CSS for the animation background */}
        <style type="text/css">{`
          html, body {
            margin: 0;
            height: 100%;
            background: #FFF;
            font-weight: 300;
          }
          h1, h2, h3, h4, h5, h6, p, span, div, button {
            font-weight: 300 !important;
          }
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400&display=swap');
        `}</style>
      </Helmet>
      
      {/* Custom GP Navigation */}
      <GPNavbar />
      
      <main className="font-extralight">
        <div 
          ref={heroRef} 
          className={`transition-opacity duration-1000 ease-in-out ${heroInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <HeroSection />
        </div>
        
        <div 
          ref={ecosystemRef} 
          className={`transition-opacity duration-1000 ease-in-out ${ecosystemInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <AgentEcosystemSection />
        </div>
        
        <div 
          ref={ctaRef} 
          className={`transition-opacity duration-1000 ease-in-out ${ctaInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <CTASection />
        </div>
      </main>
      
      {/* Global Footer */}
      <Footer />
    </>
  );
};

export default ForGPsPage;

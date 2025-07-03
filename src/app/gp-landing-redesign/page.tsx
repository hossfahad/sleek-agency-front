import React from "react";
import HeroSection from "@/components/for-gps/HeroSection";
import DataRoomAgentSection from "@/components/for-gps/DataRoomAgentSection";
import RelationshipAgentSection from "@/components/for-gps/RelationshipAgentSection";
import LPCommunicationsAgentSection from "@/components/for-gps/LPCommunicationsAgentSection";
import CTASection from "@/components/for-gps/CTASection";
import WavesShader from "@/components/animations/WavesShader";

export default function GPLandingRedesign() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with animations preserved */}
      <HeroSection />
      
      {/* Vertical, single-column scrolling story with dedicated agent sections */}
      <div className="relative">
        {/* Background WavesShader animation for solutions sections */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.1 }}>
          <div className="absolute right-[-50%] transform scale-[10] w-full h-full">
            <WavesShader />
          </div>
        </div>
        
        <DataRoomAgentSection />
        <RelationshipAgentSection />
        {/* <LPCommunicationsAgentSection /> */}
      </div>
      
      {/* Final Call-to-Action section with waitlist signup */}
      <CTASection />
    </main>
  );
}

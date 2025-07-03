import React from "react";
import GPNavbar from "@/components/for-gps/GPNavbar";
import HeroSection from "@/components/for-gps/HeroSection";
import TechnicalArchitectureSection from "@/components/for-gps/TechnicalArchitectureSection";
import AgentEcosystemSection from "@/components/for-gps/AgentEcosystemSection";
import LPCommunicationSection from "@/components/for-gps/LPCommunicationSection";
import CTASection from "@/components/for-gps/CTASection";

export default function ForGPsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GPNavbar />
      <HeroSection />
      <TechnicalArchitectureSection />
      <AgentEcosystemSection />
      <LPCommunicationSection />
      <CTASection />
    </main>
  );
}

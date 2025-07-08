import React from "react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";
import { Users, CheckCircle } from "lucide-react";

const RelationshipAgentSection = () => {
  return (
    <section id="relationship-section" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollAnimation animationType="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium mb-6">
              Relationship Intelligence Agent
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-6">
              Elevate Your LP Engagement Strategy
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Left Visual */}
          <div className="lg:col-span-2">
            <ScrollAnimation animationType="fadeUp" delay={200}>
              <div className="bg-gradient-to-br from-[#0A382C]/5 to-[#0A382C]/10 p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-6">
                  <Users className="h-16 w-16 text-[#0A382C]" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#0A382C] mb-2">
                    87%
                  </div>
                  <div className="text-lg text-[#0A382C]/80 font-medium">
                    Scale Long Term Relations with your LPs
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3">
            <ScrollAnimation animationType="fadeUp" delay={300}>
              <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                Leverage AI to transform your LP relationship management. Our agent analyzes communication patterns across various internal and external factors with unmatched context windows, nurturing and growing your LP relationships, 
                Let us analyze your engagement opportunities, and manage your long term engagement sequencing with AI.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeUp" delay={400}>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Engagement Analytics</h3>
                    <p className="text-gray-600">Tracks communication frequency, sentiment, and response times.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Strategic Recommendations</h3>
                    <p className="text-gray-600">Suggests optimal timing and content for LP outreach based on market analysis, and a multitude of automated touch points.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationshipAgentSection;

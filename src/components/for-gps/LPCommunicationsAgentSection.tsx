import React from "react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";
import { MessageSquare, CheckCircle } from "lucide-react";

const LPCommunicationsAgentSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollAnimation animationType="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium mb-6">
              LP Communications Agent
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-6">
              Precision Communication at Scale
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <ScrollAnimation animationType="fadeUp" delay={200}>
              <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                Maintain communications with your LPs at scale. Our agent drafts, personalizes, 
                and schedules communications that maintain your firm's voice while ensuring timely delivery of critical 
                updates and reports.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeUp" delay={300}>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Personalized Updates</h3>
                    <p className="text-gray-600">Tailors communications based on LP investor types, and regional preferences.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Voice-Consistent Drafting</h3>
                    <p className="text-gray-600">Maintains your firm's unique communication style and tone.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">AI for your LP Reporting</h3>
                    <p className="text-gray-600">Generates quarterly updates and performance reports through your data room.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Compliance First</h3>
                    <p className="text-gray-600">Ensures all communications meet regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-2">
            <ScrollAnimation animationType="fadeUp" delay={400}>
              <div className="bg-gradient-to-br from-[#0A382C]/5 to-[#0A382C]/10 p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-6">
                  <MessageSquare className="h-16 w-16 text-[#0A382C]" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#0A382C] mb-2">
                    68%
                  </div>
                  <div className="text-lg text-[#0A382C]/80 font-medium">
                    Time Saved on Communications
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

export default LPCommunicationsAgentSection;

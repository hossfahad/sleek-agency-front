import React from "react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";
import { FileText, CheckCircle } from "lucide-react";

const DataRoomAgentSection = () => {
  return (
    <section id="data-room-section" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollAnimation animationType="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium mb-6">
              Data Room Intelligence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-6">
              Bridge the Gap through our Data Room
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <ScrollAnimation animationType="fadeUp" delay={200}>
              <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                Transform your data room into an active, intelligent asset. Easily store and share documents to prospects, partners, and investors.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeUp" delay={300}>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Automated DDQ Responses</h3>
                    <p className="text-gray-600">Instantly answers investor DDQs with 99.3% accuracy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Risk Mitigation</h3>
                    <p className="text-gray-600">Ensures identical, accurate answers across all documents, eliminating human error.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Accelerated LOI Generation</h3>
                    <p className="text-gray-600">Produces first-draft Letters of Intent tailored to specific LPs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Intelligent Classification</h3>
                    <p className="text-gray-600">Automatically organizes and tags documents using advanced NLP.</p>
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
                  <FileText className="h-16 w-16 text-[#0A382C]" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#0A382C] mb-2">
                    &lt; 3 min
                  </div>
                  <div className="text-lg text-[#0A382C]/80 font-medium">
                    Average Response Time
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

export default DataRoomAgentSection;

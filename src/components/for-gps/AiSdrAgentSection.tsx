import React from "react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";
import { UserPlus, CheckCircle, BarChart3 } from "lucide-react";

const AiSdrAgentSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollAnimation animationType="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium mb-6">
              AI SDR Agent
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-6">
              Your Always-On Capital Raising Partner
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Left Visual */}
          <div className="lg:col-span-2 flex items-center justify-end relative">
            <ScrollAnimation animationType="fadeUp" delay={200}>
              <div className="relative" style={{ marginRight: "50px" }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0A382C]/20 to-[#0A382C]/10 rounded-xl blur-lg"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src="/images/headshot.png" 
                    alt="AI SDR Agent" 
                    className="rounded-lg w-full min-w-[800px] object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3">
            <ScrollAnimation animationType="fadeUp" delay={300}>
              <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                Our Agent analyzes your fund and LP database and autonomously starts building your relationshship campaigns. 
              </p>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeUp" delay={400}>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Long-Term Relationship Building</h3>
                    <p className="text-gray-600">Conducts personalized, multi-channel relationship building campaigns to qualified LPs, transitioning to outreach naturally.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Intelligent Qualification</h3>
                    <p className="text-gray-600">Evaluates LP fit using deeply enriched and proprietary data sources</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Meeting Scheduling</h3>
                    <p className="text-gray-600">Autonomously books meetings with qualified LPs directly into your calendar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0A382C]">Strategic Support</h3>
                    <p className="text-gray-600">Our team can assist in finding and building your prospect list for you.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationType="fadeUp" delay={500}>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-5 w-5 text-[#0A382C]" />
                  <h3 className="text-lg font-medium text-[#0A382C]">Key Benefits</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* <div>
                    <div className="text-sm text-gray-500">Average Response Rate</div>
                    <div className="text-xl font-medium text-[#0A382C]">32%</div>
                  </div> */}
                  {/* <div>
                    <div className="text-sm text-gray-500">Meeting Conversion</div>
                    <div className="text-xl font-medium text-[#0A382C]"></div>
                  </div> */}
                  <div>
                    <div className="text-sm text-gray-500">Daily Outreach Capacity</div>
                    <div className="text-xl font-medium text-[#0A382C]">200+</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Cost vs. Human SDR</div>
                    <div className="text-xl font-medium text-[#0A382C]">-70%</div>
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

export default AiSdrAgentSection;

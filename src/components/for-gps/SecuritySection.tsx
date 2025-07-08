import React from "react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";
import { Shield, Lock, CheckCircle, Server } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAF9] to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollAnimation animationType="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium mb-6">
              Enterprise-Grade Security
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-6">
              Security & Trust: Our Commitment
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
              Built from the ground up with a compliance-first architecture to ensure the highest level of security for your firm's sensitive data.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Security Pillars */}
          <ScrollAnimation animationType="fadeUp" delay={200}>
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#0A382C]/10 rounded-full">
                  <Shield className="h-6 w-6 text-[#0A382C]" />
                </div>
                <h3 className="text-2xl font-light text-[#0A382C]">Core Security Pillars</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0A382C]">Secure Cloud Foundation</h4>
                    <p className="text-gray-600">Backed by leading security providers Azure, Cloudflare and more - providing a resilient, scalable, and secure foundation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0A382C]">End-to-End Encryption</h4>
                    <p className="text-gray-600">SSL/TLS encryption for data in transit and AES-256 encryption for data at rest.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0A382C]">SOC 2 Framework</h4>
                    <p className="text-gray-600">Our systems are designed using SOC 2-approved frameworks for security, availability, and confidentiality.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Data Governance */}
          <ScrollAnimation animationType="fadeUp" delay={300}>
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#0A382C]/10 rounded-full">
                  <Lock className="h-6 w-6 text-[#0A382C]" />
                </div>
                <h3 className="text-2xl font-light text-[#0A382C]">Data Governance</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0A382C]">Identity & Access Control</h4>
                    <p className="text-gray-600">Strict access controls using OAuth 2.0 and role-based permissions to protect your data.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0A382C]">Secure Scalability</h4>
                    <p className="text-gray-600">Scale your operations seamlessly without ever compromising the security or integrity of your data.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#0A382C]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0A382C]">Compliance Ready</h4>
                    <p className="text-gray-600">GDPR-aligned with complete audit logs for all system activities, supporting FINRA and SEC requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Visual Trust Element */}
        <ScrollAnimation animationType="fadeUp" delay={400}>
          <div className="bg-white p-8 rounded-2xl shadow-lg overflow-hidden relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0A382C]/20 to-[#0A382C]/10 rounded-xl blur-lg"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-light text-[#0A382C] mb-4">Enterprise-Grade Trust</h3>
                <p className="text-gray-700 mb-6">
                  At Enhanced Points, we understand that trust is the foundation of every financial relationship. 
                  Our platform provides a secure environment so you can focus on scaling your operations with confidence.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-light text-[#0A382C] mb-1">100%</div>
                    <div className="text-sm text-gray-600">Data Encryption</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-light text-[#0A382C] mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-light text-[#0A382C] mb-1">SOC 2</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center">
                <div className="p-6 bg-[#0A382C]/10 rounded-full">
                  <Server className="h-16 w-16 text-[#0A382C]" />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SecuritySection;

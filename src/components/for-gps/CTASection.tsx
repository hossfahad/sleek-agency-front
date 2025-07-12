import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t, i18n } = useTranslation(['features', 'common']);
  const isRTL = i18n.dir() === 'rtl';
  
  const [formData, setFormData] = useState({
    email: "",
    firmName: "",
    role: "",
    aum: "",
    primaryChallenge: "",
    timeline: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced validation
    if (!formData.email || !formData.email.includes("@") || !formData.firmName || !formData.role) {
      setError("Please fill in all required fields with valid information");
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Show success state
    setSubmitted(true);
    setError("");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="cta-section" className="py-24 bg-gradient-to-br from-[#0A382C] to-[#0A382C]/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium">
              {t('features:readyToTransform')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-8">
            {t('features:readyToTransform')}
            <span className="block text-white/80">{t('features:getStartedDesc')}</span>
          </h2>
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            {t('features:getStartedDesc')}
          </p>
        </div>
        
        {!submitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-[#0A382C] mb-4">
                  {t('common:requestAccess')}
                </h3>
                <p className="text-gray-600 font-light">
                  {t('features:getStartedDesc')}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      {t('common:contact')} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@yourfirm.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="firmName" className="text-sm font-medium text-gray-700">
                      {t('common:aboutUs')} *
                    </Label>
                    <Input
                      id="firmName"
                      type="text"
                      placeholder="Your Firm Name"
                      value={formData.firmName}
                      onChange={(e) => handleInputChange("firmName", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                      Your Role *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="managing-partner">Managing Partner</SelectItem>
                        <SelectItem value="general-partner">General Partner</SelectItem>
                        <SelectItem value="principal">Principal</SelectItem>
                        <SelectItem value="ir-head">Head of Investor Relations</SelectItem>
                        <SelectItem value="coo">Chief Operating Officer</SelectItem>
                        <SelectItem value="other">Other C-Level/Senior Role</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="aum" className="text-sm font-medium text-gray-700">
                      Assets Under Management
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("aum", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select AUM range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sub-100m">Under $100M</SelectItem>
                        <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                        <SelectItem value="500m-1b">$500M - $1B</SelectItem>
                        <SelectItem value="1b-5b">$1B - $5B</SelectItem>
                        <SelectItem value="5b-plus">$5B+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryChallenge" className="text-sm font-medium text-gray-700">
                    Primary Operational Challenge
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("primaryChallenge", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="What's your biggest challenge?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fundraising">Fundraising & LP Outreach</SelectItem>
                      <SelectItem value="investor-relations">Investor Relations & Communications</SelectItem>
                      <SelectItem value="due-diligence">Due Diligence & Documentation</SelectItem>
                      <SelectItem value="operational-efficiency">Operational Efficiency</SelectItem>
                      <SelectItem value="compliance">Compliance & Reporting</SelectItem>
                      <SelectItem value="all-above">All of the above</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">
                    Implementation Timeline
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="When would you like to deploy?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="q1-2024">Q1 2024</SelectItem>
                      <SelectItem value="q2-2024">Q2 2024</SelectItem>
                      <SelectItem value="h2-2024">H2 2024</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {error && <p className="text-red-500 text-sm font-light">{error}</p>}
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#0A382C] hover:bg-[#0A382C]/90 text-white py-6 text-lg font-light rounded-lg transition-all hover:scale-[1.02] group"
                >
                  Secure My Foundational Partner Position
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-xs text-gray-500 text-center font-light mt-4">
                  By submitting, you agree to receive communications about our foundational partner program. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl text-center">
              <div className="mb-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-[#0A382C] mb-4">
                  Welcome to the Foundational Partner Program
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Thank you for your interest in pioneering the future of alternative asset management. 
                  Our team will contact you within 24 hours to discuss your specific requirements and 
                  schedule a technical architecture review.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-[#0A382C] mb-3">What happens next?</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0A382C] text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">1</div>
                    <div>
                      <div className="font-medium text-gray-900">Technical Discovery Call</div>
                      <div className="text-sm text-gray-600">Deep dive into your current tech stack and operational challenges</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0A382C] text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">2</div>
                    <div>
                      <div className="font-medium text-gray-900">Custom Architecture Design</div>
                      <div className="text-sm text-gray-600">Tailored multi-agent system design for your specific use cases</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0A382C] text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">3</div>
                    <div>
                      <div className="font-medium text-gray-900">Pilot Deployment</div>
                      <div className="text-sm text-gray-600">Limited scope implementation with your team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;

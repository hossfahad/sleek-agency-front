import React from "react";
import { CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";
import { ScrollAnimation, StaggerAnimation, CounterAnimation } from "@/components/animations/ScrollAnimations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  metrics?: {
    label: string;
    value: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, description, features, metrics }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-gray-100 group">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-[#0A382C]/10 rounded-xl group-hover:bg-[#0A382C]/20 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-light text-[#0A382C] mb-1">{title}</h3>
          <p className="text-gray-600 italic font-light text-sm">{subtitle}</p>
        </div>
      </div>
      
      <p className="text-gray-700 font-light mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-[#0A382C] mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 font-light text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {metrics && (
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-light">{metrics.label}</span>
            <span className="text-lg font-light text-[#0A382C]">{metrics.value}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const AgentEcosystemSection = () => {
  return (
    <ScrollAnimation animationType="fadeUp">
      <section id="ai-sdr-section" className="py-24 bg-gradient-to-b from-[#F8FAF9] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium">
                Specialized Agent Applications
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-8">
              Your AI Agent Ecosystem in Action
              <span className="block text-[#0A382C]/70">Launching with Capital Formation Intelligence</span>
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
              Our platform deploys a comprehensive ecosystem of specialized AI Agents designed to automate and 
              elevate every critical function of an alternative asset firm. We're launching with agents focused 
              on your most vital challenge: raising capital and managing investor relationships with institutional-grade 
              precision and intelligence.
            </p>
          </div>
          
          <StaggerAnimation staggerDelay={300} animationType="fadeUp">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<TrendingUp className="h-6 w-6 text-[#0A382C]" />}
                title="Data Room Intelligence Agent"
                subtitle=""
                description="Transform your data room into an active, intelligent asset that responds to Due Diligence Questionnaires with institutional-grade precision in minutes, not weeks. This agent ensures perfect consistency across all documentation while accelerating commitment timelines."
                features={[
                  "Instant DDQ Response Generation: Automatically answer complex investor questionnaires by intelligently parsing your entire data room repository with 99.3% accuracy",
                  "Risk Mitigation Through Consistency: Ensure identical, accurate answers across every document and interaction, protecting your firm's reputation and eliminating human error",
                  "Accelerated LOI Generation: Produce first-draft Letters of Intent tailored to specific LP requirements, allowing legal teams to focus on high-value negotiation strategy",
                  "Intelligent Document Classification: Automatically organize and tag documents using advanced NLP, making information retrieval instantaneous"
                ]}
                metrics={{
                  label: "Average Response Time",
                  value: "< 3 min"
                }}
              />
              
              <FeatureCard 
                icon={<Zap className="h-6 w-6 text-[#0A382C]" />}
                title="Relationship Intelligence Agent"
                subtitle="From Static CRM to Strategic Partner"
                description="Transform passive relationship data into proactive intelligence that learns from every interaction, market trend, and external signal. This agent analyzes digital behavior patterns to surface genuine LP intent and optimize team deployment."
                features={[
                  "Predictive LP Prioritization: Advanced behavioral analysis of document engagement, email patterns, and meeting interactions to identify LPs with highest conversion probability",
                  "360° Relationship Enrichment: Integrate data room insights, market intelligence, social signals, and external events to create comprehensive LP profiles for hyper-personalized interactions",
                  "Pre-Meeting Intelligence Briefings: Automated synthesis of LP history, engagement patterns, risk factors, and AI-generated talking points for every interaction",
                  "Intent Signal Detection: Real-time analysis of digital body language to identify optimal engagement windows and messaging strategies"
                ]}
                metrics={{
                  label: "Conversion Rate Improvement",
                  value: "+340%"
                }}
              />
              
              <FeatureCard 
                icon={<Shield className="h-6 w-6 text-[#0A382C]" />}
                title="LP Communications Agent"
                subtitle="From Generic Updates to Bespoke Intelligence"
                description="Deliver institutional-grade, localized communications that make every investor feel like your only investor. This agent provides 24/7 investor relations capability while maintaining perfect compliance and audit trails."
                features={[
                  "Intelligent Query Resolution: Instantly answer complex LP questions by cross-referencing fund documents, performance data, and regulatory requirements with appropriate localization",
                  "Bespoke Reporting Automation: Generate custom reports and analysis for specific LP requirements automatically, demonstrating superior service levels while freeing IR teams for strategic work",
                  "Compliance-First Communication: All interactions automatically logged with appropriate disclaimers, creating immutable audit trails that satisfy regulatory requirements across jurisdictions",
                  "Multi-Language & Regional Adaptation: Automatically adapt communications for different investor types, languages, and regulatory environments"
                ]}
                metrics={{
                  label: "Response Accuracy",
                  value: "99.7%"
                }}
              />
            </div>
          </StaggerAnimation>

          {/* Integration Showcase */}
          <ScrollAnimation animationType="fadeUp" delay={600}>
            <div className="mt-20 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-[#0A382C] mb-4">
                  Seamless Integration with Your Existing Stack
                </h3>
                <p className="text-gray-600 font-light max-w-2xl mx-auto">
                  Our agents integrate natively with your existing tools and workflows, requiring no disruption 
                  to your current operations while dramatically enhancing their capabilities.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <StaggerAnimation staggerDelay={150} animationType="scale">
                  <div>
                    <div className="text-lg font-light text-[#0A382C] mb-1">Salesforce</div>
                    <div className="text-xs text-gray-500">CRM Integration</div>
                  </div>
                  <div>
                    <div className="text-lg font-light text-[#0A382C] mb-1">Efront</div>
                    <div className="text-xs text-gray-500">Fund Administration</div>
                  </div>
                  <div>
                    <div className="text-lg font-light text-[#0A382C] mb-1">DocuSign</div>
                    <div className="text-xs text-gray-500">Document Management</div>
                  </div>
                  <div>
                    <div className="text-lg font-light text-[#0A382C] mb-1">Outlook/Gmail</div>
                    <div className="text-xs text-gray-500">Email Integration</div>
                  </div>
                </StaggerAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default AgentEcosystemSection;

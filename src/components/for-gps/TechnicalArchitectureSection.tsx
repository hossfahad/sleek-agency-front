import React from "react";
import { Brain, Database, MessageSquare, Target, Zap, Shield } from "lucide-react";
import { ScrollAnimation, StaggerAnimation, CounterAnimation } from "@/components/animations/ScrollAnimations";

interface AgentCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  technicalDetails: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  capabilities, 
  technicalDetails 
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-[#0A382C]/20">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-[#0A382C]/10 rounded-xl group-hover:bg-[#0A382C]/20 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-light text-[#0A382C] mb-1">{title}</h3>
          <p className="text-sm text-gray-600 font-light italic">{subtitle}</p>
        </div>
      </div>
      
      <p className="text-gray-700 font-light mb-6 leading-relaxed">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-[#0A382C] mb-3">Core Capabilities:</h4>
        <ul className="space-y-2">
          {capabilities.map((capability, index) => (
            <li key={index} className="text-sm text-gray-600 font-light flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#0A382C] rounded-full mt-2 flex-shrink-0"></div>
              {capability}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 font-light">{technicalDetails}</p>
      </div>
    </div>
  );
};

const TechnicalArchitectureSection = () => {
  const agents = [
    {
      icon: <Brain className="h-6 w-6 text-[#0A382C]" />,
      title: "Intelligence Orchestrator",
      subtitle: "Master Coordinator",
      description: "The central nervous system that manages workflow distribution using sequential and concurrent orchestration patterns, optimizing resource allocation across your entire prospect lifecycle.",
      capabilities: [
        "Dynamic priority assignment based on real-time prospect behavior analysis",
        "Fault tolerance mechanisms with automatic retry capabilities",
        "Advanced load balancing for 10,000+ prospects per hour",
        "Seamless agent handoff coordination"
      ],
      technicalDetails: "Built on event-driven architecture with Redis clustering and GraphQL federation for real-time coordination."
    },
    {
      icon: <Database className="h-6 w-6 text-[#0A382C]" />,
      title: "Research Specialist",
      subtitle: "Deep Intelligence Engine",
      description: "Aggregates multi-source intelligence from LinkedIn, financial databases, news feeds, and proprietary datasets to create comprehensive prospect profiles with confidence scoring.",
      capabilities: [
        "Intent signal detection algorithms for optimal engagement timing",
        "Competitive intelligence gathering and market movement monitoring",
        "Regulatory change analysis for conversation opportunities",
        "Validated, high-quality intelligence with confidence scoring"
      ],
      technicalDetails: "Leverages NLP transformers, knowledge graphs, and real-time data pipelines with 99.3% accuracy validation."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-[#0A382C]" />,
      title: "Personalization Engine",
      subtitle: "Content Intelligence at Scale",
      description: "Generates hyper-personalized communications by analyzing prospect behavior patterns, market context, and relationship history to craft messages that resonate at the individual level.",
      capabilities: [
        "Behavioral pattern analysis for message optimization",
        "Multi-channel communication orchestration",
        "A/B testing automation with performance tracking",
        "Contextual content generation based on market conditions"
      ],
      technicalDetails: "Powered by GPT-4 fine-tuned on financial communications with reinforcement learning from human feedback."
    },
    {
      icon: <Target className="h-6 w-6 text-[#0A382C]" />,
      title: "Response Intelligence",
      subtitle: "Conversation Analysis Engine",
      description: "Analyzes every interaction to extract sentiment, intent, and engagement signals, automatically routing high-priority responses and identifying conversion opportunities.",
      capabilities: [
        "Real-time sentiment analysis and intent classification",
        "Automated response prioritization and routing",
        "Conversation thread analysis for relationship scoring",
        "Predictive engagement modeling"
      ],
      technicalDetails: "Uses transformer-based models with custom attention mechanisms trained on 2M+ financial conversations."
    },
    {
      icon: <Zap className="h-6 w-6 text-[#0A382C]" />,
      title: "Execution Specialist",
      subtitle: "Action Orchestration Hub",
      description: "Translates insights into actions across your tech stack, from CRM updates to calendar scheduling, ensuring no opportunity falls through the cracks while maintaining perfect audit trails.",
      capabilities: [
        "Multi-platform integration and workflow automation",
        "Intelligent task prioritization and scheduling",
        "Real-time performance monitoring and optimization",
        "Comprehensive audit trail generation"
      ],
      technicalDetails: "API-first architecture with 200+ integrations, event sourcing, and CQRS patterns for scalability."
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0A382C]" />,
      title: "Compliance Guardian",
      subtitle: "Regulatory Intelligence",
      description: "Ensures all communications and actions meet regulatory requirements across jurisdictions, automatically applying appropriate disclaimers and maintaining immutable audit logs.",
      capabilities: [
        "Multi-jurisdiction regulatory compliance monitoring",
        "Automated disclaimer application and content review",
        "Immutable audit trail generation",
        "Risk assessment and mitigation protocols"
      ],
      technicalDetails: "Blockchain-based audit trails with zero-knowledge proofs and automated compliance rule engine."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAF9]">
      <div className="container mx-auto px-4">
        <ScrollAnimation animationType="fadeUp">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium">
                Multi-Agent Architecture Deep Dive
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-8">
              The Five-Agent Orchestra
              <span className="block text-[#0A382C]/70">Beyond Single-Point Solutions</span>
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed">
              Our multi-agent orchestration mirrors how high-performing human teams operate. Each specialized 
              agent handles distinct functions while collaborating through sophisticated coordination protocols 
              that ensure seamless execution across your entire prospect lifecycle.
            </p>
          </div>
        </ScrollAnimation>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <StaggerAnimation staggerDelay={200} animationType="fadeUp">
            {agents.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </StaggerAnimation>
        </div>

        {/* Technical Specifications */}
        <ScrollAnimation animationType="fadeUp" delay={400}>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-light text-[#0A382C] mb-6 text-center">
              Enterprise-Grade Technical Foundation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <CounterAnimation 
                  end={99.9} 
                  suffix="%" 
                  className="text-3xl font-light mb-3"
                  duration={2500}
                />
                <div className="text-sm text-gray-600 font-light">System Uptime</div>
              </div>
              <div className="text-center">
                <CounterAnimation 
                  end={100} 
                  suffix="ms" 
                  prefix="<"
                  className="text-3xl font-light mb-3"
                  duration={2500}
                />
                <div className="text-sm text-gray-600 font-light">Response Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-3">SOC 2</div>
                <div className="text-sm text-gray-600 font-light">Type II Compliant</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TechnicalArchitectureSection;

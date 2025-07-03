import React from "react";
import { Users, Globe, BarChart3, Shield, Clock, Zap } from "lucide-react";

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics: string;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ icon, title, description, metrics }) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white/50 rounded-xl border border-gray-100 hover:bg-white/80 transition-all">
      <div className="p-3 bg-[#0A382C]/10 rounded-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-[#0A382C] mb-2">{title}</h4>
        <p className="text-gray-600 font-light text-sm mb-3 leading-relaxed">{description}</p>
        <div className="text-sm font-medium text-[#0A382C]">{metrics}</div>
      </div>
    </div>
  );
};

const LPCommunicationSection = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-[#0A382C]" />,
      title: "Multi-Jurisdictional Intelligence",
      description: "Automatically adapt communications for different regulatory environments, languages, and cultural contexts while maintaining compliance.",
      metrics: "50+ jurisdictions supported"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#0A382C]" />,
      title: "Performance Attribution Analysis",
      description: "Generate sophisticated performance analysis and attribution reports tailored to each LP's specific interests and investment thesis.",
      metrics: "Real-time portfolio insights"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#0A382C]" />,
      title: "Regulatory Compliance Engine",
      description: "Ensure all communications meet regulatory requirements with automatic disclaimer application and audit trail generation.",
      metrics: "100% compliance tracking"
    },
    {
      icon: <Clock className="h-6 w-6 text-[#0A382C]" />,
      title: "Predictive Communication Timing",
      description: "AI-powered analysis of LP engagement patterns to optimize communication timing and frequency for maximum impact.",
      metrics: "3x higher engagement rates"
    },
    {
      icon: <Zap className="h-6 w-6 text-[#0A382C]" />,
      title: "Instant Query Resolution",
      description: "24/7 intelligent response system that can answer complex LP questions by referencing your entire fund documentation.",
      metrics: "< 30 seconds response time"
    },
    {
      icon: <Users className="h-6 w-6 text-[#0A382C]" />,
      title: "Relationship Scoring",
      description: "Advanced algorithms that score and prioritize LP relationships based on engagement, investment potential, and strategic value.",
      metrics: "Predictive relationship insights"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAF9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#0A382C]/10 text-[#0A382C] rounded-full text-sm font-medium">
              LP Communication Platform
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#0A382C] mb-8">
            Intelligent Investor Relations
            <span className="block text-[#0A382C]/70">Meeting the Evolution of LP Expectations</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-gray-700 font-light leading-relaxed mb-12">
            Today's Limited Partners demand transparency, responsiveness, and sophisticated analysis that goes far 
            beyond traditional quarterly reports. Our LP Communication Platform delivers institutional-grade 
            intelligence that transforms how you engage with your most important stakeholders.
          </p>
        </div>

        {/* Main Value Proposition */}
        <div className="bg-gradient-to-r from-[#0A382C] to-[#0A382C]/90 rounded-2xl p-12 mb-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light mb-6">
              From Reactive Communications to Proactive Intelligence
            </h3>
            <p className="text-xl font-light text-white/90 leading-relaxed mb-8">
              Modern LPs expect real-time access to performance data, risk analysis, and market insights. 
              They want to understand not just what happened, but why it happened and what it means for 
              their portfolio allocation strategy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-light mb-2">67%</div>
                <div className="text-sm text-white/80">of LPs want monthly updates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2">89%</div>
                <div className="text-sm text-white/80">demand ESG reporting</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2">24/7</div>
                <div className="text-sm text-white/80">availability expectation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureHighlight key={index} {...feature} />
          ))}
        </div>

        {/* Technical Implementation Showcase */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-light text-[#0A382C] mb-4">
              Advanced Communication Intelligence Architecture
            </h3>
            <p className="text-gray-600 font-light max-w-3xl mx-auto">
              Our platform employs sophisticated natural language processing, sentiment analysis, and 
              predictive modeling to deliver communications that feel personally crafted for each LP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-light text-[#0A382C] mb-2">NLP Engine</div>
              <div className="text-sm text-gray-600 font-light mb-4">
                Advanced natural language processing for context-aware communication generation
              </div>
              <div className="text-xs text-gray-500">
                GPT-4 fine-tuned on financial communications
              </div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-light text-[#0A382C] mb-2">Sentiment Analysis</div>
              <div className="text-sm text-gray-600 font-light mb-4">
                Real-time analysis of LP sentiment and engagement patterns
              </div>
              <div className="text-xs text-gray-500">
                Transformer-based models with 97% accuracy
              </div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-light text-[#0A382C] mb-2">Predictive Modeling</div>
              <div className="text-sm text-gray-600 font-light mb-4">
                Machine learning models that predict optimal communication strategies
              </div>
              <div className="text-xs text-gray-500">
                Trained on 10M+ investor interactions
              </div>
            </div>
          </div>
        </div>

        {/* ROI Showcase */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#F8FAF9] to-white p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-light text-[#0A382C] mb-6">
              Measurable Impact on LP Relationships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-light text-[#0A382C] mb-2">340%</div>
                <div className="text-sm text-gray-600 font-light">Increase in LP engagement</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#0A382C] mb-2">85%</div>
                <div className="text-sm text-gray-600 font-light">Reduction in response time</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#0A382C] mb-2">92%</div>
                <div className="text-sm text-gray-600 font-light">LP satisfaction improvement</div>
              </div>
              <div>
                <div className="text-3xl font-light text-[#0A382C] mb-2">60%</div>
                <div className="text-sm text-gray-600 font-light">Faster commitment cycles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPCommunicationSection;

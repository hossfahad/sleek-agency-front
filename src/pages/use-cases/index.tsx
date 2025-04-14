import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const useCases = [
  {
    id: "voice-agents",
    title: "AI Voice Agents for Appointment Management",
    description: "According to healthcare industry research, automated appointment systems reduce no-shows by 30-45% and save medical practices an average of $150,000 annually in recovered revenue and staff efficiency.",
    source: "American Medical Association, 2023",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    challenge: "Service-based businesses lose an estimated 10-15% of revenue annually due to appointment no-shows and last-minute cancellations. Staff typically spend 12-15 hours weekly on manual confirmation calls, while still only reaching a fraction of clients.",
    solution: [
      {
        title: "Automated Confirmation Calls",
        description: "AI voice agents make calls that sound remarkably human, confirming appointments and handling rescheduling with natural conversation flow."
      },
      {
        title: "Intelligent Scheduling",
        description: "The system manages your calendar, finds optimal slots for rescheduling, and automatically updates your booking system in real-time."
      },
      {
        title: "Multi-Channel Reminders",
        description: "Strategic reminders via voice, SMS, or email based on client preferences and engagement patterns to maximize attendance."
      }
    ],
  },
  {
    id: "document-automation",
    title: "Document Automation for Professional Services",
    description: "Research from Deloitte shows that document automation technologies reduce processing costs by 30-40% and accelerate turnaround times by 50-70% while significantly improving compliance and data quality.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    challenge: "Professional service firms manage thousands of documents monthly, with staff spending up to 20% of their time on document processing. Manual data entry leads to 4% error rates on average, creating compliance risks and operational inefficiencies.",
    solution: [
      {
        title: "Intelligent Document Capture",
        description: "Advanced OCR and computer vision to convert any document format (scanned papers, PDFs, images) into structured data with high accuracy."
      },
      {
        title: "Automated Data Extraction",
        description: "Machine learning algorithms identify and extract critical information from documents, even when formats vary significantly across sources."
      },
      {
        title: "Seamless System Integration",
        description: "Direct integration with your existing systems (CRM, ERP, document management) for automated workflows and centralized information."
      }
    ],
    source: "Deloitte Digital Transformation Report, 2022"
  },
  {
    id: "market-validation",
    title: "Rapid Market Validation for New Products",
    description: "According to CB Insights, startups using rapid validation methodologies are 3 times more likely to secure funding and have a 40% higher success rate than those following traditional development approaches.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    challenge: "New product initiatives face a 70-80% failure rate, with companies spending an average of 6-12 months and $250,000-$500,000 before determining market viability. Traditional development cycles are too slow to adapt to rapidly changing market conditions.",
    solution: [
      {
        title: "AI Market Analysis",
        description: "Comprehensive analysis of market trends, competitive landscapes, and customer needs using advanced AI to identify optimal positioning."
      },
      {
        title: "Rapid Prototype Development",
        description: "Create functioning prototypes in 6-8 weeks that demonstrate core value proposition and gather actual user feedback before full investment."
      },
      {
        title: "Iterative Validation Framework",
        description: "Structured methodology for testing assumptions, collecting user insights, and rapidly iterating based on real market responses."
      }
    ],
    source: "CB Insights Startup Success Factors Report, 2023"
  },
  {
    id: "agentic-automations",
    title: "Agentic Automations",
    description: "McKinsey research indicates that organizations implementing agentic automation achieve 30-50% reductions in processing time and can automate up to 70% of decisions that previously required human intervention.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    challenge: "Organizations struggle with operational bottlenecks where human decision-making creates delays, inconsistencies, and scaling limitations. Critical workflows often stall waiting for approvals or actions, while routine decision-making consumes valuable employee time that could be directed toward higher-value activities.",
    solution: [
      {
        title: "Autonomous Decision Agents",
        description: "AI agents that make context-aware decisions within your defined parameters, handling approvals, routing, and resource allocation without human intervention."
      },
      {
        title: "Multi-step Workflow Automation",
        description: "End-to-end process automation that spans multiple systems and functions, coordinating complex sequences while adapting to exceptions."
      },
      {
        title: "Human-in-the-Loop Fallbacks",
        description: "Sophisticated exception handling with seamless human handoffs for edge cases that require judgment beyond defined parameters."
      }
    ],
    source: "McKinsey Digital Transformation Survey, 2023"
  },
  {
    id: "social-media",
    title: "Social Media Automation",
    description: "According to Sprout Social, businesses using AI-powered social media automation see an average 40% increase in engagement rates and save approximately 60% of the time previously spent on social media management.",
    icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
    challenge: "Maintaining a consistent, engaging social media presence requires 15-20 hours per week of content creation, scheduling, and audience interaction. Most businesses struggle with content fatigue, inconsistent posting schedules, and delayed responses to audience engagement—all while trying to keep up with ever-changing platform algorithms.",
    solution: [
      {
        title: "AI Content Generation",
        description: "Create platform-optimized posts, captions, and hashtags that align with your brand voice and resonate with your target audience."
      },
      {
        title: "Strategic Content Calendar",
        description: "Automated scheduling system that posts at optimal times for engagement while maintaining a cohesive content strategy across platforms."
      },
      {
        title: "Intelligent Engagement",
        description: "AI-powered responses to comments and messages that maintain your brand voice while providing timely, helpful interactions."
      }
    ],
    source: "Sprout Social Index, 2023"
  },
  {
    id: "bespoke-solutions",
    title: "Bespoke AI Solutioning",
    description: "Custom AI solutions designed specifically for your unique business challenges and objectives.",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    isBespoke: true,
    process: [
      {
        title: "Discovery & Requirements",
        description: "We conduct in-depth stakeholder interviews and process mapping to identify high-impact opportunities and define concrete success metrics."
      },
      {
        title: "Custom Solution Design",
        description: "Our team develops a tailored AI architecture that integrates with your existing systems while addressing your specific business challenges."
      },
      {
        title: "Iterative Development",
        description: "Using an agile approach, we build, test, and refine your custom solution with continuous feedback and validation."
      },
      {
        title: "Implementation & Training",
        description: "We deploy your solution with comprehensive documentation and training to ensure successful adoption and long-term value."
      }
    ],
    industryImpact: "Custom AI solutions deliver on average 3-4x ROI compared to off-the-shelf alternatives when properly aligned with specific business objectives and processes.",
    source: "Harvard Business Review, AI Implementation Study, 2022"
  }
];

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Set visible to true after component mounts for fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Handle scroll for active section highlighting
    const handleScroll = () => {
      const sections = useCases.map(useCase => useCase.id);
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 md:px-10 bg-transparent">
          <div className="max-w-[1600px] mx-auto">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: "100ms" }}>
              <span className="text-xs opacity-60 mb-6 block">[SOLUTIONS]</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                AI Solutions That Deliver
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Discover how our AI-powered solutions address common business challenges and create measurable impact across industries.
              </p>
              
              {/* Quick Navigation */}
              <div className="flex overflow-x-auto no-scrollbar items-center gap-3 md:gap-4 py-4 w-full">
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Jump to:</span>
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => scrollToSection(useCase.id)}
                    className={`whitespace-nowrap text-sm px-3 py-1.5 rounded-full transition-all ${
                      activeSection === useCase.id
                        ? 'bg-viridian text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {useCase.title.split(' ').slice(0, 3).join(' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f9f9f9]">
          <div className="max-w-[1600px] mx-auto">
            <div className="space-y-32">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  id={useCase.id}
                  className={`transition-all duration-700 scroll-mt-32 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {useCase.isBespoke ? (
                    // Bespoke Solution Layout
                    <div className="bg-gradient-to-br from-viridian/10 to-cambridge-blue/10 rounded-xl p-8 md:p-12">
                      <div className="flex flex-col md:flex-row md:items-center mb-8">
                        <div className="flex items-center mb-4 md:mb-0 md:mr-8">
                          <div className="bg-viridian w-14 h-14 rounded-full flex items-center justify-center mr-5">
                            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-medium">{useCase.title}</h2>
                            <p className="text-lg text-gray-700 mt-1">{useCase.description}</p>
                          </div>
                        </div>
                        {useCase.industryImpact && (
                          <div className="md:ml-auto md:max-w-xs text-sm text-gray-600 italic pt-2">
                            {useCase.industryImpact}
                          </div>
                        )}
                      </div>


                      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                        <h3 className="text-xl font-medium mb-6">Our Process</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {useCase.process.map((item, idx) => (
                            <div key={idx} className="flex">
                              <div className="w-8 h-8 bg-cambridge-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                <span className="text-viridian font-medium">{idx + 1}</span>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-700 text-sm">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <a 
                          href="#contact" 
                          className="px-6 py-3 bg-viridian text-white rounded-lg hover:bg-viridian/90 transition-colors"
                        >
                          Book Your Strategy Session →
                        </a>
                      </div>
                    </div>
                  ) : (
                    // Regular Use Case Layout
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                      <div>
                        <div className="flex flex-col mb-6">
                          <div className="flex items-center mb-2">
                            <div className="bg-viridian w-12 h-12 rounded-full flex items-center justify-center mr-4">
                              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                              </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-medium">{useCase.title}</h2>
                          </div>
                          <div className="ml-16 text-sm text-gray-600 italic">
                            {useCase.industryImpact}
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-700 mb-6">{useCase.description}
                        <span className="block mt-1 text-xs text-gray-500 not-italic">
                                Source: {useCase.source} 
                                </span>
                                </p>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                          <h3 className="text-xl font-medium mb-4">The Challenge</h3>
                          <p className="text-gray-700">{useCase.challenge}</p>
                        </div>
                        <div className="flex justify-start">
                          <a 
                            href="#contact" 
                            className="px-6 py-3 bg-viridian text-white rounded-lg hover:bg-viridian/90 transition-colors"
                          >
                            Book Your Free Strategy Session →
                          </a>
                        </div>
                      </div>
                      
                      <div>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                          <h3 className="text-xl font-medium mb-6">Our Solution</h3>
                          <div className="space-y-6">
                            {useCase.solution.map((item, idx) => (
                              <div key={idx} className="flex">
                                <div className="w-8 h-8 bg-cambridge-blue/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                  <span className="text-viridian font-medium">{idx + 1}</span>
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                                  <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index < useCases.length - 1 && (
                    <hr className="border-gray-200 mt-16" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-24 text-center">
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Ready to transform your business with AI?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Schedule a free consultation to discuss how our solutions can address your specific challenges and deliver measurable results.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors duration-300"
              >
                Book Your Free Strategy Session →
              </a>
            </div>
          </div>
        </section>
      </main>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default UseCases; 
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CaseStudy: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      title: 'Rapid Prototyping',
      description: 'See how we help businesses quickly validate ideas and build MVPs in days instead of months.',
      link: '/use-cases/rapid-prototype',
      buttonText: 'View Case Study',
    },
    {
      title: 'Document Processing',
      description: 'Learn how our AI-powered document processing solutions automate workflows and reduce manual effort.',
      link: '/use-cases/document-processing',
      buttonText: 'View Case Study',
    },
    {
      title: 'Voice Agents',
      description: 'Discover how our conversational AI solutions transform customer service and engagement.',
      link: '/use-cases/voice-agents',
      buttonText: 'View Case Study',
    },
  ];

  return (
    <section id="case-study" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Explore how we've helped businesses across industries transform their operations and achieve remarkable results.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Link to={study.link} className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300 cursor-pointer">
                  {study.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact" className="inline-block bg-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary-dark transition-colors duration-300 text-lg font-medium cursor-pointer">
            Book a Strategy Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy; 
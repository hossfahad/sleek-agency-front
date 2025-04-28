import React from 'react';
import { Link } from 'react-router-dom';
import Head from '@/components/Head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductsIndex = () => {
  const products = [
    { 
      id: 'air', 
      name: 'AIR', 
      fullName: 'AI Receptionist',
      description: 'Your 24/7 virtual receptionist that handles calls, books appointments, and provides a professional first impression.',
      available: true,
      icon: '🤖'
    },
    { 
      id: 'aisa', 
      name: 'AISA', 
      fullName: 'AI Sales Agent',
      description: 'Automate lead qualification and follow-ups with an AI that understands your sales process.',
      available: false,
      icon: '💼'
    },
    { 
      id: 'aime', 
      name: 'AIME', 
      fullName: 'AI Marketing Expert',
      description: 'Create, optimize, and analyze marketing campaigns with AI-powered insights.',
      available: false,
      icon: '📈'
    },
    { 
      id: 'aics', 
      name: 'AICS', 
      fullName: 'AI Customer Support',
      description: 'Provide instant, 24/7 customer support across multiple channels and languages.',
      available: false,
      icon: '🛎️'
    },
    { 
      id: 'aifs', 
      name: 'AIFS', 
      fullName: 'AI Financial Strategist',
      description: 'Analyze financial data, identify trends, and provide actionable recommendations.',
      available: false,
      icon: '📊'
    },
    { 
      id: 'aipa', 
      name: 'AIPA', 
      fullName: 'AI Paralegal',
      description: 'Streamline legal document review, research, and contract analysis.',
      available: false,
      icon: '⚖️'
    },
    { 
      id: 'aicso', 
      name: 'AICSO', 
      fullName: 'AI Strategy Officer',
      description: 'Get AI-powered strategic insights and competitive analysis for your business.',
      available: false,
      icon: '🧠'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#10151f] to-[#192233] text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Head
          title="AI Products for Business Automation | Enhanced Points"
          description="Discover Enhanced Points' suite of AI products designed to automate and enhance your business operations."
        />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glassmorphism">
              <span>Enhanced Points AI Products</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              <span>Our suite of AI solutions designed to automate and enhance your business operations.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className={`bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 ${
                  product.available ? 'hover:bg-white/20 hover:border-viridian' : 'opacity-70'
                }`}
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h2 className="text-2xl font-bold mb-2">
                  {product.name} <span className="text-sm font-normal text-gray-300">- {product.fullName}</span>
                </h2>
                <p className="mb-4 text-gray-300">{product.description}</p>
                {product.available ? (
                  <Link 
                    to={`/products/${product.id}`}
                    className="inline-block px-4 py-2 bg-viridian text-white rounded-lg font-medium hover:bg-cambridge-blue transition-colors"
                  >
                    <span>Learn More</span>
                  </Link>
                ) : (
                  <Link 
                    to={`/products/${product.id}`}
                    className="inline-block px-4 py-2 bg-gray-700 text-white rounded-lg font-medium cursor-pointer"
                  >
                    <span>Coming Soon</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsIndex;

import React from 'react';
import { ArrowUp, MessageSquare, DollarSign, Zap } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, description, icon }: MetricCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-indigo-50 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-3xl font-bold text-indigo-600 mb-2">{value}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const MetricsCards = () => {
  const metrics = [
    {
      title: "Conversion Rate",
      value: "+42%",
      description: "Average increase in conversion rates for our clients",
      icon: <ArrowUp className="h-6 w-6 text-indigo-600" />
    },
    {
      title: "Customer Satisfaction",
      value: "92%",
      description: "Of users report higher satisfaction with AI-powered services",
      icon: <MessageSquare className="h-6 w-6 text-indigo-600" />
    },
    {
      title: "Cost Reduction",
      value: "-35%",
      description: "Average operational cost reduction after implementation",
      icon: <DollarSign className="h-6 w-6 text-indigo-600" />
    },
    {
      title: "Processing Speed",
      value: "4.5x",
      description: "Faster task completion with AI-powered automation",
      icon: <Zap className="h-6 w-6 text-indigo-600" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          description={metric.description}
          icon={metric.icon}
        />
      ))}
    </div>
  );
};

export default MetricsCards; 
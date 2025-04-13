import React from "react";
import { LineChart } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface MetricCardProps {
  title: string;
  description: string;
  delay: number;
  color: string;
  isVisible: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, description, delay, color, isVisible }) => (
  <div 
    className={`relative overflow-hidden rounded-xl p-6 transition-all duration-700 group ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`}
    style={{ 
      transitionDelay: `${delay}ms`,
      background: `linear-gradient(135deg, ${color}99 0%, ${color}33 50%, transparent 100%)`,
      borderLeft: `2px solid ${color}`
    }}
  >
    <div className="relative z-10">
      <h3 className="text-sm font-medium text-gray-800 mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2">
          {title}
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}>
            <LineChart className="w-3 h-3 text-white" />
          </span>
        </span>
      </h3>
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-700 leading-tight">{description}</p>
      </div>
      <div className="mt-4 text-xs text-gray-500">Tracked & Measured</div>
    </div>
  </div>
);

const MetricsCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Colors from the logo dots
  const brandColors = {
    blue: "#2D509E",  // Dark blue from logo
    green: "#3C9D74", // Green from logo
    purple: "#6556A0", // Purple from logo
    orange: "#F17B45"  // Orange from logo
  };

  const metrics = [
    {
      title: "Operational Value",
      description: "Measure the direct impact on your business operations and workflow efficiency",
      color: brandColors.blue,
      delay: 200
    },
    {
      title: "Business Growth",
      description: "Track how our solutions drive your business expansion and market reach",
      color: brandColors.green,
      delay: 300
    },
    {
      title: "ROI Impact",
      description: "Quantify the return on your AI investment through measurable outcomes",
      color: brandColors.purple,
      delay: 400
    },
    {
      title: "Customer Satisfaction",
      description: "Monitor improvements in client experience and retention rates",
      color: brandColors.orange,
      delay: 500
    }
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          description={metric.description}
          color={metric.color}
          delay={metric.delay}
          isVisible={inView}
        />
      ))}
    </div>
  );
};

export default MetricsCards; 
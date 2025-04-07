import React from 'react';
import AnimatedServices from "@/components/AnimatedServices"; // Import the animation component
import './animated-services.css'; // Assuming the styles are extracted to a CSS file

const SolutionsCapabilities = () => {
  return (
    <section className="section">
      <div className="bg-image"></div>
      <div className="content">
        <div>
          <h2>Solutions & Capabilities</h2>
          <p>Explore our comprehensive solutions and capabilities designed to drive innovation and efficiency across your business operations.</p>
          <ul>
            <li>Custom AI solutions tailored to your business needs</li>
            <li>Seamless integration with existing systems and workflows</li>
            <li>Scalable solutions to grow with your business</li>
          </ul>
        </div>
        {/* Include the AnimatedServices component */}
        <AnimatedServices />
      </div>
    </section>
  );
};

export default SolutionsCapabilities;
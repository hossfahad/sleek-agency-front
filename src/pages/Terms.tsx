import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions for Enhanced Points</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 2025</p>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            These Terms and Conditions ("Terms") govern your use of the website enhancedpoints.com (the "Site") operated by Enhanced Points.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using our Site, you agree to be bound by these Terms. If you do not agree, please do not use our Site.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">2. Use of the Site</h2>
          <p className="mb-4">
            You agree to use the Site only for lawful purposes and in accordance with these Terms. You may not:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li className="mb-2">Use the Site in a way that violates any laws.</li>
            <li className="mb-2">Attempt to gain unauthorized access to the Site or its servers.</li>
            <li className="mb-2">Interfere with the Site's operation.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">3. Intellectual Property</h2>
          <p className="mb-6">
            All content, logos, and designs on the Site are the property of Enhanced Points or licensed to us. You may not copy, distribute, or use any content without written permission.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">4. User Content</h2>
          <p className="mb-6">
            If you submit or upload content, you grant us a non-exclusive, royalty-free license to use it in connection with the Site.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">5. Disclaimers</h2>
          <p className="mb-6">
            The Site is provided "as is." We make no warranties, expressed or implied, regarding accuracy, reliability, or availability of the content or services.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">6. Limitation of Liability</h2>
          <p className="mb-6">
            To the fullest extent permitted by law, Enhanced Points is not liable for any damages resulting from your use of the Site.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">7. Termination</h2>
          <p className="mb-6">
            We reserve the right to terminate or suspend access to the Site at our sole discretion, without notice.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">8. Governing Law</h2>
          <p className="mb-6">
            These Terms are governed by the laws of the United States, without regard to its conflict of law principles.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">9. Changes to Terms</h2>
          <p className="mb-6">
            We may revise these Terms at any time. Continued use of the Site means you accept the new terms.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">10. Contact Us</h2>
          <p className="mb-6">
            For questions about these Terms, email us at: <a href="mailto:inquire@enhancedpoints.com" className="text-viridian hover:underline">inquire@enhancedpoints.com</a>
          </p>
          
          <div className="mt-16 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600">
              By using our site, you acknowledge that you have read and understand our 
              <a href="/privacy" className="text-viridian hover:underline mx-1">Privacy Policy</a>
              and these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms; 
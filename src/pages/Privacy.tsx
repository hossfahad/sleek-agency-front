import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy for Enhanced Points</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 2025</p>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            At Enhanced Points ("we", "us", or "our"), your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our website located at enhancedpoints.com ("Site").
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of data:</p>
          <ul className="list-disc ml-6 mb-6">
            <li className="mb-2"><strong>Personal Information:</strong> Name, email address, contact information.</li>
            <li className="mb-2"><strong>Usage Data:</strong> Pages visited, time spent, browser type, IP address.</li>
            <li className="mb-2"><strong>Cookies:</strong> For session tracking, analytics, and personalized content.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use your data to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li className="mb-2">Provide and improve our services.</li>
            <li className="mb-2">Respond to inquiries and provide customer support.</li>
            <li className="mb-2">Send periodic updates or promotional materials (if opted in).</li>
            <li className="mb-2">Monitor site usage and prevent fraud.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">3. Sharing Your Information</h2>
          <p className="mb-4">
            We do <strong>not</strong> sell or rent your personal information. We may share information with:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li className="mb-2">Service providers who help us operate our site.</li>
            <li className="mb-2">Authorities if required by law or for legal processes.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">4. Your Rights and Choices</h2>
          <p className="mb-4">Depending on your location, you may have rights to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li className="mb-2">Access, correct, or delete your data.</li>
            <li className="mb-2">Object to or restrict processing.</li>
            <li className="mb-2">Withdraw consent for communications.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">5. Data Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures to protect your data. However, no system is 100% secure.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">6. Third-Party Links</h2>
          <p className="mb-6">
            Our site may contain links to third-party sites. We are not responsible for their privacy practices.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">7. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">8. Contact Us</h2>
          <p className="mb-6">
            If you have questions about this policy, email us at: <a href="mailto:inquire@enhancedpoints.com" className="text-viridian hover:underline">inquire@enhancedpoints.com</a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy; 
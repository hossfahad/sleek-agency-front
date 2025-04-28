import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AIMEComingSoon = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#10151f] to-[#192233] text-white flex flex-col">
    <Navbar />
    <main className="flex-grow flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 glassmorphism">
        <span>AIME – AI Marketing Expert</span>
      </h1>
      <p className="text-lg mb-8">
        <span>Coming soon. Want early access or a demo?</span>
      </p>
      <form className="w-full max-w-sm bg-white/10 rounded-xl p-8 shadow-xl">
        <label htmlFor="email" className="block text-sm mb-2">
          <span>Email for updates</span>
        </label>
        <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded bg-white/20 text-white focus:outline-none mb-4" required />
        <button type="submit" className="w-full bg-viridian text-white py-2 rounded hover:bg-cambridge-blue transition-colors">
          <span>Notify Me</span>
        </button>
      </form>
    </main>
    <Footer />
  </div>
);

export default AIMEComingSoon;

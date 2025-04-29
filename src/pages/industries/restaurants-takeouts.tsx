import React from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { AnnouncementBanner } from '@/components/AnnouncementBanner';

const RestaurantsTakeoutsIndustry = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-yellow-50"
          ref={heroRef}
        >
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className={`transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <img src="/images/takeout-delivery.jpg" alt="Takeout Delivery" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className={`transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex items-center gap-4 mb-6">
                <Link to="/industries" className="text-gray-500 hover:text-yellow-600 transition-colors">Industries</Link>
                <span className="text-gray-400">/</span>
                <span className="text-yellow-600 font-medium">Restaurants & Takeouts</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">AI Order Assistant for Takeout & Delivery Restaurants</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">Turn missed calls into paid orders. Enhanced Points helps restaurants answer every phone call, take accurate orders, and send instant confirmations — with no third-party fees or new hardware required.</p>
              <div className="space-x-4">
                <a href="#demo" className="inline-block px-8 py-3 bg-yellow-600 text-white font-medium rounded-lg shadow-lg hover:bg-yellow-700 transition-colors">Book a Free Demo Call →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why You’re Losing Money */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Why You’re Losing Money on Every Missed Call</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Phone orders drop off after 3 rings — and customers move on</li>
              <li>Staff gets overwhelmed during rush hours</li>
              <li>Wrong orders = lost revenue and angry reviews</li>
              <li>Delivery apps take 20–30% commission — and don’t fix your phone problems</li>
            </ul>
          </div>
        </section>

        {/* What We Provide */}
        <section className="py-12 px-6 md:px-10 bg-gradient-to-b from-white to-yellow-50">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">What We Provide</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Answers 100% of your calls, even during peak hours</li>
              <li>Takes accurate voice orders and sends SMS confirmations</li>
              <li>Lets customers pay immediately through the conversation</li>
              <li>Works with your existing kitchen setup — no new hardware required</li>
            </ul>
          </div>
        </section>

        {/* Built for Takeout Businesses */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Built for Takeout-Heavy Businesses</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Pizza joints</li>
              <li>Shawarma & halal spots</li>
              <li>Chinese takeout</li>
              <li>Indian restaurants</li>
              <li>Food trucks and pop-ups</li>
              <li>Cafes, diners, ghost kitchens</li>
            </ul>
          </div>
        </section>

        {/* Menu-to-Mouth Workflow */}
        <section className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Menu-to-Mouth Workflow</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Customer calls in</li>
              <li>AI takes the order and confirms total</li>
              <li>Customer is able to pay instantly.</li>
              <li>Order is integrated into your POS (Stripe, Clover) automatically</li>
            </ol>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-12 px-6 md:px-10 bg-white border-b border-gray-100 text-center">
          <div className="max-w-[900px] mx-auto overflow-x-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Pricing That Pays for Itself</h2>
            <p className="mb-6">Simple monthly payments that pays for itself within one month, guaranteed or your money back.</p>
            {/* <table className="w-full text-left table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Package</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Cost per Call</th>
                  <th className="px-4 py-2">Perfect for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">100 Calls</td>
                  <td className="border px-4 py-2">$180</td>
                  <td className="border px-4 py-2">$1.80</td>
                  <td className="border px-4 py-2">Local spots with steady volume</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">250 Calls</td>
                  <td className="border px-4 py-2">$399</td>
                  <td className="border px-4 py-2">$1.60</td>
                  <td className="border px-4 py-2">Busy lunch/dinner businesses</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">500+ Calls</td>
                  <td className="border px-4 py-2">Contact Us</td>
                  <td className="border px-4 py-2">Bulk Discount</td>
                  <td className="border px-4 py-2">Multi-location or weekend rush</td>
                </tr>
              </tbody>
            </table> */}
            <div className="mt-4">
              <p>No new POS or hardware required | Supports 20+ languages | Directly increases revenue</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 px-6 md:px-10 bg-gradient-to-b from-white to-yellow-50">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">Ready to Lock In Your Launch Pricing?</h2>
            <p className="mb-8 text-lg">We’re offering early access pricing for local restaurants. Book a strategy call today.</p>
            <div className="space-x-4">
              <a href="#demo" className="inline-block px-8 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors">Book a Free Demo Call →</a>
            </div>
          </div>
        </section>
      </main>
      <div id="demo">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantsTakeoutsIndustry;

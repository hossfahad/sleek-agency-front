import React from 'react';
import { Link } from 'react-router-dom';

export const AnnouncementBanner: React.FC = () => (
  <div className="w-full bg-[#403F4C] text-white text-center py-2 text-sm">
    Meet <span className="italic">AIR</span>, your always-on AI receptionist agent - now in Beta.{' '}
    <Link to="/products/air" className="underline font-semibold">
      Try it now →
    </Link>
  </div>
);

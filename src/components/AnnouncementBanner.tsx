import React from 'react';
import { Link } from 'react-router-dom';

export const AnnouncementBanner: React.FC = () => (
  <div className="w-full bg-[#403F4C] text-white text-center py-2 text-sm">
    Introducing Our <span className="italic">AI Agent Ecosystem for GPs.</span>{' '}
    <Link to="/for-gps" className="underline font-semibold">
      Request Access →
    </Link>
  </div>
);

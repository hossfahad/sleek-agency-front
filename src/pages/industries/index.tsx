import React from "react";
import { Navigate } from "react-router-dom";

// This is a utility file that redirects from /industries/index to /industries
// Future industry sub-pages will be added as individual files in this directory
const IndustriesIndex = () => {
  return <Navigate to="/industries" replace />;
};

export default IndustriesIndex;

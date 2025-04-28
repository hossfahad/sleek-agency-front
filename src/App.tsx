import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Import pages
import UseCasesIndex from "./pages/use-cases/index";
import MeasuredPerformance from "./pages/measured-performance";
import Industries from "./pages/industries";
import IndustriesIndex from "./pages/industries/index";
import HealthcareIndustry from "./pages/industries/healthcare";
import FinancialServicesIndustry from "./pages/industries/financial-services";
import HotelsHospitalityIndustry from "./pages/industries/hotels-hospitality";
import TransportationIndustry from "./pages/industries/transportation";
import RestaurantsTakeoutsIndustry from "./pages/industries/restaurants-takeouts";
import ProductsIndex from "./pages/products/index";
// import AIRPage from "./pages/products/air";
import { useScrollManager } from "./hooks/useScrollManager";
import VapiLoader from "./components/VapiLoader";

const queryClient = new QueryClient();

// Main app component with routes
const AppRoutes = () => {
  // This hook handles scrolling to top on navigation and scrolling to hash links
  useScrollManager();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      
      {/* Solutions & Industries Routes */}
      <Route path="/use-cases" element={<UseCasesIndex />} />
      <Route path="/measured-performance" element={<MeasuredPerformance />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/index" element={<IndustriesIndex />} />
      <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
      <Route path="/industries/financial-services" element={<FinancialServicesIndustry />} />
      <Route path="/industries/hotels-hospitality" element={<HotelsHospitalityIndustry />} />
      <Route path="/industries/transportation" element={<TransportationIndustry />} />
      <Route path="/industries/restaurants-takeouts" element={<RestaurantsTakeoutsIndustry />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<ProductsIndex />} />
      {/* <Route path="/products/air" element={<AIRPage />} /> */}
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <VapiLoader />
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

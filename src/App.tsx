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

// Import use case pages
import VoiceAgents from "./pages/use-cases/voice-agents";
import DocumentProcessing from "./pages/use-cases/document-processing";
import RapidPrototype from "./pages/use-cases/rapid-prototype";
import UseCasesIndex from "./pages/use-cases/index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Use Case Routes */}
          <Route path="/use-cases" element={<UseCasesIndex />} />
          <Route path="/use-cases/voice-agents" element={<VoiceAgents />} />
          <Route path="/use-cases/document-processing" element={<DocumentProcessing />} />
          <Route path="/use-cases/rapid-prototype" element={<RapidPrototype />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

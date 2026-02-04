import "./global.css";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import ViewProjectDetails from "./pages/ViewProjectDetails";
import ViewProjectDetailsEmerald from "./pages/ViewProjectDetailsEmerald";
import ScrollToTop from "./pages/ScrollToTop"
import ComingSoon from "./pages/ComingSoon"
import NotFound from "./pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/view-project-details" element={<ViewProjectDetails />} />
          <Route path="/View-project-details-emerald" element={<ViewProjectDetailsEmerald />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

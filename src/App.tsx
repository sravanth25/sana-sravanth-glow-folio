import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
import AiChatbotWork from "./pages/AiChatbotWork";
import EmailAutomationWork from "./pages/EmailAutomationWork"; // Import the new page
import Blog from "./pages/Blog";
import SeoGuide from "./pages/SeoGuide";
import MetaGoogleAds from "./pages/MetaGoogleAds";
import DemoOne from "./pages/demo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/ai-chatbot-work" element={<AiChatbotWork />} />
          <Route path="/email-automation-work" element={<EmailAutomationWork />} /> {/* Add the new route */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/seo-guide" element={<SeoGuide />} />
          <Route path="/meta-google-ads" element={<MetaGoogleAds />} />
          <Route path="/demo" element={<DemoOne />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

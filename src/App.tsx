import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocationModal from "@/components/modals/LocationModal";
import SignInModal from "@/components/modals/SignInModal";
import OrderModal from "@/components/modals/OrderModal";
import PartnerModal from "@/components/modals/PartnerModal";
import DriverModal from "@/components/modals/DriverModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner position="top-right" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* Global Modals */}
        <LocationModal />
        <SignInModal />
        <OrderModal />
        <PartnerModal />
        <DriverModal />
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

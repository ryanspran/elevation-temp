import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import Subcontractor from "./pages/Subcontractor";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";
import FAQ from "./pages/FAQ";
import PlantGuide from "./pages/PlantGuide";
import PlantDetail from "./pages/PlantDetail";
import PlantRedirect from "./pages/PlantRedirect";
import Identify from "./pages/Identify";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/subcontractor" element={<Subcontractor />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/plant-guide" element={<PlantGuide />} />
            <Route path="/plants/:slug" element={<PlantDetail />} />
            {/* Legacy redirect: /plant-guide/:id → /plants/:slug */}
            <Route path="/plant-guide/:id" element={<PlantRedirect />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

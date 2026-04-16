import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { homeWithBase, withBase } from "./lib/basePath";

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <Route path={homeWithBase()} component={Home} />
        <Route path={withBase("/about")} component={About} />
        <Route path={withBase("/services")} component={Services} />
        <Route path={withBase("/services/:id")} component={ServiceDetail} />
        <Route path={withBase("/blog")} component={Blog} />
        <Route path={withBase("/research")} component={Research} />
        <Route path={withBase("/contact")} component={Contact} />
        <Route path={withBase("/404")} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <WouterRouter>
            <TooltipProvider>
              <Toaster />
              <AppRouter />
            </TooltipProvider>
          </WouterRouter>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

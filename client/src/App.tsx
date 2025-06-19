import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import About from "./pages/About";
import WebDevelopment from "./pages/WebDevelopment";
import NotFound from "@/pages/not-found";
import BloggingPage from "./pages/Blogging";
import SEO_Page from "./pages/SEO";
import Socialmediamarketingservices from "./pages/Socialmediamarketingservices";
import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpCircle, SquareArrowUp } from "lucide-react";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import Newsletter from "./pages/Newsletter";
import ReputationManagement from "./pages/ReputationManagement";
import Services from "./pages/Services";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from './pages/AuthContext';
import PrivateRoute from './pages/PrivateRoute';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    // Load Tawk.to widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = 'https://embed.tawk.to/6853f5181ecea31910e13710/1iu3vaqd6';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
      {/* {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 mb-8 right-4 bg-[#fbb016] text-white p-2 rounded-full shadow-lg hover:bg-[#e09203] transition-all z-0"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>      )} */}
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      {/* <Route path="/register" component={RegisterPage} /> */}

      {/* Protected Routes */}
      <Route path="/" component={Home} />
      <Route path="/industries" component={Industries} />
      <Route path="/about" component={About} />
      <Route path="/service/website-development" component={WebDevelopment} />
      <Route path="/service/blogging" component={BloggingPage} />
      <Route path="/service/seo" component={SEO_Page} />
      <Route path="/service/social-media" component={Socialmediamarketingservices} />
      <Route path="/service/performance" component={PerformanceMarketing} />
      <Route path="/service/reputation" component={ReputationManagement} />
      <Route path="/service/newsletters" component={Newsletter} />
      <Route path="/services" component={Services} />

      {/* Admin Only Route */}
      <PrivateRoute path="/AdminDashboard" component={AdminDashboard} adminOnly={true} />

      {/* Public Routes */}
      <Route path="/privacy-policy" component={() => {
        window.location.href = 'https://www.xlnctechnologies.com/privacy-policy.php';
        return null;
      }} />
      <Route path="/contact" component={() => {
        window.location.href = 'https://www.xlnctechnologies.com/contact_us.php';
        return null;
      }} />
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
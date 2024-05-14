import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Transition from "./components/Transition";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Donate = lazy(() => import("./pages/Donate"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Events = lazy(() => import("./pages/Events"));
const Activities = lazy(() => import("./pages/Activities"));
const JoinOurCommunity = lazy(() => import("./pages/JoinOurCommunity"));

function App() {
  return (
    <div className="text-white/90 h-full w-full">
      <Router>
        <ScrollToTop />
        <ToastContainer />
        <Suspense fallback={<Loader />}>
          {/* <Transition /> */}
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/events" element={<Events />} />
            <Route path="/join" element={<JoinOurCommunity />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

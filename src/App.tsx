import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from "./components/TermsPage";
import ContactPage from "./components/ContactPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App: FC = () => {
  useEffect(() => {
    // Create ScrollSmoother
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    // Header show/hide animation
    const showAnim = gsap
      .from("header.header", {
        yPercent: -180,
        paused: true,
        duration: 0.25,
        ease: "power1.ease",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    // Header background change
    ScrollTrigger.create({
      start: 200,
      onEnter: () =>
        gsap.to("header.header", {
          backgroundColor: "var(--body-text-color)",
          top: "0",
          duration: 0.3,
        }),
      onLeaveBack: () =>
        gsap.to("header.header", {
          backgroundColor: "transparent",
          top: "var(--header-top-gap)",
          duration: 0.3,
        }),
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, []);
  return (
    <Router>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const GitHubStats = lazy(() => import("./components/GitHubStats"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const Home = () => {
  return (
    <div className="relative z-0 bg-[#050816]">
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <About />
        <Experience />
        <Tech />
        <Works />
        <GitHubStats />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;

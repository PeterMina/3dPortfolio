import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load routes for better performance
const Home = lazy(() => import("./Home"));
const AllTechnologies = lazy(() => import("./components/AllTechnologies"));

const App = () => {
  return (
    <Suspense fallback={
      <div className="w-full h-screen flex items-center justify-center bg-[#050816]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-technologies" element={<AllTechnologies/>} />
      </Routes>
    </Suspense>
  );
};

export default App;

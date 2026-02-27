import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Map } from "lucide-react";

// Komponen Global
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

// Halaman-halaman
import Home from "./pages/Home";
import Download from "./pages/Download";
import Admin from "./pages/Admin";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleList from "./pages/ArticleList"; // <--- TAMBAHAN: Import Daftar Semua Artikel

// Komponen Section yang diubah jadi Halaman
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import ProjectList from "./components/ProjectList";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const updateMousePosition = (ev) =>
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-white text-navy relative">
      <AnimatePresence>
        {isLoading && (
          <div className="fixed inset-0 z-[1000] flex pointer-events-none">
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="w-1/2 h-full bg-navy shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-[1001]"
            />
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="w-1/2 h-full bg-navy shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-[1001]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-[1002]"
            >
              <div className="flex items-center gap-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
                <Map className="w-16 h-16 text-teal animate-pulse" /> GeoVora
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div
        className="pointer-events-none fixed inset-0 z-[99]"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.08), transparent 40%)`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/tentang"
              element={
                <div className="pt-20">
                  <About />
                </div>
              }
            />
            <Route
              path="/layanan"
              element={
                <div className="pt-20">
                  <Services />
                </div>
              }
            />
            <Route
              path="/portofolio"
              element={
                <div className="pt-20">
                  <Portfolio />
                  <div className="bg-gray-50/50 py-12 border-t mt-10">
                    <ProjectList />
                  </div>
                </div>
              }
            />
            <Route
              path="/kontak"
              element={
                <div className="pt-20">
                  <CTA />
                </div>
              }
            />
            <Route path="/download" element={<Download />} />
            <Route path="/admin" element={<Admin />} />
            {/* RUTE ARTIKEL */}
            <Route path="/artikel/:id" element={<ArticleDetail />} />
            <Route path="/artikel" element={<ArticleList />} />{" "}
            {/* <--- TAMBAHAN RUTE INI */}
          </Routes>
        </main>

        <FloatingWA />
        <Footer />
      </div>
    </div>
  );
}

export default App;


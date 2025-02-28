import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./components/pages/About";
import "./components/styles/global.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Частицы в фоне */}
        <ParticlesBackground />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
};

export default App;
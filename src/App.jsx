import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import "./App.css";
import { FaWhatsapp } from "react-icons/fa";

// Import pages
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Projects from "./pages/Projects";
import GovernmentScheme from "./pages/Government";
import Products from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import House from "./pages/House";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* pt-[80px] handles the space for the fixed navbar */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scheme" element={<GovernmentScheme />} />
          <Route path="/services" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/House" element={<House />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918956667915?text=Hello%20I%20am%20interested%20in%20solar%20installation"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}

export default App;
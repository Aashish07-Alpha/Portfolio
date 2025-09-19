import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import ProjectDetails from "./components/ProjectDetails";
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white scrollbar-custom">
        <Navbar />
        
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />
          
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <section id="skills" className="section-padding bg-dark-900">
            <Skills />
          </section>
          
          {/* Experience Section */}
          <section id="experience" className="section-padding bg-dark-800">
            <Experience />
          </section>
          
          {/* Projects Section */}
          <section id="projects" className="section-padding bg-dark-900">
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </section>
          
          {/* Education Section */}
          <section id="education" className="section-padding bg-dark-800">
            <Education />
          </section>
          
          {/* Achievements Section */}
          <section id="achievements" className="section-padding bg-dark-900">
            <Achievements />
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="section-padding bg-dark-800">
            <Contact />
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Project Modal */}
        <AnimatePresence>
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;

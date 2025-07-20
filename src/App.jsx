import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Certifications from "./components/Certifications";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <SkillsGrid />
        <ExperienceTimeline />
        <Certifications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

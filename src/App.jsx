import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Agalya Muthukannan</h1>
          <nav className="space-x-4 text-sm">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-2">Full Stack Developer</h2>
        <p className="max-w-xl mx-auto text-lg mb-4">
          Passionate about building scalable web applications with intuitive user experiences.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/agalya1811" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/agalya-muthukannan-6a9992247/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h4 className="text-xl font-semibold mb-2">Complaint Management System (MERN)</h4>
            <p className="text-sm mb-2">
              Role-based system for clients, support, and technicians using MongoDB, Express, React, Node.js, Zustand, and Tailwind.
            </p>
            <a className="text-blue-600 text-sm" href="https://github.com/agalya1811/complaint-management-system" target="_blank" rel="noreferrer">View Code</a>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h4 className="text-xl font-semibold mb-2">Heat Treatment Analysis</h4>
            <p className="text-sm mb-2">
              Academic project analyzing thermal effects on two-wheeler silencers with simulation tools.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h4 className="text-xl font-semibold mb-2">Crank Shaft Mechanism</h4>
            <p className="text-sm mb-2">
              Mechanical system modeling project for crankshaft operations and forces.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Skills</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Vue.js</span>
          <span>Angular</span>
          <span>Zustand</span>
          <span>MySQL</span>
          <span>Git / GitHub</span>
          <span>AWS</span>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8">Experience</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Associate Software Engineer - Mphasis</h4>
            <p className="text-sm">Developed REST APIs, handled microservices, and resolved production issues using Java and Spring Boot.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Developer - Bucksbox</h4>
            <p className="text-sm">Built UI features with Angular, managed backend APIs, and worked in a collaborative agile environment.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="mb-2">Email: <a className="text-blue-600" href="mailto:akalyakannan8872@gmail.com">akalyakannan8872@gmail.com</a></p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/agalya1811" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/agalya-muthukannan-6a9992247/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </section>

      <footer className="text-center text-sm py-4 bg-white border-t">
        © {new Date().getFullYear()} Agalya Muthukannan
      </footer>
    </div>
  );
}

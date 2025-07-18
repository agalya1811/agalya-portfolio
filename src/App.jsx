import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Agalya Muthukannan</h1>
          <nav className="space-x-4 text-sm hidden md:block">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#certifications" className="hover:text-blue-600">Certifications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center px-4">
        <h2 className="text-4xl font-semibold mb-2">Full Stack Developer</h2>
        <p className="max-w-2xl mx-auto text-lg mb-4">
          2.5+ years experience in Java, Spring Boot, MERN stack & microservices. Skilled in scalable architecture, REST APIs, and cloud deployment.
        </p>
        <div className="flex justify-center space-x-6 text-blue-600 text-2xl">
          <a href="https://github.com/agalya1811" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/agalya-muthukannan-6a9992247/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {["PropTrack (MERN)", "Complaint Management System", "Laravel-PHP Student App", "MEAN Login/Register", "Online Bus Booking", "Employee Payroll System", "To-Do List & CRUD App"].map((title, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md">
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-sm text-gray-600">
                {title.includes("PropTrack") ?
                  "Real estate listing platform with dynamic routing, Zustand state, protected agent dashboard."
                  : title.includes("Complaint") ?
                  "Role-based MERN app with image upload, category filtering, and technician assignment."
                  : title.includes("Laravel") ?
                  "Student registration system using Laravel MVC and Blade templates with authentication."
                  : title.includes("MEAN") ?
                  "Angular, Express, Node.js login/register module with MongoDB."
                  : title.includes("Online Bus") ?
                  "Microservices-based Spring Boot + Angular ticket booking with seat tracking and schedule mgmt."
                  : title.includes("Employee") ?
                  "Spring Boot + Angular payroll system with MongoDB, attendance, and tax analytics."
                  : "To-do, CRUD, portfolio apps using MERN stack."
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Skills & Tools</h3>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm">
          {["React", "Node.js", "MongoDB", "Express.js", "Java", "Spring Boot", "Vue.js", "Angular", "Zustand", "MySQL", "Laravel", ".NET", "Git", "AWS", "Docker", "Strapi", "Tailwind", "CI/CD", "JSP", "RxJS"].map((skill, i) => (
            <span key={i} className="bg-white px-3 py-2 rounded shadow-sm hover:bg-blue-50">{skill}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Experience</h3>
        <div className="space-y-6">
          {[{
            title: "Associate Software Engineer - Mphasis (04/2023 – 02/2025)",
            details: "Developed full-stack finance apps using Spring Boot, JSP, REST APIs, MySQL, and Agile. Created payroll and bus booking microservices with Angular UI."
          }, {
            title: "Full Stack Developer - Bucksbox (06/2022 – 03/2023)",
            details: "Built e-commerce backend in Node.js & Strapi, Vue.js frontend, interactive admin dashboard, and analytics features."
          }].map((job, j) => (
            <div key={j} className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold mb-1">{job.title}</h4>
              <p className="text-sm text-gray-600">{job.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-gray-100 py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-6">Certifications</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {["Java Microservices", "AWS Technical Essentials", "SQL with MySQL", "Software Testing Essentials", "Relational Databases", "Programming Fundamentals"].map((cert, i) => (
            <span key={i} className="bg-white px-4 py-2 rounded shadow hover:bg-blue-50">{cert}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
        <p className="mb-2 text-gray-700">📧 Email: <a className="text-blue-600" href="mailto:akalyakannan8872@gmail.com">akalyakannan8872@gmail.com</a></p>
        <p className="mb-6 text-gray-700">📞 Phone: <a className="text-blue-600" href="tel:+971528536143">+971 52 853 6143</a></p>
        <div className="flex justify-center gap-6 text-2xl text-blue-600">
          <a href="https://github.com/agalya1811" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/agalya-muthukannan-6a9992247/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </section>

      <footer className="text-center text-sm py-4 bg-white border-t">
        © {new Date().getFullYear()} Agalya Muthukannan
      </footer>
    </div>
  );
}

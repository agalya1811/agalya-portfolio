import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
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
  );
}

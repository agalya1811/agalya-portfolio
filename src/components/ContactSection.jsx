import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
      <p className="mb-2 text-gray-700">
        📧 Email: <a className="text-blue-600" href="mailto:akalyakannan8872@gmail.com">akalyakannan8872@gmail.com</a>
      </p>
      <p className="mb-6 text-gray-700">
        📞 Phone: <a className="text-blue-600" href="tel:+971528536143">+971 52 853 6143</a>
      </p>
      <div className="flex justify-center gap-6 text-2xl text-blue-600">
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

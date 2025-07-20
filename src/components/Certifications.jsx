import React from "react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-100 py-16 px-4">
      <h3 className="text-3xl font-bold text-center mb-6">Certifications</h3>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        {certifications.map((cert, index) => (
          <span key={index} className="bg-white px-4 py-2 rounded shadow hover:bg-blue-50">
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}

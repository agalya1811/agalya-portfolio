import React from "react";
import { skills } from "../data/skills";

export default function SkillsGrid() {
  return (
    <section id="skills" className="bg-gray-50 py-16 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Skills & Tools</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm">
        {skills.map((skill, index) => (
          <span key={index} className="bg-white px-3 py-2 rounded shadow-sm hover:bg-blue-50">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

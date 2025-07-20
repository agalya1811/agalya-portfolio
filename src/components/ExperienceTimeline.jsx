import React from "react";
import { experience } from "../data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold mb-8 text-center">Experience</h3>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-lg font-semibold mb-1">{job.title}</h4>
            <p className="text-sm text-gray-600">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

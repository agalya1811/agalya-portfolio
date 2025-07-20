import React from "react";

export default function ProjectCard({ title, description }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm py-4 bg-black border-t">
      © {new Date().getFullYear()} Agalya Muthukannan
    </footer>
  );
}

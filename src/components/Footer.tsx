"use client";

import React from "react";

import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} - Construit avec Next.js et Tailwind
            CSS.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/NicolasLOJO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center space-x-2 flex-col"
            >
              <GitHub />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nicolas-lopezjorel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center space-x-2 flex-col"
            >
              <LinkedIn width={24} height={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

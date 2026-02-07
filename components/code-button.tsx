"use client";

import { Github } from "lucide-react";

interface CodeButtonProps {
  href: string;
  variant?: "github" | "code";
}

export default function CodeButton({ href, variant = "code" }: CodeButtonProps) {
  const isGitHub = variant === "github";
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute top-8 right-8 border-2 border-gray-300 rounded-md p-2 transition-all flex items-center gap-2 ${
        isGitHub 
          ? "hover:bg-gray-100 active:border-blue-900 text-base" 
          : "bg-gray-50 hover:bg-gray-200 active:bg-gray-300 text-sm font-medium"
      }`}
    >
      <Github size={20} />
      {isGitHub ? "GitHub" : "Code"}
    </a>
  );
}

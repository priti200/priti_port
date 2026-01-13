"use client";

import { Github, Globe, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        tech: string[];
        links: {
            code?: string;
            demo?: string;
        };
    };
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative flex flex-col h-full p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>

                {/* Links */}
                <div className="flex gap-3">
                    {project.links.code && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            className="text-zinc-500 hover:text-white transition-colors"
                            aria-label="View Code"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            className="text-zinc-500 hover:text-white transition-colors"
                            aria-label="View Demo"
                        >
                            <ArrowUpRight size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                {project.description}
            </p>

            {/* Tech Stack - Minimal badges */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                    <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 rounded hover:border-zinc-700 hover:text-zinc-300 transition-colors"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

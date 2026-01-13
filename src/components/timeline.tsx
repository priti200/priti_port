"use client";

import { motion } from "framer-motion";
import { Briefcase, School, BookOpen, Code, Users, PenTool, Laptop, LucideIcon } from "lucide-react";

// Map string icon names to Lucide components
const IconMap: { [key: string]: LucideIcon } = {
    School: School,
    BookOpen: BookOpen,
    Code: Code,
    Users: Users,
    Briefcase: Briefcase,
    PenTool: PenTool,
    Laptop: Laptop,
};

interface TimelineProps {
    items: {
        title: string;
        company: string;
        year: string;
        description: string;
        icon?: string;
    }[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12 py-4">
            {items.map((item, index) => {
                const IconComponent = item.icon && IconMap[item.icon] ? IconMap[item.icon] : Briefcase;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700 ring-4 ring-zinc-950" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
                            <span className="text-xs font-mono text-zinc-500">{item.year}</span>
                        </div>

                        <div className="mb-2 text-sm font-medium text-blue-400 flex items-center gap-2">
                            {item.company}
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                            {item.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}

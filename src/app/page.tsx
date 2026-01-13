"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown, Terminal, LayoutTemplate, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { Timeline } from "@/components/timeline";
import { ProductArchitectureVisual } from "@/components/product-architecture-visual";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-zinc-100 selection:bg-blue-500/30 font-sans">

            {/* Background Texture - Clean Dot Grid for Engineering feel */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* Subtle Gradient Bloom - Top Right */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10">
                {/* --- Hero Section (Product & AI Focused) --- */}
                <section className="min-h-screen flex items-center justify-center section-container pt-20 md:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto">

                        {/* LEFT: Content (Priti Gupta / Product Engineer) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-8 md:space-y-10"
                        >
                            {/* Identity Row - Cleaner & Less Crowded */}
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-zinc-400 font-medium tracking-wide">Hi, I'm Priti Gupta</span>
                                <span className="hidden sm:block text-zinc-700 mx-1">•</span>
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[11px] font-medium text-emerald-400/90 tracking-wide uppercase">Available for Engineering Roles</span>
                                </div>
                            </div>

                            {/* Headline & Copy - Sharper Focus */}
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] md:leading-[1.1]">
                                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI-Powered Products</span> with Engineering Precision.
                                </h1>
                                <p className="text-lg text-zinc-400 max-w-xl leading-relaxed text-balance">
                                    I turn research-grade AI into reliable, user-centric applications.
                                    A <strong className="text-zinc-200 font-medium">Full-Stack Engineer</strong> bridging the gap between complex ML systems and fluid interactive experiences.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#projects"
                                    className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg shadow-white/5 flex items-center gap-2 text-sm"
                                >
                                    View Selected Work <ArrowRight size={16} />
                                </Link>
                                <a
                                    href={PORTFOLIO_DATA.personal.github}
                                    target="_blank"
                                    className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                            </div>

                            {/* Metrics: Career Focused */}
                            {/* Metrics: Career Focused */}
                            <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10 pt-8 border-t border-zinc-800/60 w-full">
                                <div className="min-w-fit">
                                    <div className="text-xl font-bold text-white tracking-tight whitespace-nowrap">3+</div>
                                    <div className="text-zinc-500 text-xs font-medium pt-1 whitespace-nowrap">End-to-End AI Products</div>
                                </div>
                                <div className="hidden sm:block w-px bg-zinc-800" />
                                <div className="min-w-fit">
                                    <div className="text-xl font-bold text-white tracking-tight whitespace-nowrap">Experience</div>
                                    <div className="text-zinc-500 text-xs font-medium pt-1 whitespace-nowrap">Startup & Internship</div>
                                </div>
                                <div className="hidden sm:block w-px bg-zinc-800" />
                                <div className="min-w-fit">
                                    <div className="text-xl font-bold text-white tracking-tight whitespace-nowrap">Focus</div>
                                    <div className="text-zinc-500 text-xs font-medium pt-1 whitespace-nowrap">Research-Backed Eng</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: Visual (Architecture/Product Diagram) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="hidden lg:flex justify-end relative h-full items-center"
                        >
                            <ProductArchitectureVisual />
                        </motion.div>
                    </div>

                    {/* Scroll Hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hidden md:block"
                    >
                        <ChevronDown size={20} className="animate-bounce" />
                    </motion.div>
                </section>

                {/* --- Skills Grid (Cleaner Layout) --- */}
                <section className="section-container py-28 border-t border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="md:col-span-1 space-y-4">
                            <h2 className="text-3xl font-bold text-white">Full-Stack<br />Arsenal</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                A rigorously selected set of tools for building scalable, type-safe, and performant applications.
                            </p>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {/* Card 1: Frontend */}
                            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                                <LayoutTemplate className="text-blue-500 mb-4" size={28} />
                                <h4 className="text-white font-bold mb-3">Frontend UX</h4>
                                <ul className="space-y-2 text-zinc-400 text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></span>React 19 & Next.js</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></span>TypeScript Strict</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></span>Tailwind & Motion</li>
                                </ul>
                            </div>
                            {/* Card 2: AI Engineering */}
                            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                                <Cpu className="text-purple-500 mb-4" size={28} />
                                <h4 className="text-white font-bold mb-3">AI Systems</h4>
                                <ul className="space-y-2 text-zinc-400 text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500/50 rounded-full"></span>PyTorch & Transformers</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500/50 rounded-full"></span>RAG Pipelines</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500/50 rounded-full"></span>Model Optimization</li>
                                </ul>
                            </div>
                            {/* Card 3: Backend */}
                            <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                                <Terminal className="text-emerald-500 mb-4" size={28} />
                                <h4 className="text-white font-bold mb-3">Core Infrastructure</h4>
                                <ul className="space-y-2 text-zinc-400 text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full"></span>FastAPI & Node.js</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full"></span>PostgreSQL & Redis</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full"></span>Docker & CI/CD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Projects --- */}
                <section id="projects" className="section-container py-32 border-t border-dashed border-zinc-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-2">Featured Work</h2>
                            <p className="text-zinc-400">Products that solve real problems.</p>
                        </div>
                        <a href="https://github.com/priti200" target="_blank" className="px-6 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium">
                            View Full Archive
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {PORTFOLIO_DATA.projects.map((project, i) => (
                            <div key={i} className="h-full">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Experience --- */}
                <section className="section-container py-32 border-t border-dashed border-zinc-800/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">The Journey</span>
                                <h2 className="text-4xl font-bold text-white mb-6">Experience</h2>
                                <p className="text-zinc-400 mb-8 leading-relaxed">
                                    My professional path in building software. Always learning, always shipping.
                                </p>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-white bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors font-medium"
                                >
                                    <Download size={18} /> Download CV
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <Timeline items={PORTFOLIO_DATA.journey || []} />
                        </div>
                    </div>
                </section>

                {/* --- Footer --- */}
                <section className="py-40 border-t border-zinc-900 bg-zinc-950 text-center">
                    <div className="section-container">
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">Let's build the<br />next big thing.</h2>
                        <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-lg">
                            I'm currently looking for new opportunities in Full Stack Engineering and ML Systems. available to join teams that move fast.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1">
                                Shoot me an Email
                            </a>
                            <Link href="/contact" className="px-10 py-4 bg-transparent text-white font-bold rounded-full border border-zinc-700 hover:bg-zinc-900 transition-all">
                                Use Contact Form
                            </Link>
                        </div>

                        <footer className="mt-32 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm font-medium gap-4">
                            <div>&copy; 2026 Priti Gupta.</div>
                            <div className="flex gap-6">
                                <a href={PORTFOLIO_DATA.personal.github} className="hover:text-zinc-300 transition-colors">GitHub</a>
                                <a href={PORTFOLIO_DATA.personal.linkedin} className="hover:text-zinc-300 transition-colors">LinkedIn</a>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>
        </main>
    );
}

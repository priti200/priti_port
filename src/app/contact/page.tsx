"use client";
// forcing redeploy for contact info update

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Send, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ContactPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
            <motion.div
                className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Send size={300} />
                </div>

                {/* --- Left Column: Context & Info --- */}
                <motion.div variants={itemVariants} className="flex flex-col justify-between space-y-8 z-10">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h1>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="p-3 bg-zinc-800 rounded-full">
                                <Mail size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono">MAIL ME</p>
                                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-white transition-colors">{PORTFOLIO_DATA.personal.email}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="p-3 bg-zinc-800 rounded-full">
                                <Phone size={20} className="text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono">CALL ME</p>
                                <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-white transition-colors">{PORTFOLIO_DATA.personal.phone}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="p-3 bg-zinc-800 rounded-full">
                                <MapPin size={20} className="text-purple-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono">LOCATION</p>
                                <span className="hover:text-white transition-colors">{PORTFOLIO_DATA.personal.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href={PORTFOLIO_DATA.personal.github} target="_blank" className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors text-white"><Github size={20} /></a>
                        <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors text-white"><Linkedin size={20} /></a>
                    </div>
                </motion.div>

                {/* --- Right Column: Contact Form --- */}
                <motion.div variants={itemVariants} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 z-10">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-mono text-zinc-400">NAME</label>
                            <input type="text" id="name" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-mono text-zinc-400">EMAIL</label>
                            <input type="email" id="email" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-mono text-zinc-400">MESSAGE</label>
                            <textarea id="message" rows={4} className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600 resize-none" placeholder="Hello, I'd like to talk about..." />
                        </div>
                        <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>

            </motion.div>
        </main>
    );
}

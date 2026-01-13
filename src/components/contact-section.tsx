"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useState } from "react";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // This is just a visual form for the portfolio, no backend logic attached in this snippet
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Message sent! (Demo only)");
    };

    return (
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Send size={200} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {/* Contact Info */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-zinc-400 mb-8">
                            Have a project in mind or want to discuss the latest in tech? I'm just a message away.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-zinc-800/50 rounded-full border border-zinc-700">
                                <Mail size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono mb-1">EMAIL</p>
                                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-zinc-200 hover:text-white transition-colors">
                                    {PORTFOLIO_DATA.personal.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-zinc-800/50 rounded-full border border-zinc-700">
                                <Phone size={20} className="text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono mb-1">PHONE</p>
                                <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-zinc-200 hover:text-white transition-colors">
                                    {PORTFOLIO_DATA.personal.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-zinc-800/50 rounded-full border border-zinc-700">
                                <MapPin size={20} className="text-purple-400" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono mb-1">LOCATION</p>
                                <span className="text-zinc-200">
                                    {PORTFOLIO_DATA.personal.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="text-xs font-mono text-zinc-500 uppercase block mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-zinc-600"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-xs font-mono text-zinc-500 uppercase block mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-zinc-600"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-xs font-mono text-zinc-500 uppercase block mb-2">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-zinc-600 resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-black font-bold py-3.5 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <>Send Message <Send size={18} /></>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

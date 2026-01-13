"use client";

import { motion } from "framer-motion";
import { Bot, Terminal, LineChart, Code2, Sparkles, Layout } from "lucide-react";

export const ProductArchitectureVisual = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center select-none pointer-events-none">
            {/* Ambient Background Glow - Brighter for contrast */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />

            <div className="relative w-full max-w-[480px] h-[500px] perspective-1000">
                <motion.div
                    initial={{ rotateX: 20, rotateY: -15, rotateZ: 2 }}
                    animate={{ rotateX: 20, rotateY: -15, rotateZ: 2 }}
                    className="relative w-full h-full transform-style-3d"
                >
                    {/* --- Layer 1: Infrastructure (Foundation) --- */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 160, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="absolute inset-x-0 h-32 bg-zinc-900 border border-zinc-700/60 rounded-xl backdrop-blur-md transform-style-3d shadow-2xl flex items-center p-6 gap-5 shadow-black/50"
                    >
                        <div className="p-3.5 bg-zinc-800 rounded-lg border border-zinc-700 shadow-inner">
                            <Terminal className="text-emerald-400" size={26} />
                        </div>
                        <div className="space-y-2.5 flex-1 opacity-80">
                            <div className="h-2 w-28 bg-zinc-600 rounded-full" />
                            <div className="h-2 w-full bg-zinc-700/50 rounded-full" />
                            <div className="flex gap-2 mt-1.5 items-center">
                                <code className="text-[11px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">POST /api/vector-search</code>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Layer 2: Intelligence (The Brain) --- */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 80, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute inset-x-8 h-32 bg-zinc-800/90 border border-indigo-500/30 rounded-xl backdrop-blur-xl transform-style-3d shadow-2xl z-20 flex items-center p-6 gap-5 shadow-indigo-900/20"
                    >
                        <div className="p-3.5 bg-indigo-500/10 rounded-lg border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                            <Bot className="text-indigo-400" size={26} />
                        </div>
                        <div className="space-y-2.5 flex-1">
                            <div className="flex justify-between items-center">
                                <div className="h-2 w-24 bg-indigo-400/20 rounded-full" />
                                <div className="flex items-center gap-1.5">
                                    <Sparkles size={10} className="text-amber-400" />
                                    <div className="h-1.5 w-8 bg-amber-400/40 rounded-full" />
                                </div>
                            </div>
                            <div className="h-2 w-full bg-zinc-700/50 rounded-full" />
                            <div className="flex gap-2 mt-2">
                                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded border border-indigo-500/30 font-medium">Embeddings</span>
                                <span className="text-[10px] bg-zinc-700/50 text-zinc-300 px-2 py-1 rounded border border-zinc-600">Context</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Layer 3: Presentation (The Product) --- */}
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute inset-x-4 h-48 bg-zinc-950 border border-zinc-700 rounded-xl transform-style-3d shadow-[0_20px_50px_-12px_rgba(0,0,0,1)] z-30 overflow-hidden flex flex-col"
                    >
                        {/* Browser Header */}
                        <div className="h-9 border-b border-zinc-800 bg-zinc-900 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20 border border-amber-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-500/50" />
                            </div>
                            <div className="w-24 h-2 rounded-full bg-zinc-800 ml-3" />
                            <div className="ml-auto text-[10px] text-zinc-500 font-mono">TalkToYourDocs</div>
                        </div>

                        {/* UI Content */}
                        <div className="p-5 flex-1 flex flex-col gap-4 relative bg-gradient-to-b from-zinc-900/50 to-zinc-950">
                            {/* User Message */}
                            <div className="self-end bg-blue-600 rounded-2xl rounded-tr-sm p-3.5 max-w-[85%] shadow-lg shadow-blue-900/20 border border-blue-500">
                                <div className="h-2 w-32 bg-white/40 rounded-full mb-2" />
                                <div className="h-2 w-20 bg-white/20 rounded-full" />
                            </div>

                            {/* AI Response */}
                            <div className="self-start bg-zinc-800 rounded-2xl rounded-tl-sm p-3.5 max-w-[85%] border border-zinc-700 shadow-sm">
                                <div className="h-2 w-40 bg-zinc-600 rounded-full mb-2" />
                                <div className="h-2 w-32 bg-zinc-700 rounded-full mb-2" />
                                <div className="h-2 w-24 bg-zinc-700 rounded-full" />
                            </div>

                            {/* "Live" Indicator Tag */}
                            <div className="absolute bottom-3 left-4 bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md px-2.5 py-1.5 rounded-md flex items-center gap-2 shadow-lg">
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </div>
                                <span className="text-[10px] font-medium text-zinc-300">Analysis Complete</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection Lines (Brighter) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {/* Line 1 -> 2 */}
                        <motion.path
                            d="M 240 240 L 240 310"
                            stroke="url(#gradient-line)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.4 }}
                            transition={{ duration: 1.5, delay: 1 }}
                        />
                        {/* Line 2 -> 3 */}
                        <motion.path
                            d="M 240 160 L 240 230"
                            stroke="url(#gradient-line)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.4 }}
                            transition={{ duration: 1.5, delay: 1 }}
                        />
                        <defs>
                            <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60A5FA" />
                                <stop offset="100%" stopColor="#A78BFA" />
                            </linearGradient>
                        </defs>
                    </svg>

                </motion.div>
            </div>
        </div>
    );
};

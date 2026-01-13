"use client";

import { motion } from "framer-motion";

export const HeroGeometry = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center opacity-60 grayscale-[20%]">
            <div className="relative w-[400px] h-[400px] perspective-1000">
                {/* Core Cube Grid */}
                <motion.div
                    animate={{ rotateY: 360, rotateX: 15 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full transform-style-3d relative"
                >
                    {/* Abstract Planes */}
                    <div className="absolute inset-0 border border-blue-500/20 bg-blue-500/5 rounded-xl transform translate-z-[100px]" />
                    <div className="absolute inset-0 border border-purple-500/20 bg-purple-500/5 rounded-xl transform -translate-z-[100px]" />
                    <div className="absolute inset-0 border border-zinc-700/30 rounded-xl transform rotate-y-90" />

                    {/* Floating Nodes */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(192,132,252,0.5)]"
                    />
                </motion.div>

                {/* Connecting Lines (Simulating Network/Graph) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-700/30">
                    <line x1="25%" y1="25%" x2="75%" y2="66%" strokeWidth="1" />
                    <line x1="75%" y1="66%" x2="50%" y2="50%" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="25%" y2="25%" strokeWidth="1" />
                </svg>
            </div>

            {/* Gradient Overlay to blend with bg */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>
    );
};

"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { User, MapPin, Mail, Link as LinkIcon, Download } from "lucide-react";
import Image from "next/image";

export function ProfileSection() {
    return (
        <div className="glass-card rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-zinc-800 shrink-0">
                {/* Placeholder for profile image. Assuming it will be in public/profile-pic.png */}
                <Image
                    src="/profile-pic.png"
                    alt={PORTFOLIO_DATA.personal.name}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold mb-2">{PORTFOLIO_DATA.personal.name}</h2>
                    <p className="text-xl text-zinc-400 font-mono">{PORTFOLIO_DATA.personal.role}</p>
                </div>

                <p className="text-zinc-300 leading-relaxed max-w-2xl">
                    {PORTFOLIO_DATA.personal.bio}
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-zinc-400 font-mono mt-4">
                    <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <MapPin size={14} className="text-red-400" />
                        {PORTFOLIO_DATA.personal.location}
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <Mail size={14} className="text-blue-400" />
                        {PORTFOLIO_DATA.personal.email}
                    </div>
                    {/* You can add more info here if needed */}
                </div>
            </div>
        </div>
    );
}

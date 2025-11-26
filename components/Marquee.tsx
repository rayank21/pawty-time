"use client";

import { motion } from "framer-motion";

export function Marquee() {
    const items = [
        "Made in France 🇫🇷",
        "Artisanal 🧶",
        "Naturel 🌿",
        "Fait main ✋",
        "Eco-responsable ♻️",
        "Joyeux Anniversaire 🎂",
    ];

    return (
        <div className="bg-joy py-4 overflow-hidden border-y-2 border-ink transform -rotate-1 relative z-20">
            <motion.div
                className="flex whitespace-nowrap gap-12"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span key={i} className="text-xl font-heading font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                        {item} <span className="text-white">★</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

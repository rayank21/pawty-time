"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-joy/20 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-joy/30 text-ink font-hand text-lg mb-6 rotate-[-2deg]">
                        🎉 La fête commence ici !
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-ink leading-tight">
                        Pawty Time
                        <span className="block text-3xl md:text-4xl mt-2 font-normal text-ink/80">
                            La box d’anniversaire 100% française pour chiens et chats.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-ink/70 mb-8 max-w-lg mx-auto font-medium">
                        Chez Pawty Time, nous pensons que chaque compagnon à quatre pattes mérite sa journée de fête.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/boutique">
                            <Button size="lg" className="shadow-xl shadow-primary/20 w-full sm:w-auto">
                                Offrir une box 🎁
                            </Button>
                        </Link>
                        <a href="#concept">
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                Découvrir le concept
                            </Button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                        <Image
                            src="/box.png"
                            alt="Pawty Time Box"
                            fill
                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                            priority
                        />
                    </div>
                    {/* Floating elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-lg rotate-12 hidden md:block"
                    >
                        <span className="text-4xl">🇫🇷</span>
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-lg -rotate-6 hidden md:block"
                    >
                        <span className="text-4xl">🌿</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

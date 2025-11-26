"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dog, Cat, Check, ShoppingBag, Truck, ShieldCheck, Heart } from "lucide-react";
import { Button } from "../../components/ui/Button";
import Image from "next/image";
import Link from "next/link";

// Mock Data
const products = {
    dog: [
        {
            id: 1,
            name: "La Petite Fête",
            desc: "Pour les petits chiens < 10kg",
            price: "9,90€",
            image: "/box.png", // Placeholder
            popular: false,
        },
        {
            id: 2,
            name: "Le Grand Jeu",
            desc: "Pour les chiens joueurs",
            price: "9,90€",
            image: "/box.png",
            popular: true,
        },
        {
            id: 3,
            name: "L'Expert Gourmand",
            desc: "100% friandises naturelles",
            price: "9,90€",
            image: "/box.png",
            popular: false,
        },
    ],
    cat: [
        {
            id: 4,
            name: "Le Petit Chasseur",
            desc: "Pour les chats actifs",
            price: "9,90€",
            image: "/box.png",
            popular: false,
        },
        {
            id: 5,
            name: "Sa Majesté",
            desc: "Le luxe pour votre chat",
            price: "9,90€",
            image: "/box.png",
            popular: true,
        },
        {
            id: 6,
            name: "Ronron Thérapie",
            desc: "Détente et gourmandise",
            price: "9,90€",
            image: "/box.png",
            popular: false,
        },
    ],
};

export default function BoutiquePage() {
    const [animal, setAnimal] = useState<"dog" | "cat">("dog");

    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans text-ink">
            {/* Header (Simplified based on request) */}
            <header className="py-6 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="text-2xl font-heading font-bold text-ink flex items-center gap-2">
                    Pawty Time
                </Link>
                <Link href="/">
                    <Button variant="ghost" size="sm">Retour à l'accueil</Button>
                </Link>
            </header>

            <div className="container mx-auto px-4 py-8 md:py-12">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-4">
                        C'est parti ! <br className="md:hidden" /> Pour qui est la fête aujourd'hui ?
                    </h1>
                    <p className="text-lg text-ink/60">Sélectionnez votre compagnon pour découvrir ses surprises.</p>
                </div>

                {/* STEP 1: Animal Selector */}
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
                    {/* Dog Card */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setAnimal("dog")}
                        className={`cursor-pointer relative w-full md:w-80 p-8 rounded-[2.5rem] border-4 transition-all duration-300 flex flex-col items-center gap-4 ${animal === "dog"
                            ? "border-[#FF8C69] bg-white shadow-xl shadow-[#FF8C69]/10"
                            : "border-transparent bg-white/50 hover:bg-white text-ink/50 grayscale-[0.5]"
                            }`}
                    >
                        {animal === "dog" && (
                            <div className="absolute top-4 right-4 bg-[#FF8C69] text-white p-1 rounded-full">
                                <Check size={20} />
                            </div>
                        )}
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl bg-[#FF8C69]/20`}>
                            🐶
                        </div>
                        <span className="text-2xl font-heading font-bold">CHIEN</span>
                    </motion.button>

                    {/* Cat Card */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setAnimal("cat")}
                        className={`cursor-pointer relative w-full md:w-80 p-8 rounded-[2.5rem] border-4 transition-all duration-300 flex flex-col items-center gap-4 ${animal === "cat"
                            ? "border-[#FF8C69] bg-white shadow-xl shadow-[#FF8C69]/10"
                            : "border-transparent bg-white/50 hover:bg-white text-ink/50 grayscale-[0.5]"
                            }`}
                    >
                        {animal === "cat" && (
                            <div className="absolute top-4 right-4 bg-[#FF8C69] text-white p-1 rounded-full">
                                <Check size={20} />
                            </div>
                        )}
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl bg-[#FF8C69]/20`}>
                            🐱
                        </div>
                        <span className="text-2xl font-heading font-bold">CHAT</span>
                    </motion.button>
                </div>

                {/* STEP 2: Product Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="font-hand text-xl text-[#8CBF69] rotate-[-2deg] inline-block mb-2">
                            {animal === "dog" ? "Wouf wouf !" : "Miaou !"}
                        </span>
                        <h2 className="text-3xl font-heading font-bold text-ink">
                            Choisissez son coffret d'anniversaire :
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {products[animal].map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative flex flex-col"
                            >
                                {product.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD93D] text-ink text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                                        Best-Seller
                                    </div>
                                )}

                                <div className="relative w-full aspect-square mb-6 bg-[#FDFBF7] rounded-3xl overflow-hidden group">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                                    />
                                </div>

                                <div className="text-center flex-1 flex flex-col">
                                    <h3 className="text-xl font-heading font-bold text-ink mb-1">{product.name}</h3>
                                    <p className="text-sm text-ink/60 mb-4">{product.desc}</p>

                                    <div className="mt-auto">
                                        <div className="text-2xl font-bold text-[#FF8C69] mb-4">{product.price}</div>
                                        <Button className="w-full bg-[#FF8C69] hover:bg-[#FF8C69]/90 text-white shadow-[#FF8C69]/20">
                                            Choisir
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Reassurance */}
                <div className="mt-24 mb-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#8CBF69]/20 flex items-center justify-center text-[#8CBF69]">
                            <Truck size={24} />
                        </div>
                        <h4 className="font-bold text-ink">Livraison Rapide</h4>
                        <p className="text-sm text-ink/60">Expédié sous 24/48h</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#8CBF69]/20 flex items-center justify-center text-[#8CBF69]">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="font-bold text-ink">Paiement Sécurisé</h4>
                        <p className="text-sm text-ink/60">CB, Paypal, Apple Pay</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#8CBF69]/20 flex items-center justify-center text-[#8CBF69]">
                            <Heart size={24} />
                        </div>
                        <h4 className="font-bold text-ink">Fait avec Amour</h4>
                        <p className="text-sm text-ink/60">En France, par des passionnés</p>
                    </div>
                </div>

            </div>

            {/* Footer (Reusing existing footer style conceptually, but simplified for this page as requested) */}
            <footer className="bg-ink text-white pt-12 pb-6">
                <div className="bg-[#FFD93D] text-ink font-heading font-bold text-center py-3 -mt-12 mb-12 rotate-1">
                    JOYEUX ANNIVERSAIRE • HAPPY BIRTHDAY • JOYEUX ANNIVERSAIRE
                </div>
                <div className="container mx-auto px-4 text-center">
                    <p className="opacity-50 text-sm">© 2024 Pawty Time. Tous droits réservés.</p>
                </div>
            </footer>
        </main>
    );
}

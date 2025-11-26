"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function ValuesSection() {
    return (
        <section className="py-20 bg-kraft/20 relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        {/* Use logo or another image here if available, or a placeholder composition */}
                        <div className="relative bg-white p-8 rounded-[3rem] shadow-xl rotate-[-2deg]">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-joy rounded-full flex items-center justify-center text-2xl animate-bounce">
                                🇫🇷
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4 text-center">
                                L'Artisanat Français
                            </h3>
                            <p className="text-ink/70 text-center">
                                Nous sélectionnons les meilleurs artisans locaux pour garantir la qualité et la sécurité de chaque produit.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <span className="font-hand text-xl text-secondary inline-block mb-2">
                            Nos engagements
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-8 leading-tight">
                            Des produits français, responsables et faits main
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Aucun produit industriel",
                                "Ingrédients sains et naturels",
                                "Fabrication locale et éthique",
                                "Soutien à l'artisanat français"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-ink/80">
                                    <CheckCircle2 className="text-secondary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

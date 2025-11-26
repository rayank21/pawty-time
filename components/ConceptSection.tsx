"use client";

import { Card } from "./ui/Card";
import { Bone, Gift, PartyPopper, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Bone,
        title: "Friandises Artisanales",
        desc: "Naturelles et Made in France.",
        color: "bg-primary/20 text-primary",
    },
    {
        icon: Gift,
        title: "Jouets Durables",
        desc: "Pour des heures de jeu.",
        color: "bg-secondary/20 text-secondary",
    },
    {
        icon: PartyPopper,
        title: "Accessoires Festifs",
        desc: "Bandana, chapeau...",
        color: "bg-joy/20 text-joy-dark",
    },
    {
        icon: Sparkles,
        title: "Surprise Personnalisée",
        desc: "Adaptée à votre compagnon.",
        color: "bg-purple-100 text-purple-600",
    },
];

export function ConceptSection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="font-hand text-xl text-primary rotate-[-2deg] inline-block mb-2">
                        Qu'y a-t-il dans la box ?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink">
                        Un concept unique
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${feature.color}`}>
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-3 text-ink">
                                    {feature.title}
                                </h3>
                                <p className="text-ink/70">
                                    {feature.desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

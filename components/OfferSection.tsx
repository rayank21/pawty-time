"use client";

import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Dog, Cat, Heart, Leaf } from "lucide-react";

export function OfferSection() {
    return (
        <section id="offres" className="py-20 bg-white relative">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-16">
                    <span className="font-hand text-xl text-joy-dark rotate-[2deg] inline-block mb-2">
                        Pour tous les goûts
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">
                        Une expérience personnalisée
                    </h2>
                    <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                        Parce que chaque animal est unique, nous adaptons le contenu de la box à ses besoins.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="bg-offwhite border-none">
                        <div className="flex justify-center gap-4 mb-4 text-primary">
                            <Dog size={40} />
                            <Cat size={40} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Chien ou chat</h3>
                        <p className="text-ink/70">Nous avons des box pour les deux !</p>
                    </Card>

                    <Card className="bg-offwhite border-none">
                        <div className="flex justify-center gap-4 mb-4 text-secondary">
                            <Heart size={40} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Âge & allergies</h3>
                        <p className="text-ink/70">Adapté aux chiots, chatons, adultes et seniors.</p>
                    </Card>

                    <Card className="bg-offwhite border-none">
                        <div className="flex justify-center gap-4 mb-4 text-joy">
                            <Leaf size={40} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Éco-responsable</h3>
                        <p className="text-ink/70">Packaging recyclable et zéro plastique inutile.</p>
                    </Card>
                </div>

                <div className="bg-kraft/10 rounded-[3rem] p-12 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h3 className="text-3xl font-heading font-bold mb-4">
                            Pourquoi choisir Pawty Time ?
                        </h3>
                        <p className="text-lg text-ink/80 mb-8">
                            Pour offrir un moment de bonheur unique, créer des souvenirs, et surprendre votre compagnon avec des produits sûrs et gourmands.
                        </p>
                        <a href="mailto:contact@pawtytime.fr">
                            <Button size="lg" className="shadow-xl shadow-primary/20 animate-bounce">
                                Rejoignez la Pawty Family ! 🥳
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

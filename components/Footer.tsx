import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-ink text-offwhite py-12 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        {/* Logo placeholder if needed, or text */}
                        <div className="relative w-32 h-32 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Pawty Time Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-offwhite/60 text-sm max-w-xs text-center md:text-left">
                            La première box d’anniversaire pour chiens et chats, 100% française et artisanale.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold mb-2 text-joy">À propos</h4>
                            <Link href="#" className="text-offwhite/80 hover:text-white">Notre histoire</Link>
                            <Link href="#" className="text-offwhite/80 hover:text-white">Nos artisans</Link>
                            <Link href="#" className="text-offwhite/80 hover:text-white">Blog</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold mb-2 text-joy">Aide</h4>
                            <Link href="#" className="text-offwhite/80 hover:text-white">FAQ</Link>
                            <Link href="#" className="text-offwhite/80 hover:text-white">Livraison</Link>
                            <Link href="#" className="text-offwhite/80 hover:text-white">Contact</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-offwhite/10 mt-12 pt-8 text-center text-offwhite/40 text-sm">
                    © {new Date().getFullYear()} Pawty Time. Fait avec ❤️ en France.
                </div>
            </div>
        </footer>
    );
}

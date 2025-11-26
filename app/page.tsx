import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { ConceptSection } from "@/components/ConceptSection";
import { ValuesSection } from "@/components/ValuesSection";
import { OfferSection } from "@/components/OfferSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite bg-noise selection:bg-primary selection:text-white">
      <HeroSection />
      <Marquee />
      <ConceptSection />
      <ValuesSection />
      <OfferSection />
      <Footer />
    </main>
  );
}

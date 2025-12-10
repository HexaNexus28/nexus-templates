// app/page.jsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import PackCard from "@/components/PackCard";
import { packs } from "@/data/packs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title="Nos packs populaires"
        subtitle="Des solutions taillées pour la croissance et la sécurité de votre entreprise."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.slice(0, 3).map((pack) => (
            <PackCard key={pack.id} {...pack} />
          ))}
        </div>
      </Section>
      <Section
        title="Pourquoi NexusTemplates ?"
        subtitle="Fiabilité, rapidité et qualité de code"
      >
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="rounded-lg border p-6">
            <strong>Expertise:</strong> Stack moderne et maintenable.
          </li>
          <li className="rounded-lg border p-6">
            <strong>Transparence:</strong> Prix clairs, livrables mesurables.
          </li>
          <li className="rounded-lg border p-6">
            <strong>Sécurité:</strong> Bonnes pratiques par défaut.
          </li>
        </ul>
      </Section>
      <Footer />
    </>
  );
}

// app/templates/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PackCard from "@/components/PackCard";
import { packs } from "@/data/packs";

export default function Templates() {
  return (
    <>
      <Navbar />
      <Section
        title="NexusTemplates – Packs clés en main"
        subtitle="Des solutions professionnelles pour développeurs, freelances et PME."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <PackCard key={pack.id} {...pack} />
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}

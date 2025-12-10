import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Navbar />
      <Section
        title="À propos de HexaNexus"
        subtitle="Innovation, fiabilité et impact"
      >
        <div className="prose max-w-none">
          <p>
            HexaNexus accompagne les entreprises dans la création de produits
            digitaux performants et sécurisés.
          </p>
          <p>
            Nous valorisons la qualité de code, la transparence et la livraison
            rapide.
          </p>
        </div>
      </Section>
      <Footer />
    </>
  );
}

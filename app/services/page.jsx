// app/services/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Navbar />
      <Section
        title="Nos services sur mesure"
        subtitle="Des prestations adaptées à vos besoins spécifiques pour des solutions digitales performantes."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Développement Web"
            description="Création de sites vitrines, applications Next.js, optimisation SEO et performances sur mesure."
            icon="🖥️"
          />
          <ServiceCard
            title="Intégration API"
            description="Conception de backends robustes, sécurisés et scalables (C#, Node.js, Python) pour vos besoins métiers."
            icon="🔗"
          />
          <ServiceCard
            title="Accompagnement DevOps"
            description="Mise en place de pipelines CI/CD, monitoring, alerting et optimisation des coûts cloud."
            icon="⚙️"
          />
          <ServiceCard
            title="Audit et Sécurité"
            description="Audit de code, durcissement des infrastructures et protection des données sensibles."
            icon="🔒"
          />
          <ServiceCard
            title="Formation et Mentorat"
            description="Accompagnement technique pour monter en compétences sur les technologies modernes (Next.js, Docker, etc.)."
            icon="🎓"
          />
          <ServiceCard
            title="Maintenance et Support"
            description="Support technique, corrections de bugs et évolutions pour vos applications existantes."
            icon="🛠️"
          />
        </div>
      </Section>
      <Section
        title="Besoin d’une solution clé en main ?"
        subtitle="Découvrez nos packs prêts à l’emploi pour gagner du temps."
      >
        <Link
          href="/templates"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Voir nos templates
        </Link>
      </Section>
      <Footer />
    </>
  );
}

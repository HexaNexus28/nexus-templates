// components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">NexusTemplates</h1>
        <p className="mt-4 text-lg opacity-90">
          Une plateforme proposant des templates professionnels prêts à l’emploi
          pour développeurs, freelances et PME. Des modèles optimisés (planning
          RH, starter API C#, dashboards, sites restaurants, pitch decks) et des
          services d’intégration personnalisée.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/templates"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:shadow-md"
          >
            Voir les packs
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white rounded-lg"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}

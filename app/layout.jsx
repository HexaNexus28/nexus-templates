// app/layout.jsx
import { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "NexusTemplates – Packs professionnels pour développeurs et PME",
  description:
    "NexusTemplates propose des templates clés en main (planning RH, API C#, dashboards, sites restaurants, pitch decks) et des services d’intégration personnalisée. Structure extensible et déployable rapidement.",
  keywords: [
    "NexusTemplates",
    "templates",
    "packs",
    "développeurs",
    "PME",
    "Next.js",
    "Notion",
    "Excel",
    "API C#",
    "dashboard",
  ],
  openGraph: {
    title: "NexusTemplates – Packs professionnels",
    description:
      "Des solutions optimisées pour développeurs, freelances et PME.",
    url: "https://nexustemplates.vercel.app",
    siteName: "NexusTemplates",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "NexusTemplates" },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}

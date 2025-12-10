// components/ServiceCard.jsx
import Link from "next/link";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <Link
        href="/contact"
        className="mt-4 inline-block text-sm text-blue-600 font-medium hover:underline"
      >
        En savoir plus →
      </Link>
    </div>
  );
}

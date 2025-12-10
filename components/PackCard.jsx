// components/PackCard.jsx
import Link from "next/link";

export default function PackCard({
  title,
  price,
  priceCommercial,
  short,
  buyLink,
  tags,
}) {
  return (
    <div className="rounded-lg border p-6 hover:shadow-sm transition">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-right">
          <span className="text-gray-500 line-through text-sm">
            {priceCommercial}
          </span>
          <div className="font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{short}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={buyLink}
        target="_blank"
        className="mt-4 inline-block text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Acheter
      </Link>
    </div>
  );
}

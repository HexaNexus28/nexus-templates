export default function TemplateItem({
  name,
  description,
  date,
  url,
  tags = [],
}) {
  return (
    <div className="rounded-lg border p-6 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <p className="text-sm text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">
            {t}
          </span>
        ))}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-700 font-medium hover:underline"
      >
        Ouvrir le site
      </a>
    </div>
  );
}

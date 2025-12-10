export default function Section({ title, subtitle, children }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="HexaNexus" className="h-8 w-8" />
          <span className="font-bold text-xl">HexaNexus</span>
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/about">À propos</Link>
          <Link href="/contact" className="font-semibold">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

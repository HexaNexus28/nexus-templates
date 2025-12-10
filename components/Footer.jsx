export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t mt-16">
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm">
                <div>
                    <h4 className="font-semibold mb-2">HexaNexus</h4>
                    <p>Solutions digitales, cloud et sécurité pour entreprises.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Légal</h4>
                    <p>© {new Date().getFullYear()} HexaNexus. Tous droits réservés.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <p>Paris, Île-de-France • contact@hexanexus.com</p>
                </div>
            </div>
        </footer>
    );
}

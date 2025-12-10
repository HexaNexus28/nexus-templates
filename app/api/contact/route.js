// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Vérification des champs obligatoires
        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Missing fields" },
                { status: 400 }
            );
        }

        // Log (tu peux remplacer par un envoi d'email ou une sauvegarde en base)
        console.log("Contact message:", { name, email, message });

        // Réponse réussie
        return NextResponse.json(
            { ok: true, message: "Message reçu avec succès !" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Erreur lors du traitement du formulaire :", error);
        return NextResponse.json(
            { ok: false, error: "Erreur interne du serveur" },
            { status: 500 }
        );
    }
}

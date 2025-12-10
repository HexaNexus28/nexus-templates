// app/contact/page.jsx
"use client"; // Important : ce composant utilise des hooks React (useState)
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus(`error ${error.message}`);
    }
  }

  return (
    <>
      <Navbar />
      <Section title="Contact" subtitle="Parlez-nous de votre projet">
        <form className="max-w-xl space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input
              name="name"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
          {status === "loading" && (
            <p className="text-sm text-gray-600">Envoi en cours…</p>
          )}
          {status === "success" && (
            <p className="text-sm text-green-700">Message envoyé. Merci !</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">
              Erreur. Veuillez réessayer plus tard.
            </p>
          )}
        </form>
      </Section>
      <Footer />
    </>
  );
}

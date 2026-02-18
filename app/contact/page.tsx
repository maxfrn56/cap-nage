"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = {
      prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value,
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue. Réessayez.");
        return;
      }
      setSent(true);
      form.reset();
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Section variant="azur" animate={false} className="pt-24 pb-0">
        <Container>
          <Title
            as="h1"
            subtitle="Une question, un projet ? Envoyez-moi un message."
            align="center"
          >
            Contact
          </Title>
          <div className="mt-10 sm:mt-12 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
        </Container>

        <Container className="mt-14 sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Bloc coordonnées — carte avec pastilles */}
            <motion.aside
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={containerVariants}
              className="lg:col-span-4"
            >
              <div className="rounded-3xl bg-white p-8 shadow-soft border border-indigo/10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-10 rounded-full bg-indigo" />
                  <span className="font-raleway text-indigo text-sm uppercase tracking-wide">Coordonnées</span>
                </div>
                <p className="font-radley text-xl text-indigo mb-8">
                  BOUCHET Alizée<br />
                  <span className="text-lg text-cyan">Cap&apos;nage bien Être en milieu aquatique</span>
                </p>
                <a
                  href="mailto:capalizeey@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl bg-cream/60 hover:bg-cream border border-cream p-4 transition-colors mb-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo/10 text-indigo group-hover:bg-indigo group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-raleway text-xs uppercase text-cyan/80">Par mail</span>
                    <p className="font-raleway text-cyan group-hover:text-indigo transition-colors">capalizeey@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+33651357550"
                  className="group flex items-center gap-4 rounded-2xl bg-cream/60 hover:bg-cream border border-cream p-4 transition-colors mb-8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo/10 text-indigo group-hover:bg-indigo group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-raleway text-xs uppercase text-cyan/80">Par téléphone</span>
                    <p className="font-raleway text-cyan group-hover:text-indigo transition-colors">06 51 35 75 50</p>
                  </div>
                </a>
                <div className="mt-auto pt-4 border-t border-indigo/10">
                  <span className="font-raleway text-xs uppercase text-cyan/80 block mb-3">Réseaux sociaux</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo/10 text-indigo hover:bg-indigo hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Formulaire — carte principale */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={containerVariants}
              className="lg:col-span-8"
            >
              <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-soft border border-indigo/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-10 rounded-full bg-indigo" />
                  <span className="font-raleway text-indigo text-sm uppercase tracking-wide">Envoyer un message</span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="prenom" className="block font-raleway font-medium text-cyan mb-2">
                        Prénom
                      </label>
                      <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-azur/40 bg-white text-cyan font-raleway focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="nom" className="block font-raleway font-medium text-cyan mb-2">
                        Nom
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-azur/40 bg-white text-cyan font-raleway focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-raleway font-medium text-cyan mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-azur/40 bg-white text-cyan font-raleway focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-raleway font-medium text-cyan mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-azur/40 bg-white text-cyan font-raleway focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-colors resize-y"
                    />
                  </div>
                  {error && (
                    <div className="rounded-2xl bg-red-50 border-2 border-red-200 p-4 text-center">
                      <p className="font-raleway text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  {sent ? (
                    <div className="rounded-2xl bg-azur/30 border-2 border-indigo/20 p-6 text-center">
                      <p className="font-radley text-lg text-indigo mb-1">Message envoyé</p>
                      <p className="font-raleway text-cyan text-sm">
                        Je vous répondrai au plus vite.
                      </p>
                    </div>
                  ) : (
                    <Button type="submit" variant="primary" size="lg" disabled={loading}>
                      {loading ? "Envoi en cours…" : "Envoyer le message"}
                    </Button>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Carte / Où me trouver */}
        <Container className="mt-16 sm:mt-24 pb-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 rounded-full bg-indigo" />
              <h2 className="font-radley text-xl sm:text-2xl text-indigo">Où me trouver</h2>
            </div>
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl bg-white/80 border border-indigo/10 shadow-soft flex items-center justify-center text-cyan/70 font-raleway text-sm sm:text-base">
              Carte Google Maps (placeholder) – Adresse à configurer
            </div>
          </motion.section>
        </Container>
      </Section>
    </>
  );
}

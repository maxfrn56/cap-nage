"use client";

import Script from "next/script";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/cap-nage";

const forfaits = [
  { sessions: 4, prix: 40, label: "4 sessions" },
  { sessions: 8, prix: 80, label: "8 sessions" },
  { sessions: 12, prix: 120, label: "12 sessions" },
];

export default function ReservationPage() {
  return (
    <>
      <Section variant="azur" animate={false} className="pt-24">
        <Container>
          <Title as="h1" subtitle="Choisissez un créneau directement dans le calendrier ci-dessous.">
            Réserver un créneau
          </Title>
        </Container>
        <div className="w-full mt-8 -mb-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden shadow-soft border border-indigo/10 bg-white"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />
          <p className="text-center font-raleway text-cyan/90 text-sm mt-4">
            Possibilité de dispenser les cours en Français, Anglais, Allemand, Italien.
          </p>
        </div>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </Section>

      <Section id="forfaits" variant="azur" animate className="pt-16">
        <Container>
          <Title
            as="h2"
            subtitle="Forfaits pour les cours collectifs aquasport (aquagym, circuit training, aquaboxing)."
          >
            Forfaits cours collectifs
          </Title>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {forfaits.map((f) => (
              <div
                key={f.sessions}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-hover transition-shadow text-center"
              >
                <p className="font-raleway text-cyan text-sm uppercase tracking-wide">
                  {f.label}
                </p>
                <p className="font-radley text-4xl text-indigo mt-2">
                  {f.prix}€
                </p>
                <p className="font-raleway text-cyan text-sm mt-1">
                  soit {Math.round((f.prix / f.sessions) * 10) / 10}€ / séance
                </p>
                <Button
                  href="/reservation"
                  variant="primary"
                  size="sm"
                  className="mt-6"
                >
                  Réserver
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center font-raleway text-cyan/80 text-xs sm:text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
            Pour les cours particuliers, les prestations sur mesure ou toute autre demande, le tarif peut être adapté selon votre besoin.{" "}
            <Link href="/contact" className="text-indigo hover:text-indigo/80 underline transition-colors">
              Contactez-moi
            </Link>{" "}
            pour un devis personnalisé.
          </p>
        </Container>
      </Section>
    </>
  );
}

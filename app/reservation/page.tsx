"use client";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

const forfaits = [
  { sessions: 4, prix: 50, label: "4 sessions" },
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
        {CALENDLY_URL ? (
          <div className="w-full mt-8 -mb-4">
            <iframe src={CALENDLY_URL} width="100%" height="100%" className="min-h-[700px] sm:min-h-[800px] lg:min-h-[900px] w-full border-0" title="Calendly – Réserver un créneau" />
          </div>
        ) : (
          <Container className="py-16">
            <div className="max-w-xl mx-auto text-center rounded-2xl bg-white/80 p-8 shadow-soft border-2 border-cream">
              <p className="font-raleway text-cyan text-lg mb-4">Le calendrier de réservation sera affiché ici une fois le compte Calendly configuré.</p>
              <p className="font-raleway text-cyan/80 text-sm">Ajoutez l&apos;URL de votre page Calendly dans .env.local avec la variable NEXT_PUBLIC_CALENDLY_URL.</p>
            </div>
          </Container>
        )}
      </Section>

      <Section id="forfaits" variant="azur" animate className="pt-16">
        <Container>
          <Title as="h2" subtitle="Choisissez le forfait qui vous correspond.">
            Forfaits
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
        </Container>
      </Section>
    </>
  );
}

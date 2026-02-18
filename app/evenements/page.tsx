"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

const evenements = [
  { date: "Mars 2025", titre: "Stage découverte enfants", description: "Un stage de 3 séances pour familiariser les enfants avec l'eau dans un cadre ludique et sécurisé.", type: "Stage" },
  { date: "Avril 2025", titre: "Atelier bien-être aquatique", description: "Une demi-journée dédiée au yoga aquatique et à la relaxation en piscine. Ouvert à tous.", type: "Atelier" },
  { date: "À venir", titre: "Évènements à venir", description: "D'autres ateliers et stages seront proposés au fil de l'année. Restez connectés !", type: "Évènement" },
];

export default function EvenementsPage() {
  return (
    <>
      <Section variant="white" animate={false} className="pt-24">
        <Container>
          <Title as="h1" subtitle="Ateliers, stages et moments spéciaux en milieu aquatique." align="center">
            Évènements
          </Title>
          <div className="mt-10 sm:mt-12 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
        </Container>
        <div className="w-full overflow-hidden mt-8 py-2">
          <div className="flex font-bebas text-cyan text-base sm:text-lg uppercase tracking-tight whitespace-nowrap w-max animate-marquee-from-right">
            <span className="px-8 sm:px-12 lg:px-16 shrink-0">Vous trouverez sur cette page tous les évènements à venir et ceux déjà réalisés. — Si vous avez une idée d&apos;évènement à proposer à Cap&apos;nage bien Être en milieu aquatique, contactez-nous&nbsp;!</span>
            <span className="px-8 sm:px-12 lg:px-16 shrink-0">Vous trouverez sur cette page tous les évènements à venir et ceux déjà réalisés. — Si vous avez une idée d&apos;évènement à proposer à Cap&apos;nage bien Être en milieu aquatique, contactez-nous&nbsp;!</span>
          </div>
        </div>
        <Container>
          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-indigo/20 -translate-x-1/2" />
            {evenements.map((ev, i) => (
              <motion.article
                key={ev.titre}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex gap-8 items-start mb-12 last:mb-0 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className="hidden sm:block sm:w-1/2" />
                <div className="sm:w-1/2 pl-12 sm:pl-0">
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-hover transition-shadow">
                    <span className="inline-block font-raleway text-xs uppercase text-indigo font-medium mb-2">{ev.type} · {ev.date}</span>
                    <h2 className="font-radley text-xl text-indigo mb-2">{ev.titre}</h2>
                    <p className="font-raleway text-cyan text-sm leading-relaxed">{ev.description}</p>
                    {ev.type !== "Évènement" && <Button href="/reservation" variant="outline" size="sm" className="mt-4">Réserver</Button>}
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-indigo border-4 border-white shadow -translate-x-1/2 top-6" aria-hidden />
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="font-raleway text-cyan mb-4">Pour être informé des prochains évènements, contactez-moi ou réservez un créneau.</p>
            <Button href="/contact" variant="primary" size="md">Me contacter</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

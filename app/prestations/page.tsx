import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Prestations | Cap'Nage – Bien-être en milieu aquatique",
  description:
    "Séances individuelles, séances collectives et prestations particulières. Découverte, perfectionnement, EVJF, anniversaire, brunch.",
};

const subBlocsIndividuelles = [
  { title: "Découverte du milieu aquatique", image: "/images/decouverte.jpg" },
  { title: "Perfectionnement", image: "/images/perfectionnement.jpg" },
  { title: "Préparations sportives", image: "/images/aquafitness.jpg" },
];

const subBlocsCollectives = [
  { title: "Séance Enfant", image: "/images/seance-enfant.jpg" },
  { title: "Séance Adulte", image: "/images/aquayoga.jpg" },
];

const subBlocsParticulieres = [
  { title: "EVJF", image: "/images/evjf.jpg" },
  { title: "Anniversaire", image: "/images/anniversaire.jpg" },
  { title: "Dimanche Brunch", image: "/images/brunch.jpg" },
  { title: "Surveillance lors d'événement familial", image: "/images/surveillance.jpg" },
];

const forfaits = [
  { sessions: 4, prix: 50, label: "4 sessions" },
  { sessions: 8, prix: 80, label: "8 sessions" },
  { sessions: 12, prix: 120, label: "12 sessions" },
];

function PrestationBloc({
  title,
  image,
  className = "",
  aspectClass = "aspect-[4/3]",
}: {
  title: string;
  image: string;
  className?: string;
  aspectClass?: string;
}) {
  return (
    <Link
      href="/reservation"
      className={`group relative block w-full min-h-[200px] overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      <div className={`relative w-full ${aspectClass} min-h-[200px]`}>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-colors flex items-end justify-center pb-6 pt-12">
          <h3 className="font-radley text-xl sm:text-2xl md:text-3xl text-white text-center px-4 drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-1 w-12 sm:w-16 rounded-full bg-indigo" />
      <h2 className="font-radley text-2xl sm:text-3xl text-indigo">
        {children}
      </h2>
    </div>
  );
}

export default function PrestationsPage() {
  return (
    <>
      <Section variant="azur" animate={false} className="pt-24 pb-0">
        <Container>
          <Title
            as="h1"
            subtitle="Des prestations adaptées à vos objectifs et à votre rythme."
            align="center"
          >
            Prestations
          </Title>
          <div className="mt-10 sm:mt-12 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
        </Container>

        {/* Séances Individuelles — Bento : 2 à gauche, 1 grande à droite */}
        <Container className="mt-14 sm:mt-20">
          <SectionHeader>Séances Individuelles</SectionHeader>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <PrestationBloc
                title={subBlocsIndividuelles[0].title}
                image={subBlocsIndividuelles[0].image}
              />
              <PrestationBloc
                title={subBlocsIndividuelles[1].title}
                image={subBlocsIndividuelles[1].image}
              />
            </div>
            <PrestationBloc
              title={subBlocsIndividuelles[2].title}
              image={subBlocsIndividuelles[2].image}
              aspectClass="aspect-[4/3] lg:aspect-[4/5] lg:min-h-[420px]"
            />
          </div>
        </Container>

        {/* Séances Collectives — 2 blocs côte à côte, style carte */}
        <Container className="mt-14 sm:mt-20">
          <SectionHeader>Séances Collectives</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {subBlocsCollectives.map((bloc) => (
              <PrestationBloc
                key={bloc.title}
                title={bloc.title}
                image={bloc.image}
                aspectClass="aspect-[5/4]"
              />
            ))}
          </div>
        </Container>

        {/* Prestations Particulières — Bento : 1 grande à gauche, 3 à droite */}
        <Container className="mt-14 sm:mt-20">
          <SectionHeader>Prestations Particulières</SectionHeader>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6">
            <PrestationBloc
              title={subBlocsParticulieres[0].title}
              image={subBlocsParticulieres[0].image}
              aspectClass="aspect-[4/3] lg:aspect-[4/5] lg:min-h-[420px]"
            />
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {subBlocsParticulieres.slice(1, 4).map((bloc) => (
                <PrestationBloc
                  key={bloc.title}
                  title={bloc.title}
                  image={bloc.image}
                  aspectClass="aspect-[3/1] sm:aspect-[4/1]"
                />
              ))}
            </div>
          </div>
        </Container>
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

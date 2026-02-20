import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { AnchorNav } from "@/components/AnchorNav";
import { ParallaxWhalesWrapper } from "@/components/ParallaxWhalesWrapper";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Séances individuelles, collectives et prestations particulières : découverte, perfectionnement, sport santé, EVJF, anniversaire, brunch. Forfaits et tarifs Cap'Nage.",
};

const subBlocsIndividuelles = [
  { title: "Découverte du milieu aquatique", image: "/images/decouverte-milieu-aqua.JPG" },
  { title: "Perfectionnement", image: "/images/perfectionnement.jpg" },
  { title: "Préparations sportives", image: "/images/preparation-sportive.jpeg" },
  { title: "Sport Santé - Sport adapté", image: "/images/sport-sante.jpg" },
];

const subBlocsCollectives = [
  { title: "Séance Enfant", image: "/images/seance-enfant.jpg" },
  { title: "Séance Adulte", image: "/images/aquayoga.jpg" },
  { title: "Séance Parents-Enfants", image: "/images/parent-enfant.jpg" },
];

const subBlocsParticulieres = [
  { title: "EVJF", image: "/images/evjf.jpg" },
  { title: "Anniversaire", image: "/images/anniversaire.jpg" },
  { title: "Dimanche Brunch", image: "/images/dimanche-brunch.jpg" },
  { title: "Surveillance lors d'événement familial", image: "/images/surveillance.JPG" },
];

const forfaitsIndividuelles = [
  { label: "Un cours particulier", prix: 35, sessions: 1 },
  { label: "5 séances", prix: 150, sessions: 5 },
];

const forfaitsCollectives = [
  { sessions: 4, prix: 50, label: "4 sessions" },
  { sessions: 8, prix: 80, label: "8 sessions" },
  { sessions: 12, prix: 120, label: "12 sessions" },
];

const prestationsParticulieresDevis = [
  { label: "Anniversaire" },
  { label: "EVJF" },
  { label: "Surveillance de piscine" },
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
    <div
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
    </div>
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
    <ParallaxWhalesWrapper>
      <Section variant="azur" animate={false} className="pt-24 pb-0">
        <Container>
          <Title
            as="h1"
            subtitle="Cap'nage bien Être en milieu aquatique, vous propose différentes formules, du cours particulier, cours collectifs, stages intensifs, prestations particulières, il y a forcément une formule pour vous !"
            align="center"
          >
            Prestations
          </Title>
          <div className="mt-10 sm:mt-12 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
          <AnchorNav
            links={[
              { href: "#seances-individuelles", label: "Séances Individuelles" },
              { href: "#seances-collectives", label: "Séances Collectives" },
              { href: "#prestations-particulieres", label: "Prestations Particulières" },
            ]}
          />
        </Container>

        {/* Séances Individuelles — Bento : 2 à gauche, 1 grande à droite */}
        <Container id="seances-individuelles" className="mt-14 sm:mt-20 scroll-mt-28">
          <SectionHeader>Séances Individuelles</SectionHeader>
          <div className="mb-8 sm:mb-10 rounded-2xl bg-white/80 border border-indigo/10 p-6 sm:p-8 shadow-soft max-w-4xl">
            <p className="font-radley text-lg sm:text-xl text-indigo mb-4">
              Cours particuliers
            </p>
            <p className="font-raleway text-cyan leading-relaxed mb-4">
              Que ce soit pour une première approche du milieu aquatique, aussi bien en piscine qu&apos;en océan, ou bien un objectif de performance. Mais aussi pour du sport santé ou du sport adapté, Cap&apos;nage bien Être en milieu aquatique s&apos;adapte à vos besoins.
            </p>
            <p className="font-raleway text-cyan leading-relaxed">
              Cours de 45 minutes à domicile, chez des amis, parents, grands-parents, piscine municipale ou à l&apos;océan.
            </p>
          </div>
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
            <div className="space-y-4 sm:space-y-6">
              <PrestationBloc
                title={subBlocsIndividuelles[2].title}
                image={subBlocsIndividuelles[2].image}
                aspectClass="aspect-[4/3]"
              />
              <PrestationBloc
                title={subBlocsIndividuelles[3].title}
                image={subBlocsIndividuelles[3].image}
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>
          <div className="mt-10 sm:mt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 sm:w-16 rounded-full bg-indigo" />
              <h3 className="font-radley text-2xl sm:text-3xl text-indigo">Forfaits</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {forfaitsIndividuelles.map((f) => (
                <div
                  key={f.label}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-hover transition-shadow text-center"
                >
                  <p className="font-raleway text-cyan text-sm uppercase tracking-wide">
                    {f.label}
                  </p>
                  <p className="font-radley text-4xl text-indigo mt-2">
                    {f.prix}€
                  </p>
                  {f.sessions > 1 && (
                    <p className="font-raleway text-cyan text-sm mt-1">
                      soit {f.prix / f.sessions}€ / séance
                    </p>
                  )}
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="mt-6"
                  >
                    Contactez-moi
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Séances Collectives — 2 blocs côte à côte, style carte */}
        <Container id="seances-collectives" className="mt-14 sm:mt-20 scroll-mt-28">
          <SectionHeader>Séances Collectives</SectionHeader>
          <div className="mb-8 sm:mb-10 rounded-2xl bg-white/80 border border-indigo/10 p-6 sm:p-8 shadow-soft max-w-4xl space-y-6">
            <p className="font-radley text-lg sm:text-xl text-indigo">
              Cours collectifs
            </p>
            <div>
              <p className="font-raleway text-cyan leading-relaxed mb-2">
                Cap&apos;nage bien Être en milieu aquatique vous propose des cours d&apos;aquafitness&nbsp;! À domicile, jusqu&apos;à 10 personnes selon la taille de votre piscine. Plusieurs cours sont proposés, selon votre envie&nbsp;: aquagym, circuit training, aquaboxing. Cours de 45 minutes, 10&nbsp;€/personne.
              </p>
            </div>
            <div>
              <p className="font-radley text-indigo text-base mb-1">Cours collectifs enfants</p>
              <p className="font-raleway text-cyan leading-relaxed">
                Il est aussi possible de faire des cours collectifs pour des enfants, âge et niveau initial semblable, 5 enfants maximum en même temps. Seulement à domicile. Cours de 45 minutes, prix sur demande.
              </p>
            </div>
            <div>
              <p className="font-radley text-indigo text-base mb-1">Cours collectifs Parents-Enfants</p>
              <p className="font-raleway text-cyan leading-relaxed">
                De même, nous vous proposons des cours collectifs Parents-Enfants&nbsp;: le but, vous accompagner avec des conseils et des exercices ludiques que vous pourrez continuer chez vous au quotidien. À domicile, maximum 10 personnes (enfants et parents confondus). Cours de 45 minutes, prix sur demande.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {subBlocsCollectives.map((bloc) => (
              <PrestationBloc
                key={bloc.title}
                title={bloc.title}
                image={bloc.image}
                aspectClass="aspect-[5/4]"
              />
            ))}
          </div>
          <div className="mt-10 sm:mt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 sm:w-16 rounded-full bg-indigo" />
              <h3 className="font-radley text-2xl sm:text-3xl text-indigo">Forfaits</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {forfaitsCollectives.map((f) => (
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
                    Réservez un créneau
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Prestations Particulières — Bento : 1 grande à gauche, 3 à droite */}
        <Container id="prestations-particulieres" className="mt-14 sm:mt-20 scroll-mt-28 pb-8 sm:pb-0">
          <SectionHeader>Prestations Particulières</SectionHeader>
          <div className="mb-8 sm:mb-10 rounded-2xl bg-white/80 border border-indigo/10 p-6 sm:p-8 shadow-soft max-w-4xl space-y-6">
            <p className="font-raleway text-cyan leading-relaxed">
              Cap&apos;nage bien Être en milieu aquatique vous propose plusieurs prestations particulières, telles que des animations et surveillance d&apos;enfants pour leur anniversaire.
            </p>
            <div>
              <p className="font-radley text-indigo text-base mb-1">Anniversaire</p>
              <p className="font-raleway text-cyan leading-relaxed">
                Prestation à domicile, jusqu&apos;à 10 enfants. Animation entre 2 et 3 heures selon l&apos;âge des enfants, animations adaptées à votre demande.
              </p>
            </div>
            <div>
              <p className="font-radley text-indigo text-base mb-1">EVJF</p>
              <p className="font-raleway text-cyan leading-relaxed">
                Formule qui contient un cours d&apos;aquafitness de votre choix, un cours de yoga et un brunch. Plutôt une prestation qui se fait en matinée. À domicile et jusqu&apos;à 12 personnes. Possibilité d&apos;ajouter une activité en plus telle qu&apos;un cours d&apos;Aquapilate.
              </p>
            </div>
            <div>
              <p className="font-radley text-indigo text-base mb-1">Surveillance de piscine</p>
              <p className="font-raleway text-cyan leading-relaxed">
                Surveillance de votre piscine lors de repas de famille, fête, pour pouvoir en profiter en toute tranquillité.
              </p>
            </div>
          </div>
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
          <div className="mt-10 sm:mt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 sm:w-16 rounded-full bg-indigo" />
              <h3 className="font-radley text-2xl sm:text-3xl text-indigo">Devis sur mesure</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {prestationsParticulieresDevis.map((p) => (
                <div
                  key={p.label}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-hover transition-shadow text-center"
                >
                  <p className="font-raleway text-cyan text-sm uppercase tracking-wide">
                    {p.label}
                  </p>
                  <p className="font-radley text-xl text-indigo mt-2">
                    Prix sur demande
                  </p>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="mt-6"
                  >
                    Demandez un devis
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </ParallaxWhalesWrapper>
  );
}

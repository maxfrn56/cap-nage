"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { PrestationsCarousel } from "@/components/PrestationsCarousel";

const valeurs = [
  {
    title: "Alignement",
    description:
      "Chaque séance est pensée pour s'adapter à vos objectifs et à votre rythme. Nous avançons ensemble vers un équilibre entre corps et bien-être.",
    image: "/images/alignement.jpg",
    imageLeft: true,
  },
  {
    title: "Présence",
    description:
      "L'eau invite à l'instant présent. Je vous accompagne pour développer une conscience du corps et une détente profonde en milieu aquatique.",
    image: "/images/presence.jpg",
    imageLeft: false,
  },
  {
    title: "Intégration",
    description:
      "Les bienfaits des séances se prolongent au quotidien. Mon approche vise à intégrer la confiance et le bien-être bien au-delà du bassin.",
    image: "/images/integration.jpg",
    imageLeft: true,
  },
];

const temoignages = [
  { quote: "Un accompagnement bienveillant qui m'a redonné confiance dans l'eau. Je recommande vivement.", author: "Marie L." },
  { quote: "Les séances enfants sont parfaites : ludiques et rassurantes. Mon fils a progressé en quelques semaines.", author: "Thomas D." },
  { quote: "Le yoga aquatique est une révélation. Je me sens détendue et en harmonie après chaque séance.", author: "Sophie M." },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const approcheRef = useRef<HTMLDivElement>(null);
  const prestationsRef = useRef<HTMLDivElement>(null);
  const temoignagesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: approcheProgress } = useScroll({
    target: approcheRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: prestationsProgress } = useScroll({
    target: prestationsRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: temoignagesProgress } = useScroll({
    target: temoignagesRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start start", "end start"],
  });

  const whaleYLeft = useTransform(heroProgress, [0, 1], [72, -72]);
  const whaleYRight = useTransform(heroProgress, [0, 1], [-72, 72]);

  const [waveFadeProgress, setWaveFadeProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const waveFadedRef = useRef(false);
  const accumulatedWheelRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 0;
      setIsAtTop(atTop);
      if (!atTop) {
        waveFadedRef.current = false;
        accumulatedWheelRef.current = 0;
        setWaveFadeProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY > 0) return;
      if (waveFadedRef.current) return;
      e.preventDefault();
      accumulatedWheelRef.current += e.deltaY;
      const progress = Math.min(1, Math.max(0, accumulatedWheelRef.current / 400));
      setWaveFadeProgress(progress);
      if (progress >= 1) waveFadedRef.current = true;
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const waveOpacity = isAtTop ? 1 - waveFadeProgress : 0;

  const whaleApprocheL = useTransform(approcheProgress, [0, 0.5, 1], [48, -24, -48]);
  const whaleApprocheR = useTransform(approcheProgress, [0, 0.5, 1], [-48, 24, 48]);
  const whalePrestationsL = useTransform(prestationsProgress, [0, 1], [56, -56]);
  const whalePrestationsR = useTransform(prestationsProgress, [0, 1], [-56, 56]);
  const whaleTemoignagesL = useTransform(temoignagesProgress, [0, 1], [48, -48]);
  const whaleTemoignagesR = useTransform(temoignagesProgress, [0, 1], [-48, 48]);
  const whaleCtaL = useTransform(ctaProgress, [0, 1], [40, -40]);
  const whaleCtaR = useTransform(ctaProgress, [0, 1], [-40, 40]);

  return (
    <>
      {/* Hero : pleine hauteur d'écran, logo centré, baleines de chaque côté */}
      <div ref={heroRef}>
        <Section variant="azur" animate={false} className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden relative">
          <div className="flex-1 flex flex-row items-center justify-center w-full max-w-6xl mx-auto gap-6 md:gap-10 lg:gap-14 px-4">
            <motion.div style={{ y: whaleYLeft }} className="hidden sm:flex flex-shrink-0 items-center justify-end w-32 md:w-44 lg:w-52">
              <Image
                src="/images/baleine-noir.svg"
                alt=""
                width={296}
                height={217}
                className="w-full h-auto -scale-x-100"
                aria-hidden
              />
            </motion.div>
            <div className="flex flex-col items-center justify-center flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Cap'Nage"
                width={280}
                height={120}
                className="w-48 sm:w-56 lg:w-64 h-auto"
                priority
              />
              <p className="font-raleway text-cyan text-center text-lg sm:text-xl mt-4 max-w-md">
                Bien-être en milieu aquatique
              </p>
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <Button href="/reservation" variant="primary" size="lg">Réserver un créneau</Button>
                <Button href="/prestations" variant="outline" size="lg">Choisissez votre activité</Button>
              </div>
            </div>
            <motion.div style={{ y: whaleYRight }} className="hidden sm:flex flex-shrink-0 items-center justify-start w-32 md:w-44 lg:w-52">
              <Image
                src="/images/baleine-noir.svg"
                alt=""
                width={296}
                height={217}
                className="w-full h-auto"
                aria-hidden
              />
            </motion.div>
          </div>
          {/* Vague animée en bas du hero : disparaît au premier scroll, puis la page défile */}
          <motion.div
            style={{ opacity: waveOpacity }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-0 left-0 right-0 w-full h-20 sm:h-28 flex items-end pointer-events-none"
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full text-white animate-wave-move flex-shrink-0"
              style={{ minHeight: "80px", width: "110%", marginLeft: "-5%" }}
            >
              <path
                fill="currentColor"
                d="M0,60 C300,120 600,0 900,60 C1050,90 1150,90 1200,60 L1200,120 L0,120 Z"
                opacity="0.6"
              />
              <path
                fill="currentColor"
                d="M0,80 C250,40 550,100 900,70 C1050,60 1150,50 1200,70 L1200,120 L0,120 Z"
                opacity="0.35"
              />
            </svg>
          </motion.div>
        </Section>
      </div>

      <Section variant="azur" animate className="px-0">
        <div ref={approcheRef} className="relative">
          <Container>
            <div className="pt-8 sm:pt-10 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
            <Title as="h2" align="center" className="mb-12 sm:mb-16 mt-8 sm:mt-10">
              Cap&apos;Nage c&apos;est&nbsp;:
            </Title>
          </Container>
          <motion.div style={{ y: whaleApprocheL }} className="absolute left-2 md:left-6 top-1/4 w-20 md:w-28 opacity-40 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto -scale-x-100" aria-hidden />
          </motion.div>
          <motion.div style={{ y: whaleApprocheR }} className="absolute right-2 md:right-6 bottom-1/4 w-20 md:w-28 opacity-40 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto" aria-hidden />
          </motion.div>
          {/* Image à gauche (légèrement décollée du bord), texte à droite — alignés en haut */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,42%)_1fr] w-full min-h-[360px] md:min-h-[480px] pl-4 md:pl-8 items-start">
            <div className="relative w-full h-80 md:h-full md:min-h-[480px]">
              <Image
                src="/images/lifeguard.JPG"
                alt="Bien être en milieu aquatique"
                fill
                className="object-contain object-left object-top"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="flex flex-col justify-start pt-16 md:pt-28 pb-12 md:pb-16 px-6 sm:px-10 lg:px-16 overflow-visible">
              <p className="font-raleway text-cyan leading-relaxed text-lg mb-6 mt-0">
                Cap&apos;nage provient de la contraction de «&nbsp;Capable de nager&nbsp;». Il est parfois dit&nbsp;: «&nbsp;c&apos;est trop tard pour moi d&apos;apprendre à nager&nbsp;», «&nbsp;Je suis nul(le)&nbsp;», «&nbsp;J&apos;ai peur, cela est peine perdue&nbsp;». Or, tout cela est faux&nbsp;! Il n&apos;y a pas d&apos;âge pour apprendre à nager, aucune peur n&apos;est insurmontable, l&apos;apprentissage de la natation n&apos;est pas si compliqué. Chaque problématique à sa solution. Et pour cela, Cap&apos;nage s&apos;adapte à chacun, en prenant le temps, avec bienveillance et différentes méthodes d&apos;apprentissage.
              </p>
              <p className="font-raleway text-cyan leading-relaxed text-lg mb-8">
                Bien Être en milieu aquatique, est l&apos;envie que chacun d&apos;entre vous se sente bien dans n&apos;importe quel milieu aquatique, avec vos objectifs variés. Que ce soit à l&apos;Océan, à la piscine, pour apprendre, ou bien performer, une reprise sportive, une activité douce pour maladie, le surf, sauvetage ou simplement par plaisir, tout est possible. Et cela dans la bonne humeur, avec des accompagnements développés en fonction de vous, qui peuvent être complétés par d&apos;autres suivis sportifs, vie quotidienne,&nbsp;…
              </p>
              <p className="font-raleway text-cyan leading-relaxed text-lg font-medium mb-8">
                Il n&apos;y a pas de limites, hormis celles que vous vous imposez&nbsp;!
              </p>
              <Button href="/qui-suis-je" variant="primary" size="md" className="w-fit mb-8">En savoir plus</Button>
              <div className="relative w-full max-w-[220px] aspect-[3/4] overflow-hidden ml-auto mr-20 md:mr-28 mt-16 md:mt-20">
                <Image
                  src="/images/ali-sauveteuse.JPG"
                  alt="Alizée sauveteuse"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="azur" animate>
        <div ref={prestationsRef} className="relative">
          <motion.div style={{ y: whalePrestationsL }} className="absolute left-2 md:left-8 top-8 w-16 md:w-24 opacity-30 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto -scale-x-100" aria-hidden />
          </motion.div>
          <motion.div style={{ y: whalePrestationsR }} className="absolute right-2 md:right-8 bottom-8 w-16 md:w-24 opacity-30 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto" aria-hidden />
          </motion.div>
          <Container>
            <div className="pt-8 sm:pt-10 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
            <Title as="h2" subtitle="Des prestations adaptées à vos objectifs et à votre rythme." className="text-center mb-4">
              Prestations
            </Title>
          </Container>
          <PrestationsCarousel />
        </div>
      </Section>

      <Section variant="azur" animate className="px-0">
        <Container>
          <div className="pt-8 sm:pt-10 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
          <Title as="h2" subtitle="Ce qui guide ma pratique." align="center" className="mb-12 sm:mb-16 mt-8 sm:mt-10">
            Valeurs
          </Title>
        </Container>
        {/* 3 blocs pleine largeur : image 50 % + texte 50 % */}
        <div className="w-full">
          {valeurs.map((v) => (
            <div
              key={v.title}
              className={`grid grid-cols-1 md:grid-cols-2 w-full min-h-[320px] md:min-h-[420px] ${v.imageLeft ? "" : "md:grid-flow-dense"}`}
            >
              {/* Image : moitié écran, sans cadre */}
              <div className={`relative w-full h-72 md:h-auto md:min-h-[420px] ${v.imageLeft ? "md:col-start-1" : "md:col-start-2"}`}>
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Texte : moitié écran */}
              <div className={`flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 md:py-16 bg-white ${v.imageLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
                <h3 className="font-radley text-2xl sm:text-3xl text-indigo mb-4">{v.title}</h3>
                <p className="font-raleway text-cyan leading-relaxed text-lg mb-8">{v.description}</p>
                <Button href="/reservation" variant="primary" size="md" className="w-fit">Réserver</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="azur" animate>
        <div ref={temoignagesRef} className="relative">
          <motion.div style={{ y: whaleTemoignagesL }} className="absolute left-2 md:left-8 top-8 w-16 md:w-24 opacity-30 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto -scale-x-100" aria-hidden />
          </motion.div>
          <motion.div style={{ y: whaleTemoignagesR }} className="absolute right-2 md:right-8 bottom-8 w-16 md:w-24 opacity-30 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto" aria-hidden />
          </motion.div>
          <Container>
            <Title as="h2" subtitle="Ils ont partagé leur expérience." align="center" className="mb-14 sm:mb-16">
              Témoignages
            </Title>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {temoignages.map((t, i) => {
                const isFeatured = i === 1;
                return (
                  <motion.blockquote
                    key={t.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`group relative flex flex-col rounded-2xl bg-white p-8 lg:p-10 shadow-soft border-l-4 border-indigo overflow-hidden transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 ${isFeatured ? "md:-mt-4 md:mb-4 md:shadow-soft-hover md:border-indigo/90" : ""}`}
                  >
                    <span className="absolute top-6 right-6 font-radley text-7xl lg:text-8xl text-indigo/10 leading-none select-none" aria-hidden>
                      "
                    </span>
                    <p className="font-raleway text-cyan text-base lg:text-lg leading-relaxed mb-8 relative z-10 pr-8">
                      {t.quote}
                    </p>
                    <div className="mt-auto flex items-center gap-4 relative z-10">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo/10 text-indigo font-radley text-lg font-medium">
                        {t.author.charAt(0)}
                      </span>
                      <cite className="font-raleway text-indigo font-medium not-italic">
                        {t.author}
                      </cite>
                    </div>
                  </motion.blockquote>
                );
              })}
            </div>
          </Container>
        </div>
      </Section>

      <Section id="cta" variant="azur" animate={false} wave="cyan" className="relative overflow-hidden">
        <div ref={ctaRef} className="relative">
          <motion.div style={{ y: whaleCtaL }} className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-24 md:w-32 opacity-40 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto -scale-x-100" aria-hidden />
          </motion.div>
          <motion.div style={{ y: whaleCtaR }} className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-24 md:w-32 opacity-40 pointer-events-none hidden sm:block">
            <Image src="/images/baleine-noir.svg" alt="" width={296} height={217} className="w-full h-auto" aria-hidden />
          </motion.div>
          <Container className="py-16 sm:py-20 text-center">
            <Title as="h2" subtitle="Prêt à plonger ?" align="center" className="mb-8">
              Réservez votre séance
            </Title>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/reservation" variant="primary" size="lg">Réserver un créneau</Button>
              <Button href="/contact" variant="outline" size="lg">Nous contacter</Button>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
}

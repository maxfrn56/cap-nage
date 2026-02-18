"use client";

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
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function QuiSuisJePage() {
  return (
    <>
      <Section variant="azur" animate={false} className="pt-24 pb-0">
        <Container>
          <Title
            as="h1"
            subtitle="Une passion pour l'eau et le bien-être en milieu aquatique."
            align="center"
          >
            Qui suis-je
          </Title>
          <div className="mt-10 sm:mt-12 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />
        </Container>

        {/* Portrait + intro — bento */}
        <Container className="mt-14 sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={containerVariants}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-soft-hover border-4 border-white/80">
                <div className="absolute inset-0 bg-gradient-to-br from-azur via-azur-dark to-indigo/20" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <span className="font-raleway text-white/90 text-center text-sm sm:text-base">
                    Photo portrait à ajouter
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 lg:right-4 w-24 h-24 rounded-2xl bg-indigo/90 flex items-center justify-center shadow-soft border-2 border-white" aria-hidden>
                <span className="font-radley text-3xl text-white">MNS</span>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={containerVariants}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-10 rounded-full bg-indigo" />
                <span className="font-raleway text-indigo text-sm uppercase tracking-wide">Présentation</span>
              </div>
              <h2 className="font-radley text-2xl sm:text-3xl text-indigo mb-4">
                Accompagner vers la confiance et le plaisir dans l&apos;eau
              </h2>
              <p className="font-raleway text-cyan leading-relaxed text-lg max-w-xl">
                Maître-nageuse sauveteur indépendante, j&apos;accompagne enfants et adultes dans leur rapport à l&apos;eau. Mon objectif : que chaque séance soit un pas de plus vers la confiance, le plaisir et le bien-être en milieu aquatique.
              </p>
              <Button href="/contact" variant="primary" size="md" className="mt-8 w-fit">
                Me contacter
              </Button>
            </motion.div>
          </div>
        </Container>

        {/* Citation — pleine largeur */}
        <Container className="mt-16 sm:mt-24">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative rounded-3xl bg-cream/90 backdrop-blur px-8 sm:px-12 lg:px-16 py-10 sm:py-14 border-l-4 border-indigo shadow-soft overflow-hidden"
          >
            <span className="absolute top-6 left-8 font-radley text-[6rem] sm:text-[8rem] leading-none text-indigo/10 select-none" aria-hidden>
              "
            </span>
            <p className="relative z-10 font-radley text-xl sm:text-2xl lg:text-3xl text-cyan italic leading-relaxed max-w-3xl">
              Accompagner vers l&apos;autonomie et le bien-être dans l&apos;eau, avec bienveillance et professionnalisme.
            </p>
          </motion.blockquote>
        </Container>

        {/* Ma vision + Approche — deux cartes */}
        <Container className="mt-16 sm:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.article
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={containerVariants}
              className="rounded-2xl bg-white p-8 shadow-soft hover:shadow-soft-hover transition-shadow border border-indigo/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-8 rounded-full bg-indigo" />
                <h3 className="font-radley text-xl sm:text-2xl text-indigo">Ma vision</h3>
              </div>
              <p className="font-raleway text-cyan leading-relaxed">
                L&apos;eau est un espace de liberté et de douceur. Que vous veniez pour apprendre à nager, vous tonifier ou vous ressourcer, je m&apos;adapte à votre rythme et à vos objectifs. Chaque personne est unique ; chaque accompagnement aussi.
              </p>
            </motion.article>

            <motion.article
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={containerVariants}
              className="rounded-2xl bg-white p-8 shadow-soft hover:shadow-soft-hover transition-shadow border border-indigo/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-8 rounded-full bg-indigo" />
                <h3 className="font-radley text-xl sm:text-2xl text-indigo">Approche pédagogique</h3>
              </div>
              <p className="font-raleway text-cyan leading-relaxed">
                J&apos;utilise une pédagogie positive et progressive : respect du rythme de chacun, mise en confiance, jeux et exercices adaptés. Les séances sont construites pour que vous vous sentiez en sécurité tout en progressant à votre mesure.
              </p>
            </motion.article>
          </div>
        </Container>

        {/* Certifications */}
        <Container className="mt-16 sm:mt-24 pb-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white/80 p-8 sm:p-10 shadow-soft border border-indigo/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-indigo" />
              <h3 className="font-radley text-xl sm:text-2xl text-indigo">Certifications</h3>
            </div>
            <ul className="font-raleway text-cyan space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo shrink-0" />
                <span>Diplôme d&apos;État de Maître-Nageur Sauveteur (BEESAN / BP JEPS AAN)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo shrink-0" />
                <span>Formations continues en pédagogie et bien-être aquatique</span>
              </li>
            </ul>
          </motion.section>
        </Container>
      </Section>
    </>
  );
}

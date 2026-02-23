"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { ParallaxWhalesWrapper } from "@/components/ParallaxWhalesWrapper";

const articles = [
  {
    id: "bienvenue-sur-le-blog",
    date: "Février 2026",
    titre: "Bienvenue sur le blog Cap'Nage !",
    description:
      "Retrouvez ici chaque mois un nouvel article sur le bien-être en milieu aquatique, des conseils, des anecdotes et des actualités Cap'Nage.",
    image: "/images/logo.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function BlogPage() {
  return (
    <ParallaxWhalesWrapper>
      <Section variant="azur" animate={false} className="pt-24 pb-16">
        <Container>
          <Title
            as="h1"
            subtitle="Actualités, conseils et réflexions autour du bien-être en milieu aquatique."
            align="center"
          >
            Blog
          </Title>
          <div
            className="mt-10 sm:mt-12 border-t border-indigo/25 max-w-2xl mx-auto"
            aria-hidden
          />
        </Container>

        <Container className="mt-14 sm:mt-20">
          {articles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <p className="font-raleway text-cyan text-lg">
                Les premiers articles arrivent bientôt…
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {articles.map((article, i) => (
                <motion.article
                  key={article.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={containerVariants}
                  className="group rounded-2xl bg-white shadow-soft hover:shadow-soft-hover transition-shadow border border-indigo/5 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-cream/50 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.titre}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span className="font-raleway text-xs uppercase text-indigo font-medium mb-2">
                      {article.date}
                    </span>
                    <h2 className="font-radley text-xl text-indigo mb-3">
                      {article.titre}
                    </h2>
                    <p className="font-raleway text-cyan text-sm leading-relaxed flex-1">
                      {article.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <div className="rounded-2xl bg-white/80 backdrop-blur p-8 sm:p-10 shadow-soft border border-indigo/5 max-w-2xl mx-auto">
              <h3 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                Restez informé
              </h3>
              <p className="font-raleway text-cyan leading-relaxed mb-6">
                Un nouvel article est publié chaque mois. Pour ne rien manquer,
                n&apos;hésitez pas à revenir régulièrement ou à me contacter pour
                échanger sur le bien-être en milieu aquatique.
              </p>
              <Button href="/contact" variant="primary" size="md">
                Me contacter
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </ParallaxWhalesWrapper>
  );
}

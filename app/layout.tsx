import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.capnage.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cap'Nage – Maître-nageur Pays Basque | Cours de natation Anglet, Biarritz, Bayonne",
    template: "%s | Cap'Nage – Pays Basque",
  },
  description:
    "Cap'Nage : cours de natation particuliers et collectifs au Pays Basque. Maître-nageur sauveteur à Anglet, Biarritz, Bayonne. Apprentissage enfants et adultes, aquafitness, préparation sportive, EVJF, anniversaires. Séances à domicile ou en piscine.",
  keywords: [
    "cours natation Pays Basque",
    "maître-nageur Anglet",
    "cours natation Biarritz",
    "cours natation Bayonne",
    "leçon natation particulier",
    "cours collectif natation",
    "apprentissage natation enfant",
    "aquafitness Pays Basque",
    "natation adulte débutant",
    "peur de l'eau",
    "Cap'Nage",
    "bien-être aquatique",
    "EVJF piscine",
    "anniversaire piscine",
    "surveillance baignade",
    "Côte Basque",
  ],
  authors: [{ name: "Cap'Nage", url: siteUrl }],
  creator: "Cap'Nage",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Cap'Nage – Maître-nageur Pays Basque",
    title: "Cap'Nage – Cours de natation au Pays Basque | Anglet, Biarritz, Bayonne",
    description:
      "Maître-nageur sauveteur au Pays Basque. Cours particuliers et collectifs de natation à Anglet, Biarritz, Bayonne. Enfants et adultes, à domicile ou en piscine.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Cap'Nage – Bien-être en milieu aquatique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cap'Nage – Maître-nageur Pays Basque",
    description: "Cours de natation particuliers et collectifs à Anglet, Biarritz, Bayonne. Enfants et adultes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-azur min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${siteUrl}/#business`,
              name: "Cap'Nage – Bien-être en milieu aquatique",
              alternateName: "Cap'Nage",
              description: "Maître-nageur sauveteur au Pays Basque. Cours de natation particuliers et collectifs à Anglet, Biarritz, Bayonne. Apprentissage enfants et adultes, aquafitness, préparation sportive, EVJF, anniversaires.",
              url: siteUrl,
              logo: `${siteUrl}/images/logo.png`,
              image: `${siteUrl}/images/logo.png`,
              email: "capalizeey@gmail.com",
              telephone: "+33651357550",
              address: {
                "@type": "PostalAddress",
                streetAddress: "48 route Aritxague",
                addressLocality: "Anglet",
                postalCode: "64600",
                addressRegion: "Pyrénées-Atlantiques",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.4833,
                longitude: -1.5167,
              },
              areaServed: [
                { "@type": "City", name: "Anglet" },
                { "@type": "City", name: "Biarritz" },
                { "@type": "City", name: "Bayonne" },
                { "@type": "AdministrativeArea", name: "Pays Basque" },
                { "@type": "AdministrativeArea", name: "Côte Basque" },
              ],
              priceRange: "€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "19:00",
              },
              sameAs: [],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Prestations Cap'Nage",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cours de natation particulier",
                      description: "Cours individuel de natation à domicile ou en piscine. Enfants et adultes, tous niveaux.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cours collectif de natation",
                      description: "Séances collectives : aquafitness, cours enfants, cours parents-enfants.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Prestations événementielles",
                      description: "EVJF, anniversaires, surveillance de piscine lors d'événements familiaux.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <SmoothScroll>
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

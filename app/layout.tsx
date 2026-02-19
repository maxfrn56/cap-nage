import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.capnage.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cap'Nage – Bien-être en milieu aquatique | Natation, aquafitness, Loire-Atlantique",
    template: "%s | Cap'Nage",
  },
  description:
    "Cap'Nage bien Être en milieu aquatique : cours de natation, aquafitness, yoga aquatique, séances enfants et adultes. Accompagnement personnalisé en Loire-Atlantique. Maître-nageur sauveteur.",
  keywords: [
    "Cap'Nage",
    "bien-être aquatique",
    "natation",
    "aquafitness",
    "yoga aquatique",
    "cours de natation",
    "maître-nageur",
    "Loire-Atlantique",
    "séances enfants",
    "apprentissage natation",
  ],
  authors: [{ name: "Cap'Nage", url: siteUrl }],
  creator: "Cap'Nage",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Cap'Nage – Bien-être en milieu aquatique",
    title: "Cap'Nage – Bien-être en milieu aquatique",
    description:
      "Natation, aquafitness, yoga aquatique et séances enfants. Accompagnement bienveillant en milieu aquatique en Loire-Atlantique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cap'Nage – Bien-être en milieu aquatique",
    description: "Natation, aquafitness, yoga aquatique. Accompagnement en milieu aquatique.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
              name: "Cap'Nage bien Être en milieu aquatique",
              description: "Cours de natation, aquafitness, yoga aquatique et accompagnement en milieu aquatique. Maître-nageur sauveteur en Loire-Atlantique.",
              url: siteUrl,
              email: "capalizeey@gmail.com",
              telephone: "+33651357550",
              areaServed: { "@type": "Place", name: "Loire-Atlantique" },
              priceRange: "€€",
            }),
          }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

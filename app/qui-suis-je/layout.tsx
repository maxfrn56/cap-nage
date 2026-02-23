import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui suis-je – Alizée, maître-nageur sauveteur",
  description:
    "Alizée, maître-nageur sauveteur diplômée au Pays Basque. Parcours, approche pédagogique et vision Cap'Nage. Cours de natation bienveillants à Anglet, Biarritz, Bayonne.",
};

export default function QuiSuisJeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

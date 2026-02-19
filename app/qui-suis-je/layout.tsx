import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui suis-je",
  description:
    "Alizée, maître-nageur sauveteur. Découvrez le parcours et l'approche Cap'Nage bien Être en milieu aquatique en Loire-Atlantique.",
};

export default function QuiSuisJeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

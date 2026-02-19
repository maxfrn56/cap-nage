import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Évènements",
  description:
    "Ateliers, stages et évènements Cap'Nage en milieu aquatique. Découvrez les prochaines dates en Loire-Atlantique.",
};

export default function EvenementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Évènements | Cap'Nage – Bien-être en milieu aquatique",
  description: "Ateliers, stages et évènements en milieu aquatique.",
};

export default function EvenementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

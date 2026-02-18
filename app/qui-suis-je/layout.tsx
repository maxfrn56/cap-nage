import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui suis-je | Cap'Nage – Bien-être en milieu aquatique",
  description: "Présentation de l'accompagnement Cap'Nage en milieu aquatique.",
};

export default function QuiSuisJeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

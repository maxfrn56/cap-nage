import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Cap'Nage – Bien-être en milieu aquatique",
  description: "Mentions légales du site Cap'Nage bien Être en milieu aquatique.",
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

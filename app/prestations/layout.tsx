import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestations | Cap'Nage – Bien-être en milieu aquatique",
  description: "Natation, aquafitness, yoga aquatique, séances enfants. Forfaits et tarifs.",
};

export default function PrestationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

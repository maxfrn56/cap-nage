import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestations – Cours de natation et aquafitness",
  description:
    "Cours de natation particuliers et collectifs au Pays Basque. Séances enfants, adultes, aquafitness, préparation sportive. EVJF, anniversaires, surveillance piscine. Tarifs et forfaits à Anglet, Biarritz, Bayonne.",
};

export default function PrestationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

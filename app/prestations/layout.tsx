import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Séances individuelles, collectives et prestations particulières : natation, aquafitness, yoga aquatique, EVJF, anniversaire, brunch. Forfaits et tarifs.",
};

export default function PrestationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

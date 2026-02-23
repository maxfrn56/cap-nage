import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Réservation cours de natation",
  description:
    "Contactez Cap'Nage pour réserver un cours de natation au Pays Basque. Devis gratuit pour EVJF, anniversaires, surveillance. Anglet, Biarritz, Bayonne. Téléphone et email.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

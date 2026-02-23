import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservation – Réserver un cours de natation",
  description:
    "Réservez votre cours de natation au Pays Basque. Séances particulières ou collectives à Anglet, Biarritz, Bayonne. Créneaux disponibles, réponse rapide.",
};

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

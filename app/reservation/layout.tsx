import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservation | Cap'Nage – Bien-être en milieu aquatique",
  description: "Réservez votre créneau de natation, aquafitness ou yoga aquatique.",
};

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

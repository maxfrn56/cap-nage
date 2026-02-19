import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réservez votre créneau : cours de natation, aquafitness, yoga aquatique ou séance collective. Cap'Nage Loire-Atlantique.",
};

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

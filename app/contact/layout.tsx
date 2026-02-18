import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cap'Nage – Bien-être en milieu aquatique",
  description: "Contactez Cap'Nage pour toute question ou réservation.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

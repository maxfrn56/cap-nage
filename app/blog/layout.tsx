import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Conseils natation et bien-être aquatique",
  description:
    "Blog Cap'Nage : conseils natation, bien-être aquatique, actualités. Articles mensuels sur l'apprentissage de la natation au Pays Basque.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

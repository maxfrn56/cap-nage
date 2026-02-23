import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actualités, conseils et articles Cap'Nage sur le bien-être en milieu aquatique. Découvrez nos publications mensuelles.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

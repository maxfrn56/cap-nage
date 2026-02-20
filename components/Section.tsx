"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "azur" | "white" | "cream" | "transparent";
  /** Fade-in au scroll */
  animate?: boolean;
  /** Vague décorative en bas (couleur du fond de la section suivante) */
  wave?: "white" | "azur" | "cyan";
}

const variants = {
  azur: "bg-azur",
  white: "bg-white",
  cream: "bg-cream",
  transparent: "bg-transparent",
};

function WaveSvg({ color }: { color: "white" | "azur" | "cyan" }) {
  const colorClass =
    color === "white" ? "text-white" : color === "azur" ? "text-azur" : "text-cyan";
  return (
    <div className="wave-divider absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`absolute bottom-0 w-full h-16 sm:h-24 ${colorClass}`}
      >
        <path
          fill="currentColor"
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,90 1200,60 L1200,120 L0,120 Z"
          opacity="0.4"
        />
        <path
          fill="currentColor"
          d="M0,80 C250,40 550,100 900,70 C1050,60 1150,50 1200,70 L1200,120 L0,120 Z"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  variant = "azur",
  animate = true,
  wave,
}: SectionProps) {
  const sectionClass = `relative py-16 sm:py-20 lg:py-24 ${variants[variant]} ${wave ? "overflow-hidden" : ""} ${className}`;

  const content = (
    <>
      {children}
      {wave && <WaveSvg color={wave} />}
    </>
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        className={sectionClass}
        initial={{ opacity: 0, y: 28, scale: 0.995 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClass}>
      {content}
    </section>
  );
}

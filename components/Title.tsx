"use client";

import { motion } from "framer-motion";

interface TitleProps {
  as?: "h1" | "h2" | "h3";
  subtitle?: string;
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
}

export function Title({
  as: Tag = "h2",
  subtitle,
  align = "left",
  children,
  className = "",
}: TitleProps) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <motion.div
      className={`${alignClass} ${className}`.trim()}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag className="font-radley text-4xl sm:text-5xl lg:text-6xl text-indigo">
        {children}
      </Tag>
      {subtitle && (
        <motion.p
          className="font-raleway text-cyan mt-3 text-lg sm:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

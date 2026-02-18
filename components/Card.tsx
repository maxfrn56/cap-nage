"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  icon?: React.ReactNode;
  className?: string;
  index?: number;
  id?: string;
}

export function Card({
  title,
  description,
  href,
  cta = "Réserver",
  icon,
  className = "",
  index = 0,
  id,
}: CardProps) {
  const content = (
    <>
      {icon && (
        <div className="mb-4 text-indigo opacity-90">{icon}</div>
      )}
      <h3 className="font-radley text-xl sm:text-2xl text-indigo mb-2">
        {title}
      </h3>
      <p className="font-raleway text-cyan text-base leading-relaxed mb-6">
        {description}
      </p>
      {href && (
        <Button href={href} variant="primary" size="sm">
          {cta}
        </Button>
      )}
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      id={id}
      className={`rounded-2xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-soft-hover transition-shadow duration-300 ${className}`}
    >
      {content}
    </motion.article>
  );
}

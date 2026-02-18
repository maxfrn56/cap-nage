"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantClasses = {
  primary:
    "bg-indigo text-white hover:bg-indigo/90 shadow-soft hover:shadow-soft-hover border border-indigo",
  secondary:
    "bg-cyan text-white hover:bg-cyan/90 border border-cyan",
  outline:
    "bg-transparent text-indigo border-2 border-indigo hover:bg-indigo hover:text-white",
  ghost:
    "bg-transparent text-indigo hover:bg-indigo/10",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center font-raleway font-medium rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-indigo focus:ring-offset-2 disabled:opacity-50";

  const combinedClass = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

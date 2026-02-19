"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxWhalesWrapper({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const whaleYLeft = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const whaleYRight = useTransform(scrollYProgress, [0, 1], [-48, 48]);

  return (
    <div ref={sectionRef} className="relative">
      <motion.div
        style={{ y: whaleYLeft }}
        className="absolute left-2 md:left-8 top-8 w-16 md:w-24 opacity-40 pointer-events-none hidden sm:block z-10"
        aria-hidden
      >
        <Image
          src="/images/baleine-noir.svg"
          alt=""
          width={296}
          height={217}
          className="w-full h-auto -scale-x-100"
        />
      </motion.div>
      <motion.div
        style={{ y: whaleYRight }}
        className="absolute right-2 md:right-8 bottom-8 w-16 md:w-24 opacity-40 pointer-events-none hidden sm:block z-10"
        aria-hidden
      >
        <Image
          src="/images/baleine-noir.svg"
          alt=""
          width={296}
          height={217}
          className="w-full h-auto"
        />
      </motion.div>
      {children}
    </div>
  );
}

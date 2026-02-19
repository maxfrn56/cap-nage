"use client";

import Link from "next/link";
import Image from "next/image";

const duration = 55;

const prestations = [
  { id: "prestations-particulieres", title: "Prestations particulières", image: "/images/prestation-particulière.jpeg", href: "/prestations#prestations-particulieres" },
  { id: "seance-individuelle", title: "Séance individuelle", image: "/images/aquayoga.jpg", href: "/prestations#seance-individuelle" },
  { id: "seances-collectives", title: "Séances collectives", image: "/images/seance-enfant.jpg", href: "/prestations#seances-collectives" },
];

const buttonClass =
  "inline-flex items-center justify-center font-raleway font-medium rounded-xl transition-all duration-300 px-6 py-3 text-base bg-indigo text-white hover:bg-indigo/90 shadow-soft border border-indigo focus:outline-none focus:ring-2 focus:ring-indigo focus:ring-offset-2";

export function PrestationsCarousel() {
  return (
    <div className="w-full overflow-hidden py-8">
      <div
        className="flex gap-8"
        style={{
          animation: `prestationsScroll ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {[...prestations, ...prestations].map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className="group flex-shrink-0 w-[78vw] sm:w-[58vw] md:w-[38vw] lg:w-[26rem]"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-cream bg-cream shadow-soft">
              <Link href={p.href} className="absolute inset-0 z-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 78vw, 38vw"
                />
              </Link>
              <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 pointer-events-none">
                <span className="pointer-events-auto">
                  <Link href={p.href} className={buttonClass}>
                    Découvrir
                  </Link>
                </span>
              </div>
            </div>
            <Link href={p.href}>
              <h3 className="font-radley text-xl text-indigo mt-4 text-center group-hover:text-indigo/90">
                {p.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

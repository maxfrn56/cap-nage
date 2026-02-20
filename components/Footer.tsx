"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-cyan text-white overflow-hidden">
      <div
        className="absolute inset-0 hidden sm:flex items-center justify-end pr-[5%] opacity-20 pointer-events-none"
        aria-hidden
      >
        <Image
          src="/images/baleine-blanc.svg"
          alt=""
          width={400}
          height={200}
          className="w-[42vw] max-w-xl h-auto"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 sm:bg-transparent sm:px-0 sm:py-0">
            <Image
              src="/images/logo-footer.png"
              alt="Cap'Nage"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <nav className="grid grid-cols-2 gap-2 w-full max-w-xs sm:max-w-none sm:w-auto sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6">
            <Link href="/prestations" className="font-raleway text-sm sm:text-base text-white text-center rounded-lg border border-white/20 bg-white/10 px-3 py-2 hover:bg-white/20 transition-colors sm:bg-transparent sm:border-0 sm:px-0 sm:py-0 sm:rounded-none sm:text-white/90 sm:hover:text-white">
              Prestations
            </Link>
            <Link href="/evenements" className="font-raleway text-sm sm:text-base text-white text-center rounded-lg border border-white/20 bg-white/10 px-3 py-2 hover:bg-white/20 transition-colors sm:bg-transparent sm:border-0 sm:px-0 sm:py-0 sm:rounded-none sm:text-white/90 sm:hover:text-white">
              Évènements
            </Link>
            <Link href="/qui-suis-je" className="font-raleway text-sm sm:text-base text-white text-center rounded-lg border border-white/20 bg-white/10 px-3 py-2 hover:bg-white/20 transition-colors sm:bg-transparent sm:border-0 sm:px-0 sm:py-0 sm:rounded-none sm:text-white/90 sm:hover:text-white">
              Qui suis-je
            </Link>
            <Link href="/contact" className="font-raleway text-sm sm:text-base text-white text-center rounded-lg border border-white/20 bg-white/10 px-3 py-2 hover:bg-white/20 transition-colors sm:bg-transparent sm:border-0 sm:px-0 sm:py-0 sm:rounded-none sm:text-white/90 sm:hover:text-white">
              Contact
            </Link>
            <Link href="/reservation" className="col-span-2 font-raleway font-medium text-center px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors sm:col-span-1">
              Réserver
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/20 text-center font-raleway text-sm text-white/90">
          <p className="font-medium text-white">BOUCHET Alizée – Cap&apos;nage bien Être en milieu aquatique</p>
          <p className="mt-2">
            Par mail :{" "}
            <a href="mailto:capalizeey@gmail.com" className="hover:text-white transition-colors underline">
              capalizeey@gmail.com
            </a>
            {" · "}
            Par téléphone :{" "}
            <a href="tel:+33651357550" className="hover:text-white transition-colors underline">
              06 51 35 75 50
            </a>
          </p>
        </div>
        <p className="mt-8 text-center font-raleway text-sm text-white/70">
          © {new Date().getFullYear()} Cap&apos;nage – Bien-être en milieu aquatique
          {" · "}
          <Link href="/mentions-legales" className="text-white/70 hover:text-white transition-colors underline">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}

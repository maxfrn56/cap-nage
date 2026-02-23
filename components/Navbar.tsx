"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/prestations", label: "Prestations" },
  { href: "/blog", label: "Blog" },
  { href: "/qui-suis-je", label: "Qui suis-je" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // état initial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 md:bg-transparent backdrop-blur-sm border-b border-azur/20 md:border-transparent"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Fond vague desktop : la navbar entière prend une forme ondulée */}
      <div
        aria-hidden
        className={`hidden md:block pointer-events-none absolute inset-x-0 top-0 h-24 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-90"
        }`}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="white"
            d="M0,0 H1200 V74 C1090,96 980,90 850,72 C710,52 590,84 470,102 C320,125 170,114 0,88 Z"
          />
        </svg>
      </div>

      <nav className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between md:grid md:grid-cols-3 md:items-center md:gap-4">
        <Link href="/" className="flex items-center gap-3 justify-self-start">
          <Image
            src="/images/logo.png"
            alt=""
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-radley text-indigo text-xl sm:text-2xl tracking-tight">
              CAP&apos;NAGE
            </span>
            <span className="font-raleway text-[10px] sm:text-[11px] text-cyan/90 tracking-wide">
              Bien-être en
              <br />
              milieu aquatique
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {links.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`inline-block font-raleway transition-colors relative py-1 whitespace-nowrap after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-indigo after:transition-all after:duration-300 ${
                  active
                    ? "text-indigo font-medium after:w-full"
                    : "text-cyan hover:text-indigo after:w-0 hover:after:w-full"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4 justify-self-end">
          <Link
            href="/reservation"
            className="font-raleway font-medium px-5 py-2.5 rounded-xl bg-indigo text-white hover:bg-indigo/90 transition-colors"
          >
            Réserver
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-indigo hover:opacity-80 transition-opacity"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden justify-self-end inline-flex items-center justify-center w-11 h-11 rounded-xl border border-indigo/20 bg-white/80 text-indigo shadow-soft hover:bg-white transition-colors"
        >
          <span className="relative block w-5 h-5" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[18px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-t border-indigo/10 bg-white/95 backdrop-blur-sm shadow-soft transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none border-transparent shadow-none"
        }`}
      >
          <div
            className={`mx-auto max-w-6xl px-4 py-4 space-y-1 transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            {links.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 font-raleway transition-colors ${
                    active ? "bg-indigo/10 text-indigo font-medium" : "text-cyan hover:bg-indigo/5 hover:text-indigo"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="pt-3 mt-3 border-t border-indigo/10 flex items-center gap-3">
              <Link
                href="/reservation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-raleway font-medium px-4 py-2 rounded-lg bg-indigo text-white hover:bg-indigo/90 transition-colors"
              >
                Réserver
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-indigo/20 text-indigo hover:bg-indigo/5 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
    </header>
  );
}

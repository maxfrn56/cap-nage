"use client";

export function AnchorNav({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Sections de la page">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={(e) => handleClick(e, href)}
          className="font-raleway font-medium text-indigo hover:text-indigo/80 underline underline-offset-4 decoration-indigo/40 hover:decoration-indigo transition-colors cursor-pointer"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Kezdőlap" },
  { to: "/etlap", label: "Étlap" },
  { to: "/etterem", label: "Étterem" },
  { to: "/galeria", label: "Galéria" },
  { to: "/kapcsolat", label: "Kapcsolat" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-x flex items-center justify-between py-6">
        <Link to="/" className="group flex items-center gap-3 text-cream">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold font-display text-xl">
            Ö
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">Öreg Miskolcz</div>
            <div className="eyebrow text-[0.6rem] text-gold/80">Étterem · 1881</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-cream/85 transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+3646000000"
          className="hidden md:inline-flex items-center rounded-full border border-gold/60 px-5 py-2 text-sm text-cream transition hover:bg-gold hover:text-burgundy"
        >
          Asztalfoglalás
        </a>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-burgundy/95 backdrop-blur border-t border-gold/20">
          <nav className="container-x flex flex-col py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-cream/90 hover:text-gold py-1"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+3646000000" className="mt-2 inline-flex items-center justify-center rounded-full border border-gold/60 px-5 py-2.5 text-sm text-cream">
              Asztalfoglalás
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

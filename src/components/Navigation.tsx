"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#a-propos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[var(--color-cream)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-sand)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className={`font-[family-name:var(--font-dancing)] transition-colors duration-300 text-2xl font-semibold ${
                scrolled ? "text-[var(--color-earth)]" : "text-[var(--color-warm-white)]"
              }`}
            >
              Justine
            </span>
            <span
              className={`font-[family-name:var(--font-cormorant)] tracking-[0.2em] uppercase text-xs transition-colors duration-300 ${
                scrolled ? "text-[var(--color-terracotta)]" : "text-[var(--color-sand)]"
              }`}
            >
              Courtecuisse
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative font-[family-name:var(--font-lora)] text-sm tracking-wider transition-colors duration-300 ${
                  scrolled ? "text-[var(--color-earth-light)]" : "text-[var(--color-sand)]"
                } hover:text-[var(--color-terracotta)]`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-terracotta)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:justine.courtecuisse@hotmail.fr"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-[family-name:var(--font-lora)] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
              scrolled
                ? "border-[var(--color-terracotta)] text-[var(--color-terracotta)] hover:bg-[var(--color-terracotta)] hover:text-white"
                : "border-[var(--color-sand)]/60 text-[var(--color-warm-white)] hover:bg-white/10"
            }`}
          >
            Me contacter
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
              scrolled ? "text-[var(--color-earth)]" : "text-[var(--color-warm-white)]"
            }`}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 translate-x-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[var(--color-earth)]/95 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-[var(--color-cream)] flex flex-col justify-center px-12 transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-[var(--color-earth)] text-2xl"
            aria-label="Fermer"
          >
            ✕
          </button>
          <span className="font-[family-name:var(--font-dancing)] text-[var(--color-terracotta)] text-3xl mb-8">
            Menu
          </span>
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[var(--color-earth)] hover:text-[var(--color-terracotta)] transition-colors duration-300 italic"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--color-sand)]">
            <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)]">
              06.98.89.87.59
            </p>
            <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-terracotta)] mt-1">
              justine.courtecuisse@hotmail.fr
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
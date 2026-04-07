"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import { useState } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.2">
        <circle cx="32" cy="20" r="10" />
        <path d="M12 54c0-11 9-18 20-18s20 7 20 18" strokeLinecap="round" />
        <path d="M48 28c4 0 8 3 8 8" strokeLinecap="round" />
        <path d="M16 28c-4 0-8 3-8 8" strokeLinecap="round" />
      </svg>
    ),
    emoji: "🐾",
    name: "Comportementaliste Animalier",
    species: "Chien · Chat · Cheval",
    description:
      "Comprendre les comportements de votre animal et y apporter des solutions bienveillantes et durables. Une approche holistique adaptée à chaque espèce.",
    color: "var(--color-terracotta)",
    bg: "#fdf0ec",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.2">
        <path d="M32 12 L20 32 L32 28 L44 32 Z" strokeLinejoin="round" />
        <path d="M20 32 L32 52 L44 32" strokeLinejoin="round" />
        <circle cx="32" cy="8" r="4" />
        <path d="M28 8 L36 8" />
      </svg>
    ),
    emoji: "🐕",
    name: "Éducation Canine",
    species: "Chien",
    description:
      "Éducation positive et respectueuse pour construire une relation de confiance avec votre chien. Des méthodes douces qui valorisent le lien humain-animal.",
    color: "var(--color-sage-dark)",
    bg: "#edf3ea",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 44 Q20 20 32 16 Q44 20 52 44" strokeLinecap="round" />
        <path d="M32 16 L32 8" strokeLinecap="round" />
        <circle cx="32" cy="6" r="3" />
        <path d="M22 30 Q32 26 42 30" strokeLinecap="round" />
      </svg>
    ),
    emoji: "✨",
    name: "Communication Animale",
    species: "Chien · Chat · Cheval",
    description:
      "Une approche unique d'interprétation et de communication profonde avec les animaux. Comprendre leur ressenti, leurs besoins et leur langage intérieur.",
    color: "#8b7355",
    bg: "#f5f0e8",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 32 Q16 18 28 16 Q40 14 44 24 Q50 34 44 44 Q38 52 32 52 Q20 52 16 44 Z" />
        <path d="M26 28 Q32 24 38 28" strokeLinecap="round" />
        <circle cx="26" cy="32" r="2" fill="currentColor" stroke="none" />
        <circle cx="38" cy="32" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    emoji: "🏡",
    name: "Pet-sitting",
    species: "Domicile flexible",
    description:
      "Garde bienveillante à votre domicile ou chez moi. Votre animal dans un environnement rassurant, avec toute l'attention qu'il mérite.",
    color: "var(--color-terracotta-dark)",
    bg: "#f9ede9",
  },
];

const values = [
  { num: "3", label: "Espèces", desc: "Chien, chat & cheval" },
  { num: "∞", label: "Bienveillance", desc: "Approche positive" },
  { num: "11", label: "Ans", desc: "Baldo, mon compagnon" },
  { num: "1", label: "Passion", desc: "Le bien-être animal" },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="/" />

      {/* ========== HERO ========== */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-end overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 img-zoom-wrap">
          <Image
            src="/assets/hero-new.jpg"
            alt="Justine Courtecuisse avec ses animaux"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient overlay — warm, bottom-heavy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(61,44,30,0.25) 0%, rgba(61,44,30,0.35) 40%, rgba(61,44,30,0.82) 80%, rgba(61,44,30,0.95) 100%)",
            }}
          />
          {/* Warm color tint at top */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(196,105,79,0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Floating badge top-right */}
        <div className="hero-badge absolute top-32 right-8 md:right-16 hidden md:block">
          <div className="relative w-28 h-28">
            <div
              className="w-28 h-28 rounded-full border border-[var(--color-sand)]/30 flex items-center justify-center rotate-slow"
              style={{ background: "rgba(250,246,240,0.05)" }}
            >
              <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                <defs>
                  <path
                    id="circle"
                    d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                  />
                </defs>
                <text className="text-[7px]" fill="rgba(250,246,240,0.6)" fontSize="6.5" letterSpacing="3.2">
                  <textPath href="#circle">
                    COMPORTEMENTALISTE · INTERPRÈTE · ANIMALIER ·
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl">🐾</span>
            </div>
          </div>
        </div>

        {/* Decorative vertical line */}
        <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-[var(--color-sand)]/20 to-transparent hidden lg:block" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="hero-cta mb-4">
              <span
                className="inline-flex items-center gap-3 font-[family-name:var(--font-lora)] text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--color-sand)" }}
              >
                <span className="w-8 h-px bg-[var(--color-terracotta)]" />
                Saint-Rémy-Lès-Chevreuse
              </span>
            </div>

            {/* Main title */}
            <h1 className="hero-title font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] font-light text-[var(--color-warm-white)] mb-4">
              <span className="block">Justine</span>
              <span className="block font-medium italic text-[var(--color-sand)]">
                Courtecuisse
              </span>
            </h1>

            {/* Tagline */}
            <div className="hero-subtitle mb-8">
              <p
                className="font-[family-name:var(--font-dancing)] text-[clamp(1.2rem,3vw,1.8rem)]"
                style={{ color: "var(--color-terracotta-light)" }}
              >
                Comportementaliste & Interprète Animalier
              </p>
              <p
                className="font-[family-name:var(--font-lora)] text-sm tracking-[0.2em] uppercase mt-2"
                style={{ color: "rgba(232, 213, 190, 0.7)" }}
              >
                Chien · Chat · Cheval
              </p>
            </div>

            {/* CTA buttons */}
            <div className="hero-cta flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <span>Prendre rendez-vous</span>
              </a>
              <a href="#services" className="btn-outline">
                Découvrir mes services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase text-[var(--color-sand)]/50">
            Défiler
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--color-sand)]/30 to-transparent" />
        </div>
      </section>

      {/* ========== MARQUEE STRIP ========== */}
      <div
        className="overflow-hidden py-4 border-y border-[var(--color-sand-dark)]"
        style={{ background: "var(--color-mist)" }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[
                "Comportementaliste Animalier",
                "Éducation Canine",
                "Communication Animale",
                "Pet-Sitting",
                "Chien · Chat · Cheval",
                "Approche Bienveillante",
                "Saint-Rémy-Lès-Chevreuse",
              ].map((text) => (
                <span key={text} className="flex items-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-base font-medium tracking-widest uppercase text-[var(--color-earth-light)] whitespace-nowrap px-8">
                    {text}
                  </span>
                  <span className="text-[var(--color-terracotta)] text-lg">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========== ABOUT / WHO AM I ========== */}
      <section
        id="a-propos"
        className="py-28 md:py-36 overflow-hidden"
        style={{ background: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image side */}
            <div
              className="relative"
              data-animate="fade-left"
            >
              {/* Dot pattern bg */}
              <div
                className="absolute -top-8 -left-8 w-48 h-48 dot-pattern opacity-40 rounded-full"
                aria-hidden="true"
              />

              {/* Main photo */}
              <div className="photo-frame relative z-10">
                <div
                  className="relative overflow-hidden img-zoom-wrap"
                  style={{
                    borderRadius: "2px",
                    aspectRatio: "3/4",
                    maxHeight: "580px",
                  }}
                >
                  <Image
                    src="/assets/hero.jpg"
                    alt="Justine Courtecuisse avec Baldo"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Color overlay */}
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-20"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-terracotta) 0%, transparent 60%)",
                    }}
                  />
                </div>
              </div>

              {/* Floating info card */}
              <div
                className="absolute -bottom-6 -right-4 md:right-8 z-20 bg-[var(--color-warm-white)] shadow-xl p-5 max-w-[200px] float-element"
                style={{ borderLeft: "3px solid var(--color-terracotta)" }}
              >
                <p className="font-[family-name:var(--font-dancing)] text-[var(--color-terracotta)] text-lg">
                  Baldo & moi
                </p>
                <p className="font-[family-name:var(--font-lora)] text-xs text-[var(--color-earth-light)] mt-1 leading-relaxed">
                  Croisé Berger, 11 ans,
                  35 kg — mon plus grand professeur
                </p>
              </div>

              {/* Decorative circle */}
              <div
                className="absolute -bottom-16 left-8 w-32 h-32 rounded-full opacity-15 float-element-delayed"
                style={{ background: "var(--color-sage)" }}
                aria-hidden="true"
              />
            </div>

            {/* Content side */}
            <div>
              <span
                className="section-badge"
                data-animate="fade-up"
              >
                Qui suis-je ?
              </span>
              <h2
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-tight text-[var(--color-earth)] mb-6"
                data-animate="fade-up"
                data-delay="100"
              >
                Une passion
                <span className="italic text-[var(--color-terracotta)]"> transformée</span>
                <br />
                en vocation
              </h2>

              <div
                className="space-y-5 font-[family-name:var(--font-lora)] text-[var(--color-earth-light)] leading-relaxed"
                data-animate="fade-up"
                data-delay="200"
              >
                <p className="text-base">
                  Passionnée par les animaux depuis toute petite, je les ai toujours 
                  considérés comme mes frères et sœurs. Ils ont fait partie de ma vie 
                  de façon aussi naturelle que le souffle.
                </p>
                <p className="text-base">
                  Après un parcours dans le{" "}
                  <strong className="font-semibold text-[var(--color-earth)]">Commerce International</strong>,
                  j'ai eu le courage de tout réorienter pour réaliser mon rêve d'enfant : 
                  devenir <strong className="font-semibold text-[var(--color-earth)]">Comportementaliste Animalier</strong>.
                </p>
                <p className="text-base">
                  Mon compagnon{" "}
                  <strong className="font-semibold text-[var(--color-earth)]">Baldo</strong>, 
                  croisé Berger de 11 ans et 35 kg, m'a appris plus sur la communication 
                  animale que n'importe quel livre — et il continue chaque jour.
                </p>
              </div>

              {/* Quote accent */}
              <blockquote
                className="mt-8 accent-sidebar"
                data-animate="fade-up"
                data-delay="300"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[var(--color-earth)] leading-relaxed">
                  "Chaque animal a quelque chose à nous dire. 
                  Mon rôle est de vous aider à l'entendre."
                </p>
              </blockquote>

              {/* USPs */}
              <div
                className="mt-10 grid grid-cols-2 gap-4"
                data-animate="fade-up"
                data-delay="400"
              >
                {[
                  "Approche multiespèces",
                  "Communication animale",
                  "Méthodes bienveillantes",
                  "Reconversion passionnée",
                ].map((usp) => (
                  <div key={usp} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--color-terracotta)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)]">
                      {usp}
                    </span>
                  </div>
                ))}
              </div>

              <div data-animate="fade-up" data-delay="500" className="mt-10">
                <a href="#contact" className="btn-primary">
                  <span>Me contacter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS / VALUES BAR ========== */}
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--color-terracotta-dark) 0%, var(--color-terracotta) 50%, var(--color-terracotta-light) 100%)",
        }}
        className="py-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {values.map((v, i) => (
              <div
                key={v.label}
                className="text-center"
                data-animate="fade-up"
                data-delay={`${i * 100}`}
              >
                <div className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,6vw,4.5rem)] font-light text-[var(--color-warm-white)] leading-none">
                  {v.num}
                </div>
                <div className="font-[family-name:var(--font-lora)] text-sm tracking-widest uppercase text-[var(--color-warm-white)] mt-2 opacity-90">
                  {v.label}
                </div>
                <div className="font-[family-name:var(--font-lora)] text-xs text-[var(--color-warm-white)] opacity-60 mt-1 italic">
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== SERVICES ========== */}
      <section
        id="services"
        className="py-28 md:py-36"
        style={{ background: "var(--color-mist)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section header */}
          <div className="text-center mb-20">
            <span
              className="section-badge text-center block"
              data-animate="fade-up"
            >
              Ce que je propose
            </span>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-light text-[var(--color-earth)] leading-tight"
              data-animate="fade-up"
              data-delay="100"
            >
              Mes{" "}
              <span className="italic text-[var(--color-terracotta)]">Services</span>
            </h2>
            <div
              className="w-24 h-px bg-[var(--color-terracotta)] mx-auto mt-6 opacity-50"
              data-animate="scale-up"
              data-delay="200"
            />
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div
                key={service.name}
                className="service-card group relative overflow-hidden p-8 md:p-10"
                style={{ background: service.bg, borderRadius: "2px" }}
                data-animate="fade-up"
                data-delay={`${i * 100}`}
              >
                {/* Top decorative line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: service.color }}
                />

                {/* Background emoji watermark */}
                <div
                  className="absolute -bottom-4 -right-4 text-[8rem] opacity-[0.04] select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {service.emoji}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>

                  <div className="mb-1">
                    <span
                      className="font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase"
                      style={{ color: service.color, opacity: 0.7 }}
                    >
                      {service.species}
                    </span>
                  </div>

                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-medium text-[var(--color-earth)] mb-4 leading-tight"
                  >
                    {service.name}
                  </h3>

                  <p className="font-[family-name:var(--font-lora)] text-[var(--color-earth-light)] text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 group/link">
                    <a
                      href="#contact"
                      className="font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase transition-colors duration-300"
                      style={{ color: service.color }}
                    >
                      En savoir plus
                    </a>
                    <svg
                      className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1"
                      style={{ color: service.color }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div
            className="text-center mt-12"
            data-animate="fade-up"
          >
            <p className="font-[family-name:var(--font-lora)] text-sm italic text-[var(--color-earth-light)] opacity-70">
              Certification Comportementaliste Animalier en cours d'obtention
            </p>
          </div>
        </div>
      </section>

      {/* ========== SPECIES SHOWCASE ========== */}
      <section
        className="py-28 md:py-36 overflow-hidden relative"
        style={{ background: "var(--color-cream)" }}
      >
        {/* Background decoration */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: "var(--color-sage)", filter: "blur(80px)" }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="section-badge" data-animate="fade-up">
              Mon approche
            </span>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,4.5vw,4rem)] font-light text-[var(--color-earth)]"
              data-animate="fade-up"
              data-delay="100"
            >
              Une approche{" "}
              <span className="italic text-[var(--color-terracotta)]">multiespèces</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                animal: "Chien",
                emoji: "🐕",
                desc: "Éducation positive, résolution de troubles comportementaux, renforcement du lien humain-animal.",
                color: "var(--color-terracotta)",
              },
              {
                animal: "Chat",
                emoji: "🐈",
                desc: "Compréhension des comportements félins, gestion des conflits, enrichissement de l'environnement.",
                color: "var(--color-sage-dark)",
              },
              {
                animal: "Cheval",
                emoji: "🐎",
                desc: "Communication équine, travail sur la relation cavalier-cheval, comportement en liberté.",
                color: "#8b7355",
              },
            ].map((item, i) => (
              <div
                key={item.animal}
                className="text-center group"
                data-animate="fade-up"
                data-delay={`${i * 150}`}
              >
                {/* Circle with emoji */}
                <div className="relative mx-auto mb-6">
                  <div
                    className="w-28 h-28 rounded-full mx-auto flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <span className="text-5xl">{item.emoji}</span>
                  </div>
                  {/* Orbit ring */}
                  <div
                    className="absolute inset-0 w-28 h-28 mx-auto rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-slow"
                    style={{ borderColor: item.color, borderStyle: "dashed" }}
                  />
                </div>

                <h3
                  className="font-[family-name:var(--font-cormorant)] text-3xl font-medium mb-3"
                  style={{ color: item.color }}
                >
                  {item.animal}
                </h3>
                <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)] leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FULL-WIDTH PHOTO BANNER ========== */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="/assets/quote-bg.jpg"
          alt="Nature et animaux"
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(61,44,30,0.85) 0%, rgba(61,44,30,0.4) 50%, rgba(196,105,79,0.5) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center px-8 md:px-20">
          <div className="max-w-2xl">
            <p
              className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,4vw,3.5rem)] text-[var(--color-warm-white)] italic font-light leading-tight"
              data-animate="fade-left"
            >
              "Parce que vos animaux méritent
              d'être entendus et compris."
            </p>
            <span
              className="block mt-4 font-[family-name:var(--font-lora)] text-sm tracking-widest uppercase text-[var(--color-sand)] opacity-80"
              data-animate="fade-left"
              data-delay="200"
            >
              — Justine Courtecuisse
            </span>
          </div>
        </div>
      </div>


      {/* ========== AVIS CLIENTS ========== */}
      <section
        id="avis"
        className="py-28 md:py-36"
        style={{ background: "var(--color-mist)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="section-badge">Témoignages</span>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-light text-[var(--color-earth)] leading-tight mt-4 mb-4"
            >
              Ce que disent{" "}
              <span className="italic text-[var(--color-terracotta)]">mes clients</span>
            </h2>
            {/* Rating summary */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className={`w-6 h-6 ${s <= 4 ? "text-[var(--color-terracotta)]" : "text-[var(--color-sand)]"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[var(--color-earth)]">4,7</span>
              <span className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)] opacity-70">/ 5 · 71 avis Google</span>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sixtine K.",
                date: "Août 2025",
                text: "Justine s'est occupée de notre chat pendant 1 mois. Nous avons apprécié les messages et vidéos rassurantes en notre absence. Justine est très rigoureuse et sérieuse. Tout est clair et bien pensé avant la prise en charge de notre animal.",
                rating: 5,
              },
              {
                name: "Ysmérie L.",
                date: "Août 2025",
                text: "Nous avons rencontré Justine pour un bilan comportemental avec notre Bengal Zarya, qui avait peur de mon compagnon. Grâce à ses précieux conseils et son accompagnement bienveillant, la relation entre eux s'est transformée. Je recommande vivement !",
                rating: 5,
              },
              {
                name: "Delphine S.",
                date: "Août 2025",
                text: "Je recommande Justine à 100 %. Partis 2 semaines en laissant nos 3 chats dont une de 15 ans sous médicaments, je n'étais pas rassurée. Justine a été d'une compétence et d'une bienveillance remarquables.",
                rating: 5,
              },
              {
                name: "Philippe Z.",
                date: "Août 2025",
                text: "Justine s'occupe de notre chat fréquemment depuis plus de 2 ans. Je la recommande fortement pour son sérieux, son professionnalisme, son investissement, sa bienveillance et sa gentillesse tant avec les animaux qu'avec leur maître.",
                rating: 5,
              },
              {
                name: "Valérie M.",
                date: "Août 2025",
                text: "Justine s'est occupée de mes deux chats cet été avec beaucoup d'attentions. Elle m'a partagé ses visites quotidiennes avec l'envoi de vidéos. Caresses, jeux, Justine est très attentionnée auprès de mes 2 loulous.",
                rating: 5,
              },
              {
                name: "Sylvain B.",
                date: "Août 2025",
                text: "Cela fait déjà quelques temps que nous sollicitons Justine pour ses services ! Elle offre un service de qualité et s'adapte aux contraintes exceptionnelles. Vraiment, je la recommande vivement !",
                rating: 5,
              },
              {
                name: "Anya O.",
                date: "Août 2025",
                text: "C'est la deuxième fois que nous faisons appel à Justine pour la garde de nos chats, et nous en sommes toujours aussi ravis. Elle nous envoie des nouvelles quotidiennes avec photos et vidéos — on part sereinement.",
                rating: 5,
              },
              {
                name: "Cyrille",
                date: "Juin 2025",
                text: "Justine est passée garder nos trois chats. Elle est ponctuelle, prend des photos et des vidéos, et tout est impeccable.",
                rating: 5,
              },
              {
                name: "Marie-Laure B.",
                date: "Avril 2025",
                text: "Justine a gardé nos deux chats à deux reprises. Elle est très sérieuse et bienveillante, envoie des photos et vidéos à chaque passage, et passe du temps pour des jeux et des câlins. Nous sommes partis en toute confiance.",
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-[var(--color-warm-white)] p-7 flex flex-col gap-4"
                style={{ borderRadius: "2px" }}
                data-animate="fade-up"
                data-delay={String(i * 60)}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[var(--color-terracotta)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Text */}
                <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)] leading-relaxed flex-1 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--color-sand)]/20">
                  <span className="font-[family-name:var(--font-cormorant)] text-base text-[var(--color-earth)] font-medium">
                    {review.name}
                  </span>
                  <span className="font-[family-name:var(--font-lora)] text-xs text-[var(--color-earth-light)] opacity-50 tracking-wide">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-16 text-center" data-animate="fade-up">
            <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)] opacity-60 tracking-widest uppercase mb-6">
              Retrouvez tous les avis &amp; actualités
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a
                href="https://www.facebook.com/JustineCourtecuisseCoach"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth)] hover:text-[var(--color-terracotta)] transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: "var(--color-terracotta)", borderRadius: "2px" }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/justine_courtecuisse/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth)] hover:text-[var(--color-terracotta)] transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: "var(--color-terracotta)", borderRadius: "2px" }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </div>
                Instagram
              </a>
              <a
                href="https://www.youtube.com/channel/UCOARckpVCoHJsPQW3-owhpQ/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth)] hover:text-[var(--color-terracotta)] transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: "var(--color-terracotta)", borderRadius: "2px" }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section
        id="contact"
        className="py-28 md:py-36"
        style={{ background: "var(--color-warm-white)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info side */}
            <div>
              <span className="section-badge" data-animate="fade-up">
                Prenons contact
              </span>
              <h2
                className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,4.5rem)] font-light text-[var(--color-earth)] leading-tight mb-6"
                data-animate="fade-up"
                data-delay="100"
              >
                Parlons de
                <span className="italic text-[var(--color-terracotta)]"> votre animal</span>
              </h2>

              <p
                className="font-[family-name:var(--font-lora)] text-base text-[var(--color-earth-light)] leading-relaxed mb-10 max-w-sm"
                data-animate="fade-up"
                data-delay="200"
              >
                Tu souhaites prendre rendez-vous, poser une question ou simplement 
                en savoir plus ? N'hésite pas à me contacter — je serai ravie d'échanger 
                avec toi à propos de ton compagnon.
              </p>

              {/* Contact details */}
              <div
                className="space-y-6"
                data-animate="fade-up"
                data-delay="300"
              >
                <a
                  href="tel:0698898759"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--color-terracotta)",
                      borderRadius: "2px",
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase text-[var(--color-earth-light)] opacity-60 mb-0.5">
                      Téléphone / SMS
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-earth)] group-hover:text-[var(--color-terracotta)] transition-colors">
                      06.98.89.87.59
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:justine.courtecuisse@hotmail.fr"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--color-sage)",
                      borderRadius: "2px",
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase text-[var(--color-earth-light)] opacity-60 mb-0.5">
                      Email
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--color-earth)] group-hover:text-[var(--color-terracotta)] transition-colors break-all">
                      justine.courtecuisse@hotmail.fr
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "var(--color-sand)",
                      borderRadius: "2px",
                    }}
                  >
                    <svg className="w-5 h-5 text-[var(--color-earth)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase text-[var(--color-earth-light)] opacity-60 mb-0.5">
                      Adresse
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--color-earth)] leading-tight">
                      22 Rue Pierre Chesneau<br />
                      <span className="text-base opacity-70">78470 Saint-Rémy-Lès-Chevreuse</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div
                className="mt-10 flex gap-4"
                data-animate="fade-up"
                data-delay="400"
              >
                <a
                  href="https://www.instagram.com/justine_courtecuisse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)] hover:text-[var(--color-terracotta)] transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                  Instagram
                </a>
                <span className="text-[var(--color-sand-dark)]">·</span>
                <a
                  href="https://www.facebook.com/JustineCourtecuisseCoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)] hover:text-[var(--color-terracotta)] transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>

            {/* Form side */}
            <div data-animate="fade-right">
              <div
                className="p-8 md:p-12"
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid var(--color-sand)",
                  borderRadius: "2px",
                }}
              >
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-6">✨</div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[var(--color-earth)] mb-3">
                      Merci pour votre message !
                    </h3>
                    <p className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-earth-light)]">
                      Je vous répondrai dans les meilleurs délais.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--color-earth)] mb-2 italic">
                      Envoyez-moi un message
                    </h3>
                    <p className="font-[family-name:var(--font-lora)] text-xs text-[var(--color-earth-light)] opacity-60 mb-8 tracking-wide">
                      Je vous répondrai dans les meilleurs délais
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label className="block font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase text-[var(--color-earth-light)] opacity-60 mb-2">
                          Nom & Prénom *
                        </label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="Votre nom complet"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <label className="block font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase text-[var(--color-earth-light)] opacity-60 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder="votre@email.fr"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <label className="block font-[family-name:var(--font-lora)] text-xs tracking-widest uppercase text-[var(--color-earth-light)] opacity-60 mb-2">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          className="form-input resize-none"
                          placeholder="Parlez-moi de votre animal et de votre besoin…"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full text-center">
                        <span>Envoyer le message</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
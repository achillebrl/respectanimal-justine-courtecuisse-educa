export default function Footer() {
  return (
    <footer className="bg-[var(--color-earth)] text-[var(--color-sand)] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-[var(--color-terracotta-dark)] via-[var(--color-terracotta)] to-[var(--color-sage)]" />

      {/* Organic background shape */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        style={{
          background: "radial-gradient(circle, var(--color-terracotta) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="font-[family-name:var(--font-dancing)] text-3xl text-[var(--color-warm-white)] block">
                Justine Courtecuisse
              </span>
              <span className="font-[family-name:var(--font-lora)] text-xs tracking-[0.25em] uppercase text-[var(--color-terracotta)] mt-1 block">
                Comportementaliste · Interprète Animalier
              </span>
            </div>
            <p className="font-[family-name:var(--font-lora)] text-sm leading-relaxed text-[var(--color-sand)]/70 max-w-xs">
              Accompagnement bienveillant pour chiens, chats et chevaux. 
              Parce que chaque animal mérite d'être compris.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/justine_courtecuisse/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[var(--color-sand)]/20 flex items-center justify-center hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/JustineCourtecuisseCoach"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[var(--color-sand)]/20 flex items-center justify-center hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--color-warm-white)] mb-6 italic">
              Mes Services
            </h4>
            <ul className="space-y-3">
              {[
                "Comportementaliste Animalier",
                "Éducation Canine",
                "Communication Animale",
                "Pet-sitting",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-terracotta)] flex-shrink-0" />
                  <span className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-sand)]/70 hover:text-[var(--color-sand)] transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--color-warm-white)] mb-6 italic">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-[var(--color-terracotta)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-sand)]/70 leading-relaxed">
                  22 Rue Pierre Chesneau<br />
                  78470 Saint-Rémy-Lès-Chevreuse
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[var(--color-terracotta)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                </svg>
                <a
                  href="tel:0698898759"
                  className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-sand)]/70 hover:text-[var(--color-terracotta)] transition-colors"
                >
                  06.98.89.87.59
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[var(--color-terracotta)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a
                  href="mailto:justine.courtecuisse@hotmail.fr"
                  className="font-[family-name:var(--font-lora)] text-sm text-[var(--color-sand)]/70 hover:text-[var(--color-terracotta)] transition-colors break-all"
                >
                  justine.courtecuisse@hotmail.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-sand)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-lora)] text-xs text-[var(--color-sand)]/40">
            © 2024 Justine Courtecuisse — Tous droits réservés
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[var(--color-terracotta)]" />
            <span className="font-[family-name:var(--font-cormorant)] text-sm italic text-[var(--color-sand)]/40">
              Comportementaliste Animalier · Saint-Rémy-Lès-Chevreuse
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-terracotta)]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

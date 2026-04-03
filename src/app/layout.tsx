import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Justine Courtecuisse — Comportementaliste & Interprète Animalier",
  description:
    "Comportementaliste animalier, éducation canine, communication animale et pet-sitting pour chiens, chats et chevaux. Saint-Rémy-Lès-Chevreuse.",
  keywords: ["comportementaliste", "éducation canine", "communication animale", "pet-sitting", "chien", "chat", "cheval"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${dancing.variable} ${lora.variable}`}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
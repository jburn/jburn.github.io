"use client";

import Background from "@/components/background";
import PofoHeader from "@/components/pofo-header";
import Hero from "@/components/hero";
import { defaultLanguage, type LanguageCode } from "@/content/site-content";
import { useEffect, useState } from "react";

export default function PortfolioSite() {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-zinc-100">
      <Background
        spriteSrc="/bruun.svg"
        spriteWidth={40}
        spriteHeight={40}
        columnGap={100}
        rowGap={6}
        opacity={0.08}
        rotation={-30}
        animationDuration={8}
      />
      <section className="relative z-10 min-h-screen">
        <PofoHeader language={language} onLanguageChange={setLanguage} />
        <Hero language={language} />
      </section>
    </main>
  );
}

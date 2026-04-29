"use client";

import Background from "@/components/background";
import Header from "@/components/header";

export default function PortfolioSiteStarter() {
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
        <Header />
      </section>
    </main>
  );
}

import LinkButton from "@/components/link-button";
import {
  professionalLinks,
  siteContent,
  type LanguageCode,
} from "@/content/site-content";

type HeroProps = {
  language: LanguageCode;
};

export default function Hero({ language }: HeroProps) {
  const content = siteContent[language].hero;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 pt-28 text-center">
      <h1 className="mt-5 text-4xl font-bold text-white sm:text-6xl md:text-7xl">
        {content.name}
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-200/86 sm:text-lg sm:leading-8">
        {content.intro}
      </p>
      <nav
        aria-label={content.professionalLinksLabel}
        className="mt-10 flex flex-wrap items-center justify-center gap-16"
      >
        {professionalLinks.map((link) => (
          <LinkButton
            key={link.label}
            href={link.href}
            iconSrc={link.iconSrc}
            label={link.label}
          />
        ))}
      </nav>
    </div>
  );
}

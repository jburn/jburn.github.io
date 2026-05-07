export type LanguageCode = "en" | "fi" | "nl";

export const defaultLanguage: LanguageCode = "en";

export const languages: {
  code: LanguageCode;
  flagSrc: string;
  label: string;
  shortLabel: string;
}[] = [
  { code: "en", flagSrc: "/flags/uk.svg", label: "English", shortLabel: "EN" },
  { code: "fi", flagSrc: "/flags/fi.svg", label: "Finnish", shortLabel: "FI" },
  { code: "nl", flagSrc: "/flags/nl.svg", label: "Dutch", shortLabel: "NL" },
];

export const siteContent: Record<
  LanguageCode,
  {
    hero: {
      intro: string;
      name: string;
      professionalLinksLabel: string;
    };
  }
> = {
  en: {
    hero: {
      name: "Juho Bruun",
      intro:
        "Software developer with a background in test engineering, interested in building engaging user experiences and reliable systems.",
      professionalLinksLabel: "Professional links",
    },
  },
  fi: {
    hero: {
      name: "Juho Bruun",
      intro:
        "Ohjelmistokehittäjä testausinsinöörin taustalla. Kiinnostuksena rakentaa mukaansatempaavia käyttökokemuksia ja luotettavia järjestelmiä.",
      professionalLinksLabel: "Ammatilliset linkit",
    },
  },
  nl: {
    hero: {
      name: "Juho Bruun",
      intro:
        "Softwareontwikkelaar met een achtergrond in test engineering, geïnteresseerd in het bouwen van boeiende gebruikerservaringen en betrouwbare systemen.",
      professionalLinksLabel: "Professionele links",
    },
  },
};

export const professionalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jburn",
    iconSrc: "/github.svg",
  },
  {
    label: "Email",
    href: "mailto:juho.bruun@iki.fi",
    iconSrc: "/email.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juhobruun",
    iconSrc: "/linkedin.svg",
  },
];

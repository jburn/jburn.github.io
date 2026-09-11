export const locales = ['en', 'fi'] as const;
export type Locale = typeof locales[number];
export type Page = 'home' | 'projects' | 'taste';
export type Localized = Record<Locale, string>;

export function pageUrl(locale: Locale, page: Page = 'home') {
  return `${locale === 'en' ? '/' : '/fi/'}${page === 'home' ? '' : `${page}/`}`;
}

export const translations = {
  en: {
    home: 'Home', projects: 'Projects', taste: 'Taste',
    skip: 'Skip to content', navigation: 'Main navigation', language: 'Language',
    theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark',
    role: 'Software developer',
    bio: 'Software developer with a background in test engineering, interested in building engaging user experiences and reliable systems.',
    explore: 'Explore my projects', contact: 'Get in touch',
    projectsIntro: 'A space for things I build, experiments, and lessons along the way.',
    tasteIntro: 'Music, films, and books. A little of what I enjoy outside of code.',
    emptyProjects: 'Project write-ups are coming soon.',
    emptyTaste: 'Favorites coming soon.',
    music: 'Music', film: 'Film', books: 'Books', view: 'View project',
    elsewhere: 'Find me elsewhere',
  },
  fi: {
    home: 'Etusivu', projects: 'Projektit', taste: 'Maku',
    skip: 'Siirry sisältöön', navigation: 'Päänavigaatio', language: 'Kieli',
    theme: 'Teema', system: 'Järjestelmä', light: 'Vaalea', dark: 'Tumma',
    role: 'Ohjelmistokehittäjä',
    bio: 'Ohjelmistokehittäjä, jolla on taustaa testauksessa. Olen kiinnostunut toimivista käyttökokemuksista ja luotettavista järjestelmistä.',
    explore: 'Tutustu projekteihini', contact: 'Ota yhteyttä',
    projectsIntro: 'Tekemiäni projekteja, kokeiluja ja matkan varrella opittua.',
    tasteIntro: 'Musiikkia, elokuvia ja kirjoja. Asioita, joista nautin koodin ulkopuolella.',
    emptyProjects: 'Projektiesittelyt ovat tulossa.',
    emptyTaste: 'Suosikkeja tulossa.',
    music: 'Musiikki', film: 'Elokuvat', books: 'Kirjat', view: 'Katso projekti',
    elsewhere: 'Muualla verkossa',
  },
} satisfies Record<Locale, Record<string, string>>;

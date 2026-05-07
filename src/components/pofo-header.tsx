import LanguageDropdown from "@/components/language-dropdown";
import type { LanguageCode } from "@/content/site-content";

type HeaderProps = {
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  spriteSrc?: string;
};

export default function PofoHeader({
  language,
  onLanguageChange,
  spriteSrc = "/bruun.svg",
}: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 flex items-start justify-between bg-gradient-to-b from-black/80 to-transparent px-6 pb-10 pt-4 sm:px-8">
      <div
        aria-label="Bruun"
        className="h-20 w-20 bg-white md:h-28 md:w-28"
        role="img"
        style={{
          maskImage: `url("${spriteSrc}")`,
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskImage: `url("${spriteSrc}")`,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
        }}
      />
      <LanguageDropdown
        selectedLanguage={language}
        onLanguageChange={onLanguageChange}
      />
    </header>
  );
}

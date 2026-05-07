"use client";

import { languages, type LanguageCode } from "@/content/site-content";
import Image from "next/image";
import { useState } from "react";

type LanguageDropdownProps = {
  selectedLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export default function LanguageDropdown({
  selectedLanguage,
  onLanguageChange,
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguageOption =
    languages.find((language) => language.code === selectedLanguage) ?? languages[0];
  const availableLanguages = languages.filter(
    (language) => language.code !== selectedLanguageOption.code,
  );

  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex min-w-22 items-center justify-between gap-2 rounded-md border border-white/16 bg-white/8 px-3 py-2 font-mono text-sm font-medium text-white backdrop-blur transition hover:border-white/32 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-slate-950"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <Image
          alt=""
          aria-hidden="true"
          className="h-4 w-6 rounded-xs object-cover"
          height={16}
          priority
          src={selectedLanguageOption.flagSrc}
          width={24}
        />
        <span>{selectedLanguageOption.shortLabel}</span>
      </button>

      <div
        aria-hidden={!isOpen}
        className={[
          "absolute right-0 mt-2 min-w-32 overflow-hidden rounded-md border border-white/16 bg-slate-950/88 py-1 shadow-xl shadow-black/20 backdrop-blur transition duration-150",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        ].join(" ")}
        role="menu"
      >
        {availableLanguages.map((language) => (
          <button
            key={language.code}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-white transition hover:bg-white/10 focus:bg-white/10 focus:outline-none"
            onClick={() => {
              onLanguageChange(language.code);
              setIsOpen(false);
            }}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-4 w-6 rounded-[2px] object-cover"
              height={16}
              src={language.flagSrc}
              width={24}
            />
            <span>{language.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

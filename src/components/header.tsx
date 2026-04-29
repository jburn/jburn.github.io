type HeaderProps = {
  spriteSrc?: string;
};

export default function Header({ spriteSrc = "/bruun.svg" }: HeaderProps) {
  return (
    <header className="absolute left-1/2 top-4 -translate-x-1/2">
      <div
        aria-label="Bruun"
        className="h-24 w-24 bg-white md:h-50 md:w-50"
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
    </header>
  );
}

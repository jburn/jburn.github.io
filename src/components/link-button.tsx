import Image from "next/image";

type LinkButtonProps = {
  href: string;
  iconSrc: string;
  label: string;
};

export default function LinkButton({
  href,
  iconSrc,
  label,
}: LinkButtonProps) {
  const isExternalLink = href.startsWith("http");

  return (
    <a
      aria-label={label}
      className="group block focus:outline-none"
      href={href}
      rel={isExternalLink ? "noreferrer" : undefined}
      target={isExternalLink ? "_blank" : undefined}
    >
      <Image
        aria-hidden="true"
        alt=""
        className="h-16 w-16 brightness-0 invert transition duration-500 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        height={64}
        src={iconSrc}
        width={64}
      />
    </a>
  );
}

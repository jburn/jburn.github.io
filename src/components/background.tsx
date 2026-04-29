"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type BackgroundProps = {
  spriteSrc: string;
  spriteWidth?: number;
  spriteHeight?: number;
  columnGap?: number;
  rowGap?: number;
  opacity?: number;
  filter?: string;
  rotation?: number;
  animationDuration?: number;
  speedVariance?: number;
  parallaxStrength?: number;
  className?: string;
};

export default function Background({
  spriteSrc,
  spriteWidth = 64,
  spriteHeight = 64,
  columnGap = 32,
  rowGap = 16,
  opacity = 0.14,
  filter,
  rotation = 0,
  animationDuration = 28,
  speedVariance = 0.18,
  parallaxStrength = 0.1,
  className = "",
}: BackgroundProps) {
  const tileWidth = spriteWidth + columnGap;
  const tileHeight = spriteHeight + rowGap;
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0, rowCount: 48 });
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const updateCanvasSize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const diagonal = Math.sqrt(viewportWidth ** 2 + viewportHeight ** 2);
      const paddedSize = Math.ceil(diagonal * 1.35);

      setCanvasSize({
        width: paddedSize,
        height: paddedSize,
        rowCount: Math.max(12, Math.ceil(paddedSize / tileHeight) + 2),
      });
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [tileHeight]);

  useEffect(() => {
    let frameId = 0;

    const updateScrollOffset = () => {
      frameId = 0;
      setScrollOffset(window.scrollY * -parallaxStrength);
    };

    const handleScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollOffset);
    };

    updateScrollOffset();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [parallaxStrength]);

  const rows = Array.from({ length: canvasSize.rowCount }, (_, index) => {
    const cycle = (index % 7) - 3;
    const duration = animationDuration * (1 + cycle * speedVariance * 0.2);

    return {
      index,
      top: index * tileHeight,
      duration,
      delay: -((index * duration) / 6),
      offset: (index % 3) * (tileWidth / 3),
    };
  });

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 52% 76%, rgba(30, 64, 175, 0.12), transparent 38%)",
            "linear-gradient(140deg, #101a29 0%, #13263f 24%, #17346f 54%, #1a2028 100%)",
          ].join(", "),
          backgroundSize: "160% 160%, 100% 100%",
          backgroundPosition: "50% 100%, 0% 0%",
          animation: "background-gradient-shift 24s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: canvasSize.width || "180%",
          height: canvasSize.height || "160%",
          opacity,
          transform: `translate(-50%, calc(-50% + ${scrollOffset}px)) rotate(${rotation}deg)`,
          transformOrigin: "center",
          willChange: "transform",
        }}
      >
        {rows.map((row) => (
          <div
            key={row.index}
            className="absolute left-0 overflow-hidden"
            style={{
              top: row.top,
              height: spriteHeight,
              width: canvasSize.width || "100%",
            }}
          >
            <div
              className="absolute left-0 top-0 h-full w-[200%]"
              style={{
                "--background-tile-width": `${tileWidth}px`,
                backgroundImage: `url("${spriteSrc}")`,
                backgroundPosition: `${row.offset}px 0`,
                backgroundRepeat: "repeat-x",
                backgroundSize: `${tileWidth}px ${spriteHeight}px`,
                filter,
                animation: `portfolio-background-row-scroll ${row.duration}s linear infinite`,
                animationDelay: `${row.delay}s`,
                willChange: "transform",
              } as CSSProperties}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

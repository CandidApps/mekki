"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxHeroImageProps = {
  src: string;
  alt: string;
  /** Scroll distance multiplier (0–1). Higher = stronger parallax. */
  speed?: number;
};

/** Slight scale gives room to translate without changing the resting crop. */
const SCALE = 1.08;

export function ParallaxHeroImage({ src, alt, speed = 0.35 }: ParallaxHeroImageProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.5) return;
      layer.style.transform = `translate3d(0, ${y * speed}px, 0) scale(${SCALE})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      ref={layerRef}
      className="absolute inset-0 origin-center will-change-transform"
      style={{ transform: `scale(${SCALE})` }}
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-[center_32%]"
        sizes="100vw"
      />
    </div>
  );
}

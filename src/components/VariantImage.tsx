import { useState } from 'react';

interface VariantImageProps {
  /** Primary image path (auto-generated from the variant name) */
  src: string;
  /** Fallback image if the primary fails to load */
  fallback: string;
  alt: string;
  className?: string;
}

/**
 * Image component that tries the variant's own photo first.
 * If the file doesn't exist (404), it falls back to the parent
 * product's image automatically — so you can add photos gradually
 * without breaking the page.
 */
export function VariantImage({ src, fallback, alt, className }: VariantImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (!triedFallback) {
          setTriedFallback(true);
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageLightbox from './ImageLightbox';

/**
 * Imagen de artículo del blog con fallback y lightbox al clickear.
 */
export default function BlogArticleImage({ src, alt, category }) {
  const [imgError, setImgError] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  if (imgError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-miel-100 to-miel-200">
        <div className="text-center p-4">
          <span className="text-3xl" aria-hidden="true">📝</span>
          <p className="mt-2 text-xs text-miel-700">{category}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-miel-100 to-miel-200" aria-hidden="true" />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={80}
        className="object-cover transition-opacity duration-500 hover:opacity-90 cursor-pointer"
        onError={() => setImgError(true)}
        onClick={() => setShowLightbox(true)}
      />

      {showLightbox && (
        <ImageLightbox
          src={src}
          alt={alt}
          caption={category}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  );
}

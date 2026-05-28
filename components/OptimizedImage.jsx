'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Imagen optimizada con fallback, blur placeholder y manejo de errores.
 * Reemplaza los placeholders manuales por un sistema robusto.
 *
 * @param {Object} props
 * @param {string} props.src - Ruta de la imagen (ej: '/images/productos/miel.jpg')
 * @param {string} props.alt - Texto alternativo
 * @param {string} props.className - Clases CSS adicionales
 * @param {string} props.size responsive - Tamaños responsive (default: auto)
 * @param {string} props.aspect - Ratio de aspecto (ej: '16/10', '4/3', '1/1')
 * @param {string} props.fallbackIcon - Emoji de fallback si falla la imagen
 * @param {string} props.fallbackLabel - Texto de fallback
 * @param {boolean} props.priority - Cargar con prioridad (above-the-fold)
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  sizes,
  aspect = '16/10',
  fallbackIcon = '📸',
  fallbackLabel = '',
  priority = false,
}) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const responsiveSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  if (imgError) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream-200 to-earth-100 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <span className="text-4xl block mb-2 opacity-50" aria-hidden="true">{fallbackIcon}</span>
          {fallbackLabel && <p className="text-xs text-earth-400">{fallbackLabel}</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blur placeholder / loading skeleton */}
      {!imgLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-cream-200 via-cream-100 to-earth-100" aria-hidden="true" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        sizes={responsiveSizes}
        priority={priority}
        quality={85}
        className={`object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
      />
    </>
  );
}

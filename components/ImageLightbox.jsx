'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/**
 * Lightbox para ampliar imágenes al hacer clic.
 * Cierra con Escape, clic fuera, o botón X.
 *
 * @param {Object} props
 * @param {string} props.src - Ruta de la imagen
 * @param {string} props.alt - Texto alternativo
 * @param {string} props.caption - Texto descriptivo debajo de la imagen
 * @param {Function} props.onClose - Callback al cerrar
 */
export default function ImageLightbox({ src, alt, caption, onClose }) {
  const [loaded, setLoaded] = useState(false);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-fade-in" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-0 sm:-right-12 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagen */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className={`w-full h-auto max-h-[80vh] object-contain transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            priority
          />
        </div>

        {/* Caption */}
        {caption && (
          <p className="text-center text-sm text-white/70 mt-4 drop-shadow-md">{caption}</p>
        )}
      </div>
    </div>
  );
}

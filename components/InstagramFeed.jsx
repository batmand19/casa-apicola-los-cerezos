'use client';

import OptimizedImage from './OptimizedImage';
import { trackInstagramFeedClick } from '@/lib/tracking';

const POSTS = [
  { image: '/images/instagram/miel-viertiendo.jpg', alt: 'Miel artesanal cayendo del panal', link: 'https://instagram.com/p/EXAMPLE1' },
  { image: '/images/instagram/colmontas-montana.jpg', alt: 'Colmenas en las montañas de Caldas', link: 'https://instagram.com/p/EXAMPLE2' },
  { image: '/images/instagram/frasco-etiqueta.jpg', alt: 'Frasco de miel Meliphera', link: 'https://instagram.com/p/EXAMPLE3' },
  { image: '/images/instagram/flor-arrayan.jpg', alt: 'Flor de Arrayán del Páramo', link: 'https://instagram.com/p/EXAMPLE4' },
  { image: '/images/instagram/familia-cosecha.jpg', alt: 'Familia cosechando miel', link: 'https://instagram.com/p/EXAMPLE5' },
  { image: '/images/instagram/miel-desayuno.jpg', alt: 'Miel en desayuno colombiano', link: 'https://instagram.com/p/EXAMPLE6' },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 sm:py-32 bg-cream-100" aria-labelledby="instagram-title">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">@casapicolaloscercez</span>
          <div className="divider-elegant mb-6" />
          <h2 id="instagram-title" className="font-display text-3xl sm:text-4xl font-bold text-earth-900">Vida de colmena</h2>
          <p className="mt-3 text-base text-earth-500">Nuestro día a día en las montañas de Caldas.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {POSTS.map((post, i) => (
            <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" onClick={() => trackInstagramFeedClick(post.link, i)} className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cream-200 to-earth-100" aria-label={`Instagram: ${post.alt}`}>
              <OptimizedImage src={post.image} alt={post.alt} aspect="1/1" fallbackIcon="📷" fallbackLabel="Instagram" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://instagram.com/casapicolaloscercez" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full shadow-lg transition-all duration-300 hover:scale-105 min-h-[44px]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

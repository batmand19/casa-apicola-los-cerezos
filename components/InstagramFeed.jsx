'use client';

import { trackInstagramFeedClick } from '@/lib/tracking';

const POSTS = [
  {
    image: '/images/instagram/miel-viertiendo.jpg',
    alt: 'Miel artesanal cayendo del panal — Casa Apícola Los Cerezos',
    link: 'https://instagram.com/p/EXAMPLE1',
  },
  {
    image: '/images/instagram/colmontas-montana.jpg',
    alt: 'Colmenas en las montañas de Caldas — apicultura sostenible',
    link: 'https://instagram.com/p/EXAMPLE2',
  },
  {
    image: '/images/instagram/frasco-etiqueta.jpg',
    alt: 'Frasco de miel Meliphera con etiqueta artesanal',
    link: 'https://instagram.com/p/EXAMPLE3',
  },
  {
    image: '/images/instagram/flor-arrayan.jpg',
    alt: 'Flor de Arrayán silvestre del Páramo de Rabanal',
    link: 'https://instagram.com/p/EXAMPLE4',
  },
  {
    image: '/images/instagram/familia-cosecha.jpg',
    alt: 'Familia cosechando miel en el apiario de Caldas',
    link: 'https://instagram.com/p/EXAMPLE5',
  },
  {
    image: '/images/instagram/miel-desayuno.jpg',
    alt: 'Miel natural en un desayuno colombiano saludable',
    link: 'https://instagram.com/p/EXAMPLE6',
  },
];

export default function InstagramFeed() {
  const handleClick = (link, index) => {
    trackInstagramFeedClick(link, index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white" aria-labelledby="instagram-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-pink-700 bg-pink-50 rounded-full border border-pink-200">
            @casapicolaloscercez
          </span>
          <h2
            id="instagram-title"
            className="text-3xl sm:text-4xl font-bold text-tierra-900"
          >
            Vida de colmena
          </h2>
          <p className="mt-3 text-lg text-tierra-700/80 max-w-xl mx-auto">
            Nuestro día a día en las montañas de Caldas. Síguenos para ver el proceso completo.
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {POSTS.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(post.link, i)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-miel-100 to-miel-200"
              aria-label={`Ver en Instagram: ${post.alt}`}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 img-placeholder opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="text-center p-2">
                  <svg className="w-6 h-6 mx-auto mb-1 text-miel-700/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                    <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                  <code className="text-[8px] text-miel-800/50 block">{post.image.split('/').pop()}</code>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                  <circle cx="12" cy="12" r="5" strokeWidth={2} />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/casapicolaloscercez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-200 min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Seguir en Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

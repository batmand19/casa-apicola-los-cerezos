'use client';

import Link from 'next/link';
import { trackClick } from '@/lib/tracking';

const FACTS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    stat: '80%',
    description: 'de las flores nativas de nuestra región dependen de la polinización de abejas como las Meliphera.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    stat: '0',
    description: 'aguijones. Las abejas Meliphera son completamente dóciles y seguras para todas las personas.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '5,000+',
    description: 'flores puede visitar una sola colonia de abejas Meliphera cada día en búsqueda de néctar.',
  },
];

export default function BeeEducation() {
  const handleBlogClick = (e) => {
    e.preventDefault();
    trackClick('bee_edu_blog_link', '/blog', { label: 'Aprende más en nuestro blog' });
    window.location.href = '/blog';
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white" aria-labelledby="bee-education-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-miel-800 bg-miel-100 rounded-full border border-miel-200">
            El increíble mundo de las abejas
          </span>
          <h2
            id="bee-education-title"
            className="text-3xl sm:text-4xl font-bold text-tierra-900"
          >
            Las abejas Meliphera
          </h2>
          <p className="mt-4 text-lg text-tierra-700/80 max-w-2xl mx-auto">
            Nuestras abejas nativas sin aguijón son guardianas de los ecosistemas andinos.
            Conoce por qué son tan especiales.
          </p>
        </div>

        {/* Datos curiosos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FACTS.map((fact, i) => (
            <div
              key={i}
              className="text-center p-6 sm:p-8 rounded-2xl bg-miel-50 border border-miel-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-miel-100 text-miel-700 mb-5">
                {fact.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-miel-700 mb-2">
                {fact.stat}
              </p>
              <p className="text-sm sm:text-base text-tierra-700 leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA al blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            onClick={handleBlogClick}
            className="inline-flex items-center text-base font-semibold text-miel-700 hover:text-miel-800 transition-colors group min-h-[44px]"
          >
            Aprende más en nuestro blog
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

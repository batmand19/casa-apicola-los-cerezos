'use client';

import Link from 'next/link';
import { trackClick } from '@/lib/tracking';

const FACTS = [
  { icon: '🌺', stat: '80%', description: 'de las flores nativas de nuestra región dependen de la polinización de abejas como las Meliphera.' },
  { icon: '🐝', stat: '0', description: 'aguijones. Las abejas Meliphera son completamente dóciles y seguras para todas las personas.' },
  { icon: '⚡', stat: '5,000+', description: 'flores puede visitar una sola colonia de abejas Meliphera cada día en búsqueda de néctar.' },
];

export default function BeeEducation() {
  return (
    <section className="py-24 sm:py-32 bg-cream-50" aria-labelledby="bee-education-title">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">El increíble mundo de las abejas</span>
          <div className="divider-elegant mb-6" />
          <h2 id="bee-education-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900">
            Las abejas Meliphera
          </h2>
          <p className="mt-5 text-base sm:text-lg text-earth-500 max-w-xl mx-auto">
            Nuestras abejas nativas sin aguijón son guardianas de los ecosistemas andinos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FACTS.map((fact, i) => (
            <div key={i} className="card-premium p-8 sm:p-10 text-center group">
              <span className="text-4xl block mb-5 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{fact.icon}</span>
              <p className="font-display text-3xl sm:text-4xl font-bold text-honey-600 mb-3">{fact.stat}</p>
              <p className="text-sm sm:text-base text-earth-500 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" onClick={() => trackClick('bee_edu_blog', '/blog')} className="inline-flex items-center gap-2 text-sm font-semibold text-honey-600 hover:text-honey-700 transition-colors group min-h-[44px]">
            Aprende más en nuestro blog
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

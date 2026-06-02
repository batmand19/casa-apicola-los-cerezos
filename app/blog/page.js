import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import BlogGrid from '@/components/BlogGrid';

const SITE_URL = 'https://casa-apicola-los-cerezos.vercel.app';

export const metadata = {
  title: 'Blog | Educación sobre miel y abejas Meliphera',
  description:
    'Artículos sobre apicultura sostenible, usos de la miel, abejas Meliphera y conservación del Páramo de Rabanal. Educación y contenido de valor para amantes de la miel pura.',
  openGraph: {
    title: 'Blog | Casa Apícola Los Cerezos',
    description: 'Aprende sobre miel, abejas Meliphera y apicultura sostenible.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-miel-50 min-h-screen paper-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-bosque-700 bg-bosque-50 rounded-full border border-bosque-200">
            Blog y educación
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-tierra-900">
            Aprende sobre miel, abejas y naturaleza
          </h1>
          <p className="mt-4 text-lg text-tierra-700/80 max-w-2xl mx-auto">
            Contenido educativo para conocer mejor nuestra miel, las abejas Meliphera
            y la apicultura sostenible de la región cundiboyacense.
          </p>
        </div>

        {/* Grid de artículos con paginación */}
        <BlogGrid articles={ARTICLES} />

        {/* CTA a productos */}
        <div className="mt-16 text-center">
          <p className="text-tierra-700/80 mb-4">
            ¿Te gustó lo que leíste? Prueba nuestra miel artesanal.
          </p>
          <Link
            href="/#productos"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-miel-600 hover:bg-miel-700 rounded-xl shadow-lg shadow-miel-500/25 transition-all duration-200 min-h-[48px]"
          >
            Ver productos
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

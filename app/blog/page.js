import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import { websiteSchema, breadcrumbSchema } from '@/lib/schema';
import BlogArticleImage from '@/components/BlogArticleImage';

const SITE_URL = 'https://casapicolaloscercez.com';

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

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-miel-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-miel-200 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-miel-100 to-miel-200 overflow-hidden">
                <BlogArticleImage src={article.image} alt={article.imageAlt} category={article.category} />
                {/* Badge de categoría */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-miel-600 rounded-full z-10">
                  {article.category}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-tierra-700/60 mb-3">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('es-CO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-tierra-900 group-hover:text-miel-700 transition-colors leading-snug mb-3">
                  {article.title}
                </h2>

                <p className="text-sm text-tierra-700/80 leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center text-sm font-semibold text-miel-700 group-hover:text-miel-800 transition-colors mt-auto">
                  Leer artículo
                  <svg className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

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

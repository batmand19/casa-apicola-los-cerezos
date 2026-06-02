'use client';

import { useState } from 'react';
import Link from 'next/link';
import BlogArticleImage from '@/components/BlogArticleImage';

const ARTICLES_PER_PAGE = 6;

export default function BlogGrid({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-5xl block mb-4" aria-hidden="true">📝</span>
        <p className="text-lg text-tierra-700/80">Próximamente publicaremos artículos nuevos.</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group bg-miel-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-miel-200 flex flex-col"
          >
            {/* Imagen */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-miel-100 to-miel-200 overflow-hidden">
              <BlogArticleImage src={article.image} alt={article.imageAlt} category={article.category} />
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

      {/* Paginación */}
      {totalPages > 1 && (
        <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Paginación del blog">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2.5 text-sm font-medium text-tierra-700 border border-tierra-200 rounded-xl hover:border-miel-400 hover:text-miel-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px]"
            aria-label="Página anterior"
          >
            ← Anterior
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                currentPage === page
                  ? 'bg-miel-600 text-white shadow-md shadow-miel-500/25'
                  : 'text-tierra-700 border border-tierra-200 hover:border-miel-400 hover:text-miel-700'
              }`}
              aria-label={`Página ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2.5 text-sm font-medium text-tierra-700 border border-tierra-200 rounded-xl hover:border-miel-400 hover:text-miel-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[44px]"
            aria-label="Página siguiente"
          >
            Siguiente →
          </button>
        </nav>
      )}
    </>
  );
}

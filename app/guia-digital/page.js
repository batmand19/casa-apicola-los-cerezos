'use client';

import Link from 'next/link';
import { GUIDE } from '@/data/guide-content';
import WhatsAppOrderButton from '@/components/WhatsAppOrderButton';
import EmailOrderButton from '@/components/EmailOrderButton';

export default function GuiaDigitalPage() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-miel-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-tierra-700/60" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-miel-700 transition-colors">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-tierra-700">Guía de Recetas</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-miel-800 bg-miel-100 rounded-full border border-miel-200">
            Producto digital
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tierra-900 mb-4">
            {GUIDE.title}
          </h1>
          <p className="text-lg text-tierra-700/80 max-w-2xl mx-auto">
            {GUIDE.subtitle}
          </p>
          <p className="text-sm text-tierra-700/60 mt-2">
            Por {GUIDE.author} &middot; {GUIDE.edition}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 border border-miel-100 mb-10">
          {/* Introducción */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-tierra-900 mb-3">Introducción</h2>
            <p className="text-tierra-700 leading-relaxed whitespace-pre-line">
              {GUIDE.intro}
            </p>
          </div>

          {/* Capítulos */}
          {GUIDE.chapters.map((chapter) => (
            <div key={chapter.number} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-tierra-900 mb-4 pb-2 border-b border-tierra-100">
                Capítulo {chapter.number}: {chapter.title}
              </h2>

              {chapter.isTable ? (
                /* Tabla de equivalencias */
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-miel-50">
                        <th className="px-4 py-3 text-left font-semibold text-tierra-900 border border-tierra-200">Azúcar</th>
                        <th className="px-4 py-3 text-left font-semibold text-tierra-900 border border-tierra-200">Miel (reemplazo)</th>
                        <th className="px-4 py-3 text-left font-semibold text-tierra-900 border border-tierra-200">Ajuste de líquido</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chapter.table.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-tierra-50/50'}>
                          <td className="px-4 py-2.5 border border-tierra-200 text-tierra-700">{row.sugar}</td>
                          <td className="px-4 py-2.5 border border-tierra-200 text-miel-700 font-medium">{row.honey}</td>
                          <td className="px-4 py-2.5 border border-tierra-200 text-tierra-700">{row.liquid}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-tierra-700/60 mt-3 italic">
                    Nota: {chapter.note}
                  </p>
                </div>
              ) : chapter.isTips ? (
                /* Consejos de almacenamiento */
                <ul className="space-y-2">
                  {chapter.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-tierra-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-bosque-100 text-bosque-700 text-xs flex items-center justify-center mt-0.5">✓</span>
                      <span className="text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                /* Recetas */
                <div className="space-y-8">
                  {chapter.recipes.map((recipe, i) => (
                    <div key={i} className="p-5 rounded-xl bg-tierra-50/50 border border-tierra-100">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-lg font-bold text-tierra-900">{recipe.name}</h3>
                        <span className="flex-shrink-0 px-2.5 py-1 text-xs font-medium text-miel-700 bg-miel-100 rounded-full">
                          {recipe.time}
                        </span>
                      </div>

                      {/* Ingredientes */}
                      <p className="text-xs font-semibold text-tierra-800 uppercase tracking-wider mb-2">Ingredientes</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
                        {recipe.ingredients.map((ing, j) => (
                          <li key={j} className="text-sm text-tierra-700 flex items-start gap-2">
                            <span className="text-miel-500 mt-1">•</span>
                            {ing}
                          </li>
                        ))}
                      </ul>

                      {/* Preparación */}
                      <p className="text-xs font-semibold text-tierra-800 uppercase tracking-wider mb-2">Preparación</p>
                      <ol className="space-y-1.5 mb-4">
                        {recipe.steps.map((step, j) => (
                          <li key={j} className="text-sm text-tierra-700 flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-miel-100 text-miel-700 text-xs font-bold flex items-center justify-center mt-0.5">
                              {j + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>

                      {/* Tip */}
                      {recipe.tip && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-miel-100/50 border border-miel-200">
                          <span className="text-sm" aria-hidden="true">💡</span>
                          <p className="text-xs text-miel-800 leading-relaxed">{recipe.tip}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA de compra */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-miel-100 text-center">
          <h2 className="text-xl font-bold text-tierra-900 mb-2">¿Te gusta lo que ves?</h2>
          <p className="text-sm text-tierra-700/80 mb-6">
            Descarga la guía completa con todas las recetas, fotos y tips profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <WhatsAppOrderButton
              productName="Guía de recetas y usos de la miel Meliphera"
              size="PDF + EPUB"
              price={0}
              type="digital"
              className="flex-1"
            />
            <EmailOrderButton
              productName="Guía de recetas y usos de la miel Meliphera"
              size="PDF + EPUB"
              price={0}
              type="digital"
              className="flex-1"
            />
          </div>
          <p className="text-xs text-tierra-700/50 mt-4">
            Entrega en menos de 24 horas por WhatsApp o correo tras confirmar el pago.
          </p>
        </div>
      </div>
    </section>
  );
}

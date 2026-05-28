'use client';

import WhatsAppOrderButton from './WhatsAppOrderButton';
import EmailOrderButton from './EmailOrderButton';

export default function DigitalProduct() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-miel-50 via-white to-bosque-50" aria-labelledby="digital-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-miel-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Portada */}
            <div className="bg-gradient-to-br from-miel-200 via-miel-300 to-miel-400 p-8 sm:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-10 left-10 text-6xl">🍯</div>
                <div className="absolute bottom-10 right-10 text-6xl">📖</div>
                <div className="absolute top-1/2 left-1/4 text-4xl">🌸</div>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-miel-900 bg-white/60 rounded-full mb-4">
                  Producto digital
                </span>
                <h2 id="digital-title" className="text-2xl sm:text-3xl font-bold text-miel-900 mb-3">
                  Sabores de Colmena
                </h2>
                <p className="text-sm text-miel-800/80 mb-4">
                  Recetas y usos de la miel Meliphera
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full">
                  <span className="text-2xl font-bold text-miel-800">$XX.XXX</span>
                  <span className="text-sm text-miel-700">COP</span>
                </div>
                <p className="text-xs text-miel-800/60 mt-2">
                  PDF + EPUB incluidos
                </p>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 sm:p-8 flex flex-col">
              <p className="text-tierra-700 leading-relaxed mb-5">
                ¿Quieres aprovechar al máximo nuestra miel Meliphera? Esta guía digital incluye:
              </p>

              <div className="space-y-4 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-miel-100 text-miel-700 flex items-center justify-center text-sm" aria-hidden="true">📖</span>
                  <div>
                    <p className="text-sm font-semibold text-tierra-900">25 recetas fáciles con miel</p>
                    <p className="text-xs text-tierra-700/70">Desayunos, bebidas, postres y platos salados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-bosque-100 text-bosque-700 flex items-center justify-center text-sm" aria-hidden="true">🌿</span>
                  <div>
                    <p className="text-sm font-semibold text-tierra-900">Usos medicinales y de belleza</p>
                    <p className="text-xs text-tierra-700/70">Alivio de garganta, mascarillas, energía natural</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-tierra-100 text-tierra-700 flex items-center justify-center text-sm" aria-hidden="true">📊</span>
                  <div>
                    <p className="text-sm font-semibold text-tierra-900">Tabla de equivalencias</p>
                    <p className="text-xs text-tierra-700/70">Sustituir azúcar por miel en cualquier receta</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-miel-100 text-miel-700 flex items-center justify-center text-sm" aria-hidden="true">💡</span>
                  <div>
                    <p className="text-sm font-semibold text-tierra-900">Consejos de almacenamiento</p>
                    <p className="text-xs text-tierra-700/70">Cómo conservar tu miel para que dure más</p>
                  </div>
                </div>
              </div>

              {/* Formatos */}
              <p className="text-xs text-tierra-700/60 mb-5">
                📁 Formatos incluidos: PDF (computadora) + EPUB (móvil, tablet, Kindle)
              </p>

              {/* Entrega */}
              <div className="p-3 rounded-xl bg-bosque-50 border border-bosque-100 mb-5">
                <p className="text-xs text-bosque-800 text-center">
                  ⚡ Entrega en menos de 24 horas por WhatsApp o correo tras confirmar el pago.
                </p>
              </div>

              {/* Botones */}
              <div className="space-y-3">
                <WhatsAppOrderButton
                  productName="Guía de recetas y usos de la miel Meliphera"
                  size="PDF + EPUB"
                  price={0}
                  type="digital"
                  className="w-full"
                />
                <EmailOrderButton
                  productName="Guía de recetas y usos de la miel Meliphera"
                  size="PDF + EPUB"
                  price={0}
                  type="digital"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

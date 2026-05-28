'use client';

import WhatsAppOrderButton from './WhatsAppOrderButton';
import EmailOrderButton from './EmailOrderButton';

export default function DigitalProduct() {
  return (
    <section className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden" aria-labelledby="digital-title">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-honey-200/30 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-cream-300/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Portada */}
            <div className="bg-gradient-to-br from-honey-200 via-honey-300 to-honey-400 p-8 sm:p-12 flex flex-col items-center justify-center text-center relative">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-earth-800 bg-white/60 rounded-full mb-4">Producto digital</span>
                <h2 id="digital-title" className="font-display text-2xl sm:text-3xl font-bold text-earth-900 mb-2">Sabores de Colmena</h2>
                <p className="text-sm text-earth-700/70 mb-4">Recetas y usos de la miel Meliphera</p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/70 rounded-full">
                  <span className="text-2xl font-display font-bold text-earth-900">$XX.XXX</span>
                  <span className="text-sm text-earth-600">COP</span>
                </div>
                <p className="text-xs text-earth-600/50 mt-2">PDF + EPUB incluidos</p>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 sm:p-8 flex flex-col">
              <p className="text-earth-600 leading-relaxed mb-5">¿Quieres aprovechar al máximo nuestra miel Meliphera?</p>

              <div className="space-y-4 mb-6 flex-1">
                {[
                  { icon: '📖', title: '25 recetas fáciles', desc: 'Desayunos, bebidas, postres y platos salados' },
                  { icon: '🌿', title: 'Usos medicinales y de belleza', desc: 'Alivio de garganta, mascarillas, energía natural' },
                  { icon: '📊', title: 'Tabla de equivalencias', desc: 'Sustituir azúcar por miel en cualquier receta' },
                  { icon: '💡', title: 'Consejos de almacenamiento', desc: 'Cómo conservar tu miel para que dure más' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-cream-50 border border-cream-200 flex items-center justify-center text-base group-hover:bg-honey-50 group-hover:border-honey-200 transition-colors" aria-hidden="true">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-earth-900">{item.title}</p>
                      <p className="text-xs text-earth-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-earth-400 mb-5">📁 PDF (computadora) + EPUB (móvil, tablet, Kindle)</p>

              <div className="p-3 rounded-xl bg-forest-50 border border-forest-100 mb-5">
                <p className="text-xs text-forest-700 text-center">⚡ Entrega en menos de 24 horas tras confirmar el pago.</p>
              </div>

              <div className="space-y-3">
                <WhatsAppOrderButton productName="Guía de recetas y usos de la miel Meliphera" size="PDF + EPUB" price={0} type="digital" className="btn-whatsapp w-full" />
                <EmailOrderButton productName="Guía de recetas y usos de la miel Meliphera" size="PDF + EPUB" price={0} type="digital" className="btn-email w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

export default function ApiarioMap() {
  return (
    <section className="py-16 sm:py-20 bg-cream-100" aria-labelledby="map-title">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-cream-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Mapa estilizado */}
            <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center p-8">
              {/* Placeholder de mapa estilizado */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-forest-600/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-display text-lg font-bold text-forest-800 mb-1">Montañas de Caldas</p>
                <p className="text-sm text-forest-600/70">Cerca al límite con Boyacá</p>
                <p className="text-xs text-forest-500/50 mt-2">Zona de amortiguamiento del Páramo de Rabanal</p>

                {/* Mapa placeholder — reemplazar con imagen real */}
                <div className="mt-6 p-4 rounded-xl bg-white/60 border border-forest-200">
                  <p className="text-xs text-forest-600/60">
                    📍 Región cundiboyacense, Colombia<br />
                    Coordenadas aproximadas: 5.55°N, 73.45°W
                  </p>
                </div>
              </div>

              {/* Decoración */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-honey-400/20" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 w-6 h-6 rounded-full bg-forest-400/20" aria-hidden="true" />
            </div>

            {/* Información */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-honey-600 mb-3 block">Nuestro hogar</span>
              <h3 id="map-title" className="font-display text-2xl sm:text-3xl font-bold text-earth-900 mb-4">
                En el corazón del Páramo de Rabanal
              </h3>
              <p className="text-sm text-earth-500 leading-relaxed mb-6">
                Nuestro apiario se encuentra en la zona de amortiguamiento del Páramo de Rabanal,
                en las montañas de Caldas cerca al límite con Boyacá. Un ecosistema de alta biodiversidad
                donde la diversidad floral es asombrosa.
              </p>

              <div className="space-y-3">
                {[
                  { icon: '📍', text: 'Caldas, Colombia — Región cundiboyacense' },
                  { icon: '🏔️', text: 'Zona de amortiguamiento del Páramo de Rabanal' },
                  { icon: '🌿', text: 'Flora: Eucalipto, Romero, Salvia, Uva de anís, Arrayán' },
                  { icon: '🌡️', text: 'Clima de montaña con humedad constante' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-base" aria-hidden="true">{item.icon}</span>
                    <p className="text-sm text-earth-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

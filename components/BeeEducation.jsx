'use client';

export default function BeeEducation() {
  return (
    <section className="py-24 sm:py-32 bg-cream-50" aria-labelledby="bee-education-title">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">Conoce a nuestras abejas</span>
          <div className="divider-elegant mb-6" />
          <h2 id="bee-education-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900">La Apis mellifera</h2>
          <p className="mt-5 text-base sm:text-lg text-earth-500 max-w-2xl mx-auto">
            La especie de abeja con mayor distribución en el mundo. Originaria de Europa, África y parte de Asia, fue introducida en América y Oceanía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {[
            { icon: '🐝', stat: '80%', description: 'de las flores nativas de nuestra región dependen de la polinización de abejas como la Apis mellifera.' },
            { icon: '⚡', stat: '1 sola vez', description: 'puede picar la Apis mellifera. Después de picar, la abeja muere. Por eso las tratamos con extremo cuidado y respeto.' },
            { icon: '🌸', stat: '5,000+', description: 'flores puede visitar una sola colonia cada día en búsqueda de néctar para producir nuestra miel.' },
          ].map((fact, i) => (
            <div key={i} className="card-premium p-8 sm:p-10 text-center group">
              <span className="text-4xl block mb-5 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{fact.icon}</span>
              <p className="font-display text-3xl sm:text-4xl font-bold text-honey-600 mb-3">{fact.stat}</p>
              <p className="text-sm sm:text-base text-earth-500 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>

        {/* Nota educativa sobre el aguijón */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-200 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-honey-100 flex items-center justify-center text-2xl" aria-hidden="true">🛡️</span>
            <div>
              <h3 className="font-display text-lg font-bold text-earth-900 mb-2">¿Por qué las tratamos con tanto cuidado?</h3>
              <p className="text-sm text-earth-500 leading-relaxed">
                La Apis mellifera posee un aguijón, pero solo puede picar <strong className="text-earth-700">una única vez</strong>. Después de picar, la abeja muere. Por esta razón, cada interacción con nuestras colonias se realiza con <strong className="text-earth-700">respeto, calma y conocimiento</strong>, minimizando el estrés de las abejas y protegiendo su bienestar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

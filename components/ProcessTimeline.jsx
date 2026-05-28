'use client';

const STEPS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Recolección',
    description: 'Las abejas Meliphera recolectan néctar de flores nativas: Eucalipto, Romero, Salvia, Uva de anís y Arrayán.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Transformación',
    description: 'En la colmena, el néctar se mezcla con enzimas especiales y se evapora el agua hasta concentrarse.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Maduración',
    description: 'La miel madura se almacena en celdas de cera pura, sellada por las abejas para preservarla.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Cosecha respetuosa',
    description: 'Cosechamos dejando suficiente miel para que las colonias sobrevivan el invierno. Sin dañar a las abejas.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Envasado artesanal',
    description: 'Filtramos suavemente y envasamos sin calor excesivo para preservar todas las propiedades naturales.',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-bosque-50" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-bosque-700 bg-bosque-100 rounded-full border border-bosque-200">
            Del panal a tu mesa
          </span>
          <h2
            id="process-title"
            className="text-3xl sm:text-4xl font-bold text-tierra-900"
          >
            Cómo producimos nuestra miel
          </h2>
          <p className="mt-4 text-lg text-tierra-700/80 max-w-2xl mx-auto">
            Un proceso artesanal que respeta a las abejas y preserva la pureza natural de cada frasco.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea conectora — vertical en mobile, horizontal en desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-bosque-200 md:-translate-x-px" aria-hidden="true" />

          <div className="space-y-8 md:space-y-0">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:items-center md:min-h-[140px]`}
                >
                  {/* Contenido */}
                  <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-14 md:pl-0`}>
                    <h3 className="text-lg font-bold text-tierra-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-tierra-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Nodo central */}
                  <div className="absolute left-0 md:relative md:left-auto md:w-0 flex items-center justify-center">
                    <div className="z-10 w-12 h-12 rounded-full bg-bosque-600 text-white flex items-center justify-center shadow-lg shadow-bosque-600/20">
                      {step.icon}
                    </div>
                  </div>

                  {/* Espaciador invisible en desktop */}
                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

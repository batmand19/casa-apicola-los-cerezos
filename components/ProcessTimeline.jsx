'use client';

const STEPS = [
  { icon: '🌸', title: 'Recolección', description: 'Las abejas Apis mellifera recolectan néctar de flores nativas: Eucalipto, Romero, Salvia, Uva de anís y Arrayán.' },
  { icon: '🧪', title: 'Transformación', description: 'En la colmena, el néctar se mezcla con enzimas naturales y se evapora el agua hasta concentrarse.' },
  { icon: '🍯', title: 'Maduración', description: 'La miel madura se almacena en celdas de cera pura, sellada por las abejas para preservarla.' },
  { icon: '🤲', title: 'Cosecha respetuosa', description: 'Cosechamos dejando suficiente miel para que las colonias sobrevivan el invierno.' },
  { icon: '📦', title: 'Envasado con calor controlado', description: 'La miel se envasa utilizando calor controlado. No se realizan mezclas, no se añade azúcar, no contiene conservantes ni ingredientes artificiales.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-forest-900 text-cream-100 relative overflow-hidden" aria-labelledby="process-title">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-honey-500/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-400/80">Del panal a tu mesa</span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-honey-400 to-transparent mx-auto my-6" />
          <h2 id="process-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50">Cómo producimos nuestra miel</h2>
          <p className="mt-5 text-base text-cream-300/60 max-w-xl mx-auto">Un proceso artesanal que respeta a las abejas y preserva la pureza natural. Sin mezclas, sin conservantes, sin atajos.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey-500/30 to-transparent" aria-hidden="true" />
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-honey-500/20" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 text-left md:text-center group">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-honey-500 to-honey-600 flex items-center justify-center text-2xl shadow-lg shadow-honey-500/20 group-hover:shadow-honey-500/40 transition-shadow duration-500">{step.icon}</div>
                <div className="md:mt-6">
                  <h3 className="font-display text-base sm:text-lg font-bold text-cream-50 mb-1">{step.title}</h3>
                  <p className="text-sm text-cream-300/50 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sello de pureza */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-honey-500/20 bg-honey-500/5">
            <span className="text-xl" aria-hidden="true">🌿</span>
            <p className="text-sm text-cream-300/70">
              <strong className="text-cream-100">100% natural:</strong> Sin conservantes, sin azúcar añadida, sin ingredientes artificiales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

/**
 * "Vida de la Colmena" — Sección documental cinematográfica
 * Muestra el día a día del apiario con estilo visual premium.
 *
 * FOTOS Y VIDEOS NECESARIOS:
 * /public/images/padre-colmena-01.jpg — Padre trabajando colmena al amanecer
 * /public/images/padre-colmena-02.jpg — Padre inspeccionando cuadros
 * /public/images/padre-colmena-03.jpg — Padre con humo cerca de colmena
 * /public/images/extraccion-miel-01.jpg — Extracción de miel artesanal
 * /public/images/alimentacion-colmena.jpg — Alimentación de colonias
 * /public/images/entorno-apiario.jpg — Paisaje del apiario en montañas
 * /public/images/abejas-flores.jpg — Abejas en flor de Arrayán
 * /public/videos/padre-trabajando.mp4 — Video: padre cuidando colmenas
 * /public/videos/extraccion-miel.mp4 — Video: extracción de miel (slow-mo)
 */

const GALLERY = [
  { src: '/images/padre-colmena-01.jpg', alt: 'Nuestro padre trabajando en las colmenas al amanecer', caption: 'Cada mañana, el padre revisa las colmenas', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/extraccion-miel-01.jpg', alt: 'Extracción artesanal de miel', caption: 'Extracción sin prisa', span: '' },
  { src: '/images/abejas-flores.jpg', alt: 'Abejas Apis mellifera en flor de Arrayán', caption: 'Las abejas en su entorno natural', span: '' },
  { src: '/images/entorno-apiario.jpg', alt: 'Paisaje del apiario en las montañas de Caldas', caption: 'Nuestro hogar: las montañas de Caldas', span: 'sm:col-span-2' },
  { src: '/images/alimentacion-colmena.jpg', alt: 'Alimentación de colonias en época de escasez', caption: 'Cuidado en cada temporada', span: '' },
  { src: '/images/padre-colmena-02.jpg', alt: 'Padre inspeccionando cuadros de la colmena', caption: 'Conocimiento de décadas', span: '' },
];

export default function BeeLife() {
  return (
    <section className="py-24 sm:py-32 bg-white" aria-labelledby="bee-life-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">Experiencia documental</span>
          <div className="divider-elegant mb-6" />
          <h2 id="bee-life-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900">Vida de la colmena</h2>
          <p className="mt-5 text-base sm:text-lg text-earth-500 max-w-2xl mx-auto">
            Un vistazo al día a día de nuestro apiario. Imágenes reales de nuestro padre trabajando con las abejas en las montañas de Caldas.
          </p>
        </div>

        {/* Video destacado */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl aspect-video bg-gradient-to-br from-earth-800 to-earth-900 relative group cursor-pointer">
          {/* Placeholder para video real */}
          <div className="absolute inset-0 img-placeholder opacity-40">
            <div className="text-center">
              <span className="text-5xl block mb-3">🎬</span>
              <p className="text-sm text-earth-400/60">/videos/padre-trabajando.mp4</p>
              <p className="text-xs text-earth-400/40 mt-1">Video: padre cuidando colmenas en las montañas</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
        </div>

        {/* Grid galería */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {GALLERY.map((item, i) => (
            <figure key={i} className={`relative rounded-2xl overflow-hidden shadow-lg group ${item.span} aspect-[4/3]`}>
              <div className="absolute inset-0 bg-gradient-to-br from-cream-200 to-earth-100">
                {/* Placeholder */}
                <div className="absolute inset-0 img-placeholder">
                  <div className="text-center p-4">
                    <span className="text-2xl block mb-1">📸</span>
                    <code className="text-[9px] text-earth-500/60">{item.src}</code>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-medium text-white">{item.caption}</p>
              </div>
            </figure>
          ))}
        </div>

        {/* Segundo video */}
        <div className="mt-8 rounded-3xl overflow-hidden shadow-xl aspect-[21/9] bg-gradient-to-br from-forest-800 to-forest-900 relative group cursor-pointer">
          <div className="absolute inset-0 img-placeholder opacity-30">
            <div className="text-center">
              <span className="text-4xl block mb-2">🍯</span>
              <p className="text-sm text-earth-400/60">/videos/extraccion-miel.mp4</p>
              <p className="text-xs text-earth-400/40">Video: extracción artesanal de miel en cámara lenta</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

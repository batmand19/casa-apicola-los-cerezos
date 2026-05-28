'use client';

import OptimizedImage from './OptimizedImage';
const GALLERY = [
  { src: '/images/padre-colmena-01.jpg', alt: 'Salvador Cañón trabajando en las colmenas al amanecer', caption: 'Cada mañana, el padre revisa las colmenas', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/extraccion-miel-01.jpg', alt: 'Extracción artesanal de miel', caption: 'Extracción sin prisa', span: '' },
  { src: '/images/abejas-flores.jpg', alt: 'Abejas Apis mellifera en flor de Arrayán', caption: 'Las abejas en su entorno natural', span: '' },
  { src: '/images/entorno-apiario.jpg', alt: 'Paisaje del apiario en las montañas de Caldas', caption: 'Nuestro hogar: las montañas de Caldas', span: 'sm:col-span-2' },
  { src: '/images/alimentacion-colmena.jpg', alt: 'Alimentación de colonias en época de escasez', caption: 'Cuidado en cada temporada', span: '' },
  { src: '/images/padre-colmena-02.jpg', alt: 'Salvador inspeccionando cuadros de la colmena', caption: 'Conocimiento de décadas', span: '' },
];

export default function BeeLife() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="bee-life-title">
      <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-[#1a150e] to-forest-900" aria-hidden="true" />
      <div className="absolute inset-0 hex-pattern opacity-10" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-400/70">Experiencia documental</span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-honey-400/50 to-transparent mx-auto my-6" />
          <h2 id="bee-life-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50">Vida de la colmena</h2>
          <p className="mt-5 text-base text-cream-300/50 max-w-2xl mx-auto">Un vistazo al día a día de nuestro apiario. Imágenes reales de Salvador Cañón trabajando con las abejas en las montañas de Caldas.</p>
        </div>

        {/* Video destacado */}
        <div className="mb-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 aspect-video bg-gradient-to-br from-earth-800 to-earth-900 relative group cursor-pointer">
          <div className="absolute inset-0 img-placeholder opacity-30"><div className="text-center"><span className="text-5xl block mb-3">🎬</span><p className="text-sm text-cream-300/40">/videos/padre-trabajando.mp4</p></div></div>
          <div className="absolute inset-0 flex items-center justify-center"><div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all duration-700 group-hover:scale-110"><svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div></div>
        </div>

        {/* Grid galería */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {GALLERY.map((item, i) => (
            <figure key={i} className={`relative rounded-2xl overflow-hidden shadow-lg group ${item.span} aspect-[4/3]`}>
              <OptimizedImage src={item.src} alt={item.alt} aspect="4/3" fallbackIcon="📸" fallbackLabel="Foto del apiario" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"><p className="text-sm font-medium text-white drop-shadow-md">{item.caption}</p></div>
            </figure>
          ))}
        </div>

        {/* Segundo video */}
        <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 aspect-[21/9] bg-gradient-to-br from-forest-800 to-forest-900 relative group cursor-pointer">
          <div className="absolute inset-0 img-placeholder opacity-25"><div className="text-center"><span className="text-4xl block mb-2">🍯</span><p className="text-sm text-cream-300/40">/videos/extraccion-miel.mp4</p></div></div>
          <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all duration-700 group-hover:scale-110"><svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div></div>
        </div>
      </div>
    </section>
  );
}

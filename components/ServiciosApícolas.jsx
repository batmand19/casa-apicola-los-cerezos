'use client';

import { trackClick } from '@/lib/tracking';

const SERVICES = [
  { icon: '🎓', title: 'Capacitaciones', text: 'Cursos prácticos sobre manejo de colmenas Apis mellifera, desde lo básico hasta técnicas avanzadas.' },
  { icon: '🤝', title: 'Acompañamiento', text: 'Acompañamiento personalizado para nuevos apicultores durante sus primeros pasos en la apicultura.' },
  { icon: '📋', title: 'Asesorías', text: 'Asesoría técnica para apiarios existentes: salud de colonias, manejo estacional y optimización de producción.' },
  { icon: '🔍', title: 'Orientación', text: 'Orientación básica para quienes desean iniciar en la apicultura sostenible de la mano de más de 30 años de experiencia.' },
  { icon: '📖', title: 'Conocimiento práctico', text: 'Transmisión de conocimientos apícolas adquiridos mediante décadas de capacitación, cursos y experiencia directa.' },
  { icon: '🌱', title: 'Apicultura responsable', text: 'Enseñamos prácticas que respetan los ciclos naturales de la Apis mellifera y protegen el ecosistema.' },
];

export default function ServiciosApícolas() {
  return (
    <section className="py-24 sm:py-32 bg-earth-900 relative overflow-hidden hex-pattern" aria-labelledby="services-title">
      <div className="absolute inset-0 bg-gradient-to-b from-earth-900 via-earth-900/95 to-earth-900" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-honey-500/4 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-400/70">Servicios</span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-honey-400/50 to-transparent mx-auto my-6" />
          <h2 id="services-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50">Servicios Apícolas</h2>
          <p className="mt-5 text-base text-cream-300/50 max-w-xl mx-auto">
            Salvador Cañón comparte más de 30 años de experiencia con quienes desean aprender el oficio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-cream-100/[0.06] hover:bg-white/[0.06] hover:border-honey-500/10 transition-all duration-700 group">
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-700" aria-hidden="true">{s.icon}</span>
              <h3 className="font-display text-lg font-bold text-cream-100 mb-2">{s.title}</h3>
              <p className="text-sm text-cream-300/50 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://wa.me/573208065008?text=Hola%2C%20me%20interesan%20los%20servicios%20ap%C3%ADcolas" target="_blank" rel="noopener noreferrer" onClick={() => trackClick('services_whatsapp', 'whatsapp')} className="btn-whatsapp inline-flex">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Contactar por servicios
          </a>
        </div>
      </div>
    </section>
  );
}

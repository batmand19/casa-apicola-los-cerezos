'use client';

const WAYS = [
  { icon: '☕', title: 'Miel con café', text: 'Una cucharada en tu tinto o café de la mañana.' },
  { icon: '🍓', title: 'Miel con frutas', text: 'Rocía sobre frutas frescas o en ensaladas.' },
  { icon: '🧀', title: 'Miel con queso', text: 'Acompaña quesos curados o suaves.' },
  { icon: '🥣', title: 'Polen con yogur', text: 'Agrega una cucharadita a tu yogur diario.' },
  { icon: '🫖', title: 'Miel caliente', text: 'Disuelve en agua tibia con limón.' },
  { icon: '🍯', title: 'Directamente del cucharón', text: 'La forma más pura de disfrutarla.' },
];

export default function ConsumirMiel() {
  return (
    <section className="py-20 sm:py-24 bg-cream-50 paper-texture" aria-labelledby="consume-title">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">Disfrútala</span>
          <div className="divider-elegant mb-6" />
          <h2 id="consume-title" className="font-display text-2xl sm:text-3xl font-bold text-earth-900">Cómo consumir nuestra miel</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {WAYS.map((w, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-cream-200 text-center group hover:border-honey-300/50 hover:shadow-md transition-all duration-500">
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{w.icon}</span>
              <h3 className="font-display text-sm font-bold text-earth-900 mb-1">{w.title}</h3>
              <p className="text-xs text-earth-400 leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

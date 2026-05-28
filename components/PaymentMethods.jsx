'use client';

export default function PaymentMethods() {
  return (
    <section className="py-24 sm:py-32 bg-cream-100" aria-labelledby="payment-title">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300/50 shadow-lg shadow-black/[0.03]">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">Compra segura</span>
            <div className="divider-elegant mb-6" />
            <h2 id="payment-title" className="font-display text-2xl sm:text-3xl font-bold text-earth-900 mb-3">Métodos de pago</h2>
            <p className="text-sm text-earth-500 max-w-lg mx-auto">Preferimos un trato cercano y humano. No utilizamos pasarelas automáticas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: '💬', title: 'WhatsApp', desc: 'Escríbenos y te atendemos al instante' },
              { icon: '🏦', title: 'Transferencia', desc: 'Bancolombia, Davivienda, Nequi' },
              { icon: '💰', title: 'Contraentrega', desc: 'Solo en Caldas y Boyacá' },
            ].map((item) => (
              <div key={item.title} className="text-center p-5 rounded-2xl bg-cream-50 border border-cream-200 hover:border-honey-300 transition-colors duration-300">
                <span className="text-2xl block mb-2" aria-hidden="true">{item.icon}</span>
                <h3 className="font-semibold text-earth-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-earth-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
            <h3 className="text-base font-bold text-earth-900 mb-4 text-center">¿Cómo comprar?</h3>
            <ol className="space-y-3 text-sm text-earth-600">
              {[
                'Selecciona el producto y cantidad.',
                'Haz clic en "Comprar por WhatsApp" o "Pedir por correo".',
                'Te contactamos para confirmar disponibilidad y envío.',
                'Realizas el pago (transferencia, Nequi o contraentrega).',
                'Te enviamos el producto. ¡Así de simple!',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-honey-100 text-honey-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-6 text-xs text-earth-400 text-center flex items-center justify-center gap-1.5">
            🔒 No compartimos tus datos. Pago seguro por transferencia o contraentrega.
          </p>
        </div>
      </div>
    </section>
  );
}

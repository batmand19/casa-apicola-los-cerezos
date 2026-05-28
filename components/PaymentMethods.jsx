'use client';

export default function PaymentMethods() {
  return (
    <section className="py-12 sm:py-16 bg-white" aria-labelledby="payment-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-tierra-50 to-miel-50 rounded-3xl p-8 sm:p-10 border border-tierra-100">
          {/* Encabezado */}
          <div className="text-center mb-8">
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-tierra-700 bg-tierra-100 rounded-full">
              Compra segura
            </span>
            <h2 id="payment-title" className="text-2xl sm:text-3xl font-bold text-tierra-900 mb-3">
              Métodos de pago y compra
            </h2>
            <p className="text-tierra-700/80 max-w-xl mx-auto">
              En Casa Apícola Los Cerezos preferimos un trato cercano y humano. No utilizamos pasarelas automáticas.
            </p>
          </div>

          {/* Opciones de pago */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {/* WhatsApp */}
            <div className="text-center p-5 rounded-2xl bg-white border border-tierra-100">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-semibold text-tierra-900 mb-1">WhatsApp</h3>
              <p className="text-sm text-tierra-700/70">Escríbenos y te atendemos al instante</p>
            </div>

            {/* Transferencia */}
            <div className="text-center p-5 rounded-2xl bg-white border border-tierra-100">
              <div className="w-12 h-12 rounded-full bg-miel-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-miel-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-tierra-900 mb-1">Transferencia</h3>
              <p className="text-sm text-tierra-700/70">Bancolombia, Davivienda, Nequi</p>
            </div>

            {/* Contraentrega */}
            <div className="text-center p-5 rounded-2xl bg-white border border-tierra-100">
              <div className="w-12 h-12 rounded-full bg-bosque-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-bosque-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-tierra-900 mb-1">Contraentrega</h3>
              <p className="text-sm text-tierra-700/70">Solo en Caldas y Boyacá</p>
            </div>
          </div>

          {/* Pasos */}
          <div className="bg-white rounded-2xl p-6 border border-tierra-100">
            <h3 className="text-lg font-bold text-tierra-900 mb-4 text-center">¿Cómo comprar?</h3>
            <ol className="space-y-3 text-sm text-tierra-700">
              {[
                'Selecciona el producto y cantidad que deseas.',
                'Haz clic en "Comprar por WhatsApp" o "Pedir por correo".',
                'Te contactaremos para confirmar disponibilidad, precio total y coordinar envío.',
                'Realizas el pago (transferencia, Nequi o contraentrega).',
                'Te enviamos el producto. ¡Así de simple!',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-miel-100 text-miel-700 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Seguridad */}
          <div className="mt-6 text-center">
            <p className="text-xs text-tierra-700/60 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              No compartimos tus datos. Pago seguro por transferencia o contraentrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

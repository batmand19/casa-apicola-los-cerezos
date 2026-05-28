'use client';

import { useState } from 'react';
import { trackDownloadGuide } from '@/lib/tracking';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validación básica
    if (!name.trim()) {
      setError('Por favor, ingresa tu nombre.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Simulación de envío (en producción, conectar con servicio real)
    const leadData = {
      name: name.trim(),
      email: email.trim(),
      source: 'lead_magnet_guide',
      timestamp: new Date().toISOString(),
    };

    console.log('[Lead Magnet] Datos capturados:', leadData);
    console.log('[Lead Magnet] PRÓXIMO PASO: Conectar con servicio de email marketing');
    console.log('[Lead Magnet] Opciones: Mailchimp, Brevo (Sendinblue), ConvertKit, MailerLite');
    console.log('[Lead Magnet] Endpoint sugerido: POST /api/subscribe');

    /*
     * INSTRUCCIONES PARA CONECTAR A SERVICIO REAL:
     *
     * 1. Mailchimp:
     *    fetch('https://us1.api.mailchimp.com/3.0/lists/LIST_ID/members', {
     *      method: 'POST',
     *      headers: { 'Authorization': 'apikey YOUR_API_KEY', 'Content-Type': 'application/json' },
     *      body: JSON.stringify({ email_address: email, status: 'subscribed', merge_fields: { FNAME: name } })
     *    });
     *
     * 2. Brevo (Sendinblue):
     *    fetch('https://api.brevo.com/v3/contacts', {
     *      method: 'POST',
     *      headers: { 'api-key': 'YOUR_API_KEY', 'Content-Type': 'application/json' },
     *      body: JSON.stringify({ email, listIds: [YOUR_LIST_ID], attributes: { FIRSTNAME: name } })
     *    });
     *
     * 3. ConvertKit:
     *    fetch('https://api.convertkit.com/v3/forms/FORM_ID/subscribe', {
     *      method: 'POST',
     *      headers: { 'Content-Type': 'application/json' },
     *      body: JSON.stringify({ api_key: 'YOUR_API_KEY', email, first_name: name })
     *    });
     *
     * 4. MailerLite:
     *    fetch('https://connect.mailerlite.com/api/subscribers', {
     *      method: 'POST',
     *      headers: { 'Authorization': 'Bearer YOUR_API_KEY', 'Content-Type': 'application/json' },
     *      body: JSON.stringify({ email, groups: ['YOUR_GROUP_ID'], fields: { name } })
     *    });
     */

    // Guardar en sessionStorage como respaldo
    try {
      const existing = JSON.parse(sessionStorage.getItem('cerezos_leads') || '[]');
      existing.push(leadData);
      sessionStorage.setItem('cerezos_leads', JSON.stringify(existing));
    } catch {
      // Ignorar errores de storage
    }

    trackDownloadGuide(name.trim(), email.trim());
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-miel-100 via-miel-50 to-tierra-50" aria-labelledby="lead-magnet-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-miel-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Contenido decorativo */}
            <div className="md:col-span-2 bg-gradient-to-br from-miel-200 to-miel-300 p-8 sm:p-10 flex flex-col items-center justify-center text-center">
              <span className="text-6xl mb-4" aria-hidden="true">🍯</span>
              <h3 className="text-xl font-bold text-miel-900 mb-2">
                Guía gratuita
              </h3>
              <p className="text-sm text-miel-800/80 leading-relaxed">
                &quot;Los 10 usos más creativos de la miel&quot; — cocina, salud y belleza.
              </p>
              <div className="mt-4 px-4 py-2 bg-white/60 rounded-full">
                <p className="text-sm font-semibold text-miel-800">
                  + 10% de descuento en tu primera compra
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="md:col-span-3 p-8 sm:p-10">
              {!submitted ? (
                <>
                  <h3
                    id="lead-magnet-title"
                    className="text-xl sm:text-2xl font-bold text-tierra-900 mb-2"
                  >
                    Aprende a sacarle el máximo provecho a nuestra miel
                  </h3>
                  <p className="text-sm text-tierra-700/80 mb-6 leading-relaxed">
                    Recibe nuestra guía de usos de la miel (PDF) + un código de descuento
                    del 10% para tu primera compra. Solo envío de correo, sin spam.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="lead-name" className="block text-sm font-medium text-tierra-800 mb-1.5">
                        Tu nombre
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej: María García"
                        className="w-full px-4 py-3 text-sm border-2 border-tierra-200 rounded-xl focus:border-miel-500 focus:ring-0 outline-none transition-colors min-h-[48px]"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-email" className="block text-sm font-medium text-tierra-800 mb-1.5">
                        Tu correo electrónico
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maria@correo.com"
                        className="w-full px-4 py-3 text-sm border-2 border-tierra-200 rounded-xl focus:border-miel-500 focus:ring-0 outline-none transition-colors min-h-[48px]"
                        aria-required="true"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600" role="alert">{error}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 text-base font-semibold text-white bg-miel-600 hover:bg-miel-700 active:bg-miel-800 rounded-xl shadow-lg shadow-miel-500/25 transition-all duration-200 min-h-[48px]"
                    >
                      Enviar guía y descuento →
                    </button>

                    <p className="text-xs text-tierra-700/50 text-center">
                      Te enviaremos la guía por email y tu código de descuento. Puedes darte de baja en cualquier momento.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <span className="text-5xl mb-4 block" aria-hidden="true">✉️</span>
                  <h3 className="text-xl font-bold text-tierra-900 mb-2">
                    ¡Revisa tu correo!
                  </h3>
                  <p className="text-tierra-700 leading-relaxed">
                    Te enviamos la guía de usos de la miel y tu código de descuento del 10%.
                    Si no lo encuentras, revisa la carpeta de spam.
                  </p>
                  <p className="mt-4 text-sm text-tierra-700/60">
                    Gracias, {name}. ¡Esperamos que disfrutes nuestra miel!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

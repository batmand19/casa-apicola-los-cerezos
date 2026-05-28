'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/tracking';

export default function PostPurchaseFeedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;

    const feedback = {
      rating,
      comment: comment.trim(),
      timestamp: new Date().toISOString(),
      source: 'post_purchase_feedback',
    };

    console.log('[Feedback] Opinion recibida:', feedback);
    console.log('[Feedback] PRÓXIMO PASO: Conectar con base de datos o servicio de reviews');

    try {
      const existing = JSON.parse(localStorage.getItem('cerezos_feedback') || '[]');
      existing.push(feedback);
      localStorage.setItem('cerezos_feedback', JSON.stringify(existing));
    } catch { /* ignore */ }

    trackEvent('submit_feedback', { rating, has_comment: !!comment.trim() });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-12 bg-bosque-50">
        <div className="max-w-lg mx-auto px-4 text-center">
          <span className="text-4xl block mb-3" aria-hidden="true">💚</span>
          <h3 className="text-xl font-bold text-tierra-900 mb-2">
            ¡Gracias por tu opinión!
          </h3>
          <p className="text-tierra-700 text-sm">
            Nos ayuda a seguir mejorando. ¡Esperamos verte pronto de nuevo!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-bosque-50" aria-labelledby="feedback-title">
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-bosque-100">
          <h3
            id="feedback-title"
            className="text-lg font-bold text-tierra-900 text-center mb-1"
          >
            ¿Qué tal tu experiencia?
          </h3>
          <p className="text-sm text-tierra-700/70 text-center mb-6">
            Tu opinión nos ayuda a mejorar. ¡Gracias!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Estrellas */}
            <div className="text-center">
              <p className="text-sm font-medium text-tierra-800 mb-3">
                Califica tu experiencia:
              </p>
              <div className="flex justify-center gap-1" role="radiogroup" aria-label="Calificación">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-transform hover:scale-110"
                    aria-label={`${star} estrella${star > 1 ? 's' : ''}`}
                  >
                    <svg
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoverRating || rating)
                          ? 'text-miel-500'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Comentario */}
            <div>
              <label htmlFor="feedback-comment" className="block text-sm font-medium text-tierra-800 mb-1.5">
                Cuéntanos tu experiencia (opcional)
              </label>
              <textarea
                id="feedback-comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="¿Qué te gustó? ¿Algún建议?"
                rows={3}
                className="w-full px-4 py-3 text-sm border-2 border-tierra-200 rounded-xl focus:border-bosque-500 focus:ring-0 outline-none transition-colors resize-none min-h-[80px]"
              />
            </div>

            <button
              type="submit"
              disabled={rating === 0}
              className={`w-full px-6 py-3.5 text-base font-semibold rounded-xl transition-all duration-200 min-h-[48px] ${
                rating > 0
                  ? 'text-white bg-bosque-600 hover:bg-bosque-700 shadow-lg shadow-bosque-600/20'
                  : 'text-tierra-400 bg-gray-100 cursor-not-allowed'
              }`}
            >
              Enviar feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

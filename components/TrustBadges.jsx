'use client';

export default function TrustBadges() {
  const badges = [
    { icon: '🔒', label: 'Pago Seguro' },
    { icon: '🚚', label: 'Envíos Colombia' },
    { icon: '🐝', label: 'Trazabilidad Meliphera' },
    { icon: '🌿', label: '100% Pura' },
  ];

  return (
    <div className="trust-badges-grid grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 my-5" role="list" aria-label="Sellos de confianza">
      {badges.map((b) => (
        <div key={b.label} role="listitem" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-cream-50 border border-cream-200 text-[11px] font-medium text-earth-600 min-h-[40px]">
          <span aria-hidden="true">{b.icon}</span>
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}

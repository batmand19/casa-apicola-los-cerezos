'use client';

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      label: 'Pago Seguro',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM5.317 18.872A9.002 9.002 0 0112 3c2.393 0 4.574.856 6.248 2.268M5.317 18.872A9.002 9.002 0 0012 21c2.393 0 4.574-.856 6.248-2.268" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.317 18.872L3 21m2.317-2.128L8 17m-2.683 1.872L3 21m2.317-2.128L12 3" />
        </svg>
      ),
      label: 'Envíos a toda Colombia',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      label: 'Trazabilidad Meliphera',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      label: 'Miel 100% Pura · Sin Aditivos',
    },
  ];

  return (
    <div
      className="trust-badges-grid grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 my-6"
      role="list"
      aria-label="Sellos de confianza"
    >
      {badges.map((badge) => (
        <div
          key={badge.label}
          role="listitem"
          className="inline-flex items-center gap-2 px-3 py-2.5 rounded-full bg-bosque-50 border border-bosque-200 text-xs sm:text-sm font-medium text-bosque-800 min-h-[44px]"
        >
          <span className="text-bosque-600 flex-shrink-0">{badge.icon}</span>
          <span className="leading-tight">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

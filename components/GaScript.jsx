'use client';

import Script from 'next/script';
import { getGAScript, isGAEnabled } from '@/lib/ga';

export default function GaScript() {
  const gaScript = getGAScript();

  if (!isGAEnabled() || !gaScript) return null;

  return (
    <Script
      src={gaScript.src}
      strategy={gaScript.strategy}
      onLoad={() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
      }}
    />
  );
}

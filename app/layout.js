import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsletterPopup from '@/components/NewsletterPopup';
import { getGAScript, isGAEnabled } from '@/lib/ga';
import { organizationSchema } from '@/lib/schema';

const SITE_URL = 'https://casapicolaloscercez.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Casa Apícola Los Cerezos | Miel Pura Artesanal de Caldas',
    template: '%s | Casa Apícola Los Cerezos',
  },
  description: 'Miel y polen de abejas Meliphera, cosechados sosteniblemente en las montañas de Caldas. Tradición familiar, sabor auténtico y producción responsable. Envíos a toda Colombia.',
  keywords: ['miel pura', 'polen de abejas', 'abejas Meliphera', 'miel colombiana', 'Caldas', 'Boyacá', 'apicultura sostenible', 'miel cundiboyacense', 'miel artesanal Colombia', 'Páramo de Rabanal'],
  authors: [{ name: 'Casa Apícola Los Cerezos' }],
  creator: 'Casa Apícola Los Cerezos',
  publisher: 'Casa Apícola Los Cerezos',
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Casa Apícola Los Cerezos | Miel Pura Artesanal',
    description: 'Miel y polen de abejas Meliphera, cosechados sosteniblemente en las montañas de Caldas.',
    url: SITE_URL,
    siteName: 'Casa Apícola Los Cerezos',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Miel pura artesanal de Casa Apícola Los Cerezos' }],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Apícola Los Cerezos | Miel Pura Artesanal',
    description: 'Miel y polen de abejas Meliphera. Tradición familiar, sabor auténtico.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function RootLayout({ children }) {
  const gaScript = getGAScript();
  const orgSchema = organizationSchema();

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {isGAEnabled() && gaScript && (
          <Script src={gaScript.src} strategy={gaScript.strategy} onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
          }} />
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-cream-100 text-earth-800 font-body">
        <Header />
        <div className="pt-0">
          {children}
        </div>
        <WhatsAppButton />
        <NewsletterPopup />
      </body>
    </html>
  );
}

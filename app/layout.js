import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import NewsletterPopup from '@/components/NewsletterPopup';
import { getGAScript, isGAEnabled } from '@/lib/ga';
import { organizationSchema } from '@/lib/schema';

const SITE_URL = 'https://casapicolaloscercez.com'; // ← Cambiar por dominio real

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Casa Apícola Los Cerezos | Miel pura de Caldas - Boyacá',
    template: '%s | Casa Apícola Los Cerezos',
  },
  description:
    'Miel y polen de abejas Meliphera, cosechados sosteniblemente en las montañas de Caldas. Envíos a toda Colombia. Descubre la pureza de la flora cundiboyacense.',
  keywords: [
    'miel pura', 'polen de abejas', 'abejas Meliphera', 'miel colombiana',
    'Caldas', 'Boyacá', 'apicultura sostenible', 'miel cundiboyacense',
    'miel artesanal Colombia', 'Páramo de Rabanal', 'miel de Caldas',
    'apicultura Boyacá', 'abejas nativas sin aguijón', 'Eucalipto Romero Salvia',
  ],
  authors: [{ name: 'Casa Apícola Los Cerezos' }],
  creator: 'Casa Apícola Los Cerezos',
  publisher: 'Casa Apícola Los Cerezos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Casa Apícola Los Cerezos | Miel pura de Caldas - Boyacá',
    description: 'Miel y polen de abejas Meliphera, cosechados sosteniblemente en las montañas de Caldas. Envíos a toda Colombia.',
    url: SITE_URL,
    siteName: 'Casa Apícola Los Cerezos',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // ← Crear imagen 1200x630
        width: 1200,
        height: 630,
        alt: 'Miel pura de Casa Apícola Los Cerezos - Caldas, Colombia',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Apícola Los Cerezos | Miel pura de Caldas - Boyacá',
    description: 'Miel y polen de abejas Meliphera, cosechados sosteniblemente en las montañas de Caldas.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  const gaScript = getGAScript();
  const orgSchema = organizationSchema();

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* GA4 Script — solo carga si NEXT_PUBLIC_GA_MEASUREMENT_ID está definido */}
        {isGAEnabled() && gaScript && (
          <Script
            src={gaScript.src}
            strategy={gaScript.strategy}
            onLoad={() => {
              window.dataLayer = window.dataLayer || [];
              function gtag() { window.dataLayer.push(arguments); }
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
                page_title: document.title,
                page_location: window.location.href,
              });
            }}
          />
        )}

        {/* JSON-LD: Organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        {/* Preconnect a dominios críticos para LCP */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>

      <body className="antialiased bg-miel-50 text-tierra-900">
        <Header />
        <div className="pt-16 sm:pt-18">
          {children}
        </div>
        <WhatsAppButton />
        <NewsletterPopup />

        {/*
          ============================================
          PREPARACIÓN PARA FUTURO (Sprint 7+)
          ============================================

          1. MULTILENGUAJE (i18n):
             - Instalar: npm install next-intl
             - Crear: /messages/es.json, /messages/en.json
             - Configurar: next.config.mjs con i18n
             - Traducir: Hero, Story, Products, Footer
             - URLs: /en/honey, /es/miel
             - hreflang: <link rel="alternate" hreflang="es" href="..." />

          2. PÁGINAS POR REGIÓN:
             - /regiones/bogota  → Envío 2-3 días, testimonios locales
             - /regiones/medellin → Envío 3-4 días
             - /regiones/cali    → Envío 3-5 días
             - Generar con generateStaticParams()

          3. VERCEL ANALYTICS:
             - npm install @vercel/analytics
             - Importar: import { Analytics } from '@vercel/analytics/react'
             - Añadir: <Analytics /> en layout

          4. GUÍA DE RECETAS (PDF/EPUB de pago):
             - Crear: /tienda/guia-recetas
             - Precio: $25,000 - $35,000 COP
             - Integrar con ePayco o Mercado Pago
             - Incluir: 20+ recetas, fotos, tips de almacenamiento
             - Marketing: "Descarga nuestra guía profesional de usos de la miel"
        */}
      </body>
    </html>
  );
}

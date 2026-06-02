import './globals.css';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import CartDrawer from '@/components/CartDrawer';
import GaScript from '@/components/GaScript';
import { organizationSchema } from '@/lib/schema';

const SITE_URL = 'https://casa-apicola-los-cerezos.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Casa Apícola Los Cerezos | Miel Pura Artesanal de Caldas', template: '%s | Casa Apícola Los Cerezos' },
  description: 'Miel y polen de abejas Apis mellifera, cosechados sosteniblemente en las montañas de Caldas. Más de 30 años de tradición familiar. Envíos a toda Colombia.',
  keywords: ['miel pura', 'polen de abejas', 'Apis mellifera', 'miel colombiana', 'Caldas', 'Boyacá', 'apicultura sostenible', 'miel cundiboyacense', 'miel artesanal', 'Páramo de Rabanal'],
  authors: [{ name: 'Casa Apícola Los Cerezos' }],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: { title: 'Casa Apícola Los Cerezos | Miel Pura Artesanal', description: 'Miel y polen de abejas Apis mellifera. Más de 30 años de tradición familiar.', url: SITE_URL, images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }], locale: 'es_CO', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Casa Apícola Los Cerezos | Miel Pura Artesanal', description: 'Miel y polen de abejas Apis mellifera. Tradición familiar de más de 30 años.' },
  other: {
    'manifest': '/manifest.json',
    'theme-color': '#d4952a',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Los Cerezos',
  },
};

export default function RootLayout({ children }) {
  const orgSchema = organizationSchema();

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <GaScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-cream-100 text-earth-800 font-body">
        <Header />
        <div className="pt-0">{children}</div>
        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

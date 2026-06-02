import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { productSchema, breadcrumbSchema } from '@/lib/schema';
import ProductDetailClient from './ProductDetailClient';

const SITE_URL = 'https://casa-apicola-los-cerezos.vercel.app';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) return {};

  const lowestPrice = Math.min(...product.sizes.map((s) => s.price));
  const highestPrice = Math.max(...product.sizes.map((s) => s.price));

  return {
    title: `${product.name} | Casa Apícola Los Cerezos`,
    description: `${product.description.sensory.sabor}. ${product.description.usos} Envíos a toda Colombia.`,
    openGraph: {
      title: `${product.name} | Casa Apícola Los Cerezos`,
      description: product.description.usos,
      type: 'website',
      images: [{ url: product.image, alt: product.name, width: 1200, height: 630 }],
      url: `${SITE_URL}/producto/${product.id}`,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${product.name} | Casa Apícola Los Cerezos`,
      description: product.description.usos,
      images: [product.image],
    },
    alternates: {
      canonical: `${SITE_URL}/producto/${product.id}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) notFound();

  const lowestPrice = Math.min(...product.sizes.map((s) => s.price));
  const highestPrice = Math.max(...product.sizes.map((s) => s.price));

  const productLD = productSchema({
    name: product.name,
    description: product.description.floral,
    image: product.image,
    lowPrice: lowestPrice,
    highPrice: highestPrice,
  });

  const breadcrumbLD = breadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Productos', url: '/#productos' },
    { name: product.name },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }} />

      <section className="py-12 sm:py-16 md:py-24 bg-cream-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-earth-500" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-honey-600 transition-colors">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#productos" className="hover:text-honey-600 transition-colors">Productos</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-earth-800" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          {/* Product detail (client component for interactivity) */}
          <ProductDetailClient product={product} />

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/#productos" className="inline-flex items-center text-sm font-medium text-earth-600 hover:text-honey-600 transition-colors">
              <svg className="mr-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

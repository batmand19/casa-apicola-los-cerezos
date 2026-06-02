import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/data/articles';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import BlogArticleImage from '@/components/BlogArticleImage';
import ShareButtons from '@/components/ShareButtons';

const SITE_URL = 'https://casapicolaloscercez.com';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    robots: { index: true, follow: true },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ['Casa Apícola Los Cerezos'],
      images: [{ url: article.image, alt: article.imageAlt, width: 1200, height: 630 }],
      url: `${SITE_URL}/blog/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug}`,
    },
  };
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="text-base sm:text-lg text-tierra-700 leading-[1.8] mb-6">{block.text}</p>;
    case 'heading':
      return <h2 className="text-2xl sm:text-3xl font-bold text-tierra-900 mt-10 mb-4 leading-tight">{block.text}</h2>;
    case 'subheading':
      return <h3 className="text-xl sm:text-2xl font-semibold text-tierra-800 mt-8 mb-3">{block.text}</h3>;
    case 'list':
      return (
        <ul className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-tierra-700 leading-[1.7]">
              <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-miel-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'tip':
      return (
        <div className="my-8 p-5 rounded-xl bg-bosque-50 border border-bosque-200">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 text-xl" aria-hidden="true">💡</span>
            <p className="text-sm sm:text-base text-bosque-800 leading-relaxed font-medium">{block.text}</p>
          </div>
        </div>
      );
    case 'warning':
      return (
        <div className="my-8 p-5 rounded-xl bg-amber-50 border border-amber-300">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 text-xl" aria-hidden="true">⚠️</span>
            <p className="text-sm sm:text-base text-amber-900 leading-relaxed">{block.text}</p>
          </div>
        </div>
      );
    case 'quote':
      return (
        <blockquote className="my-8 pl-5 border-l-4 border-miel-400 italic text-tierra-700/90 text-base sm:text-lg leading-[1.8]">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function ArticlePage({ params }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleLD = articleSchema(article);
  const breadcrumbLD = breadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: article.title },
  ]);

  return (
    <>
      {/* JSON-LD: Article + Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }} />

      <article className="py-12 sm:py-16 md:py-24 bg-miel-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-tierra-700/60" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-miel-700 transition-colors">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-miel-700 transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-tierra-700 truncate max-w-[200px] sm:max-w-none" aria-current="page">{article.title}</li>
            </ol>
          </nav>

          {/* Encabezado */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-miel-600 rounded-full">{article.category}</span>
              <time dateTime={article.date} className="text-sm text-tierra-700/60">
                {new Date(article.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span className="text-tierra-700/40" aria-hidden="true">·</span>
              <span className="text-sm text-tierra-700/60">{article.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-tierra-900 leading-[1.2] mb-4">{article.title}</h1>
            <p className="text-lg text-tierra-700/80 leading-relaxed">{article.excerpt}</p>
          </header>

          {/* Imagen destacada */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-miel-100 to-miel-200">
            <BlogArticleImage src={article.image} alt={article.imageAlt} category={article.category} />
          </div>

          {/* Contenido */}
          <div className="prose-width mx-auto">
            {article.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>

          {/* Compartir */}
          <div className="mt-8">
            <ShareButtons title={article.title} url={`/blog/${article.slug}`} />
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-tierra-100 text-center">
            <p className="text-tierra-700/80 mb-4">¿Te gustó este artículo? Prueba nuestra miel artesanal de Caldas.</p>
            <Link href="/#productos" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-miel-600 hover:bg-miel-700 rounded-xl shadow-lg shadow-miel-500/25 transition-all duration-200 min-h-[48px]">
              Ver productos
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-tierra-700 hover:text-miel-700 transition-colors">
              <svg className="mr-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

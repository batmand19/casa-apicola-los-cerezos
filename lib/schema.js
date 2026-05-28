/**
 * Generadores de JSON-LD (Schema.org) para SEO
 * Casa Apícola Los Cerezos
 *
 * Referencia: https://schema.org
 * Validador: https://search.google.com/test/rich-results
 */

const SITE_URL = 'https://casapicolaloscercez.com'; // ← Cambiar por dominio real
const SITE_NAME = 'Casa Apícola Los Cerezos';

/**
 * Schema de organización / LocalBusiness.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'Productores artesanales de miel y polen de abejas Meliphera en las montañas de Caldas, Colombia. Más de 15 años de apicultura sostenible.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    email: 'info@casaapicolaloscercez.com', // ← Completar
    telephone: '+57-320-806-5008', // ← Completar
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Caldas',
      addressRegion: 'Boyacá',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.55,  // ← Coordenadas reales del apiario
      longitude: -73.45,
    },
    sameAs: [
      'https://instagram.com/casapicolaloscercez',
      'https://facebook.com/casapicolaloscercez',
      'https://wa.me/573208065008',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Productos Casa Apícola Los Cerezos',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Miel Multifloral Meliphera',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Polen Apícola Meliphera',
          },
        },
      ],
    },
  };
}

/**
 * Schema de producto.
 * @param {Object} product - Datos del producto
 */
export function productSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image ? `${SITE_URL}${product.image}` : undefined,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'COP',
      lowPrice: product.lowPrice,
      highPrice: product.highPrice,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/#productos`,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Flora',
        value: 'Eucalipto, Romero, Salvia, Uva de anís, Arrayán',
      },
      {
        '@type': 'PropertyValue',
        name: 'Origen',
        value: 'Montañas de Caldas, Colombia',
      },
      {
        '@type': 'PropertyValue',
        name: 'Tipo de abeja',
        value: 'Meliphera (nativa sin aguijón)',
      },
    ],
  };
}

/**
 * Schema de artículo de blog.
 * @param {Object} article - Datos del artículo
 */
export function articleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image ? `${SITE_URL}${article.image}` : undefined,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
    keywords: article.keywords || 'miel, abejas Meliphera, apicultura sostenible',
  };
}

/**
 * Schema de website (breadcrumb + search).
 */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Schema de breadcrumb.
 * @param {Array} items - [{name, url}]
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : SITE_URL,
    })),
  };
}

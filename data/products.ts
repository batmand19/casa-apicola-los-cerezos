/**
 * Catálogo de productos — Casa Apícola Los Cerezos
 */

import type { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'miel-multifloral',
    name: 'Miel Multifloral',
    category: 'Miel',
    badge: 'Best Seller',
    tags: ['Cosecha artesanal', 'Sin mezclas', 'Origen Boyacá', 'Producción familiar'],
    description: {
      floral: 'Nuestras abejas Apis mellifera recolectan néctar de Eucalipto (mayo-agosto), Romero (enero-marzo), Salvia (abril-junio), Uva de anís (septiembre-noviembre) y Arrayán (febrero-abril).',
      sensory: {
        color: 'Ámbar claro con reflejos dorados',
        aroma: 'Notas florales con toques herbáceos y fondo sutil a eucalipto',
        sabor: 'Dulzor equilibrado, con matices frutales y un ligero toque especiado',
        textura: 'Cremosa y suave, con cristalización natural que garantiza pureza',
      },
      usos: 'Endulza tus infusiones, complementa tus postres, fortalece tu sistema inmunológico.',
      almacenamiento: 'Conservar en lugar fresco y seco, alejado de la luz directa. No refrigere.',
    },
    sizes: [
      { label: '500g', price: 30000 },
      { label: '1kg', price: 60000 },
    ],
    image: '/images/productos/miel-frasco-500g.jpg',
    images: {
      '500g': '/images/productos/miel-frasco-500g.jpg',
      '1kg': '/images/productos/miel-frasco-1kg.jpg',
    },
  },
  {
    id: 'polen-apol',
    name: 'Polen Apícola',
    category: 'Polen',
    badge: 'Superalimento',
    tags: ['Cosecha artesanal', 'Páramo de Rabanal', 'Producción familiar', '100% natural'],
    description: {
      floral: 'Polen multifloral recolectado de la flora silvestre del Páramo de Rabanal: Eucalipto, Romero, Salvia, Uva de anís y Arrayán.',
      sensory: {
        color: 'Tonos dorados a anaranjados, granulado fino',
        aroma: 'Fresco, floral, con notas terrosas y un toque dulce',
        sabor: 'Ligeramente dulce con matices florales y un final ácido',
        textura: 'Granulado suave, se disuelve fácilmente en líquidos',
      },
      usos: 'Complemento nutricional ideal para batidos, yogures y ensaladas. Rico en proteínas y antioxidantes.',
      almacenamiento: 'Conservar en lugar fresco y seco, alejado de la luz directa. No refrigere.',
    },
    sizes: [
      { label: 'Media libra', price: 30000 },
      { label: '1 libra', price: 60000 },
    ],
    image: '/images/productos/polen-media-libra.jpg',
    images: {
      'Media libra': '/images/productos/polen-media-libra.jpg',
      '1 libra': '/images/productos/polen-media-libra.jpg',
    },
  },
];

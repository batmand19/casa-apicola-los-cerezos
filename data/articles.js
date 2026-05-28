/**
 * Artículos del blog — Casa Apícola Los Cerezos
 * Sprint 4: Educación y Contenido de Valor
 *
 * Para añadir más artículos: simplemente agregar un objeto al array ARTICLES.
 * El sistema genera automáticamente las páginas dinámicas /blog/[slug].
 */

export const ARTICLES = [
  {
    slug: 'cristalizacion-miel-calidad',
    title: '¿Por qué se cristaliza la miel? (Y por qué es una señal de calidad)',
    metaTitle: '¿Por qué se cristaliza la miel? | Casa Apícola Los Cerezos',
    metaDescription:
      'Descubre por qué la miel cristaliza y por qué esto es señal de pureza y calidad. Aprende a volverla líquida sin perder sus propiedades.',
    date: '2026-05-15',
    readTime: '4 min de lectura',
    category: 'Educación',
    image: '/images/blog/cristalizacion-miel.jpg',
    imageAlt: 'Frasco de miel cristalizada de Casa Apícola Los Cerezos mostrando textura natural',
    excerpt:
      'La cristalización de la miel es un proceso natural que genera dudas. ¿Es mala señal? ¡Todo lo contrario! Te explicamos por qué la miel que cristaliza es miel pura.',
    content: [
      {
        type: 'paragraph',
        text: 'Si alguna vez abriste tu frasco de miel y encontraste una textura espesa o granulada, es probable que te hayas preguntado: ¿está bien? ¿Se dañó? La respuesta corta es no. La cristalización de la miel es un proceso completamente natural y, de hecho, es uno de los indicadores más confiables de que estás consumiendo miel pura.',
      },
      {
        type: 'heading',
        text: '¿Qué es la cristalización de la miel?',
      },
      {
        type: 'paragraph',
        text: 'La miel es una solución supersaturada de azúcares — principalmente glucosa y fructosa. Con el tiempo, la glucosa tiende a separarse de la solución y a formar cristales. Este es un proceso físico normal, no una reacción química que afecte la calidad del producto. La velocidad de cristalización depende de varios factores: la temperatura de almacenamiento, la proporción de glucosa versus fructosa, y la presencia de pequeñas partículas de polen o cera que actúan como "semillas" para la cristalización.',
      },
      {
        type: 'paragraph',
        text: 'Las mieles con mayor contenido de glucosa — como nuestras mieles multiflorales de la región cundiboyacense, provenientes del néctar de Eucalipto, Romero, Salvia, Uva de anís y Arrayán — tienden a cristalizar más rápido que otras. Esto no es un defecto; es una característica de su composición natural.',
      },
      {
        type: 'tip',
        text: 'Nuestra miel Meliphera cristaliza de forma natural. Esto es garantía de que no ha sido ultraprocesada ni pasteurizada en exceso.',
      },
      {
        type: 'heading',
        text: 'El mito de la "miel adulterada"',
      },
      {
        type: 'paragraph',
        text: 'Existe una creencia popular de que la miel cristalizada fue adulterada o mezclada con azúcar. Esto es falso. En realidad, ocurre exactamente lo contrario: las mieles que NUNCA cristalizan suelen ser las que han sido ultraprocesadas, calentadas a temperaturas muy altas o mezcladas con jarabe de maíz. El ultraproceso destruye enzimas naturales, aminoácidos y antioxidantes que le dan a la miel sus propiedades beneficiosas.',
      },
      {
        type: 'paragraph',
        text: 'En Casa Apícola Los Cerezos, nuestra miel se cosecha con métodos tradicionales que preservan estas enzimas naturales. Por eso cristaliza: porque está viva.'
      },
      {
        type: 'heading',
        text: '¿Cómo volver la miel líquida?',
      },
      {
        type: 'paragraph',
        text: 'Si prefieres la textura líquida, puedes cristalizar la miel de forma segura:',
      },
      {
        type: 'list',
        items: [
          'Coloca el frasco cerrado en un recipiente con agua tibia (no hirviendo).',
          'Mantén el agua a una temperatura de 40-45°C durante 15-20 minutos.',
          'Revuelve suavemente de vez en cuando para ayudar a disolver los cristales.',
          'Nunca uses microondas: el calor excesivo destruye las enzimas y altera el sabor.',
          'Nunca hiervas la miel: a partir de 60°C comienza a perder sus propiedades medicinales.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Recuerda: la cristalización no afecta el sabor, las propiedades nutricionales ni la seguridad de la miel. Es simplemente un cambio de estado físico, como cuando el agua se congela y luego se vuelve a derretir.',
      },
      {
        type: 'heading',
        text: 'Beneficios de la miel cruda y sin procesar',
      },
      {
        type: 'paragraph',
        text: 'La miel cruda — la que no ha sido calentada por encima de la temperatura del panal — conserva todas sus enzimas, antioxidantes y propiedades antibacterianas. Numerosos estudios han demostrado que la miel cruda tiene efectos positivos sobre la salud digestiva, el sistema inmunológico y la cicatrización de heridas. Al elegir una miel que cristaliza naturalmente, estás eligiendo un producto más cercano a su estado original, con todos sus beneficios intactos.',
      },
      {
        type: 'quote',
        text: 'La miel es uno de los pocos alimentos que no caduca jamás si se almacena correctamente. Incluso las mieles encontradas en tumbas egipcias de más de 3,000 años eran aún comestibles.',
      },
    ],
  },
  {
    slug: 'abejas-meliphera-ecosistemas-colombianos',
    title: 'La importancia de las abejas Meliphera en los ecosistemas colombianos',
    metaTitle: 'Abejas Meliphera: guardianas de los ecosistemas colombianos | Casa Apícola Los Cerezos',
    metaDescription:
      'Conoce a las abejas Meliphera, abejas nativas sin aguijón que polinizan la flora andina. Descubre su rol en la conservación de páramos y bosques.',
    date: '2026-04-20',
    readTime: '5 min de lectura',
    category: 'Conservación',
    image: '/images/blog/abejas-meliphera.jpg',
    imageAlt: 'Abejas Meliphera nativas sin aguijón en una flor de Arrayán del Páramo de Rabanal',
    excerpt:
      'Las abejas Meliphera son abejas nativas colombianas sin aguijón. Conoce su importancia ecológica y cómo la apicultura sostenible ayuda a protegerlas.',
    content: [
      {
        type: 'paragraph',
        text: 'Colombia es uno de los países con mayor biodiversidad del planeta, y en sus ecosistemas habita una criatura excepcional: la abeja Meliphera. Estas abejas nativas sin aguijón son protagonistas silenciosas pero fundamentales en la polinización de la flora de los Andes colombianos, incluyendo las flores de Eucalipto, Romero, Salvia, Uva de anís y Arrayán que dan carácter único a nuestras mieles.',
      },
      {
        type: 'heading',
        text: '¿Qué son las abejas Meliphera?',
      },
      {
        type: 'paragraph',
        text: 'Las abejas Meliphera pertenecen a un grupo de abejas nativas de América del Sur que se caracterizan por no tener aguijón. A diferencia de las abejas europeas (Apis mellifera), que fueron introducidas en Colombia durante la época colonial, las Meliphera han evolucionado durante millones de años en los ecosistemas tropicales andinos. Son más pequeñas que las abejas europeas, generalmente miden entre 5 y 8 milímetros, y poseen una coloración que va del negro al dorado con bandas en el abdomen.',
      },
      {
        type: 'paragraph',
        text: 'Su nombre "Meliphera" proviene del griego y hace referencia a su capacidad de producir miel. Aunque producen menos miel que las abejas europeas, su miel es considerada de alta calidad por sus propiedades medicinales y su sabor único, influenciado directamente por la flora silvestre de cada región.',
      },
      {
        type: 'heading',
        text: 'Diferencia con las abejas europeas (Apis mellifera)',
      },
      {
        type: 'paragraph',
        text: 'La diferencia más evidente es la ausencia de aguijón en las Meliphera. Sin embargo, las diferencias van mucho más allá:',
      },
      {
        type: 'list',
        items: [
          'Tamaño: las Meliphera son considerablemente más pequeñas.',
          'Colonias: forman colonias más pequeñas (200-800 individuos vs. 20,000-60,000 de Apis mellifera).',
          'Nidos: construyen sus nidos en cavidades naturales, huecos de árboles o estructuras artesanales.',
          'Polinización: son polinizadoras más eficientes de flores nativas por su tamaño reducido.',
          'Comportamiento: son extremadamente dóciles y no representan riesgo para personas o animales.',
          'Producción: una colonia de Meliphera produce entre 1 y 5 litros de miel al año, mientras que Apis mellifera puede producir entre 20 y 40 litros.',
        ],
      },
      {
        type: 'heading',
        text: 'Su rol en la polinización de flora nativa',
      },
      {
        type: 'paragraph',
        text: 'Las abejas Meliphera son polinizadores especializados de la flora andina. Su tamaño reducido les permite acceder a flores pequeñas que las abejas europeas no pueden polinizar eficientemente. En la zona de amortiguamiento del Páramo de Rabanal, donde se encuentra nuestro apiario, las Meliphera polinizan especies como el Eucalipto, el Romero, la Salvia silvestre, la Uva de anís y el Arrayán, manteniendo la diversidad vegetal que caracteriza estos ecosistemas.',
      },
      {
        type: 'paragraph',
        text: 'Sin la polinización de estas abejas nativas, muchas plantas endémicas de los Andes colombianos enfrentarían dificultades para reproducirse, lo que afectaría directamente la biodiversidad y la cadena alimentaria de estos ecosistemas frágiles.',
      },
      {
        type: 'heading',
        text: 'Conservación de páramos y bosques andinos',
      },
      {
        type: 'paragraph',
        text: 'Los páramos son ecosistemas de alta montaña que funcionan como "fábricas de agua" para millones de colombianos. La presencia de abejas Meliphera en estas zonas es un indicador de salud ecológica. Cuando apoyamos la apicultura sostenible con abejas nativas, contribuimos indirectamente a la conservación de estos ecosistemas estratégicos.',
      },
      {
        type: 'paragraph',
        text: 'En Casa Apícola Los Cerezos, practicamos una apicultura que respeta los ciclos naturales de las Meliphera. No usamos antibióticos, dejamos suficiente miel para que las colonias sobrevivan el invierno, y trabajamos con estructuras que imitan sus nidos naturales. Esta práctica no solo produce miel de excelente calidad, sino que protege un patrimonio biológico invaluable.',
      },
      {
        type: 'tip',
        text: 'Cada frasco de nuestra miel contribuye directamente a la conservación de las abejas Meliphera y su ecosistema. Al elegir miel de apicultura sostenible, estás votando por la biodiversidad.',
      },
    ],
  },
  {
    slug: 'guia-usos-miel-cocina-medicina-belleza',
    title: 'Guía de usos de la miel: cocina, medicinal y belleza',
    metaTitle: 'Usos de la miel: cocina, salud y belleza | Casa Apícola Los Cerezos',
    metaDescription:
      'Descubre todos los usos de la miel natural: recetas de cocina, remedios caseros para la salud y tratamientos de belleza. Guía completa con tips prácticos.',
    date: '2026-03-10',
    readTime: '6 min de lectura',
    category: 'Guías',
    image: '/images/blog/usos-miel.jpg',
    imageAlt: 'Miel natural de Casa Apícola Los Cerezos en diferentes usos: cocina, té y mascarilla facial',
    excerpt:
      'La miel es mucho más que un endulzante natural. Descubre cómo usarla en la cocina, para tu salud y en tus rutinas de belleza con esta guía completa.',
    content: [
      {
        type: 'paragraph',
        text: 'La miel es uno de los alimentos más versátiles que existen. Durante miles de años, las civilizaciones han aprovechado sus propiedades nutricionales, medicinales y cosméticas. En esta guía, te mostramos cómo sacarle el máximo provecho a la miel de abejas Meliphera de Casa Apícola Los Cerezos, un producto 100% natural cosechado en las montañas de Caldas.',
      },
      {
        type: 'warning',
        text: 'Importante: No_ADMINISTRAR miel a niños menores de 1 año. La miel cruda puede contener esporas de Clostridium botulinum que, aunque raras, representan un riesgo para el sistema inmunológico inmaduro de los bebés.',
      },
      {
        type: 'heading',
        text: 'Usos culinarios: más que endulzar',
      },
      {
        type: 'paragraph',
        text: 'La miel multifloral de Meliphera, con sus notas florales, toques herbáceos y fondo sutil a eucalipto, es un ingrediente culinario versátil que va mucho más allá de endulzar el café.',
      },
      {
        type: 'subheading',
        text: 'En bebidas',
      },
      {
        type: 'list',
        items: [
          'Té de jengibre con miel: hierve agua con rodajas de jengibre fresco 5 minutos, deja reposar 2 minutos, añade 1 cucharada de miel y unas gotas de limón. Ideal para resfriados y días fríos.',
          'Agua tibia con miel y limón: bebe en ayunas para activar el metabolismo y fortalecer el sistema inmunológico.',
          'Smoothie de frutas: sustituye el azúcar por miel en tus batidos de frutas. Aporta sabor complejo y nutrientes.',
        ],
      },
      {
        type: 'subheading',
        text: 'En platos principales y postres',
      },
      {
        type: 'list',
        items: [
          'Aderezos para ensaladas: mezcla miel con mostaza Dijon, vinagre de manzana y aceite de oliva para un aderezo irresistible.',
          'Glaseado para carnes: la miel carameliza hermosamente al horno. Úsala para glasear pollo, cerdo o salmón.',
          'Acompañamiento para quesos: la combinación de miel con quesos suaves (brie, camembert) o curados (parmesano) es una delicia.',
          'Postres: úsala en place de azúcar en galletas, brownies o helados para obtener un sabor más complejo y ligeramente floral.',
        ],
      },
      {
        type: 'heading',
        text: 'Usos medicinales respaldados por la ciencia',
      },
      {
        type: 'paragraph',
        text: 'La miel cruda de abejas Meliphera conserva todas sus enzimas naturales, lo que la hace especialmente beneficiosa para la salud:',
      },
      {
        type: 'list',
        items: [
          'Alivio de garganta irritada: una cucharada de miel directa o mezclada con agua tibia alivia la tos y el dolor de garganta. La OMS reconoce la miel como un remedio eficaz para la tos.',
          'Fortalecimiento inmunológico: la miel contiene antioxidantes, flavonoides y ácidos fenólicos que ayudan a proteger las células del estrés oxidativo.',
          'Energía natural: la combinación de glucosa y fructosa proporciona energía de absorción rápida y sostenida, ideal para deportistas o como snack energético.',
          'Propiedades antibacterianas: la miel tiene un pH ácido y contiene peróxido de hidrógeno natural, lo que le otorga propiedades antimicrobianas documentadas en la literatura científica.',
          'Salud digestiva: la miel prebiótica alimenta las bacterias beneficiosas del intestino, contribuyendo a una microbiota saludable.',
        ],
      },
      {
        type: 'heading',
        text: 'Usos en belleza y cuidado personal',
      },
      {
        type: 'paragraph',
        text: 'La miel es un ingrediente natural ampliamente utilizado en cosmética por sus propiedades humectantes, antibacterianas y antioxidantes:',
      },
      {
        type: 'list',
        items: [
          'Mascarilla facial hidratante: mezcla 2 cucharadas de miel con 1 cucharada de yogur natural. Aplica en el rostro, deja actuar 15 minutos y enjuaga con agua tibia. Tu piel quedará suave y luminosa.',
          'Exfoliante corporal con azúcar: combina miel, azúcar moreno y aceite de coco. Masajea en piel húmeda con movimientos circulares y enjuaga. Elimina células muertas y deja la piel nutrida.',
          'Mascarilla capilar: aplica miel pura en el cabello húmedo, envuelve con una toalla caliente durante 30 minutos. Hidrata y da brillo sin químicos.',
          'Labios agrietados: aplica una fina capa de miel en los labios antes de dormir. La miel cicatriza y hidrata los labios secos durante la noche.',
        ],
      },
      {
        type: 'tip',
        text: 'Para mejores resultados en usos medicinales y cosméticos, utiliza siempre miel cruda y sin procesar como la nuestra. La miel ultraprocesada ha perdido gran parte de sus propiedades beneficiosas.',
      },
      {
        type: 'heading',
        text: 'Recetas rápidas con nuestra miel',
      },
      {
        type: 'subheading',
        text: 'Receta 1: Té de jengibre con miel Meliphera',
      },
      {
        type: 'list',
        items: [
          '1 pieza de jengibre fresco (3 cm), rallado',
          '2 tazas de agua',
          '1 cucharada de miel multifloral',
          'Jugo de ½ limón',
          'Hierve el agua con el jengibre durante 5 minutos. Retira del fuego, deja reposar 3 minutos. Agrega la miel y el limón. Sirve caliente.',
        ],
      },
      {
        type: 'subheading',
        text: 'Receta 2: Yogur con miel y nueces',
      },
      {
        type: 'list',
        items: [
          '1 taza de yogur natural griego',
          '2 cucharadas de miel multifloral',
          '¼ taza de nueces picadas',
          'Frutas frescas al gusto (fresas, arándanos, plátano)',
          'Sirve el yogur en un bowl, añade la miel en espiral, las nueces y las frutas. Desayuno perfecto en 3 minutos.',
        ],
      },
    ],
  },
];

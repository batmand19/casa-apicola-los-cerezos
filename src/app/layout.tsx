export const metadata: Metadata = {
  metadataBase: new URL(
    "https://TU-DOMINIO.vercel.app"
  ),

  title: {
    default:
      "Casa Apícola Los Cerezos",

    template:
      "%s | Casa Apícola Los Cerezos",
  },

  description:
    "Miel artesanal, propóleo, apicultura y tradición familiar en Boyacá.",

  keywords: [
    "miel artesanal",
    "miel boyacá",
    "propóleo",
    "apicultura",
    "apiarios",
    "colmenas",
    "miel natural colombia",
  ],

  openGraph: {
    title:
      "Casa Apícola Los Cerezos",

    description:
      "Más de 30 años de tradición apícola familiar.",

    url:
      "https://TU-DOMINIO.vercel.app",

    siteName:
      "Casa Apícola Los Cerezos",

    images: [
      {
        url: "/og-image.jpg",

        width: 1200,

        height: 630,

        alt:
          "Casa Apícola Los Cerezos",
      },
    ],

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Casa Apícola Los Cerezos",

    description:
      "Tradición apícola familiar en Boyacá.",

    images: ["/og-image.jpg"],
  },
};
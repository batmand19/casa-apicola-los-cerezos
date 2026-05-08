import type { Metadata } from "next";
import { ProductProvider } from "@/context/ProductContext";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

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
    "Miel artesanal, propóleo y tradición apícola familiar en Boyacá.",

  keywords: [
    "miel artesanal",
    "apicultura boyacá",
    "miel natural",
    "propóleo",
    "apiarios",
    "colmenas",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >

        <StructuredData />

        <ProductProvider>
          {children}
        </ProductProvider>

      </body>

    </html>
  );
}
import type { Metadata } from "next";

import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Casa Apícola Los Cerezos",
  description:
    "Miel artesanal, propóleo, apicultura y tradición familiar en Boyacá.",

  keywords: [
    "miel artesanal",
    "apicultura Boyacá",
    "miel natural",
    "propóleo",
    "apiarios",
    "colmenas",
  ],

  openGraph: {
    title: "Casa Apícola Los Cerezos",

    description:
      "Más de 30 años de tradición apícola familiar en Boyacá.",

    url: "https://TU-DOMINIO.vercel.app",

    siteName: "Casa Apícola Los Cerezos",

    locale: "es_CO",

    type: "website",
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
        {children}
      </body>

    </html>
  );
}
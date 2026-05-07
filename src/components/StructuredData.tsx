export default function StructuredData() {
  const data = {
    "@context":
      "https://schema.org",

    "@type":
      "LocalBusiness",

    name:
      "Casa Apícola Los Cerezos",

    description:
      "Apicultura artesanal y productos naturales en Boyacá.",

    address: {
      "@type":
        "PostalAddress",

      addressLocality:
        "Caldas",

      addressRegion:
        "Boyacá",

      addressCountry:
        "CO",
    },

    url:
      "https://TU-DOMINIO.vercel.app",
  };

  return (
    <script
      type="application/ld+json"

      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
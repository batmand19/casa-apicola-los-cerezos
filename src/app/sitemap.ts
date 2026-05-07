import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://casa-apicola-los-cerezos.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://casa-apicola-los-cerezos.vercel.app/consumo",
      lastModified: new Date(),
    },

    {
      url: "https://casa-apicola-los-cerezos.vercel.app/apicultores",
      lastModified: new Date(),
    },

    {
      url: "https://casa-apicola-los-cerezos.vercel.app/servicios",
      lastModified: new Date(),
    },
  ];
}
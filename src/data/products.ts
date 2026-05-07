import { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "miel-artesanal",

    name: "Miel Artesanal",

    image: "/miel.jpg",

    shortDescription:
      "Miel natural producida en Boyacá.",

    description:
      "Miel artesanal obtenida mediante manejo responsable y procesos naturales.",

    price: "$25.000",

    category: "consumo",

    whatsappMessage:
      "Hola, quiero información sobre la miel artesanal.",
  },

  {
    slug: "propoleo-natural",

    name: "Propóleo Natural",

    image: "/propoleo.jpg",

    shortDescription:
      "Mezcla natural con plantas medicinales.",

    description:
      "Propóleo artesanal utilizado tradicionalmente para bienestar y defensas.",

    price: "$20.000",

    category: "consumo",

    whatsappMessage:
      "Hola, quiero información sobre el propóleo.",
  },

  {
    slug: "nucleos-apicolas",

    name: "Núcleos Apícolas",

    image: "/nucleo.jpg",

    shortDescription:
      "Material vivo para nuevos apiarios.",

    description:
      "Núcleos preparados mediante manejo responsable y experiencia práctica.",

    price: "Consultar",

    category: "apicultores",

    whatsappMessage:
      "Hola, quiero información sobre núcleos apícolas.",
  },
];
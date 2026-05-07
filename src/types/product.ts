export interface Product {
  slug: string;

  name: string;

  image: string;

  shortDescription: string;

  description: string;

  price: string;

  category:
    | "consumo"
    | "apicultores";

  whatsappMessage: string;
}
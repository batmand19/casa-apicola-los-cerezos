import { siteConfig } from "@/config/site";

export function getWhatsAppLink(
  message?: string
) {

  const base =
    `https://wa.me/${siteConfig.contact.whatsapp}`;

  const text =
    encodeURIComponent(
      message ||
      siteConfig.commerce.whatsappDefaultMessage
    );

  return `${base}?text=${text}`;
}

export function getCallLink() {
  return `tel:+${siteConfig.contact.calls}`;
}

export function getEmailLink() {
  return `mailto:${siteConfig.contact.email}`;
}
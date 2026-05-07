export function generateWhatsAppLink(
  message: string
) {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP;

  return `https://wa.me/${number}?text=${encodeURIComponent(
    message
  )}`;
}
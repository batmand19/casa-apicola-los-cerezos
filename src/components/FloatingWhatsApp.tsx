import { getWhatsAppLink } from "@/lib/contact";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:scale-110 transition w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl"
    >
      💬
    </a>
  );
}
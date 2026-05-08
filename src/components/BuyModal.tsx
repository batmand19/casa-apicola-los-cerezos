import {
  getWhatsAppLink,
  getEmailLink,
} from "@/lib/contact";

interface Props {
  open: boolean;

  onClose: () => void;

  message: string;
}

export default function BuyModal({
  open,
  onClose,
  message,
}: Props) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6">

      <div className="bg-white rounded-[32px] p-10 max-w-md w-full relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl mb-4">
          Realizar pedido
        </h2>

        <p className="text-[#4b3a2c] mb-8">
          Elige cómo deseas contactarnos para finalizar tu compra.
        </p>

        <div className="flex flex-col gap-4">

          <a
            href={getWhatsAppLink(message)}
            target="_blank"
            className="bg-[#25D366] text-white text-center py-4 rounded-full font-semibold"
          >
            Comprar por WhatsApp
          </a>

          <a
            href={getEmailLink()}
            className="bg-[#2c2218] text-white text-center py-4 rounded-full font-semibold"
          >
            Comprar por correo
          </a>

        </div>

      </div>

    </div>
  );
}
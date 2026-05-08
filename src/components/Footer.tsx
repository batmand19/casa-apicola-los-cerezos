import { siteConfig } from "@/config/site";

import {
  getWhatsAppLink,
  getCallLink,
  getEmailLink,
} from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-[#2c2218] text-white mt-32">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

        <div>

          <h3 className="text-3xl mb-6">
            {siteConfig.brand.name}
          </h3>

          <p className="text-white/70 leading-relaxed">
            {siteConfig.brand.description}
          </p>

        </div>

        <div>

          <h4 className="text-xl mb-6">
            Contacto
          </h4>

          <div className="space-y-3 text-white/70">

            <a
              href={getWhatsAppLink()}
              target="_blank"
              className="block hover:text-white transition"
            >
              WhatsApp
            </a>

            <a
              href={getCallLink()}
              className="block hover:text-white transition"
            >
              Llamar
            </a>

            <a
              href={getEmailLink()}
              className="block hover:text-white transition"
            >
              Correo
            </a>

          </div>

        </div>

        <div>

          <h4 className="text-xl mb-6">
            Información
          </h4>

          <div className="space-y-3 text-white/70">

            <p>
              {siteConfig.contact.location}
            </p>

            <p>
              {siteConfig.contact.schedule}
            </p>

            <p>
              Envíos nacionales disponibles
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
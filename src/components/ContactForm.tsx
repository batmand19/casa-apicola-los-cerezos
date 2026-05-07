"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setSent(true);
  }

  return (
    <div className="bg-white rounded-3xl p-10 shadow-lg">

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <input
          type="text"
          placeholder="Nombre"
          className="w-full border border-[#d8c7ae] rounded-2xl px-5 py-4 outline-none"
          required
        />

        <input
          type="email"
          placeholder="Correo"
          className="w-full border border-[#d8c7ae] rounded-2xl px-5 py-4 outline-none"
          required
        />

        <textarea
          placeholder="Mensaje"
          rows={5}
          className="w-full border border-[#d8c7ae] rounded-2xl px-5 py-4 outline-none resize-none"
          required
        />

        <button
          type="submit"
          className="bg-[#c98b2e] hover:bg-[#b67c28] transition text-white px-8 py-4 rounded-full font-semibold"
        >
          Enviar
        </button>

        {sent && (
          <p className="text-green-700">
            Mensaje enviado correctamente.
          </p>
        )}

      </form>
    </div>
  );
}
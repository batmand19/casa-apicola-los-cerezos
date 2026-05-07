export default function ContactForm() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-2xl text-black">

      <form
        action="https://formsubmit.co/danielcanon044@gmail.com"
        method="POST"
        className="space-y-6"
      >

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          className="w-full border border-[#d8c7ae] rounded-2xl px-5 py-4 outline-none text-black"
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo"
          required
          className="w-full border border-[#d8c7ae] rounded-2xl px-5 py-4 outline-none text-black"
        />

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows={5}
          required
          className="w-full border border-[#d8c7ae] rounded-2xl px-5 py-4 outline-none resize-none text-black"
        />

        <button
          type="submit"
          className="bg-[#c98b2e] hover:bg-[#b67c28] transition text-white px-8 py-4 rounded-full font-semibold"
        >
          Enviar
        </button>

      </form>
    </div>
  );
}
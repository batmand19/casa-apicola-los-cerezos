export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-sm text-[#f4d28c] mb-6">

            Casa Apícola Los Cerezos

          </p>

          <h1 className="text-5xl md:text-6xl leading-tight text-white mb-8">

            Miel artesanal colombiana con tradición familiar

          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">

            Más de 30 años de experiencia apícola en Boyacá,
            produciendo miel natural, polen y productos
            artesanales con respeto por las abejas,
            la naturaleza y el campo colombiano.

          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="#productos"
              className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-8 py-4 rounded-full text-white font-semibold shadow-xl"
            >
              Ver productos
            </a>

            <a
              href="/historia"
              className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-white font-semibold"
            >
              Nuestra historia
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
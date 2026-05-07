export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen overflow-hidden"
    >
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.4em] text-sm mb-6 text-[#f4e7cf]">
              Caldas · Boyacá · Colombia
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-8">
              Pureza, tradición y apicultura familiar.
            </h1>

            <p className="text-lg md:text-2xl text-[#f4e7cf] mb-10 leading-relaxed max-w-2xl">
              Más de 30 años produciendo miel natural,
              enseñando apicultura y cuidando las abejas
              desde el corazón del campo Boyacense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="#productos"
                className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-8 py-4 rounded-full font-semibold text-center"
              >
                Ver productos
              </a>

              <a
                href="https://wa.me/573208065008"
                target="_blank"
                className="border border-white/70 hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold text-center"
              >
                WhatsApp
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
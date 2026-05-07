import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#2b1d0e]/35" />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.4em] text-sm text-[#f4d18b] mb-6">
              Caldas, Boyacá · Colombia
            </p>

            <h1 className="text-5xl md:text-7xl leading-tight text-white mb-8">

              Pureza y tradición
              <br />
              en cada cosecha.

            </h1>

            <p className="text-lg md:text-2xl text-[#f4e7cf] leading-relaxed max-w-2xl mb-10">

              Más de 30 años dedicados a la apicultura,
              la enseñanza y el cuidado responsable de las abejas.

            </p>

            <div className="flex flex-wrap gap-5">

              <a
                href="/consumo"
                className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-8 py-4 rounded-full text-white font-semibold shadow-2xl"
              >
                Ver productos
              </a>

              <a
                href="/servicios"
                className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-white font-semibold"
              >
                Conocer historia
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f7f1e8] to-transparent" />

    </section>
  );
}
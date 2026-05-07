export default function Documentary() {
  return (
    <section className="py-32 bg-[#2c2218] text-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#f4d18b] mb-6">
            Tradición familiar
          </p>

          <h2 className="text-5xl leading-tight mb-8">

            Una vida dedicada
            al cuidado de las abejas.

          </h2>

          <p className="text-lg text-[#f4e7cf] leading-relaxed mb-6">

            Casa Apícola Los Cerezos nació como un proyecto familiar
            construido mediante experiencia, paciencia y aprendizaje práctico.

          </p>

          <p className="text-lg text-[#f4e7cf] leading-relaxed">

            Durante más de 30 años,
            la enseñanza, el manejo responsable y la producción natural
            han sido parte fundamental del crecimiento del apiario.

          </p>

        </div>

        <div className="relative h-[600px] rounded-[32px] overflow-hidden shadow-2xl">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/hero-video.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </div>
    </section>
  );
}
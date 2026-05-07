import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
];

export default function Gallery() {
  return (
    <FadeIn>
      <section className="py-24 bg-[#f7f1e8]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
              Vida en el apiario
            </p>

            <h2 className="text-4xl md:text-5xl">
              Tradición, naturaleza y trabajo familiar.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[350px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  alt="Casa Apícola Los Cerezos"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}

          </div>
        </div>
      </section>
    </FadeIn>
  );
}
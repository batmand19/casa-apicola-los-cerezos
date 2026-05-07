"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const media = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
];

export default function MediaGallery() {
  return (
    <section className="py-24 bg-[#f7f1e8]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Galería
          </p>

          <h2 className="text-4xl md:text-5xl">
            Vida alrededor de las abejas.
          </h2>

        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >

          {media.map((image) => (
            <SwiperSlide key={image}>

              <div className="relative h-[500px] rounded-[32px] overflow-hidden shadow-2xl">

                <Image
                  src={image}
                  alt="Casa Apícola Los Cerezos"
                  fill
                  className="object-cover"
                />

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}
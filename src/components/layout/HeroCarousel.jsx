"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

export default function HeroCarousel({ images, contents }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 2000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full mx-auto mt-20">
      {/* Carousel */}
      <div className="overflow-hidden rounded-xl relative" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-full flex-shrink-0"
              style={{
                aspectRatio: "16/9", // Better for mobile & desktop
              }}
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover"
                sizes="100vw"
              />

              {/* OVERLAY CONTENT */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center 
                px-4 sm:px-6">

                {/* Title */}
                <h2
                  className="
                    text-white 
                    font-bold 
                    drop-shadow-lg
                    text-xl 
                    leading-snug
                    sm:text-3xl sm:leading-tight
                    md:text-4xl
                    max-w-[90%] sm:max-w-2xl
                  "
                >
                  {contents[i].title}
                </h2>

                {/* Description */}
                <p
                  className="
                    text-white/90 
                    mt-2 
                    text-sm 
                    sm:text-lg 
                    max-w-[90%] sm:max-w-2xl
                  "
                >
                  {contents[i].desc}
                </p>

                {/* CTA BUTTON */}
                <a
                  href={contents[i].link}
                  className="
                    mt-4 
                    px-4 py-2 
                    sm:px-7 sm:py-3 
                    bg-[#E8B44C] 
                    text-white 
                    font-medium sm:font-semibold 
                    rounded-lg 
                    shadow-lg 
                    hover:bg-yellow-400 
                    transition
                    text-sm sm:text-base
                  "
                >
                  {contents[i].cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

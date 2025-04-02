"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Slider } from "@/lib";
import Link from "next/link";

const SalePage = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full overflow-x-hidden mt-3"
    >
      <CarouselContent>
        {Slider.map((item, index) => (
          <CarouselItem key={index} className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mr-10">
              {/* Sol Taraftaki Metin Alanı */}
              <div className="p-6 md:w-1/2">
                <h3 className="text-lg font-bold text-gray-900">LASSA ÜRÜNLERİNDE {index + 1}.slider</h3>
                <h2 className="text-2xl font-bold text-green-700 mt-2">SEPETTE %20 İNDİRİM</h2>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
                <Link
                  href="#"
                  className="inline-block bg-green-700 text-white px-6 py-2 mt-4 rounded-full font-semibold text-sm hover:bg-green-800 transition-all"
                >
                  ŞİMDİ DAHA FAZLASI →
                </Link>
              </div>
              <div className="relative w-full h-64 md:w-1/2 ">
                <Image
                  src={item.url}
                  alt={`Slider ${item.id}`}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200" />
    </Carousel>
  );
};

export default SalePage;

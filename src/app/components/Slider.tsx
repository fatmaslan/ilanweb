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
    <div className="flex items-center justify-center light:bg-gray-100 ">
      <div className="w-full max-w-10xl px-5 md:px-8 py-4 mt-5 mr-12 ">
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          className=" w-[32rem] md:w-[80rem] overflow-x-hidden flex"
        >
          <CarouselContent>
            {Slider.map((item, index) => (
              <CarouselItem key={index} className="flex justify-center px-4">
                <div className="flex flex-col md:flex-row items-center mx-auto bg-white rounded-lg shadow-lg overflow-hidden max-w-[7xl] max-w-5xl gap-10">
                  <div className="p-10 md:w-1/2 text-center md:text-left">
                    <h3 className="text-lg font-bold text-gray-900">
                      LASSA ÜRÜNLERİNDE {index + 1}.slider
                    </h3>
                    <h2 className="text-2xl font-bold text-green-700 mt-2">
                      SEPETTE %20 İNDİRİM
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm">
                      Lorem ipsum is placeholder text commonly used in the graphic, print,
                      and publishing industries for previewing layouts and visual mockups.
                    </p>
                    <Link
                      href="#"
                      className="inline-block bg-green-700 text-white px-6 py-2 mt-4 rounded-full font-semibold text-sm hover:bg-green-800 transition-all"
                    >
                      ŞİMDİ DAHA FAZLASI →
                    </Link>
                  </div>
                  <div className="relative w-full md:w-1/2 min-h-[12rem] md:min-h-[15rem] flex justify-center items-center p-10">
                    <Image
                      src={item.url}
                      alt={`Slider ${item.id}`}
                      fill
                      className="object-contain md:object-cover"
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
      </div>
    </div>
  );
};

export default SalePage;

"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { Product } from "@/lib/product";

const Detailpage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const selectedProduct = Product[0];

  return (
    <div className="container mx-auto px-4 py-10 mt-5 md:px-8 px-5 py-4  max-w-5xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="w-full">
    
          <Carousel plugins={[plugin.current]} className="w-full rounded-xl">
            <CarouselContent className="gap-4">
              {selectedProduct.images.map((img) => (
                <CarouselItem key={img.id} className="w-full">
                  <Card className="w-full border-none shadow-none dark:bg-none">
                    <CardContent className="relative light:bg-gray-100   w-full h-[500px] p-3 border-1 dark:border-none rounded-lg">
                      <Image
                        src={img.image_url}
                        alt={`Image ${selectedProduct.id}`}
                        width={350}
                        height={250}
                        quality={100}
                        className="object-cover rounded-lg "
                        priority
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex flex-col gap-6 mb-0 md:mb-40">
          <h2 className="font-bold light:text-pink-950 dark:text-white text-3xl">
            {selectedProduct.title}
          </h2>
          <p className="text-gray-700 text-base leading-6">
            <span className="light:text-pink-950 dark:text-white font-semibold">
              Ürün hakkında:{" "}
            </span>
            {selectedProduct.indirim}
          </p>
          <h3 className="text-red-600 text-2xl font-bold">
            <span className="dark:text-white light:text-black mr-2">
              Fiyat:
            </span>{" "}
            {selectedProduct.price}₺
          </h3>
          <div className="flex flex-wrap gap-4 mt-6   ">
            <Button
              onClick={() => {
                console.log("Favori ekleme butonuna tiklandi");
              }}
              variant="outline"
              className="flex items-center justify-center bg-red-600 text-white "
            >
              <CiHeart size={30} className=""/>
            </Button>
          </div>
        </div>
 
      </div>
      <div className="flex flex-col sm:flex-row gap-8 mt-6 items-center justify-between">
        <div className="flex w-full sm:w-1/2 h-[14rem] flex-col gap-4 border-1 rounded-lg p-4 light:bg-gray-100 dark:text-white">
          <div>
            <p className="font-semibold">Şirket Bilgisi:</p>
            <p>Soylu Otomasyon San Tiç Ltd Şti</p>
            <p>
              <span className="font-semibold">Adres:</span> SSS Mah, SSS Sokak,
              SSS KAFE YANI, KEPEZ - ANTALYA
            </p>
            <p>
              <span className="font-semibold">TEL:</span> +90 212 564 5858
            </p>
            <p>
              <span className="font-semibold">TEL:</span> +90 212 564 5858
            </p>
          </div>
          <Button
            onClick={() => {
              console.log("Mağazaya git butonuna tiklandi");
            }}
            className="w-full bg-gray-600 text-white  dark:bg-gray-300 dark:text-red-600"
          >
            Mağazaya Git
          </Button>
        </div>
        <div className="flex w-full sm:w-1/2 h-[14rem] flex-col gap-4 border-1 rounded-lg p-4 light:bg-gray-100 dark:text-white">
          <div>
            <p className="font-semibold">Ürünler:</p>
            <p>Ahşap Kesme Makinasi</p>
            <p>Ahşap Kesme Makinasi</p>
            <p>Ahşap Kesme Makinasi</p>
          </div>
          <Button className="w-full bg-gray-600 text-white  dark:bg-gray-300 dark:text-red-600 flex bottom-0 ">
            Saticinin Diğer Ürünleri
          </Button>
        </div>
      </div>
      {/* benzer ürün */}
      <div className="mt-5 flex flex-col items-center justify-center gap-2">
        <h2>Benzer ürün kısmı buraya gelicek</h2>
      </div>
    </div>
  );
};

export default Detailpage;

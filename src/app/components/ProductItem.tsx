"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/product";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="flex items-center justify-center light:bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:px-8 px-5 py-4 mt-5 max-w-6xl w-full">
        {Product.map((product, indx) => {
          return (
            <div
              key={indx}
              className="w-full max-w-[14rem] h-auto flex flex-col shadow-xl rounded-lg items-center justify-between py-6 px-2 bg-gray-200"
            >
              <Link href={`/product/${product.id}`} className="relative group overflow-hidden w-full">
                {product.indirim && (
                  <div className="absolute top-0 right-0  bg-green-800 bg-opacity-50 text-white text-xs px-3 py-1 rounded transition-opacity duration-300">
                    {product.indirim}
                  </div>
                )}
                <Image
                  src={product.url}
                  alt={product.title}
                  width={350}
                  height={300}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 mt-3"
                />
              </Link>
              <div className="px-3 py-2 flex flex-col justify-between w-full">
                <h2 className="text-lg text-center text-green-950 font-bold">{product.title}</h2>

                <div className="mt-auto flex items-center justify-between gap-2 w-full">
                  <p className="text-red-800 text-center font-bold">{product.price} ₺</p>
                  <Button
                    variant="outline"
                    onClick={() => console.log("Sepete ekle", product)}
                    className="text-xl h-10 w-10 rounded-full text-end text-red-600 hover:bg-red-600 hover:text-white transition-all"
                  >
                    <MdOutlineShoppingCart />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductItem;

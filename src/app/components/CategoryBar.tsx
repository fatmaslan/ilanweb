"use client";

import { Category} from "@/lib";
import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { IoCarSport, IoShirt, IoPhonePortrait, IoHome } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { BiCategory } from "react-icons/bi";


export const categories = [
    {
      title: "Araba",
      icon: <IoCarSport size={20} className="text-gray-700" />,
      subcategories: ["Sedan", "SUV", "Hatchback"],
    },
    {
      title: "Telefon",
      icon: <IoPhonePortrait size={20} className="text-gray-700" />,
      subcategories: ["iPhone", "Samsung", "Xiaomi"],
    },
    {
      title: "Elektronik",
      icon: <IoHome size={20} className="text-gray-700" />,
      subcategories: ["TV", "Laptop", "Kamera"],
    },
    {
      title: "Giyim",
      icon: <IoShirt size={20} className="text-gray-700" />,
      subcategories: [
        {
          title: "Erkek Giyim",
          subcategories: ["Pantolon", "Gömlek", "Ceket"],
        },
        {
          title: "Kadın Giyim",
          subcategories: ["Elbise", "Bluz", "Etek"],
        },
        {
          title: "Çocuk Giyim",
          subcategories: ["T-shirt", "Şort", "Mont"],
        },
      ],
    },
  ];
  
const CategoryBar = () => {
  const [loadingCategory, setLoadingCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);



  const handleCategoryClick = (categoryTitle: string)=>{
    setLoadingCategory(categoryTitle)
  }
  return (
    <div className=" hidden md:block w-full py-3 light:text-gray-950 dark:text-white  ">
      <div className="container mx-auto flex justify-center gap-1 overflow-x-auto px-4 md:gap-10">
        <DropdownMenu>
          <DropdownMenuTrigger className=" flex items-center gap-2  font-semibold hover:text-red-600 transition-all cursor-pointer ">
            <BiCategory size={18}/>
            Kategoriler <FaChevronDown size={12} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-0 shadow-2xl bg-white text-black rounded-md p-4 flex flex-col md:flex-row w-[20rem] md:w-[30rem] mt-5 md:ml-80">
            <div className="w-full">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 cursor-pointer rounded-md hover:bg-gray-100 transition-all ${
                    selectedCategory === category.title ? "bg-gray-200" : ""
                  }`}
                  onMouseEnter={() => {
                    setSelectedCategory(category.title);
                    setSelectedSubcategory(null);
                  }}
                >
                  {category.icon}
                  <span className="text-sm md:text-base">{category.title}</span>
                </div>
              ))}
            </div>
            <div className="w-full md:w-2/3 p-3">
              {selectedCategory && (
                <div>
                  <h3 className="font-semibold text-red-600 mb-2 text-base">{selectedCategory}</h3>
                  {categories
                    .find((cat) => cat.title === selectedCategory)
                    ?.subcategories.map((sub, i) => (
                      typeof sub === "string" ? (
                        <Link
                          key={i}
                          href={`/${selectedCategory.toLowerCase()}/${sub.toLowerCase()}`}
                          className="block text-gray-700 hover:text-red-600 py-1 text-sm"
                        >
                          {sub}
                        </Link>
                      ) : (
                        <div key={i} className="mt-2">
                          <h4
                            className="font-semibold text-gray-700 cursor-pointer text-sm"
                            onMouseEnter={() => setSelectedSubcategory(sub.title)}
                          >
                            {sub.title}
                          </h4>
                          {selectedSubcategory === sub.title && (
                            <div className="pl-3">
                              {sub.subcategories.map((subSub, j) => (
                                <Link
                                  key={j}
                                  href={`/${selectedCategory.toLowerCase()}/${sub.title.toLowerCase()}/${subSub.toLowerCase()}`}
                                  className="block text-gray-700 hover:text-red-600 py-1 text-sm"
                                >
                                  {subSub}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    ))}
                </div>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Kategori Linkleri */}
        {Category.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="hidden md:block"> 
            <Link        
              href={`/category/${encodeURIComponent(item.title)}`} 
              className=" flex items-center gap-2 light:text-gray-950 dark:text-white font-semibold hover:text-red-600 transition-all text-base text-lg " onClick={() => handleCategoryClick(item.title)}
            >
              <Icon/>
              {item.title}
                    {loadingCategory === item.title && (
                      <Loader2 className="ml-5 animate-spin" size={16} />
                    )}
            </Link> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;

"use client"
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {  FaBars, FaTimes } from "react-icons/fa";
import { Categories, Category } from "@/lib";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";


const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { setTheme } = useTheme()
  return (
    <div className="bg-green-700 text-white flex items-center justify-between px-4 py-1">
      
      <div className="hidden md:flex flex-row gap-10 p-1">
        <Link href="/">Anasayfa</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/blogs">Blog detayları</Link>
      </div>


      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black shadow-lg p-6 z-50 overflow-y-auto">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-all"
          >
            <FaTimes size={24} />
          </button>
          <h2 className="text-lg font-bold text-gray-700 mb-4">Menü</h2>
          <div className="flex flex-col gap-4">
            <Link href="/" className="block text-gray-700 hover:text-red-600">
              Anasayfa
            </Link>
            <h3 className="text-lg font-semibold text-gray-700 mt-6">Kategoriler</h3>
            <div className="flex flex-col gap-4 mt-2">
            {Categories.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.url}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                >
                  <Icon />
                  {item.title}
                </Link>
              );
            })}
          </div>
 
          </div>

          {/* Kategoriler */}
          
          
          <div className="flex flex-col gap-4 mt-2">
            {Category.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.url}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                >
                  <Icon />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}


      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer px-4 py-1 text-white rounded-md">
            TR
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black p-2 rounded-md shadow-md">
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 p-2">
              Türkçe
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 p-2">
              İngilizce
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;

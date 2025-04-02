
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className="bg-green-700 text-white flex items-center justify-between px-4 py-2">
      <div className="flex flex-row gap-10 p-1">
        <Link href="/">Anasayfa</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/blogs">Blog detayları</Link>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer px-4 py-1 bg-white text-green-700 rounded-md ">
            TR
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black p-2 rounded-md shadow-md">
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 p-2">Türkçe</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 p-2">İngilizce</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer px-4 py-1text-white rounded-md">
          <IoSunnyOutline size={24} className="mt-2"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black p-2 rounded-md shadow-md">
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 p-2"><IoSunnyOutline/></DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-200 p-2"><FaMoon/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;

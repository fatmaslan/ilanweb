"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full flex px-5 md:px-10 text-green-950 bg-green-50 shadow-2xl z-40 mx-auto items-center justify-center">
      <div className="container flex items-center justify-between h-16 max-w-7xl mx-auto">
        <Link
          className="font-extrabold text-2xl md:text-3xl text-green-950 transition-all"
          href="/"
        >
          <Image alt="logo" src='/logo.png' width={150} height={100}/>
        </Link>
        <div className="hidden md:flex relative w-full max-w-xs md:max-w-md lg:max-w-lg">
          <Input
            className="outline-none w-full rounded-md text-green-950 px-4 py-2"
            type="text"
            placeholder="Aradığınız ürün veya markayı yazınız..."
          />
          <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-green-950" />
        </div>
        <div className="flex gap-4 md:gap-5 items-center">
          <div
            className="cursor-pointer flex items-center gap-2 hover:text-green-950"
            onClick={() => setIsLoginOpen(true)}
          >
            <FaUser size={24} />
            <p className="hidden md:block text-xs font-semibold">
              {isAuthenticated ? "Profilim" : "Giriş Yap"}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative cursor-pointer hover:text-green-950">
                <MdOutlineShoppingCart size={24} />
                <span className="bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold absolute -top-2 -right-2">
                  1
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 bg-white shadow-lg rounded-md p-3 max-h-96 overflow-y-auto">
              <DropdownMenuLabel className="text-center font-semibold">
                Sepetiniz
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Button
                onClick={() => router.push("/cart")}
                variant="outline"
                className="flex w-full items-center justify-center"
              >
                Sepete git
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Giriş Yap Popup */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center font-bold text-green-950">
              Giriş Yap
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="E-posta adresinizi giriniz"
              type="email"
              className="outline-none border border-transparent focus:border-transparent focus:ring-0 w-full rounded-md text-green-950 px-2 py-2"
            />
            <Input
              placeholder="Şifrenizi giriniz"
              type="password"
              className="outline-none border border-transparent focus:border-transparent focus:ring-0 w-full rounded-md text-green-950 px-2 py-2"
            />

            <Button className="w-full bg-green-100 text-green-950 hover:bg-green-950 hover:text-white transition-all">
              Giriş Yap
            </Button>
          </div>
          <DialogFooter>
            <p className="text-sm text-center">
              Henüz kayit olmadiniz mi?{" "}
              <Link href="/register" className="text-green-600">
                {" "}
                Kayit Ol
              </Link>
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;

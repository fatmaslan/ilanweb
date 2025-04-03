import { TbGiftCard, TbShoe, TbShirt, TbSoccerField, TbPerfume, TbWoman } from "react-icons/tb";
import { FaTags,  FaStar } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { IoCarSport, IoShirt, IoPhonePortrait, IoHome } from "react-icons/io5";

export const NavMenu:{title:string; url:string ;icon: React.ComponentType}[]= [
{
    title:"Aksesuarlar",
    url:"/accessories",
    icon: BsFillBagFill
},
{
    title:"Ayakkabi",
    url:"/shoe",
    icon:TbShoe
},
{
    title:"Erkek Giyim",
    url:"/mens",
    icon:TbShirt
},
{
    title:"Spor ve Eğlence",
    url:"/sports",
    icon:TbSoccerField
},
{
    title:"Kadin Giyim",
    url:"/womans",
    icon:TbWoman
},
{
    title:"Parfüm",
    url:"/perfume",
    icon:TbPerfume
},
]
export const Category:{title:string;url:string; icon: React.ComponentType }[]=[

    {
        title:"Urunler",
        url:"/all",
        icon:FaTags
    },
    {
        title:"Markalar",
        url:"/brands",
        icon:TbGiftCard
    },
   
    {
        title:"Blog",
        url:"/blog",
        icon:FaStar
    },
    {
        title:"Blog Detayi",
        url:"/blogs",
        icon:FaStar
    },
]
export const Slider:{id:number;url:string}[]= [
    {
        id:1,
        url:'/format_webp.jpeg'
    },
    {
        id:1,
        url:'/format_webp.jpeg'
    },
    {
        id:1,
        url:'/format_webp.jpeg'
    },
]
export const Categories:{title:string; subcategories:string[],url:string ;icon: React.ComponentType}[] = [
    {
      title: "Araba",
      url:'/arabalar',
      icon: IoCarSport,
      subcategories: ["Sedan", "SUV", "Hatchback"],
    },
    {
      title: "Telefon",
      url:'elektronik',
      icon: IoPhonePortrait ,
      subcategories: ["iPhone", "Samsung", "Xiaomi"],
    },
    {
      title: "Elektronik",
      url:'elektronik',
      icon: IoHome ,
      subcategories: ["TV", "Laptop", "Kamera"],
    },
    {
      title: "Giyim",
      url:'giyim',
      icon: IoShirt ,
      subcategories:["erkek giyim","kadın giyim"]
    }
  ];
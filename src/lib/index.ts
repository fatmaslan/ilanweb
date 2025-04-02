import { TbGiftCard, TbShoe, TbShirt, TbSoccerField, TbPerfume, TbWoman } from "react-icons/tb";
import { FaTags,  FaStar } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";


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
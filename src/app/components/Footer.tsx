
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
      <div className="p-5 h-50  bg-gray-100">
      <div className="flex   md:flex-row justify-between max-w-6xl mx-auto mt-5">
        <Link href={"/contact"} className="flex-1 text-green-950">
          <h3 className="font-bold text-lg mb-2">Yardim</h3>
          <p>SSS</p>
          <p>Yardim</p>
          <p>İletişim</p>
        </Link>
        <Link href={"/contact"} className="flex-1 text-green-950">
          <h3 className="font-bold text-lg mb-2">Livben</h3>
          <p>Ekibimiz</p>
          <p>Kariyer</p>
          <p>Gizlilik Politikasi</p>
        </Link>
        <div className="flex flex-col items-start gap-3 text-black">

        <Link href={"/contact"} className="flex-1 text-green-950">
          <h3 className="font-bold text-lg mb-2">Bağlantida Kal</h3>
          <div className="flex gap-5 ">
            <FaXTwitter size={24} />
            <FaInstagram size={24} />
            <FaWhatsapp size={24} />
          </div>
        </Link>
      <p className="text-gray-600">Uygulamayı edinerek 7/24 erişim sağlayın</p>
      <div className="flex flex-row  gap-2">
        <Link href="https://www.apple.com/app-store/" target="_blank">
          <Image
            src="/apple_store_2x.png" 
            alt="App Store"
            width={100}
            height={30}
            className="cursor-pointer bg-green-950 rounded-md"
          />
        </Link>
        <Link href="https://play.google.com/store" target="_blank">
          <Image
            src="/google_play_2x.png"
            alt="Google Play"
            width={100}
            height={30}
            className="cursor-pointer bg-green-950 rounded-md"
          />
        </Link>
       
      </div>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Footer

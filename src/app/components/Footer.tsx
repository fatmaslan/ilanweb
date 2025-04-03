import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className=" p-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-row gap-8 md:gap-16 text-green-950 dark:text-white w-full md:w-auto justify-between">
          <div className='flex flex-col ml-0 md:ml-10'>
            <h3 className="font-bold text-lg mb-2">Yardım</h3>
            <p>SSS</p>
            <p>Yardım</p>
            <p>İletişim</p>
          </div>

          <div className='flex flex-col ml-20 md:ml-50'>
            <h3 className="font-bold text-lg mb-2 ">Livben</h3>
            <p>Ekibimiz</p>
            <p>Kariyer</p>
            <p>Gizlilik Politikası</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start md:items-end text-green-950 dark:text-white w-full md:w-auto">
          <h3 className="font-bold text-lg mb-2">Bağlantıda Kal</h3>
          <div className="flex gap-5">
            <FaXTwitter size={24} />
            <FaInstagram size={24} />
            <FaWhatsapp size={24} />
          </div>
          <p className="text-gray-600 mt-3">Uygulamayı edinerek 7/24 erişim sağlayın</p>
          <div className="flex flex-row gap-2 mt-3">
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
  )
}

export default Footer;

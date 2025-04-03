import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="light:bg-gray-100  p-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row text-center justify-between gap-8">
        
        {/* Yardım Bölümü */}
        <div className="flex-1 light:text-green-950 dark:text-white">
          <h3 className="font-bold text-lg mb-2">Yardım</h3>
          <p>SSS</p>
          <p>Yardım</p>
          <p>İletişim</p>
        </div>

        {/* Livben Bölümü */}
        <div className="flex-1 light:text-green-950 dark:text-white">
          <h3 className="font-bold text-lg mb-2">Livben</h3>
          <p>Ekibimiz</p>
          <p>Kariyer</p>
          <p>Gizlilik Politikası</p>
        </div>

        {/* Bağlantıda Kal & Sosyal Medya */}
        <div className="flex-1 flex flex-col items-start light:text-green-950 dark:text-white">
          <h3 className="font-bold text-lg mb-2">Bağlantıda Kal</h3>
          <div className="flex gap-5">
            <FaXTwitter size={24} />
            <FaInstagram size={24} />
            <FaWhatsapp size={24} />
          </div>
          <p className="text-gray-600 mt-3">Uygulamayı edinerek 7/24 erişim sağlayın</p>
          
          {/* Uygulama Butonları */}
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

export default Footer

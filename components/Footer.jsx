'use client';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image'; // Image компонент нэмэх

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-black/5 mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="col-span-1 md:col-span-2">
            
            {/* --- ЛОГО ХЭСЭГ --- */}
            {/* Текстийн оронд Image оруулсан */}
            <div className="relative w-32 h-10 lg:w-40 lg:h-12 shrink-0 mb-3">
                 <Image 
                    src="/logo.svg" // Таны файлын нэр
                    alt="Logo" 
                    fill 
                    className="object-contain object-left" // object-left нь зургийг зүүн тийш шахаж байрлуулна
                    priority
                 />
            </div>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-sm">
              Таны бизнесийг дэлхийд холбох финтек шийдлүүд.
            </p>
            <div className="flex gap-4 mt-5">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
            </div>
          </div>

          {/* Холбоосууд */}
          <div>
             <h3 className="text-gray-900 font-semibold mb-4">Холбоосууд</h3>
             <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li className="hover:text-teal-700 cursor-pointer transition-colors">Бидний тухай</li>
                <li className="hover:text-teal-700 cursor-pointer transition-colors">Бүтээгдэхүүн</li>
                <li className="hover:text-teal-700 cursor-pointer transition-colors">Үйлчилгээ</li>
                <li className="hover:text-teal-700 cursor-pointer transition-colors">Мэдээлэл</li>
             </ul>
          </div>
          
          {/* Холбоо барих */}
           <div>
            <h3 className="text-gray-900 font-semibold mb-4">Холбоо барих</h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-teal-700 shrink-0 mt-0.5"/> 
                <span>Улаанбаатар хот, Сүхбаатар дүүрэг</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-teal-700 shrink-0"/> 
                <span>info@bichilglobus.mn</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-teal-700 shrink-0"/> 
                <span>+976 7777-XXXX</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-black/5 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
           <p>© 2025 Бичил Глобус. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a href="#" className="text-gray-400 hover:text-teal-700 transition">
      <Icon size={20} />
    </a>
  );
}
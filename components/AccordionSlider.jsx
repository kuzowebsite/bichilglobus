// components/AccordionSlider.jsx
'use client';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    number: '01',
    category: 'Хашаа барьцаалсан зээл',
    title: 'Тогтвортой, уян хатан нөхцөлтэй зээл',
    image: '/house.webp',
  },
  {
    id: 2,
    number: '02',
    category: 'Автомашин авах зээл',
    title: 'Газар барьцаалсан зээл',
    image: 'gazarzeel.jpg',
  },
  {
    id: 3,
    number: '03',
    category: 'ХБҮЦ',
    title: 'Жижиг дунд бизнесийг дэмжих',
    image: 'jijigdund.png',
  },
  {
    id: 4,
    number: '04',
    category: 'Бизнес зээл',
    title: 'Таны бизнесийг дэмжинэ',
    image: 'taniibusdemj.jpg',
  }
];

export default function AccordionSlider() {
  const [activeId, setActiveId] = useState(1); // Анхны идэвхтэй карт

  return (
    <div className="w-full max-w-[1200px] h-[600px] mx-auto px-4 py-8">
      <div className="flex gap-4 h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            onClick={() => setActiveId(slide.id)}
            className={`
              relative flex items-end overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out
              ${activeId === slide.id ? 'flex-[3]' : 'flex-[0.5] hover:flex-[0.8]'}
            `}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Хар сүүдэр (Overlay) */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${activeId === slide.id ? 'opacity-80' : 'opacity-40'}`} />

            {/* Доторх текстүүд */}
            <div className={`relative z-10 p-8 w-full transition-all duration-500 ${activeId === slide.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Дугаар (Active биш үед ч харагдана, гэхдээ байршил өөр) */}
              <h2 className={`text-white font-light absolute transition-all duration-700
                ${activeId === slide.id ? 'text-5xl -top-20 left-0' : 'text-6xl bottom-8 left-8 opacity-50'}
              `}>
                {activeId === slide.id && slide.number}
              </h2>

              {activeId !== slide.id && (
                 <span className="absolute bottom-8 left-8 text-6xl text-white/30 font-light">{slide.number}</span>
              )}

              {/* Текст мэдээлэл (Зөвхөн идэвхтэй үед) */}
              {activeId === slide.id && (
                <div className="flex flex-col gap-2">
                  <span className="text-gray-300 text-sm font-bold tracking-wider uppercase">{slide.category}</span>
                  <h3 className="text-white text-3xl font-bold leading-tight">{slide.title}</h3>
                </div>
              )}
            </div>

            {/* Нэмэх товчлуур (+ тэмдэг) */}
            <div className={`absolute bottom-8 right-8 w-10 h-10 border-2 border-[#9fff6b] rounded-full flex items-center justify-center transition-all duration-300 ${activeId === slide.id ? 'rotate-45 bg-[#9fff6b] text-black border-transparent' : 'text-[#9fff6b]'}`}>
               <span className="text-2xl font-light leading-none mb-1">+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
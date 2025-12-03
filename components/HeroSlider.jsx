'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';

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
    image: '/gazarzeel.jpg',
  },
  {
    id: 3,
    number: '03',
    category: 'ХБҮЦ',
    title: 'Жижиг дунд бизнесийг дэмжих',
    image: '/jijigdund.png',
  },
  {
    id: 4,
    number: '04',
    category: 'Бизнес зээл',
    title: 'Таны бизнесийг дэмжинэ',
    image: '/taniibusdemj.jpg',
  }
];

export default function HeroSlider() {
  const [activeId, setActiveId] = useState(null); // АНХНЫ ТӨЛӨВ: NULL (Бүгд ижил)

  const handleClick = (id) => {
    // Хэрэв дарсан карт нь аль хэдийн идэвхтэй байвал хаана (null), үгүй бол нээнэ (id)
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1100px] h-[400px] md:h-[500px] mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-4 h-full">
        {slides.map((slide) => {
          const isActive = activeId === slide.id;
          const isAnyActive = activeId !== null;

          return (
            <motion.div
              key={slide.id}
              layout
              onClick={() => handleClick(slide.id)}
              className={`
                relative rounded-3xl overflow-hidden cursor-pointer group shadow-2xl
                transition-[flex] duration-700 ease-in-out
                ${isActive ? 'md:flex-[3.5] flex-[3]' : (isAnyActive ? 'md:flex-[0.5] flex-[1]' : 'md:flex-[1] flex-[1]')}
              `}
              initial={false}
            >
              {/* Background Image */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                  <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                  />
              </motion.div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-60'}`} />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                
                <AnimatePresence mode="popLayout">
                  {/* ТӨЛӨВ 1: Идэвхтэй үед (Дэлгэгдсэн) */}
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-4 mb-2">
                          <span className="text-5xl md:text-7xl font-thin text-white/20 font-sans tracking-tighter">
                              {slide.number}
                          </span>
                          <div className="h-[1px] bg-white/30 flex-1"></div>
                      </div>

                      <div className="space-y-2">
                          <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-teal-500/30">
                              {slide.category}
                          </span>
                          <h3 className="text-xl md:text-3xl font-bold text-white leading-tight max-w-md">
                              {slide.title}
                          </h3>
                      </div>

                      <button className="mt-4 flex items-center gap-2 text-white/80 hover:text-white group/btn text-sm">
                          Дэлгэрэнгүй <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform"/>
                      </button>
                    </motion.div>
                  )}

                  {/* ТӨЛӨВ 2: Идэвхгүй үед (Хураагдсан эсвэл Тэгш) */}
                  {!isActive && (
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex md:flex-col items-start md:items-start justify-between h-full w-full"
                     >
                          {/* Дугаар */}
                          <span className={`text-3xl md:text-5xl font-light text-white/60 transition-all duration-500 ${!isAnyActive ? 'opacity-100' : 'md:opacity-50'}`}>
                              {slide.number}
                          </span>
                          
                          {/* Хэрэв бүгд тэгш (isAnyActive === false) байвал гарчгийг нь харуулна */}
                          {!isAnyActive && (
                             <div className="mt-auto w-full">
                                <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-2 line-clamp-2">
                                    {slide.category}
                                </h3>
                                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70">
                                   <Plus size={16} />
                                </div>
                             </div>
                          )}

                          {/* Хэрэв өөр нэг нь нээлттэй (isAnyActive === true) бол зөвхөн + тэмдэг */}
                          {isAnyActive && (
                             <div className="mt-auto md:w-full flex justify-end md:justify-start">
                                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 bg-black/20 backdrop-blur-sm">
                                   <Plus size={20} />
                                </div>
                             </div>
                          )}
                     </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

}

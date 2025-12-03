'use client';

const newsItems = [
  {
    id: 1,
    date: '2025-11-28',
    tag: 'Нийгэмд',
    title: 'Нэткапитал санхүүгийн групп "Зүрх Мартахгүй" төсөлд...',
    desc: 'Нийгмийн хариуцлагын хүрээнд хэрэгжүүлсэн төсөл',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    date: '2025-11-18',
    tag: 'Нийгэмд',
    title: '"Net Future 50" оюутны тэтгэлэгт хөтөлбөр анхны...',
    desc: 'Оюутнуудад зориулсан тэтгэлэгт хөтөлбөр',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    date: '2025-06-03',
    tag: 'Нийгэмд',
    title: 'Нэткапитал санхүүгийн группийн Тогтвортой хөгжлийн тайлан',
    desc: 'Тогтвортой хөгжлийн тайлан 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function News() {
  return (
    // ӨӨРЧЛӨЛТ: bg-gray-50 -ийг хасаж, bg-transparent болгосон (Арын шилэн эффект харагдана)
    <section className="py-16 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Мэдээ, мэдээлэл</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            // ӨӨРЧЛӨЛТ: bg-white -> bg-white/60 (Карт бас шилэн болсон)
            <div key={item.id} className="group bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                   <span className="px-3 py-1 bg-teal-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">{item.tag}</span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
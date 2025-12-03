'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import { 
  Search, Calendar, ArrowRight, Clock, 
  Flame, ChevronRight, Mail, Share2, Eye, Filter, X, Tag 
} from 'lucide-react';

// --- MOCK DATA ---
const CATEGORIES = ["Бүгд", "Компанийн мэдээ", "Нийгмийн хариуцлага", "Зах зээл", "Технологи"];

const FEATURED_NEWS = {
  id: 0,
  title: '"Net Capital" групп олон улсын хөрөнгийн зах зээлд IPO хийхээр төлөвлөж байна',
  category: 'Онцлох',
  date: '2025.12.01',
  readTime: '5 мин',
  image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
  desc: 'Бидний дараагийн томоохон алхам болох олон улсын зах зээлд гарах төлөвлөгөө болон хөрөнгө оруулагчдад санал болгох боломжуудын талаар дэлгэрэнгүй...'
};

const NEWS_DATA = [
  {
    id: 1,
    title: 'Санхүүгийн салбар дахь хиймэл оюун ухааны нөлөө',
    category: 'Технологи',
    date: '2025.11.28',
    readTime: '3 мин',
    views: '1.2k',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1632&auto=format&fit=crop',
    desc: 'Финтек салбарт AI хэрхэн хувьсгал хийж байгаа болон ирээдүйн чиг хандлага.',
    fullContent: 'Хиймэл оюун ухаан (AI) нь санхүүгийн салбарт эрсдэлийн үнэлгээ хийх, харилцагчийн үйлчилгээг автоматжуулах, болон залилангаас сэргийлэхэд томоохон өөрчлөлтүүдийг авчирч байна. Манай компани ч мөн адил зээлийн шийдвэр гаргах процесстоо AI ашиглаж эхэлснээр хурд 3 дахин нэмэгдсэн.'
  },
  {
    id: 2,
    title: '"Зүрх Мартахгүй" төсөлд нэгдлээ',
    category: 'Нийгмийн хариуцлага',
    date: '2025.10.15',
    readTime: '4 мин',
    views: '850',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop',
    desc: 'Нийгмийн хариуцлагын хүрээнд хэрэгжүүлсэн энэхүү төсөл нь олон хүүхдийн зүрхийг эмчлэхэд тусална.',
    fullContent: 'Бид "Улаанбаатар Сонгдо" эмнэлэгтэй хамтран "Зүрх Мартахгүй" төслийн хүрээнд 10 хүүхдийн зүрхний хагалгааны зардлыг бүрэн хариуцахаар боллоо. Энэ нь бидний нийгмийн хариуцлагын томоохон ажлуудын нэг юм.'
  },
  {
    id: 3,
    title: 'Хөрөнгийн зах зээлийн 3-р улирлын тойм',
    category: 'Зах зээл',
    date: '2025.09.05',
    readTime: '6 мин',
    views: '2.1k',
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop',
    desc: 'Дотоодын болон олон улсын зах зээлийн гол үйл явдлууд, шинжээчийн дүгнэлт.',
    fullContent: '3-р улиралд дотоодын хөрөнгийн зах зээл дээр ТОП-20 индекс 15%-ийн өсөлттэй байлаа. Уул уурхайн салбарын хувьцаанууд өсөлтийг тэргүүлсэн бол банкны салбарын хувьцаанууд тогтвортой байдлаа хадгаллаа.'
  },
  {
    id: 4,
    title: 'Оюутны тэтгэлэгт хөтөлбөр зарлагдлаа',
    category: 'Компанийн мэдээ',
    date: '2025.09.01',
    readTime: '2 мин',
    views: '3.4k',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    desc: 'Ирээдүйн шилдэг боловсон хүчнийг бэлтгэх, дэмжих зорилготой "Net Future" тэтгэлэг.',
    fullContent: 'Монгол улсын магадлан итгэмжлэгдсэн их дээд сургуулиудын 3, 4-р курсийн оюутнуудад зориулсан "Net Future" тэтгэлэгт хөтөлбөр зарлагдлаа. Шалгарсан оюутнууд сургалтын төлбөрийн 100% хөнгөлөлт эдлэхээс гадна манай компанид дадлага хийх эрхтэй болно.'
  }
];

const TRENDING_NEWS = [
  { id: 101, title: 'Бондын зах зээлийн өгөөж өслөө' },
  { id: 102, title: 'Шинэ салбарын нээлт удахгүй болно' },
  { id: 103, title: 'Харилцагчийн үйлчилгээний шинэ стандарт' },
];

// Type def
type NewsItem = typeof NEWS_DATA[0];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Бүгд");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const filteredNews = activeCategory === "Бүгд" 
    ? NEWS_DATA 
    : NEWS_DATA.filter(news => news.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-gray-900 font-sans selection:bg-teal-500 selection:text-white">
      {/* Scrollbar нуух CSS */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Navbar />

      {/* 1. FIXED HERO BACKGROUND */}
      <section className="fixed inset-0 w-full h-full z-0">
          <div className="absolute inset-0">
              <img 
                 src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" 
                 alt="News Background" 
                 className="w-full h-full object-cover opacity-80"
              />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
             <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                Newsroom
             </span>
             <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
               Мэдээ <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Мэдээлэл</span>
             </h1>
             <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
               Санхүүгийн ертөнц, технологийн дэвшил болон компанийн үйл ажиллагааны талаарх хамгийн сүүлийн үеийн мэдээлэл.
             </p>
             
             <div className="absolute bottom-10 animate-bounce text-white/50">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                </div>
             </div>
          </div>
      </section>

      {/* SPACER */}
      <div className="h-[85vh] w-full pointer-events-none"></div>

      {/* 2. SCROLLABLE CONTENT SHEET */}
      <section className="relative z-10 w-full bg-white/30 backdrop-blur-3xl border-t border-white/40 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] min-h-screen">
        
        <div className="w-full flex justify-center pt-6 pb-4">
           <div className="w-16 h-1.5 bg-gray-400/30 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
            
            {/* Controls Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-4 z-20 bg-white/20 p-3 rounded-2xl border border-white/10 shadow-xl">
                {/* Categories - Expanded */}
                <div className="flex-1 w-full overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                    <div className="flex items-center gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                                    activeCategory === cat
                                    ? 'bg-teal-500 text-white border-teal-500 shadow-lg shadow-teal-500/25'
                                    : 'bg-transparent text-white/80 border-transparent hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search - Short */}
                <div className="relative w-full md:w-64 shrink-0">
                    <input 
                        type="text" 
                        placeholder="Хайх..." 
                        className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/20 border border-white/10 focus:ring-2 focus:ring-teal-500/50 outline-none transition-all text-sm text-white placeholder-slate-400"
                    />
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                </div>
            </div>

            {/* MAIN CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* News Feed */}
                <div className="lg:col-span-8 space-y-10">
                    
                    {/* Featured Article */}
                    {activeCategory === "Бүгд" && (
                        <div className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                            <img 
                                src={FEATURED_NEWS.image} 
                                alt="Featured" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                            
                            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                                <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full mb-4 shadow-lg">
                                    {FEATURED_NEWS.category}
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-teal-300 transition-colors">
                                    {FEATURED_NEWS.title}
                                </h2>
                                <div className="flex items-center gap-6 text-gray-300 text-sm font-medium">
                                    <span className="flex items-center gap-2"><Calendar size={16}/> {FEATURED_NEWS.date}</span>
                                    <span className="flex items-center gap-2"><Clock size={16}/> {FEATURED_NEWS.readTime}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Standard Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredNews.map((item) => (
                            <div 
                                key={item.id} 
                                onClick={() => setSelectedNews(item)}
                                className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between text-gray-400 text-xs mb-3 font-medium">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-teal-700 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                                        <span className="text-xs text-gray-400">{item.views} үзсэн</span>
                                        <button className="flex items-center gap-1 text-teal-600 font-bold text-sm group/btn">
                                            Унших <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Trending */}
                    <div className="bg-white/40 p-6 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-200/50">
                        <h3 className="font-bold text-lg text-gray-600 mb-6 flex items-center gap-2">
                            <span className="p-1.5 bg-orange-100 text-orange-500 rounded-lg"><Flame size={20}/></span>
                            Эрэлттэй
                        </h3>
                        <div className="space-y-4">
                            {TRENDING_NEWS.map((t, i) => (
                                <div key={t.id} className="flex gap-4 group cursor-pointer border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                                    <span className="text-2xl font-black text-gray-200 group-hover:text-teal-500 transition-colors">
                                        {i+1}
                                    </span>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-600 leading-snug group-hover:text-teal-700 transition-colors">
                                            {t.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-white/30 from-gray-900 to-gray-800 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                         <div className="relative z-10">
                            <h3 className="font-bold text-xl mb-2 text-black/60">Бүртгүүлэх</h3>
                            <p className="text-gray-700 text-sm mb-6">Шинэ мэдээллийг цаг алдалгүй аваарай.</p>
                            <input 
                                type="email" 
                                placeholder="И-мэйл хаяг" 
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/20 transition-colors text-sm mb-3"
                            />
                            <button className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all">
                                Илгээх
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <FloatingMenu />

      {/* --- DETAIL MODAL / POPUP --- */}
      {selectedNews && (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200" 
            onClick={() => setSelectedNews(null)}
        >
            <div 
                // "no-scrollbar" class added here to hide scrollbar
                className="bg-white/60 border border-gray-200 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedNews(null)}
                    className="absolute top-6 right-6 p-2 bg-white/30 hover:bg-black/20 rounded-full text-gray-800 transition-all z-20 "
                >
                    <X size={24} />
                </button>

                {/* Cover Image */}
                <div className="h-64 md:h-80 w-full relative">
                     <img 
                        src={selectedNews.image} 
                        alt={selectedNews.title} 
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 relative z-10 -mt-20">
                    <div className="bg-white/10 p-8 rounded-[2rem] shadow-xl">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-4 py-1.5 bg-teal-50 bg-opacity-50 text-teal-700 border border-teal-100 font-bold rounded-full text-sm">
                                {selectedNews.category}
                            </span>
                            <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                <Calendar size={16} /> {selectedNews.date}
                            </span>
                            <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                <Clock size={16} /> {selectedNews.readTime}
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                            {selectedNews.title}
                        </h2>

                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                            <p className="text-1xl font-light text-gray-800 mb-8 border-l-4 border-teal-500 pl-6 italic">
                                {selectedNews.desc}
                            </p>
                            <p>
                            {selectedNews.fullContent}
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <span className="font-bold text-gray-500">Хуваалцах:</span>
                            <div className="flex gap-3">
                                <button className="p-3 bg-gray-100 hover:bg-teal-500 hover:text-white rounded-full transition-all text-gray-500">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

    </main>
  );
}
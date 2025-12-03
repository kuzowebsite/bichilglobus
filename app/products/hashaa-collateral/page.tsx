'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';
import FloatingMenu from '@/components/FloatingMenu';
import { Home, Percent, BadgeCheck, Hammer, LucideIcon, MapPin } from 'lucide-react';

export default function HashaaCollateralPage() {
  return (
    <main className="relative min-h-screen bg-gray-900 font-sans">
      <Navbar />

      {/* 1. HERO */}
      <section className="fixed inset-0 w-full h-full z-0">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Hashaa Background" 
                className="w-full h-full object-cover"
             />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
         
         <div className="absolute bottom-32 left-0 w-full px-4 sm:px-6 lg:px-8 z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Хашаа байшингаа <br /> <span className="text-teal-400">Эдийн засгийн эргэлтэд</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Та хашаа байшингаа барьцаалан өөрийн хэрэгцээндээ зориулан зээл аваарай.
            </p>
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-teal-500/30">
                Зээлийн хүсэлт илгээх
            </button>
         </div>
      </section>

      {/* SPACER */}
      <div className="h-[85vh] w-full pointer-events-none"></div>

      {/* 2. CONTENT */}
      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/40 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen overflow-hidden">
        
        <div className="w-full flex justify-center pt-6 pb-4">
           <div className="w-16 h-1.5 bg-black/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <FeatureCard 
                    icon={Home} 
                    title="Цогц үнэлгээ" 
                    desc="Хашаа болон байшинг хамтад нь өндрөөр үнэлж, зээл олгоно." 
                 />
                 <FeatureCard 
                    icon={MapPin} 
                    title="Оршин суух" 
                    desc="Зээлийн хугацаанд та өөрийн гэртээ тав тухтай амьдрах боломжтой." 
                 />
                 <FeatureCard 
                    icon={Hammer} 
                    title="Сайжруулах" 
                    desc="Байшингаа засварлах, өргөтгөх зорилгоор нэмэлт санхүүжилт авах боломжтой." 
                 />
              </div>

              {/* Steps */}
              <div className="mb-12">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Зээл авах үе шат</h2>
                 <div className="relative border-l-2 border-teal-500/30 ml-3 space-y-8">
                    <StepItem number="01" title="Хүсэлт" desc="Хашаа байшингийн бичиг баримттай ирж хүсэлт өгнө." />
                    <StepItem number="02" title="Үнэлгээ" desc="Мэргэжилтэн газар дээр нь очиж байшингийн чанар, хашааны байршлыг үнэлнэ." />
                    <StepItem number="03" title="Гэрээ" desc="Нотариат орж барьцааны гэрээ байгуулна." />
                    <StepItem number="04" title="Олголт" desc="Гэрээ бүртгэгдсэний дараа зээл олгогдоно." />
                 </div>
              </div>

              {/* Conditions & Docs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white/60 p-6 rounded-3xl border border-white/60">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><BadgeCheck className="text-teal-600"/> Зээлийн нөхцөл</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                       <li className="flex justify-between border-b border-gray-200 pb-2">
                          <span>Зээлийн дүн:</span> <span className="font-bold">100.0 сая ₮ хүртэл</span>
                       </li>
                       <li className="flex justify-between border-b border-gray-200 pb-2">
                          <span>Хүү (сарын):</span> <span className="font-bold">2.5% - 3.5%</span>
                       </li>
                       <li className="flex justify-between border-b border-gray-200 pb-2">
                          <span>Хугацаа:</span> <span className="font-bold">36 сар хүртэл</span>
                       </li>
                       <li className="flex justify-between border-b border-gray-200 pb-2">
                          <span>Шимтгэл:</span> <span className="font-bold">1%</span>
                       </li>
                    </ul>
                 </div>
                 
                 <div className="bg-white/60 p-6 rounded-3xl border border-white/60">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Бүрдүүлэх материал</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 marker:text-teal-500">
                       <li>Иргэний үнэмлэх</li>
                       <li>Газар, үл хөдлөх хөрөнгийн гэрчилгээ (эх хувиар)</li>
                       <li>Кадастрын зураг</li>
                       <li>Орлого нотлох баримт</li>
                    </ul>
                 </div>
              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-4">
               <div className="sticky top-24 space-y-6">
                  <LoanCalculator defaultRate={2.8} />
               </div>
            </div>

          </div>
        </div>

        <Footer />
      </section>

      <FloatingMenu />
    </main>
  );
}

// Sub-components
interface FeatureCardProps { icon: LucideIcon; title: string; desc: string; }
function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
    return (
        <div className="bg-white/40 p-5 rounded-2xl border border-white/50 hover:bg-white/60 transition-colors">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/20"><Icon size={24} /></div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
    )
}
interface StepItemProps { number: string; title: string; desc: string; }
function StepItem({ number, title, desc }: StepItemProps) {
    return (
        <div className="ml-8 relative">
            <span className="absolute -left-[43px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 ring-4 ring-white text-white text-xs font-bold">{number}</span>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{desc}</p>
        </div>
    )
}
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/LoanCalculator';
import FloatingMenu from '@/components/FloatingMenu';
// LucideIcon type-ийг импортлох хэрэгтэй
import { Car, Key, Percent, BadgeCheck, LucideIcon } from 'lucide-react';

export default function CarPurchasePage() {
  return (
    <main className="relative min-h-screen bg-gray-900 font-sans">
      <Navbar />

      {/* 1. FIXED HERO BACKGROUND */}
      <section className="fixed inset-0 w-full h-full z-0">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Car Purchase" 
                className="w-full h-full object-cover"
             />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
         
         <div className="absolute bottom-32 left-0 w-full px-4 sm:px-6 lg:px-8 z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Мөрөөдлийн төмөр хүлгээ <br /> <span className="text-teal-400">Өнөөдөр ав</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light mb-8">
              Урьдчилгаа төлбөр бага, хугацаа урт, шийдвэрлэлт хурдан.
            </p>
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-teal-500/30">
                Зээлийн хүсэлт илгээх
            </button>
         </div>
      </section>

      {/* SPACER */}
      <div className="h-[85vh] w-full pointer-events-none"></div>

      {/* 2. SCROLLABLE CONTENT SHEET */}
      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/40 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen overflow-hidden">
        
        <div className="w-full flex justify-center pt-6 pb-4">
           <div className="w-16 h-1.5 bg-black/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8">
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <FeatureCard 
                    icon={Car} 
                    title="Ямар ч машин" 
                    desc="Япон, Солонгос болон бусад орноос орж ирсэн бүх төрлийн машин." 
                 />
                 <FeatureCard 
                    icon={Percent} 
                    title="Бага хүү" 
                    desc="Зах зээлийн хамгийн уян хатан хүүгийн нөхцөл." 
                 />
                 <FeatureCard 
                    icon={Key} 
                    title="1 өдөрт" 
                    desc="Машинаа сонгоод, материалаа бүрдүүлээд 1 өдөрт шийдүүлээрэй." 
                 />
              </div>

              {/* Detailed Process Steps */}
              <div className="mb-12">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Зээл авах үе шат</h2>
                 <div className="relative border-l-2 border-teal-500/30 ml-3 space-y-8">
                    <StepItem number="01" title="Машинаа сонгох" desc="Та худалдан авах гэж буй автомашинаа сонгоно." />
                    <StepItem number="02" title="Хүсэлт илгээх" desc="Онлайнаар эсвэл салбар дээр ирж зээлийн хүсэлтээ өгнө." />
                    <StepItem number="03" title="Судалгаа & Шийдвэр" desc="Зээлийн мэргэжилтэн таны хүсэлтийг судалж шийдвэр гаргана." />
                    <StepItem number="04" title="Машинаа авах" desc="Гэрээ байгуулж, та шинэ машинаа унаад явна." />
                 </div>
              </div>

              {/* Conditions & Requirements Tabs/Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white/60 p-6 rounded-3xl border border-white/60">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><BadgeCheck className="text-teal-600"/> Зээлийн нөхцөл</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                       <li className="flex justify-between border-b border-gray-200 pb-2">
                          <span>Зээлийн дүн:</span> <span className="font-bold">100 сая ₮ хүртэл</span>
                       </li>
                       <li className="flex justify-between border-b border-gray-200 pb-2">
                          <span>Урьдчилгаа:</span> <span className="font-bold">10% - 20%</span>
                       </li>
                       <li className="flex justify-between border-b border-gray-200 pb-2">
                          <span>Хугацаа:</span> <span className="font-bold">60 сар хүртэл</span>
                       </li>
                    </ul>
                 </div>
                 
                 <div className="bg-white/60 p-6 rounded-3xl border border-white/60">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Бүрдүүлэх материал</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 marker:text-teal-500">
                       <li>Иргэний үнэмлэх (хуулбар)</li>
                       <li>Нийгмийн даатгалын лавлагаа</li>
                       <li>Худалдан авах автомашины бичиг баримт</li>
                       <li>Цээж зураг 1%</li>
                    </ul>
                 </div>
              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-4">
               <div className="sticky top-24 space-y-6">
                  <LoanCalculator defaultRate={2.2} />
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

// -----------------------------------------------------
// Type Definitions (Алдаа зассан хэсэг)
// -----------------------------------------------------

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
    return (
        <div className="bg-white/40 p-5 rounded-2xl border border-white/50 hover:bg-white/60 transition-colors">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/20">
                <Icon size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
    )
}

interface StepItemProps {
  number: string;
  title: string;
  desc: string;
}

function StepItem({ number, title, desc }: StepItemProps) {
    return (
        <div className="ml-8 relative">
            <span className="absolute -left-[43px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 ring-4 ring-white text-white text-xs font-bold">
                {number}
            </span>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{desc}</p>
        </div>
    )
}
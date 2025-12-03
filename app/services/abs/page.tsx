'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import { Shield, Layers, PieChart, BadgeCheck, LucideIcon } from 'lucide-react';

export default function ABSPage() {
  return (
    <main className="relative min-h-screen bg-gray-900 font-sans">
      <Navbar />

      <section className="fixed inset-0 w-full h-full z-0">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="ABS" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
         <div className="absolute bottom-32 left-0 w-full px-4 sm:px-6 lg:px-8 z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              ХБҮЦ <br /> <span className="text-teal-400">Хөрөнгөөр Баталгаажсан</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Бодит хөрөнгөөр баталгаажсан, эрсдэл багатай үнэт цаас.
            </p>
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full text-lg transition-all shadow-lg">Дэлгэрэнгүй</button>
         </div>
      </section>

      <div className="h-[85vh] w-full pointer-events-none"></div>

      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/40 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen overflow-hidden">
        <div className="w-full flex justify-center pt-6 pb-4"><div className="w-16 h-1.5 bg-black/10 rounded-full"></div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <FeatureCard icon={Shield} title="Баталгаажсан" desc="Зээлийн багц, үл хөдлөх хөрөнгө зэрэг бодит хөрөнгөөр баталгааждаг." />
                 <FeatureCard icon={Layers} title="Эрсдэл бага" desc="Олон төрлийн хөрөнгөөс бүрдсэн багц тул эрсдэл тархсан байдаг." />
                 <FeatureCard icon={PieChart} title="Тогтмол өгөөж" desc="Тогтмол хугацаанд хүүгийн орлого хүртэх боломж." />
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">ХБҮЦ-ийн бүтэц</h2>
                 <div className="bg-white/60 p-8 rounded-3xl border border-white/60">
                    <div className="flex flex-col gap-6">
                        <StructureItem step="1" title="Хөрөнгө бүрдүүлэх" text="Компани зээлийн багц эсвэл хөрөнгийг тусгай зориулалтын компанид шилжүүлнэ." />
                        <StructureItem step="2" title="Үнэт цаас гаргах" text="Тусгай зориулалтын компани уг хөрөнгийг барьцаалан үнэт цаас гаргана." />
                        <StructureItem step="3" title="Орлого хуваарилах" text="Хөрөнгөөс орж ирэх мөнгөн урсгалаар хөрөнгө оруулагчдын өгөөжийг төлнө." />
                    </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-24 space-y-6">
                  <div className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                      <div className="relative z-10">
                          <h4 className="font-bold text-xl mb-4">Яагаад ХБҮЦ гэж?</h4>
                          <ul className="space-y-3 text-teal-100 text-sm mb-6">
                              <li className="flex gap-2"><BadgeCheck size={16}/> Инфляцаас хамгаалах</li>
                              <li className="flex gap-2"><BadgeCheck size={16}/> Найдвартай барьцаа</li>
                              <li className="flex gap-2"><BadgeCheck size={16}/> Мэргэжлийн удирдлага</li>
                          </ul>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  </div>
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

// ----------------------------------------------------------------------
// Interfaces & Components
// ----------------------------------------------------------------------

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
    return (
        <div className="bg-white/40 p-5 rounded-2xl border border-white/50 hover:bg-white/60 transition-colors">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/20"><Icon size={24} /></div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
    )
}

interface StructureItemProps {
  step: string;
  title: string;
  text: string;
}

function StructureItem({ step, title, text }: StructureItemProps) {
    return (
        <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold shrink-0">{step}</div>
            <div>
                <h4 className="font-bold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600 mt-1">{text}</p>
            </div>
        </div>
    )
}
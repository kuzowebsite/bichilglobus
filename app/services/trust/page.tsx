'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import { Sprout, ShieldCheck, LineChart, Coins, LucideIcon } from 'lucide-react';

export default function TrustPage() {
  return (
    <main className="relative min-h-screen bg-gray-900 font-sans">
      <Navbar />

      <section className="fixed inset-0 w-full h-full z-0">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?q=80&w=2080&auto=format&fit=crop" alt="Trust" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
         <div className="absolute bottom-32 left-0 w-full px-4 sm:px-6 lg:px-8 z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Итгэлцэл <br /> <span className="text-teal-400">Мөнгөө ухаалгаар өсгө</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Таны мөнгийг мэргэжлийн түвшинд удирдаж, өндөр өгөөж хүртээх үйлчилгээ.
            </p>
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full text-lg transition-all shadow-lg">Гэрээ байгуулах</button>
         </div>
      </section>

      <div className="h-[85vh] w-full pointer-events-none"></div>

      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/40 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen overflow-hidden">
        <div className="w-full flex justify-center pt-6 pb-4"><div className="w-16 h-1.5 bg-black/10 rounded-full"></div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <FeatureCard icon={Sprout} title="Өндөр хүү" desc="Салбартаа өрсөлдөхүйц өндөр хүүг санал болгож байна." />
                 <FeatureCard icon={Coins} title="Сар бүр хүү" desc="Хүүгээ сар бүр авах эсвэл хуримтлуулан өсгөх боломжтой." />
                 <FeatureCard icon={LineChart} title="Уян хатан" desc="Гэрээний хугацаа болон нөхцөлийг таны хэрэгцээнд нийцүүлнэ." />
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Бүтээгдэхүүний нөхцөл</h2>
                 <div className="bg-white/60 rounded-3xl border border-white/60 overflow-hidden">
                    <div className="grid grid-cols-3 bg-teal-50/50 p-4 border-b border-gray-200 font-bold text-gray-700 text-sm md:text-base">
                        <div>Хугацаа</div>
                        <div>Хүү (жилийн)</div>
                        <div>Дүн</div>
                    </div>
                    <TermRow months="6 сар" rate="16.8%" amount="1 сая ₮ +" />
                    <TermRow months="12 сар" rate="18.0%" amount="1 сая ₮ +" />
                    <TermRow months="24 сар" rate="19.2%" amount="1 сая ₮ +" />
                 </div>
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-24 space-y-6">
                  <div className="bg-white/80 p-8 rounded-3xl border border-white shadow-lg">
                      <h4 className="font-bold text-gray-900 text-xl mb-4">Тооцоолуур</h4>
                      <div className="space-y-4">
                          <div>
                              <label className="text-xs text-gray-500 uppercase font-bold">Байршуулах дүн</label>
                              <input type="text" className="w-full mt-1 p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-900 font-bold" defaultValue="10,000,000" />
                          </div>
                          <div>
                              <label className="text-xs text-gray-500 uppercase font-bold">Хугацаа</label>
                              <select className="w-full mt-1 p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-900">
                                  <option>12 сар</option>
                                  <option>24 сар</option>
                              </select>
                          </div>
                          <div className="pt-4 border-t border-gray-200">
                              <div className="flex justify-between mb-1">
                                  <span className="text-gray-600">Хүүгийн орлого:</span>
                                  <span className="text-teal-600 font-bold">1,800,000 ₮</span>
                              </div>
                              <div className="flex justify-between text-lg">
                                  <span className="font-bold text-gray-900">Нийт:</span>
                                  <span className="font-bold text-gray-900">11,800,000 ₮</span>
                              </div>
                          </div>
                          <button className="w-full py-3 bg-[#0B1221] text-white rounded-xl font-bold shadow-lg mt-2">Тооцоолох</button>
                      </div>
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

interface TermRowProps {
  months: string;
  rate: string;
  amount: string;
}

function TermRow({ months, rate, amount }: TermRowProps) {
    return (
        <div className="grid grid-cols-3 p-4 border-b border-gray-100 last:border-0 hover:bg-white/40 transition-colors text-sm md:text-base text-gray-800">
            <div className="font-medium">{months}</div>
            <div className="font-bold text-teal-700">{rate}</div>
            <div>{amount}</div>
        </div>
    )
}
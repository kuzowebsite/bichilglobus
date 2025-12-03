'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import { TrendingUp, BarChart3, Globe, ShieldCheck, LucideIcon, Download, CheckCircle2 } from 'lucide-react';

export default function OpenBondPage() {
  return (
    <main className="relative min-h-screen bg-gray-900 font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="fixed inset-0 w-full h-full z-0">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop" alt="Open Bond" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
         <div className="absolute bottom-32 left-0 w-full px-4 sm:px-6 lg:px-8 z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Нээлттэй Бонд <br /> <span className="text-teal-400">Хөрөнгийн зах зээл</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Олон нийтэд нээлттэй санал болгож буй өндөр өгөөжтэй, найдвартай хөрөнгө оруулалт.
            </p>
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full text-lg transition-all shadow-lg">Дэлгэрэнгүй мэдээлэл</button>
         </div>
      </section>

      {/* SPACER */}
      <div className="h-[85vh] w-full pointer-events-none"></div>

      {/* 2. MAIN CONTENT SHEET */}
      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/40 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen overflow-hidden">
        
        <div className="w-full flex justify-center pt-6 pb-4">
            <div className="w-16 h-1.5 bg-black/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* CONTENT AREA (Left 8 cols) */}
            <div className="lg:col-span-8">
              
              {/* Features - Full Width */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                 <FeatureCard icon={TrendingUp} title="Өндөр өгөөж" desc="Банкны хадгаламжаас өндөр хүүтэйгээр мөнгөө өсгөх боломж." />
                 <FeatureCard icon={Globe} title="Хөрвөх чадвар" desc="Биржээр дамжуулан хүссэн үедээ худалдах, худалдан авах боломжтой." />
                 <FeatureCard icon={BarChart3} title="Татварын хөнгөлөлт" desc="Бондын хүүгийн орлого татварын таатай нөхцөлтэй." />
              </div>

              {/* Stages (Left Full Column) */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Хөрөнгө оруулах үе шат</h2>
                <div className="relative border-l-2 border-teal-500/30 ml-3 space-y-10 pl-4">
                    <StepItem number="01" title="Данс нээх" desc="Үнэт цаасны компанид данс нээлгэнэ." />
                    <StepItem number="02" title="Захиалга өгөх" desc="Анхдагч болон хоёрдогч зах зээлээс захиалга өгнө." />
                    <StepItem number="03" title="Баталгаажих" desc="Төлбөр төлөгдсөнөөр таны дансанд бонд байршина." />
                    <StepItem number="04" title="Өгөөж авах" desc="Хүүгийн төлбөрийг хуваарийн дагуу дансандаа авна." />
                </div>
              </div>

            </div>

            {/* SIDEBAR (Right 4 cols) */}
            <div className="lg:col-span-4">
               <div className="sticky top-24 space-y-6">
                  
                  {/* Tax Info Card (Moved Up) */}
                  <div className="bg-white/60 border border-white/60 p-6 rounded-3xl shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 size={18} className="text-teal-600" />
                          <h4 className="font-bold text-gray-900 text-sm">Хүүгийн татвар</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                          Бондын хүүгийн орлогын татвар 10% байдаг. Гэхдээ нээлттэй бондын хувьд <span className="font-bold text-gray-900">5%</span> байх хөнгөлөлттэй.
                      </p>
                  </div>

                  {/* Active Bonds Card (Moved from Main Content) */}
                  <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-lg">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <div className="p-2 bg-teal-100 rounded-xl text-teal-600 shadow-sm">
                                <ShieldCheck size={20} strokeWidth={2.5}/>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 leading-none">Бондын мэдээ</h3>
                                <p className="text-xs text-gray-500 mt-1">Одоо арилжаалагдаж буй</p>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <BondItem 
                                name="SONO I Бонд" 
                                rate="16%" 
                                term="12 сар" 
                                status="Хаагдсан" 
                            />
                            <BondItem 
                                name="SONO II Бонд" 
                                rate="15.5%" 
                                term="18 сар" 
                                status="Нээлттэй" 
                                active 
                            />
                            <BondItem 
                                name="SONO III Бонд" 
                                rate="17.2%" 
                                term="24 сар" 
                                status="Тун удахгүй" 
                                upcoming 
                            />
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl mb-4">
                                <Download size={16} className="text-gray-400 mt-0.5" />
                                <div>
                                    <p className="text-xs font-bold text-gray-800">Танилцуулга татах</p>
                                    <p className="text-[10px] text-gray-500">PDF, 2.4 MB</p>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                                Дэлгэрэнгүй мэдээлэл
                            </button>
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
// Components
// ----------------------------------------------------------------------

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
    return (
        <div className="bg-white/40 p-5 rounded-2xl border border-white/50 hover:bg-white/60 transition-colors group">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform"><Icon size={24} /></div>
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
        <div className="ml-8 relative group">
            <span className="absolute -left-[45px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 ring-4 ring-white text-white text-xs font-bold shadow-md group-hover:bg-teal-600 transition-colors">{number}</span>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

interface BondItemProps {
  name: string;
  rate: string;
  term: string;
  status: string;
  active?: boolean;
  upcoming?: boolean;
}

function BondItem({ name, rate, term, status, active, upcoming }: BondItemProps) {
    let statusColor = "bg-gray-200 text-gray-500";
    let borderColor = "border-gray-200";
    let bgColor = "bg-white/50";

    if (active) {
        statusColor = "bg-teal-500 text-white shadow-md shadow-teal-500/30";
        borderColor = "border-teal-200";
        bgColor = "bg-teal-50/50";
    } else if (upcoming) {
        statusColor = "bg-blue-500 text-white";
        borderColor = "border-blue-200";
        bgColor = "bg-blue-50/50";
    }

    return (
        <div className={`flex flex-col p-4 rounded-2xl border ${borderColor} ${bgColor} transition-all hover:scale-[1.02]`}>
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusColor}`}>{status}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600">
                <span className="bg-white px-2 py-1 rounded-md border border-gray-100 font-bold text-gray-800">{rate} хүү</span>
                <span>•</span>
                <span>{term}</span>
            </div>
        </div>
    )
}
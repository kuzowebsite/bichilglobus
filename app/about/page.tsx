'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import { 
  Target, 
  Eye, 
  Zap, 
  ShieldCheck, 
  Users, 
  History, 
  Lightbulb,
  LucideIcon 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#F0F2F5] font-sans selection:bg-[#00C896] selection:text-white overflow-x-hidden text-slate-800">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="fixed inset-0 w-full h-[100vh] z-0">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Office Background" 
                className="w-full h-full object-cover"
             />
         </div>
         {/* Overlay - Darkened slightly so white glass pops */}
         <div className="absolute inset-0 bg-[#0B1221]/46 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
         
         <div className="absolute top-[25%] left-0 w-full px-4 z-10 text-center">
            <span className="inline-block py-2 px-4 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg">
                Бид хэн бэ?
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl">
              Ирээдүйг хамтдаа <br/>
              <span className="text-[#00C896]">бүтээнэ</span>
            </h1>
            <p className="text-slate-100 text-lg max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
              Бид технологид суурилсан санхүүгийн шийдлээр харилцагчдынхаа бизнесийг дэмжиж, үнэ цэнийг бүтээгч хамт олон юм.
            </p>
         </div>
      </section>

      {/* SPACER */}
      <div className="h-[85vh] w-full pointer-events-none"></div>

      {/* 2. MAIN CONTENT SHEET - 50% White Glass */}
      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/60 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-25px_50px_rgba(0,0,0,0.15)] min-h-screen">
        
        <div className="w-full flex justify-center pt-6 pb-2">
           <div className="w-16 h-1.5 bg-slate-400/40 rounded-full"></div>
        </div>

        {/* FLOATING STATS - 60% White Glass */}
        <div className="max-w-5xl mx-auto px-4 -mt-12 mb-20 relative z-20">
            <div className="bg-white/30 rounded-[2rem] p-6 shadow-2xl flex flex-wrap md:flex-nowrap justify-between items-center px-8 md:px-16 gap-8 border border-white/60">
                <StatBox label="Байгуулагдсан" value="2018" />
                <div className="hidden md:block w-[1px] h-12 bg-slate-300/50"></div>
                <StatBox label="Харилцагч" value="15k+" />
                <div className="hidden md:block w-[1px] h-12 bg-slate-300/50"></div>
                <StatBox label="Ажилтан" value="120+" />
                <div className="hidden md:block w-[1px] h-12 bg-slate-300/50"></div>
                <StatBox label="Салбар" value="12" />
            </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          
          {/* SECTION 1: WHO WE ARE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Бидний тухай</h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed text-lg font-medium">
                      <p>
                          Соно Финтек ХХК нь 2018 онд үүсгэн байгуулагдсан бөгөөд Монголын санхүүгийн зах зээлд технологийн дэвшлийг ашиглан, харилцагчдад хамгийн хурдан, хялбар үйлчилгээг хүргэхийг зорин ажиллаж байна.
                      </p>
                      <p>
                          Бид уламжлалт банкны үйлчилгээг орчин үеийн технологитой хослуулан, жижиг дунд бизнес эрхлэгчид болон иргэдэд санхүүгийн бүх төрлийн үйлчилгээг нэг дороос авах боломжийг олгодог.
                      </p>
                  </div>
              </div>
              
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/40">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team working" 
                    className="w-full h-full object-cover"
                  />
              </div>
          </div>

          {/* SECTION 2: MISSION & VISION - 60% White Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              <div className="bg-white/20 rounded-[2.5rem] p-10 flex flex-col justify-start h-full border border-white/60 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#008A68]">
                      <Target size={32} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Эрхэм зорилго</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                      Санхүүгийн үйлчилгээг хүн бүрт хүртээмжтэй, хялбар, хурдан болгож, харилцагчийнхаа бизнесийн өсөлтийг дэмжих.
                  </p>
              </div>

              <div className="bg-white/20 rounded-[2.5rem] p-10 flex flex-col justify-start h-full border border-white/60 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                      <Eye size={32} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Алсын хараа</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                      Дэлхийн жишигт нийцсэн санхүүгийн технологийн компани болж, бүс нутгийн хэмжээнд үйл ажиллагаагаа тэлэх.
                  </p>
              </div>
          </div>

          {/* SECTION 3: CORE VALUES - 60% White Glass */}
         <div className="mb-24">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-700">Бидний үнэ цэнэ</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/20 rounded-[2.5rem] p-10 flex flex-col justify-start h-full border border-white/60 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-10 h-10 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                      <Zap size={24} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Хурд</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                      Технологийн шийдлээр цаг хугацааг хэмнэнэ.
                  </p>
              </div>

               <div className="bg-white/20 rounded-[2.5rem] p-10 flex flex-col justify-start h-full border border-white/60 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-10 h-10 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                      <ShieldCheck size={24} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Итгэлцэл</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                      Харилцагчийн мэдээллийн аюулгүй байдал.
                  </p>
              </div>

               <div className="bg-white/20 rounded-[2.5rem] p-10 flex flex-col justify-start h-full border border-white/60 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-10 h-10 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                      <Lightbulb size={24} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Инноваци</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                      Үргэлж шинэ, дэвшилтэт шийдлийг эрэлхийлнэ.
                  </p>
              </div>

               <div className="bg-white/20 rounded-[2.5rem] p-10 flex flex-col justify-start h-full border border-white/60 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-10 h-10 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                      <Users size={24} className="stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Хүндлэл</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                      Харилцагч, ажилтан бүрээ хүндэтгэнэ.
                  </p>
              </div>
              </div>
          </div>    

          {/* SECTION 4: HISTORY */}
          <div className="mb-24">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-800">Түүхэн замнал</h2>
              </div>
              
              <div className="relative max-w-3xl mx-auto">
                  <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] bg-white/30 md:-translate-x-1/2"></div>

                  <TimelineItem 
                    year="2018" 
                    title="Үүсгэн байгуулагдсан" 
                    desc="'Соно Финтек' компани байгуулагдаж, анхны салбараа нээв."
                    side="left"
                  />
                  <TimelineItem 
                    year="2019" 
                    title="Аппликейшн нээлт" 
                    desc="Анхны зээлийн аппликейшнийг зах зээлд нэвтрүүлэв."
                    side="right"
                  />
                  <TimelineItem 
                    year="2021" 
                    title="Бонд гаргав" 
                    desc="Анхны нээлттэй бондоо амжилттай арилжаалав."
                    side="left"
                  />
                  <TimelineItem 
                    year="2023" 
                    title="Олон улсад гарав" 
                    desc="Гадаад зах зээлд үйл ажиллагаагаа тэлэх эхлэл тавигдлаа."
                    side="right"
                  />
              </div>
          </div>

          {/* SECTION 5: CTA - Dark Blue Box (As per image request) */}
          <div className="bg-white/20 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Бидэнтэй нэгдэхэд бэлэн үү?</h2>
                  <p className="text-slate-600 mb-10 leading-relaxed">
                      Та манай багт нэгдэж, санхүүгийн салбарт шинэчлэл хийхийг хүсвэл нээлттэй ажлын байрыг сонирхоорой.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <button className="px-8 py-4 bg-white/20 hover:bg-white/40 text-slate-600 font-bold rounded-full transition-all shadow-lg hover:shadow-[#00C896]/30 hover:-translate-y-1">
                          Ажлын байр харах
                      </button>
                      <button className="px-8 py-4 bg-white/20 hover:bg-white/40 text-slate-600 font-bold rounded-full transition-all shadow-lg hover:shadow-[#00C896]/30 hover:-translate-y-1">
                          Холбоо барих
                      </button>
                  </div>
              </div>
              
              {/* Background Shapes */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#00C896]/10 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
          </div>

        </div>
        <Footer />
      </section>
      <FloatingMenu />
    </main>
  );
}

// ----------------------------------------------------------------------
// SUB COMPONENTS
// ----------------------------------------------------------------------

function StatBox({ label, value }: { label: string, value: string }) {
    return (
        <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-[#008A68] mb-1">{value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{label}</div>
        </div>
    )
}

function ValueCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
    return (
        // 60% White Glass Card
        <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-900 mb-6 shadow-md">
                <Icon size={28} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold text-slate-900 text-xl mb-3">{title}</h4>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">{desc}</p>
        </div>
    )
}

function TimelineItem({ year, title, desc, side }: { year: string, title: string, desc: string, side: 'left' | 'right' }) {
    return (
        <div className={`relative flex items-center justify-between mb-12 w-full ${side === 'left' ? 'flex-row-reverse' : ''}`}>
            {/* Empty Space */}
            <div className="hidden md:block w-[45%]"></div>
            
            {/* Node */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/80 border-4 border-slate-200 z-10 shadow-sm"></div>

            {/* Content Box - 60% White Glass */}
            <div className="w-[calc(100%-60px)] md:w-[45%] ml-[60px] md:ml-0 bg-white/20 p-8 rounded-[2rem] shadow-lg border border-white/60 hover:bg-white/30 transition-all">
                <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 mb-4 shadow-sm border border-slate-100">{year}</span>
                <h4 className="font-bold text-slate-900 text-xl mb-2">{title}</h4>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
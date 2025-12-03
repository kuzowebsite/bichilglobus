'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import { Lock, UserCheck, Briefcase, Gem, LucideIcon, ArrowUpRight } from 'lucide-react';

export default function ClosedBondPage() {
  return (
    <main className="relative min-h-screen bg-gray-900 font-sans">
      <Navbar />

      <section className="fixed inset-0 w-full h-full z-0">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" alt="Closed Bond" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
         <div className="absolute bottom-32 left-0 w-full px-4 sm:px-6 lg:px-8 z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Хаалттай Бонд <br /> <span className="text-teal-400">Мэргэжлийн хөрөнгө оруулалт</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Цөөн тооны мэргэжлийн хөрөнгө оруулагчдад зориулсан онцгой нөхцөлтэй хөрөнгө оруулалт.
            </p>
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full text-lg transition-all shadow-lg">Холбоо барих</button>
         </div>
      </section>

      <div className="h-[85vh] w-full pointer-events-none"></div>

      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/40 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.3)] min-h-screen overflow-hidden">
        <div className="w-full flex justify-center pt-6 pb-4"><div className="w-16 h-1.5 bg-black/10 rounded-full"></div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <FeatureCard icon={Gem} title="Онцгой нөхцөл" desc="Нийтэд санал болгодоггүй, тусгайлан тохиролцсон өндөр өгөөж." />
                 <FeatureCard icon={UserCheck} title="Мэргэжлийн" desc="Зөвхөн мэргэжлийн хөрөнгө оруулагчид оролцох боломжтой." />
                 <FeatureCard icon={Briefcase} title="Тогтвортой" desc="Урт хугацааны тогтвортой түншлэл, найдвартай байдал." />
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Давуу талууд</h2>
                 <div className="space-y-4">
                    <BenefitRow title="Хувийн тохиргоо" desc="Хөрөнгө оруулагчийн хэрэгцээнд нийцүүлэн нөхцөлийг тохирох боломж." />
                    <BenefitRow title="Нууцлал" desc="Хэлцлийн мэдээлэл болон хөрөнгө оруулагчийн мэдээлэл нууцлагдмал." />
                    <BenefitRow title="Шууд харилцаа" desc="Компанийн удирдлагатай шууд харилцаж, мэдээлэл авах давуу тал." />
                 </div>
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-24 space-y-6">
                  <div className="bg-[#0B1221] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                      <div className="relative z-10">
                          <h4 className="font-bold text-xl mb-4">VIP Үйлчилгээ</h4>
                          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                              Та 50 сая төгрөгөөс дээш дүнгээр хөрөнгө оруулалт хийх сонирхолтой бол бидэнтэй холбогдоорой.
                          </p>
                          <button className="w-full py-3 bg-teal-600 hover:bg-teal-500 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                              Цаг товлох <ArrowUpRight size={16}/>
                          </button>
                      </div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
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

interface BenefitRowProps {
  title: string;
  desc: string;
}

function BenefitRow({ title, desc }: BenefitRowProps) {
    return (
        <div className="flex gap-4 p-4 rounded-xl bg-white/40 border border-white/60">
            <div className="mt-1"><Lock className="text-teal-600" size={20} /></div>
            <div>
                <h4 className="font-bold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
        </div>
    )
}
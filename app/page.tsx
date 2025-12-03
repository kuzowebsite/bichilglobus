// app/page.tsx
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import InfiniteTicker from '../components/InfiniteTicker';
import FloatingMenu from '../components/FloatingMenu';
import News from '../components/News';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-900 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Дээд талын Цэс (Fixed) */}
      <Navbar />
      
      {/* ----------------------------------------------------
          1. HERO SECTION (FIXED BACKGROUND)
          Энэ хэсэг гүйлгэхэд хөдлөхгүй, ард нь үлдэнэ.
      ----------------------------------------------------- */}
      <section className="fixed inset-0 w-full h-full z-0 flex flex-col bg-slate-900">
         
         {/* Background Video */}
         <div className="absolute inset-0 transition-opacity duration-500">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover object-bottom"
             >
                <source src="https://videos.ctfassets.net/5ot5nqih11j6/2Vz2DFDIO5C2xgjBMqL2fF/77f4e27876b4e17554ccacff978e94d5/sonoHD.mp4" type="video/mp4" />
             </video>
         </div>
         
         {/* Overlay (Видеог бага зэрэг тодруулах хар сүүдэр) */}
         <div className="absolute inset-0 bg-black/20"></div>

         {/* Ticker (Hero дотроо хамгийн доор байрлана) */}
         <div className="absolute bottom-0 w-full z-20">
            <InfiniteTicker />
         </div>
      </section>

      {/* SPACER: Scroll хийх боломж олгох хоосон зай */}
      <div className="h-[100svh] w-full pointer-events-none"></div>

      {/* ----------------------------------------------------
          2. SCROLLABLE CONTENT SHEET - ШИЛЭН ЭФФЕКТ (60%)
          bg-white/60: 60% цагаан, 40% нэвт харагдана.
          backdrop-blur-3xl: Арын видеог хүчтэй бүрсийлгэж шил шиг болгоно.
      ----------------------------------------------------- */}
      <section className="relative z-10 w-full bg-white/46 backdrop-blur-3xl border-t border-white/40 rounded-t-[32px] md:rounded-t-[48px] shadow-[0_-20px_60px_rgba(0,0,0,0.2)] min-h-screen overflow-hidden">
         
         {/* Handle Bar (Visual cue) */}
         <div className="w-full flex justify-center pt-5 pb-2 cursor-grab active:cursor-grabbing">
             <div className="w-16 h-1.5 bg-black/20 rounded-full"></div>
         </div>

         {/* A. Hero Slider (Featured Products) */}
         <div className="pt-6 pb-10 px-0 md:px-4">
            <HeroSlider />
         </div>

         {/* B. News Section */}
         <News />

         {/* C. Footer */}
         <Footer />

      </section>

      {/* Floating Menu always on top */}
      <FloatingMenu />

    </main>
  );
}
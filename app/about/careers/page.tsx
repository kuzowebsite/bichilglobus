'use client';
import { useState, useRef, ChangeEvent, FormEvent, TouchEvent } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMenu from '@/components/FloatingMenu';
import { 
  Users, Briefcase, GraduationCap, MapPin, Clock, 
  CheckCircle2, ArrowRight, X, Trophy, LucideIcon, Upload, FileText, Check, ChevronDown
} from 'lucide-react';

// --- TYPES & DATA ---
interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  deadline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const JOBS: Job[] = [
  {
    id: 1,
    title: "Зээлийн эдийн засагч",
    type: "Бүтэн цаг",
    location: "Улаанбаатар, Сүхбаатар дүүрэг",
    deadline: "2025-06-30",
    description: "Харилцагчийн зээлийн судалгааг хийж, эрсдэлийг үнэлэх, зээлийн багцыг удирдах.",
    responsibilities: ["Зээлийн судалгаа хийх", "Эрсдэлийн үнэлгээ", "Тайлан бэлтгэх", "Харилцагчид зөвлөгөө өгөх"],
    requirements: ["Санхүүгийн мэргэжилтэй", "Тогтвор суурьшилтай ажиллах", "Харилцааны ур чадвар", "Банк санхүүгийн салбарт 1+ жил ажилласан"]
  },
  {
    id: 2,
    title: "Програм хангамжийн инженер",
    type: "Бүтэн цаг",
    location: "Төв оффис",
    deadline: "2025-07-15",
    description: "Компанийн дотоод систем болон харилцагчийн аппликейшныг хөгжүүлэх.",
    responsibilities: ["React/Next.js хөгжүүлэлт", "System Architecture", "Code Review", "Unit Testing"],
    requirements: ["3+ жилийн туршлага", "Full-stack мэдлэгтэй", "Багаар ажиллах", "Англи хэлний дунд түвшний мэдлэгтэй"]
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  // Mobile Scroll Helper
  const jobsRef = useRef<HTMLDivElement>(null);
  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyClick = () => {
    setIsApplyModalOpen(true);
  };

  const closeModals = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      
      {/* Scrollbar Hide CSS & Animations */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <Navbar />

      {/* 1. FIXED HERO BACKGROUND */}
      <section className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0">
              <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Careers Background" 
                 className="w-full h-full object-cover opacity-90"
              />
          </div>
          {/* Light Overlay for Contrast */}
          <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-32 left-0 w-full px-4 text-center max-w-4xl mx-auto z-10 pointer-events-auto">
             <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
               Бидэнтэй <span className="text-teal-400">Нэгдээрэй</span>
             </h1>
             <p className="text-gray-100 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
               Таны карьерын өсөлт, мэргэжлийн хөгжил бидний тэргүүний зорилт.
             </p>
             <button 
                onClick={scrollToJobs} 
                className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2 mx-auto animate-bounce-slow"
             >
                Нээлттэй ажлын байр <ChevronDown size={20} />
             </button>
          </div>
      </section>

      {/* SPACER */}
      <div className="h-[85vh] w-full pointer-events-none"></div>

      {/* 2. SCROLLABLE CONTENT SHEET (LIGHT THEME) */}
      <section className="relative z-10 w-full bg-white/50 backdrop-blur-3xl border-t border-white/50 rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.2)] min-h-screen">
        
        {/* Handle Bar */}
        <div className="w-full flex justify-center pt-6 pb-4">
           <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-32" ref={jobsRef}>
          
          {/* Why Join Us Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
             <WhyUsCard icon={Users} title="Эвсэг хамт олон" />
             <WhyUsCard icon={Briefcase} title="Тогтвортой ажил" />
             <WhyUsCard icon={Trophy} title="Өрсөлдөхүйц цалин" />
             <WhyUsCard icon={GraduationCap} title="Суч суралцах" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="jobs">
            
            {/* LEFT: Job Listings */}
            <div className="lg:col-span-7 space-y-6">
               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="p-2 bg-teal-80 rounded-lg"><Briefcase className="text-teal-600" size={24}/></div>
                  Нээлттэй ажлын байрууд
               </h2>

               {JOBS.map((job) => (
                  <div 
                    key={job.id} 
                    onClick={() => setSelectedJob(job)}
                    className={`p-6 rounded-[2rem] border cursor-pointer transition-all duration-300 group relative overflow-hidden bg-white/50
                      ${selectedJob?.id === job.id 
                        ? 'border-teal-500 shadow-xl ring-1 ring-teal-500 transform scale-[1.01]' 
                        : 'border-gray-200 hover:border-teal-400 hover:shadow-lg'}`}
                  >
                     <div className="flex justify-between items-start mb-3 relative z-10">
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-teal-700 transition-colors">
                            {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100">
                            {job.type}
                        </span>
                     </div>
                     <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 relative z-10">
                         <span className="flex items-center gap-1"><MapPin size={16} className="text-teal-600"/> {job.location}</span>
                         <span className="flex items-center gap-1"><Clock size={16} className="text-teal-600"/> {job.deadline}</span>
                     </div>
                     <p className="text-gray-600 text-sm line-clamp-2 mb-4 relative z-10 font-normal">
                         {job.description}
                     </p>
                     <div className="flex items-center text-teal-600 font-bold text-sm group-hover:gap-2 transition-all relative z-10">
                        Дэлгэрэнгүй <ArrowRight size={16} className="ml-1"/>
                     </div>
                  </div>
               ))}
            </div>

            {/* RIGHT: Detail View (Desktop Sticky) */}
            <div className="hidden lg:block lg:col-span-5">
               <div className="sticky top-24">
                  {selectedJob ? (
                    <DetailContent 
                        job={selectedJob} 
                        onClose={() => setSelectedJob(null)} 
                        onApply={handleApplyClick} 
                    />
                  ) : (
                     <EmptyState />
                  )}
               </div>
            </div>

          </div>
        </div>

        <Footer />
      </section>

      {/* --- MOBILE DETAIL MODAL (SWIPEABLE BOTTOM SHEET) --- */}
      {selectedJob && (
        <MobileSwipeSheet 
            isOpen={!!selectedJob} 
            onClose={() => setSelectedJob(null)}
        >
            <DetailContent 
                job={selectedJob} 
                onClose={() => setSelectedJob(null)} 
                onApply={handleApplyClick}
                isMobile={true}
            />
        </MobileSwipeSheet>
      )}

      {/* --- APPLICATION FORM MODAL (Анкет бөглөх) --- */}
      {isApplyModalOpen && selectedJob && (
        <ApplicationModal 
            jobTitle={selectedJob.title} 
            onClose={closeModals} 
        />
      )}

      <FloatingMenu />
    </main>
  );
}

// ----------------------------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------------------------

// 1. Mobile Swipeable Sheet Component (Logic for Dragging)
function MobileSwipeSheet({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) {
    const [sheetY, setSheetY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const sheetRef = useRef<HTMLDivElement>(null);

    // Touch Handlers
    const onTouchStart = (e: TouchEvent) => {
        // Only allow drag if we are at the top of the scroll container
        if (sheetRef.current && sheetRef.current.scrollTop > 0) return;
        startY.current = e.touches[0].clientY;
        setIsDragging(true);
    };

    const onTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY.current;
        if (diff > 0) {
            setSheetY(diff);
        }
    };

    const onTouchEnd = () => {
        setIsDragging(false);
        if (sheetY > 150) { // Threshold to close
            onClose();
        } else {
            setSheetY(0); // Snap back
        }
    };

    if (!isOpen) return null;

    return (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Sheet */}
            <div 
                className="w-full bg-white rounded-t-[2rem] shadow-2xl flex flex-col max-h-[85vh] h-auto relative z-10 transition-transform duration-300 ease-out"
                style={{ 
                    transform: `translateY(${sheetY}px)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
            >
                {/* Drag Handle Area */}
                <div 
                    className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing bg-white rounded-t-[2rem] touch-none"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
                </div>

                {/* Close Button Header */}
                <div className="px-6 flex justify-end">
                     <button onClick={onClose} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200">
                        <X size={20} />
                     </button>
                </div>

                {/* Content Area */}
                <div 
                    ref={sheetRef}
                    className="overflow-y-auto px-6 custom-scrollbar pb-10" // Added pb-10 here for safe area
                >
                    {children}
                    {/* Extra Safe Space for buttons */}
                    <div className="h-16"></div> 
                </div>
            </div>
        </div>
    );
}

// 2. Job Detail Content (Light Mode Styled)
function DetailContent({ job, onClose, onApply, isMobile = false }: { job: Job, onClose: () => void, onApply: () => void, isMobile?: boolean }) {
    return (
        <div className={`bg-white/40 ${!isMobile ? 'border border-gray-100 rounded-[2rem] p-8 shadow-xl' : ''} relative`}>
            {/* Desktop Header */}
            {!isMobile && (
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight pr-8">{job.title}</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute top-6 right-6">
                        <X size={20} className="text-gray-400 hover:text-gray-600"/>
                    </button>
                </div>
            )}

            {/* Mobile Header (Since Close is handled by sheet) */}
            {isMobile && (
                <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-6">{job.title}</h2>
            )}
            
            <div className="space-y-8">
                <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center"><CheckCircle2 size={18} className="text-teal-600"/></span> 
                        Үүрэг хариуцлага
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 ml-2">
                        {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                                <span className="leading-relaxed">{r}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center"><GraduationCap size={18} className="text-teal-600"/></span> 
                        Тавигдах шаардлага
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 ml-2">
                        {job.requirements.map((r, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                                <span className="leading-relaxed">{r}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`mt-8 pt-6 border-t border-gray-100 sticky bottom-0 pb-4`}>
                <button 
                    onClick={onApply}
                    className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                    Анкет илгээх <ArrowRight size={18}/>
                </button>
                <p className="text-center text-xs text-gray-600 mt-3">
                    *Та CV-гээ бэлдсэн байх шаардлагатай
                </p>
            </div>
        </div>
    )
}

// 3. Empty State (Light Mode)
function EmptyState() {
    return (
        <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-white/50 rounded-[2.5rem] border border-gray-300 border-dashed min-h-[400px]">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <Briefcase size={32} className="text-teal-600"/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ажлын байраа сонгоно уу</h3>
            <p className="text-gray-500">Зүүн талд байгаа жагсаалтаас дарж дэлгэрэнгүй мэдээлэл харна уу.</p>
        </div>
    )
}

// 4. Application Modal (Light Mode)
function ApplicationModal({ jobTitle, onClose }: { jobTitle: string, onClose: () => void }) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [fileName, setFileName] = useState<string | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call delay
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    if (status === 'success') {
        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
                <div className="bg-white rounded-[2rem] p-8 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Амжилттай илгээгдлээ!</h3>
                    <p className="text-gray-600 mb-8">Таны анкетийг бид хүлээн авлаа. Тэнцсэн тохиолдолд эргэн холбогдох болно.</p>
                    <button onClick={onClose} className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-colors">
                        Хаах
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
            <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Анкет бөглөх</h3>
                        <p className="text-sm text-teal-600 font-medium">{jobTitle}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                <div className="p-6 overflow-y-auto no-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Овог</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all" placeholder="Бат" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Нэр</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all" placeholder="Болд" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">И-мэйл хаяг</label>
                            <input required type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all" placeholder="name@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Утасны дугаар</label>
                            <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all" placeholder="9911xxxx" />
                        </div>

                        {/* CV UPLOAD AREA (LIGHT) */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">CV / Resume хавсаргах</label>
                            <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:bg-teal-50 hover:border-teal-400 transition-all cursor-pointer group">
                                <input 
                                    required 
                                    type="file" 
                                    accept=".pdf,.doc,.docx" 
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                                />
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                        {fileName ? <FileText className="text-teal-600" size={24}/> : <Upload className="text-gray-400 group-hover:text-teal-600" size={24}/>}
                                    </div>
                                    {fileName ? (
                                        <div>
                                            <p className="text-sm font-bold text-teal-700">{fileName}</p>
                                            <p className="text-xs text-green-600 mt-1">Файл сонгогдлоо</p>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-sm font-medium text-gray-600">
                                                <span className="text-teal-600 font-bold border-b border-teal-200">Файл сонгох</span> эсвэл чирж оруулна уу
                                            </p>
                                            <p className="text-xs text-gray-400">PDF, DOCX (Max 5MB)</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <button 
                                type="submit" 
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {status === 'loading' ? (
                                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>Илгээх <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

// 5. Feature Card Helper (Light Mode)
function WhyUsCard({ icon: Icon, title }: { icon: LucideIcon, title: string }) {
    return (
        <div className="bg-white/40 p-5 rounded-2xl border border-white/50 flex items-center gap-4 hover:bg-white hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-500/20">
                <Icon size={22} />
            </div>
            <span className="font-bold text-gray-800 text-sm group-hover:text-teal-800 transition-colors">{title}</span>
        </div>
    )
}
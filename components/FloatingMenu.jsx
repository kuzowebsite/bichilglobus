'use client';
import { useState } from 'react';
import { Calculator, FileText, MapPin, Facebook, Instagram, Phone, X, ChevronUp } from 'lucide-react';

export default function FloatingMenu() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-1.5">
      
      {/* 1. Popup Menus (Жижигрүүлсэн) */}
      {activeMenu === 'loan' && (
        <div className="mb-1 bg-white/60 backdrop-blur-xl rounded-xl shadow-2xl border border-white/40 p-1.5 w-40 animate-fade-in-up origin-bottom">
          <div className="flex flex-col gap-0.5">
            <a href="#" className="flex items-center gap-2 px-2.5 py-2 hover:bg-white/50 rounded-lg transition-colors text-gray-800 font-medium">
              <FileText size={14} className="text-teal-700" />
              <span className="text-xs">Зээлийн хүсэлт</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-2.5 py-2 hover:bg-white/50 rounded-lg transition-colors text-gray-800 font-medium">
              <Calculator size={14} className="text-teal-700" />
              <span className="text-xs">Тооцоолуур</span>
            </a>
          </div>
        </div>
      )}

      {activeMenu === 'contact' && (
        <div className="mb-1 bg-white/60 backdrop-blur-xl rounded-xl shadow-2xl border border-white/40 p-2 w-48 animate-fade-in-up origin-bottom">
           <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-gray-400/20">
              <div className="bg-teal-500/10 p-1 rounded-full text-teal-700"><MapPin size={14}/></div>
              <span className="text-xs font-bold text-gray-800">Салбар харах</span>
           </div>
           <div className="space-y-1.5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Social</p>
              <div className="flex justify-between gap-1.5">
                 <button className="flex-1 py-1 bg-black/40 hover:bg-blue-500/20 hover:text-blue-700 rounded-md flex justify-center transition-colors"><Facebook size={14}/></button>
                 <button className="flex-1 py-1 bg-black/40 hover:bg-pink-500/20 hover:text-pink-700 rounded-md flex justify-center transition-colors"><Instagram size={14}/></button>
                 <button className="flex-1 py-1 bg-black/40 hover:bg-teal-500/20 hover:text-teal-700 rounded-md flex justify-center transition-colors"><Phone size={14}/></button>
              </div>
           </div>
        </div>
      )}

      {/* 2. Main Buttons (Жижигрүүлсэн) */}
      <div className="flex items-center gap-1 p-1 bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl rounded-full">
        
        {/* Loan Button */}
        <button 
          onClick={() => toggleMenu('loan')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-300 ${
            activeMenu === 'loan' 
              ? 'bg-teal-600/80 backdrop-blur-md text-white shadow-lg shadow-teal-600/20' 
              : 'bg-transparent text-gray-800 hover:bg-white/30'
          }`}
        >
          {activeMenu === 'loan' ? <X size={14} /> : <Calculator size={14} />}
          <span className="font-semibold text-xs">Зээл</span>
          <ChevronUp size={12} className={`transition-transform duration-300 text-gray-600 ${activeMenu === 'loan' ? 'rotate-180 text-white' : ''}`}/>
        </button>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-gray-400/30"></div>

        {/* Contact Button */}
        <button 
          onClick={() => toggleMenu('contact')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-300 ${
            activeMenu === 'contact' 
              ? 'bg-[#0B1221]/80 backdrop-blur-md text-white shadow-lg' 
              : 'bg-transparent text-gray-800 hover:bg-white/30'
          }`}
        >
          {activeMenu === 'contact' ? <X size={14} /> : <MapPin size={14} />}
          <span className="font-semibold text-xs">Холбоо</span>
          <ChevronUp size={12} className={`transition-transform duration-300 text-gray-600 ${activeMenu === 'contact' ? 'rotate-180 text-white' : ''}`}/>
        </button>

      </div>
    </div>
  );
}
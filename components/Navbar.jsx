'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Image компонент нэмсэн
import { ChevronDown, ChevronRight, Globe, Menu, X, Check } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [activeLang, setActiveLang] = useState('MN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Mobile Menu Toggle Logic
  const toggleExpand = (label, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  // Data
  const menuData = [
    { 
      label: "Бүтээгдэхүүн", 
      items: [
        { 
          label: 'Автомашины зээл', 
          subItems: [
            { label: 'Автомашин барьцаалсан зээл', href: '/products/car-collateral' },
            { label: 'Автомашин авах зээл', href: '/products/car-purchase' }
          ] 
        },
        { 
          label: 'Үл хөдлөх хөрөнгийн зээл', 
          subItems: [
              { label: 'Орон сууц барьцаалсан зээл', href: '/products/apartment-collateral' },
              { label: 'Хашаа барьцаалсан зээл', href: '/products/hashaa-collateral' },
              { label: 'Газар барьцаалсан зээл', href: '/products/land-collateral' }
          ]
        },
        { label: 'Дугаар барьцаалсан зээл', href: '/products/number-collateral' },
        { label: 'Бизнес зээл', href: '/products/business-loan' },
      ]
    },
    { 
      label: "Үйлчилгээ", 
      items: [
        { 
          label: 'Бонд', 
          subItems: [
            { label: 'Нээлттэй бонд', href: '/services/bond/open' },
            { label: 'Хаалттай бонд', href: '/services/bond/closed' }
          ] 
        },
        { label: 'ХБҮЦ', href: '/services/abs' },
        { label: 'Итгэлцэл', href: '/services/trust' },
      ]
    },
    { 
      label: "Бидний тухай", 
      items: [
        { label: 'Танилцуулга', href: '/about' },
        { label: 'Хүний нөөц', href: '/about/careers' },
      ]
    }
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50">
      
      {/* Scrollbar нуух CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      {/* Үндсэн Header Container */}
      <nav className={`bg-white/20 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5 rounded-2xl px-2 py-2 flex flex-col transition-all duration-300 ${mobileMenuOpen ? 'gap-2' : ''}`}>
        
        {/* --- TOP BAR --- */}
        <div className="flex items-center justify-between w-full shrink-0">
            
            {/* 1. Logo Section */}
            {/* ӨӨРЧЛӨЛТ: Лого болон Текст */}
            <Link href="/" className="flex items-center gap-2 lg:gap-3 pl-2 lg:pl-4 cursor-pointer">
              
              {/* Зураг оруулах хэсэг */}
              {/* Та 'public' фолдертоо байгаа зургийн нэрийг src хэсэгт бичнэ үү. Жнь: /logo.png */}
              <div className="relative w-30 h-10 lg:w-30 lg:h-10 shrink-0">
                 <Image 
                    src="/logo.svg" 
                    alt="Logo" 
                    fill 
                    className="object-contain"
                    priority
                 />
              </div>

            </Link>

            {/* 2. Center Navigation (PC ONLY) */}
            <div className="hidden lg:flex items-center bg-white/15 backdrop-blur-sm rounded-xl p-1.5 border border-white/10">
              {menuData.map((menu, idx) => (
                 <DesktopNavItem key={idx} title={menu.label} items={menu.items} />
              ))}
              <Link href="/news" className="px-5 py-2 text-sm font-medium text-gray-800 hover:text-teal-700 transition-colors">
                Мэдээлэл
              </Link>
            </div>

            {/* 3. Right Actions */}
            <div className="flex items-center gap-2 pr-2">
              <div className="hidden lg:block h-6 w-[1px] bg-gray-400/30 mx-1"></div>
              
              {/* Language Selector */}
              <div className="relative group">
                <button 
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 transition-all text-sm font-semibold text-gray-800"
                >
                  <Globe size={18} />
                  <span>{activeLang}</span>
                </button>
                
                <div className={`absolute top-full right-0 mt-2 w-36 bg-white/60 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 
                    ${langDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'} 
                    transition-all duration-200 p-1.5 z-50`}
                >
                   <button onClick={() => { setActiveLang('MN'); setLangDropdownOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 border border-transparent flex items-center justify-between ${activeLang === 'MN' ? 'text-teal-800 bg-white/40 font-bold border-white/20' : 'text-gray-800 hover:bg-white/40'}`}>
                       <span>MN Монгол</span>
                       {activeLang === 'MN' && <Check size={14}/>}
                   </button>
                   <button onClick={() => { setActiveLang('EN'); setLangDropdownOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 border border-transparent flex items-center justify-between ${activeLang === 'EN' ? 'text-teal-800 bg-white/40 font-bold border-white/20' : 'text-gray-800 hover:bg-white/40'}`}>
                       <span>US English</span>
                       {activeLang === 'EN' && <Check size={14}/>}
                   </button>
                </div>
              </div>

              {/* Mobile Hamburger Button */}
              <button 
                className="lg:hidden p-2 text-gray-800 bg-white/20 rounded-lg active:scale-95 transition-transform"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
        </div>

        {/* --- MOBILE MENU ACCORDION --- */}
        {mobileMenuOpen && (
            <div className="lg:hidden w-full pt-2 border-t border-white/20 animate-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col gap-1 pb-2 max-h-[75vh] overflow-y-auto scrollbar-hide">
                    {menuData.map((menu, idx) => (
                        <MobileNavItem 
                            key={idx} 
                            item={menu} 
                            expandedItems={expandedItems} 
                            onToggle={toggleExpand} 
                            depth={0} 
                        />
                    ))}
                    <Link href="/news" className="px-4 py-3 text-gray-800 font-medium hover:bg-white/30 rounded-lg transition-colors">
                        Мэдээлэл
                    </Link>
                </div>
            </div>
        )}

      </nav>
    </div>
  );
}

// --- DESKTOP NAV ITEM ---
function DesktopNavItem({ title, items }) {
  return (
    <div className="relative group px-1">
      <button className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-gray-800 rounded-lg hover:text-teal-800 hover:bg-white/40 transition-all">
        {title}
        <ChevronDown size={14} className="text-gray-600 group-hover:text-teal-800 transition-transform group-hover:rotate-180" />
      </button>
      
      <div className="absolute top-full left-0 mt-2 w-64 bg-white/60 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 z-50">
        {items.map((item, idx) => (
          <div key={idx} className="relative group/sub">
            {item.subItems ? (
              <button className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-900 font-medium rounded-lg hover:bg-white/50 hover:text-teal-900 text-left transition-colors">
                {item.label}
                <ChevronRight size={14} className="text-gray-600" />
              </button>
            ) : (
              <Link href={item.href || '#'} className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-900 font-medium rounded-lg hover:bg-white/50 hover:text-teal-900 text-left transition-colors">
                 {item.label}
              </Link>
            )}
            
            {item.subItems && (
              <div className="absolute top-0 left-full ml-2 w-56 bg-white/60 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform -translate-x-2 group-hover/sub:translate-x-0 p-2">
                {item.subItems.map((sub, sIdx) => (
                  <Link 
                    key={sIdx} 
                    href={sub.href || '#'}
                    className="w-full block px-3 py-2.5 text-sm text-gray-900 font-medium rounded-lg hover:bg-white/50 hover:text-teal-900 text-left transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- MOBILE NAV ITEM ---
function MobileNavItem({ item, expandedItems, onToggle, depth }) {
    const hasChildren = item.items || item.subItems;
    const isExpanded = expandedItems[item.label];
    const children = item.items || item.subItems;

    const paddingLeft = depth === 0 ? 'px-4' : 'pl-8';
    const bgClass = isExpanded && depth === 0 ? 'bg-white/10' : 'hover:bg-white/20';

    if (hasChildren) {
        return (
            <div className={`rounded-lg overflow-hidden transition-all shrink-0 ${bgClass}`}>
                <button 
                    onClick={(e) => onToggle(item.label, e)}
                    className={`w-full flex items-center justify-between py-3 ${paddingLeft} text-gray-800 text-left transition-colors`}
                >
                    <span className={`${depth === 0 ? 'font-bold' : 'font-medium text-sm'}`}>{item.label}</span>
                    <ChevronDown size={18} className={`text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                {isExpanded && (
                    <div className="pb-2 flex flex-col gap-1 border-l border-white/10 ml-4 animate-in slide-in-from-top-1">
                        {children.map((child, idx) => (
                            <MobileNavItem 
                                key={idx} 
                                item={child} 
                                expandedItems={expandedItems} 
                                onToggle={onToggle} 
                                depth={depth + 1} 
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <Link 
                href={item.href || '#'}
                className={`block py-2.5 ${paddingLeft} text-sm font-medium text-gray-700 hover:text-teal-800 hover:bg-white/30 rounded-lg transition-colors shrink-0`}
            >
                {item.label}
            </Link>
        );
    }
}
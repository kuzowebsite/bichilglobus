const rates = [
  { pair: "USD/MNT", val: "3,421.47", change: "+0.19%", isUp: true },
  { pair: "EUR/MNT", val: "3,679.84", change: "-0.19%", isUp: false },
  { pair: "CNY/MNT", val: "472.82", change: "+0.05%", isUp: true },
  { pair: "Алт/гр", val: "285,118", change: "+1.25%", isUp: true },
  { pair: "BTC/USD", val: "63,200", change: "-0.55%", isUp: false },
];

export default function InfiniteTicker() {
  return (
    // ӨӨРЧЛӨЛТ: py-2 байсныг py-1 болгож маш намхан болгов
    <div className="w-full bg-slate-900/80 border-t border-white/5 py-1 overflow-hidden absolute bottom-0 z-20 backdrop-blur-md">
      <div className="relative w-full flex overflow-x-hidden group">
        
        {/* animate-marquee class заавал байх ёстой */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 px-4 group-hover:paused">
          
          {/* Loop 1 */}
          {rates.map((rate, i) => (
             <TickerItem key={i} rate={rate} />
          ))}
          {/* Loop 2 (Давхардаж харагдах) */}
          {rates.map((rate, i) => (
             <TickerItem key={`dup-${i}`} rate={rate} />
          ))}
          {/* Loop 3 (Өргөн дэлгэцэнд зориулсан) */}
          {rates.map((rate, i) => (
             <TickerItem key={`trip-${i}`} rate={rate} />
          ))}
          {/* Loop 4 (Бүр өргөн дэлгэцэнд тасрахгүй байхын тулд) */}
           {rates.map((rate, i) => (
             <TickerItem key={`quad-${i}`} rate={rate} />
          ))}

        </div>
      </div>
    </div>
  );
}

function TickerItem({ rate }) {
    return (
        // ӨӨРЧЛӨЛТ: Текстийн хэмжээг text-[10px] болгож багасгав
        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-wide font-medium">
            <span className="text-slate-400">{rate.pair}</span>
            <span className="text-white font-bold">{rate.val}</span>
            <span className={`${rate.isUp ? 'text-emerald-400' : 'text-rose-400'} flex items-center`}>
                {rate.isUp ? '▲' : '▼'}{rate.change}
            </span>
            <span className="text-slate-700 ml-2 opacity-30">|</span>
        </span>
    )
}
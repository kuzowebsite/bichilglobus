'use client';
import { useState } from 'react'; // useEffect хэрэггүй болсон
import { Calculator } from 'lucide-react';

export default function LoanCalculator({ defaultRate = 2.5 }) {
  const [amount, setAmount] = useState(10000000);
  const [months, setMonths] = useState(24);

  // ЗАСВАР: useEffect-ийг устгаж, шууд тооцоолдог болгосон.
  // Энэ нь render хийгдэх бүрт автоматаар шинэчлэгдэнэ.
  const rate = defaultRate / 100;
  const totalInterest = amount * rate * months;
  const totalAmount = Number(amount) + totalInterest;
  const monthlyPayment = totalAmount / months;

  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
          <Calculator size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">Зээлийн тооцоолуур</h3>
      </div>

      <div className="space-y-6">
        {/* Зээлийн хэмжээ */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Зээлийн хэмжээ: <span className="text-teal-700 font-bold text-lg ml-2">{Number(amount).toLocaleString()} ₮</span>
          </label>
          <input 
            type="range" 
            min="1000000" 
            max="100000000" 
            step="500000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1 сая</span>
            <span>100 сая</span>
          </div>
        </div>

        {/* Хугацаа */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Хугацаа: <span className="text-teal-700 font-bold text-lg ml-2">{months} сар</span>
          </label>
          <input 
            type="range" 
            min="3" 
            max="60" 
            step="1"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>3 сар</span>
            <span>60 сар</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Сарын төлөлт (ойролцоогоор):</p>
          <p className="text-3xl font-extrabold text-teal-700">
            {Math.round(monthlyPayment).toLocaleString()} ₮
          </p>
        </div>

        <button className="w-full py-3 bg-[#0B1221] text-white rounded-xl font-medium hover:bg-teal-800 transition-colors shadow-lg">
          Зээлийн хүсэлт илгээх
        </button>
      </div>
    </div>
  );
}
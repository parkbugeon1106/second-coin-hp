import { Search, Menu, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-[#0f172a] sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black text-blue-500 tracking-tighter">COIN-LIVE</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition">시장</a>
            <a href="#" className="hover:text-white transition">거래소</a>
            <a href="#" className="hover:text-white transition">커뮤니티</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
            <input 
              className="bg-[#1e293b] border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="코인명 또는 심볼 검색"
            />
          </div>
          <Bell className="w-6 h-6 text-slate-400 cursor-pointer" />
          <Menu className="w-6 h-6 md:hidden" />
        </div>
      </div>
    </nav>
  );
}

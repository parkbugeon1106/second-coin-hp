import React from 'react';

export default function CoinTable() {
  const coins = [
    { id: 1, name: 'Bitcoin', ticker: 'BTC', price: '92,431,000', change: '+1.24%', cap: '1,800T' },
    { id: 2, name: 'Ethereum', ticker: 'ETH', price: '4,521,000', change: '-0.45%', cap: '500T' },
    { id: 3, name: 'Solana', ticker: 'SOL', price: '214,500', change: '+5.67%', cap: '90T' },
    { id: 4, name: 'Ripple', ticker: 'XRP', price: '890', change: '+0.12%', cap: '40T' },
  ];

  return (
    <div className="bg-[#1e293b] rounded-xl border border-slate-700 overflow-hidden">
      <div className="p-4 border-b border-slate-700 flex justify-between items-center">
        <h2 className="font-bold">인기 코인</h2>
        <button className="text-xs text-blue-400">전체보기</button>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="text-slate-500 bg-slate-800/50">
          <tr>
            <th className="p-4 font-medium">자산</th>
            <th className="p-4 font-medium text-right">가격</th>
            <th className="p-4 font-medium text-right">변동</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700 font-mono">
          {coins.map((coin) => (
            <tr key={coin.ticker} className="hover:bg-slate-800/40 cursor-pointer transition">
              <td className="p-4">
                <div className="flex flex-col">
                  <span className="font-bold text-white uppercase">{coin.ticker}</span>
                  <span className="text-[10px] text-slate-500">{coin.name}</span>
                </div>
              </td>
              <td className="p-4 text-right">{coin.price}</td>
              <td className={`p-4 text-right font-bold ${coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {coin.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

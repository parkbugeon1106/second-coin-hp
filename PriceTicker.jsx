export default function PriceTicker() {
  const topCoins = [
    { name: 'BTC', price: '92,431,000', change: '+1.24%' },
    { name: 'ETH', price: '4,521,000', change: '-0.45%' },
    { name: 'SOL', price: '214,500', change: '+5.67%' },
    { name: 'XRP', price: '890', change: '+0.12%' },
  ];

  return (
    <div className="bg-[#1e293b] border-b border-slate-800 py-2 overflow-x-auto no-scrollbar">
      <div className="flex gap-8 px-4 whitespace-nowrap">
        {topCoins.map((coin) => (
          <div key={coin.name} className="flex items-center gap-2 text-sm font-mono">
            <span className="font-bold">{coin.name}</span>
            <span className="text-slate-300">{coin.price}</span>
            <span className={coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

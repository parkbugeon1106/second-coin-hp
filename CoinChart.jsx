import React, { useEffect, useRef } from 'react';

export default function CoinChart() {
  return (
    <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-700 h-[450px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold italic">BTC/KRW</h2>
          <span className="text-green-500 font-mono text-xl font-bold">92,431,000</span>
          <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-sm">+1.24%</span>
        </div>
      </div>
      
      {/* 차트 영역 (실제 라이브러리 연동 시 컨테이너) */}
      <div className="w-full h-[350px] bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 border-dashed">
        <p className="text-slate-500 text-sm italic">
          [TradingView Chart Widget Area]
          <br />
          (캔들스틱 및 지표 렌더링 영역)
        </p>
      </div>
    </div>
  );
}

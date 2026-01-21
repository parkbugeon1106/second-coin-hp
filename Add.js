import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PriceTicker from './components/PriceTicker';
import CoinTable from './components/CoinTable';
import CoinChart from './components/CoinChart';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <Navbar />
      <PriceTicker />
      
      <main className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 왼쪽: 차트 및 상세 정보 */}
        <div className="lg:col-span-2 space-y-6">
          <CoinChart />
          <div className="bg-[#1e293b] p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold mb-4">실시간 뉴스 & 트윗</h3>
            <div className="space-y-4 opacity-70">
              <p>• [공시] 비트코인 현물 ETF 유입세 가속화...</p>
              <p>• 이더리움 덴쿤 업그레이드 이후 수수료 절감 효과...</p>
            </div>
          </div>
        </div>

        {/* 오른쪽: 시세 리스트 */}
        <div className="lg:col-span-1">
          <CoinTable />
        </div>
      </main>
    </div>
  );
}

export default App;

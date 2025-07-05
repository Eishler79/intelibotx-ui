
import React, { useState } from "react";

function SmartTrade() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [amount, setAmount] = useState(20);
  const [takeProfit, setTakeProfit] = useState(1.0);
  const [stopLoss, setStopLoss] = useState(1.0);
  const [orderType, setOrderType] = useState("LONG");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      symbol,
      amount,
      takeProfit,
      stopLoss,
      orderType,
    };
    console.log("SmartTrade ejecutado:", payload);
    alert("SmartTrade enviado al backend (simulado)");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ejecutar SmartTrade</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-muted p-4 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium mb-1">Par:</label>
          <select value={symbol} onChange={(e) => setSymbol(e.target.value)} className="w-full p-2 rounded">
            <option value="BTCUSDT">BTC/USDT</option>
            <option value="ETHUSDT">ETH/USDT</option>
            <option value="USDT">USDT (estable)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Monto (USDT):</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Take Profit (%):</label>
          <input type="number" value={takeProfit} onChange={(e) => setTakeProfit(e.target.value)} className="w-full p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Stop Loss (%):</label>
          <input type="number" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} className="w-full p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tipo de orden:</label>
          <select value={orderType} onChange={(e) => setOrderType(e.target.value)} className="w-full p-2 rounded">
            <option value="LONG">LONG</option>
            <option value="SHORT">SHORT</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ejecutar SmartTrade
        </button>
      </form>
    </div>
  );
}

export default SmartTrade;

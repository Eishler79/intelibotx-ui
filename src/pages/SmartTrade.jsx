// src/pages/SmartTrade.jsx
import React, { useState } from "react";

function SmartTrade() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [amount, setAmount] = useState(20);
  const [takeProfit, setTakeProfit] = useState(1.0);
  const [stopLoss, setStopLoss] = useState(1.0);
  const [orderType, setOrderType] = useState("LONG");

  const handleSubmit = async (e) => {
    console.log("Backend:", import.meta.env.VITE_API_BASE_URL);
    e.preventDefault();
    const payload = {
      symbol,
      amount,
      takeProfit,
      stopLoss,
      orderType,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/run-smart-trade/${symbol}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
     });

      const data = await response.json();
      console.log("Respuesta del backend:", data);
      alert("Orden enviada correctamente");
    } catch (error) {
      console.error("Error al enviar la orden:", error);
      alert("Error al conectar con el backend");
    }
};

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Ejecutar SmartTrade
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-gray-700 dark:text-gray-200"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Par:</label>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            <option value="BTCUSDT">BTC/USDT</option>
            <option value="ETHUSDT">ETH/USDT</option>
            <option value="USDT">USDT (estable)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Monto (USDT):
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Take Profit (%):
          </label>
          <input
            type="number"
            value={takeProfit}
            onChange={(e) => setTakeProfit(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Stop Loss (%):
          </label>
          <input
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tipo de orden:
          </label>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            <option value="LONG">LONG</option>
            <option value="SHORT">SHORT</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          Ejecutar SmartTrade
        </button>
      </form>
    </div>
  );
}

export default SmartTrade;
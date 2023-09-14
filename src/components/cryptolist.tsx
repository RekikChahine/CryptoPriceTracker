//import React, { useEffect, useState } from 'react';
import '../App.css'; // Embedded CSS

// Custom List Component
interface CryptoListProps {
    cryptoData: Array<{
      id: number;
      name: string;
      symbol: string;
      current_price: number;
      market_cap: number;
    }>;
  }
function CryptoList({ cryptoData }: CryptoListProps) {
  return (
    <div className="crypto-list">
      <h2>Cryptocurrency Prices</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>${crypto.current_price.toFixed(2)}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CryptoList;
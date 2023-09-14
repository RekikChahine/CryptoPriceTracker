import { useEffect, useState } from 'react';
import './App.css'; // Embedded CSS
import CryptoList from './components/cryptolist'

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cryptocurrency data from CoinGecko API
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false')
      .then((response) => response.json())
      .then((data) => {
        setCryptoData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <CryptoList cryptoData={cryptoData} />
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
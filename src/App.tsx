import { useEffect, useState } from 'react';
import './App.css'; // Embedded CSS
import CryptoList from './components/cryptolist'
import NavBar from './components/navbar';

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
    <>
    <NavBar/>
    <br/>
    <br/>
    <br/>
    
    <div className="App text-center font-sans p-4">
      {/* <BasicTable cryptoData={cryptoData}/>
      {loading && <p>Loading...</p>} */}
      <CryptoList cryptoData={cryptoData} />
      {loading && <p>Loading...</p>}
    </div>

    </>

  );
}

export default App;
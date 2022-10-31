import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);
  const onChange = event => {
    setCost(event.target.value);
    setNeed(1);
  };
  const handleInput = event => {
    setNeed(event.target.value);
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coin Tracker {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin!</option>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h2>Please enter the amount.</h2>
      <div>
        <span>$ </span>
        <input
          type='number'
          value={need}
          onChange={handleInput}
          placeholder='Enter the USD'
        />
      </div>
      <h2>You can get {need / cost} coin.</h2>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css'

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [serviceQuality, setServiceQuality] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);

  const calculateTip = () => {
    const tip = (billAmount * (serviceQuality / 100)) / numberOfPeople;
    setTipAmount(tip.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <div className="input-group">
        <label htmlFor="billAmount">Bill Amount:</label>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={(e) => setBillAmount(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="serviceQuality">Service Quality (1-5):</label>
        <input
          type="number"
          id="serviceQuality"
          min="1"
          max="5"
          value={serviceQuality}
          onChange={(e) => setServiceQuality(parseInt(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          type="number"
          id="numberOfPeople"
          min="1"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
        />
      </div>
      <button onClick={calculateTip}>Calculate Tip</button>
      {tipAmount > 0 && <p>Tip per person: ${tipAmount}</p>}
    </div>
  );
}

export default App;

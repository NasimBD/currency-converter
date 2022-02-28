import React from 'react';
import './App.css';
import {useEffect, useState} from 'react'; 
import FormGroup from './Form/FormGroup';

function App() {
  const API_URL = "http://api.exchangeratesapi.io/v1/latest";
  // Please replace this API key with yours:
  const ACCESS_KEY = "78u9baa89809a56b44dc9870764bf525";
  
  const [baseVal, setBaseVal] = useState(1);
  const [baseSymbol, setBaseSymbol] = useState('EUR');
  const [targetVal, setTargetVal] = useState('');
  const [targetSymbol, setTargetSymbol] = useState("USD");
  const [symbolsArr, setSymbolsArr] = useState([]);
  const [exchangeRate, setExchangeRate] = useState();

  useEffect(() => {
    fetchData();
  }, [])
  

  useEffect(() => {
    fetch(API_URL + `?access_key=${ACCESS_KEY}&base=${baseSymbol}&symbol=${targetSymbol}`)
    .then(res => res.json())
    .then(data => {
          setExchangeRate(data.rates[targetSymbol]);
          setTargetVal(baseVal * data.rates[targetSymbol])
    });
  }, [baseSymbol, targetSymbol])
  

  const fetchData = () => {
    fetch(API_URL + `?access_key=${ACCESS_KEY}&base=${baseSymbol}`)
    .then(res => res.json())
    .then(data => {
      setSymbolsArr(Object.keys(data.rates));
      setExchangeRate(data.rates["USD"]);
      setTargetVal(baseVal * data.rates["USD"])
    });
  }

  const handleBaseVal = (e) => {
    setBaseVal(() => 
    { 
      const newBaseVal = e.target.value;
      setTargetVal(newBaseVal * exchangeRate);
      return newBaseVal;
    });
  }

  const handleBaseSymbol = (e) => {
    setBaseSymbol(e.target.value);
  }

  const handleTargetVal = (e) => {
    setTargetVal(() => {
      const newTargetVal = e.target.value;
      setBaseVal(newTargetVal / exchangeRate);
      return newTargetVal;
    });
  }

  const handleTargetSymbol = (e) => {
    setTargetSymbol(e.target.value);
  }

  return (
    <div className="container">
      <p><em>Note:</em>It is necessary to get an API key from <a href="https://exchangeratesapi.io/">here</a> and enter it in App.js. This app uses a free API plan and the default base currency is limited to <strong>EUR</strong>. If you use a paid plan, you have access to all base currencies. So, please change the 'disabled' attribute in the App.js to false.</p>
      <FormGroup
        value={baseVal}
        onChangeVal={handleBaseVal}
        onChangeCurrency={handleBaseSymbol}
        symbols={symbolsArr}
        defaultSymbol={baseSymbol}
        disabled = {true}
      />

      <FormGroup
        value={targetVal}
        onChangeVal={handleTargetVal}
        onChangeCurrency={handleTargetSymbol}
        symbols={symbolsArr}
        defaultSymbol={targetSymbol}
        />
    </div>
  );
}

export default App;

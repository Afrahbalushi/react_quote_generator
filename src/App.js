import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import './App.css';

const App = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuoteData(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="container">
      <h1>Quote Generator</h1>
      {quoteData && <Quote quote={quoteData.content} author={quoteData.author} />}
      <button onClick={fetchQuote}>Get Random Quote</button>
    </div>
  );
};

export default App;






// QuotePage.js
import './quotesPage.scss'
import  { useState } from 'react';
import quotesData from "../../quotes.jsx" 

const QuotesPage = () => {
    const [quotes, setQuotes] = useState(quotesData);
    const [selectedQuote, setSelectedQuote] = useState(quotes[0].body); // Set initial value to 'Quote 1'
  
    const getRandomQuote = () => {
      const currentIndex = quotes.findIndex((quote) => quote.body === selectedQuote);
      const nextIndex = (currentIndex + 1) % quotes.length;
      setSelectedQuote(quotes[nextIndex].body);
    };

  return (
    <div className='quotesPage'>
      <div onClick={() => getRandomQuote()} className="quoteContainer">
        <p>{selectedQuote}</p>
      </div>
    </div>
  );
};

export default QuotesPage;
